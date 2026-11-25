"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, Droplets, RefreshCw, Sparkles, Shield, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RENAISSANCE_FEATURES = [
  {
    icon: Droplets,
    title: "Hydrophilic Capillary Dispersion",
    desc: "Micro-denier cross-sections channel perspiration outward across a magnified surface area for instant evaporation during high exertion.",
  },
  {
    icon: Zap,
    title: "Dual-Core Dynamic Recovery",
    desc: "Core-spun elastomeric centers engineered for 4-way stretch with over 96% elasticity retention after 100+ commercial wash cycles.",
  },
  {
    icon: Shield,
    title: "Thermoregulating Skin Touch",
    desc: "Engineered micro-chambers maintain balanced boundary layer temperature against the skin in varying ambient climates.",
  },
  {
    icon: RefreshCw,
    title: "Zero Seam-Torque Stability",
    desc: "Pre-conditioned compact yarn spirals eliminate rotational twist, ensuring garments retain sharp tailoring indefinitely.",
  },
];

export default function InnovationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".inno-headline-span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".inno-heading-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".inno-feature-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".inno-features-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className="py-28 lg:py-40 bg-cream relative overflow-hidden text-charcoal border-b border-sand/40"
    >
      {/* Decorative ambient blurred orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-olive/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-burnt/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-olive font-semibold">
            03 — R&D & TECHNOLOGY
          </span>
        </div>

        {/* Section Headline */}
        <div className="inno-heading-wrapper mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b-2 border-charcoal/15 pb-8">
          <div className="lg:col-span-8 overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="inno-headline-span inline-block">INNOVATION IN</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inno-headline-span inline-block text-olive">EVERY THREAD.</span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              Novus operates an extensive R&D architecture connecting fiber chemistry in Shanghai, spinning in Tamil Nadu, and rapid prototyping in Bangalore.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive/10 text-olive text-[11px] font-display font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology to Complement Comfort</span>
            </div>
          </div>
        </div>

        {/* Renaissance™ Innovation Showcase: Asymmetrical Split */}
        <div className="rounded-3xl bg-charcoal text-cream overflow-hidden shadow-2xl mb-20 border border-charcoal-light">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Visual Showcase (6 cols) */}
            <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] lg:aspect-auto min-h-[460px] bg-charcoal-dark">
              <Image
                src="/images/editorial/inno-renaissance.jpg"
                alt="Renaissance Technology Collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-charcoal" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto z-10 bg-charcoal/80 backdrop-blur-md p-4 rounded-2xl border border-cream/15 max-w-sm">
                <div className="flex items-center gap-2 text-burnt text-[10px] font-display uppercase tracking-widest font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SIGNATURE CONCEPT</span>
                </div>
                <h4 className="font-display font-bold text-lg text-cream leading-tight">
                  Renaissance™ Collection
                </h4>
                <p className="text-[11px] text-cream/70 font-body mt-1">
                  Technology to complement comfort — engineered micro-polyester blends and dual-core elasticity.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative & Technical Specifications (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-display uppercase tracking-ultra text-burnt-light font-bold">
                  VERIFIED PRODUCT LINE • RENAISSANCE
                </span>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-[0.95]">
                  Where Textile Physics <br />
                  <span className="text-olive-light">Complements Comfort.</span>
                </h3>

                <p className="text-xs sm:text-sm text-cream/75 font-body leading-relaxed max-w-lg font-light">
                  Renaissance represents our pinnacle synergy between technical textile physics and everyday human wearability. Designed for global sporting goods and lifestyle apparel leaders who demand featherweight breathability, superior recovery, and elegant tactile hand-feel.
                </p>
              </div>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cream/15">
                {RENAISSANCE_FEATURES.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="space-y-1.5 p-3.5 rounded-xl bg-cream/5 border border-cream/10">
                      <div className="flex items-center gap-2 text-burnt-light">
                        <Icon className="w-4 h-4 shrink-0" />
                        <h5 className="font-display font-bold text-xs text-cream tracking-wide">
                          {feat.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-cream/60 font-body leading-relaxed font-light">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* East Asia Sourcing Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-display">
                <span className="text-cream/60">
                  Developed in collaboration with Newwell Textiles, Pudong, Shanghai.
                </span>
                <span className="shrink-0 px-4 py-2 rounded-full bg-burnt text-cream font-bold text-[10px] uppercase tracking-wider shadow">
                  Global Patent Spec
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary R&D Discipline Grid */}
        <div className="inno-features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="inno-feature-card p-8 rounded-2xl bg-white border border-sand shadow-sm space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-sand">
              <Image
                src="/images/editorial/inno-lab.jpg"
                alt="Textile testing lab"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[10px] font-display uppercase tracking-widest text-burnt font-bold block">
              LABORATORY METROLOGY
            </span>
            <h4 className="font-display font-bold text-xl text-charcoal">
              Spectrophotometric Colorfastness
            </h4>
            <p className="text-xs text-charcoal/60 leading-relaxed font-body">
              Digital color matching under D65, TL84, and CWF light sources ensuring delta-E &lt; 0.5 conformity across massive dye lots.
            </p>
          </div>

          <div className="inno-feature-card p-8 rounded-2xl bg-white border border-sand shadow-sm space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-sand">
              <Image
                src="/images/editorial/fabric-macro.jpg"
                alt="Microscopic fiber loop structure"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[10px] font-display uppercase tracking-widest text-olive font-bold block">
              CIRCULAR CYLINDERS
            </span>
            <h4 className="font-display font-bold text-xl text-charcoal">
              Gauge 14 to 34 Circular Knits
            </h4>
            <p className="text-xs text-charcoal/60 leading-relaxed font-body">
              Single jersey, interlock, pique, rib, and French terry engineered with uniform loop height for pristine digital screen printing.
            </p>
          </div>

          <div className="inno-feature-card p-8 rounded-2xl bg-white border border-sand shadow-sm space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-sand">
              <Image
                src="/images/editorial/cap-performance.jpg"
                alt="Activewear textile science"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[10px] font-display uppercase tracking-widest text-charcoal/60 font-bold block">
              ECO CHEMISTRY
            </span>
            <h4 className="font-display font-bold text-xl text-charcoal">
              Low-Liquor Reactive Dyeing
            </h4>
            <p className="text-xs text-charcoal/60 leading-relaxed font-body">
              1:4 ultra-low liquor ratio machinery utilizing non-hazardous dyestuffs, cutting thermal consumption by 45% per kilo of finished fabric.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
