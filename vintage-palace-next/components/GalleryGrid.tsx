"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY, GALLERY_FILTERS, type GalCat } from "@/lib/venue";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalCat | "all">("all");
  const [idx, setIdx] = useState<number | null>(null);
  const lbRef = useRef<HTMLDivElement>(null);

  const visible = GALLERY.map((g, i) => ({ g, i })).filter(({ g }) => filter === "all" || g.cat === filter);
  const current = idx !== null ? visible[Math.min(idx, visible.length - 1)] : null;

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) => {
      setIdx((pv) => {
        if (pv === null) return pv;
        const n = visible.length;
        return ((pv + d) % n + n) % n;
      });
    },
    [visible.length]
  );

  const isOpen = current !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, close, step]);

  return (
    <>
      <div className="gal-filters" role="group" aria-label="Filter photographs">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f.key}
            className="chip"
            data-filter={f.key}
            aria-pressed={filter === f.key}
            onClick={() => {
              setFilter(f.key);
              setIdx(null);
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gal-grid">
        {GALLERY.map((g, i) =>
          filter === "all" || g.cat === filter ? (
            <button key={g.src + i} className={`gal-item${g.wide ? " wide" : ""}`} type="button" data-cat={g.cat} data-cap={g.cap} onClick={() => setIdx(visible.findIndex((v) => v.i === i))}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>{g.cap}</figcaption>
            </button>
          ) : null
        )}
      </div>

      <div ref={lbRef} className={`lightbox${current ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(e) => e.target === lbRef.current && close()}>
        <figure>
          {current && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={current.g.src} alt={current.g.alt} />
              <figcaption>{current.g.cap}</figcaption>
            </>
          )}
        </figure>
        <button className="lb-btn lb-close" aria-label="Close" onClick={close}>✕</button>
        <button className="lb-nav lb-prev" aria-label="Previous" onClick={() => step(-1)}>‹</button>
        <button className="lb-nav lb-next" aria-label="Next" onClick={() => step(1)}>›</button>
      </div>
    </>
  );
}
