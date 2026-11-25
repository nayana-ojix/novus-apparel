"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import KineticText from "@/components/motion/KineticText";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Shirts",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Pill */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-ultra text-burnt font-bold">
            SECTION 09 // BUSINESS ENQUIRY
          </span>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-charcoal leading-[0.98]">
              <KineticText type="words" delay={0.1} stagger={0.06}>
                START THE CONVERSATION.
              </KineticText>{" "}
              <br />
              <span className="text-olive">
                <KineticText type="words" delay={0.35} stagger={0.06}>
                  BRING POSSIBILITIES TO LIFE.
                </KineticText>
              </span>
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal/70 font-light leading-relaxed max-w-3xl">
              Connect directly with our leadership and technical merchandising teams. Whether you require custom material formulations, pattern engineering, or large-scale partner manufacturing, we are ready to collaborate.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <TiltCard tiltDegree={6}>
              <div className="p-6 sm:p-8 rounded-3xl bg-sand/40 border border-sand shadow-sm space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/50 font-bold block">
                  VERIFIED HEADQUARTERS
                </span>
                <p className="font-display text-sm font-bold text-charcoal">
                  Bangalore, Karnataka, India
                </p>
                <p className="font-mono text-xs text-olive font-semibold">
                  +91 99808 12727 &bull; chaand@novusapparels.com
                </p>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Business Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-sand/35 border border-sand p-6 sm:p-10 lg:p-12 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-burnt font-bold block mb-2">
              EXECUTIVE ENQUIRY FORM
            </span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-charcoal mb-6">
              Partner with Novus Apparel
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-cream border border-olive/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-olive mx-auto" />
                <h4 className="font-display text-xl font-bold text-charcoal uppercase">
                  Enquiry Registered
                </h4>
                <p className="font-body text-sm text-charcoal/70 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out. A senior executive from our Bangalore or Americas office will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-charcoal text-cream font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-olive"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold block">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-olive"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold block">
                      Brand / Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Lifestyle Brands"
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-olive"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold block">
                      Primary Interest Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-sand text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-olive"
                    >
                      <option value="Shirts">Shirts (Woven & Knitted Shirting)</option>
                      <option value="Bottoms">Bottoms (Engineered Trousers & Pants)</option>
                      <option value="Activewear">Activewear & Performance Goods</option>
                      <option value="Fabrics">Fabric & Greige R&D Solutions</option>
                      <option value="Manufacturing">Manufacturing Network Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold block">
                    Project Scope & Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements, fabric preferences, or projected volumes..."
                    className="w-full px-4 py-3 rounded-xl bg-cream border border-sand text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-olive resize-none"
                  />
                </div>

                <MagneticButton dataCursor="SUBMIT" className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-charcoal hover:bg-olive text-cream font-display text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Business Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-burnt-light transition-transform group-hover:translate-x-1" />
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>

          {/* Right Column: Verified Office Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
              OFFICIAL CORPORATE NODES
            </span>

            {/* India Node */}
            <TiltCard tiltDegree={5}>
              <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-burnt uppercase">
                    INDIA // GLOBAL HEADQUARTERS
                  </span>
                  <span className="text-[10px] font-mono text-charcoal/50">HQ</span>
                </div>
                <p className="font-body text-xs text-charcoal leading-snug">
                  Novus Apparel Limited<br />
                  #23, Siva Arcade (3rd Floor), 29th Main, 1st Cross, 1st Stage, BTM Layout<br />
                  Bangalore – 560068, Karnataka, India
                </p>
                <div className="pt-2 border-t border-sand flex flex-wrap gap-4 text-xs font-mono">
                  <a
                    href="tel:+919980812727"
                    className="text-charcoal hover:text-burnt font-semibold"
                  >
                    +91 99808 12727
                  </a>
                  <a
                    href="mailto:chaand@novusapparels.com"
                    className="text-olive hover:text-burnt"
                  >
                    chaand@novusapparels.com
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* USA Node */}
            <TiltCard tiltDegree={5}>
              <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-burnt uppercase">
                    UNITED STATES // CLIENT RELATIONS
                  </span>
                  <span className="text-[10px] font-mono text-charcoal/50">AMERICAS</span>
                </div>
                <p className="font-body text-xs text-charcoal leading-snug">
                  Novus Apparel Limited<br />
                  Suite #1, 825 Georges Rd<br />
                  North Brunswick, NJ – 08902, United States
                </p>
                <div className="pt-2 border-t border-sand text-xs font-mono">
                  <a
                    href="mailto:chaand@novusapparels.com"
                    className="text-olive hover:text-burnt"
                  >
                    chaand@novusapparels.com
                  </a>
                </div>
              </div>
            </TiltCard>

            {/* China Node */}
            <TiltCard tiltDegree={5}>
              <div className="p-6 rounded-3xl bg-sand/30 border border-sand/80 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-burnt uppercase">
                    CHINA // TECHNICAL SOURCING & R&D
                  </span>
                  <span className="text-[10px] font-mono text-charcoal/50">EAST ASIA</span>
                </div>
                <p className="font-body text-xs text-charcoal leading-snug">
                  Novus Apparel Limited / Newwell Textiles<br />
                  Room #1109, Yuzhou Plaza #299, Jingang Road, Pudong New District<br />
                  Shanghai – 201206, China
                </p>
                <div className="pt-2 border-t border-sand flex flex-wrap gap-4 text-xs font-mono">
                  <a
                    href="tel:+8602168970132"
                    className="text-charcoal hover:text-burnt font-semibold"
                  >
                    +86-021-68970132
                  </a>
                  <a
                    href="mailto:chaand@novusapparels.com"
                    className="text-olive hover:text-burnt"
                  >
                    chaand@novusapparels.com
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
