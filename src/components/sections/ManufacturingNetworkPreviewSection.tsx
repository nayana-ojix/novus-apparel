"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Network, CheckCircle2, ShieldCheck, Factory, Globe2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManufacturingNetworkPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".mfg-preview-reveal", {
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
      id="manufacturing"
      className="py-24 lg:py-36 bg-cream border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="mfg-preview-reveal flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-olive" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-olive font-bold">
            SECTION 05 // MANUFACTURING NETWORK
          </span>
        </div>

        {/* Headline & Partner Model Distinction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-8 space-y-4 mfg-preview-reveal">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              COORDINATED THROUGH PARTNERSHIP. <br />
              <span className="text-burnt">DRIVEN BY PRECISION.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
              NOVUS operates through an agile, vetted network of partner manufacturing facilities. We distinguish our core organisation—focusing on product development, material engineering, and global client relations—from our partner manufacturing ecosystem, ensuring agile execution and uncompromised commercial reliability.
            </p>
          </div>

          <div className="lg:col-span-4 mfg-preview-reveal flex flex-col justify-end">
            <div className="p-6 rounded-2xl bg-sand/40 border border-sand">
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 block mb-1">
                CONFIRMED NETWORK SCALE
              </span>
              <div className="font-display text-4xl sm:text-5xl font-bold text-olive mb-1">
                4,000–5,000
              </div>
              <p className="text-xs font-body text-charcoal/70 leading-relaxed font-light">
                Workforce scale of the partner manufacturing network producing garments across our verified categories.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid: Partner Network Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 mfg-preview-reveal">
          {/* Card 1: Vetted Partner Model */}
          <div className="p-8 rounded-3xl bg-sand/30 border border-sand/80 hover:border-olive/50 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-olive/10 text-olive flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
                COLLABORATIVE ECOSYSTEM
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                Partner-Factory Model
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Rather than owning rigid single-location factories, NOVUS orchestrates high-standard partner facilities selected for specialized strengths in shirts, bottoms, or performance activewear.
              </p>
            </div>

            <div className="pt-4 border-t border-sand text-xs font-mono uppercase tracking-wider text-charcoal/60">
              Vetted Production Lines
            </div>
          </div>

          {/* Card 2: Technical Specifications & Quality */}
          <div className="p-8 rounded-3xl bg-sand/30 border border-sand/80 hover:border-burnt/50 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-burnt/10 text-burnt flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-bold block">
                TECHNICAL GOVERNANCE
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                Specification Compliance
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Our in-house textile technologists ensure every partner facility strictly adheres to our comprehensive tech packs, dimensional shrinkage limits, color fastness, and seam engineering.
              </p>
            </div>

            <div className="pt-4 border-t border-sand text-xs font-mono uppercase tracking-wider text-charcoal/60">
              Synchronized Quality Protocols
            </div>
          </div>

          {/* Card 3: International Supply Footprint */}
          <div className="p-8 rounded-3xl bg-sand/30 border border-sand/80 hover:border-sand-dark transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sand-dark/20 text-charcoal flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/70 font-bold block">
                STRATEGIC FOOTPRINT
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-charcoal">
                India • USA • China
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                Commercial headquarters in Bangalore (India), Americas client liaison in North Brunswick (USA), and technical fabric sourcing via Newwell Textiles in Shanghai (China).
              </p>
            </div>

            <div className="pt-4 border-t border-sand text-xs font-mono uppercase tracking-wider text-charcoal/60">
              Cross-Border Liaison
            </div>
          </div>
        </div>

        {/* Panoramic Visual Banner with Link to Full Manufacturing Page */}
        <div className="relative rounded-3xl overflow-hidden bg-sand border border-sand/80 p-8 sm:p-12 lg:p-16 mfg-preview-reveal">
          <Image
            src="/images/editorial/mfg-garment-floor.jpg"
            alt="Apparel manufacturing floor partner network"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center filter contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-charcoal/75 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-2xl text-cream space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt-light font-bold block">
              DEDICATED MANUFACTURING EXPERIENCE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
              EXPLORE OUR COMPLETE MANUFACTURING NETWORK.
            </h3>
            <p className="font-body text-sm sm:text-base text-cream/80 font-light leading-relaxed">
              Discover the full specifications of our fabric solutions, documented product categories (shirts, bottoms, activewear), partner ecosystem model, and confirmed 4,000–5,000 workforce scale.
            </p>

            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-burnt hover:bg-burnt-dark text-cream font-display text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md group"
            >
              <span>Explore Manufacturing Network Page</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
