/* ============================================================
   THE VINTAGE PALACE â€” motion engine
   Reveal-on-scroll Â· parallax Â· counters Â· header Â· gallery
   ============================================================ */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- header: scrolled state + progress bar ---------- */
  const head = document.querySelector(".site-head");
  const progress = document.querySelector(".progress");
  let lastY = 0;

  function onScroll() {
    const y = window.scrollY;
    if (head) head.classList.toggle("scrolled", y > 30);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    }
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile drawer ---------- */
  const burger = document.querySelector(".burger");
  if (burger && head) {
    // backdrop
    const backdrop = document.createElement("div");
    backdrop.className = "drawer-backdrop";
    head.appendChild(backdrop);
    const closeMenu = () => {
      head.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = "";
    };
    const toggleMenu = () => {
      const open = head.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
      document.documentElement.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", closeMenu);
    document.querySelectorAll(".drawer a").forEach((a, i) => {
      a.style.setProperty("--i", i);
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && head.classList.contains("menu-open")) closeMenu();
    });
  }

  /* ---------- split headings into masked lines ---------- */
  document.querySelectorAll("[data-lines]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    const perLine = Math.max(2, Math.ceil(words.length / Math.min(3, Math.ceil(words.length / 4))));
    const lines = [];
    for (let i = 0; i < words.length; i += perLine) lines.push(words.slice(i, i + perLine).join(" "));
    el.innerHTML = lines
      .map((l, i) => '<span class="line"><i style="--l:' + i + '">' + l + "</i></span>")
      .join("");
  });

  /* ---------- reveal on scroll ---------- */
  const rvEls = document.querySelectorAll(".rv");
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

  /* ---------- parallax (hero + framed media) ---------- */
  const pxEls = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    speed: parseFloat(el.dataset.parallax) || 0.14,
  }));

  function parallax() {
    if (reduce) return;
    const vh = window.innerHeight;
    pxEls.forEach(({ el, speed }) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const mid = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = "translate3d(0," + (mid * speed * 100).toFixed(2) + "%,0)";
    });
    requestAnimationFrame(() => {}); // keep rAF warm for smoother frames
  }

  if (pxEls.length) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            parallax();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
    parallax();
  }

  /* ---------- counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const fmt = (n) => n.toLocaleString("en-IN");
    const run = (el) => {
      const to = parseInt(el.dataset.count, 10) || 0;
      if (reduce) { el.textContent = fmt(to) + (el.dataset.suffix || ""); return; }
      const t0 = performance.now();
      const dur = 1700;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(Math.round(to * eased)) + (el.dataset.suffix || "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { run(e.target); cio.unobserve(e.target); }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- gallery filter + lightbox ---------- */
  const grid = document.querySelector(".gal-grid");
  if (grid) {
    const chips = document.querySelectorAll(".chip");
    const items = [...grid.querySelectorAll(".gal-item")];
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        const f = chip.dataset.filter;
        items.forEach((it) => {
          const show = f === "all" || it.dataset.cat === f;
          it.classList.toggle("hide", !show);
          if (show) {
            it.style.animation = "none";
            void it.offsetWidth;
            it.style.animation = "fadeUp .55s cubic-bezier(.19,1,.22,1) both";
          }
        });
      });
    });

    const lb = document.querySelector(".lightbox");
    const lbImg = lb.querySelector("img");
    const lbCap = lb.querySelector("figcaption");
    let current = 0;
    let visible = () => items.filter((it) => !it.classList.contains("hide"));

    function openLb(idx) {
      const list = visible();
      current = (idx + list.length) % list.length;
      const item = list[current];
      const img = item.querySelector("img");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = item.dataset.cap || "";
      lb.classList.add("open");
      document.documentElement.style.overflow = "hidden";
    }
    function closeLb() {
      lb.classList.remove("open");
      document.documentElement.style.overflow = "";
    }

    items.forEach((it, i) => {
      it.addEventListener("click", () => openLb(items.indexOf(it)));
    });
    lb.querySelector(".lb-close").addEventListener("click", closeLb);
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
    lb.querySelector(".lb-prev").addEventListener("click", () => openLb(current - 1));
    lb.querySelector(".lb-next").addEventListener("click", () => openLb(current + 1));
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") openLb(current + 1);
      if (e.key === "ArrowLeft") openLb(current - 1);
    });
  }

  /* ---------- footer year ---------- */
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
