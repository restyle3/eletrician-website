"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "NIV-zertifizierter Installationsbetrieb (ESTI anerkannt)",
  "ISO 9001:2015 Qualitätsmanagementsystem",
  "Mitglied Electrosuisse und VSIE",
  "Eidgenössisch geprüfte Fachkräfte",
];

export default function About() {
  return (
    <section
      id="uber-uns"
      className="py-24 lg:py-32 bg-[#0c1c35]"
      aria-labelledby="uber-uns-titel"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image — clean, no floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop"
              alt="EP Elektro Team bei der Arbeit"
              className="w-full h-[480px] lg:h-[560px] object-cover"
              loading="lazy"
            />
            {/* Subtle bottom stat overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0c1c35]/80 px-6 py-5 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "850+", label: "Projekte" },
                  { value: "18 J.", label: "Erfahrung" },
                  { value: "4.9★", label: "Bewertung" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-white font-bold text-lg leading-none">{value}</div>
                    <div className="text-white/40 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Über uns
            </p>

            <h2
              id="uber-uns-titel"
              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
            >
              Ihr zuverlässiger Partner
              <br />
              für Elektrotechnik.
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-4">
              EP Elektro wurde vor über 18 Jahren in der Deutschschweiz gegründet
              und hat sich zu einem der angesehensten Elektrounternehmen der Region
              entwickelt — mit einem eingespielten Team aus qualifizierten
              Fachkräften.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Jedes Projekt erhält dieselbe Sorgfalt und Präzision, ob
              Einfamilienhaus oder Gewerbeobjekt. Wir kommunizieren transparent,
              halten Termine ein und liefern Arbeit, auf die Sie sich noch
              Jahrzehnte verlassen können.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-block border border-white/30 text-white text-sm px-6 py-3 hover:bg-white hover:text-[#0c1c35] transition-all duration-200"
            >
              Unternehmen kennenlernen →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
