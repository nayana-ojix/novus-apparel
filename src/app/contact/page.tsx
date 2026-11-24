"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Phone, MapPin, Globe2, Sparkles } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
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
    <div className="pt-28 pb-24 bg-novus-navy-deepest text-novus-ivory overflow-hidden">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-navy-border/60">
        <div className="max-w-3xl space-y-4">
          <FadeIn direction="down">
            <Badge variant="gold">Executive Inquiries & Institutional Sourcing</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
              Connect With <br />
              <span className="italic font-normal text-gold-gradient">
                NOVUS APPAREL.
              </span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-novus-ivory-warm/85 font-light leading-relaxed">
              Whether inquiring about vertical fabric manufacturing, the Renaissance™ concept line, or international sourcing collaborations, our executive offices are at your disposal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Grid: Contact Form + Global Office Details */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-novus-navy-dark border border-novus-navy-border p-8 sm:p-12 shadow-card-luxury">
            <h2 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-light mb-2">
              Send an Executive Enquiry
            </h2>
            <p className="text-xs text-novus-muted font-light mb-8">
              Inquiries are routed directly to executive leadership across Bangalore, Shanghai, and New Jersey.
            </p>

            {submitted ? (
              <div className="bg-novus-navy-surface border border-novus-gold/50 p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-novus-gold mx-auto" />
                <h3 className="font-serif text-2xl text-novus-ivory">Message Received</h3>
                <p className="text-xs text-novus-ivory-warm/80 font-light max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. An executive representative from Novus Apparel Limited will review your request and contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-gradient-to-r from-novus-champagne to-novus-gold text-novus-navy-deepest font-semibold text-xs uppercase tracking-widest shadow-gold-glow"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs placeholder:text-novus-muted/50 focus:outline-none focus:border-novus-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@fashionbrand.com"
                      className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs placeholder:text-novus-muted/50 focus:outline-none focus:border-novus-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Fashion Group"
                      className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs placeholder:text-novus-muted/50 focus:outline-none focus:border-novus-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Target Regional Office
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs focus:outline-none focus:border-novus-gold transition-colors"
                    >
                      <option value="India (Bangalore HQ)">India (Bangalore HQ)</option>
                      <option value="Americas (North Brunswick, NJ)">Americas (North Brunswick, NJ)</option>
                      <option value="China (Shanghai Pudong R&D)">China (Shanghai Pudong R&D)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                    Inquiry Scope
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs focus:outline-none focus:border-novus-gold transition-colors"
                  >
                    <option value="Fabric & Material Development">Fabric & Material Development</option>
                    <option value="Renaissance™ Concept Line">Renaissance™ Concept Line</option>
                    <option value="Greige & Bottom-Weights Sourcing">Greige & Bottom-Weights Sourcing</option>
                    <option value="Apparel Manufacturing & Garmenting">Apparel Manufacturing & Garmenting</option>
                    <option value="Other Institutional Inquiries">Other Institutional Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify fabric specifications, target volume, delivery timeline, or program requirements..."
                    className="w-full px-4 py-3 bg-novus-navy-surface border border-novus-navy-border text-novus-ivory text-xs placeholder:text-novus-muted/50 focus:outline-none focus:border-novus-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-novus-champagne via-novus-gold to-novus-gold-muted hover:from-white hover:to-novus-champagne text-novus-navy-deepest font-semibold text-xs uppercase tracking-[0.22em] transition-all flex items-center justify-center space-x-2 shadow-gold-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-novus-navy-dark border border-novus-navy-border space-y-4 shadow-card-luxury">
              <Badge variant="gold">Executive Mailboxes</Badge>
              <h3 className="font-serif text-2xl text-novus-ivory font-light mt-1">
                Direct Leadership Channels
              </h3>
              <p className="text-xs text-novus-muted font-light leading-relaxed">
                For urgent institutional requests, contact managing directors directly via corporate email:
              </p>
              <div className="space-y-3 pt-2 text-xs font-mono">
                <a
                  href="mailto:chaand@novusapparels.com"
                  className="flex items-center space-x-2.5 p-3 bg-novus-navy-surface border border-novus-navy-border hover:border-novus-gold text-novus-champagne transition-colors"
                >
                  <Mail className="w-4 h-4 text-novus-gold shrink-0" />
                  <span className="truncate">chaand@novusapparels.com</span>
                </a>
                <a
                  href="mailto:vasanthkumar@novusapparels.com"
                  className="flex items-center space-x-2.5 p-3 bg-novus-navy-surface border border-novus-navy-border hover:border-novus-gold text-novus-champagne transition-colors"
                >
                  <Mail className="w-4 h-4 text-novus-gold shrink-0" />
                  <span className="truncate">vasanthkumar@novusapparels.com</span>
                </a>
              </div>
            </div>

            {/* Hub Addresses */}
            <div className="p-8 bg-novus-navy-dark border border-novus-navy-border space-y-6 shadow-card-luxury">
              <Badge variant="teal">Headquarters & Liaisons</Badge>
              <div className="space-y-5 text-xs font-light text-novus-muted">
                <div>
                  <p className="text-novus-ivory font-medium flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-novus-gold" />
                    <span>Bangalore, India (Global HQ)</span>
                  </p>
                  <p className="mt-1 pl-5">#23, Siva Arcade (3rd Floor), 29th Main, 1st Cross, BTM Layout 1st Stage, Bangalore - 560068</p>
                  <p className="text-novus-champagne font-mono mt-1 pl-5">+91 99808 12727</p>
                </div>
                <div>
                  <p className="text-novus-ivory font-medium flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-novus-gold" />
                    <span>North Brunswick, NJ (Americas Office)</span>
                  </p>
                  <p className="mt-1 pl-5">Suite #1, 825 Georges Rd, North Brunswick, NJ - 08902, USA</p>
                  <p className="text-novus-champagne font-mono mt-1 pl-5">+1 (732) 825-9000</p>
                </div>
                <div>
                  <p className="text-novus-ivory font-medium flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-novus-gold" />
                    <span>Shanghai, China (Fabric R&D / Newwell)</span>
                  </p>
                  <p className="mt-1 pl-5">Room #1109, Yuzhou Plaza #299, Jingang Road, Pudong New District, Shanghai - 201206</p>
                  <p className="text-novus-champagne font-mono mt-1 pl-5">+86-021-68970132</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
