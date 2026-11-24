"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EDITORIAL_LINKS = [
  { href: "/", label: "Home", num: "00" },
  { href: "/about", label: "Archive", num: "01" },
  { href: "/leadership", label: "Leadership", num: "02" },
  { href: "/products-innovation", label: "Renaissance™", num: "03" },
  { href: "/technology-partners", label: "Technology", num: "04" },
  { href: "/sustainability", label: "Clean Energy", num: "05" },
  { href: "/global-presence", label: "Corridors", num: "06" },
  { href: "/contact", label: "Contact", num: "07" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-atelier-obsidian/90 backdrop-blur-xl border-b border-white/10 shadow-atelier-card"
            : "py-6 bg-gradient-to-b from-atelier-obsidian/95 via-atelier-obsidian/40 to-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo: Bold Architectural Syne */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2">
              <span className="font-syne text-2xl lg:text-3xl font-black tracking-tighter text-white group-hover:text-atelier-champagne transition-colors">
                NOVUS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-atelier-gold animate-pulse" />
            </div>
            <span className="text-[9px] font-mono tracking-widest text-atelier-gold border-l border-white/20 pl-2 uppercase font-medium">
              Atelier
            </span>
          </Link>

          {/* Center: 2026 Floating Magnetic Glass Pill (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 px-6 py-2.5 rounded-full glass-pill">
            {EDITORIAL_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-mono tracking-wider transition-all duration-300 relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? "text-atelier-gold font-bold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className={`text-[9px] ${isActive ? "text-atelier-gold" : "text-gray-600"}`}>
                    {link.num}
                  </span>
                  <span className="uppercase">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="atelier-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-atelier-gold to-atelier-champagne shadow-gold-glow"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Scale Indicator & Atelier CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-atelier-emerald" />
              <span>GROUP $160M</span>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-syne font-bold uppercase tracking-wider text-black bg-gradient-to-r from-atelier-champagne via-atelier-gold to-atelier-gold hover:from-white hover:to-atelier-champagne transition-all duration-300 shadow-gold-glow"
            >
              <span>Consult Atelier</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-full border border-white/10 bg-white/5 text-white hover:text-atelier-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-atelier-gold" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen High-Fashion Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-atelier-obsidian/98 backdrop-blur-2xl xl:hidden flex flex-col justify-between pt-28 pb-10 px-8"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-atelier-gold uppercase">
                  ATELIER INDEX // 2026
                </span>
                <span className="text-[10px] font-mono text-gray-500">
                  EST. 1971 · USD $160M
                </span>
              </div>

              {EDITORIAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-baseline justify-between py-2 border-b border-white/5 transition-all duration-300 ${
                    pathname === link.href ? "text-atelier-gold" : "text-white hover:text-atelier-champagne"
                  }`}
                >
                  <span className="font-syne text-2xl font-bold tracking-tight uppercase">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{link.num}</span>
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-xs font-mono text-gray-400 space-y-1">
                <p className="text-white font-medium">Sri Dhanalakshmi Group Conglomerate</p>
                <p className="text-atelier-gold">Bangalore HQ · Shanghai R&D · New Jersey Americas</p>
              </div>
              <Link
                href="/contact"
                className="block w-full py-4 rounded-full text-center bg-gradient-to-r from-atelier-champagne to-atelier-gold text-black font-syne font-bold text-xs uppercase tracking-widest shadow-gold-glow"
              >
                Initiate Sourcing Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
