"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, Droplets, RefreshCw, Compass, ArrowUpRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RENAISSANCE_PILLARS = [
  {
    icon: Droplets,
    title: "Hydrophilic Capillary Dispersion",
    concept: "Moisture Dispersion",
    desc: "Engineered micro-polyester filaments designed to rapidly pull perspiration outward from the skin across a widened surface area, accelerating natural evaporation.",
  },
  {
    icon: Zap,
    title: "Dual-Core Elasticity & Recovery",
    concept: "Shape Retention",
    desc: "Composite filament architectures that provide multi-directional mechanical stretch while resisting permanent garment bagging and seam deformation.",
  },
  {
    icon: RefreshCw,
    title: "Comfort to Complement Technology",
    concept: "Tactile Ergonomics",
    desc: "Balancing high-performance synthetic properties with natural fiber softness, ensuring activewear and lifestyle garments maintain an ultra-smooth boundary layer against the body.",
  },
  {
    icon: Cpu,
    title: "Dimensional Integrity",
    concept: "Seam-Torque Mitigation",
    desc: "Calibrated spinning twist and heat-set relaxation to minimize rotational skewing, keeping tailored collars, plackets, and trouser hems crisp after repetitive wear.",
  },
];

export default function InnovationTechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedPillar, setSelectedPillar] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".inno-tech-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className="py-24 lg:py-36 bg-sand/25 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="inno-tech-reveal flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-burnt" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
            SECTION 06 // INNOVATION & TECHNOLOGY
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 inno-tech-reveal">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              SCIENCE, TECHNOLOGY & <br />
              <span className="text-olive">ENGINEERING APPAREL.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
              NOVUS combines science, technology, and engineering to elevate everyday apparel. Rather than treating fashion as purely aesthetic, our product development approaches fabric construction, yarn physics, and garment assembly through systematic technical inquiry.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="p-6 rounded-2xl bg-cream border border-sand/80 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block mb-1">
                SIGNATURE CONCEPT
              </span>
              <h3 className="font-display text-xl font-bold text-charcoal uppercase mb-2">
                The Renaissance™ Concept
              </h3>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed font-light">
                &ldquo;Technology to Complement Comfort.&rdquo; Bringing advanced polymer research and micro-fiber blending to human lifestyle apparel.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center inno-tech-reveal">
          {/* Left Column: Authentic R&D Imagery Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-sand border border-sand/80 p-3 sm:p-4 shadow-sm">
              <div className="relative h-80 sm:h-[440px] w-full rounded-2xl overflow-hidden bg-sand">
                <Image
                  src="/images/editorial/inno-renaissance.jpg"
                  alt="Novus Apparel Renaissance concept and material innovation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

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
          </div>

          {/* Right Column: 4 Technical Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {RENAISSANCE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-cream border border-sand/80 hover:border-olive/50 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4"
                >
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

                  <div className="pt-3 border-t border-sand/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-charcoal/50">
                    <span>Verified Approach</span>
                    <span>Pillar 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Materials Summary Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-cream border border-sand/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 inno-tech-reveal">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
              DOCUMENTED MATERIAL PORTFOLIO
            </span>
            <p className="font-display text-sm sm:text-base font-bold text-charcoal">
              Cotton &bull; Cotton Blends &bull; Micro Polyester &bull; Viscose Blends &bull; Greige &bull; Piece-Dyed &bull; Yarn-Dyed
            </p>
          </div>

          <Link
            href="/manufacturing#fabrics"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-burnt hover:text-charcoal font-semibold shrink-0"
          >
            <span>Review Fabric Specifications</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
