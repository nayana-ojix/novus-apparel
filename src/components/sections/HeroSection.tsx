"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Sparkles, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".hero-editorial-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headlineLines = [
    { text: "WE DON'T JUST MAKE CLOTHES.", accent: false },
    { text: "WE MAKE POSSIBILITIES.", accent: true },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 bg-cream flex flex-col justify-between overflow-hidden border-b border-sand/50"
    >
      {/* Subtle organic background ambient glow */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sand/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-olive/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[360px] h-[360px] bg-burnt/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top Eyebrow & Group Heritage Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-8 border-b border-sand/50"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sand/50 border border-sand text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-charcoal">
            <span className="w-2 h-2 rounded-full bg-burnt animate-pulse" />
            <span className="font-semibold text-charcoal">SRI DHANALAKSHMI GROUP</span>
            <span className="text-charcoal/40">•</span>
            <span className="text-charcoal/80">ESTABLISHED 1971</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-charcoal/60">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-olive" />
            <span>GLOBAL APPAREL SOLUTIONS</span>
            <span className="text-charcoal/30">•</span>
            <span>INDIA // USA // CHINA</span>
          </div>
        </motion.div>

        {/* Center Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-10 lg:py-14">
          {/* Left Column: Expressive Monumental Typography */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold block">
                CREATIVE DIRECTION // FROM THREAD TO POSSIBILITY
              </span>

              <h1 className="font-display font-bold uppercase tracking-tight text-charcoal leading-[0.94] text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
                <span className="block text-charcoal/90">
                  WE DON&apos;T JUST
                </span>
                <span className="block text-charcoal">
                  MAKE CLOTHES.
                </span>
                <span className="block text-burnt mt-1 sm:mt-2">
                  WE MAKE
                </span>
                <span className="block text-olive underline decoration-sand-dark decoration-2 underline-offset-8">
                  POSSIBILITIES.
                </span>
              </h1>
            </div>

            {/* Supporting Editorial Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-2xl font-light leading-relaxed"
            >
              Apparel expertise, material innovation and manufacturing partnerships brought together.
            </motion.p>

            {/* Clear Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-charcoal text-cream hover:bg-olive transition-all duration-300 font-display text-xs uppercase tracking-wider font-semibold shadow-sm group"
              >
                <span>Explore NOVUS</span>
                <ArrowDown className="w-3.5 h-3.5 text-burnt-light transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-sand/60 hover:bg-sand text-charcoal border border-sand transition-all duration-300 font-display text-xs uppercase tracking-wider font-semibold group"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-burnt transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-olive hover:text-burnt transition-colors ml-2 font-semibold"
              >
                <span>Partner Network</span>
                <span className="text-charcoal/40">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Authentic Editorial Textile Showcase Card */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-sand/40 border border-sand/80 shadow-sm overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-sand">
                <Image
                  src="/images/editorial/hero-fashion.jpg"
                  alt="Novus Apparel — Precision tailored garment construction"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="hero-editorial-img object-cover object-center filter contrast-[1.03] scale-105"
                />

                {/* Subtle Sand Tone Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

                {/* Micro Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-charcoal border border-cream/50 shadow-sm">
                  <span>ATELIER EDITION // 2026</span>
                </div>

                {/* Bottom Story Quote in Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream/95 backdrop-blur-md border border-sand text-charcoal shadow-sm">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-burnt font-semibold mb-1">
                    <span>THE NOVUS THREAD</span>
                    <span>01 / 05</span>
                  </div>
                  <p className="font-display text-xs text-charcoal font-medium leading-snug">
                    Transformation begins at the fiber. Engineered for human comfort and commercial durability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Elegant Scroll Indicator & Capability Badges */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-sand/50 text-charcoal/60">
          <div className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span>SHIRTS</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt" />
              <span>BOTTOMS</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              <span>ACTIVEWEAR</span>
            </span>
          </div>

          <a
            href="#story"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-charcoal/70 hover:text-burnt transition-colors group"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-burnt transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
