"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Network,
  Users,
  Layers,
  Scissors,
  ShieldCheck,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Sliders,
  Send,
  Eye,
  Check,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";
import CurvedTextBadge from "@/components/motion/CurvedTextBadge";

// Dynamic import for the continuous 3D ribbon signature
const FabricRibbon3D = dynamic(
  () => import("@/components/three/FabricRibbon3D"),
  { ssr: false }
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// SECTION 03: Verified Documented Fabric Capabilities
const FABRIC_CAPABILITIES = [
  {
    id: "greige",
    name: "Greige Fabrics",
    category: "FOUNDATIONAL TEXTILES",
    desc: "Precision-woven and circular-knitted unfinished greige textiles formulated for uniform absorption, controlled residual shrinkage, and flawless subsequent piece-dyeing or printing.",
    specs: [
      "Custom Yarn Counts",
      "Weft & Warp Stability",
      "Controlled Residual Shrinkage",
      "Knitted & Woven Formulations",
    ],
    image: "/images/editorial/fabric-macro.jpg",
  },
  {
    id: "piece-dyed",
    name: "Piece-Dyed Fabrics",
    category: "CONTINUOUS DYEING",
    desc: "Even, high-penetration piece-dyed textiles formulated with deep pigment saturation, consistent roll-to-roll batch calibration, and superior light and wash fastness.",
    specs: [
      "Solid Color Uniformity",
      "High Wash Fastness",
      "Enzyme Bio-Polished Finish",
      "Soft Drape Calibration",
    ],
    image: "/images/editorial/cap-viscose.jpg",
  },
  {
    id: "yarn-dyed",
    name: "Yarn-Dyed Fabrics",
    category: "PATTERNED WEAVES",
    desc: "Intricately patterned shirting weaves utilizing pre-dyed individual yarns to create crisp plaids, micro-checks, engineered stripes, and dimensional dobby motifs.",
    specs: [
      "Compact Combed Yarns",
      "Crisp Pattern Definition",
      "Engineered Checks & Plaids",
      "Dimensional Dobbies",
    ],
    image: "/images/editorial/cap-wovens.jpg",
  },
  {
    id: "shirt-weight",
    name: "Shirt-Weight Fabrics",
    category: "FINE SHIRTING",
    desc: "Lightweight, breathable woven constructions designed for executive and luxury casual shirting, offering silky tactile hand-feel and all-day wrinkle recovery.",
    specs: [
      "High-Count Compact Cotton",
      "Viscose & Poly Blends",
      "Wrinkle-Resist Formulations",
      "Featherweight Air Permeability",
    ],
    image: "/images/editorial/cap-cotton.jpg",
  },
  {
    id: "bottom-weight",
    name: "Bottom-Weight Fabrics",
    category: "STRUCTURED BOTTOMS",
    desc: "High-density twills, canvas weaves, and structured dobby foundations engineered for tailored trousers, chinos, and modern durable workwear.",
    specs: [
      "Heavy Cotton Twills",
      "TC (Tetoron-Cotton) Blends",
      "PR Formulations",
      "High Abrasion Resistance",
    ],
    image: "/images/editorial/cap-wovens.jpg",
  },
  {
    id: "cotton-blends",
    name: "Cotton & Cotton Blends",
    category: "NATURAL STAPLE",
    desc: "Ring-spun long-staple combed cotton engineered pure or blended with cellulosic viscose or synthetic micro-filaments for enhanced dimensional recovery.",
    specs: [
      "100% Combed Cotton",
      "Cotton-Poly Hybrids",
      "Cotton-Viscose Comfort",
      "Low-Pill Mechanical Finish",
    ],
    image: "/images/editorial/cap-cotton.jpg",
  },
  {
    id: "micro-poly",
    name: "Micro Polyester",
    category: "ENGINEERED FILAMENT",
    desc: "Fine-denier continuous micro-polyester filaments engineered for dynamic moisture dispersion, fast drying, and featherweight aerodynamic drape.",
    specs: [
      "Micro-Denier Cross-Section",
      "Hydrophilic Wicking Action",
      "Quick-Dry Kinetics",
      "High Tensile Longevity",
    ],
    image: "/images/editorial/cap-performance.jpg",
  },
  {
    id: "viscose-blends",
    name: "Viscose Blends",
    category: "BOTANICAL CELLULOSIC",
    desc: "Regenerated botanical cellulosics providing fluid drape, cool skin hand-feel, and luxurious surface sheen for contemporary lifestyle collections.",
    specs: [
      "Fluid Dynamic Drape",
      "Silken Luster",
      "Skin Thermoregulation",
      "Enhanced Color Vibrancy",
    ],
    image: "/images/editorial/cap-viscose.jpg",
  },
];

// SECTION 04: Three Verified Apparel Categories
const APPAREL_CATEGORIES = [
  {
    title: "Shirts",
    role: "EXECUTIVE & LIFESTYLE SHIRTING",
    desc: "Precision-tailored shirts manufactured with impeccable collar architecture, durable plackets, clean single-needle seams, and premium button attachments across formal and contemporary styles.",
    specs: [
      "Tailored Executive Dress Shirts",
      "Casual Washed Button-Downs",
      "Lightweight Utility Overshirts",
      "Knitted Jersey Polo Shirting",
    ],
    image: "/images/editorial/cap-wovens.jpg",
  },
  {
    title: "Bottoms",
    role: "STRUCTURED PANTS & TROUSERS",
    desc: "Engineered trousers, chinos, and casual bottom-weights crafted with reinforced pocketing, ergonomic waistband ergonomics, and long-lasting crease retention.",
    specs: [
      "Tailored Formal Trousers",
      "Everyday Chinos & Khakis",
      "Ergonomic Cargo & Utility Pants",
      "Structured Casual Bottoms",
    ],
    image: "/images/editorial/cap-cotton.jpg",
  },
  {
    title: "Activewear",
    role: "PERFORMANCE & MOTION APPAREL",
    desc: "Technical sportswear and athletic apparel engineered for unrestricted movement, featuring 4-way elastic stretch, flatlock anti-chafing seams, and capillary perspiration evaporation.",
    specs: [
      "Athletic Performance Tops",
      "Training Bottoms & Shorts",
      "Ergonomic Layering Pieces",
      "Hydrophilic Micro-Mesh Wear",
    ],
    image: "/images/editorial/cap-performance.jpg",
  },
];

export default function ManufacturingNetworkPage() {
  const [activeFabric, setActiveFabric] = useState(0);
  const selectedFabric = FABRIC_CAPABILITIES[activeFabric];

  return (
    <div className="bg-cream text-charcoal font-body min-h-screen selection:bg-olive selection:text-cream">
      {/* Continuous Animated NOVUS Thread Signature Visual */}
      <FabricRibbon3D />

      <Navbar />

      <main className="relative z-10 pt-24 lg:pt-28">
        {/* ========================================================
            SECTION 01 — MANUFACTURING HERO (Cinematic Video Led)
            ======================================================== */}
        <section className="relative py-20 lg:py-32 bg-cream border-b border-sand/70 overflow-hidden">
          {/* Subtle Ambient Video Atmosphere */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/editorial/mfg-garment-floor.jpg"
              className="w-full h-full object-cover filter contrast-[1.08]"
            >
              <source src="/videos/mfg-textile.webm" type="video/webm" />
            </video>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                  MANUFACTURING NETWORK // PARTNER ECOSYSTEM
                </span>
              </div>

              <CurvedTextBadge
                text="BUILT THROUGH PARTNERSHIP • POWERED BY PRECISION • "
                size={90}
                className="hidden md:inline-flex text-olive"
              />
            </div>

            {/* Headline Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-8 space-y-6">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-charcoal leading-[0.94]">
                  <KineticText type="words" delay={0.1} stagger={0.06}>
                    BUILT THROUGH PARTNERSHIP.
                  </KineticText>{" "}
                  <br />
                  <span className="text-olive">
                    <KineticText type="words" delay={0.35} stagger={0.06}>
                      POWERED BY PRECISION.
                    </KineticText>
                  </span>
                </h1>

                <p className="font-body text-base sm:text-xl text-charcoal/80 font-light leading-relaxed max-w-3xl">
                  NOVUS APPAREL delivers high-volume apparel solutions through a vetted international network of partner manufacturing facilities. We coordinate material sourcing, technical tech packs, and synchronized delivery across international corridors.
                </p>

                {/* Important Business Model Distinction Callout */}
                <div className="p-6 rounded-3xl bg-sand/40 border border-sand/80 text-xs sm:text-sm font-body text-charcoal/85 leading-relaxed font-light shadow-sm">
                  <strong className="font-semibold text-charcoal block mb-1">
                    The Partner Network Model:
                  </strong>
                  NOVUS works in close technical collaboration with vetted independent partner factories. Rather than claiming direct ownership of manufacturing facilities, NOVUS acts as the solutions architect—overseeing design, yarn physics, tech-pack compliance, and international client delivery.
                </div>
              </div>

              {/* Right Cinematic Manufacturing Visual */}
              <div className="lg:col-span-4">
                <TiltCard tiltDegree={8}>
                  <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-sand border border-sand/90 shadow-md">
                    <Image
                      src="/images/editorial/mfg-garment-floor.jpg"
                      alt="Precision apparel garment floor partner facility"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream/95 backdrop-blur-md border border-sand text-charcoal shadow-sm">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-bold block mb-1">
                        PARTNER ECOSYSTEM
                      </span>
                      <p className="font-display text-xs font-semibold leading-snug">
                        Vetted assembly lines delivering structured wovens, shirting, and activewear.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 02 — NETWORK SCALE (Animated Statistics)
            ======================================================== */}
        <section className="py-20 lg:py-28 bg-sand/30 border-b border-sand/70">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Monumental Animated Number */}
              <div className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-cream border border-sand shadow-sm text-center lg:text-left space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-burnt font-bold block">
                  CONFIRMED WORKFORCE FIGURE
                </span>
                <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-olive tracking-tight">
                  <AnimatedCounter value={4500} prefix="" suffix="+" duration={2.2} />
                </div>
                <div className="font-mono text-sm font-bold text-burnt uppercase tracking-wider">
                  4,000–5,000 Verified Scale
                </div>
                <p className="font-display text-xs sm:text-sm font-bold text-charcoal uppercase tracking-wider">
                  Partner Manufacturing Network Scale
                </p>
                <div className="w-12 h-1 bg-burnt mx-auto lg:mx-0 my-3 rounded-full" />
                <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                  Confirmed workforce figure representing the scale of the vetted partner manufacturing network producing garments across our verified product categories.
                </p>
              </div>

              {/* Right Contextual Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-olive" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                    ACCURATE SCOPE & CONTEXT
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-charcoal leading-snug">
                  <KineticText type="words" delay={0.1} stagger={0.06}>
                    SCALE DELIVERED THROUGH COORDINATED SPECIALIZATION.
                  </KineticText>
                </h2>

                <p className="font-body text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                  The confirmed figure of 4,000–5,000 accurately presents the collaborative scale of the partner manufacturing network. This ecosystem allows NOVUS to match each client&apos;s exact order—whether intricate yarn-dyed shirting or high-velocity athletic activewear—with partner facilities tailored for that specific product category.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <TiltCard tiltDegree={5}>
                    <div className="p-5 rounded-2xl bg-cream border border-sand/70 space-y-1 shadow-sm h-full">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-burnt font-bold block">
                        Agile Supply Lines
                      </span>
                      <p className="text-xs font-body text-charcoal/70 font-light leading-snug">
                        Production flexibility without the overhead and rigid single-site constraints of traditional facility ownership.
                      </p>
                    </div>
                  </TiltCard>

                  <TiltCard tiltDegree={5}>
                    <div className="p-5 rounded-2xl bg-cream border border-sand/70 space-y-1 shadow-sm h-full">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-olive font-bold block">
                        Category Precision
                      </span>
                      <p className="text-xs font-body text-charcoal/70 font-light leading-snug">
                        Specialized production lines for shirts, bottom-weights, and performance activewear.
                      </p>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 03 — FABRIC CAPABILITIES
            ======================================================== */}
        <section id="fabrics" className="py-24 lg:py-36 bg-cream border-b border-sand/70">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sand/70">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                    SECTION 03 // DOCUMENTED FABRIC CAPABILITIES
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
                  <KineticText type="words" delay={0.1} stagger={0.06}>
                    TEXTILE MASTERY & FORMULATIONS.
                  </KineticText>
                </h2>
                <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
                  Verified material specifications spanning natural cottons, continuous micro-filaments, botanical cellulosics, and precision yarn-dyed patterns.
                </p>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-olive font-bold">
                8 Documented Formulations
              </div>
            </div>

            {/* Interactive Swatch Explorer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Selector List (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {FABRIC_CAPABILITIES.map((fab, idx) => {
                  const isCurrent = activeFabric === idx;
                  return (
                    <button
                      key={fab.id}
                      onClick={() => setActiveFabric(idx)}
                      className={`text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                        isCurrent
                          ? "bg-sand/60 border-charcoal shadow-sm text-charcoal font-semibold scale-[1.01]"
                          : "bg-sand/15 hover:bg-sand/40 border-sand/70 text-charcoal/70"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-burnt font-bold block">
                          {fab.category}
                        </span>
                        <h4 className="font-display text-sm font-bold uppercase tracking-tight">
                          {fab.name}
                        </h4>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isCurrent ? "text-burnt translate-x-1" : "text-charcoal/30"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Detailed Swatch Card (7 cols) */}
              <div className="lg:col-span-7">
                <TiltCard tiltDegree={5} dataCursor="SWATCH">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedFabric.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="h-full rounded-3xl bg-sand/35 border border-sand p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm"
                    >
                      {/* Visual Macro Frame */}
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-sand border border-sand/80 shadow-sm">
                        <Image
                          src={selectedFabric.image}
                          alt={selectedFabric.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 700px"
                          className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                          <span className="text-[10px] font-mono uppercase tracking-widest bg-charcoal/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream/20">
                            {selectedFabric.category}
                          </span>
                          <span className="text-xs font-mono text-burnt-light font-bold">
                            VERIFIED SPECIFICATION
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
                            FABRIC ARCHITECTURE
                          </span>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-charcoal">
                            {selectedFabric.name}
                          </h3>
                        </div>

                        <p className="font-body text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                          {selectedFabric.desc}
                        </p>

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-2.5 pt-2">
                          {selectedFabric.specs.map((spec, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-cream border border-sand/70 text-xs font-body text-charcoal shadow-sm"
                            >
                              <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                              <span className="font-medium">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 04 — APPAREL CATEGORIES
            ======================================================== */}
        <section id="categories" className="py-24 lg:py-36 bg-sand/25 border-b border-sand/70">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-16 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-ultra text-olive font-bold">
                  SECTION 04 // APPAREL PRODUCT CATEGORIES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
                <KineticText type="words" delay={0.1} stagger={0.06}>
                  THREE VERIFIED APPAREL PILLARS.
                </KineticText>
              </h2>
              <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
                NOVUS focuses on three primary garment categories, executing each with rigorous pattern grading, durable construction, and commercial appeal.
              </p>
            </div>

            {/* Asymmetrical Editorial Composition with TiltCards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {APPAREL_CATEGORIES.map((cat, idx) => (
                <TiltCard key={cat.title} tiltDegree={6} dataCursor="APPAREL">
                  <div className="rounded-3xl bg-cream border border-sand/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-olive/50 transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sand font-bold text-burnt">
                          CATEGORY 0{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/40 font-semibold">
                          {cat.role}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-charcoal">
                        {cat.title}
                      </h3>

                      {/* Image */}
                      <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-sand border border-sand shadow-sm">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      <p className="font-body text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-sand">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 block font-semibold">
                        MANUFACTURING HIGHLIGHTS
                      </span>
                      <ul className="space-y-1.5 text-xs font-body text-charcoal/80">
                        {cat.specs.map((item, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 05 — TECHNICAL AND QUALITY CAPABILITIES
            ======================================================== */}
        <section className="py-24 lg:py-36 bg-cream border-b border-sand/70">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                    SECTION 05 // TECHNICAL CAPABILITIES
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
                  <KineticText type="words" delay={0.1} stagger={0.06}>
                    TECHNICAL COLLABORATION & QUALITY DISCIPLINE.
                  </KineticText>
                </h2>

                <p className="font-body text-base text-charcoal/70 font-light leading-relaxed">
                  Our quality methodology is rooted in rigorous technical collaboration rather than marketing claims. We ensure every batch of fabric and every production run matches approved pilot samples and commercial tolerances.
                </p>

                <TiltCard tiltDegree={6}>
                  <div className="p-6 rounded-2xl bg-sand/35 border border-sand space-y-2 mt-4 shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
                      ENGINEERING PRINCIPLE
                    </span>
                    <p className="font-display text-xs sm:text-sm font-semibold text-charcoal leading-snug">
                      Preventing defect recurrence through synchronized digital tech packs and pre-production material validation.
                    </p>
                  </div>
                </TiltCard>
              </div>

              {/* Verified Technical Disciplines */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TiltCard tiltDegree={6}>
                  <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 h-full shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-olive" />
                    <h4 className="font-display text-base font-bold uppercase text-charcoal">
                      Pattern & Seam Engineering
                    </h4>
                    <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                      Calculating seam tension, thread elasticity, and stitch density to prevent puckering and maintain garment symmetry through commercial wash cycles.
                    </p>
                  </div>
                </TiltCard>

                <TiltCard tiltDegree={6}>
                  <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 h-full shadow-sm">
                    <Sliders className="w-6 h-6 text-burnt" />
                    <h4 className="font-display text-base font-bold uppercase text-charcoal">
                      Dimensional Shrinkage Control
                    </h4>
                    <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                      Standardized pre-conditioning of yarns and knits to ensure garments preserve designated sizing and avoid seam torque.
                    </p>
                  </div>
                </TiltCard>

                <TiltCard tiltDegree={6}>
                  <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 h-full shadow-sm">
                    <Layers className="w-6 h-6 text-charcoal" />
                    <h4 className="font-display text-base font-bold uppercase text-charcoal">
                      Color Consistency Protocols
                    </h4>
                    <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                      Controlled shade-band evaluation across roll-to-roll dyeing, ensuring uniform tone across companion components and collections.
                    </p>
                  </div>
                </TiltCard>

                <TiltCard tiltDegree={6}>
                  <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 h-full shadow-sm">
                    <Network className="w-6 h-6 text-olive" />
                    <h4 className="font-display text-base font-bold uppercase text-charcoal">
                      Pilot Line Validation
                    </h4>
                    <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                      Pre-production validation runs to calibrate cutting accuracy, machine tolerances, and needle performance before full-scale commercial cut-and-sew.
                    </p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 06 — PARTNER ECOSYSTEM
            ======================================================== */}
        <section className="py-24 lg:py-36 bg-sand/30 border-b border-sand/70">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/70 border border-sand text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-olive font-bold">
                <span>SECTION 06 // HOW NOVUS OPERATES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
                <KineticText type="words" delay={0.1} stagger={0.06}>
                  THE PARTNER ECOSYSTEM IN ACTION.
                </KineticText>
              </h2>
              <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
                Clear governance, shared technical standards, and coordinated execution ensure transparent global delivery without claiming ownership of partner facilities.
              </p>
            </div>

            {/* 3 Step Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TiltCard tiltDegree={6}>
                <div className="p-8 rounded-3xl bg-cream border border-sand shadow-sm space-y-4 h-full">
                  <span className="font-mono text-xs text-burnt font-bold block">
                    STAGE 01 // SPECIFICATION
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                    Tech Pack Synchronization
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    NOVUS product developers and technical directors translate client requirements into comprehensive technical dossiers—specifying fiber compositions, stitch gauges, and trim standards.
                  </p>
                </div>
              </TiltCard>

              <TiltCard tiltDegree={6}>
                <div className="p-8 rounded-3xl bg-cream border border-sand shadow-sm space-y-4 h-full">
                  <span className="font-mono text-xs text-olive font-bold block">
                    STAGE 02 // COORDINATION
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                    Partner Line Allocation
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    Orders are routed to vetted partner factories selected specifically for their specialized machinery, skill sets, and production cadence across shirts, bottoms, or activewear.
                  </p>
                </div>
              </TiltCard>

              <TiltCard tiltDegree={6}>
                <div className="p-8 rounded-3xl bg-cream border border-sand shadow-sm space-y-4 h-full">
                  <span className="font-mono text-xs text-charcoal font-bold block">
                    STAGE 03 // DELIVERY
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                    Coordinated Fulfillment
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    Our commercial liaison in Bangalore, New Jersey, and Shanghai oversees packaging integrity, shipping compliance, and duty-optimized delivery to international retail destinations.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 07 — BUSINESS ENQUIRY
            ======================================================== */}
        <section className="py-24 lg:py-36 bg-cream">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="rounded-3xl bg-charcoal text-cream p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-3xl space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt-light font-bold block">
                  SECTION 07 // BUSINESS ENQUIRY
                </span>

                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-cream leading-[0.98]">
                  <KineticText type="words" delay={0.1} stagger={0.06}>
                    READY TO ACCESS OUR PARTNER MANUFACTURING NETWORK?
                  </KineticText>
                </h2>

                <p className="font-body text-sm sm:text-base text-cream/80 font-light leading-relaxed">
                  Connect with our executive team in Bangalore, North Brunswick, or Shanghai. Discuss custom fabric formulations, prototype development, or commercial volume allocations.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <MagneticButton dataCursor="ENQUIRE">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-burnt hover:bg-burnt-dark text-cream font-display text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md group"
                    >
                      <span>Start Manufacturing Enquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <a
                      href="mailto:chaand@novusapparels.com"
                      className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-cream/10 hover:bg-cream/20 text-cream font-mono text-xs uppercase tracking-wider transition-colors border border-cream/20"
                    >
                      <span>chaand@novusapparels.com</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>

              {/* Ambient visual glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive/15 rounded-full blur-[140px] pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
