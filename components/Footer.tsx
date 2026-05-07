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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080f1e] text-white" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5" aria-label="EP Elektro – Startseite">
              <Zap size={18} className="text-[#f5c518]" strokeWidth={2} />
              <span className="text-white font-semibold tracking-wide">EP Elektro</span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed mb-6">
              Zuverlässige Elektroinstallationen in der Deutschschweiz.<br />
              Qualität und Verlässlichkeit seit über 18 Jahren.
            </p>
            <div className="flex items-center gap-3">
              {social.map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:text-[#f5c518] hover:border-[#f5c518]/40 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/50 text-[10px] uppercase tracking-[0.15em] font-semibold mb-5">
              Navigation
            </h3>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200"
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
            <h3 className="text-white/50 text-[10px] uppercase tracking-[0.15em] font-semibold mb-5">
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
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/50 text-[10px] uppercase tracking-[0.15em] font-semibold mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, value: "+41 44 123 45 67", href: "tel:+41441234567", label: "Anrufen" },
                { icon: Mail, value: "info@ep-elektro.ch", href: "mailto:info@ep-elektro.ch", label: "E-Mail schreiben" },
                { icon: MapPin, value: "Industriestrasse 42\n8005 Zürich", href: "https://maps.google.com/?q=Industriestrasse+42+8005+Zürich", label: "Adresse öffnen" },
              ].map(({ icon: Icon, value, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex items-start gap-3 group"
                  >
                    <Icon size={14} className="text-[#f5c518] mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-white/40 text-sm group-hover:text-white/70 transition-colors whitespace-pre-line">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-red-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" aria-hidden="true" />
              24/7 Notfalldienst aktiv
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <p>© {year} EP Elektro · Zürich · Alle Rechte vorbehalten.</p>
          <nav aria-label="Rechtliche Links">
            <ul className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white/50 transition-colors duration-200">
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
