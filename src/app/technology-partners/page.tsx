import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, Network, FlaskConical } from "lucide-react";
import { MANUFACTURING_HUBS } from "@/data/company";

export const metadata = {
  title: "Technology & Partners | Global Manufacturing Capabilities",
  description:
    "Explore Novus Apparel's international technology partnerships, cross-border manufacturing capabilities, and advanced textile R&D.",
};

const TECH_PILLARS = [
  {
    title: "Polymer Science & Greige Research",
    lead: "China (Newwell Textiles, Shanghai)",
    desc: "Specialized laboratory research developing micro-polyester blends, dual-core filament constructions, and specialized bottom-weight greige formulations.",
    icon: FlaskConical,
  },
  {
    title: "Vertical Spinning & Weaving Infrastructure",
    lead: "India (Sri Dhanalakshmi Group Facilities)",
    desc: "Large-scale spinning mills delivering combed and compact yarns, state-of-the-art sizing, and high-speed air-jet weaving with 100% wind power integration.",
    icon: Layers,
  },
  {
    title: "High-Volume Structured Garmenting",
    lead: "Vietnam, Bangladesh & Jordan Corridors",
    desc: "Dedicated assembly facilities tailored for duty-advantaged global logistics, structured wovens, executive shirting, and technical sporting goods.",
    icon: Cpu,
  },
  {
    title: "Client Innovation & Design Liaison",
    lead: "United States (North Brunswick, NJ) & Bangalore (HQ)",
    desc: "Real-time design consultations, rapid physical swatch sampling, digital 3D garment visualization, and cross-timezone customer support.",
    icon: Network,
  },
];

export default function TechnologyPartnersPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Capabilities & Alliances
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Advanced Technology & Global Manufacturing Partners
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            &ldquo;We treat our partners with professionalism, dignity and respect. Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
          </p>
        </div>
      </section>

      {/* Philosophy of Partnership */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-novus-gold">
              Collaborative Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
              Synergistic Global Value Creation
            </h2>
            <div className="w-16 h-[1.5px] bg-novus-gold"></div>
            <p className="text-sm text-novus-beige/80 font-light leading-relaxed">
              At Novus Apparel, we do not operate in silos. We recognize that true textile mastery requires cross-border synergy. By uniting East Asian polymer and greige innovation with South Asian vertical spinning/weaving and Southeast Asian technical garmenting, we offer an agile global supply model.
            </p>
            <p className="text-sm text-novus-beige/80 font-light leading-relaxed">
              We work hand-in-hand with brand directors, fabric merchandisers, and technical designers from conception to scale production, ensuring that product fidelity matches commercial targets.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-80 sm:h-96 w-full border border-novus-charcoal overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="High-Tech Textile Manufacturing Equipment"
              fill
              className="object-cover object-center filter contrast-105 brightness-90"
            />
          </div>
        </div>
      </section>

      {/* Four Core Technology Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Engineering Backbone
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Core Technical Pillars
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Our multi-disciplinary technical framework spanning continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-novus-richblack border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <IconComponent className="w-7 h-7 text-novus-gold" />
                  <span className="text-xs font-mono text-novus-muted">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl text-novus-ivory font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-novus-beige-accent">{pillar.lead}</p>
                <p className="text-xs text-novus-beige-dark/90 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Manufacturing Network Breakdown */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Manufacturing Footprint
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Global Manufacturing Corridors
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Verified production hubs strategically located across key international corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, index) => (
            <div
              key={index}
              className="p-6 bg-novus-richblack border border-novus-charcoal space-y-3 hover:border-novus-gold/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{hub.flag}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-novus-gold">
                  Corridor {index + 1}
                </span>
              </div>
              <h4 className="font-serif text-xl text-novus-ivory font-medium">{hub.country}</h4>
              <p className="text-xs text-novus-beige/80 leading-relaxed font-light">
                {hub.capabilities}
              </p>
              <div className="pt-3 border-t border-novus-charcoal/60 text-[11px] font-mono text-novus-beige-accent">
                {hub.highlights}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-novus-charcoal text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl text-novus-ivory font-light">
            Become a Production or Technology Partner
          </h3>
          <p className="text-xs text-novus-beige/80 font-light leading-relaxed">
            We continuously seek high-caliber specialized mills, garmenting units, and material researchers to join our global network.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.2em] font-semibold transition-all"
            >
              <span>Submit Partner Credentials</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
