"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  speed = 0.14,
  className,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0 scale-[1.15]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}
