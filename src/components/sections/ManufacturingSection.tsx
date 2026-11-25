"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wind, Droplets, CheckCircle, Factory, Globe2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERIFIED_STATS = [
  {
    value: "100%",
    suffix: " WIND",
    label: "Captive Green Energy",
    desc: "100% of electrical energy consumed in yarn spinning is self-generated via captive wind turbine farms in Tamil Nadu.",
  },
  {
    value: "$160M",
    suffix: " USD",
    label: "Group Annual Turnover",
    desc: "Backed by the financial strength, asset base, and five-decade legacy of the Sri Dhanalakshmi Group (Est. 1971).",
  },
  {
    value: "98%",
    suffix: " ZLD",
    label: "Zero Liquid Discharge",
    desc: "Comprehensive biological effluent treatment plant returning 98% of processed water back to industrial cycles.",
  },
  {
    value: "7",
    suffix: " NATIONS",
    label: "Global Manufacturing Network",
    desc: "Operational corridors across India, China, Vietnam, Bangladesh, Jordan, Ethiopia, and the United States.",
  },
];

const MANUFACTURING_HUBS = [
  {
    country: "India",
    flag: "🇮🇳",
    role: "Integrated Spinning, Knitting & Captive Wind Power",
    desc: "Core manufacturing backbone within Sri Dhanalakshmi Group facilities.",
  },
  {
    country: "China",
    flag: "🇨🇳",
    role: "Technical Sourcing & Greige Development",
    desc: "Led by Newwell Textiles in Pudong New District, Shanghai.",
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    role: "Performance Activewear & Lifestyle Garmenting",
    desc: "Duty-advantaged export channels for North American retail.",
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    role: "High-Volume Structured Wovens & Bottom-Weights",
    desc: "High-efficiency vertical sewing and finishing plants.",
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    role: "Duty-Free Americas Export Corridor",
    desc: "Fast turnaround assembly lines serving major US apparel brands.",
  },
  {
    country: "Ethiopia",
    flag: "🇪🇹",
    role: "Hydro-Powered Eco-Industrial Park",
    desc: "Clean hydroelectric manufacturing with low-carbon footprint.",
  },
];

export default function ManufacturingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".mfg-heading-span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mfg-heading-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".mfg-stat-box", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mfg-stats-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      className="py-28 lg:py-40 bg-charcoal text-cream relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-olive/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-burnt/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-olive-light" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-burnt-light font-semibold">
            04 — MANUFACTURING & PRECISION INFRASTRUCTURE
          </span>
        </div>

        {/* Section Headline */}
        <div className="mfg-heading-wrapper mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-cream/15 pb-8">
          <div className="lg:col-span-8 overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="mfg-heading-span inline-block">BUILT ON PRECISION.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="mfg-heading-span inline-block text-olive-light">DRIVEN BY PEOPLE.</span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="font-body text-base sm:text-lg text-cream/70 font-light leading-relaxed">
              Authentic manufacturing infrastructure with zero reliance on fossil electricity. 100% captive wind-powered spinning and biological water recovery.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive/20 text-olive-light text-[11px] font-display uppercase tracking-wider font-semibold">
              <Wind className="w-3.5 h-3.5" />
              <span>100% Captive Wind Generation</span>
            </div>
          </div>
        </div>

        {/* Verified Stats Grid */}
        <div className="mfg-stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {VERIFIED_STATS.map((stat, i) => (
            <div
              key={i}
              className="mfg-stat-box p-8 rounded-2xl bg-charcoal-light/60 border border-cream/15 hover:border-olive-light/50 transition-all duration-300 space-y-3"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-burnt">
                  {stat.value}
                </span>
                <span className="font-display text-xs font-bold text-olive-light">
                  {stat.suffix}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-cream">
                {stat.label}
              </h4>
              <p className="text-xs text-cream/60 font-body leading-relaxed font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Immersive Wide-Format Photography Showcase (4 Authentic Factory Angles) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Main Wide Angle: Captive Wind Turbines in Tamil Nadu */}
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/15 group shadow-xl">
            <Image
              src="/images/editorial/mfg-wind-energy.jpg"
              alt="Captive wind turbine farm in Tamil Nadu"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="px-3 py-1 rounded-full bg-olive text-cream text-[10px] font-display uppercase tracking-widest font-bold inline-block mb-2 shadow">
                Clean Energy Manifesto
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                Self-Sustaining Wind Generation Grid
              </h3>
              <p className="text-xs text-cream/70 font-body mt-1 max-w-lg">
                Dedicated wind turbine infrastructure in Tamil Nadu delivering 100% captive green power across yarn spinning units.
              </p>
            </div>
          </div>

          {/* Secondary Top Right: Circular Knitting Machinery */}
          <div className="md:col-span-5 relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/15 group shadow-xl">
            <Image
              src="/images/editorial/mfg-circular-knit.jpg"
              alt="High-gauge circular knitting machines"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="px-3 py-1 rounded-full bg-burnt text-cream text-[10px] font-display uppercase tracking-widest font-bold inline-block mb-1.5 shadow">
                Precision Knitting
              </span>
              <h4 className="font-display text-lg font-bold">
                High-Gauge Cylinders (GG 14 to 34)
              </h4>
            </div>
          </div>

          {/* Secondary Bottom Left: Zero Liquid Discharge Water Treatment */}
          <div className="md:col-span-5 relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/15 group shadow-xl">
            <Image
              src="/images/editorial/mfg-zld-water.jpg"
              alt="Zero Liquid Discharge biological treatment plant"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="px-3 py-1 rounded-full bg-olive text-cream text-[10px] font-display uppercase tracking-widest font-bold inline-block mb-1.5 shadow">
                Ecological Stewardship
              </span>
              <h4 className="font-display text-lg font-bold">
                Zero Liquid Discharge (98% Recirculated)
              </h4>
            </div>
          </div>

          {/* Secondary Bottom Right: Garment Production Floor */}
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/15 group shadow-xl">
            <Image
              src="/images/editorial/mfg-garment-floor.jpg"
              alt="Modern ethical apparel assembly floor"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream">
              <span className="px-3 py-1 rounded-full bg-burnt text-cream text-[10px] font-display uppercase tracking-widest font-bold inline-block mb-2 shadow">
                Ethical Human Capital
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                Dignified, Ergonomic Workplaces
              </h3>
              <p className="text-xs text-cream/70 font-body mt-1 max-w-lg">
                Audited labor compliance, fair wage guarantees, and continuous skill advancement across all production lines.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Country Manufacturing Network Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-light/40 border border-cream/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-burnt-light font-bold block mb-1">
                MULTI-COUNTRY VALUE CREATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream">
                Regional Specialization Network
              </h3>
            </div>
            <span className="text-xs font-display text-cream/50 uppercase tracking-wider">
              7 Touchpoints Across Continents
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-charcoal border border-cream/10 space-y-2 hover:border-olive-light/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{hub.flag}</span>
                  <div>
                    <h5 className="font-display font-bold text-base text-cream">
                      {hub.country}
                    </h5>
                    <span className="text-[10px] font-display uppercase tracking-wider text-olive-light block">
                      {hub.role}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-cream/60 font-body leading-relaxed font-light">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
