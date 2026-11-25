"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Zap,
  Droplets,
  RefreshCw,
  Compass,
  ArrowUpRight,
  Sparkles,
  Sliders,
  Activity,
} from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RENAISSANCE_PILLARS = [
  {
    icon: Droplets,
    title: "Hydrophilic Moisture Dispersion",
    concept: "Moisture Dispersion",
    metric: "Fast-Dry Kinetics",
    desc: "Micro-polyester filaments engineered to disperse perspiration rapidly across widened surface area for accelerated evaporation.",
  },
  {
    icon: Zap,
    title: "Dual-Core Elasticity & Recovery",
    concept: "Shape Retention",
    metric: "Multi-Axis Stretch",
    desc: "Composite filament architectures providing multi-directional stretch while resisting garment bagging and seam deformation.",
  },
  {
    icon: RefreshCw,
    title: "Comfort to Complement Technology",
    concept: "Tactile Ergonomics",
    metric: "Skin-Layer Comfort",
    desc: "Balancing performance synthetics with natural fiber softness for an ultra-smooth boundary layer against the skin.",
  },
  {
    icon: Cpu,
    title: "Dimensional Seam Integrity",
    concept: "Seam-Torque Mitigation",
    metric: "Rotational Stability",
    desc: "Calibrated twist and heat-set relaxation to minimize rotational skewing in collars, plackets, and trouser hems.",
  },
];

export default function InnovationTechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedPillar, setSelectedPillar] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className="py-24 lg:py-36 bg-sand/25 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
            SECTION 06 // INNOVATION & TECHNOLOGY
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              <KineticText type="words" delay={0.1} stagger={0.06}>
                SCIENCE, TECHNOLOGY &
              </KineticText>{" "}
              <br />
              <span className="text-olive">
                <KineticText type="words" delay={0.35} stagger={0.06}>
                  ENGINEERING APPAREL.
                </KineticText>
              </span>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
              Applying science, technology, and engineering to elevate everyday apparel through systematic polymer research, yarn physics, and garment assembly.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <TiltCard tiltDegree={8}>
              <div className="p-6 sm:p-8 rounded-3xl bg-cream border border-sand/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-olive animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                    SIGNATURE CONCEPT
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal uppercase">
                  The Renaissance™ Concept
                </h3>
                <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                  &ldquo;Technology to Complement Comfort.&rdquo; Bringing advanced polymer research and micro-fiber blending to human lifestyle apparel.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic R&D Imagery Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <TiltCard tiltDegree={6} dataCursor="INSPECT">
              <div className="relative rounded-3xl overflow-hidden bg-sand border border-sand/80 p-3 sm:p-4 shadow-sm">
                <div className="relative h-80 sm:h-[440px] w-full rounded-2xl overflow-hidden bg-sand">
                  <Image
                    src="/images/editorial/inno-renaissance.jpg"
                    alt="Novus Apparel Renaissance concept and material innovation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream/95 backdrop-blur-md border border-sand text-charcoal shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-bold block mb-1">
                      MICRO-POLYMER & BLENDS
                    </span>
                    <p className="font-display text-xs text-charcoal font-semibold leading-tight">
                      Engineering featherweight breathability, elastic recovery, and silk-like drape into modern active and casual wardrobes.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: 4 Technical Pillars with Interactive Selection (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {RENAISSANCE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <TiltCard key={idx} tiltDegree={6}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-cream border border-sand/80 hover:border-olive/60 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-sand/60 text-olive flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-bold block mb-1">
                          {pillar.concept}
                        </span>
                        <h4 className="font-display text-base font-bold uppercase tracking-tight text-charcoal">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sand/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-charcoal/60">
                      <span className="font-semibold text-olive">{pillar.metric}</span>
                      <span>Pillar 0{idx + 1}</span>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Technical Materials Summary Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-cream border border-sand/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
              DOCUMENTED MATERIAL PORTFOLIO
            </span>
            <p className="font-display text-sm sm:text-base font-bold text-charcoal">
              Cotton &bull; Cotton Blends &bull; Micro Polyester &bull; Viscose Blends &bull; Greige &bull; Piece-Dyed &bull; Yarn-Dyed
            </p>
          </div>

          <MagneticButton dataCursor="VIEW">
            <Link
              href="/manufacturing#fabrics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand/50 hover:bg-sand text-xs font-mono uppercase tracking-wider text-burnt hover:text-charcoal font-bold shrink-0 transition-colors border border-sand"
            >
              <span>Review Fabric Specifications</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
