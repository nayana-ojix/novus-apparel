"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className = "object-cover",
  containerClassName = "relative h-96 w-full overflow-hidden",
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-6%", "6%"]
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div style={{ y }} className="relative w-full h-[112%] -top-[6%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`transition-transform duration-700 hover:scale-105 ${className}`}
        />
      </motion.div>
    </div>
  );
}
