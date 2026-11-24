"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle, ShieldCheck, Flame, Layers } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { PRODUCT_COLLECTIONS } from "@/data/company";

const TECHNICAL_FINISHES = [
  {
    name: "Hydrophilic Moisture Dispersal",
    category: "Thermal Equilibrium",
    desc: "Rapid capillary dispersion drawing perspiration away from the skin for all-day thermal equilibrium in high-performance garments.",
    accent: "text-atelier-emerald",
  },
  {
    name: "Dual-Core Kinetic Elasticity",
    category: "Shape Retention",
    desc: "Multi-component yarn structure providing instantaneous elastic recovery without bagging at knees or elbows after extended wear.",
    accent: "text-atelier-gold",
  },
  {
    name: "Silken Cashmere Handfeel",
    category: "Tactile Luxury",
    desc: "Proprietary bio-polishing and micro-sanded finishing creating a whisper-soft, luxurious hand on compact cotton and viscose blends.",
    accent: "text-atelier-champagne",
  },
  {
    name: "Wrinkle-Resistant Easy Care",
    category: "Executive Performance",
    desc: "Advanced molecular cross-linking finishing that keeps executive shirting crisp and wrinkle-free through international travel and humid climates.",
    accent: "text-atelier-terracotta",
  },
];

export default function ProductsInnovationPage() {
  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>03 // MATERIAL SCIENCE & COLLECTIONS</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              RENAISSANCE™ & <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                tactile material
              </span>{" "}
              INNOVATION.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              From our flagship Renaissance™ concept line to engineered bottom-weight greige and high-twist compact combed shirting, we design textiles that honor human comfort and withstand demanding modern lifestyles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Renaissance Flagship Hero */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-atelier-card">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                Flagship Concept Line
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                Renaissance™ — Technology to Complement Comfort
              </h2>
              <div className="w-16 h-[2px] bg-atelier-gold my-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                We honor customer comfort as paramount. Under the Renaissance banner, we invite global brand partners to co-create revolutionary material applications for apparel lifestyle and sporting goods.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                By combining our proprietary fiber compounding, micro-polyester blends, and dual-core recovery filaments with in-depth consumer trends, Renaissance transforms standard everyday wear into an effortless sensory experience.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 text-xs font-mono text-atelier-champagne">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-atelier-gold" />
                  <span>Micro-Polyester Weaves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-atelier-gold" />
                  <span>Dual-Core Elasticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-atelier-gold" />
                  <span>Rapid Moisture Dispersal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-atelier-gold" />
                  <span>Dynamic Shape Memory</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 lg:h-[460px] w-full rounded-2xl border border-white/10 overflow-hidden bg-black">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=85"
                alt="Renaissance Technical Fabric Collection"
                fill
                className="object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Fabric Portfolios
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Engineered Material Categories
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Formulated across spinning, sizing, and wide-width weaving facilities in India and specialized polymer R&D in Shanghai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCT_COLLECTIONS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="rounded-3xl bg-atelier-navy border border-white/10 hover:border-atelier-gold/40 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-atelier-card">
                <div className="relative h-64 sm:h-72 w-full border-b border-white/10 overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/90 border border-white/20 text-[10px] font-mono uppercase tracking-wider text-atelier-gold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-atelier-champagne italic mt-1">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                      Technical Properties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/10"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Proprietary Technical Finishes */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Advanced Chemistry
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Proprietary Finishing & Performance Technologies
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Tailoring tactile handfeel, thermodynamic moisture handling, and wrinkle recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_FINISHES.map((finish, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-3 h-full flex flex-col justify-between">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${finish.accent}`}>
                    {finish.category}
                  </span>
                  <h4 className="font-syne text-xl font-bold text-white uppercase">
                    {finish.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mt-2">
                    {finish.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
