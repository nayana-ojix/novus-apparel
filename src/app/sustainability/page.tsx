"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wind, HeartHandshake, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { SUSTAINABILITY_PILLARS } from "@/data/company";

export default function SustainabilityPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="emerald">Responsibility & Green Energy</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Sustainable Technology. <br />
              <span className="italic font-normal text-emerald-400">
                Verified Environmental Stewardship.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              We ground our environmental commitments strictly in verified infrastructure—powered by captive wind energy generation through the Sri Dhanalakshmi Group and guided by our core value: Sustainable Technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hero Highlight: 100% Wind Mill Clean Energy */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="bg-novus-navy-dark border border-novus-navy-border/80 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-card-luxury">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <Badge variant="emerald">Clean Grid Infrastructure</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light mt-2">
                Captive Wind Mill Generation Across Primary Facilities
              </h2>
              <div className="w-16 h-[2px] bg-emerald-500 my-4" />
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                Unlike theoretical sustainability pledges, Novus Apparel benefits from tangible, operating renewable assets. The Sri Dhanalakshmi Group operates dedicated wind mill farms generating clean electricity for our vertical spinning, sizing, and weaving units in India.
              </p>
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                This substantial captive clean power drastically lowers the greenhouse gas intensity embedded in every yard of yarn and woven fabric, allowing our brand partners to meet strict global climate accounting targets.
              </p>

              {/* Verified Metrics Counter */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-novus-navy-border/70 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-novus-muted uppercase text-[10px] block">Energy Type</span>
                  <span className="text-xl sm:text-2xl font-serif text-emerald-400 font-medium">
                    <AnimatedCounter value={100} suffix="% Wind" />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-novus-muted uppercase text-[10px] block">Application</span>
                  <span className="text-xl sm:text-2xl font-serif text-novus-ivory font-medium">
                    Spinning & Weaving
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-novus-muted uppercase text-[10px] block">Since</span>
                  <span className="text-xl sm:text-2xl font-serif text-novus-champagne font-medium">
                    <AnimatedCounter value={1971} />
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 w-full border border-novus-navy-border overflow-hidden">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85"
                alt="Wind Turbine Farm Renewable Energy Infrastructure"
                fill
                className="object-cover object-center filter contrast-105 brightness-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The 4 Core Sustainability Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="teal">Verified Pillars</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Our Environmental & Ethical Commitments
          </h2>
          <p className="text-sm text-novus-muted font-light">
            A comprehensive matrix aligning ecological stewardship with transparent social accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="p-8 sm:p-10 bg-novus-navy-dark border border-novus-navy-border hover:border-emerald-500/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-card-luxury">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 text-xs font-mono bg-novus-navy-surface border border-emerald-500/30 text-emerald-300 font-semibold">
                      {pillar.stat}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-novus-champagne italic">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-novus-ivory-warm/80 font-light leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-novus-navy-border/60 text-[10px] font-mono text-novus-muted">
                  <span>{pillar.statLabel}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Human Capital & Ethical Dignity */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="bg-novus-navy-dark border border-novus-navy-border p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card-luxury">
          <div className="lg:col-span-8 space-y-4">
            <Badge variant="gold">Respect for People</Badge>
            <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light">
              Ethical Governance & Dignified Workplaces
            </h3>
            <p className="text-sm text-novus-ivory-warm/80 font-light leading-relaxed">
              Every garment carrying the Novus mark is manufactured under strict social compliance: fair living wages, hygienic and ergonomic work floors, zero child or forced labor, and continuous technical training for all artisans.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest text-xs uppercase tracking-[0.2em] font-semibold hover:from-white hover:to-novus-champagne transition-all shadow-gold-glow"
            >
              <span>Request ESG Data Pack</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
