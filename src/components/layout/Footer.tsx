import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-novus-richblack border-t border-novus-charcoal/80 text-novus-ivory/80 font-sans">
      {/* Top Banner Statement */}
      <div className="border-b border-novus-charcoal/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-novus-beige-accent block mb-2">
              Corporate Philosophy
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl text-novus-ivory font-light">
              Engineering Excellence. Creating Comfort.
            </h3>
            <p className="text-sm text-novus-beige-dark/80 mt-2 max-w-xl font-light">
              A proud entity of the Sri Dhanalakshmi Group (Est. 1971, USD $160M Group Turnover). Delivering end-to-end textile and apparel precision across continents.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center space-x-3 px-7 py-3.5 bg-novus-beige hover:bg-novus-gold text-novus-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Offices */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl tracking-[0.25em] font-medium text-novus-ivory">
              NOVUS
            </span>
            <span className="block text-[10px] tracking-[0.4em] uppercase text-novus-beige-accent font-sans font-light -mt-1">
              Apparel Limited
            </span>
          </Link>
          <p className="text-xs text-novus-muted leading-relaxed font-light">
            Extensive R&D and global marketing company providing vertical end-to-end solutions from technical fabric research, spinning, and weaving to finished lifestyle and sporting apparel.
          </p>
          <div className="pt-2 text-xs font-mono text-novus-beige-accent space-y-1">
            <p className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>100% Wind-Assisted Clean Energy</span>
            </p>
            <p className="text-novus-muted">Guiding Principle: <strong className="text-novus-ivory">MAKE A DIFFERENCE.</strong></p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold">
            Directory
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
              <Link href="/technology-partners" className="hover:text-novus-gold transition-colors">
                Technology & Partners
              </Link>
            </li>
            <li>
              <Link href="/products-innovation" className="hover:text-novus-gold transition-colors">
                Products & Renaissance
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
                Global Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Global Locations Snapshot */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold">
            Primary Hubs
          </h4>
          <div className="space-y-4 text-xs font-light text-novus-muted">
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>India (HQ)</span>
              </p>
              <p className="mt-0.5">BTM Layout 1st Stage, Bangalore 560068</p>
              <p className="text-novus-beige-accent font-mono mt-0.5">+91 99808 12727</p>
            </div>
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>United States</span>
              </p>
              <p className="mt-0.5">North Brunswick, New Jersey 08902</p>
            </div>
            <div>
              <p className="text-novus-ivory font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-novus-gold" />
                <span>China</span>
              </p>
              <p className="mt-0.5">Pudong New District, Shanghai 201206</p>
              <p className="text-novus-beige-accent font-mono mt-0.5">+86-021-68970132</p>
            </div>
          </div>
        </div>

        {/* Official Channels */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-novus-ivory font-semibold">
            Executive Mailboxes
          </h4>
          <div className="space-y-3 text-xs font-mono">
            <a
              href="mailto:chaand@novusapparels.com"
              className="flex items-center space-x-2 text-novus-beige hover:text-novus-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-novus-gold" />
              <span>chaand@novusapparels.com</span>
            </a>
            <a
              href="mailto:vasanthkumar@novusapparels.com"
              className="flex items-center space-x-2 text-novus-beige hover:text-novus-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-novus-gold" />
              <span>vasanthkumar@novusapparels.com</span>
            </a>
          </div>
          <div className="pt-4 border-t border-novus-charcoal">
            <p className="text-[11px] uppercase tracking-wider text-novus-muted font-mono mb-2">
              Manufacturing Corridors
            </p>
            <p className="text-xs text-novus-ivory/70 leading-relaxed font-light">
              India • China • Vietnam • Jordan • Bangladesh • Ethiopia • USA
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-novus-charcoal/50 py-6 text-[11px] font-mono text-novus-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NOVUS APPAREL LIMITED. All rights reserved.</p>
          <p className="text-novus-muted/70">
            Affiliated with Sri Dhanalakshmi Group • Established 1971
          </p>
        </div>
      </div>
    </footer>
  );
}
