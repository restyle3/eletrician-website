"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Zap } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="py-0 overflow-hidden"
      aria-label="Notfallkontakt und Offerte"
    >
      <div className="relative bg-[#0a1628]">
        {/* Decorative yellow bar at top */}
        <div className="h-1 bg-[#f5c518] w-full" />

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(245,197,24,0.8) 40px,
              rgba(245,197,24,0.8) 41px
            )`,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Emergency */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
                  <Zap size={18} className="text-white" />
                </div>
                <span className="text-red-400 text-sm font-semibold tracking-[0.1em] uppercase">
                  Notfalldienst · 24/7
                </span>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                  Elektrischer Notfall?
                  <br />
                  <span className="text-[#f5c518]">Wir sind sofort für Sie da.</span>
                </h2>
                <p className="text-white/55 text-base leading-relaxed">
                  Stromausfall, Kurzschluss oder Sicherungsausfall – unser
                  Notfallteam ist 365 Tage im Jahr rund um die Uhr erreichbar
                  und in der Regel innerhalb von 60 Minuten vor Ort.
                </p>
              </div>
              <a
                href="tel:+41441234567"
                className="group inline-flex items-center gap-4 bg-[#f5c518] text-[#0a1628] px-7 py-4 rounded-xl font-bold text-lg hover:bg-[#f7d04e] transition-all duration-200 shadow-2xl shadow-[#f5c518]/20 hover:shadow-[#f5c518]/35 hover:-translate-y-0.5 active:translate-y-0 w-fit"
                aria-label="Jetzt Notfallnummer anrufen: +41 44 123 45 67"
              >
                <Phone size={22} className="shrink-0" />
                <span>+41 44 123 45 67</span>
              </a>
            </motion.div>

            {/* Right: Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold text-2xl mb-2">
                Kostenlose Offerte anfordern
              </h3>
              <p className="text-white/50 text-sm mb-7 leading-relaxed">
                Für nicht-dringende Anfragen erstellen wir Ihnen innert 24
                Stunden eine transparente und unverbindliche Offerte.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Unverbindliche Beratung",
                  "Transparente Preise ohne Überraschungen",
                  "Antwort innert 24 Stunden",
                  "Kompetente Fachberatung inklusive",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 border-2 border-[#f5c518] text-[#f5c518] font-semibold rounded-xl hover:bg-[#f5c518] hover:text-[#0a1628] transition-all duration-200 text-sm"
              >
                Offerte anfragen
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
