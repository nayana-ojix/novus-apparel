"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Navigation,
} from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VerifiedOffice {
  id: string;
  city: string;
  country: string;
  role: string;
  tag: string;
  address: string[];
  phone?: string;
  emails: string[];
  timezone: string;
  utcOffset: number;
}

const VERIFIED_OFFICES: VerifiedOffice[] = [
  {
    id: "bangalore",
    city: "Bangalore",
    country: "India",
    role: "Global Headquarters & Commercial Hub",
    tag: "GLOBAL HQ",
    address: [
      "Novus Apparel Limited",
      "#23, Siva Arcade (3rd Floor), 29th Main",
      "1st Cross, 1st Stage, BTM Layout",
      "Bangalore – 560068, Karnataka, India",
    ],
    phone: "+91 99808 12727",
    emails: ["chaand@novusapparels.com", "vasanthkumar@novusapparels.com"],
    timezone: "Asia/Kolkata",
    utcOffset: 5.5,
  },
  {
    id: "new-jersey",
    city: "North Brunswick",
    country: "United States",
    role: "Americas Client Relations & Sourcing Liaison",
    tag: "AMERICAS LIAISON",
    address: [
      "Novus Apparel Limited",
      "Suite #1, 825 Georges Rd",
      "North Brunswick, NJ – 08902",
      "United States of America",
    ],
    emails: ["chaand@novusapparels.com"],
    timezone: "America/New_York",
    utcOffset: -5,
  },
  {
    id: "shanghai",
    city: "Shanghai",
    country: "China",
    role: "Newwell Textiles • Technical Sourcing & Fabric R&D",
    tag: "EAST ASIA R&D",
    address: [
      "Novus Apparel Limited / Newwell Textiles",
      "Room #1109, Yuzhou Plaza #299, Jingang Road",
      "Pudong New District",
      "Shanghai – 201206, China",
    ],
    phone: "+86-021-68970132",
    emails: ["chaand@novusapparels.com"],
    timezone: "Asia/Shanghai",
    utcOffset: 8,
  },
];

export default function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedOffice, setSelectedOffice] = useState<string>("bangalore");
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const newTimes: Record<string, string> = {};
      VERIFIED_OFFICES.forEach((off) => {
        try {
          newTimes[off.id] = new Intl.DateTimeFormat("en-US", {
            timeZone: off.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          }).format(now);
        } catch {
          newTimes[off.id] = "";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentOffice =
    VERIFIED_OFFICES.find((o) => o.id === selectedOffice) || VERIFIED_OFFICES[0];

  return (
    <section
      ref={sectionRef}
      id="global"
      className="py-24 lg:py-36 bg-sand/30 border-b border-sand/70 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sand/70">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
                SECTION 08 // GLOBAL PRESENCE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              <KineticText type="words" delay={0.1} stagger={0.06}>
                THREE CONTINENTS.
              </KineticText>{" "}
              <br />
              <span className="text-olive">
                <KineticText type="words" delay={0.35} stagger={0.06}>
                  SYNCHRONIZED OPERATIONS.
                </KineticText>
              </span>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
              NOVUS maintains verified commercial, technical, and client relations operations across India, the United States, and China.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal/70 font-semibold">
            <Globe2 className="w-4 h-4 text-olive" />
            <span>INDIA // USA // CHINA</span>
          </div>
        </div>

        {/* 3 Interactive Location Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VERIFIED_OFFICES.map((off) => {
            const isSelected = selectedOffice === off.id;
            return (
              <TiltCard key={off.id} tiltDegree={5}>
                <button
                  onClick={() => setSelectedOffice(off.id)}
                  className={`w-full p-6 sm:p-8 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between space-y-6 h-full ${
                    isSelected
                      ? "bg-cream border-charcoal shadow-md scale-[1.01]"
                      : "bg-cream/60 hover:bg-cream border-sand/80 text-charcoal/70"
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <div className="space-y-1">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ${
                          isSelected ? "bg-burnt text-cream" : "bg-sand text-charcoal/60"
                        }`}
                      >
                        {off.tag}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-charcoal uppercase tracking-tight pt-1">
                        {off.city}
                      </h3>
                      <p className="text-xs font-mono text-olive font-bold">
                        {off.country}
                      </p>
                    </div>

                    <div className="text-right">
                      <Clock className="w-4 h-4 text-charcoal/40 ml-auto mb-1" />
                      <span className="font-mono text-xs text-charcoal font-semibold block">
                        {times[off.id] || "Active"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sand/70 text-xs font-body text-charcoal/70 font-light line-clamp-2 w-full">
                    {off.role}
                  </div>
                </button>
              </TiltCard>
            );
          })}
        </div>

        {/* Detailed Selected Office Display Box */}
        <div className="rounded-3xl bg-cream border border-sand p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Location Address & Communications (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold">
                  VERIFIED BUSINESS LOCATION // {currentOffice.country.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-charcoal">
                  {currentOffice.city}, {currentOffice.country}
                </h3>
                <p className="font-body text-sm sm:text-base text-charcoal/70 font-light">
                  {currentOffice.role}
                </p>
              </div>

              {/* Physical Address */}
              <div className="p-6 rounded-2xl bg-sand/30 border border-sand space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal/60 font-semibold mb-1">
                  <MapPin className="w-4 h-4 text-burnt" />
                  <span>Physical Address</span>
                </div>
                {currentOffice.address.map((line, idx) => (
                  <p
                    key={idx}
                    className="font-body text-sm text-charcoal font-medium leading-snug"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Direct Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentOffice.phone && (
                  <div className="p-4 rounded-xl bg-sand/30 border border-sand shadow-sm">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 block mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${currentOffice.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-display text-sm font-bold text-charcoal hover:text-burnt transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-olive" />
                      <span>{currentOffice.phone}</span>
                    </a>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-sand/30 border border-sand shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 block mb-1">
                    Enquiry Email
                  </span>
                  <a
                    href={`mailto:${currentOffice.emails[0]}`}
                    className="font-display text-sm font-bold text-charcoal hover:text-burnt transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-burnt" />
                    <span>{currentOffice.emails[0]}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Graphic & Synchronized Timezone (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <TiltCard tiltDegree={6}>
                <div className="p-6 sm:p-8 rounded-3xl bg-charcoal text-cream space-y-5 shadow-md">
                  <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-burnt-light font-bold">
                      OPERATIONAL TIMEZONE
                    </span>
                    <span className="text-xs font-mono text-cream/70">
                      UTC {currentOffice.utcOffset >= 0 ? `+${currentOffice.utcOffset}` : currentOffice.utcOffset}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-3xl sm:text-4xl font-bold text-cream tracking-tight">
                      {times[currentOffice.id] || "Active"}
                    </div>
                    <p className="text-xs text-cream/65 font-light">
                      Local active business time in {currentOffice.city}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-cream/15 text-xs text-cream/75 font-light leading-relaxed">
                    Direct liaison connecting our Bangalore headquarters, New Jersey client relations, and Shanghai technical sourcing division.
                  </div>
                </div>
              </TiltCard>

              <div className="p-4 rounded-xl bg-sand/40 border border-sand text-xs font-mono uppercase tracking-wider text-charcoal/70 text-center font-semibold">
                Three Verified Strategic Nodes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
