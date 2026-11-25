"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, Send, Globe2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface OfficeInfo {
  id: string;
  city: string;
  country: string;
  role: string;
  tag: string;
  address: string[];
  phone?: string;
  emails: string[];
  timezone: string;
  utcOffset: number; // in hours from UTC
  coordinates: { x: number; y: number }; // Percentage on SVG map
}

const VERIFIED_OFFICES: OfficeInfo[] = [
  {
    id: "bangalore",
    city: "Bangalore",
    country: "India",
    role: "Global Headquarters & Design Atelier",
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
    coordinates: { x: 67.5, y: 55 },
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
    coordinates: { x: 25.5, y: 38 },
  },
  {
    id: "shanghai",
    city: "Shanghai",
    country: "China",
    role: "Newwell Textiles • Technical Sourcing & R&D Center",
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
    coordinates: { x: 80.5, y: 44 },
  },
];

const MANUFACTURING_CORRIDORS = [
  { name: "India", x: 67.5, y: 53 },
  { name: "China", x: 79, y: 42 },
  { name: "Vietnam", x: 77.5, y: 54 },
  { name: "Bangladesh", x: 71.5, y: 49 },
  { name: "Jordan", x: 58.5, y: 43 },
  { name: "Ethiopia", x: 59.5, y: 57 },
  { name: "USA", x: 23.5, y: 40 },
];

export default function GlobalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeOffice, setActiveOffice] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "100% Cotton Knits",
    quantity: "5,000 - 20,000 units",
    message: "",
  });

  // Clocks
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatLocalTime = (offsetHours: number) => {
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const local = new Date(utc + 3600000 * offsetHours);
    return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".global-heading-span", {
        y: "110%",
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".global-heading-wrapper",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const office = VERIFIED_OFFICES[activeOffice];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <section
      ref={sectionRef}
      id="global"
      className="py-28 lg:py-40 bg-cream relative overflow-hidden text-charcoal"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-olive/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-burnt" />
          <span className="text-[11px] font-display uppercase tracking-ultra text-burnt font-semibold">
            07 — GLOBAL PRESENCE & INQUIRY
          </span>
        </div>

        {/* Section Headline */}
        <div className="global-heading-wrapper mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-charcoal/15 pb-8">
          <div className="overflow-hidden">
            <h2 className="heading-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-charcoal leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="global-heading-span inline-block">LET&apos;S CREATE</span>
              </span>
              <span className="block overflow-hidden">
                <span className="global-heading-span inline-block text-burnt">WHAT&apos;S NEXT.</span>
              </span>
            </h2>
          </div>

          <p className="font-body text-base sm:text-lg text-charcoal/70 max-w-md font-light leading-relaxed">
            Connect directly with our executive directors in Bangalore, New Jersey, or Shanghai to discuss custom fabric formulations, lead times, and global apparel production.
          </p>
        </div>

        {/* Interactive World Map & Global Corridors */}
        <div className="rounded-3xl bg-charcoal text-cream p-6 sm:p-10 lg:p-12 mb-20 shadow-2xl border border-charcoal-light">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-burnt-light font-bold block mb-1">
                GLOBAL OPERATIONAL CORRIDORS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Interactive World Network
              </h3>
            </div>

            {/* Timezone Clocks */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-display">
              {VERIFIED_OFFICES.map((off) => (
                <div key={off.id} className="px-3.5 py-1.5 rounded-xl bg-cream/10 border border-cream/15">
                  <span className="text-cream/50 text-[10px] uppercase block">{off.city}</span>
                  <span className="font-bold text-burnt-light">{formatLocalTime(off.utcOffset)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[21/10] bg-charcoal-dark rounded-2xl overflow-hidden border border-cream/10 p-2 sm:p-6">
            <svg
              viewBox="0 0 100 60"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* World Continents Schematic */}
              <g fill="#3A3D35" opacity="0.45" stroke="#4D5636" strokeWidth="0.2">
                {/* North America */}
                <path d="M12,18 Q16,14 26,17 Q32,15 34,22 Q30,27 26,32 Q20,36 14,30 Q11,26 12,18Z" />
                {/* South America */}
                <path d="M24,37 Q29,35 32,41 Q33,51 29,56 Q24,53 22,46 Q21,41 24,37Z" />
                {/* Europe */}
                <path d="M45,17 Q50,14 54,18 Q55,23 51,26 Q46,24 45,17Z" />
                {/* Africa */}
                <path d="M47,29 Q53,27 57,32 Q59,42 55,51 Q49,53 45,47 Q43,38 47,29Z" />
                {/* Asia Mainland */}
                <path d="M56,15 Q66,10 81,14 Q89,19 86,29 Q79,35 71,30 Q63,28 56,24 Q53,19 56,15Z" />
                {/* Indian Subcontinent */}
                <path d="M64,33 Q69,31 73,34 Q75,41 71,48 Q67,46 64,40 Q62,37 64,33Z" />
                {/* Southeast Asia */}
                <path d="M75,37 Q81,34 85,39 Q83,47 79,44 Q75,41 75,37Z" />
                {/* Australia */}
                <path d="M81,48 Q89,46 91,50 Q89,55 83,55 Q79,53 81,48Z" />
              </g>

              {/* Connecting Threads between Offices (The Continuous Ribbon Journey) */}
              <g stroke="#D76C3F" strokeWidth="0.25" opacity="0.6" strokeDasharray="1.2 1.2">
                <line
                  x1={VERIFIED_OFFICES[0].coordinates.x}
                  y1={VERIFIED_OFFICES[0].coordinates.y}
                  x2={VERIFIED_OFFICES[1].coordinates.x}
                  y2={VERIFIED_OFFICES[1].coordinates.y}
                />
                <line
                  x1={VERIFIED_OFFICES[0].coordinates.x}
                  y1={VERIFIED_OFFICES[0].coordinates.y}
                  x2={VERIFIED_OFFICES[2].coordinates.x}
                  y2={VERIFIED_OFFICES[2].coordinates.y}
                />
              </g>

              {/* Manufacturing Hubs Pins */}
              {MANUFACTURING_CORRIDORS.map((m) => (
                <g key={m.name}>
                  <circle cx={m.x} cy={m.y} r="0.6" fill="#B9BEA4" opacity="0.6" />
                </g>
              ))}

              {/* Verified Key Offices with Pulsing Radar Rings */}
              {VERIFIED_OFFICES.map((off, i) => (
                <g
                  key={off.id}
                  className="cursor-pointer"
                  onClick={() => setActiveOffice(i)}
                >
                  {/* Radar Pulse */}
                  <circle
                    cx={off.coordinates.x}
                    cy={off.coordinates.y}
                    r="2.5"
                    fill="none"
                    stroke={activeOffice === i ? "#D76C3F" : "#8A946E"}
                    strokeWidth="0.2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="1.2;3.2;1.2"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0;0.8"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Core Node */}
                  <circle
                    cx={off.coordinates.x}
                    cy={off.coordinates.y}
                    r={activeOffice === i ? "1.4" : "0.9"}
                    fill={activeOffice === i ? "#D76C3F" : "#69744B"}
                    stroke="#FFFFFF"
                    strokeWidth="0.3"
                  />

                  {/* City Label */}
                  <text
                    x={off.coordinates.x}
                    y={off.coordinates.y - 2.8}
                    textAnchor="middle"
                    className="font-display select-none"
                    fontSize="2.1"
                    fontWeight="bold"
                    fill={activeOffice === i ? "#D76C3F" : "#F3EBDD"}
                  >
                    {off.city}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Office Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {VERIFIED_OFFICES.map((off, i) => (
              <button
                key={off.id}
                onClick={() => setActiveOffice(i)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  activeOffice === i
                    ? "bg-cream text-charcoal border-cream shadow-xl"
                    : "bg-charcoal border-cream/15 text-cream hover:bg-charcoal-light"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[9px] font-display uppercase tracking-widest font-bold ${
                      activeOffice === i ? "text-burnt" : "text-burnt-light"
                    }`}
                  >
                    {off.tag}
                  </span>
                  <span className="text-[10px] font-display font-bold opacity-60">
                    {off.country}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg leading-tight">
                  {off.city}
                </h4>
                <p className="text-[11px] font-body opacity-70 mt-1 line-clamp-1">
                  {off.role}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column: Office Coordinates & Direct Production Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Selected Office Verified Details Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-sand p-8 sm:p-10 shadow-xl space-y-6">
            <div className="space-y-2 pb-6 border-b border-sand">
              <span className="text-[10px] font-display uppercase tracking-widest text-burnt font-bold block">
                {office.tag} • VERIFIED LOCATION
              </span>
              <h3 className="font-display text-3xl font-bold text-charcoal">
                {office.city}, {office.country}
              </h3>
              <p className="text-xs text-charcoal/60 font-body">
                {office.role}
              </p>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-olive font-display text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Physical Address</span>
              </div>
              <div className="pl-6 text-xs text-charcoal/80 font-body leading-relaxed space-y-0.5">
                {office.address.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>
            </div>

            {/* Direct Emails */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-burnt font-display text-xs font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Direct Contact Email</span>
              </div>
              <div className="pl-6 space-y-1">
                {office.emails.map((em) => (
                  <a
                    key={em}
                    href={`mailto:${em}`}
                    className="block text-xs font-display font-semibold text-charcoal hover:text-burnt transition-colors"
                  >
                    {em}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone if available */}
            {office.phone && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-olive font-display text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Telephone Line</span>
                </div>
                <div className="pl-6">
                  <a
                    href={`tel:${office.phone.replace(/[\s-]/g, "")}`}
                    className="text-xs font-display font-semibold text-charcoal hover:text-olive transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right: Direct Production Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-sand p-8 sm:p-12 shadow-xl">
            <div className="mb-8 space-y-2">
              <span className="text-[10px] font-display uppercase tracking-widest text-burnt font-bold block">
                COMMERCIAL ATELIER CONSULTATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                Initiate a Manufacturing Inquiry
              </h3>
              <p className="text-xs text-charcoal/60 font-body leading-relaxed">
                Send tech packs, material specifications, or commercial volume inquiries directly to our directors.
              </p>
            </div>

            {inquirySent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-olive/10 border border-olive/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-olive text-cream mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-charcoal">
                  Inquiry Dispatched to Executive Office
                </h4>
                <p className="text-xs text-charcoal/70 font-body max-w-md mx-auto">
                  Thank you, {formData.name}. Our Bangalore & Americas commercial liaisons will review your specifications and contact you at {formData.email} within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-display uppercase tracking-wider font-bold text-charcoal/70 block">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-xs font-body text-charcoal focus:outline-none focus:border-burnt"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-display uppercase tracking-wider font-bold text-charcoal/70 block">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. e.vance@fashionbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-xs font-body text-charcoal focus:outline-none focus:border-burnt"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-display uppercase tracking-wider font-bold text-charcoal/70 block">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Modern Athletics NY"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-xs font-body text-charcoal focus:outline-none focus:border-burnt"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-display uppercase tracking-wider font-bold text-charcoal/70 block">
                      Primary Material Line
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-xs font-body text-charcoal focus:outline-none focus:border-burnt"
                    >
                      <option>100% Combed Cotton Knits</option>
                      <option>Renaissance™ Micro-Polyester</option>
                      <option>Viscose Fluid Drape Blends</option>
                      <option>TC & PR Dual-Core Structured Wovens</option>
                      <option>Custom Technical Greige Development</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-display uppercase tracking-wider font-bold text-charcoal/70 block">
                    Garment Brief & Lead Time Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on garment silhouettes, target GSM, gauge specifications, or target market export corridors..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cream/40 border border-sand text-xs font-body text-charcoal focus:outline-none focus:border-burnt resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-burnt hover:bg-burnt-dark text-cream font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-burnt/25 hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Production Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
