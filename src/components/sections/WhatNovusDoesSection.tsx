"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Check,
  ChevronRight,
  Sliders,
  Scissors,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";

const CAPABILITIES = [
  {
    id: "design-dev",
    step: "01",
    title: "Design & Product Development",
    subtitle: "From Vision to Production-Ready Tech Packs",
    desc: "Translating brand concepts into production-ready specifications, pattern geometry, and ergonomic fit architecture across shirts, bottoms, and activewear.",
    image: "/images/editorial/cap-design.jpg",
    icon: Scissors,
    tag: "PRODUCT DEVELOPMENT",
    highlights: [
      "Precision Tech Packs & Pattern Grading",
      "Ergonomic Fit Architecture",
      "Seam-Torque Mitigation",
      "Shirts, Bottoms & Activewear Prototyping",
    ],
  },
  {
    id: "fabric-solutions",
    step: "02",
    title: "Fabric & Material Solutions",
    subtitle: "Greige, Piece-Dyed & Yarn-Dyed Mastery",
    desc: "Formulating greige, piece-dyed, and yarn-dyed textiles across 100% cotton, cotton blends, micro polyester, viscose blends, and TC/PR constructions.",
    image: "/images/editorial/cap-cotton.jpg",
    icon: Layers,
    tag: "MATERIAL SCIENCE",
    highlights: [
      "Greige Fabric Formulation",
      "Yarn-Dyed & Piece-Dyed Finishing",
      "Cotton, Micro-Poly & Viscose Blends",
      "Shirt-Weight & Bottom-Weight Formulations",
    ],
  },
  {
    id: "apparel-mfg",
    step: "03",
    title: "Apparel Manufacturing",
    subtitle: "Orchestrated Partner Network Execution",
    desc: "Coordinating commercial-scale production across a vetted partner manufacturing ecosystem adhering strictly to technical specifications and quality checkpoints.",
    image: "/images/editorial/mfg-circular-knit.jpg",
    icon: Sliders,
    tag: "PARTNER EXECUTION",
    highlights: [
      "Vetted Partner Factory Network",
      "Shirts, Bottoms & Activewear Lines",
      "Specification Compliance Checkpoints",
      "Duty-Advantaged Sourcing Corridors",
    ],
  },
  {
    id: "product-innovation",
    step: "04",
    title: "Product Innovation",
    subtitle: "Science, Technology & Engineering",
    desc: "The Renaissance concept: 'Technology to Complement Comfort.' Micro-polyester filaments, dynamic stretch recovery, and specialized functional finishes.",
    image: "/images/editorial/inno-lab.jpg",
    icon: Cpu,
    tag: "R&D & ENGINEERING",
    highlights: [
      "Renaissance™ — Technology to Complement Comfort",
      "Hydrophilic Moisture Dispersion",
      "Multi-Axis Elastic Recovery",
      "Functional Surface & Hand-Feel Finishes",
    ],
  },
];

export default function WhatNovusDoesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = CAPABILITIES[activeTab];

  return (
    <section
      id="capabilities"
      className="py-24 lg:py-36 bg-cream border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sand/70">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                SECTION 03 // WHAT NOVUS DOES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              <KineticText type="words" delay={0.1} stagger={0.06}>
                INTEGRATED APPAREL SOLUTIONS.
              </KineticText>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              End-to-end vertical solutions connecting fiber physics, textile engineering, and coordinated garment manufacturing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton dataCursor="EXPLORE">
              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand/60 hover:bg-sand text-charcoal font-display text-xs uppercase tracking-wider font-semibold border border-sand transition-all shadow-sm"
              >
                <span>View Manufacturing Network</span>
                <ArrowUpRight className="w-4 h-4 text-burnt" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Visually Distinctive Asymmetrical Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Capability Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="space-y-3">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = activeTab === idx;
                const IconComponent = cap.icon;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 relative border ${
                      isActive
                        ? "bg-sand/60 border-charcoal shadow-sm text-charcoal scale-[1.01]"
                        : "bg-sand/15 hover:bg-sand/40 border-sand/70 text-charcoal/70"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded font-bold ${
                              isActive ? "bg-burnt text-cream" : "bg-sand text-charcoal/60"
                            }`}
                          >
                            {cap.step}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                            {cap.tag}
                          </span>
                        </div>
                        <h3
                          className={`font-display text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors ${
                            isActive ? "text-charcoal" : "text-charcoal/80"
                          }`}
                        >
                          {cap.title}
                        </h3>
                        <p className="text-xs text-charcoal/60 font-body line-clamp-2 font-light">
                          {cap.subtitle}
                        </p>
                      </div>

                      <div
                        className={`p-2 rounded-xl transition-colors ${
                          isActive ? "bg-olive text-cream" : "bg-sand/50 text-charcoal/40"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Capability Fact Banner */}
            <div className="p-6 rounded-2xl bg-charcoal text-cream mt-4 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-light font-bold block">
                COLLABORATIVE APPROACH
              </span>
              <p className="font-display text-xs text-cream/90 font-medium leading-relaxed">
                Combining science, technology, and engineering to provide comprehensive solutions from design inception to delivered apparel.
              </p>
            </div>
          </div>

          {/* Right Column: Immersive Detailed Capability Display (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard tiltDegree={5} dataCursor="INSPECT">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCap.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full rounded-3xl bg-sand/35 border border-sand p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 shadow-sm"
                >
                  {/* Visual Imagery Container */}
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-sand border border-sand/80 shadow-sm">
                    <Image
                      src={activeCap.image}
                      alt={activeCap.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                      <span className="text-xs font-mono uppercase tracking-widest bg-charcoal/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream/20">
                        CAPABILITY {activeCap.step} of 04
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-burnt-light font-bold">
                        {activeCap.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Specifications */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-olive font-bold block">
                        {activeCap.subtitle}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-charcoal">
                        {activeCap.title}
                      </h3>
                    </div>

                    <p className="font-body text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                      {activeCap.desc}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {activeCap.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-cream border border-sand/70 text-xs font-body text-charcoal/85 shadow-sm"
                        >
                          <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-sand flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                    <span className="text-charcoal/60">Novus Apparel Solutions</span>
                    <a
                      href="#thread-journey"
                      className="inline-flex items-center gap-1.5 text-burnt hover:text-charcoal font-bold transition-colors"
                    >
                      <span>Follow the transformation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
