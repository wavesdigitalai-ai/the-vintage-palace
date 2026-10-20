/* ============================================================
   The Vintage Palace — interactions
   Vanilla JS. No dependencies. Smooth, reduced-motion aware.
   ============================================================ */
(() => {
  "use strict";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Header state + progress ---------- */
  const head = $(".site-head");
  const progress = $(".progress-bar");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      head && head.classList.toggle("is-scrolled", y > 40);
      if (progress) {
        const h = document.documentElement.scrollHeight - innerHeight;
        progress.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
      }
      parallaxTick(y);
      ticking = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Parallax hero ---------- */
  const parallaxImgs = $$(".hero-media img, .parallax-soft img");
  const parallaxTick = (y) => {
    if (prefersReduced || !parallaxImgs.length) return;
    parallaxImgs.forEach((img) => {
      const host = img.getBoundingClientRect();
      if (host.bottom < 0 || host.top > innerHeight) return;
      const speed = img.dataset.speed ? parseFloat(img.dataset.speed) : 0.12;
      img.style.setProperty("--parallax", `${Math.round(y * speed)}px`);
    });
  };

  /* ---------- Split words (hero headline) ---------- */
  $$(".split").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span style="--wd:${(0.08 + i * 0.07).toFixed(2)}s">${w}</span>`).join(" ");
    el.setAttribute("aria-label", words.join(" "));
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  const observeReveals = () => {
    $$(".reveal, [data-clip], .split").forEach((el) => io.observe(el));
    $$("[data-count]").forEach((el) => io.observe(el));
    $$(".rbar i").forEach((el) => io.observe(el));
  };

  /* ---------- Counters ---------- */
  const runCount = (el) => {
    const end = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (prefersReduced) { el.textContent = end.toLocaleString("en-IN") + suffix; return; }
    const dur = 1700, t0 = performance.now();
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(end * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- Rating bars ---------- */
  const setBar = (el) => { el.style.setProperty("--w", el.dataset.w || "0%"); };

  /* ---------- Mobile drawer ---------- */
  const burger = $(".burger");
  burger && burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
    document.documentElement.style.overflow = open ? "hidden" : "";
  });
  $$(".drawer a, .drawer .drawer-foot a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      burger && burger.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = "";
    }));

  /* ---------- Gallery filters ---------- */
  const chips = $$(".chip[data-filter]");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("is-active", c === chip));
    const f = chip.dataset.filter;
    $$(".gal-item").forEach((item) => {
      const show = f === "all" || item.dataset.cat === f;
      item.classList.toggle("is-hidden", !show);
      if (show && !prefersReduced) item.animate(
        [{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }],
        { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" });
    });
  }));

  /* ---------- Lightbox ---------- */
  const lb = $(".lightbox");
  if (lb) {
    const lbImg = $(".lightbox img"), lbCap = $(".lightbox figcaption");
    let srcSet = [], idx = 0;
    const collect = () => {
      srcSet = $$(".gal-item:not(.is-hidden)").map((g) => ({
        el: g,
        src: g.getAttribute("data-src") || (g.querySelector("img") ? g.querySelector("img").src : ""),
        cap: g.dataset.cap || ""
      }));
    };
    const show = (i) => {
      idx = (i + srcSet.length) % srcSet.length;
      const it = srcSet[idx];
      if (it && it.src) { lbImg.src = it.src; lbImg.style.display = ""; }
      else { lbImg.removeAttribute("src"); lbImg.style.display = "none"; }
      lbCap.textContent = it ? it.cap : "";
      lb.classList.add("open");
      document.documentElement.style.overflow = "hidden";
    };
    $$(".gal-item").forEach((g) => g.addEventListener("click", () => {
      collect();
      const pos = srcSet.findIndex((x) => x.el === g);
      show(pos >= 0 ? pos : 0);
    }));
    const close = () => { lb.classList.remove("open"); document.documentElement.style.overflow = ""; };
    $(".lightbox .lb-close") && $(".lightbox .lb-close").addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    });
    $(".lb-prev") && $(".lb-prev").addEventListener("click", () => show(idx - 1));
    $(".lb-next") && $(".lb-next").addEventListener("click", () => show(idx + 1));
  }

  /* ---------- Enquiry form → WhatsApp ---------- */
  const WHATSAPP = "919160374743";
  const form = $(".form[data-form=enquiry]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const msg =
        `*The Vintage Palace — Enquiry*%0A` +
        `Name: ${d.get("name")}%0APhone: ${d.get("phone")}%0A` +
        `Event: ${d.get("type")}%0AGuests: ${d.get("guests")}%0ADate: ${d.get("date") || "flexible"}%0A` +
        `Message: ${d.get("msg") || "—"}`;
      const ok = $(".form-ok");
      ok && ok.classList.add("show");
      form.reset();
      setTimeout(() => window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank", "noopener"), 500);
    });
  }

  /* ---------- Footer year ---------- */
  const yr = $(".js-year");
  yr && (yr.textContent = new Date().getFullYear());

  /* ---------- Kick off ---------- */
  onScroll();
  observeReveals();
})();
