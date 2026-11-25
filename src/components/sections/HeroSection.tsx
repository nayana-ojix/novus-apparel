"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import CurvedTextBadge from "@/components/motion/CurvedTextBadge";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[720px] max-h-[1200px] w-full flex flex-col justify-between overflow-hidden bg-cream"
    >
      {/* ========================================================
          FULL-SCREEN CINEMATIC VIDEO BACKGROUND LAYER
          ======================================================== */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="/images/editorial/hero-fashion.jpg"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-95"
        >
          <source src="/videos/hero-textile.webm" type="video/webm" />
          <source
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/The_Weaving_Process.webm"
            type="video/webm"
          />
        </video>

        {/* Brand-Accurate Cinematic Gradient Overlays (Cream & Sand Dominant, Charcoal Contrast) */}
        {/* Soft Warm Sand Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/40 z-[1]" />
        {/* Editorial Side Tint for Typographic Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/70 to-cream/30 z-[1]" />
        {/* Subtle Warm Amber/Sand Grading */}
        <div className="absolute inset-0 bg-sand/20 mix-blend-multiply z-[1] pointer-events-none" />
      </motion.div>

      {/* ========================================================
          HERO CONTENT LAYER (Kinetic Typography & Storytelling)
          ======================================================== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full flex-1 flex flex-col justify-between max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-8"
      >
        {/* Top Eyebrow / Rotating Heritage Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Group Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-sand/80 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-charcoal shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-burnt animate-pulse" />
            <span className="font-semibold text-charcoal">SRI DHANALAKSHMI GROUP</span>
            <span className="text-charcoal/40">•</span>
            <span className="text-charcoal/80 font-medium">EST. 1971</span>
          </motion.div>

          {/* Rotating Curved Awwwards Stamp Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden sm:block"
          >
            <CurvedTextBadge
              text="FROM THREAD TO POSSIBILITY • SRI DHANALAKSHMI GROUP EST 1971 • "
              size={110}
              className="text-charcoal/80 hover:text-burnt transition-colors cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Central Monumental Kinetic Headline */}
        <div className="my-auto py-6 max-w-5xl space-y-4 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold block mb-2">
              <KineticText type="chars" delay={0.2} stagger={0.03}>
                CREATIVE DIRECTION // FROM THREAD TO POSSIBILITY
              </KineticText>
            </span>

            {/* Headline Line 1 */}
            <h1 className="font-display font-bold uppercase tracking-tight text-charcoal leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem]">
              <span className="block overflow-hidden">
                <KineticText type="words" delay={0.3} duration={0.9} stagger={0.06}>
                  WE DON&apos;T JUST MAKE CLOTHES.
                </KineticText>
              </span>
              {/* Headline Line 2 */}
              <span className="block overflow-hidden mt-1 sm:mt-2 text-burnt">
                <KineticText type="words" delay={0.55} duration={0.9} stagger={0.06}>
                  WE MAKE
                </KineticText>{" "}
                <span className="text-olive underline decoration-sand-dark decoration-2 underline-offset-8">
                  <KineticText type="words" delay={0.7} duration={0.9} stagger={0.06}>
                    POSSIBILITIES.
                  </KineticText>
                </span>
              </span>
            </h1>
          </div>

          {/* Supporting Editorial Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-base sm:text-lg lg:text-xl text-charcoal/85 max-w-2xl font-light leading-relaxed pt-1"
          >
            Apparel expertise, material innovation and manufacturing partnerships brought together.
          </motion.p>

          {/* Clear Primary Actions with Magnetic Spring Physics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-3"
          >
            <MagneticButton dataCursor="EXPLORE">
              <a
                href="#story"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-cream hover:bg-olive transition-all duration-300 font-display text-xs uppercase tracking-wider font-semibold shadow-md group"
              >
                <span>Explore NOVUS</span>
                <ArrowDown className="w-3.5 h-3.5 text-burnt-light transition-transform group-hover:translate-y-1" />
              </a>
            </MagneticButton>

            <MagneticButton dataCursor="VIEW">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-cream/90 backdrop-blur-md hover:bg-cream text-charcoal border border-sand-dark transition-all duration-300 font-display text-xs uppercase tracking-wider font-semibold shadow-sm group"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-burnt transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-olive hover:text-burnt transition-colors ml-2 font-bold"
            >
              <Layers className="w-3.5 h-3.5 text-burnt" />
              <span>Partner Network</span>
              <span className="text-charcoal/40">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar: Video HUD Controls & Scroll Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-sand/60 text-charcoal/70">
          {/* Video Control HUD */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-cream/80 hover:bg-cream border border-sand text-charcoal transition-colors flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider"
              aria-label={isPlaying ? "Pause cinematic footage" : "Play cinematic footage"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-burnt" /> : <Play className="w-3.5 h-3.5 text-olive" />}
              <span className="hidden sm:inline">{isPlaying ? "Pause Video" : "Play Video"}</span>
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-cream/80 hover:bg-cream border border-sand text-charcoal transition-colors"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-charcoal/60" /> : <Volume2 className="w-3.5 h-3.5 text-olive" />}
            </button>

            <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 hidden md:inline">
              LIVE CINEMATIC FOOTAGE // TEXTILE MOTION
            </span>
          </div>

          {/* Three Core Pillars */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono uppercase tracking-wider text-charcoal/60">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span>SHIRTS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burnt" />
              <span>BOTTOMS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              <span>ACTIVEWEAR</span>
            </span>
          </div>

          {/* Scroll Prompt */}
          <MagneticButton>
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-charcoal hover:text-burnt transition-colors group font-semibold"
            >
              <span>SCROLL TO DISCOVER</span>
              <ArrowDown className="w-3.5 h-3.5 text-burnt transition-transform group-hover:translate-y-1" />
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
