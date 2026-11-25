"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MARQUEE_ITEMS = [
  "NOVUS APPAREL LIMITED",
  "SRI DHANALAKSHMI GROUP · EST. 1971",
  "100% CAPTIVE WIND ENERGY",
  "DESIGN TO END PRODUCT",
  "RENAISSANCE™ TECHNOLOGY",
  "ZERO LIQUID DISCHARGE",
  "INDIA · USA · CHINA",
  "MAKE A DIFFERENCE",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-5 bg-olive overflow-hidden relative">
      {/* Row 1: Left to right */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={`r1-${i}`} className="inline-flex items-center gap-4 mx-6">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt" />
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-cream/80">
              {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
