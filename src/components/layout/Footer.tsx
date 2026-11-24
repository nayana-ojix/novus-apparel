import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Wind, ShieldCheck, Globe2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-novus-navy-deepest border-t border-novus-navy-border/80 text-novus-ivory/80 font-sans relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-novus-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-novus-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Statement */}
      <div className="border-b border-novus-navy-border/70 py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-novus-navy-surface border border-novus-navy-border text-[10px] uppercase tracking-[0.25em] font-mono text-novus-gold mb-3">
              <span>Engineering Excellence · Creating Comfort</span>
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-novus-ivory font-light leading-tight">
              Ready to elevate your apparel & fabric pipeline?
            </h3>
            <p className="text-sm text-novus-ivory-warm/80 mt-2 max-w-2xl font-light">
              Backed by the legacy of the Sri Dhanalakshmi Group (est. 1971, USD $160M Group Turnover), Novus delivers vertical manufacturing, technical fabric science, and cross-border agility.
            </p>
          </div>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-novus-champagne to-novus-gold hover:from-white hover:to-novus-champagne text-novus-navy-deepest text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-gold-glow"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Offices */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-block group">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-3xl tracking-[0.22em] font-semibold text-novus-ivory group-hover:text-gold-gradient transition-colors">
                NOVUS
              </span>
              <span className="w-2 h-2 rounded-full bg-novus-gold" />
            </div>
            <span className="block text-[10px] tracking-[0.42em] uppercase text-novus-gold-champagne font-sans font-light -mt-1">
              Apparel Limited
            </span>
          </Link>
          <p className="text-xs text-novus-muted leading-relaxed font-light">
            Extensive R&D and global marketing company providing vertical end-to-end solutions from technical fabric research, spinning, and weaving to finished lifestyle and sporting apparel.
          </p>
          <div className="pt-2 text-xs font-mono space-y-2">
            <div className="flex items-center space-x-2 text-novus-emerald-light">
              <Wind className="w-3.5 h-3.5" />
              <span>100% Wind-Assisted Clean Energy</span>
            </div>
            <div className="flex items-center space-x-2 text-novus-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-novus-gold" />
              <span>Corporate Motto: <strong className="text-novus-ivory ml-1">MAKE A DIFFERENCE.</strong></span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold border-b border-novus-navy-border pb-2">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li>
              <Link href="/about" className="hover:text-novus-gold transition-colors">
                About Company
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-novus-gold transition-colors">
                Executive Leadership
              </Link>
            </li>
            <li>
              <Link href="/products-innovation" className="hover:text-novus-gold transition-colors">
                Products & Renaissance™
              </Link>
            </li>
            <li>
              <Link href="/technology-partners" className="hover:text-novus-gold transition-colors">
                Technology & Partners
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-novus-gold transition-colors">
                Sustainability & Energy
              </Link>
            </li>
            <li>
              <Link href="/global-presence" className="hover:text-novus-gold transition-colors">
                Global Network
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-novus-gold transition-colors">
                Contact & Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Global Hubs */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold border-b border-novus-navy-border pb-2">
            Strategic Hubs
          </h4>
          <div className="space-y-4 text-xs font-light text-novus-muted">
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>India (Global HQ)</span>
              </p>
              <p className="mt-0.5">BTM Layout 1st Stage, Bangalore - 560068</p>
              <p className="text-novus-gold-champagne font-mono mt-0.5">+91 99808 12727</p>
            </div>
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>Americas Liaison</span>
              </p>
              <p className="mt-0.5">North Brunswick, New Jersey - 08902, USA</p>
              <p className="text-novus-gold-champagne font-mono mt-0.5">+1 (732) 825-9000</p>
            </div>
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>China Material R&D</span>
              </p>
              <p className="mt-0.5">Newwell Textiles, Pudong, Shanghai - 201206</p>
              <p className="text-novus-gold-champagne font-mono mt-0.5">+86-021-68970132</p>
            </div>
          </div>
        </div>

        {/* Official Channels */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold border-b border-novus-navy-border pb-2">
            Executive Mailboxes
          </h4>
          <div className="space-y-3 text-xs font-mono">
            <a
              href="mailto:chaand@novusapparels.com"
              className="flex items-center space-x-2 text-novus-ivory-warm hover:text-novus-gold transition-colors p-2.5 rounded-none bg-novus-navy-dark border border-novus-navy-border/60"
            >
              <Mail className="w-3.5 h-3.5 text-novus-gold shrink-0" />
              <span className="truncate">chaand@novusapparels.com</span>
            </a>
            <a
              href="mailto:vasanthkumar@novusapparels.com"
              className="flex items-center space-x-2 text-novus-ivory-warm hover:text-novus-gold transition-colors p-2.5 rounded-none bg-novus-navy-dark border border-novus-navy-border/60"
            >
              <Mail className="w-3.5 h-3.5 text-novus-gold shrink-0" />
              <span className="truncate">vasanthkumar@novusapparels.com</span>
            </a>
          </div>

          <div className="pt-2">
            <div className="p-3 bg-novus-teal-deep/50 border border-novus-teal/30">
              <p className="text-[11px] font-mono text-novus-teal-light flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Sourcing Corridors</span>
              </p>
              <p className="text-[10px] text-novus-muted mt-1">
                India · USA · China · Vietnam · Bangladesh · Jordan · Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-novus-navy-border/70 py-6 text-xs text-novus-muted relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Novus Apparel Limited. Member of Sri Dhanalakshmi Group (Est. 1971).</p>
          <div className="flex items-center space-x-6 text-novus-ivory/60">
            <span>Engineering Excellence. Creating Comfort.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
