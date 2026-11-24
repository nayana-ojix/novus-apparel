"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  accentIndices?: number[];
  accentClassName?: string;
}

export default function TextReveal({
  text,
  className = "",
  tag = "h2",
  delay = 0.1,
  stagger = 0.04,
  accentIndices = [],
  accentClassName = "text-gold-gradient",
}: TextRevealProps) {
  const words = text.split(" ");
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const Component = motion[tag] as any;

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isAccent = accentIndices.includes(index);
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${isAccent ? accentClassName : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </Component>
  );
}
