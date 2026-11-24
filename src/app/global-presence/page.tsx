"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { GLOBAL_OFFICES, MANUFACTURING_HUBS } from "@/data/company";

export default function GlobalPresencePage() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>06 // GLOBAL OPERATIONS NETWORK</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              COMMERCIAL HUBS & <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                manufacturing
              </span>{" "}
              CORRIDORS.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              With commercial headquarters in India, client relations in North America, and specialized fabric R&D in China, Novus coordinates an interconnected manufacturing matrix across 7+ nations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Global Hub Selector */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="max-w-2xl mb-8 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Direct Offices
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Select an International Commercial Hub
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6">
          {GLOBAL_OFFICES.map((office, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOffice(idx)}
              className={`px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2 border ${
                selectedOffice === idx
                  ? "bg-atelier-gold text-black font-bold border-atelier-gold shadow-gold-glow"
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-white/20"
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
        <div className="mt-8 rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-atelier-card">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-atelier-gold tracking-widest uppercase border border-atelier-gold/30">
              {GLOBAL_OFFICES[selectedOffice].status}
            </div>
            <h3 className="font-syne text-3xl lg:text-4xl font-black text-white uppercase">
              {GLOBAL_OFFICES[selectedOffice].country} — {GLOBAL_OFFICES[selectedOffice].city}
            </h3>
            <p className="text-xs font-mono text-atelier-emerald">
              {GLOBAL_OFFICES[selectedOffice].role}
            </p>

            <div className="space-y-1.5 text-sm sm:text-base text-gray-300 font-light border-l-2 border-atelier-gold pl-4 py-1">
              {GLOBAL_OFFICES[selectedOffice].address.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>

            {GLOBAL_OFFICES[selectedOffice].phones && (
              <div className="pt-2">
                <span className="text-[10px] uppercase font-mono text-gray-500 block">Direct Telephone</span>
                <p className="text-xs font-mono text-atelier-champagne mt-0.5">
                  {GLOBAL_OFFICES[selectedOffice].phones?.join(" / ")}
                </p>
              </div>
            )}

            {GLOBAL_OFFICES[selectedOffice].emails && (
              <div className="pt-1">
                <span className="text-[10px] uppercase font-mono text-gray-500 block">Official Communication</span>
                <p className="text-xs font-mono text-atelier-gold mt-0.5">
                  {GLOBAL_OFFICES[selectedOffice].emails?.join(" / ")}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
              Strategic Capability
            </span>
            <h4 className="font-syne text-xl font-bold text-white uppercase">
              Hub Core Functions
            </h4>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Provides real-time oversight of sourcing contracts, physical sample dispatch, technical inspections, and direct client relationship management.
            </p>
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-atelier-champagne hover:text-white transition-colors"
              >
                <span>Book Meeting at this Office</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Corridors Matrix */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
            Seven Corridors
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase">
            Global Sourcing & Assembly Network
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Providing tariff optimization, duty-free corridors, and multi-hub agility for major fashion brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-atelier-gold/40 transition-all duration-300 space-y-3 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{hub.flag}</span>
                    <h3 className="font-syne text-xl font-bold text-white uppercase">
                      {hub.country}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {hub.capabilities}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-gray-500">
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
