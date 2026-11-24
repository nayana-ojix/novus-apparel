"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Phone, MapPin, Globe2, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { GLOBAL_OFFICES } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    region: "India (Bangalore HQ)",
    inquiryType: "Fabric & Material Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please complete all required fields (Name, Email, Message).");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-atelier-obsidian text-atelier-linen overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto border-b border-white/10">
        <div className="max-w-4xl space-y-4">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-atelier-gold">
              <span>07 // EXECUTIVE ENQUIRY & SOURCING DIALOGUE</span>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
              CONNECT WITH <br />
              <span className="font-italiana italic text-atelier-champagne font-normal lowercase tracking-normal text-5xl sm:text-7xl lg:text-8xl">
                novus apparel
              </span>{" "}
              ATELIER.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl pt-2">
              Whether inquiring about vertical fabric manufacturing, the Renaissance™ concept line, or international sourcing collaborations, our executive offices are at your disposal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Grid: Contact Form + Global Office Details */}
      <section className="px-6 lg:px-12 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-3xl bg-atelier-navy border border-white/10 p-8 sm:p-12 shadow-atelier-card">
            <h2 className="font-syne text-2xl lg:text-3xl font-black text-white uppercase mb-2">
              Send an Executive Enquiry
            </h2>
            <p className="text-xs text-gray-400 font-light mb-8">
              Inquiries are routed directly to executive leadership across Bangalore, Shanghai, and New Jersey.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/5 border border-atelier-gold/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-atelier-gold mx-auto" />
                <h3 className="font-syne text-2xl font-bold text-white uppercase">Message Received</h3>
                <p className="text-xs text-gray-300 font-light max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. An executive representative from Novus Apparel Limited will review your request and contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-atelier-champagne to-atelier-gold text-black font-syne font-bold text-xs uppercase tracking-widest shadow-gold-glow"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-atelier-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@fashionbrand.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-atelier-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Fashion Group"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-atelier-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                      Target Regional Office
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-atelier-gold transition-colors"
                    >
                      <option value="India (Bangalore HQ)">India (Bangalore HQ)</option>
                      <option value="Americas (North Brunswick, NJ)">Americas (North Brunswick, NJ)</option>
                      <option value="China (Shanghai Pudong R&D)">China (Shanghai Pudong R&D)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                    Inquiry Scope
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-atelier-gold transition-colors"
                  >
                    <option value="Fabric & Material Development">Fabric & Material Development</option>
                    <option value="Renaissance™ Concept Line">Renaissance™ Concept Line</option>
                    <option value="Greige & Bottom-Weights Sourcing">Greige & Bottom-Weights Sourcing</option>
                    <option value="Apparel Manufacturing & Garmenting">Apparel Manufacturing & Garmenting</option>
                    <option value="Other Institutional Inquiries">Other Institutional Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-gray-400 block">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify fabric specifications, target volume, delivery timeline, or program requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-atelier-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-atelier-champagne via-atelier-gold to-atelier-gold hover:from-white hover:to-atelier-champagne text-black font-syne font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-atelier-navy border border-white/10 space-y-4 shadow-atelier-card">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-gold block">
                Executive Channels
              </span>
              <h3 className="font-syne text-2xl font-bold text-white uppercase">
                Direct Leadership Mailboxes
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                For urgent institutional requests, contact managing directors directly via corporate email:
              </p>
              <div className="space-y-3 pt-2 text-xs font-mono">
                <a
                  href="mailto:chaand@novusapparels.com"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-atelier-gold text-atelier-champagne transition-colors"
                >
                  <Mail className="w-4 h-4 text-atelier-gold shrink-0" />
                  <span className="truncate">chaand@novusapparels.com</span>
                </a>
                <a
                  href="mailto:vasanthkumar@novusapparels.com"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-atelier-gold text-atelier-champagne transition-colors"
                >
                  <Mail className="w-4 h-4 text-atelier-gold shrink-0" />
                  <span className="truncate">vasanthkumar@novusapparels.com</span>
                </a>
              </div>
            </div>

            {/* Hub Addresses */}
            <div className="p-8 rounded-3xl bg-atelier-navy border border-white/10 space-y-6 shadow-atelier-card">
              <span className="text-[10px] font-mono uppercase tracking-widest text-atelier-emerald block">
                Headquarters & Centers
              </span>
              <div className="space-y-5 text-xs font-light text-gray-300">
                <div>
                  <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                    <MapPin className="w-4 h-4 text-atelier-gold" />
                    <span>Bangalore, India (Global HQ)</span>
                  </p>
                  <p className="mt-1 pl-5 text-gray-400">#23, Siva Arcade (3rd Floor), 29th Main, 1st Cross, BTM Layout 1st Stage, Bangalore - 560068</p>
                  <p className="text-atelier-champagne font-mono mt-1 pl-5">+91 99808 12727</p>
                </div>
                <div>
                  <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                    <MapPin className="w-4 h-4 text-atelier-gold" />
                    <span>North Brunswick, NJ (Americas Office)</span>
                  </p>
                  <p className="mt-1 pl-5 text-gray-400">Suite #1, 825 Georges Rd, North Brunswick, NJ - 08902, USA</p>
                  <p className="text-atelier-champagne font-mono mt-1 pl-5">+1 (732) 825-9000</p>
                </div>
                <div>
                  <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                    <MapPin className="w-4 h-4 text-atelier-gold" />
                    <span>Shanghai, China (Fabric R&D / Newwell)</span>
                  </p>
                  <p className="mt-1 pl-5 text-gray-400">Room #1109, Yuzhou Plaza #299, Jingang Road, Pudong New District, Shanghai - 201206</p>
                  <p className="text-atelier-champagne font-mono mt-1 pl-5">+86-021-68970132</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
