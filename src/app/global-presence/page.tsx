"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import { GLOBAL_OFFICES, MANUFACTURING_HUBS } from "@/data/company";

export default function GlobalPresencePage() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="teal">International Operations Network</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Global Presence & <br />
              <span className="italic font-normal text-gold-gradient">
                Manufacturing Corridors.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              With commercial headquarters in India, client relations in North America, and specialized fabric R&D in China, Novus coordinates an interconnected manufacturing matrix across 7+ nations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Global Hub Selector */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-8 space-y-2">
          <Badge variant="gold">Direct Offices</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light mt-2">
            Select an International Commercial Hub
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 border-b border-novus-navy-border pb-6">
          {GLOBAL_OFFICES.map((office, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOffice(idx)}
              className={`px-6 py-3.5 text-xs uppercase font-mono tracking-widest transition-all duration-300 flex items-center space-x-2 border ${
                selectedOffice === idx
                  ? "bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest font-semibold border-novus-gold shadow-gold-glow"
                  : "bg-novus-navy-dark text-novus-ivory/80 hover:text-white border-novus-navy-border hover:border-novus-gold/40"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {office.country} ({office.city})
              </span>
            </button>
          ))}
        </div>

        {/* Selected Hub Card */}
        <div className="mt-8 bg-novus-navy-dark border border-novus-navy-border p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-card-luxury">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-novus-navy-surface text-[10px] font-mono text-novus-gold tracking-widest uppercase border border-novus-gold/30">
              {GLOBAL_OFFICES[selectedOffice].status}
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-novus-ivory font-medium">
              {GLOBAL_OFFICES[selectedOffice].country} — {GLOBAL_OFFICES[selectedOffice].city}
            </h3>
            <p className="text-xs font-mono text-novus-teal-light">
              {GLOBAL_OFFICES[selectedOffice].role}
            </p>

            <div className="space-y-1.5 text-sm sm:text-base text-novus-ivory-warm/85 font-light border-l-2 border-novus-gold pl-4 py-1">
              {GLOBAL_OFFICES[selectedOffice].address.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>

            {GLOBAL_OFFICES[selectedOffice].phones && (
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-novus-muted block">
                  Direct Telephone
                </span>
                <p className="text-xs font-mono text-novus-champagne mt-0.5">
                  {GLOBAL_OFFICES[selectedOffice].phones?.join(" / ")}
                </p>
              </div>
            )}

            {GLOBAL_OFFICES[selectedOffice].emails && (
              <div className="pt-1">
                <span className="text-[10px] uppercase font-mono text-novus-muted block">
                  Official Communication Mailbox
                </span>
                <p className="text-xs font-mono text-novus-gold mt-0.5">
                  {GLOBAL_OFFICES[selectedOffice].emails?.join(" / ")}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-novus-navy-surface/60 border border-novus-navy-border p-6 sm:p-8 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-novus-gold block">
              Strategic Capability
            </span>
            <h4 className="font-serif text-xl text-novus-ivory">
              Hub Core Functions
            </h4>
            <p className="text-xs text-novus-ivory-warm/80 font-light leading-relaxed">
              Provides real-time oversight of sourcing contracts, physical sample dispatch, technical inspections, and direct client relationship management.
            </p>
            <div className="pt-3 border-t border-novus-navy-border/60">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-widest text-novus-champagne hover:text-white transition-colors"
              >
                <span>Book Meeting at this Office</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Corridors Matrix */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-navy-border/60">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="coral">Integrated Corridors</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Seven Global Sourcing & Assembly Corridors
          </h2>
          <p className="text-sm text-novus-muted font-light">
            Providing tariff optimization, duty-free corridors, and multi-hub agility for major fashion brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 bg-novus-navy-dark border border-novus-navy-border hover:border-novus-gold/40 transition-all duration-300 space-y-3 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{hub.flag}</span>
                    <h3 className="font-serif text-xl text-novus-ivory font-medium">
                      {hub.country}
                    </h3>
                  </div>
                  <p className="text-xs text-novus-ivory-warm/80 font-light leading-relaxed">
                    {hub.capabilities}
                  </p>
                </div>
                <div className="pt-3 border-t border-novus-navy-border/60 text-[10px] font-mono text-novus-muted">
                  <span>{hub.highlights}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
