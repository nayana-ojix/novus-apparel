"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Wind, Sparkles, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { COMPANY_INFO } from "@/data/company";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Editorial Page Header */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="gold">Corporate Heritage & Vertical Scale</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Vertical Integrity. <br />
              <span className="italic font-normal text-gold-gradient">
                A Half-Century of Textile Mastery.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              Operating under the historic umbrella of the <strong className="text-novus-ivory font-medium">Sri Dhanalakshmi Group (est. 1971, USD $160M Group Turnover)</strong>, Novus Apparel Limited bridges raw fiber science, vertical spinning, weaving, and global garment engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sri Dhanalakshmi Group Affiliation Showcase */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-novus-navy-dark border border-novus-navy-border/80 p-8 sm:p-12 lg:p-16 shadow-card-luxury">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="right">
              <Badge variant="teal">Parent Conglomerate Legacy</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light mt-2">
                The Strength of Sri Dhanalakshmi Group
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-novus-gold to-transparent my-4" />
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                Founded in 1971, the Sri Dhanalakshmi Group represents an Indian industrial titan with an aggregate turnover of <strong className="text-novus-champagne font-semibold">USD $160 Million</strong>. The group&apos;s vertically structured manufacturing ecosystem spans comprehensive spinning mills, advanced sizing, wide-width air-jet weaving, and captive clean wind power generation.
              </p>
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 leading-relaxed font-light">
                As the international apparel manufacturing and technical marketing arm, Novus Apparel Limited leverages this colossal supply foundation to guarantee raw material traceability, combed cotton purity, and accelerated development cycles for international fashion brands.
              </p>

              {/* Verified Metrics Counter Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-novus-navy-border/70 text-xs font-mono">
                <div className="space-y-1">
                  <p className="text-novus-muted uppercase text-[10px]">Group Turnover</p>
                  <p className="text-xl sm:text-2xl font-serif text-novus-champagne font-medium">
                    $<AnimatedCounter value={160} suffix="M USD" />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-novus-muted uppercase text-[10px]">Founded</p>
                  <p className="text-xl sm:text-2xl font-serif text-novus-ivory font-medium">
                    <AnimatedCounter value={1971} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-novus-muted uppercase text-[10px]">Power Grid</p>
                  <p className="text-xl sm:text-2xl font-serif text-emerald-400 font-medium">
                    <AnimatedCounter value={100} suffix="% Wind" />
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative h-96 w-full border border-novus-navy-border overflow-hidden">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85"
                alt="Industrial High-Speed Weaving Loom"
                fill
                className="object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Motto */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="coral">Our North Star</Badge>
          <h2 className="font-serif text-3xl sm:text-5xl text-novus-ivory font-light leading-tight">
            Guided by Purpose. Driven by Excellence.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-novus-champagne tracking-[0.25em] uppercase">
            Corporate Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Corporate Vision */}
          <FadeIn direction="up" delay={0.1}>
            <div className="p-8 sm:p-10 bg-novus-navy-dark border border-novus-navy-border hover:border-novus-gold/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-novus-gold block mb-2">
                  01 / Forward Trajectory
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-medium">
                  Our Corporate Vision
                </h3>
                <div className="w-12 h-[1.5px] bg-novus-gold my-3" />
                <p className="text-sm sm:text-base text-novus-ivory-warm/80 font-light leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="pt-4 border-t border-novus-navy-border/50 text-[11px] font-mono text-novus-champagne">
                <span>Science-Backed Innovation · Green Manufacturing</span>
              </div>
            </div>
          </FadeIn>

          {/* Corporate Mission */}
          <FadeIn direction="up" delay={0.2}>
            <div className="p-8 sm:p-10 bg-novus-navy-dark border border-novus-navy-border hover:border-novus-teal-vibrant/50 transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-novus-teal-light block mb-2">
                  02 / Daily Execution
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-medium">
                  Our Corporate Mission
                </h3>
                <div className="w-12 h-[1.5px] bg-novus-teal-vibrant my-3" />
                <p className="text-sm sm:text-base text-novus-ivory-warm/80 font-light leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="pt-4 border-t border-novus-navy-border/50 text-[11px] font-mono text-novus-teal-light">
                <span>Vertical Integration · Peerless Engineering Precision</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5 Core Values Matrix */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="gold">03 / Ethical Foundations</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Core Values Guiding Every Interaction
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Our governance framework sets the benchmark across all manufacturing facilities and commercial corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.coreValues.map((val, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-gold/40 transition-all duration-300 space-y-3 h-full">
                <span className="text-[10px] font-mono text-novus-gold uppercase tracking-widest">
                  Value 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-novus-ivory font-medium">
                  {val.title}
                </h3>
                <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-6 lg:px-12 pt-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-novus-navy-surface via-novus-navy-dark to-novus-navy-surface border border-novus-navy-border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-luxury">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light">
              Meet the Visionaries Behind Novus Apparel
            </h3>
            <p className="text-xs sm:text-sm text-novus-muted font-light">
              Discover the engineering credentials and background of co-founders Chandrasekhar Vallabhaneni & Mohmad Noorulla.
            </p>
          </div>
          <Link
            href="/leadership"
            className="group shrink-0 inline-flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest text-xs uppercase tracking-[0.2em] font-semibold hover:from-white hover:to-novus-champagne transition-all shadow-gold-glow"
          >
            <span>Explore Leadership Profiles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
