"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, TrendingUp, Zap } from "lucide-react";

const credentials = [
  "NIV-zertifizierter Installationsbetrieb (ESTI anerkannt)",
  "ISO 9001:2015 Qualitätsmanagementsystem",
  "Mitglied Electrosuisse und VSIE",
  "Geprüfte Fachkräfte mit eidg. Fachausweis",
];

const counters = [
  { icon: TrendingUp, value: "850+", label: "Abgeschlossene Projekte" },
  { icon: Users, value: "320+", label: "Stammkunden Schweiz" },
  { icon: Zap, value: "18", label: "Jahre Markterfahrung" },
];

export default function About() {
  return (
    <section
      id="uber-uns"
      className="py-28 lg:py-36 bg-white overflow-hidden"
      aria-labelledby="uber-uns-titel"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0a1628]/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop"
                alt="Unser Elektrikerteam bei der Arbeit"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
              className="absolute -bottom-6 -right-6 bg-[#f5c518] rounded-2xl p-6 shadow-2xl shadow-[#f5c518]/25"
            >
              <div className="text-[#0a1628]">
                <span className="text-4xl font-black leading-none">18</span>
                <span className="text-lg font-bold ml-1">Jahre</span>
                <p className="text-sm font-semibold mt-1 opacity-80">
                  Expertise & Erfahrung
                </p>
              </div>
            </motion.div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -left-6 top-12 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1581092334574-b2bdf31ba3e5?w=400&q=80&auto=format&fit=crop"
                alt="Elektrische Schalttafel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Dark decorative block */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0a1628] rounded-2xl -z-10 opacity-50" />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <p className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Über uns
            </p>

            {/* Heading */}
            <h2
              id="uber-uns-titel"
              className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6"
            >
              Ihr zuverlässiger
              <br />
              Partner für{" "}
              <span className="relative">
                Elektrotechnik
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#f5c518] rounded-full" />
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Die Volta Elektro AG wurde 2006 von Meisterelektriker Andreas
              Kaufmann in Zürich gegründet. Seither haben wir uns zu einem
              der angesehensten Elektrikunternehmen der Deutschschweiz
              entwickelt – mit einem eingespielten Team aus 24 qualifizierten
              Fachkräften.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Unser Anspruch ist simpel: Jedes Projekt, ob Einfamilienhaus
              oder Gewerbekomplex, erhält dieselbe Sorgfalt, Präzision und
              Zuverlässigkeit. Wir kommunizieren transparent, halten Termine
              ein und liefern Arbeit, auf die Sie noch Jahrzehnte zählen
              können.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10" role="list">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {counters.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon
                    size={18}
                    className="text-[#f5c518] mx-auto mb-2"
                    aria-hidden="true"
                  />
                  <div className="text-2xl font-black text-[#0a1628] leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
