"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, CheckCircle2, Award, Globe2, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import { LEADERSHIP_PROFILES } from "@/data/company";

export default function LeadershipPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="gold">Executive Governance</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Leadership Rooted in <br />
              <span className="italic font-normal text-gold-gradient">
                Textile Engineering & Global Vision.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              Guided by seasoned textile technologists whose careers bridge raw polymer and yarn science with international export logistics, marketing strategy, and vertical manufacturing leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* In-depth Leadership Showcase (EXACT FOUNDER PHOTOGRAPHS PRESERVED) */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto space-y-24">
        {LEADERSHIP_PROFILES.map((leader, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Portrait Column — EXACT FOUNDER PHOTOGRAPH */}
            <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <FadeIn direction={idx % 2 === 1 ? "left" : "right"}>
                <div className="relative h-[500px] w-full border border-novus-navy-border overflow-hidden group shadow-card-luxury bg-novus-navy-dark">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    priority
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-novus-navy-deepest/90 backdrop-blur-md border border-novus-gold/30">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-novus-gold">
                      {leader.qualification}
                    </p>
                    <p className="text-2xl font-serif text-novus-ivory font-medium mt-0.5">
                      {leader.name}
                    </p>
                    <p className="text-xs font-mono text-novus-champagne mt-0.5">{leader.role}</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Biography & Credentials Column */}
            <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <FadeIn direction={idx % 2 === 1 ? "right" : "left"}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-navy-surface border border-novus-gold/40 text-[11px] font-mono text-novus-gold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{leader.qualification}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light mt-2">
                  {leader.name}
                </h2>

                <p className="text-xs uppercase font-mono tracking-widest text-novus-champagne">
                  {leader.role} · Novus Apparel Limited
                </p>

                <div className="w-16 h-[2px] bg-gradient-to-r from-novus-gold to-transparent" />

                <div className="space-y-4 text-sm sm:text-base text-novus-ivory-warm/85 font-light leading-relaxed">
                  {leader.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Specialties Matrix */}
                <div className="pt-4 border-t border-novus-navy-border/60">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-novus-muted mb-3">
                    Executive Focus Areas
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {leader.specialties.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center space-x-2 text-xs font-mono text-novus-champagne bg-novus-navy-dark p-2.5 border border-novus-navy-border/60"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-novus-gold shrink-0" />
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
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="bg-novus-navy-dark border border-novus-navy-border/80 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-card-luxury">
          <Sparkles className="w-8 h-8 text-novus-gold mx-auto" />
          <blockquote className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light italic leading-relaxed">
            &ldquo;We treat our partners with professionalism, dignity and respect. Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
          </blockquote>
          <div className="pt-2 text-xs font-mono text-novus-champagne uppercase tracking-widest">
            Corporate Guiding Principle · Novus Apparel Limited
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="px-6 lg:px-12 pb-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-novus-navy-surface via-novus-navy-dark to-novus-navy-surface border border-novus-navy-border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light">
              Direct Executive Sourcing Dialogues
            </h3>
            <p className="text-xs sm:text-sm text-novus-muted font-light">
              Connect directly with Chandrasekhar Vallabhaneni or Mohmad Noorulla for institutional programs.
            </p>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest text-xs uppercase tracking-[0.2em] font-semibold hover:from-white hover:to-novus-champagne transition-all shadow-gold-glow"
          >
            <span>Initiate Direct Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
