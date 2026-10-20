"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GALLERY_FILTERS, GALLERY_ITEMS, type GalCat, type Ph } from "@/lib/venue";
import { Ph as PhTile } from "./Ph";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalCat | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => GALLERY_ITEMS.filter((g) => filter === "all" || g.cat === filter),
    [filter]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  useEffect(() => {
    document.documentElement.style.overflow = open !== null ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter gallery">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`cursor-pointer rounded-full border px-6 py-2.5 text-[0.8rem] uppercase tracking-[0.16em] transition-all duration-300 ${
              filter === f.key
                ? "border-wine bg-wine text-ivory"
                : "border-ink/15 text-ink-soft hover:border-gold hover:text-wine"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:auto-rows-[160px] lg:grid-cols-4 lg:auto-rows-[190px]">
        <AnimatePresence mode="popLayout">
          {visible.map((g, i) => {
            const media =
              g.kind === "photo" ? (
                <Image
                  src="/images/venue-hero.jpg"
                  alt={g.cap}
                  fill
                  sizes="(min-width: 1100px) 25vw, 50vw"
                  className="scale-105 object-cover transition-transform duration-1000 ease-[cubic-bezier(.62,.05,.18,1)] group-hover:scale-[1.12]"
                />
              ) : (
                <PhTile kind={g.kind as Ph} label={g.cap} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-[1.06]" />
              );
            return (
              <motion.figure
                layout
                key={g.cap}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`group ${g.span ? "row-span-2" : ""} relative row-start-auto cursor-zoom-in overflow-hidden rounded-[14px] ${
                  g.kind === "photo" ? "aspect-[4/3] lg:aspect-auto" : ""
                }`}
                onClick={() => setOpen(i)}
              >
                {media}
                <span className="absolute inset-0 bg-gradient-to-t from-[rgba(24,12,14,.78)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-4 pb-3 text-[0.78rem] uppercase tracking-[0.16em] text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {g.cap}
                </span>
              </motion.figure>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1500] grid place-items-center bg-[rgba(24,12,14,.94)] p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
          >
            <motion.figure
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-[min(960px,92vw)]"
              onClick={(e) => e.stopPropagation()}
            >
              {visible[open] && (
                <div className="relative mx-auto h-[min(74vh,700px)] w-[min(960px,92vw)]">
                  {visible[open].kind === "photo" ? (
                    <Image
                      src="/images/venue-hero.jpg"
                      alt={visible[open].cap}
                      fill
                      sizes="92vw"
                      className="rounded-xl object-contain"
                    />
                  ) : (
                    <PhTile
                      kind={visible[open].kind as Ph}
                      label={visible[open].cap}
                      className="rounded-xl"
                    />
                  )}
                </div>
              )}
              <figcaption className="mt-4 text-center text-[0.82rem] uppercase tracking-[0.2em] text-ivory/80">
                {visible[open]?.cap}
              </figcaption>
            </motion.figure>
            <div className="absolute inset-x-0 top-4 flex justify-center gap-3 text-ivory/80" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => step(-1)} aria-label="Previous" className="cursor-pointer rounded-full border border-ivory/35 px-4 py-2 text-lg transition-all hover:bg-gold hover:text-wine-deep">
                ‹
              </button>
              <button onClick={() => step(1)} aria-label="Next" className="cursor-pointer rounded-full border border-ivory/35 px-4 py-2 text-lg transition-all hover:bg-gold hover:text-wine-deep">
                ›
              </button>
            </div>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-6 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ivory/35 text-xl text-ivory transition-all hover:bg-gold hover:text-wine-deep"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
