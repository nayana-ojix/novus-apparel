"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/products-innovation", label: "Products & Innovation" },
  { href: "/technology-partners", label: "Technology & Partners" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/global-presence", label: "Global Network" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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
            ? "bg-novus-navy-deepest/90 backdrop-blur-xl py-3.5 border-b border-novus-navy-border/70 shadow-card-luxury"
            : "bg-gradient-to-b from-novus-navy-deepest/90 via-novus-navy-deepest/40 to-transparent py-5"
        }`}
      >
        {/* Subtle accent hairline */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-novus-gold/50 to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.22em] font-semibold text-novus-ivory group-hover:text-gold-gradient transition-colors duration-300">
                NOVUS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-novus-gold animate-pulse" />
            </div>
            <span className="text-[9px] tracking-[0.42em] uppercase text-novus-gold-champagne font-sans font-light -mt-0.5 group-hover:text-novus-ivory transition-colors duration-300">
              Apparel Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.16em] font-medium transition-all duration-300 relative py-1.5 ${
                    isActive
                      ? "text-novus-gold font-semibold"
                      : "text-novus-ivory/80 hover:text-novus-champagne"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-novus-gold to-novus-champagne rounded-full shadow-gold-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-none border border-novus-navy-border/60 bg-novus-navy-dark/60 text-novus-muted text-[11px] font-mono">
              <Globe className="w-3.5 h-3.5 text-novus-teal-vibrant" />
              <span className="text-novus-ivory/90">IN · US · CN</span>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center space-x-2.5 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-novus-navy-deepest bg-gradient-to-r from-novus-champagne to-novus-gold hover:from-white hover:to-novus-champagne transition-all duration-300 shadow-gold-glow"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 text-novus-ivory hover:text-novus-gold transition-colors focus:outline-none border border-novus-navy-border/80 bg-novus-navy-dark/80"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-novus-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-novus-navy-deepest/98 backdrop-blur-2xl xl:hidden flex flex-col justify-between pt-28 pb-10 px-8 border-b border-novus-gold/20"
          >
            <div className="flex flex-col space-y-5">
              <div className="flex items-center justify-between border-b border-novus-navy-border pb-3">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-novus-gold flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Navigation Menu
                </span>
                <span className="text-[10px] font-mono text-novus-muted">
                  Sri Dhanalakshmi Group
                </span>
              </div>
              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-serif tracking-[0.08em] transition-all duration-300 py-1 ${
                    pathname === link.href
                      ? "text-novus-gold font-medium pl-3 border-l-2 border-novus-gold"
                      : "text-novus-ivory/80 hover:text-novus-champagne"
                  }`}
                >
                  <span className="font-mono text-xs text-novus-muted mr-3">0{idx + 1}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-novus-navy-border flex flex-col space-y-4">
              <div className="text-xs font-mono text-novus-muted space-y-1">
                <p className="text-novus-ivory/90 font-medium">Sri Dhanalakshmi Group (Est. 1971 • USD $160M)</p>
                <p className="text-novus-gold">HQ: Bangalore, India · Americas: NJ, USA · R&D: Shanghai, China</p>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3.5 bg-gradient-to-r from-novus-gold to-novus-champagne text-novus-navy-deepest font-semibold text-xs uppercase tracking-[0.2em] shadow-gold-glow"
              >
                Initiate Executive Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
