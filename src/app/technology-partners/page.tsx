"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Network, FlaskConical, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { MANUFACTURING_HUBS } from "@/data/company";

const TECH_PILLARS = [
  {
    title: "Polymer Science & Greige R&D",
    lead: "China // Newwell Textiles, Shanghai",
    desc: "Specialized laboratory and greige development center led by Technical Director Mohmad Noorulla. Engineering advanced micro-polyester filaments, dual-core stretch constructions, and specialized bottom-weight greige formulations.",
    icon: FlaskConical,
    accent: "text-atelier-emerald",
  },
  {
    title: "Vertical Spinning & Weaving Power",
    lead: "India // Sri Dhanalakshmi Mills",
    desc: "Integrated spinning mills delivering combed and compact yarns, state-of-the-art sizing, and high-speed air-jet weaving. Operating with 100% captive wind energy generation for minimal industrial carbon intensity.",
    icon: Layers,
    accent: "text-atelier-gold",
  },
  {
    title: "High-Volume Structured Garmenting",
    lead: "Vietnam, Bangladesh, Jordan & Ethiopia Corridors",
    desc: "Dedicated assembly lines strategically arranged for duty-free access, competitive turnaround, and high-volume consistency across tailored wovens, bottom-weights, and performance activewear.",
    icon: Cpu,
    accent: "text-atelier-terracotta",
  },
  {
    title: "Client Innovation & Americas Liaison",
    lead: "United States (North Brunswick, NJ) & Bangalore (HQ)",
    desc: "Real-time design consultations, rapid physical swatch sampling, digital fabric visualization, and cross-timezone customer support ensuring seamless collaboration with North American and European brand executives.",
    icon: Network,
    accent: "text-atelier-champagne",
  },
];

export default function TechnologyPartnersPage() {
  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>04 // TECHNOLOGY & PARTNERS</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              ADVANCED TECHNOLOGY & <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                global manufacturing
              </span>{" "}
              PARTNERS.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              &ldquo;We treat our partners with professionalism, dignity and respect. Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Synergistic Value Creation Overview */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                Collaborative Synergy
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                Cross-Border Value Creation
              </h2>
              <div className="w-16 h-[2px] bg-atelier-gold my-4" />
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                At Novus Apparel, we do not operate in silos. We recognize that true textile mastery requires cross-border synergy. By uniting East Asian polymer and greige innovation with South Asian vertical spinning/weaving and Southeast Asian technical garmenting, we offer an agile global supply model.
              </p>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                We work hand-in-hand with brand directors, fabric merchandisers, and technical designers from conception to scale production, ensuring that product fidelity matches commercial targets without supply-chain bottlenecks.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl border border-white/10 overflow-hidden shadow-atelier-card bg-black">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
                alt="Precision Engineering and Textile R&D Laboratory"
                fill
                className="object-cover object-center filter contrast-110 brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The 4 Technology & Partnership Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Supply Architecture
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Four Global Technology & Sourcing Pillars
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Each hub brings localized excellence, combining specialized engineering with world-class logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="p-8 sm:p-10 rounded-3xl bg-atelier-navy border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-atelier-card">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${pillar.accent}`} />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest block ${pillar.accent}`}>
                      {pillar.lead}
                    </span>
                    <h3 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Manufacturing Corridors */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Integrated Corridors
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Manufacturing & Export Hubs
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Strategically allocated production lines designed to optimize lead times, duty benefits, and specialized garment builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-3 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{hub.flag}</span>
                  <div>
                    <h4 className="font-syne text-xl font-bold text-white uppercase">
                      {hub.country}
                    </h4>
                    <span className="text-[10px] font-mono text-atelier-champagne">
                      Active Manufacturing Corridor
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {hub.capabilities}
                </p>
                <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-gray-500">
                  <span>{hub.highlights}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
