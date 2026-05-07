"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="EP Elektro – Elektroinstallationen Schweiz"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-[115%] object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Strong dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0c1c35]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c35] via-[#0c1c35]/40 to-transparent" />
      </motion.div>

      {/* Content aligned to bottom-left like many industrial sites */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 pb-20 lg:pb-28 pt-32 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Simple label */}
          <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Elektroinstallationen · Schweiz
          </p>

          {/* Headline — clean, not over-designed */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Zuverlässige Elektro&shy;installationen
            <br />
            <span className="font-light text-white/70">für die ganze Schweiz.</span>
          </h1>

          <p className="text-white/55 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
            EP Elektro realisiert Elektroprojekte für Privat- und Geschäftskunden —
            termingerecht, sicher und auf höchstem Qualitätsniveau.
          </p>

          {/* Two simple CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0c1c35] text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              Offerte anfragen
              <ArrowRight size={15} />
            </a>
            <a
              href="tel:+41441234567"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm hover:border-white/60 transition-colors duration-200"
            >
              <Phone size={15} />
              +41 44 123 45 67
            </a>
          </div>
        </motion.div>

        {/* Simple stats row at bottom — no cards, just numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-8"
          aria-label="Kennzahlen"
        >
          {[
            { value: "18+", label: "Jahre Erfahrung" },
            { value: "850+", label: "Projekte" },
            { value: "4.9★", label: "Kundenbewertung" },
            { value: "24/7", label: "Notfalldienst" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-white text-2xl font-bold leading-none mb-1">{value}</div>
              <div className="text-white/40 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
