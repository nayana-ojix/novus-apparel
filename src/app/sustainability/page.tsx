"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wind, HeartHandshake, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { SUSTAINABILITY_PILLARS } from "@/data/company";

export default function SustainabilityPage() {
  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-emerald">
              <span>05 // SUSTAINABLE TECHNOLOGY & WIND POWER</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              CAPTIVE WIND ENERGY & <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                verified environmental
              </span>{" "}
              STEWARDSHIP.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              We ground our environmental commitments strictly in verified infrastructure—powered by captive wind energy generation through the Sri Dhanalakshmi Group and guided by our core value: Sustainable Technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hero Highlight: 100% Wind Mill Clean Energy */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-atelier-card">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-emerald block">
                Clean Grid Infrastructure
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                Captive Wind Mill Generation Across Primary Facilities
              </h2>
              <div className="w-16 h-[2px] bg-atelier-emerald my-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Unlike theoretical sustainability pledges, Novus Apparel benefits from tangible, operating renewable assets. The Sri Dhanalakshmi Group operates dedicated wind mill farms generating clean electricity for our vertical spinning, sizing, and weaving units in India.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                This substantial captive clean power drastically lowers the greenhouse gas intensity embedded in every yard of yarn and woven fabric, allowing our brand partners to meet strict global climate accounting targets.
              </p>

              {/* Verified Metrics Counter */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-gray-500 uppercase text-[10px] block">Energy Type</span>
                  <span className="text-2xl font-syne font-bold text-atelier-emerald">
                    <AnimatedCounter value={100} suffix="% Wind" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 uppercase text-[10px] block">Application</span>
                  <span className="text-2xl font-syne font-bold text-white">
                    Spinning & Looms
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 uppercase text-[10px] block">Since</span>
                  <span className="text-2xl font-syne font-bold text-atelier-gold">
                    <AnimatedCounter value={1971} />
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 lg:h-[460px] w-full rounded-2xl border border-white/10 overflow-hidden bg-black">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85"
                alt="Wind Turbine Farm Renewable Energy Infrastructure"
                fill
                className="object-cover object-center filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The 4 Core Sustainability Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Verified Benchmarks
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Environmental & Ethical Commitments
          </h2>
          <p className="text-sm text-gray-400 font-light">
            A comprehensive matrix aligning ecological stewardship with transparent social accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-atelier-navy border border-white/10 hover:border-atelier-emerald/40 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-atelier-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-atelier-emerald uppercase tracking-widest">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-atelier-champagne font-semibold">
                      {pillar.stat}
                    </span>
                  </div>
                  <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-atelier-champagne italic">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-gray-500">
                  <span>{pillar.statLabel}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
