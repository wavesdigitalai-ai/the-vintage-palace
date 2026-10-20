"use client";

import { useEffect } from "react";

/* One motion engine for the whole site — the Next twin of
   the static site's assets/js/main.js. Header/drawer and the
   gallery live in their own React components; this handles
   progress, line-masked titles, reveals, parallax, counters. */
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const progress = document.querySelector<HTMLElement>(".progress");
    const onScroll = () => {
      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = "scaleX(" + (h > 0 ? window.scrollY / h : 0) + ")";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    document.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
      if (el.dataset.linesDone) return;
      el.dataset.linesDone = "1";
      const words = (el.textContent || "").trim().split(/\s+/);
      const perLine = Math.max(2, Math.ceil(words.length / Math.min(3, Math.ceil(words.length / 4))));
      const lines: string[] = [];
      for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
      el.innerHTML = lines
        .map((l, i) => `<span class="line"><i style="--l:${i}">${l}</i></span>`)
        .join("");
    });

    const rvEls = [...document.querySelectorAll<HTMLElement>(".rv")];
    if (reduce || !("IntersectionObserver" in window)) {
      rvEls.forEach((el) => el.classList.add("on"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("on");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -7% 0px" }
      );
      rvEls.forEach((el) => io.observe(el));
    }

    const pxEls = [...document.querySelectorAll<HTMLElement>("[data-parallax]")].map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax || "") || 0.14,
    }));
    if (pxEls.length && !reduce) {
      const parallax = () => {
        const vh = window.innerHeight;
        pxEls.forEach(({ el, speed }) => {
          const r = (el.parentElement as HTMLElement).getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const mid = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = "translate3d(0," + (mid * speed * 100).toFixed(2) + "%,0)";
        });
      };
      let ticking = false;
      const rafScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            parallax();
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", rafScroll, { passive: true });
      parallax();
    }

    const counters = [...document.querySelectorAll<HTMLElement>("[data-count]")];
    if (counters.length) {
      const fmt = (n: number) => n.toLocaleString("en-IN");
      const run = (el: HTMLElement) => {
        const to = parseInt(el.dataset.count || "0", 10) || 0;
        const suffix = el.dataset.suffix || "";
        if (reduce) {
          el.textContent = fmt(to) + suffix;
          return;
        }
        const t0 = performance.now();
        const dur = 1700;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = fmt(Math.round(to * eased)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              run(e.target as HTMLElement);
              cio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => cio.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="progress" aria-hidden="true" />;
}
