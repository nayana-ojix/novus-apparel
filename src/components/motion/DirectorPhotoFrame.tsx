"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, ShieldCheck } from "lucide-react";

interface DirectorPhotoFrameProps {
  image: string;
  name: string;
  role: string;
  qualification: string;
  stampText: string;
  accentColor?: "cobalt" | "tangerine";
}

export default function DirectorPhotoFrame({
  image,
  name,
  role,
  qualification,
  stampText,
  accentColor = "cobalt",
}: DirectorPhotoFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  const glowGradient =
    accentColor === "cobalt"
      ? "from-cobalt via-tangerine to-emerald"
      : "from-tangerine via-lime to-cobalt";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 w-44 sm:w-52 h-60 sm:h-64 group"
    >
      {/* 1. Animated Kinetic Aura Halo (Continuous Conic Glow) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          rotate: { duration: 12, ease: "linear", repeat: Infinity },
          scale: { duration: 0.4 },
        }}
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${glowGradient} opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* 2. Rotating Conic Border Outline Frame */}
      <div className="absolute -inset-[2px] rounded-3xl overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className={`w-[200%] h-[200%] -top-1/2 -left-1/2 absolute bg-gradient-to-br ${glowGradient} opacity-75`}
        />
      </div>

      {/* 3. Photo Inner Canvas */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-ivory border-2 border-white shadow-2xl z-10">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-110 filter brightness-105" : "scale-100"
          }`}
          sizes="(max-width: 640px) 176px, 208px"
        />

        {/* Subtle Luxury Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

        {/* 4. Fine Architectural Corner Reticles (Museum Framing) */}
        <div className="absolute inset-2 pointer-events-none z-20">
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/80 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lime" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/80 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lime" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/80 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lime" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/80 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lime" />
        </div>

        {/* 5. Bottom Floating Live Executive Pill Beacon */}
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <motion.div
            animate={{ y: isHovered ? -3 : 0 }}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-ink-900/85 backdrop-blur-md border border-white/20 text-white shadow-lg"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase">
                FOUNDER
              </span>
            </div>
            <span className="text-[9px] font-mono text-lime font-bold">
              {qualification}
            </span>
          </motion.div>
        </div>

        {/* Specular Interactive Sheen Sweep on Hover */}
        {isHovered && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none z-30"
          />
        )}
      </div>

      {/* 6. Rotating Kinetic Director Emblem Stamp (Top-Right Floating) */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute -top-4 -right-4 z-40 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-2xl border border-ivory-border flex items-center justify-center p-1"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <svg className="w-full h-full text-ink-900 animate-spin-slow" viewBox="0 0 100 100">
            <path
              id={`stampPath-${name.replace(/\s+/g, "")}`}
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              fill="none"
            />
            <text fontSize="8.5" fontWeight="900" letterSpacing="0.14em" fill="#0D0F14">
              <textPath href={`#stampPath-${name.replace(/\s+/g, "")}`}>
                {stampText}
              </textPath>
            </text>
          </svg>
          <div
            className={`absolute w-7 h-7 rounded-full flex items-center justify-center text-white shadow-md ${
              accentColor === "cobalt" ? "bg-cobalt" : "bg-tangerine"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
