import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Wind, HeartHandshake } from "lucide-react";
import { SUSTAINABILITY_PILLARS } from "@/data/company";

export const metadata = {
  title: "Sustainability & Clean Energy | Wind-Powered Manufacturing",
  description:
    "Explore Novus Apparel's verified commitments to 100% wind-assisted renewable energy through Sri Dhanalakshmi Group, clean chemistry, and ethical human dignity.",
};

export default function SustainabilityPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Editorial Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Responsibility & Ecology
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Sustainable Technology. Verified Environmental Stewardship.
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            We ground our environmental commitments strictly in verified infrastructure—powered by captive wind energy generation through the Sri Dhanalakshmi Group and guided by our core value: Sustainable Technology.
          </p>
        </div>
      </section>

      {/* Hero Highlight: Wind Energy */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="bg-novus-richblack border border-novus-charcoal p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-charcoal text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
              <Wind className="w-3.5 h-3.5" />
              <span>Renewable Wind Power Infrastructure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
              Captive Wind Mill Generation Across Primary Facilities
            </h2>
            <div className="w-16 h-[1.5px] bg-novus-gold"></div>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              Unlike theoretical sustainability pledges, Novus Apparel benefits from tangible, operating renewable assets. The Sri Dhanalakshmi Group operates dedicated wind mill farms generating clean electricity for our vertical spinning, sizing, and weaving units in India.
            </p>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              This substantial captive clean power drastically lowers the greenhouse gas intensity embedded in every yard of yarn and woven fabric, allowing our brand partners to meet strict global climate accounting targets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-novus-charcoal text-xs font-mono">
              <div>
                <span className="text-novus-muted uppercase text-[10px] block">Energy Type</span>
                <span className="text-base font-serif text-novus-ivory">Wind Turbines</span>
              </div>
              <div>
                <span className="text-novus-muted uppercase text-[10px] block">Application</span>
                <span className="text-base font-serif text-novus-ivory">Spinning & Weaving</span>
              </div>
              <div>
                <span className="text-novus-muted uppercase text-[10px] block">Standard</span>
                <span className="text-base font-serif text-novus-ivory">Captive Green Grid</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-96 w-full border border-novus-charcoal overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
              alt="Wind Turbine Farm Renewable Energy"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
          </div>
        </div>
      </section>

      {/* The Four Core Pillars */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Verifiable Commitments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Our Sustainable Operating Framework
          </h2>
          <p className="text-xs text-novus-muted font-light">
            No invented statistics—only genuine, transparent industrial practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-novus-richblack border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-novus-gold">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-novus-ivory font-medium">{pillar.title}</h3>
                <p className="text-xs text-novus-beige/80 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-novus-charcoal flex items-baseline justify-between">
                <div>
                  <span className="font-serif text-3xl text-novus-ivory">{pillar.stat}</span>
                  <p className="text-[11px] font-mono text-novus-muted mt-0.5">{pillar.statLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Code of Conduct */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="bg-novus-charcoal/30 border border-novus-charcoal p-10 lg:p-14 space-y-6">
          <div className="flex items-center space-x-3">
            <HeartHandshake className="w-6 h-6 text-novus-gold" />
            <h3 className="font-serif text-2xl text-novus-ivory font-medium">
              Human Dignity & Workplace Safety
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-novus-beige/80 font-light leading-relaxed max-w-3xl">
            In full compliance with international labor conventions, Novus Apparel enforces strict zero-tolerance policies regarding underage labor, forced labor, and discrimination. All production units are equipped with modern fire suppression, clean air ventilation, ergonomic workstations, and fair living wage standards.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs font-mono uppercase tracking-widest text-novus-gold hover:text-novus-ivory transition-colors inline-flex items-center space-x-2"
            >
              <span>Inquire About ESG Compliance Audits</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
