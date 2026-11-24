"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
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
    <div className="pt-28 pb-24 bg-novus-black">
      {/* Header */}
      <section className="px-6 lg:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-novus-charcoal">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-novus-gold">
            Executive Inquiries & Partnerships
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-novus-ivory font-light leading-tight">
            Connect With NOVUS APPAREL
          </h1>
          <p className="text-base sm:text-lg text-novus-beige/80 font-light leading-relaxed">
            Whether inquiring about vertical fabric manufacturing, the Renaissance™ concept line, or international sourcing collaborations, our executive offices are at your disposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form + Global Office Details */}
      <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-novus-richblack border border-novus-charcoal p-8 lg:p-12">
            <h2 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-light mb-2">
              Send an Executive Enquiry
            </h2>
            <p className="text-xs text-novus-muted font-light mb-8">
              Inquiries are routed directly to executive leadership across Bangalore, Shanghai, and New Jersey.
            </p>

            {submitted ? (
              <div className="bg-novus-charcoal/40 border border-novus-gold/40 p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-novus-gold mx-auto" />
                <h3 className="font-serif text-2xl text-novus-ivory">Message Received</h3>
                <p className="text-xs text-novus-beige/80 font-light max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. An executive representative from Novus Apparel Limited will review your request and contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-novus-gold text-novus-black font-semibold text-xs uppercase tracking-widest"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-950/40 p-3 border border-red-800">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
                      placeholder="e.g. Julian Thorne"
                      className="w-full bg-novus-charcoal/50 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors"
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
                      placeholder="e.g. julian@luxurybrand.com"
                      className="w-full bg-novus-charcoal/50 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Thorne & Co. Apparel"
                      className="w-full bg-novus-charcoal/50 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                      Target Office Region
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full bg-novus-charcoal/80 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors"
                    >
                      <option value="India (Bangalore HQ)">India (Bangalore Global HQ)</option>
                      <option value="United States (New Jersey)">United States (Americas Liaison)</option>
                      <option value="China (Shanghai Center)">China (Technical R&D Center)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-novus-charcoal/80 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors"
                  >
                    <option value="Fabric & Material Development">Fabric & Greige Material Development</option>
                    <option value="Renaissance Line Collaboration">Renaissance™ Concept Collaboration</option>
                    <option value="Large-scale Manufacturing Contract">Large-Scale Apparel Manufacturing</option>
                    <option value="Supply Chain / Mill Partnership">Supply Chain or Mill Partnership</option>
                    <option value="Other Executive Inquiries">Other Executive Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-novus-muted block">
                    Project Details & Specifications *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include anticipated target quantities, fabric blends, target market, or timeline..."
                    className="w-full bg-novus-charcoal/50 border border-novus-charcoal px-4 py-3 text-xs text-novus-ivory focus:outline-none focus:border-novus-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Executive Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Verified Office Addresses & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-novus-gold">
                Verified Global Directory
              </span>
              <h3 className="font-serif text-2xl text-novus-ivory font-light">
                Official Company Contacts
              </h3>
            </div>

            <div className="space-y-6">
              {GLOBAL_OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-novus-richblack border border-novus-charcoal space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-novus-charcoal pb-2">
                    <h4 className="font-serif text-xl text-novus-ivory font-medium">
                      {office.country}
                    </h4>
                    <span className="text-[10px] font-mono text-novus-gold uppercase">
                      {office.city}
                    </span>
                  </div>

                  <div className="text-xs text-novus-muted font-light space-y-1">
                    {office.address.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-novus-charcoal/60 space-y-1 text-xs font-mono text-novus-beige-accent">
                    {office.phones && <p>Tel: {office.phones.join(" / ")}</p>}
                    {office.emails && <p>Email: {office.emails.join(" / ")}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Mailbox Reference */}
            <div className="p-6 bg-novus-charcoal/30 border border-novus-charcoal space-y-3 text-xs font-mono">
              <span className="text-novus-gold block uppercase text-[10px] tracking-widest">
                Primary Executive Mailboxes
              </span>
              <p className="text-novus-ivory flex items-center space-x-2">
                <Mail className="w-4 h-4 text-novus-gold" />
                <a href="mailto:chaand@novusapparels.com" className="hover:underline">
                  chaand@novusapparels.com
                </a>
              </p>
              <p className="text-novus-ivory flex items-center space-x-2">
                <Mail className="w-4 h-4 text-novus-gold" />
                <a href="mailto:vasanthkumar@novusapparels.com" className="hover:underline">
                  vasanthkumar@novusapparels.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
