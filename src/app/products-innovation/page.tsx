import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";
import { PRODUCT_COLLECTIONS } from "@/data/company";

export const metadata = {
  title: "Products & Innovation | Renaissance™ & Technical Fabrics",
  description:
    "Discover Novus Apparel's product portfolio: Renaissance™ comfort technology, 100% cotton twills, micro-polyester blends, and sporting goods fabrics.",
};

const TECHNICAL_FINISHES = [
  {
    name: "Hydrophilic Moisture Dispersal",
    category: "Thermal Comfort",
    desc: "Rapid capillary dispersion drawing perspiration away from the skin for all-day thermal equilibrium.",
  },
  {
    name: "Dual-Core Elasticity",
    category: "Kinetic Retention",
    desc: "Multi-component yarn structure providing instant recovery without sagging or baggy knees/elbows.",
  },
  {
    name: "Silken Soft-Touch Handfeel",
    category: "Sensory Elegance",
    desc: "Bio-polished and micro-sanded finishing creating a cashmere-like tactile touch on compact cotton weaves.",
  },
  {
    name: "Wrinkle-Resistant Easy Care",
    category: "Executive Performance",
    desc: "Cross-linked molecular finishing keeping shirts crisp through international business travel and humid climates.",
  },
];

export default function ProductsInnovationPage() {
  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Material Science & Collections
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Products & Material Innovation
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            From our flagship Renaissance™ concept line to engineered greige goods and high-twist compact shirting, we design textiles that honor human comfort and withstand demanding lifestyles.
          </p>
        </div>
      </section>

      {/* Renaissance Highlight Section */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="bg-novus-richblack border border-novus-charcoal p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-charcoal text-[11px] font-mono text-novus-gold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Concept</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
              Renaissance™ — Technology to Complement Comfort
            </h2>
            <div className="w-16 h-[1.5px] bg-novus-gold"></div>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              We honor customer comfort as paramount. Under the Renaissance banner, we invite global brand partners to co-create revolutionary material applications for apparel lifestyle and sporting goods.
            </p>
            <p className="text-sm text-novus-beige/80 leading-relaxed font-light">
              By combining our proprietary fiber compounding, micro-polyester blends, and dual-core recovery filaments with in-depth consumer trends, Renaissance transforms standard everyday wear into an effortless sensory experience.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-novus-gold">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-novus-gold" />
                <span>Micro-Polyester Weaves</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-novus-gold" />
                <span>Dual-Core Recovery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-novus-gold" />
                <span>Rapid Capillary Wicking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-novus-gold" />
                <span>Featherweight Soft Hand</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-96 w-full border border-novus-charcoal overflow-hidden group">
            <Image
              src={PRODUCT_COLLECTIONS[0].image}
              alt="Renaissance Textile Innovation"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
          </div>
        </div>
      </section>

      {/* Comprehensive Product Showcase */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Fabric Catalog & Garment Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Engineered Textile Categories
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Developed with meticulous attention to yarn count, tensile strength, and color fastness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_COLLECTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-novus-richblack border border-novus-charcoal overflow-hidden group hover:border-novus-gold/40 transition-colors flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden bg-novus-charcoal">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute top-4 left-4 bg-novus-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-widest text-novus-gold uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-novus-ivory font-medium">{item.title}</h3>
                  <p className="text-xs font-mono text-novus-beige-accent">{item.tagline}</p>
                  <p className="text-xs text-novus-beige/80 font-light leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-novus-charcoal space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-novus-muted block">
                    Technical Attributes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] uppercase font-mono px-2.5 py-1 bg-novus-charcoal text-novus-beige-dark"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Performance Finishes */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Applied Chemistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Performance Finishes & Treatments
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Formulated to meet strict eco-toxicity standards while delivering functional superiority.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_FINISHES.map((finish, fIdx) => (
            <div
              key={fIdx}
              className="p-6 bg-novus-charcoal/30 border border-novus-charcoal space-y-3 hover:border-novus-gold/40 transition-colors"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-novus-gold">
                {finish.category}
              </span>
              <h4 className="font-serif text-lg text-novus-ivory font-medium">{finish.name}</h4>
              <p className="text-xs text-novus-muted font-light leading-relaxed">{finish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-novus-charcoal text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-3xl text-novus-ivory font-light">
            Request Swatches & Material Specs
          </h3>
          <p className="text-xs text-novus-beige/80 font-light leading-relaxed">
            Our material sampling team ships physical swatches, lab dips, and technical spec sheets directly to your corporate design studio.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.2em] font-semibold transition-all"
            >
              <span>Order Material Swatch Kit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
