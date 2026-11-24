"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle, ShieldCheck, Flame, Layers } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import { PRODUCT_COLLECTIONS } from "@/data/company";

const TECHNICAL_FINISHES = [
  {
    name: "Hydrophilic Moisture Dispersal",
    category: "Thermal Equilibrium",
    desc: "Rapid capillary dispersion drawing perspiration away from the skin for all-day thermal equilibrium in high-performance garments.",
    accent: "text-novus-teal-light",
  },
  {
    name: "Dual-Core Kinetic Elasticity",
    category: "Shape Retention",
    desc: "Multi-component yarn structure providing instantaneous elastic recovery without bagging at knees or elbows after extended wear.",
    accent: "text-novus-gold",
  },
  {
    name: "Silken Cashmere Handfeel",
    category: "Tactile Luxury",
    desc: "Proprietary bio-polishing and micro-sanded finishing creating a whisper-soft, luxurious hand on compact cotton and viscose blends.",
    accent: "text-novus-champagne",
  },
  {
    name: "Wrinkle-Resistant Easy Care",
    category: "Executive Performance",
    desc: "Advanced molecular cross-linking finishing that keeps executive shirting crisp and wrinkle-free through international travel and humid climates.",
    accent: "text-novus-coral",
  },
];

export default function ProductsInnovationPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="gold">Material Science & Collections</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Products & <br />
              <span className="italic font-normal text-gold-gradient">
                Material Innovation.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              From our flagship Renaissance™ concept line to engineered bottom-weight greige and high-twist compact combed shirting, we design textiles that honor human comfort and withstand demanding modern lifestyles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Renaissance Highlight Section */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="bg-novus-navy-dark border border-novus-navy-border/80 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-card-luxury">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <Badge variant="teal">Flagship Concept Line</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light mt-2">
                Renaissance™ — Technology to Complement Comfort
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-novus-gold to-transparent my-4" />
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                We honor customer comfort as paramount. Under the Renaissance banner, we invite global brand partners to co-create revolutionary material applications for apparel lifestyle and sporting goods.
              </p>
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                By combining our proprietary fiber compounding, micro-polyester blends, and dual-core recovery filaments with in-depth consumer trends, Renaissance transforms standard everyday wear into an effortless sensory experience.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 text-xs font-mono text-novus-champagne">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-novus-gold" />
                  <span>Micro-Polyester Weaves</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-novus-gold" />
                  <span>Dual-Core Elasticity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-novus-gold" />
                  <span>Rapid Moisture Dispersal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-novus-gold" />
                  <span>Dynamic Shape Memory</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 w-full border border-novus-navy-border overflow-hidden">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1200&q=85"
                alt="Renaissance Technical Fabric Collection"
                fill
                className="object-cover object-center filter contrast-105 brightness-95 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="gold">Fabric Portfolios</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Engineered Material Categories
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Engineered across our spinning, sizing, and wide-width weaving facilities in India and specialized polymer R&D in Shanghai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCT_COLLECTIONS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="bg-novus-navy-dark border border-novus-navy-border hover:border-novus-gold/50 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-card-luxury">
                <div className="relative h-64 sm:h-72 w-full border-b border-novus-navy-border overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-dark via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-novus-navy-deepest/90 border border-novus-gold/30 text-[10px] font-mono uppercase tracking-wider text-novus-gold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-novus-ivory font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-novus-champagne italic mt-1">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-novus-ivory-warm/80 font-light leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-novus-navy-border/60">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-novus-muted mb-2">
                      Key Technical Specs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono bg-novus-navy-surface text-novus-ivory-warm border border-novus-navy-border"
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

      {/* Technical Finishing Formulations */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="coral">Advanced Chemistry</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Proprietary Finishing & Performance Technologies
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Tailoring tactile handfeel, thermodynamic moisture handling, and wrinkle recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_FINISHES.map((finish, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-gold/40 transition-all duration-300 space-y-3 h-full flex flex-col justify-between">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${finish.accent}`}>
                    {finish.category}
                  </span>
                  <h4 className="font-serif text-xl text-novus-ivory font-medium">
                    {finish.name}
                  </h4>
                  <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed mt-2">
                    {finish.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 lg:px-12 pt-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-novus-navy-surface via-novus-navy-dark to-novus-navy-surface border border-novus-navy-border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-luxury">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light">
              Request Fabric Swatches & Technical Data Sheets
            </h3>
            <p className="text-xs sm:text-sm text-novus-muted font-light">
              Our material specialists in Bangalore and Shanghai ship custom physical swatches directly to international design studios.
            </p>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest text-xs uppercase tracking-[0.2em] font-semibold hover:from-white hover:to-novus-champagne transition-all shadow-gold-glow"
          >
            <span>Request Swatch Sample Pack</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
