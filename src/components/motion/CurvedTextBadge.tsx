"use client";

import { motion } from "framer-motion";

interface CurvedTextBadgeProps {
  text?: string;
  size?: number;
  className?: string;
  spinSpeed?: number; // seconds per rotation
}

export default function CurvedTextBadge({
  text = "FROM THREAD TO POSSIBILITY • SRI DHANALAKSHMI GROUP EST 1971 • ",
  size = 120,
  className = "",
  spinSpeed = 16,
}: CurvedTextBadgeProps) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: spinSpeed }}
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <defs>
          <path
            id="curved-circle-path"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>

        <text className="text-[7.5px] font-mono uppercase tracking-[0.18em] fill-current">
          <textPath xlinkHref="#curved-circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      {/* Center Icon or Core Dot */}
      <div className="absolute w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
    </div>
  );
}
