"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#uber-uns", label: "Über uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "bg-[#0c1c35] border-b border-white/10"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between py-5"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="EP Elektro – Startseite"
          >
            <Zap size={20} className="text-[#f5c518]" strokeWidth={2} />
            <span className="text-white font-semibold text-base tracking-wide">
              EP Elektro
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                className="text-sm text-white/65 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+41441234567"
              className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors duration-200"
            >
              <Phone size={14} />
              +41 44 123 45 67
            </a>
            <a
              href="#kontakt"
              className="px-4 py-2 border border-white/30 text-white text-sm hover:bg-white hover:text-[#0c1c35] transition-all duration-200"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0c1c35] flex flex-col pt-20 px-6 pb-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilnavigation"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-xl font-light py-4 border-b border-white/10 hover:text-[#f5c518] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="tel:+41441234567"
                className="flex items-center gap-3 text-white/60 text-base"
              >
                <Phone size={16} />
                +41 44 123 45 67
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 border border-white/30 text-white text-center text-base hover:bg-white hover:text-[#0c1c35] transition-all duration-200"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
