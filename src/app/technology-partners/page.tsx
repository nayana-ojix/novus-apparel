"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Network, FlaskConical, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import { MANUFACTURING_HUBS } from "@/data/company";

const TECH_PILLARS = [
  {
    title: "Polymer Science & Greige R&D",
    lead: "China · Newwell Textiles, Shanghai",
    desc: "Specialized laboratory and greige development center led by Technical Director Mohmad Noorulla. Engineering advanced micro-polyester filaments, dual-core stretch constructions, and specialized bottom-weight greige formulations.",
    icon: FlaskConical,
    accent: "text-novus-teal-light",
    borderHover: "hover:border-novus-teal-vibrant/60",
  },
  {
    title: "Vertical Spinning & Weaving Power",
    lead: "India · Sri Dhanalakshmi Group Mills",
    desc: "Integrated spinning mills delivering combed and compact yarns, state-of-the-art sizing, and high-speed air-jet weaving. Operating with 100% captive wind energy generation for minimal industrial carbon intensity.",
    icon: Layers,
    accent: "text-novus-gold",
    borderHover: "hover:border-novus-gold/60",
  },
  {
    title: "High-Volume Structured Garmenting",
    lead: "Vietnam, Bangladesh, Jordan & Ethiopia Corridors",
    desc: "Dedicated assembly lines strategically arranged for duty-free access, competitive turnaround, and high-volume consistency across tailored wovens, bottom-weights, and performance activewear.",
    icon: Cpu,
    accent: "text-novus-coral",
    borderHover: "hover:border-novus-coral/60",
  },
  {
    title: "Client Innovation & Americas Liaison",
    lead: "United States (North Brunswick, NJ) & Bangalore (HQ)",
    desc: "Real-time design consultations, rapid physical swatch sampling, digital fabric visualization, and cross-timezone customer support ensuring seamless collaboration with North American and European brand executives.",
    icon: Network,
    accent: "text-novus-champagne",
    borderHover: "hover:border-novus-gold/60",
  },
];

export default function TechnologyPartnersPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="teal">Capabilities & International Alliances</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Advanced Technology & <br />
              <span className="italic font-normal text-gold-gradient">
                Global Manufacturing Partners.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              &ldquo;We treat our partners with professionalism, dignity and respect. Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Synergistic Value Creation Overview */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <FadeIn direction="right">
              <Badge variant="gold">Collaborative Philosophy</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light mt-2">
                Synergistic Global Value Creation
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-novus-gold to-transparent my-4" />
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 font-light leading-relaxed">
                At Novus Apparel, we do not operate in silos. We recognize that true textile mastery requires cross-border synergy. By uniting East Asian polymer and greige innovation with South Asian vertical spinning/weaving and Southeast Asian technical garmenting, we offer an agile global supply model.
              </p>
              <p className="text-sm sm:text-base text-novus-ivory-warm/80 font-light leading-relaxed">
                We work hand-in-hand with brand directors, fabric merchandisers, and technical designers from conception to scale production, ensuring that product fidelity matches commercial targets without supply-chain bottlenecks.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 w-full border border-novus-navy-border overflow-hidden shadow-card-luxury">
            <FadeIn direction="left">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
                alt="Precision Engineering and Textile R&D Laboratory"
                fill
                className="object-cover object-center filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novus-navy-deepest/80 via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The 4 Technology & Partnership Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="coral">Supply Architecture</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Our Four Technology & Sourcing Pillars
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Each hub brings localized excellence, combining specialized engineering with world-class logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div
                  className={`p-8 sm:p-10 bg-novus-navy-dark border border-novus-navy-border ${pillar.borderHover} transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-card-luxury`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-novus-navy-surface border border-novus-navy-border flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${pillar.accent}`} />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest block ${pillar.accent}`}>
                      {pillar.lead}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-medium">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-novus-ivory-warm/80 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Manufacturing Corridors Breakdown */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="gold">Global Corridors</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Manufacturing & Export Hubs
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Strategically allocated production lines designed to optimize lead times, duty benefits, and specialized garment builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 bg-novus-navy-dark/70 border border-novus-navy-border hover:border-novus-gold/40 transition-all duration-300 space-y-3 h-full">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{hub.flag}</span>
                  <div>
                    <h4 className="font-serif text-xl text-novus-ivory font-medium">
                      {hub.country}
                    </h4>
                    <span className="text-[10px] font-mono text-novus-champagne">
                      Active Corridor
                    </span>
                  </div>
                </div>
                <p className="text-xs text-novus-ivory-warm/75 font-light leading-relaxed">
                  {hub.capabilities}
                </p>
                <div className="pt-2 border-t border-novus-navy-border/50 text-[10px] font-mono text-novus-muted">
                  <span>{hub.highlights}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 pt-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-novus-navy-surface via-novus-navy-dark to-novus-navy-surface border border-novus-navy-border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-luxury">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-novus-ivory font-light">
              Explore Collaborative Sourcing for Your Brand
            </h3>
            <p className="text-xs sm:text-sm text-novus-muted font-light">
              Connect with our international supply architects to optimize your fabric sourcing and manufacturing pipelines.
            </p>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest text-xs uppercase tracking-[0.2em] font-semibold hover:from-white hover:to-novus-champagne transition-all shadow-gold-glow"
          >
            <span>Consult With Supply Team</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
