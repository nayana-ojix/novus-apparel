import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "About Us | Corporate Legacy & Manufacturing Philosophy",
  description:
    "Learn about Novus Apparel Limited, a vertical textile and apparel manufacturer under Sri Dhanalakshmi Group (est. 1971, USD $160M turnover).",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Editorial Page Header */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Corporate Profile & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Vertical Integrity. Legacy of Excellence.
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            Operating under the prestigious Sri Dhanalakshmi Group (est. 1971), Novus Apparel combines extensive textile research & development with global garment engineering.
          </p>
        </div>
      </section>

      {/* Sri Dhanalakshmi Group Affiliation Banner */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-novus-richblack border border-novus-charcoal p-8 lg:p-14">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-novus-charcoal text-[11px] font-mono tracking-widest text-novus-gold uppercase">
              Parent Conglomerate
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
              Association with Sri Dhanalakshmi Group
            </h2>
            <div className="w-16 h-[1.5px] bg-novus-gold"></div>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              Founded in 1971, the Sri Dhanalakshmi Group represents an Indian industrial titan with an aggregate turnover of <strong>USD $160 Million</strong>. The group&apos;s vertically structured manufacturing ecosystem spans comprehensive spinning mills, advanced sizing, wide-width weaving, and clean wind power generation.
            </p>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              As the global apparel manufacturing arm, Novus Apparel Limited leverages this colossal supply foundation to guarantee raw material traceability, combed cotton purity, and rapid product development cycles for international fashion retailers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-novus-charcoal text-xs font-mono text-novus-gold">
              <div>
                <p className="text-novus-muted uppercase text-[10px]">Turnover</p>
                <p className="text-base font-serif text-novus-ivory">$160M USD</p>
              </div>
              <div>
                <p className="text-novus-muted uppercase text-[10px]">Established</p>
                <p className="text-base font-serif text-novus-ivory">1971</p>
              </div>
              <div>
                <p className="text-novus-muted uppercase text-[10px]">Renewable</p>
                <p className="text-base font-serif text-novus-ivory">Wind Turbines</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-96 w-full border border-novus-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
              alt="Industrial Textile Weaving Loom"
              fill
              className="object-cover object-center filter contrast-105 brightness-90"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-novus-charcoal/30 p-10 border border-novus-charcoal space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-novus-gold">
              Guiding North Star
            </span>
            <h3 className="font-serif text-2xl text-novus-ivory font-medium">Our Corporate Vision</h3>
            <p className="text-sm text-novus-beige/80 font-light leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
          <div className="bg-novus-charcoal/30 p-10 border border-novus-charcoal space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-novus-gold">
              Operational Mandate
            </span>
            <h3 className="font-serif text-2xl text-novus-ivory font-medium">Our Core Mission</h3>
            <p className="text-sm text-novus-beige/80 font-light leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Ethical Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Our Five Foundational Values
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Guiding every interaction across our client brands, global workforce, and ecosystem partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {COMPANY_INFO.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-novus-richblack border border-novus-charcoal space-y-3 hover:border-novus-gold/40 transition-colors"
            >
              <span className="text-xs font-mono text-novus-gold">0{idx + 1}</span>
              <h4 className="font-serif text-lg text-novus-ivory font-medium">{val.title}</h4>
              <p className="text-xs text-novus-beige-dark/90 leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Guiding Attitude */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-novus-charcoal text-center">
        <div className="max-w-3xl mx-auto space-y-4 bg-novus-richblack border border-novus-charcoal p-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-novus-gold">
            The Novus Creed
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-novus-ivory font-normal tracking-wide">
            &ldquo;MAKE A DIFFERENCE.&rdquo;
          </h2>
          <p className="text-xs sm:text-sm text-novus-beige/80 font-light max-w-xl mx-auto leading-relaxed">
            We believe that extraordinary apparel manufacturing is not merely about output volumes—it is about integrity, technical precision, and leaving an enduring positive impact on our clients and industry.
          </p>
        </div>
      </section>
    </div>
  );
}
