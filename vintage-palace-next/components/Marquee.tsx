"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { MARQUEE } from "@/lib/venue";

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...MARQUEE, ...MARQUEE].map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export function RatingBars({ rows }: { rows: readonly { src: string; w: string; display: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid gap-3.5">
      {rows.map((r) => (
        <div key={r.src} className="rbar grid grid-cols-[4.5rem,1fr,3rem] items-center gap-4 text-[0.85rem] text-ivory/80">
          <span>{r.src}</span>
          <motion.i
            style={{ ["--w" as string]: reduce ? r.w : inView ? r.w : "0%" }}
            aria-hidden="true"
          />
          <span>{r.display}</span>
        </div>
      ))}
    </div>
  );
}
