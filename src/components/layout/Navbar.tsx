"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/technology-partners", label: "Technology & Partners" },
  { href: "/products-innovation", label: "Products & Innovation" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/global-presence", label: "Global Presence" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
            ? "bg-novus-black/90 backdrop-blur-md py-4 border-b border-novus-charcoal/80 shadow-2xl"
            : "bg-gradient-to-b from-novus-black/80 via-novus-black/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.25em] font-medium text-novus-ivory group-hover:text-novus-gold transition-colors duration-300">
              NOVUS
            </span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-novus-beige-accent font-sans font-light -mt-1 group-hover:text-novus-ivory transition-colors duration-300">
              Apparel Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.16em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-novus-gold font-semibold"
                      : "text-novus-ivory/80 hover:text-novus-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-novus-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-1.5 text-novus-beige-dark/70 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-novus-gold animate-pulse" />
              <span>IN / US / CN</span>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center space-x-2 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-novus-black bg-novus-beige hover:bg-novus-gold transition-all duration-300 rounded-none shadow-sm"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-novus-ivory hover:text-novus-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-novus-black/95 backdrop-blur-xl transition-all duration-500 xl:hidden flex flex-col justify-between pt-28 pb-10 px-8 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-novus-beige-accent/80 border-b border-novus-charcoal pb-2">
            Navigation Menu
          </p>
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xl font-serif tracking-[0.08em] transition-all duration-300 ${
                pathname === link.href ? "text-novus-gold font-medium pl-3 border-l-2 border-novus-gold" : "text-novus-ivory/80 hover:text-novus-ivory"
              }`}
            >
              <span className="font-mono text-xs text-novus-muted mr-3">0{idx + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pt-8 border-t border-novus-charcoal flex flex-col space-y-4">
          <div className="text-xs font-mono text-novus-muted">
            <p>Member of Sri Dhanalakshmi Group (Est. 1971)</p>
            <p className="text-novus-gold">HQ: Bangalore, Karnataka, India</p>
          </div>
          <Link
            href="/contact"
            className="w-full text-center py-3 bg-novus-gold text-novus-black font-semibold text-xs uppercase tracking-[0.2em]"
          >
            Initiate Contact
          </Link>
        </div>
      </div>
    </>
  );
}
