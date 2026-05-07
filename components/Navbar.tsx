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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="mx-auto max-w-7xl px-6 lg:px-8 h-18 flex items-center justify-between py-4"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Volta Elektro AG – Startseite"
          >
            <div className="w-9 h-9 bg-[#f5c518] rounded-lg flex items-center justify-center group-hover:bg-[#f7d04e] transition-colors duration-200 shadow-lg shadow-[#f5c518]/20">
              <Zap size={18} className="text-[#0a1628]" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-lg tracking-tight block">
                Volta Elektro
              </span>
              <span className="text-[#f5c518] text-[10px] font-semibold tracking-[0.2em] uppercase">
                AG · Zürich
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative group",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#f5c518] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+41441234567"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              <Phone size={14} />
              <span className="font-medium">+41 44 123 45 67</span>
            </a>
            <a
              href="#kontakt"
              className="px-5 py-2.5 bg-[#f5c518] text-[#0a1628] text-sm font-semibold rounded-lg hover:bg-[#f7d04e] transition-all duration-200 shadow-lg shadow-[#f5c518]/20 hover:shadow-[#f5c518]/30 hover:-translate-y-px active:translate-y-0"
            >
              Offerte anfragen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0a1628] flex flex-col pt-24 px-6 pb-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilnavigation"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-light py-3 border-b border-white/10 hover:text-[#f5c518] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="tel:+41441234567"
                className="flex items-center gap-3 text-white/70 hover:text-white text-lg transition-colors"
              >
                <Phone size={16} />
                +41 44 123 45 67
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 bg-[#f5c518] text-[#0a1628] text-center font-semibold rounded-xl text-lg"
              >
                Offerte anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
