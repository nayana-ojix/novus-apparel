"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Globe2, Layers, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "01 • The Novus Story", href: "/#story" },
  { label: "02 • What We Do", href: "/#capabilities" },
  { label: "03 • The Novus Thread Journey", href: "/#thread-journey" },
  { label: "04 • Manufacturing Network", href: "/manufacturing" },
  { label: "05 • Innovation & Technology", href: "/#innovation" },
  { label: "06 • Founding Leadership", href: "/#leadership" },
  { label: "07 • Global Presence", href: "/#global" },
  { label: "08 • Business Enquiry", href: "/#contact" },
];

const GLOBAL_OFFICES = [
  {
    city: "Bangalore",
    country: "India",
    role: "Global Headquarters",
    address: [
      "Novus Apparel Limited",
      "#23, Siva Arcade (3rd Floor), 29th Main",
      "1st Cross, 1st Stage, BTM Layout",
      "Bangalore – 560068, Karnataka, India",
    ],
    emails: ["chaand@novusapparels.com", "vasanthkumar@novusapparels.com"],
    phone: "+91 99808 12727",
  },
  {
    city: "North Brunswick",
    country: "United States",
    role: "Americas Client Relations",
    address: [
      "Novus Apparel Limited",
      "Suite #1, 825 Georges Rd",
      "North Brunswick, NJ – 08902",
      "United States of America",
    ],
    emails: ["chaand@novusapparels.com"],
  },
  {
    city: "Shanghai",
    country: "China",
    role: "Technical Sourcing & Fabric R&D",
    address: [
      "Novus Apparel Limited / Newwell Textiles",
      "Room #1109, Yuzhou Plaza #299, Jingang Road",
      "Pudong New District",
      "Shanghai – 201206, China",
    ],
    emails: ["chaand@novusapparels.com"],
    phone: "+86-021-68970132",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-cream relative z-10 border-t border-sand/30 overflow-hidden">
      {/* Top Banner: Monumental Brand Statement */}
      <div className="border-b border-cream/10 py-14 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt-light font-bold block mb-2">
              SRI DHANALAKSHMI GROUP • ESTABLISHED 1971
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-cream uppercase">
              NOVUS APPAREL LIMITED
            </h2>
            <p className="font-body text-cream/70 text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed">
              &ldquo;From Thread to Possibility.&rdquo; Providing vertical apparel solutions from technical fabric research and engineering to end garments through a disciplined partner manufacturing network.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 text-cream font-display text-xs uppercase tracking-wider font-semibold transition-all duration-300 shrink-0"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-olive-light font-bold block">
              HERITAGE & ECOSYSTEM
            </span>
            <p className="font-body text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
              NOVUS APPAREL is an apparel solutions business associated with Sri Dhanalakshmi Group (est. 1971). We unite East Asian polymer and greige innovation with South Asian vertical textile craftsmanship and agile partner manufacturing.
            </p>
            <div className="pt-2">
              <Link
                href="/manufacturing"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-burnt-light hover:text-cream font-semibold transition-colors"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Partner Manufacturing Network</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Map (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-light font-bold block">
              SITE DIRECTORY
            </span>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-display text-xs uppercase tracking-wider text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Global Footprint (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sage font-bold block">
              VERIFIED BUSINESS HUBS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-body">
              {GLOBAL_OFFICES.map((off) => (
                <div key={off.city} className="space-y-1.5 p-3 rounded-xl bg-cream/5 border border-cream/10">
                  <span className="font-display font-bold uppercase text-cream block">
                    {off.city}
                  </span>
                  <span className="text-[10px] font-mono text-burnt-light block">
                    {off.country}
                  </span>
                  <p className="text-[11px] text-cream/60 font-light leading-snug">
                    {off.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal Bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cream/50">
          <div>
            &copy; {new Date().getFullYear()} NOVUS APPAREL LIMITED. Associated with Sri Dhanalakshmi Group (Est. 1971).
          </div>
          <div className="flex items-center gap-6">
            <span>Network Partner Scale: 4,000–5,000</span>
            <span>•</span>
            <span>India // USA // China</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
