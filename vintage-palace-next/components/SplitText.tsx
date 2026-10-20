"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SplitText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          style={reduce ? undefined : { transformOrigin: "50% 100%" }}
          variants={
            reduce
              ? {}
              : {
                  hide: { opacity: 0, y: "1.1em", rotate: 2 },
                  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }
          }
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
