"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-precision smooth spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      const clickableEl = target.closest("button, a, [role='button'], input, select, textarea");

      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("text");
      } else if (clickableEl) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "text" ? 84 : cursorVariant === "hover" ? 48 : 28,
          height: cursorVariant === "text" ? 84 : cursorVariant === "hover" ? 48 : 28,
          backgroundColor:
            cursorVariant === "text"
              ? "rgba(105, 116, 75, 0.92)"
              : cursorVariant === "hover"
              ? "rgba(215, 108, 63, 0.25)"
              : "rgba(105, 116, 75, 0.12)",
          borderColor:
            cursorVariant === "text"
              ? "#69744B"
              : cursorVariant === "hover"
              ? "#D76C3F"
              : "rgba(105, 116, 75, 0.4)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="rounded-full border backdrop-blur-[2px] flex items-center justify-center text-center shadow-lg"
      >
        {cursorText && (
          <span className="text-[10px] font-display font-bold tracking-widest text-cream uppercase px-1 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Laser Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "text" ? 0 : cursorVariant === "hover" ? 1.4 : 1,
          backgroundColor: cursorVariant === "hover" ? "#D76C3F" : "#69744B",
        }}
        className="w-1.5 h-1.5 rounded-full"
      />
    </div>
  );
}
