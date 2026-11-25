"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Layers, Sliders, ChevronRight, Activity, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const THREAD_STAGES = [
  {
    step: "01",
    id: "thread",
    label: "THREAD",
    title: "Raw Fiber & Filament Physics",
    tagline: "Where every possibility begins",
    desc: "The journey begins at the microscopic fiber level. We select and calibrate long-staple combed cotton, micro-denier polyesters, and regenerated cellulosic filaments—calculating precise twists per inch, tensile recovery, and ring-spun uniformity.",
    image: "/images/editorial/fabric-macro.jpg",
    accentColor: "border-olive text-olive bg-olive/10",
    pillColor: "bg-olive text-cream",
    stats: [
      { label: "Material Base", value: "Cotton, Micro-Poly, Viscose" },
      { label: "Yarn Geometry", value: "Ring-Spun & Compact Twist" },
      { label: "Core Focus", value: "Tensile Fiber Integrity" },
    ],
  },
  {
    step: "02",
    id: "fabric",
    label: "FABRIC",
    title: "Weaving & Greige Formulations",
    tagline: "Transformation from yarn into tactile dimension",
    desc: "Yarns are transformed through computerized circular knitting and high-speed air-jet weaving. We develop specialized greige fabrics, intricate yarn-dyed patterns, and piece-dyed textiles engineered for balanced shrinkage, weight, and dimensional stability.",
    image: "/images/editorial/cap-cotton.jpg",
    accentColor: "border-burnt text-burnt bg-burnt/10",
    pillColor: "bg-burnt text-cream",
    stats: [
      { label: "Constructions", value: "Greige, Piece-Dyed, Yarn-Dyed" },
      { label: "Weights", value: "Shirt-Weight & Bottom-Weight" },
      { label: "Finishing", value: "Bio-Polished & Deep Pigment" },
    ],
  },
  {
    step: "03",
    id: "innovation",
    label: "INNOVATION",
    title: "Renaissance™ & Comfort Engineering",
    tagline: "Science and technology complementing human comfort",
    desc: "Our signature innovation approach integrates science with textile physics. Through the Renaissance concept, we engineer micro-polyester blends and dual-core elastomeric filaments that disperse moisture rapidly while maintaining over 95% elastic recovery.",
    image: "/images/editorial/inno-renaissance.jpg",
    accentColor: "border-charcoal text-charcoal bg-sand/60",
    pillColor: "bg-charcoal text-cream",
    stats: [
      { label: "Philosophy", value: "Technology to Complement Comfort" },
      { label: "Performance", value: "Hydrophilic Capillary Dispersal" },
      { label: "Structure", value: "Dual-Core Dynamic Stretch" },
    ],
  },
  {
    step: "04",
    id: "apparel",
    label: "APPAREL",
    title: "Tailored Silhouettes & Active Fit",
    tagline: "From 2D pattern geometry to finished fashion",
    desc: "Fabrics are sculpted into premium commercial apparel. Specializing across three core product categories—shirts, bottoms, and activewear—we engineer ergonomic fit lines, mitigate seam torque, and validate durability across lifestyle and active wear.",
    image: "/images/editorial/cap-wovens.jpg",
    accentColor: "border-burnt text-burnt bg-burnt/10",
    pillColor: "bg-burnt text-cream",
    stats: [
      { label: "Core Categories", value: "Shirts, Bottoms, Activewear" },
      { label: "Patterning", value: "Ergonomic 2D/3D Tech Packs" },
      { label: "Durability", value: "High-Frequency Wash Stability" },
    ],
  },
  {
    step: "05",
    id: "network",
    label: "MANUFACTURING NETWORK",
    title: "Vetted Partner Factory Ecosystem",
    tagline: "Orchestrated delivery at global scale",
    desc: "The final phase unites finished specifications with NOVUS's international network of partner factories. An ecosystem representing a collective workforce scale of 4,000–5,000 delivers commercial volume across duty-advantaged trade corridors.",
    image: "/images/editorial/mfg-garment-floor.jpg",
    accentColor: "border-olive text-olive bg-olive/10",
    pillColor: "bg-olive text-cream",
    stats: [
      { label: "Partner Model", value: "Vetted Collaborative Ecosystem" },
      { label: "Workforce Scale", value: "4,000–5,000 Network Scale" },
      { label: "Locations", value: "India, USA & China Footprint" },
    ],
  },
];

export default function ThreadToApparelSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = THREAD_STAGES[activeStage];
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="thread-journey"
      className="py-24 lg:py-36 bg-sand/30 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/70 border border-sand text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-burnt font-bold">
            <span className="w-2 h-2 rounded-full bg-burnt animate-pulse" />
            <span>SECTION 04 // SIGNATURE VISUAL JOURNEY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
            THE NOVUS THREAD: <br />
            <span className="text-olive">FROM THREAD TO POSSIBILITY.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            Follow the recurring journey of textile transformation—from the microscopic physics of raw fiber to finished apparel delivered through an orchestrated partner manufacturing network.
          </p>
        </div>

        {/* 5-Stage Transformation Progress Rail */}
        <div className="relative mb-14">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-sand-dark -translate-y-1/2 z-0" />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {THREAD_STAGES.map((s, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-cream border-charcoal shadow-md scale-[1.02]"
                      : "bg-cream/70 hover:bg-cream border-sand/80 text-charcoal/60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? s.pillColor : "bg-sand text-charcoal/50"
                    }`}>
                      {s.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/40">
                      PHASE
                    </span>
                  </div>
                  <span className={`font-display text-xs sm:text-sm font-bold uppercase tracking-tight transition-colors ${
                    isActive ? "text-charcoal" : "text-charcoal/70"
                  }`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Dynamic Stage Showcase Box */}
        <div className="rounded-3xl bg-cream border border-sand/90 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Detailed Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${stage.pillColor}`}>
                        PHASE {stage.step} OF 05
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-charcoal/50">
                        • {stage.tagline}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-charcoal">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="font-body text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
                    {stage.desc}
                  </p>

                  {/* Micro Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {stage.stats.map((stat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-sand/40 border border-sand">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 block mb-1">
                          {stat.label}
                        </span>
                        <span className="font-display text-xs sm:text-sm font-bold text-charcoal block leading-tight">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Stepper Controls */}
                  <div className="flex items-center gap-4 pt-4 border-t border-sand">
                    <button
                      onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : THREAD_STAGES.length - 1))}
                      className="px-4 py-2 rounded-full border border-sand hover:bg-sand text-xs font-mono uppercase tracking-wider text-charcoal"
                    >
                      ← Previous Phase
                    </button>
                    <button
                      onClick={() => setActiveStage((prev) => (prev < THREAD_STAGES.length - 1 ? prev + 1 : 0))}
                      className="px-5 py-2 rounded-full bg-charcoal text-cream hover:bg-olive text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                    >
                      Next Phase →
                    </button>

                    {stage.id === "network" && (
                      <Link
                        href="/manufacturing"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-burnt font-bold hover:underline ml-auto"
                      >
                        <span>Explore Full Network</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Stage Authentic Imagery (5 cols) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-72 sm:h-96 lg:h-[420px] w-full rounded-2xl overflow-hidden bg-sand border border-sand/80 shadow-sm"
                >
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-charcoal/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream/20">
                      {stage.label} &bull; 2026
                    </span>
                    <span className="text-xs font-mono text-burnt-light font-bold">
                      {stage.step} / 05
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
