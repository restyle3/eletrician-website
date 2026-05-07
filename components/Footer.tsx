"use client";

import { Zap, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#uber-uns", label: "Über uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "#", label: "Impressum" },
  { href: "#", label: "Datenschutz" },
  { href: "#", label: "AGB" },
];

const social = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050d1a] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2.5 mb-5"
              aria-label="Volta Elektro AG – Startseite"
            >
              <div className="w-9 h-9 bg-[#f5c518] rounded-lg flex items-center justify-center shadow-lg shadow-[#f5c518]/20">
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
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Elektriker in der Deutschschweiz. Qualität,
              Präzision und Verlässlichkeit seit 2006.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {social.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#f5c518] hover:text-[#0a1628] transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Navigation
            </h3>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/45 text-sm hover:text-[#f5c518] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {[
                "Elektroinstallationen",
                "Smart Home / KNX",
                "Beleuchtungssysteme",
                "Elektroverteiler",
                "Wartung & Service",
                "Notfallreparaturen",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#leistungen"
                    className="text-white/45 text-sm hover:text-[#f5c518] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+41441234567"
                  className="flex items-start gap-3 group"
                  aria-label="Anrufen: +41 44 123 45 67"
                >
                  <Phone
                    size={15}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/45 text-sm group-hover:text-white/70 transition-colors">
                    +41 44 123 45 67
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@volta-elektro.ch"
                  className="flex items-start gap-3 group"
                  aria-label="E-Mail schreiben: info@volta-elektro.ch"
                >
                  <Mail
                    size={15}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/45 text-sm group-hover:text-white/70 transition-colors">
                    info@volta-elektro.ch
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Industriestrasse+42+8005+Zürich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                  aria-label="Adresse auf Google Maps öffnen"
                >
                  <MapPin
                    size={15}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/45 text-sm group-hover:text-white/70 transition-colors leading-relaxed">
                    Industriestrasse 42<br />8005 Zürich
                  </span>
                </a>
              </li>
            </ul>

            {/* 24/7 badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              24/7 Notfalldienst
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>
            © {year} Volta Elektro AG, Zürich. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Links">
            <ul className="flex items-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white/60 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
