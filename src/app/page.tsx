"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Cpu, Compass, Globe2, Wind, ChevronRight } from "lucide-react";
import { LEADERSHIP_PROFILES, GLOBAL_OFFICES, PRODUCT_COLLECTIONS, MANUFACTURING_HUBS } from "@/data/company";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 lg:px-12 bg-novus-black">
        {/* Editorial Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=85"
            alt="Novus Apparel Editorial Textile"
            fill
            priority
            className="object-cover object-center brightness-[0.32] contrast-[1.08] scale-[1.02] transform transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-novus-black via-novus-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-novus-black/90 via-transparent to-novus-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-12">
          <div className="max-w-4xl space-y-8">
            {/* Super Header Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 border border-novus-gold/30 bg-novus-black/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-novus-gold animate-ping"></span>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-novus-gold">
                Sri Dhanalakshmi Group • Est. 1971 • USD $160M
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-novus-ivory leading-[1.05]">
                ENGINEERING <br />
                <span className="italic font-light text-novus-beige-warm">EXCELLENCE.</span> <br />
                CREATING COMFORT.
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-novus-beige/90 font-light max-w-2xl leading-relaxed">
              Bringing together apparel innovation, advanced textile manufacturing, and global supply-chain agility to engineer solutions for a changing world.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                href="/products-innovation"
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-xl"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 border border-novus-ivory/30 hover:border-novus-gold text-novus-ivory hover:text-novus-gold text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 backdrop-blur-sm"
              >
                <span>Connect With Leadership</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar at bottom of Hero */}
          <div className="mt-20 pt-8 border-t border-novus-charcoal/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-novus-ivory">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-novus-beige-accent">Legacy</p>
              <p className="text-2xl lg:text-3xl font-serif text-novus-ivory mt-1">1971</p>
              <p className="text-xs text-novus-muted mt-0.5">Sri Dhanalakshmi Group Founding</p>
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-novus-beige-accent">Group Scale</p>
              <p className="text-2xl lg:text-3xl font-serif text-novus-ivory mt-1">$160M USD</p>
              <p className="text-xs text-novus-muted mt-0.5">Aggregate Annual Turnover</p>
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-novus-beige-accent">Sourcing Reach</p>
              <p className="text-2xl lg:text-3xl font-serif text-novus-ivory mt-1">7+ Nations</p>
              <p className="text-xs text-novus-muted mt-0.5">India, US, China, Vietnam & more</p>
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-novus-beige-accent">Energy</p>
              <p className="text-2xl lg:text-3xl font-serif text-novus-ivory mt-1">100% Wind</p>
              <p className="text-xs text-novus-muted mt-0.5">Captive Renewable Mills</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT NOVUS INTRODUCTION SECTION */}
      <section className="py-24 lg:py-32 bg-novus-richblack border-t border-novus-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
              01 / The Enterprise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light leading-tight">
              A Vertical Force in Global Apparel & Material Science
            </h2>
            <div className="w-16 h-[1.5px] bg-novus-gold"></div>
            <p className="text-novus-beige/80 text-sm sm:text-base leading-relaxed font-light">
              Novus Apparel Limited is an extensive research-and-development and global marketing enterprise providing a complete one-stop vertical solution from concept design to the final consumer product.
            </p>
            <p className="text-novus-beige/80 text-sm sm:text-base leading-relaxed font-light">
              Operating within the historic multi-discipline umbrella of the Sri Dhanalakshmi Group (turnover of USD $160 Million), Novus combines deep spinning and weaving traditions with contemporary polymer physics, high-performance finishes, and cross-border agility.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-gold hover:text-novus-ivory transition-colors group"
              >
                <span>Read Full Corporate History</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-novus-charcoal/50 p-8 border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors">
              <Compass className="w-7 h-7 text-novus-gold" />
              <h3 className="font-serif text-xl text-novus-ivory font-medium">Vertical Integrity</h3>
              <p className="text-xs text-novus-muted leading-relaxed font-light">
                Direct integration from fiber spinning, sizing, and precision weaving through specialized garment tailoring ensures uncompromising quality assurance and cost controls.
              </p>
            </div>

            <div className="bg-novus-charcoal/50 p-8 border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors">
              <Cpu className="w-7 h-7 text-novus-gold" />
              <h3 className="font-serif text-xl text-novus-ivory font-medium">Science & Materials R&D</h3>
              <p className="text-xs text-novus-muted leading-relaxed font-light">
                Dedicated research laboratories developing specialized greige goods, dual-core stretch yarns, micro-polyester blends, and ergonomic textile finishes.
              </p>
            </div>

            <div className="bg-novus-charcoal/50 p-8 border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors">
              <Globe2 className="w-7 h-7 text-novus-gold" />
              <h3 className="font-serif text-xl text-novus-ivory font-medium">Global Sourcing Matrix</h3>
              <p className="text-xs text-novus-muted leading-relaxed font-light">
                Operational bases in India, the United States, and China (Newwell Textiles, Shanghai), connecting international fashion houses with premier manufacturing assets.
              </p>
            </div>

            <div className="bg-novus-charcoal/50 p-8 border border-novus-charcoal space-y-4 hover:border-novus-gold/40 transition-colors">
              <Wind className="w-7 h-7 text-novus-gold" />
              <h3 className="font-serif text-xl text-novus-ivory font-medium">Clean Energy Foundation</h3>
              <p className="text-xs text-novus-muted leading-relaxed font-light">
                Backed by captive wind turbine generation, Novus grounds large-scale fabric production in verifiable environmental stewardship and clean power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE RENAISSANCE™ & PRODUCTS SHOWCASE */}
      <section className="py-24 lg:py-32 bg-novus-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-novus-charcoal pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
                02 / Innovation & Materials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light mt-2">
                Renaissance™ — Technology to Complement Comfort
              </h2>
            </div>
            <Link
              href="/products-innovation"
              className="text-xs uppercase font-mono tracking-[0.2em] text-novus-beige hover:text-novus-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Collections</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Renaissance Card */}
            <div className="lg:col-span-7 bg-novus-richblack border border-novus-charcoal overflow-hidden group flex flex-col justify-between">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src={PRODUCT_COLLECTIONS[0].image}
                  alt={PRODUCT_COLLECTIONS[0].title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute top-4 left-4 bg-novus-black/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono tracking-widest text-novus-gold uppercase">
                  Flagship Concept
                </div>
              </div>
              <div className="p-8 lg:p-10 space-y-4">
                <span className="text-xs font-mono text-novus-beige-accent tracking-widest uppercase">
                  {PRODUCT_COLLECTIONS[0].category}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-medium">
                  {PRODUCT_COLLECTIONS[0].title}
                </h3>
                <p className="text-xs text-novus-beige/80 leading-relaxed font-light">
                  {PRODUCT_COLLECTIONS[0].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {PRODUCT_COLLECTIONS[0].specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-mono px-2.5 py-1 bg-novus-charcoal text-novus-beige-dark"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Product Grid */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {PRODUCT_COLLECTIONS.slice(1, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-novus-richblack border border-novus-charcoal p-6 flex flex-col justify-between group hover:border-novus-gold/40 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-novus-gold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-xl text-novus-ivory font-medium group-hover:text-novus-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-novus-muted font-light leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-novus-charcoal/50 mt-4 flex items-center justify-between text-xs font-mono text-novus-beige-accent">
                    <span>{item.specs[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING EXCELLENCE & GLOBAL CORRIDORS */}
      <section className="py-24 bg-novus-richblack border-t border-novus-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
              03 / Strategic Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light leading-tight">
              International Manufacturing & Sourcing Network
            </h2>
            <p className="text-novus-beige/80 text-sm font-light leading-relaxed">
              &ldquo;Every country has its own essence, every factory has its own capabilities. We seek to have the best around the world for perfect value creations.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURING_HUBS.map((hub, index) => (
              <div
                key={index}
                className="p-6 bg-novus-charcoal/40 border border-novus-charcoal hover:border-novus-gold/50 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{hub.flag}</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-novus-muted">
                    Hub {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-novus-ivory font-medium">
                  {hub.country}
                </h3>
                <p className="text-xs text-novus-beige-dark/90 leading-relaxed font-light">
                  {hub.capabilities}
                </p>
                <p className="text-[11px] font-mono text-novus-gold/90 pt-2 border-t border-novus-charcoal/60">
                  {hub.highlights}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/technology-partners"
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-beige hover:text-novus-gold transition-colors"
            >
              <span>Explore Technical Partnerships & Capabilities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP INTRODUCTION */}
      <section className="py-24 lg:py-32 bg-novus-black border-t border-novus-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-novus-charcoal pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
                04 / Visionary Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-novus-ivory font-light mt-2">
                Executive Leadership
              </h2>
            </div>
            <Link
              href="/leadership"
              className="text-xs uppercase font-mono tracking-[0.2em] text-novus-beige hover:text-novus-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>Meet Full Leadership Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {LEADERSHIP_PROFILES.map((leader, i) => (
              <div
                key={i}
                className="bg-novus-richblack border border-novus-charcoal overflow-hidden group hover:border-novus-gold/40 transition-colors flex flex-col"
              >
                <div className="relative h-96 w-full overflow-hidden bg-novus-charcoal">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novus-richblack via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-novus-gold">
                      {leader.qualification}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-medium">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-novus-beige-accent">{leader.role}</p>
                  </div>
                  <p className="text-xs text-novus-beige/80 font-light leading-relaxed">
                    {leader.bio[0]}
                  </p>
                  <div className="pt-4 border-t border-novus-charcoal">
                    <Link
                      href="/leadership"
                      className="text-xs font-mono uppercase tracking-wider text-novus-gold hover:text-novus-ivory transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Read Executive Profile</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL PRESENCE SNAPSHOT */}
      <section className="py-24 bg-novus-richblack border-t border-novus-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
              05 / Connected Global Offices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
              International Commercial & Technical Hubs
            </h2>
            <p className="text-sm text-novus-beige/80 font-light">
              Direct presence in major economic, design, and manufacturing hubs across India, the United States, and China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="bg-novus-black p-8 border border-novus-charcoal space-y-5 hover:border-novus-gold/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-novus-charcoal pb-4">
                  <h3 className="font-serif text-2xl text-novus-ivory font-medium">
                    {office.country}
                  </h3>
                  <span className="text-[11px] font-mono text-novus-gold">{office.city}</span>
                </div>
                <div className="space-y-2 text-xs font-light text-novus-beige-dark/90 leading-relaxed">
                  {office.address.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
                <div className="pt-4 border-t border-novus-charcoal/50 text-xs font-mono text-novus-beige-accent space-y-1">
                  {office.phones && <p>Tel: {office.phones[0]}</p>}
                  {office.emails && <p>Email: {office.emails[0]}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/global-presence"
              className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-[0.2em] text-novus-beige hover:text-novus-gold transition-colors"
            >
              <span>Explore Interactive Global Map</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PRESTIGIOUS CONTACT CTA BANNER */}
      <section className="py-24 lg:py-32 bg-novus-black border-t border-novus-charcoal relative">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-novus-gold block">
            Guiding Philosophy: MAKE A DIFFERENCE.
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-novus-ivory font-normal leading-tight">
            Ready to Engineer Next-Generation Apparel Solutions?
          </h2>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light max-w-2xl mx-auto leading-relaxed">
            Partner with Novus Apparel Limited for vertical textile innovation, advanced fabric research, and global manufacturing precision.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-2xl"
            >
              <span>Initiate Executive Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:chaand@novusapparels.com"
              className="inline-flex items-center space-x-3 px-8 py-4 border border-novus-charcoal hover:border-novus-gold text-novus-ivory hover:text-novus-gold text-xs uppercase tracking-[0.22em] font-medium transition-colors"
            >
              <span>Direct Email Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
