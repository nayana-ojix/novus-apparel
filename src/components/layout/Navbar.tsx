"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import MagneticButton from "@/components/motion/MagneticButton";

const NAV_LINKS = [
  { label: "Story", href: "/#story" },
  { label: "Solutions", href: "/#capabilities" },
  { label: "Thread", href: "/#thread-journey" },
  { label: "Manufacturing Network", href: "/manufacturing" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Global", href: "/#global" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMfgPage =
    pathname?.startsWith("/manufacturing") ||
    pathname?.startsWith("/factories") ||
    pathname?.startsWith("/technology-partners");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-cream/90 backdrop-blur-xl border-b border-sand/60 shadow-sm"
            : "py-5 sm:py-6 bg-cream/50 backdrop-blur-sm border-b border-sand/30"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo / Wordmark in Clash Display */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-charcoal group-hover:text-olive transition-colors">
                  NOVUS
                </span>
                <span className="text-[10px] sm:text-xs font-display font-semibold tracking-wider uppercase text-burnt">
                  APPAREL
                </span>
              </div>
              <span className="text-[8.5px] font-mono uppercase tracking-widest text-charcoal/50">
                SRI DHANALAKSHMI GROUP &bull; 1971
              </span>
            </div>
          </Link>

          {/* Desktop Nav in Satoshi font-medium */}
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isCurrent =
                link.href === pathname ||
                (link.href === "/manufacturing" && isMfgPage);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-body font-medium uppercase tracking-widest transition-all duration-300 relative py-1 ${
                    isCurrent
                      ? "text-burnt font-bold"
                      : "text-charcoal/70 hover:text-olive"
                  }`}
                >
                  {link.label}
                  {isCurrent && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-burnt"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/manufacturing"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-body uppercase tracking-wider transition-all duration-300 ${
                isMfgPage
                  ? "bg-olive text-cream font-bold shadow-sm"
                  : "bg-sand/60 hover:bg-sand text-charcoal hover:text-olive font-medium border border-sand"
              }`}
            >
              <Layers className="w-3 h-3 text-burnt" />
              <span>Network</span>
            </Link>

            <MagneticButton>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-body font-bold uppercase tracking-wider bg-charcoal text-cream hover:bg-olive transition-all duration-300 shadow-sm group"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3 h-3 text-burnt-light transition-transform group-hover:translate-x-0.5" />
              </Link>
            </MagneticButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-lg text-charcoal hover:bg-sand/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-2xl pt-28 px-6 pb-12 flex flex-col justify-between xl:hidden"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold block">
                FROM THREAD TO POSSIBILITY
              </span>

              <div className="flex flex-col divide-y divide-sand/60">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-4 font-display text-2xl font-bold uppercase tracking-tight text-charcoal hover:text-burnt flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-sand-dark" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-sand/80 space-y-4">
              <div className="text-xs text-charcoal/70 font-body">
                <span className="font-bold text-charcoal block">
                  Novus Apparel Limited
                </span>
                Sri Dhanalakshmi Group &bull; Est. 1971
              </div>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3 rounded-full bg-olive text-cream font-body text-xs uppercase tracking-wider font-bold"
              >
                Start Business Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
