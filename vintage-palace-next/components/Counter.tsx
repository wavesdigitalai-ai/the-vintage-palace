"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const inr = (n: number) => n.toLocaleString("en-IN");

export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const raf = requestAnimationFrame(() => setN(value));
      return () => cancelAnimationFrame(raf);
    }
    const controls = animate(0, value, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {inr(n)}
      {suffix}
    </span>
  );
}
