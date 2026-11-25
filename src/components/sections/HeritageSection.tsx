"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wind, ShieldCheck, CheckCircle2, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERITAGE_TIMELINE = [
  {
    year: "1971",
    tag: "GROUP FOUNDATION",
    title: "Sri Dhanalakshmi Group Established",
    desc: "Founded with an uncompromising commitment to textile craftsmanship, agricultural stewardship, and high-integrity production.",
    stat: "Est. 1971",
  },
  {
    year: "1992",
    tag: "CLEAN INFRASTRUCTURE",
    title: "100% Captive Wind Mill Generation",
    desc: "Invested in captive wind turbine farms across Tamil Nadu to power spinning and sizing operations, eliminating fossil fuel reliance.",
    stat: "100% Wind Power",
  },
  {
    year: "2004",
    tag: "GLOBAL CORRIDORS",
    title: "USA & East Asian Expansion",
    desc: "Established Newwell Textiles in Pudong, Shanghai for raw material sourcing, alongside our Americas client liaison in North Brunswick, New Jersey.",
    stat: "USA • China • India",
  },
  {
    year: "2016",
    tag: "CIRCULAR CHEMISTRY",
    title: "Zero Liquid Discharge & Sustainable Finishing",
    desc: "Commissioned biological effluent treatment systems recirculating 98% of process water and low-temperature enzymatic chemistry.",
    stat: "98% Water Recirculation",
  },
  {
    year: "TODAY",
    tag: "VERTICAL EXCELLENCE",
    title: "NOVUS APPAREL LIMITED",
    desc: "Providing seamless one-stop vertical apparel solutions from fiber research and knit engineering to finished fashion collections for global brands.",
    stat: "$160M USD Group Scale",
  },
];

export default function HeritageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeEra, setActiveEra] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".heritage-heading-line", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heritage-heading-wrapper",
          start: "top 85%",
        },
      });

      gsap.from(".heritage-card-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heritage-cards-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="py-28 lg:py-40 bg-cream relative overflow-hidden text-charcoal border-b border-sand/40"
    >
      {/* Subtle organic ambient glow */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-olive/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-burnt/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-olive font-semibold">
            01 — OUR HERITAGE & ORIGIN
          </span>
        </div>

        {/* Monumental Headline */}
        <div className="heritage-heading-wrapper mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="heritage-heading-line inline-block">A LEGACY OF</span>
              </span>
              <span className="block overflow-hidden">
                <span className="heritage-heading-line inline-block text-olive">EXCELLENCE.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="heritage-heading-line inline-block">A VISION FOR</span>
              </span>
              <span className="block overflow-hidden">
                <span className="heritage-heading-line inline-block text-burnt">TOMORROW.</span>
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="font-body text-base sm:text-lg text-charcoal/70 leading-relaxed font-light">
              NOVUS APPAREL is part of the <strong className="text-charcoal font-semibold">Sri Dhanalakshmi Group</strong>,
              established in 1971 with an aggregate turnover of <strong className="text-charcoal font-semibold">USD $160 Million</strong>.
              Over five decades, we have bridged raw fiber science, captive clean energy, and modern fashion manufacturing.
            </p>
            <div className="flex items-center gap-6 pt-2 font-display text-xs">
              <div>
                <span className="text-3xl font-bold text-burnt block">1971</span>
                <span className="text-charcoal/50 uppercase tracking-wider text-[10px]">Founded</span>
              </div>
              <div className="w-px h-10 bg-sand" />
              <div>
                <span className="text-3xl font-bold text-olive block">$160M</span>
                <span className="text-charcoal/50 uppercase tracking-wider text-[10px]">Group Turnover</span>
              </div>
              <div className="w-px h-10 bg-sand" />
              <div>
                <span className="text-3xl font-bold text-charcoal block">100%</span>
                <span className="text-charcoal/50 uppercase tracking-wider text-[10px]">Captive Wind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Storytelling Section */}
        <div className="heritage-cards-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20">
          {/* Left: Large Editorial Heritage Photography Frame */}
          <div className="heritage-card-reveal lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-sand group">
              <Image
                src="/images/editorial/heritage-mill.jpg"
                alt="Sri Dhanalakshmi Group spinning infrastructure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="px-3 py-1 rounded-full bg-olive text-cream text-[10px] font-display font-semibold uppercase tracking-widest inline-block mb-2 shadow">
                  Captive Industrial Spinning Infrastructure
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  Five Decades of Industrial Precision
                </h3>
                <p className="text-xs text-cream/70 font-body mt-1 max-w-lg">
                  Automated spinning and circular knitting frames running on captive green wind power in Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Sub-card: Secondary archival image */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-sand shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-36 h-28 rounded-xl overflow-hidden shrink-0 border border-sand">
                <Image
                  src="/images/editorial/heritage-archive.jpg"
                  alt="Textile weaving archive"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-display uppercase tracking-widest text-burnt font-semibold">
                  Heritage Stewardship
                </span>
                <h4 className="font-display font-bold text-base text-charcoal">
                  End-to-End Vertical Quality Control
                </h4>
                <p className="text-xs text-charcoal/60 leading-relaxed font-body">
                  Zero subcontracting compromises. From combed cotton selection to final export carton, every garment adheres to strict international testing standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Timeline Accordion */}
          <div className="heritage-card-reveal lg:col-span-5 flex flex-col justify-between space-y-3">
            {HERITAGE_TIMELINE.map((step, idx) => (
              <button
                key={step.year}
                onClick={() => setActiveEra(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeEra === idx
                    ? "bg-white border-olive/40 shadow-lg scale-[1.01]"
                    : "bg-white/60 border-sand hover:bg-white hover:border-olive/20"
                }`}
              >
                <span
                  className={`font-display text-2xl font-bold tracking-tight shrink-0 transition-colors ${
                    activeEra === idx ? "text-burnt" : "text-charcoal/40"
                  }`}
                >
                  {step.year}
                </span>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-display uppercase tracking-widest text-olive font-semibold">
                      {step.tag}
                    </span>
                    <span className="text-[10px] font-display font-bold text-charcoal/50">
                      {step.stat}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-charcoal leading-snug">
                    {step.title}
                  </h4>
                  {activeEra === idx && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-charcoal/70 leading-relaxed font-body pt-1"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
