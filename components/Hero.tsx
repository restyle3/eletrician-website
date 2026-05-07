"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Star, Clock, Award } from "lucide-react";

const stats = [
  { icon: Award, value: "18+", label: "Jahre Erfahrung" },
  { icon: Star, value: "4.9★", label: "Kundenbewertung" },
  { icon: Shield, value: "ISO", label: "Zertifiziert" },
  { icon: Clock, value: "24/7", label: "Notfalldienst" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Willkommen bei Volta Elektro AG"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        {/* High-quality electrician image from Unsplash */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80&auto=format&fit=crop"
          alt="Elektriker bei der Arbeit"
          className="w-full h-[115%] object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Animated accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#f5c518] to-transparent origin-top"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5c518]/15 border border-[#f5c518]/30 text-[#f5c518] text-xs font-semibold tracking-[0.15em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c518] animate-pulse" />
              Führender Elektriker in der Schweiz
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Elektro&shy;installationen
            <br />
            <span className="text-[#f5c518]">mit Präzision</span>
            <br />
            <span className="font-light text-white/80">und Verlässlichkeit.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Seit 2006 realisieren wir elektrotechnische Projekte für Privat- und
            Geschäftskunden in der gesamten Deutschschweiz – termingerecht,
            sicher und auf höchstem Qualitätsniveau.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#f5c518] text-[#0a1628] font-semibold rounded-xl hover:bg-[#f7d04e] transition-all duration-200 shadow-2xl shadow-[#f5c518]/25 hover:shadow-[#f5c518]/40 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              Offerte anfragen
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-base backdrop-blur-sm"
            >
              Unsere Leistungen
            </a>
          </motion.div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-10 right-6 lg:right-8 hidden lg:grid grid-cols-2 gap-3 max-w-xs"
          aria-label="Kennzahlen"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 flex flex-col items-start gap-1 hover:bg-white/12 transition-colors duration-200"
            >
              <Icon size={16} className="text-[#f5c518] mb-1" />
              <span className="text-white text-xl font-bold leading-none">{value}</span>
              <span className="text-white/55 text-xs font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3"
          aria-label="Kennzahlen"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-3.5 flex flex-col items-start gap-0.5"
            >
              <Icon size={14} className="text-[#f5c518] mb-1" />
              <span className="text-white text-lg font-bold leading-none">{value}</span>
              <span className="text-white/55 text-[11px] font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden lg:flex"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scrollen</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
