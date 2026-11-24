"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Wind, Sparkles, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Editorial Page Header */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>01 // CORPORATE ARCHIVE & HERITAGE</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              VERTICAL INTEGRITY. <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                a half-century of
              </span>{" "}
              TEXTILE MASTERY.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              Operating under the historic umbrella of the <strong className="text-white font-medium">Sri Dhanalakshmi Group (est. 1971, USD $160M Group Turnover)</strong>, Novus Apparel Limited bridges raw fiber science, vertical spinning, air-jet weaving, and global garment engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sri Dhanalakshmi Group Affiliation Showcase */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-12 lg:p-16 shadow-atelier-card">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                Parent Conglomerate
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                The Scale of Sri Dhanalakshmi Group
              </h2>
              <div className="w-16 h-[2px] bg-atelier-gold my-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Founded in 1971, the Sri Dhanalakshmi Group represents an Indian industrial titan with an aggregate turnover of <strong className="text-atelier-champagne font-semibold">USD $160 Million</strong>. The group&apos;s vertically structured manufacturing ecosystem spans comprehensive spinning mills, advanced sizing, wide-width air-jet weaving, and captive clean wind power generation.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                As the international apparel manufacturing and technical marketing arm, Novus Apparel Limited leverages this colossal supply foundation to guarantee raw material traceability, combed cotton purity, and accelerated development cycles for international fashion brands.
              </p>

              {/* Verified Metrics Counter Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div className="space-y-1">
                  <p className="text-gray-500 uppercase text-[10px]">Group Turnover</p>
                  <p className="text-2xl font-syne font-bold text-white">
                    $<AnimatedCounter value={160} suffix="M USD" />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 uppercase text-[10px]">Founded</p>
                  <p className="text-2xl font-syne font-bold text-atelier-gold">
                    <AnimatedCounter value={1971} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 uppercase text-[10px]">Power Grid</p>
                  <p className="text-2xl font-syne font-bold text-atelier-emerald">
                    <AnimatedCounter value={100} suffix="% Wind" />
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 lg:h-[460px] w-full rounded-2xl border border-white/10 overflow-hidden bg-black">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial High-Speed Weaving Loom"
                fill
                className="object-cover object-center filter contrast-110 brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Motto */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Guiding Coordinates
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl font-black text-white uppercase leading-tight">
            GUIDED BY PURPOSE. <br />
            <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-4xl sm:text-6xl">
              driven by
            </span>{" "}
            PRECISION.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-atelier-champagne tracking-widest uppercase">
            Corporate Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Corporate Vision */}
          <FadeIn direction="up" delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-atelier-navy border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-atelier-card">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block mb-2">
                  01 // Forward Trajectory
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase">
                  Our Corporate Vision
                </h3>
                <div className="w-12 h-[2px] bg-atelier-gold my-3" />
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-atelier-champagne">
                <span>Science-Backed Innovation · Green Manufacturing</span>
              </div>
            </div>
          </FadeIn>

          {/* Corporate Mission */}
          <FadeIn direction="up" delay={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-atelier-navy border border-white/10 hover:border-atelier-emerald/40 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-atelier-card">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-emerald block mb-2">
                  02 // Daily Execution
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase">
                  Our Corporate Mission
                </h3>
                <div className="w-12 h-[2px] bg-atelier-emerald my-3" />
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-atelier-emerald">
                <span>Vertical Integration · Peerless Engineering Precision</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5 Core Values Matrix */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            03 // ETHICAL PILLARS
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Core Values Guiding Every Interaction
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Our governance framework sets the benchmark across all manufacturing facilities and commercial corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.coreValues.map((val, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-3 h-full">
                <span className="text-[10px] font-mono text-atelier-gold uppercase tracking-widest">
                  Value 0{idx + 1}
                </span>
                <h3 className="font-syne text-xl font-bold text-white uppercase">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
