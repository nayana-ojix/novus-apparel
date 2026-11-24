"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { GLOBAL_OFFICES, MANUFACTURING_HUBS } from "@/data/company";

export default function GlobalPresencePage() {
  const [selectedOffice, setSelectedOffice] = useState(0);

  return (
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            International Network
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Global Commercial Presence & Manufacturing Corridors
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            With direct commercial headquarters in India, client relations in North America, and specialized fabric R&D in China, Novus coordinates an interconnected manufacturing matrix across 7+ nations.
          </p>
        </div>
      </section>

      {/* Interactive Global Hub Selector */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Direct Offices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            Select an International Hub
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 border-b border-novus-charcoal pb-6">
          {GLOBAL_OFFICES.map((office, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOffice(idx)}
              className={`px-6 py-3 text-xs uppercase font-mono tracking-widest transition-all duration-300 flex items-center space-x-2 ${
                selectedOffice === idx
                  ? "bg-novus-gold text-novus-black font-semibold shadow-md"
                  : "bg-novus-richblack text-novus-beige-dark hover:bg-novus-charcoal border border-novus-charcoal"
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
        <div className="mt-8 bg-novus-richblack border border-novus-charcoal p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-novus-charcoal text-[11px] font-mono text-novus-gold tracking-widest uppercase">
              {GLOBAL_OFFICES[selectedOffice].status}
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-novus-ivory font-medium">
              {GLOBAL_OFFICES[selectedOffice].country} — {GLOBAL_OFFICES[selectedOffice].city}
            </h3>
            <p className="text-xs font-mono text-novus-beige-accent">
              {GLOBAL_OFFICES[selectedOffice].role}
            </p>

            <div className="space-y-1.5 text-sm text-novus-beige/90 font-light border-l-2 border-novus-gold pl-4 py-1">
              {GLOBAL_OFFICES[selectedOffice].address.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-novus-charcoal text-xs font-mono">
              {GLOBAL_OFFICES[selectedOffice].phones && (
                <div>
                  <span className="text-novus-muted block text-[10px] uppercase">Telephone</span>
                  <span className="text-novus-gold">
                    {GLOBAL_OFFICES[selectedOffice].phones.join(" / ")}
                  </span>
                </div>
              )}
              {GLOBAL_OFFICES[selectedOffice].emails && (
                <div>
                  <span className="text-novus-muted block text-[10px] uppercase">Email</span>
                  <span className="text-novus-gold">
                    {GLOBAL_OFFICES[selectedOffice].emails.join(" / ")}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 bg-novus-charcoal/40 p-6 border border-novus-charcoal space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
              Hub Geolocation Coordinates
            </span>
            <div className="font-mono text-xs text-novus-ivory space-y-1">
              <p>Latitude: {GLOBAL_OFFICES[selectedOffice].coordinates.lat}° N</p>
              <p>Longitude: {GLOBAL_OFFICES[selectedOffice].coordinates.lng}° E</p>
            </div>
            <div className="pt-4 border-t border-novus-charcoal/60">
              <Link
                href="/contact"
                className="w-full text-center inline-block py-3 bg-novus-beige hover:bg-novus-gold text-novus-black font-semibold text-xs uppercase tracking-widest transition-colors"
              >
                Inquire With This Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Corridors */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto border-t border-novus-charcoal">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Operational Reach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-novus-ivory font-light">
            International Production Corridors
          </h2>
          <p className="text-xs text-novus-muted font-light">
            Manufacturing, sourcing, and logistics assets positioned for tariff optimization and fast market access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURING_HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 bg-novus-richblack border border-novus-charcoal space-y-3 hover:border-novus-gold/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{hub.flag}</span>
                <span className="text-xs font-mono text-novus-gold">Corridor 0{idx + 1}</span>
              </div>
              <h4 className="font-serif text-xl text-novus-ivory font-medium">{hub.country}</h4>
              <p className="text-xs text-novus-beige/80 font-light leading-relaxed">
                {hub.capabilities}
              </p>
              <p className="text-[11px] font-mono text-novus-muted pt-2 border-t border-novus-charcoal/50">
                {hub.highlights}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
