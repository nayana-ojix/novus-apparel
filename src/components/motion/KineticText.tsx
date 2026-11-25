"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface KineticTextProps {
  children: string;
  className?: string;
  type?: "words" | "chars" | "mask";
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function KineticText({
  children,
  className = "",
  type = "words",
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
}: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  if (type === "mask") {
    return (
      <span ref={ref} className={`overflow-hidden inline-block ${className}`}>
        <motion.span
          initial={{ y: "110%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
          transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </span>
    );
  }

  if (type === "chars") {
    const chars = children.split("");
    return (
      <span ref={ref} className={`inline-block ${className}`}>
        {chars.map((char, i) => (
          <span key={i} className="overflow-hidden inline-block align-bottom">
            <motion.span
              initial={{ y: "115%", rotateZ: 5, opacity: 0 }}
              animate={
                isInView
                  ? { y: "0%", rotateZ: 0, opacity: 1 }
                  : { y: "115%", rotateZ: 5, opacity: 0 }
              }
              transition={{
                duration,
                delay: delay + i * (stagger * 0.5),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Default: Words
  const words = children.split(" ");
  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block align-bottom mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: "115%", rotateX: -25, opacity: 0 }}
            animate={
              isInView
                ? { y: "0%", rotateX: 0, opacity: 1 }
                : { y: "115%", rotateX: -25, opacity: 0 }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
