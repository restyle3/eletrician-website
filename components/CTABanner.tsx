"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="bg-[#0c1c35] py-20 lg:py-24"
      aria-label="Notfallkontakt und Offerte"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Emergency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-red-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Notfalldienst · 24/7
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Elektrischer Notfall?
              <br />
              <span className="text-[#f5c518]">Wir sind sofort für Sie da.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-7">
              Stromausfall, Kurzschluss, Sicherungsausfall — unser Notfallteam
              ist 365 Tage im Jahr rund um die Uhr erreichbar und in der Regel
              innerhalb von 60 Minuten vor Ort.
            </p>
            <a
              href="tel:+41441234567"
              className="inline-flex items-center gap-3 bg-white text-[#0c1c35] px-7 py-4 font-semibold text-base hover:bg-[#f5c518] transition-colors duration-200"
              aria-label="Notfallnummer anrufen: +41 44 123 45 67"
            >
              <Phone size={18} />
              +41 44 123 45 67
            </a>
          </motion.div>

          {/* Quote CTA — no card box, just clean text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="border-t lg:border-t-0 lg:border-l border-white/15 pt-10 lg:pt-0 lg:pl-16"
          >
            <h3 className="text-white font-bold text-xl mb-3">
              Kostenlose Offerte anfragen
            </h3>
            <p className="text-white/45 text-sm leading-relaxed mb-7">
              Für nicht-dringende Anfragen erstellen wir Ihnen innert 24 Stunden
              eine transparente, unverbindliche Offerte.
            </p>

            <ul className="space-y-2.5 mb-8">
              {[
                "Unverbindliche Erstberatung",
                "Transparente Preise",
                "Antwort innert 24 Stunden",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-white/55 text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#f5c518] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold border-b border-white/30 pb-px hover:border-[#f5c518] hover:text-[#f5c518] transition-colors duration-200"
            >
              Offerte anfordern
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
