"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, CheckCircle2, Award, Globe2, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { LEADERSHIP_PROFILES } from "@/data/company";

export default function LeadershipPage() {
  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>02 // EXECUTIVE STEWARDSHIP</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              LEADERSHIP ROOTED IN <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                textile engineering
              </span>{" "}
              & GLOBAL GOVERNANCE.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              Guided by seasoned textile technologists whose careers bridge raw polymer and yarn science with international export logistics, marketing strategy, and vertical manufacturing leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* In-depth Leadership Showcase (EXACT FOUNDER PHOTOGRAPHS PRESERVED) */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto space-y-24">
        {LEADERSHIP_PROFILES.map((leader, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Portrait Column — PRESERVING EXACT FOUNDER PHOTOGRAPH */}
            <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <FadeIn direction={idx % 2 === 1 ? "left" : "right"}>
                <div className="relative h-[520px] w-full rounded-3xl border border-white/10 overflow-hidden group shadow-atelier-card bg-black">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    priority
                    className="object-cover object-top filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-atelier-gold">
                      {leader.qualification}
                    </p>
                    <p className="text-2xl font-syne font-black text-white uppercase mt-0.5">
                      {leader.name}
                    </p>
                    <p className="text-xs font-mono text-atelier-champagne mt-0.5">{leader.role}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Biography & Credentials Column */}
            <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <FadeIn direction={idx % 2 === 1 ? "right" : "left"}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono text-atelier-gold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{leader.qualification}</span>
                </div>

                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight mt-2">
                  {leader.name}
                </h2>

                <p className="text-xs uppercase font-mono tracking-widest text-atelier-champagne">
                  {leader.role} · Novus Apparel Limited
                </p>

                <div className="w-16 h-[2px] bg-atelier-gold" />

                <div className="space-y-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {leader.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Specialties Matrix */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">
                    Executive Focus Areas
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {leader.specialties.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-xs font-mono text-atelier-champagne bg-white/5 p-3 rounded-xl border border-white/10"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-atelier-gold shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        ))}
      </section>

      {/* Collaborative Global Sourcing Quote */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-atelier-card">
          <Sparkles className="w-8 h-8 text-atelier-gold mx-auto" />
          <blockquote className="font-syne text-2xl sm:text-3xl text-white font-bold leading-relaxed uppercase">
            &ldquo;We treat our partners with professionalism, dignity and respect. Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
          </blockquote>
          <div className="pt-2 text-xs font-mono text-atelier-champagne uppercase tracking-widest">
            Corporate Guiding Principle · Novus Apparel Limited
          </div>
        </div>
      </section>
    </div>
  );
}
