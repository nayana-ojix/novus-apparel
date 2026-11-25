"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, Sliders, Layers, Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITY_PILLARS = [
  {
    id: "design",
    step: "01",
    tag: "ATELIER & COUTURE",
    title: "Design and Product Development",
    subtitle: "From Runway Concept to Production-Grade Tech Packs",
    desc: "Our design ateliers in Bangalore collaborate directly with global fashion houses. We engineer original silhouettes, precision patterns, 3D digital avatars, and rapid prototypes across menswear, womenswear, and performance activewear.",
    image: "/images/editorial/cap-design.jpg",
    specs: ["3D Digital Sampling", "Pattern Engineering", "Fit Architecture", "Trend Forecasting"],
    metric: "48-Hour Rapid Prototyping",
  },
  {
    id: "fabric",
    step: "02",
    tag: "TEXTILE SCIENCE",
    title: "Fabric and Material Solutions",
    subtitle: "Engineered Natural Staple & Synthetic Polymer Blends",
    desc: "Specialized mastery across 100% combed cotton, micro-denier polyesters, botanical viscose cellulosics, and TC/PR dual-core wovens. Supported by specialized greige sourcing from our Newwell Textiles division in Shanghai.",
    image: "/images/editorial/cap-cotton.jpg",
    specs: ["100% Combed Cotton", "Micro-Poly Capillary", "Viscose Drape", "Dual-Core Elastic"],
    metric: "Gauge 14 to 34 Circular Cylinders",
  },
  {
    id: "manufacturing",
    step: "03",
    tag: "PRECISION EXECUTION",
    title: "Manufacturing Excellence",
    subtitle: "Vertical Spinning, Circular Knitting & Clean Assembly",
    desc: "Backed by Sri Dhanalakshmi Group facilities powered by 100% captive wind energy in Tamil Nadu. Computerized circular knitting, zero liquid discharge finishing, automated laser cutting, and certified ethical garment assembly.",
    image: "/images/editorial/mfg-circular-knit.jpg",
    specs: ["100% Captive Wind Grid", "Zero Liquid Discharge", "ISO 9001:2015", "Oeko-Tex Standard"],
    metric: "Zero Liquid Discharge (98% Recycled)",
  },
  {
    id: "distribution",
    step: "04",
    tag: "WORLD CORRIDORS",
    title: "Global Marketing and Distribution",
    subtitle: "Seamless Supply Chains Across Continents",
    desc: "Strategically located offices in Bangalore (HQ), North Brunswick (New Jersey, USA), and Shanghai (China). Manufacturing hubs spanning India, China, Vietnam, Bangladesh, Jordan, and Ethiopia ensure duty-optimized global delivery.",
    image: "/images/editorial/cap-logistics.jpg",
    specs: ["Duty-Advantaged Corridors", "North American Logistics", "East Asia Sourcing", "Direct Retail Shipping"],
    metric: "7 International Manufacturing Hubs",
  },
];

// Verified Fabrics for the Interactive Swatch Inspector
const VERIFIED_SWATCHES = [
  {
    id: "cotton",
    name: "100% Combed Cotton Single Jersey",
    category: "NATURAL TEXTILE",
    gsm: "180 - 240 GSM",
    gauge: "28 - 34 GG",
    finish: "Bio-Polished Enzyme Wash",
    image: "/images/editorial/cap-cotton.jpg",
    desc: "Microscopic ring-spun yarn loops ensuring high dimensional stability, zero seam-torque, and ultra-soft hand feel for luxury lifestyle garments.",
  },
  {
    id: "micro-poly",
    name: "Micro-Polyester Athletic Mesh",
    category: "PERFORMANCE KNIT",
    gsm: "135 - 190 GSM",
    gauge: "32 GG Micro",
    finish: "Hydrophilic Capillary Dispersion",
    image: "/images/editorial/cap-performance.jpg",
    desc: "Functional micro-denier filament with 4-way elastic recovery, rapid moisture evaporation, and UV protective shield for high-intensity sportswear.",
  },
  {
    id: "viscose",
    name: "Viscose Botanical Drape Blend",
    category: "HAUTE CELLULOSIC",
    gsm: "210 - 280 GSM",
    gauge: "24 - 28 GG",
    finish: "Silken Peach Touch",
    image: "/images/editorial/cap-viscose.jpg",
    desc: "Regenerated botanical cellulosics offering natural thermoregulation, fluid liquid drape, and deep colorfast luster for contemporary collections.",
  },
  {
    id: "dual-core",
    name: "TC, PR & Dual-Core Structured Woven",
    category: "TAILORED APPAREL",
    gsm: "160 - 320 GSM",
    gauge: "Air-Jet Weave",
    finish: "Wrinkle-Resist & Core Stretch",
    image: "/images/editorial/cap-wovens.jpg",
    desc: "Core-spun elastomeric filament wrapped with combed staple fibers for crisp corporate trousers, tailored shirts, and structured uniforms.",
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePillar, setActivePillar] = useState(0);
  const [activeSwatch, setActiveSwatch] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cap-title-anim", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cap-title-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".cap-block-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cap-block-wrapper",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = CAPABILITY_PILLARS[activePillar];
  const swatch = VERIFIED_SWATCHES[activeSwatch];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="py-28 lg:py-40 bg-sand/35 relative overflow-hidden text-charcoal border-b border-sand/60"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Label */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-burnt" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-burnt font-semibold">
            02 — OUR CAPABILITIES
          </span>
        </div>

        {/* Section Headline */}
        <div className="cap-title-wrapper mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-charcoal/15 pb-8">
          <div className="overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="cap-title-anim inline-block">FROM DESIGN</span>
              </span>
              <span className="block overflow-hidden">
                <span className="cap-title-anim inline-block text-burnt">TO END PRODUCT.</span>
              </span>
            </h2>
          </div>

          <p className="font-body text-base sm:text-lg text-charcoal/70 max-w-md font-light leading-relaxed">
            Four interconnected editorial disciplines delivering end-to-end apparel manufacturing with peerless precision, certified ethics, and global reach.
          </p>
        </div>

        {/* 4 Pillars Interactive Asymmetrical Showcase */}
        <div className="cap-block-wrapper grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-24">
          {/* Left: Asymmetric Hero Visual Display (7 cols) */}
          <div className="cap-block-reveal lg:col-span-7 flex flex-col">
            <div className="relative aspect-[16/11] lg:aspect-auto lg:flex-1 min-h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-charcoal group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Bottom Card Details */}
              <div className="absolute bottom-8 left-8 right-8 text-cream z-10 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-burnt text-cream text-[10px] font-display font-semibold uppercase tracking-widest shadow-md">
                    {current.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cream/20 backdrop-blur-md text-cream text-[10px] font-display font-medium uppercase tracking-wider">
                    {current.metric}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-cream/80 font-body max-w-xl leading-relaxed">
                  {current.desc}
                </p>

                {/* Specs chips */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {current.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-display text-cream border border-white/15"
                    >
                      <Check className="w-3 h-3 text-olive-light" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Interactive Selector Cards (5 cols) */}
          <div className="cap-block-reveal lg:col-span-5 flex flex-col justify-between gap-3.5">
            {CAPABILITY_PILLARS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActivePillar(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activePillar === idx
                    ? "bg-white border-burnt/40 shadow-xl scale-[1.01]"
                    : "bg-white/60 border-sand hover:bg-white hover:border-burnt/20"
                }`}
              >
                <span
                  className={`font-display text-2xl font-bold shrink-0 transition-colors ${
                    activePillar === idx ? "text-burnt" : "text-charcoal/30"
                  }`}
                >
                  {item.step}
                </span>

                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-display uppercase tracking-widest text-olive font-semibold block">
                    {item.tag}
                  </span>
                  <h4 className="font-display font-bold text-base sm:text-lg text-charcoal">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal/60 font-body line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    activePillar === idx
                      ? "bg-burnt text-white rotate-45"
                      : "bg-sand text-charcoal/40"
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Material Swatch Inspector */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-sand">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive/10 text-olive text-[10px] font-display uppercase tracking-widest font-semibold mb-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>INTERACTIVE SWATCH INSPECTOR</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-charcoal">
                Verified Material Physics
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal/60 font-body max-w-md">
              Inspect technical knit structures, cylinder gauges, and functional finishes sourced and manufactured across our vertical facilities.
            </p>
          </div>

          {/* Swatch Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {VERIFIED_SWATCHES.map((sw, idx) => (
              <button
                key={sw.id}
                onClick={() => setActiveSwatch(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  activeSwatch === idx
                    ? "bg-charcoal text-cream border-charcoal shadow-md"
                    : "bg-cream/40 text-charcoal border-sand hover:bg-cream"
                }`}
              >
                <span className="text-[9px] font-display uppercase tracking-widest block opacity-70 mb-1">
                  {sw.category}
                </span>
                <span className="font-display font-bold text-xs sm:text-sm block line-clamp-1">
                  {sw.name}
                </span>
              </button>
            ))}
          </div>

          {/* Swatch Detail Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream/30 p-6 sm:p-8 rounded-2xl border border-sand">
            <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-sand shadow-md">
              <Image
                src={swatch.image}
                alt={swatch.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-display uppercase font-bold text-burnt shadow">
                {swatch.category}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[10px] font-display uppercase tracking-widest text-olive font-semibold block mb-1">
                  {swatch.finish}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                  {swatch.name}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/70 font-body leading-relaxed mt-2">
                  {swatch.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-display text-xs">
                <div className="p-3 bg-white rounded-xl border border-sand">
                  <span className="text-charcoal/50 text-[10px] uppercase tracking-wider block">Fabric Weight</span>
                  <span className="text-base font-bold text-burnt">{swatch.gsm}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sand">
                  <span className="text-charcoal/50 text-[10px] uppercase tracking-wider block">Cylinder Gauge</span>
                  <span className="text-base font-bold text-olive">{swatch.gauge}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sand col-span-2 sm:col-span-1">
                  <span className="text-charcoal/50 text-[10px] uppercase tracking-wider block">Quality Grade</span>
                  <span className="text-base font-bold text-charcoal">Tier-1 Export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
