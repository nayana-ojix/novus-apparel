"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Layers,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Mail,
  GraduationCap,
  Globe2,
  Wind,
  Compass,
} from "lucide-react";

import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import {
  COMPANY_INFO,
  LEADERSHIP_PROFILES,
  GLOBAL_OFFICES,
  PRODUCT_COLLECTIONS,
  MANUFACTURING_HUBS,
  SUSTAINABILITY_PILLARS,
} from "@/data/company";

export default function HomePage() {
  const [activeArchive, setActiveArchive] = useState(0);
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <div className="relative w-full overflow-hidden bg-atelier-obsidian text-atelier-linen">
      {/* =========================================================================
          1. 2026 HERO: ASYMMETRIC SPLIT CURTAIN VIEWPORT
         ========================================================================= */}
      <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 px-6 lg:px-12 border-b border-white/10 overflow-hidden">
        {/* Subtle background ambient gradients */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-atelier-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Monumental Syne Display & Couture Italic Juxtaposition */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            {/* Super Tag */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
                <span className="w-2 h-2 rounded-full bg-atelier-gold animate-pulse" />
                <span>Sri Dhanalakshmi Group · Est. 1971 · USD $160M Scale</span>
              </div>
            </FadeIn>

            {/* Monumental Headline */}
            <div className="space-y-2">
              <h1 className="font-syne text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
                THE PHYSICAL <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-6xl sm:text-8xl xl:text-9xl">
                  poetry
                </span>{" "}
                OF <br />
                HIGH TEXTILE.
              </h1>
            </div>

            {/* Concise, Confident Editorial Introduction */}
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-gray-300 font-light max-w-xl leading-relaxed">
                We engineer tactile realities for the world’s leading luxury, lifestyle, and sporting goods brands. A vertical manufacturing powerhouse combining captive clean wind energy, air-jet weaving, and polymer physics.
              </p>
            </FadeIn>

            {/* Dual High-Impact Action CTAs */}
            <FadeIn direction="up" delay={0.35}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/products-innovation"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-atelier-champagne via-atelier-gold to-atelier-gold hover:from-white hover:to-atelier-champagne text-black text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 shadow-gold-glow"
                >
                  <span>Explore Fabric Archive</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white hover:border-atelier-gold text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md"
                >
                  <span>Consult Executive Directors</span>
                </Link>
              </div>
            </FadeIn>

            {/* Capsule Metrics Bar */}
            <FadeIn direction="up" delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-gray-500 block text-[10px] uppercase tracking-widest">
                    Group Turnover
                  </span>
                  <span className="text-2xl sm:text-3xl font-syne font-bold text-white">
                    $<AnimatedCounter value={160} suffix="M USD" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 block text-[10px] uppercase tracking-widest">
                    Captive Energy
                  </span>
                  <span className="text-2xl sm:text-3xl font-syne font-bold text-atelier-emerald">
                    <AnimatedCounter value={100} suffix="% Wind" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 block text-[10px] uppercase tracking-widest">
                    Global Network
                  </span>
                  <span className="text-2xl sm:text-3xl font-syne font-bold text-atelier-gold">
                    <AnimatedCounter value={7} suffix="+ Hubs" />
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Masked High-Fashion Editorial Imagery with Hover Zoom */}
          <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-[620px] rounded-3xl overflow-hidden border border-white/10 shadow-atelier-card bg-atelier-navy group">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=85"
              alt="Haute Couture Textile Masked Editorial"
              fill
              priority
              className="object-cover object-center filter contrast-110 brightness-85 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian via-transparent to-transparent opacity-80" />

            {/* Floating Renaissance™ Concept Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-atelier-gold block">
                    Proprietary Material Line
                  </span>
                  <h3 className="font-syne font-bold text-lg text-white mt-0.5">
                    Renaissance™ Kinetic Weaves
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Dual-core recovery filaments, micro-polyester blends, and hydrophilic moisture dispersion.
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-atelier-gold shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker: Global Manufacturing Corridor Runways */}
        <div className="mt-8 pt-4 border-t border-white/10 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-[11px] font-mono tracking-widest text-gray-400">
            <span className="text-atelier-gold font-bold">✦ BANGALORE GLOBAL HQ</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span>✦ NORTH BRUNSWICK NJ AMERICAS</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span className="text-atelier-emerald font-bold">✦ SHANGHAI R&D MATERIAL LAB</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span>✦ VIETNAM CORRIDOR</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span className="text-atelier-terracotta font-bold">✦ BANGLADESH STRUCTURED WEAVING</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span>✦ JORDAN DUTY-FREE ACCESS</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span>✦ ETHIOPIA ECO-INDUSTRIAL PARK</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span className="text-atelier-gold font-bold">✦ BANGALORE GLOBAL HQ</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span>✦ NORTH BRUNSWICK NJ AMERICAS</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
            <span className="text-atelier-emerald font-bold">✦ SHANGHAI R&D MATERIAL LAB</span>
            <span className="mx-6 text-gray-600">{"//"}</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE VERTICAL ATELIER: EDITORIAL ASYMMETRIC SPREAD
         ========================================================================= */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/10 relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                01 // THE ARCHITECTURE
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                FROM RAW COMBED COTTON TO <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                  haute couture
                </span>{" "}
                RUNWAY.
              </h2>

              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed pt-2">
                Novus Apparel Limited operates as an extensive research-and-development and global marketing atelier. Under the historic multi-discipline umbrella of the <strong className="text-white font-medium">Sri Dhanalakshmi Group (USD $160 Million turnover)</strong>, we combine deep spinning and weaving traditions with contemporary polymer physics.
              </p>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                By maintaining vertical integration across combed yarn spinning, sizing, wide-width air-jet weaving, and specialized garmenting, we eliminate supply chain blindspots for international fashion retailers.
              </p>

              {/* High-Fashion Asymmetric Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                    Vertical Pure Traceability
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    Unbroken chain of custody from raw fiber selection to final boxed garment.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-emerald block">
                    Captive Renewable Grid
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    100% wind-assisted clean energy powering vertical units across India.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-atelier-gold hover:text-white transition-colors group"
                >
                  <span>Explore Company Heritage & Group Archive</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Composition: Overlapping Sculptural Planes */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="left">
              <div className="relative h-[520px] sm:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-atelier-card bg-atelier-navy">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
                  alt="High Textile Editorial Runway Look"
                  fill
                  className="object-cover object-center filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold">
                    Corporate Motto
                  </span>
                  <p className="font-syne font-black text-2xl text-white mt-1 uppercase">
                    &ldquo;MAKE A DIFFERENCE.&rdquo;
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Guided by core values of Respect for People, Ethical Behaviour, Commitment, Sustainable Technology, and Leadership.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE FABRIC ARCHIVE: RENAISSANCE™ & TECHNICAL WEAVES
         ========================================================================= */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/10 bg-atelier-navy/40 relative">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <FadeIn direction="up">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                02 // FABRIC ARCHIVE
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                ENGINEERED MATERIAL <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                  collections
                </span>{" "}
                & PHYSICS.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl leading-relaxed">
                &ldquo;We honor customer comfort as paramount. We invite our global brand partners to co-create revolutionary applications for apparel lifestyle and sporting goods with Renaissance.&rdquo;
              </p>
            </FadeIn>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-6">
            {PRODUCT_COLLECTIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveArchive(idx)}
                className={`px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 border ${
                  activeArchive === idx
                    ? "bg-atelier-gold text-black font-bold border-atelier-gold shadow-gold-glow"
                    : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Lookbook Card */}
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-atelier-obsidian border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-atelier-card">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-atelier-gold">
                {PRODUCT_COLLECTIONS[activeArchive].category}
              </span>
              <h3 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                {PRODUCT_COLLECTIONS[activeArchive].title}
              </h3>
              <p className="text-xs font-mono text-atelier-champagne italic">
                &ldquo;{PRODUCT_COLLECTIONS[activeArchive].tagline}&rdquo;
              </p>
              <div className="w-16 h-[2px] bg-atelier-gold" />
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {PRODUCT_COLLECTIONS[activeArchive].description}
              </p>

              {/* Technical Property Badges */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                  Material Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_COLLECTIONS[activeArchive].specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-atelier-gold" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/products-innovation"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-atelier-gold hover:text-white transition-colors group"
                >
                  <span>Request Technical Swatch Book</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-black">
              <Image
                src={PRODUCT_COLLECTIONS[activeArchive].image}
                alt={PRODUCT_COLLECTIONS[activeArchive].title}
                fill
                className="object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MANUFACTURING SCULPTURE: CAPABILITIES
         ========================================================================= */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/10 relative">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn direction="up">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                03 // SCULPTURAL LOGISTICS
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] mt-2">
                AN INTEGRATED <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                  global
                </span>{" "}
                MANUFACTURING MATRIX.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed">
                Bridging specialized polymer research in Shanghai with vertical spinning in India and duty-advantaged apparel corridors across Asia and Africa.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Polymer Science & Greige R&D */}
            <FadeIn delay={0.1} className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-atelier-navy/60 border border-white/10 hover:border-atelier-emerald/50 transition-all duration-500 h-full flex flex-col justify-between space-y-6 hover:shadow-emerald-glow group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-atelier-emerald">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-emerald block">
                    China // Newwell Textiles Shanghai
                  </span>
                  <h3 className="font-syne text-2xl font-bold text-white uppercase group-hover:text-atelier-emerald transition-colors">
                    Polymer Science & Greige Formulations
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Spearheaded by Co-Founder Mohmad Noorulla through Newwell Textiles in Pudong, Shanghai. Developing specialized micro-polyester filaments, dual-core stretch yarns, and engineered bottom-weight greige.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-atelier-emerald">
                  <span>Greige & Filament Lab</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Vertical Spinning & Weaving */}
            <FadeIn delay={0.2} className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-atelier-navy/60 border border-white/10 hover:border-atelier-gold/50 transition-all duration-500 h-full flex flex-col justify-between space-y-6 hover:shadow-gold-glow group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-atelier-gold">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                    India // Sri Dhanalakshmi Mills
                  </span>
                  <h3 className="font-syne text-2xl font-bold text-white uppercase group-hover:text-atelier-champagne transition-colors">
                    Vertical Spinning & Air-Jet Weaving
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Direct integration with modern spinning and air-jet weaving mills backed by USD $160M group turnover. Powered by 100% captive wind turbines with zero compromise on tensile purity.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-atelier-gold">
                  <span>100% Wind-Assisted</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Duty-Advantaged Corridors */}
            <FadeIn delay={0.3} className="h-full">
              <div className="p-8 sm:p-10 rounded-3xl bg-atelier-navy/60 border border-white/10 hover:border-atelier-terracotta/50 transition-all duration-500 h-full flex flex-col justify-between space-y-6 hover:shadow-terracotta-glow group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-atelier-terracotta">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-terracotta block">
                    Vietnam · Bangladesh · Jordan · Ethiopia
                  </span>
                  <h3 className="font-syne text-2xl font-bold text-white uppercase group-hover:text-atelier-terracotta transition-colors">
                    Duty-Advantaged Garmenting Hubs
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    High-volume apparel assembly across strategic international corridors. Formulated for high-volume shirting, bottom-weights, and technical activewear with duty-free access to major world markets.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-atelier-terracotta">
                  <span>7+ Sourcing Hubs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EXECUTIVE STEWARDSHIP: EXACT FOUNDER PHOTOGRAPHS PRESERVED
         ========================================================================= */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/10 bg-atelier-navy/40 relative">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <FadeIn direction="up">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                04 // EXECUTIVE STEWARDSHIP
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
                FOUNDERS & <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                  textile engineering
                </span>{" "}
                AUTHORITIES.
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
                Guided by seasoned textile technologists whose careers bridge raw polymer science with international export logistics, marketing strategy, and manufacturing leadership.
              </p>
            </FadeIn>
          </div>

          {/* Two Founders Gallery Double-Page Layout (EXACT PHOTOGRAPHS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="rounded-3xl bg-atelier-obsidian border border-white/10 hover:border-atelier-gold/40 transition-all duration-500 overflow-hidden shadow-atelier-card flex flex-col h-full group">
                  {/* Portrait Container — PRESERVING EXACT FOUNDER PHOTOGRAPH */}
                  <div className="relative h-[480px] w-full overflow-hidden bg-black">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian via-transparent to-transparent opacity-85" />
                    
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-atelier-gold tracking-widest uppercase mb-2">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{leader.qualification}</span>
                      </div>
                      <h3 className="font-syne text-2xl lg:text-3xl font-black text-white uppercase">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-mono text-atelier-champagne mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Biography & Competencies */}
                  <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {leader.bio[0]}
                    </p>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-atelier-champagne"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GLOBAL NETWORK & HUB TELEMETRY
         ========================================================================= */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 border-b border-white/10 relative">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn direction="up">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                05 // GLOBAL CORRIDORS
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] mt-2">
                COMMERCIAL HUBS & <br />
                <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-6xl lg:text-7xl">
                  manufacturing
                </span>{" "}
                PRESENCE.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed">
                Direct commercial headquarters in India, client relations in North America, and specialized fabric R&D in Shanghai.
              </p>
            </FadeIn>
          </div>

          {/* Interactive Office Hubs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Hub Selectors */}
            <div className="lg:col-span-5 space-y-3">
              {GLOBAL_OFFICES.map((office, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveOffice(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start justify-between ${
                    activeOffice === idx
                      ? "bg-white/10 border-atelier-gold shadow-gold-glow"
                      : "bg-white/5 border-white/10 hover:border-white/20 text-gray-400"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin
                        className={`w-4 h-4 ${
                          activeOffice === idx ? "text-atelier-gold" : "text-gray-500"
                        }`}
                      />
                      <span className="font-syne font-bold text-lg text-white">
                        {office.country} ({office.city})
                      </span>
                    </div>
                    <p className="text-xs font-mono text-gray-400 pl-6">
                      {office.role}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 transition-transform ${
                      activeOffice === idx ? "text-atelier-gold translate-x-1" : "text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Selected Office Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-atelier-navy border border-white/10 space-y-6 shadow-atelier-card">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-atelier-gold tracking-widest uppercase border border-atelier-gold/30">
                {GLOBAL_OFFICES[activeOffice].status}
              </div>
              <h3 className="font-syne text-3xl font-black text-white uppercase">
                {GLOBAL_OFFICES[activeOffice].city}, {GLOBAL_OFFICES[activeOffice].country}
              </h3>
              <p className="text-xs font-mono text-atelier-emerald">
                {GLOBAL_OFFICES[activeOffice].role}
              </p>

              <div className="border-l-2 border-atelier-gold pl-4 py-1 space-y-1 text-sm text-gray-300 font-light">
                {GLOBAL_OFFICES[activeOffice].address.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>

              {GLOBAL_OFFICES[activeOffice].phones && (
                <div className="pt-2 text-xs font-mono text-atelier-champagne">
                  <span className="text-gray-500 block text-[10px] uppercase">Direct Telephone</span>
                  <span>{GLOBAL_OFFICES[activeOffice].phones?.join(" / ")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. ATELIER SOURCING DIALOGUE (FINAL EXECUTIVE CTA)
         ========================================================================= */}
      <section className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-atelier-gold uppercase tracking-widest">
              <span>06 // EXECUTIVE CONSULTATION</span>
            </div>
            
            <h2 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mt-4">
              COMMENCE YOUR <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-6xl sm:text-8xl">
                sourcing
              </span>{" "}
              DIALOGUE.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl mx-auto leading-relaxed mt-4">
              Connect directly with our executive leadership across Bangalore, Shanghai, and New Jersey to discuss custom fabric engineering, bulk manufacturing programs, and international supply-chain solutions.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-atelier-champagne via-atelier-gold to-atelier-gold hover:from-white hover:to-atelier-champagne text-black text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 shadow-gold-glow"
              >
                <span>Initiate Sourcing Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:chaand@novusapparels.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-atelier-gold bg-white/5 text-atelier-champagne text-xs uppercase tracking-wider font-mono transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>chaand@novusapparels.com</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
