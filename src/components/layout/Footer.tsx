import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Wind, ShieldCheck, Globe2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-atelier-obsidian border-t border-white/10 text-gray-400 font-sans relative overflow-hidden">
      {/* Subtle atmospheric ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-atelier-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Architectural Statement */}
      <div className="border-b border-white/10 py-16 lg:py-20 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-atelier-gold uppercase tracking-widest">
              <span>Sri Dhanalakshmi Group · Est. 1971 · USD $160M</span>
            </div>
            <h3 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[0.98]">
              Ready to engineer your next <br />
              <span className="font-italiana italic text-atelier-champagne lowercase font-normal text-4xl sm:text-5xl lg:text-6xl">
                high-textile
              </span>{" "}
              collection?
            </h3>
            <p className="text-sm text-gray-400 max-w-xl font-light">
              We bridge raw fiber science, vertical spinning, air-jet weaving, and cross-border manufacturing agility to create benchmark comfort for global fashion brands.
            </p>
          </div>

          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-atelier-champagne via-atelier-gold to-atelier-gold hover:from-white hover:to-atelier-champagne text-black text-xs font-syne font-bold uppercase tracking-wider transition-all duration-300 shadow-gold-glow"
          >
            <span>Consult Executive Atelier</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="inline-block group">
            <div className="flex items-center gap-2">
              <span className="font-syne text-3xl font-black tracking-tighter text-white group-hover:text-atelier-champagne transition-colors">
                NOVUS
              </span>
              <span className="w-2 h-2 rounded-full bg-atelier-gold" />
            </div>
            <span className="block text-[9px] font-mono tracking-widest text-atelier-gold uppercase font-medium mt-0.5">
              Apparel Limited // Manufacturing Atelier
            </span>
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            Extensive R&D and global manufacturing company providing vertical end-to-end solutions from technical polymer research, spinning, and weaving to finished lifestyle and sporting apparel.
          </p>
          <div className="space-y-2 pt-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-atelier-emerald">
              <Wind className="w-3.5 h-3.5" />
              <span>100% Wind-Assisted Clean Energy Grid</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-atelier-gold" />
              <span>Corporate Motto: <strong className="text-white ml-1 font-syne">MAKE A DIFFERENCE.</strong></span>
            </div>
          </div>
        </div>

        {/* Directory Navigation */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[11px] font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Archive Index
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li>
              <Link href="/about" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">01</span>
                <span>Corporate Archive</span>
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">02</span>
                <span>Leadership</span>
              </Link>
            </li>
            <li>
              <Link href="/products-innovation" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">03</span>
                <span>Renaissance™ Line</span>
              </Link>
            </li>
            <li>
              <Link href="/technology-partners" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">04</span>
                <span>Technology</span>
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">05</span>
                <span>Clean Energy</span>
              </Link>
            </li>
            <li>
              <Link href="/global-presence" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">06</span>
                <span>Global Corridors</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-atelier-gold transition-colors flex items-center gap-2">
                <span className="text-gray-600 text-[10px]">07</span>
                <span>Executive Dialogue</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Strategic Hubs */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Strategic Centers
          </h4>
          <div className="space-y-4 text-xs font-light">
            <div>
              <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                <MapPin className="w-3.5 h-3.5 text-atelier-gold" />
                <span>India // Global HQ</span>
              </p>
              <p className="text-gray-400 mt-0.5">BTM Layout 1st Stage, Bangalore - 560068</p>
              <p className="text-atelier-champagne font-mono mt-0.5 text-[11px]">+91 99808 12727</p>
            </div>
            <div>
              <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                <MapPin className="w-3.5 h-3.5 text-atelier-gold" />
                <span>Americas // Liaison Hub</span>
              </p>
              <p className="text-gray-400 mt-0.5">North Brunswick, New Jersey - 08902, USA</p>
              <p className="text-atelier-champagne font-mono mt-0.5 text-[11px]">+1 (732) 825-9000</p>
            </div>
            <div>
              <p className="text-white font-medium flex items-center gap-1.5 font-syne">
                <MapPin className="w-3.5 h-3.5 text-atelier-gold" />
                <span>China // Material R&D</span>
              </p>
              <p className="text-gray-400 mt-0.5">Newwell Textiles, Pudong, Shanghai - 201206</p>
              <p className="text-atelier-champagne font-mono mt-0.5 text-[11px]">+86-021-68970132</p>
            </div>
          </div>
        </div>

        {/* Direct Executive Mailboxes */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2">
            Executive Channels
          </h4>
          <div className="space-y-2.5 text-xs font-mono">
            <a
              href="mailto:chaand@novusapparels.com"
              className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-atelier-gold text-atelier-linen hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-atelier-gold shrink-0" />
              <span className="truncate">chaand@novusapparels.com</span>
            </a>
            <a
              href="mailto:vasanthkumar@novusapparels.com"
              className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-atelier-gold text-atelier-linen hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-atelier-gold shrink-0" />
              <span className="truncate">vasanthkumar@novusapparels.com</span>
            </a>
          </div>

          <div className="p-3 bg-atelier-surface/80 border border-white/10 rounded-xl mt-4">
            <p className="text-[11px] font-mono text-atelier-emerald flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Seven Global Sourcing Nodes</span>
            </p>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">
              India · USA · China · Vietnam · Bangladesh · Jordan · Ethiopia
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Legal Hairline Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-gray-500 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Novus Apparel Limited. Member of Sri Dhanalakshmi Group (Est. 1971, USD $160M).</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Engineering Excellence. Creating Comfort.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
