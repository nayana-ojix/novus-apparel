"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Check, ChevronRight, Sliders, Scissors, Cpu, Layers } from "lucide-react";

const CAPABILITIES = [
  {
    id: "design-dev",
    step: "01",
    title: "Design and Product Development",
    subtitle: "From Creative Vision to Production-Ready Tech Packs",
    desc: "We translate brand design briefs into rigorously engineered garments. Our product development teams bridge fashion aesthetics with technical execution—delivering 2D/3D pattern development, digital sampling, ergonomic fit architecture, and prototype validation across shirts, bottoms, and activewear.",
    image: "/images/editorial/cap-design.jpg",
    icon: Scissors,
    tag: "PRODUCT DEVELOPMENT",
    highlights: [
      "Precision Tech-Pack Creation & Grading",
      "Ergonomic Fit & Silhouette Prototyping",
      "Pattern Geometry with Seam-Torque Mitigation",
      "Trim, Hardware & Detail Sourcing Coordination",
    ],
  },
  {
    id: "fabric-solutions",
    step: "02",
    title: "Fabric and Material Solutions",
    subtitle: "Yarn-Dyed, Piece-Dyed & Greige Textile Mastery",
    desc: "Material mastery is at the heart of NOVUS. We formulate and source specialized fabric blends tailored to brand durability, breathability, and aesthetic standards. Sourcing includes 100% combed cotton, micro-polyesters, cellulosic viscose blends, and specialized woven and knitted constructions.",
    image: "/images/editorial/cap-cotton.jpg",
    icon: Layers,
    tag: "MATERIAL SCIENCE",
    highlights: [
      "Greige Fabric Sourcing & Greige Development",
      "Yarn-Dyed & Piece-Dyed Textile Engineering",
      "Cotton, Micro-Poly & Viscose Blends",
      "Shirt-Weight & Engineered Bottom-Weight Weaves",
    ],
  },
  {
    id: "apparel-mfg",
    step: "03",
    title: "Apparel Manufacturing",
    subtitle: "Orchestrated Production Across Vetted Partner Factories",
    desc: "NOVUS bridges client specifications with a disciplined network of partner manufacturing facilities. We ensure that commercial-scale garment assembly adheres strictly to technical specifications, lead-time commitments, and transparent quality checkpoints.",
    image: "/images/editorial/mfg-circular-knit.jpg",
    icon: Sliders,
    tag: "PARTNER EXECUTION",
    highlights: [
      "Coordinated Production Across Partner Factories",
      "Structured Shirt & Trousers Assembly",
      "Performance Activewear Construction",
      "Quality Checkpoints & Specification Governance",
    ],
  },
  {
    id: "product-innovation",
    step: "04",
    title: "Product Innovation",
    subtitle: "Combining Science, Technology, and Engineering",
    desc: "Our forward-looking development combines textile physics with functional comfort. Exemplified by the Renaissance concept ('Technology to Complement Comfort'), we develop micro-polyester filaments, dynamic stretch retention, and specialized finishes for daily wear and active mobility.",
    image: "/images/editorial/inno-lab.jpg",
    icon: Cpu,
    tag: "RESEARCH & ENGINEERING",
    highlights: [
      "Renaissance Concept — Technology to Complement Comfort",
      "Capillary Moisture Evaporation Research",
      "Multi-Axis Elastic Recovery Solutions",
      "Functional Surface & Tactile Hand-Feel Enhancements",
    ],
  },
];

export default function WhatNovusDoesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = CAPABILITIES[activeTab];

  return (
    <section
      id="capabilities"
      className="py-24 lg:py-36 bg-cream border-b border-sand/60 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sand/70">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-burnt" />
              <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                SECTION 03 // WHAT NOVUS DOES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              INTEGRATED APPAREL SOLUTIONS.
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              We provide end-to-end capabilities connecting raw fiber physics, creative styling, textile engineering, and coordinated garment manufacturing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sand/60 hover:bg-sand text-charcoal font-display text-xs uppercase tracking-wider font-semibold border border-sand transition-all"
            >
              <span>View Manufacturing Network</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-burnt" />
            </Link>
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
                        ? "bg-sand/60 border-sand-dark shadow-sm text-charcoal"
                        : "bg-cream hover:bg-sand/30 border-sand/60 text-charcoal/70"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                            isActive ? "bg-burnt text-cream font-bold" : "bg-sand text-charcoal/60"
                          }`}>
                            {cap.step}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-semibold">
                            {cap.tag}
                          </span>
                        </div>
                        <h3 className={`font-display text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors ${
                          isActive ? "text-charcoal" : "text-charcoal/80"
                        }`}>
                          {cap.title}
                        </h3>
                        <p className="text-xs text-charcoal/60 font-body line-clamp-2 font-light">
                          {cap.subtitle}
                        </p>
                      </div>

                      <div className={`p-2 rounded-xl transition-colors ${
                        isActive ? "bg-olive text-cream" : "bg-sand/50 text-charcoal/40"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Capability Fact Banner */}
            <div className="p-5 rounded-2xl bg-charcoal text-cream mt-4 space-y-2">
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCap.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl bg-sand/40 border border-sand p-6 sm:p-8 flex flex-col justify-between space-y-8"
              >
                {/* Visual Imagery Container */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-sand border border-sand/80 shadow-sm">
                  <Image
                    src={activeCap.image}
                    alt={activeCap.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-center filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                    <span className="text-xs font-mono uppercase tracking-widest bg-charcoal/60 backdrop-blur-md px-3 py-1 rounded-full border border-cream/20">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    {activeCap.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-cream border border-sand/70 text-xs font-body text-charcoal/80"
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
                    className="inline-flex items-center gap-1.5 text-burnt hover:text-charcoal font-semibold transition-colors"
                  >
                    <span>Follow the transformation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
