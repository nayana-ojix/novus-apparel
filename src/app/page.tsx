"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cpu,
  Compass,
  Globe2,
  Wind,
  ChevronRight,
  Sparkles,
  Layers,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Mail,
  GraduationCap,
} from "lucide-react";

import FadeIn, { StaggerContainer } from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Badge from "@/components/ui/Badge";
import {
  COMPANY_INFO,
  LEADERSHIP_PROFILES,
  GLOBAL_OFFICES,
  PRODUCT_COLLECTIONS,
  MANUFACTURING_HUBS,
  SUSTAINABILITY_PILLARS,
} from "@/data/company";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <div className="relative w-full overflow-hidden bg-novus-navy-deepest text-novus-ivory">
      {/* =========================================================================
          1. HERO SECTION (Full-Screen Editorial with Cinematic Background & Ambient Glows)
         ========================================================================= */}
      <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 bg-novus-navy-deepest overflow-hidden">
        {/* Editorial Background Image with Multi-Tone Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=85"
            alt="Novus Apparel International Fabric and Fashion Campaign"
            fill
            priority
            className="object-cover object-center brightness-[0.28] contrast-[1.12] scale-[1.03] transition-transform duration-1000"
          />
          {/* Multi-layered atmosphere: deep navy, subtle emerald glow, and warm gold vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest via-novus-navy-deepest/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-novus-navy-deepest/95 via-novus-navy-dark/40 to-novus-navy-deepest/80" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-novus-teal/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-novus-gold/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-novus-coral/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8">
          <div className="max-w-4xl space-y-8">
            {/* Super Header Badge */}
            <FadeIn direction="down" delay={0.1}>
              <Badge variant="gold" className="shadow-gold-glow">
                Member of Sri Dhanalakshmi Group · Est. 1971 · USD $160M Turnover
              </Badge>
            </FadeIn>

            {/* Main Editorial Headline with Staggered Word Reveal */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-novus-ivory leading-[1.04]">
                ENGINEERING <br />
                <span className="italic font-light text-gold-gradient">
                  EXCELLENCE.
                </span>{" "}
                <br />
                CREATING COMFORT.
              </h1>
            </div>

            {/* Supporting Description */}
            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-novus-ivory-warm/90 font-light max-w-2xl leading-relaxed">
                A globally integrated textile engineering powerhouse. We unite advanced material science, vertical spinning and weaving, and cross-border agile manufacturing to engineer benchmark solutions for international fashion and performance apparel brands.
              </p>
            </FadeIn>

            {/* Dual Action CTAs */}
            <FadeIn direction="up" delay={0.45}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/products-innovation"
                  className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-novus-champagne via-novus-gold to-novus-gold-muted hover:from-white hover:to-novus-champagne text-novus-navy-deepest text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-gold-glow"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 border border-novus-navy-border/80 hover:border-novus-gold bg-novus-navy-dark/60 hover:bg-novus-navy-surface text-novus-ivory text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 backdrop-blur-md"
                >
                  <span>Connect With Leadership</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Quick Verified Metrics Bar at Bottom of Hero */}
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-16 sm:mt-20 pt-8 border-t border-novus-navy-border/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 bg-novus-navy-dark/40 backdrop-blur-md p-6 sm:p-8 border border-novus-navy-border/50">
              <div className="space-y-1">
                <p className="text-[11px] uppercase font-mono tracking-widest text-novus-gold-champagne">
                  Heritage Founded
                </p>
                <p className="text-3xl lg:text-4xl font-serif text-novus-ivory font-medium">
                  <AnimatedCounter value={1971} />
                </p>
                <p className="text-xs text-novus-muted">
                  Sri Dhanalakshmi Group Legacy
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase font-mono tracking-widest text-novus-teal-light">
                  Group Turnover
                </p>
                <p className="text-3xl lg:text-4xl font-serif text-novus-ivory font-medium">
                  $<AnimatedCounter value={160} suffix="M USD" />
                </p>
                <p className="text-xs text-novus-muted">
                  Aggregate Annual Turnover
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase font-mono tracking-widest text-novus-coral">
                  Global Reach
                </p>
                <p className="text-3xl lg:text-4xl font-serif text-novus-ivory font-medium">
                  <AnimatedCounter value={7} suffix="+ Nations" />
                </p>
                <p className="text-xs text-novus-muted">
                  India, USA, China, Vietnam & more
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] uppercase font-mono tracking-widest text-emerald-400">
                  Clean Energy
                </p>
                <p className="text-3xl lg:text-4xl font-serif text-novus-ivory font-medium">
                  <AnimatedCounter value={100} suffix="% Wind" />
                </p>
                <p className="text-xs text-novus-muted">
                  Captive Renewable Mills in India
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================================
          2. CORPORATE EDITORIAL SPLIT: THE VERTICAL ADVANTAGE
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-dark border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <Badge variant="teal">01 / The Enterprise</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light leading-tight mt-3">
                Where Material Science Meets Vertical Manufacturing Scale
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-novus-gold to-transparent my-4" />
              <p className="text-novus-ivory-warm/80 text-sm sm:text-base leading-relaxed font-light">
                Novus Apparel Limited operates as an extensive research-and-development and global marketing enterprise providing a complete one-stop vertical solution from concept design to the final consumer product.
              </p>
              <p className="text-novus-ivory-warm/80 text-sm sm:text-base leading-relaxed font-light">
                Operating within the historic multi-discipline umbrella of the <strong className="text-novus-ivory font-semibold">Sri Dhanalakshmi Group (USD $160 Million turnover)</strong>, Novus combines deep spinning and weaving traditions with contemporary polymer physics, high-performance finishes, and cross-border agility.
              </p>

              {/* Pillars Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-novus-navy-surface/80 border border-novus-navy-border">
                  <span className="text-[10px] font-mono text-novus-gold uppercase tracking-wider block mb-1">
                    Fiber to Garment
                  </span>
                  <p className="text-xs text-novus-ivory font-medium">
                    Complete vertical traceability from raw combed cotton to finished garment lines.
                  </p>
                </div>
                <div className="p-4 bg-novus-navy-surface/80 border border-novus-navy-border">
                  <span className="text-[10px] font-mono text-novus-teal-light uppercase tracking-wider block mb-1">
                    Clean Grid Integration
                  </span>
                  <p className="text-xs text-novus-ivory font-medium">
                    100% wind-assisted green power mitigating industrial carbon intensity.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-gold hover:text-white transition-colors group"
                >
                  <span>Explore Our Heritage & Values</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="left">
              <div className="relative h-[480px] sm:h-[540px] w-full border border-novus-navy-border overflow-hidden shadow-card-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern Haute Couture Fabric Draping"
                  fill
                  className="object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest via-transparent to-transparent opacity-80" />

                {/* Floating Credential Box */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-novus-navy-deepest/90 backdrop-blur-md border border-novus-gold/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-novus-gold">
                        Engineering Philosophy
                      </p>
                      <p className="text-xl font-serif text-novus-ivory font-medium mt-0.5">
                        &ldquo;Technology to Complement Comfort&rdquo;
                      </p>
                    </div>
                    <Sparkles className="w-6 h-6 text-novus-gold shrink-0" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE CAPABILITIES (Modern Asymmetric Grid with Rich Palette)
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-deepest border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn direction="up">
              <Badge variant="coral">02 / Manufacturing Capabilities</Badge>
              <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light mt-3 max-w-2xl leading-tight">
                An Integrated Global Supply Architecture
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm text-novus-muted max-w-md font-light leading-relaxed">
                From specialized polymer formulation in Shanghai to vertical spinning in India and specialized garment assembly in Southeast Asia and Africa.
              </p>
            </FadeIn>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability 1: Polymer & Greige Research */}
            <FadeIn delay={0.1} className="h-full">
              <div className="group h-full p-8 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-teal-vibrant/60 transition-all duration-500 flex flex-col justify-between hover:shadow-teal-glow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-novus-teal-deep/60 border border-novus-teal/40 flex items-center justify-center text-novus-teal-light">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-novus-teal-light block">
                    China · Newwell Textiles Shanghai
                  </span>
                  <h3 className="font-serif text-2xl text-novus-ivory group-hover:text-novus-teal-light transition-colors">
                    Polymer Science & Greige Research
                  </h3>
                  <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed">
                    Spearheaded by Co-Founder Mohmad Noorulla through Newwell Textiles in Pudong, Shanghai. Delivering specialized micro-polyester filaments, dual-core stretch yarns, and engineered greige fabrics.
                  </p>
                </div>
                <div className="pt-6 border-t border-novus-navy-border/60 mt-6 flex items-center justify-between text-[11px] font-mono text-novus-teal-light">
                  <span>Greige & Polymers</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>

            {/* Capability 2: Vertical Spinning & Weaving */}
            <FadeIn delay={0.2} className="h-full">
              <div className="group h-full p-8 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-gold/60 transition-all duration-500 flex flex-col justify-between hover:shadow-gold-glow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-novus-navy-surface border border-novus-gold/40 flex items-center justify-center text-novus-gold">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-novus-gold block">
                    India · Sri Dhanalakshmi Facilities
                  </span>
                  <h3 className="font-serif text-2xl text-novus-ivory group-hover:text-novus-champagne transition-colors">
                    Vertical Spinning, Sizing & Weaving
                  </h3>
                  <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed">
                    Direct integration with modern spinning and air-jet weaving mills backed by USD $160M group turnover. Powered by 100% captive wind turbines with zero compromise on tensile integrity.
                  </p>
                </div>
                <div className="pt-6 border-t border-novus-navy-border/60 mt-6 flex items-center justify-between text-[11px] font-mono text-novus-gold">
                  <span>100% Wind-Powered</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>

            {/* Capability 3: Global Garment Corridors */}
            <FadeIn delay={0.3} className="h-full">
              <div className="group h-full p-8 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-coral/60 transition-all duration-500 flex flex-col justify-between hover:shadow-coral-glow">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-novus-navy-surface border border-novus-coral/40 flex items-center justify-center text-novus-coral">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-novus-coral block">
                    Vietnam · Bangladesh · Jordan · Ethiopia
                  </span>
                  <h3 className="font-serif text-2xl text-novus-ivory group-hover:text-novus-coral transition-colors">
                    Duty-Advantaged Garmenting
                  </h3>
                  <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed">
                    High-capacity apparel assembly across strategic international corridors. Formulated for high-volume shirting, bottom-weights, and technical activewear with duty-free access to major world markets.
                  </p>
                </div>
                <div className="pt-6 border-t border-novus-navy-border/60 mt-6 flex items-center justify-between text-[11px] font-mono text-novus-coral">
                  <span>7+ Sourcing Hubs</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PRODUCT & MATERIAL INNOVATION SHOWCASE (Renaissance™ & Core Weaves)
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-dark border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <FadeIn direction="up">
              <Badge variant="gold">03 / Signature Collections</Badge>
              <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light leading-tight">
                Renaissance™ & Advanced Textile Engineering
              </h2>
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 font-light leading-relaxed">
                &ldquo;We honor customer comfort as paramount. We invite our partners to develop new applications for apparel lifestyle and sporting goods with Renaissance.&rdquo;
              </p>
            </FadeIn>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-3 border-b border-novus-navy-border pb-6 mb-12">
            {PRODUCT_COLLECTIONS.map((col, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 text-xs uppercase font-mono tracking-wider transition-all duration-300 border ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest font-semibold border-novus-gold shadow-gold-glow"
                    : "bg-novus-navy-deepest/70 text-novus-ivory/70 hover:text-white border-novus-navy-border hover:border-novus-gold/40"
                }`}
              >
                {col.title}
              </button>
            ))}
          </div>

          {/* Active Product Showcase */}
          <div className="bg-novus-navy-deepest border border-novus-navy-border/80 p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
                {PRODUCT_COLLECTIONS[activeTab].category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
                {PRODUCT_COLLECTIONS[activeTab].title}
              </h3>
              <p className="text-xs font-mono text-novus-champagne italic">
                &ldquo;{PRODUCT_COLLECTIONS[activeTab].tagline}&rdquo;
              </p>
              <div className="w-16 h-[2px] bg-novus-gold" />
              <p className="text-sm text-novus-ivory-warm/80 leading-relaxed font-light">
                {PRODUCT_COLLECTIONS[activeTab].description}
              </p>

              {/* Specs Pills */}
              <div className="pt-2">
                <p className="text-[11px] font-mono text-novus-muted uppercase tracking-widest mb-3">
                  Key Material Properties
                </p>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_COLLECTIONS[activeTab].specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-xs font-mono bg-novus-navy-surface text-novus-ivory border border-novus-navy-border flex items-center space-x-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-novus-gold" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/products-innovation"
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-gold hover:text-white transition-colors group"
                >
                  <span>View Technical Specs & Swatches</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 w-full border border-novus-navy-border overflow-hidden">
              <Image
                src={PRODUCT_COLLECTIONS[activeTab].image}
                alt={PRODUCT_COLLECTIONS[activeTab].title}
                fill
                className="object-cover object-center filter contrast-105 brightness-95 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EXECUTIVE LEADERSHIP (STRICTLY PRESERVING EXACT FOUNDER PHOTOS)
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-deepest border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <FadeIn direction="up">
              <Badge variant="gold">04 / Executive Stewardship</Badge>
              <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light mt-2 leading-tight">
                Decades of Textile Mastery & Global Governance
              </h2>
              <p className="text-sm sm:text-base text-novus-muted font-light leading-relaxed">
                Guided by visionary founders holding prestigious degrees in Textile Technology, bridging fiber polymer physics with multinational export logistics.
              </p>
            </FadeIn>
          </div>

          {/* Two Founders Side-by-Side Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="group bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-gold/60 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-card-luxury">
                  {/* Portrait Container - PRESERVING EXACT FOUNDER PHOTOGRAPH */}
                  <div className="relative h-[420px] w-full overflow-hidden border-b border-novus-navy-border bg-novus-navy-deepest">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-dark via-transparent to-transparent opacity-85" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-navy-deepest/90 border border-novus-gold/40 text-[10px] font-mono text-novus-gold tracking-widest uppercase mb-2">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{leader.qualification}</span>
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-medium">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-mono text-novus-gold-champagne mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio & Specialties */}
                  <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-novus-ivory-warm/80 font-light leading-relaxed">
                      {leader.bio[0]}
                    </p>

                    <div className="pt-4 border-t border-novus-navy-border/60">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-novus-muted mb-2">
                        Core Competencies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.specialties.slice(0, 3).map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-[11px] font-mono bg-novus-navy-surface text-novus-champagne border border-novus-navy-border"
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

          <div className="text-center mt-12">
            <Link
              href="/leadership"
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-gold hover:text-white transition-colors"
            >
              <span>Read Full Executive Profiles & Background</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GLOBAL NETWORK & SOURCING CORRIDORS
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-dark border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn direction="up">
              <Badge variant="teal">05 / Global Footprint</Badge>
              <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light mt-3 leading-tight">
                Commercial Hubs & Manufacturing Corridors
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xs sm:text-sm text-novus-muted max-w-md font-light leading-relaxed">
                Strategically positioned across continents to balance technical polymer R&D, vertical spinning, large-scale apparel assembly, and close client consultation.
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
                  className={`w-full text-left p-6 border transition-all duration-300 flex items-start justify-between ${
                    activeOffice === idx
                      ? "bg-novus-navy-surface border-novus-gold shadow-gold-glow"
                      : "bg-novus-navy-deepest border-novus-navy-border hover:border-novus-gold/40 text-novus-ivory/80"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin
                        className={`w-4 h-4 ${
                          activeOffice === idx
                            ? "text-novus-gold"
                            : "text-novus-muted"
                        }`}
                      />
                      <span className="font-serif text-xl text-novus-ivory">
                        {office.country} ({office.city})
                      </span>
                    </div>
                    <p className="text-xs font-mono text-novus-muted pl-6">
                      {office.role}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 transition-transform ${
                      activeOffice === idx
                        ? "text-novus-gold translate-x-1"
                        : "text-novus-muted"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Selected Office Details Panel */}
            <div className="lg:col-span-7 bg-novus-navy-deepest border border-novus-navy-border/80 p-8 sm:p-10 space-y-6">
              <div className="inline-block px-3 py-1 bg-novus-navy-surface text-[10px] font-mono text-novus-gold tracking-widest uppercase border border-novus-gold/30">
                {GLOBAL_OFFICES[activeOffice].status}
              </div>
              <h3 className="font-serif text-3xl text-novus-ivory font-light">
                {GLOBAL_OFFICES[activeOffice].city}, {GLOBAL_OFFICES[activeOffice].country}
              </h3>
              <p className="text-xs font-mono text-novus-teal-light">
                {GLOBAL_OFFICES[activeOffice].role}
              </p>

              <div className="border-l-2 border-novus-gold pl-4 py-1 space-y-1 text-sm text-novus-ivory-warm/85 font-light">
                {GLOBAL_OFFICES[activeOffice].address.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>

              {GLOBAL_OFFICES[activeOffice].phones && (
                <div className="pt-2 text-xs font-mono text-novus-champagne">
                  <span className="text-novus-muted block text-[10px] uppercase">
                    Direct Telephone
                  </span>
                  <span>{GLOBAL_OFFICES[activeOffice].phones?.join(" / ")}</span>
                </div>
              )}

              {/* Manufacturing Corridors Snapshot */}
              <div className="pt-6 border-t border-novus-navy-border">
                <p className="text-[10px] font-mono text-novus-muted uppercase tracking-widest mb-3">
                  Integrated Corridors
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                  {MANUFACTURING_HUBS.map((hub, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-2.5 bg-novus-navy-surface/60 border border-novus-navy-border"
                    >
                      <span className="mr-1.5">{hub.flag}</span>
                      <span className="text-novus-ivory">{hub.country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. VERIFIED ENVIRONMENTAL STEWARDSHIP (Emerald & Wind Power Identity)
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-deepest border-t border-novus-navy-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <Badge variant="emerald">06 / Sustainable Technology</Badge>
              <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light mt-3 leading-tight">
                Captive Wind Energy & Verified Environmental Stewardship
              </h2>
              <div className="w-16 h-[2px] bg-emerald-500 my-4" />
              <p className="text-novus-ivory-warm/80 text-sm sm:text-base leading-relaxed font-light">
                Environmental responsibility is engineered directly into our infrastructure. The Sri Dhanalakshmi Group operates dedicated wind turbine generation facilities, supplying captive green power to our core spinning and weaving units in India.
              </p>
              <p className="text-novus-ivory-warm/80 text-sm sm:text-base leading-relaxed font-light">
                Combined with closed-loop dyeing ratios, non-hazardous auxiliary chemistry, and strict ethical labor benchmarks (&ldquo;Respect for People&rdquo;), we help international brands achieve verifiable Scope 1 and Scope 2 climate milestones.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-novus-navy-border text-xs font-mono">
                <div>
                  <span className="text-novus-muted uppercase text-[10px] block">Power Source</span>
                  <span className="text-base font-serif text-emerald-400">100% Wind Mill</span>
                </div>
                <div>
                  <span className="text-novus-muted uppercase text-[10px] block">Group Legacy</span>
                  <span className="text-base font-serif text-novus-ivory">Since 1971</span>
                </div>
                <div>
                  <span className="text-novus-muted uppercase text-[10px] block">Core Standard</span>
                  <span className="text-base font-serif text-novus-ivory">Clean Chemistry</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-emerald-400 hover:text-white transition-colors group"
                >
                  <span>Explore Sustainability Commitments</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 sm:h-[450px] w-full border border-novus-navy-border overflow-hidden shadow-card-luxury">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85"
                alt="Wind Mill Energy Farm Supporting Industrial Manufacturing"
                fill
                className="object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-novus-navy-deepest/90 border border-emerald-500/30">
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Clean Power Generation
                </p>
                <p className="text-base font-serif text-novus-ivory mt-0.5">
                  Sri Dhanalakshmi Group Wind Turbine Infrastructure
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL EXECUTIVE ENQUIRY CTA SECTION
         ========================================================================= */}
      <section className="py-24 lg:py-32 bg-novus-navy-dark border-t border-novus-navy-border/60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-novus-gold/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-8">
          <FadeIn direction="up">
            <Badge variant="gold">07 / Executive Consultation</Badge>
            <h2 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light mt-4 leading-tight">
              Ready to Engineer Your Next Apparel Collection?
            </h2>
            <p className="text-base sm:text-lg text-novus-ivory-warm/80 font-light max-w-2xl mx-auto leading-relaxed mt-4">
              Connect directly with our executive leadership across Bangalore, Shanghai, and New Jersey to discuss custom fabric engineering, bulk manufacturing programs, and international supply-chain solutions.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-9 py-4 bg-gradient-to-r from-novus-champagne via-novus-gold to-novus-gold-muted hover:from-white hover:to-novus-champagne text-novus-navy-deepest text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-gold-glow"
              >
                <span>Initiate Sourcing Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:chaand@novusapparels.com"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-novus-navy-border hover:border-novus-gold bg-novus-navy-deepest/70 text-novus-champagne text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>chaand@novusapparels.com</span>
              </a>
            </div>

            <div className="pt-8 text-xs font-mono text-novus-muted">
              <p>Corporate Motto: <strong className="text-novus-ivory">MAKE A DIFFERENCE.</strong></p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
