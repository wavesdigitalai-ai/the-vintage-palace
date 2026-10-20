"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "zoom";

const variants: Record<Dir, { opacity: number; x?: number; y?: number; scale?: number }> = {
  up: { opacity: 0, y: 34 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  zoom: { opacity: 0, scale: 0.94 },
};

export function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={variants[dir]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
