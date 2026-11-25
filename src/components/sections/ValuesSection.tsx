"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeartHandshake, Scale, Award, Leaf, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VERIFIED_VALUES = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Respect for People",
    desc: "Every artisan, technician, engineer, and client partner is treated with dignity, fairness, and mutual professional respect across all facilities worldwide.",
    highlight: "Zero Child Labor • Dignified Living Wages",
  },
  {
    icon: Scale,
    number: "02",
    title: "Ethical Behaviour",
    desc: "Transparent supply chains, strict compliance with global human rights standards, audited workplaces, and uncompromising integrity in every transaction.",
    highlight: "Full Traceability • ISO Audited",
  },
  {
    icon: Award,
    number: "03",
    title: "Commitment",
    desc: "From raw cotton cultivation to the final shipment, we honor every promise in lead time, product durability, tensile fidelity, and client confidentiality.",
    highlight: "100% On-Time Delivery Track Record",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Sustainable Technology",
    desc: "Harmonizing industrial scale with ecological responsibility through 100% captive wind energy in Tamil Nadu, zero liquid discharge, and clean non-toxic chemistry.",
    highlight: "Captive Wind Grid • 98% Water Recirculation",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".values-title-span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-heading-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".values-card-box", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-cards-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="values"
      className="py-28 lg:py-40 bg-olive text-cream relative overflow-hidden"
    >
      {/* Decorative vector watermarks */}
      <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] rounded-full border border-cream/10 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full border border-cream/10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full border border-cream/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Pill */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-burnt" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-burnt-light font-semibold">
            06 — OUR CORE VALUES
          </span>
        </div>

        {/* Section Headline */}
        <div className="values-heading-wrapper mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-cream/20 pb-8">
          <div className="overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="values-title-span inline-block">BUILDING A</span>
              </span>
              <span className="block overflow-hidden">
                <span className="values-title-span inline-block text-burnt-light">BETTER TOMORROW.</span>
              </span>
            </h2>
          </div>

          <p className="font-body text-base sm:text-lg text-cream/80 max-w-md font-light leading-relaxed">
            Our founding values guide our ethical footprint across spinning mills, design studios, and global trading corridors.
          </p>
        </div>

        {/* 4 Pillars Grid with refined animations */}
        <div className="values-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {VERIFIED_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="values-card-box p-8 sm:p-10 rounded-3xl bg-cream/10 backdrop-blur-md border border-cream/15 hover:border-burnt-light/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-cream/15 border border-cream/20 flex items-center justify-center text-cream group-hover:bg-burnt group-hover:border-burnt transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-display text-3xl font-bold text-cream/30 group-hover:text-burnt-light transition-colors">
                    {val.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream/75 font-body leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream/15 flex items-center justify-between text-xs font-display">
                  <span className="text-[11px] text-burnt-light font-bold uppercase tracking-wider">
                    {val.highlight}
                  </span>
                  <span className="text-cream/50 text-[10px] uppercase tracking-widest">
                    Verified Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Company Motto Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-cream text-charcoal border border-sand shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-display uppercase tracking-widest text-burnt font-bold block">
              OFFICIAL COMPANY MOTTO
            </span>
            <h4 className="font-display text-3xl sm:text-4xl font-black text-charcoal">
              &ldquo;MAKE A DIFFERENCE.&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/60 font-body">
              A guiding creed established in 1971 by the Sri Dhanalakshmi Group.
            </p>
          </div>

          <a
            href="#global"
            className="shrink-0 px-8 py-4 rounded-full bg-burnt hover:bg-burnt-dark text-cream font-display text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
          >
            Connect With Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
