"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Wrench,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Wifi,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Elektroinstallationen",
    description:
      "Komplette Neuinstallationen und Renovierungen in Wohnbauten – von der Unterverteilung bis zur Steckdose. Sorgfältig geplant und normgerecht ausgeführt.",
    tag: "Wohnbau",
    color: "from-blue-500/10 to-blue-600/5",
    border: "group-hover:border-blue-400/30",
  },
  {
    icon: Wrench,
    title: "Wartung & Service",
    description:
      "Regelmässige Wartungsverträge für Privat- und Geschäftskunden. Wir halten Ihre Elektroanlagen in einwandfreiem Zustand und beugen Ausfällen vor.",
    tag: "Service",
    color: "from-emerald-500/10 to-emerald-600/5",
    border: "group-hover:border-emerald-400/30",
  },
  {
    icon: AlertTriangle,
    title: "Notfallreparaturen",
    description:
      "Stromausfall oder Kurzschluss? Unser Notfalldienst ist rund um die Uhr erreichbar und innerhalb kürzester Zeit bei Ihnen – 365 Tage im Jahr.",
    tag: "24/7",
    color: "from-red-500/10 to-red-600/5",
    border: "group-hover:border-red-400/30",
    highlight: true,
  },
  {
    icon: Lightbulb,
    title: "Beleuchtungssysteme",
    description:
      "Architektonische LED-Konzepte, Aussenbeleuchtung, Büro- und Industriebeleuchtung. Wir planen und realisieren energieeffiziente Lichtlösungen.",
    tag: "Licht & LED",
    color: "from-yellow-500/10 to-yellow-600/5",
    border: "group-hover:border-yellow-400/30",
  },
  {
    icon: Cpu,
    title: "Elektroverteiler",
    description:
      "Planung, Montage und Modernisierung von Haupt- und Unterverteilungen. Normenkonform und zukunftssicher – für Neubauten und Sanierungen.",
    tag: "Infrastruktur",
    color: "from-purple-500/10 to-purple-600/5",
    border: "group-hover:border-purple-400/30",
  },
  {
    icon: Wifi,
    title: "Smart Home",
    description:
      "KNX- und Loxone-Systeme, intelligente Lichtsteuerung, Beschattung, Sicherheit und Multimedia – vollständig integriert und intuitiv bedienbar.",
    tag: "Digitalisierung",
    color: "from-cyan-500/10 to-cyan-600/5",
    border: "group-hover:border-cyan-400/30",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-[#0a1628]/8 hover:-translate-y-1 transition-all duration-300 cursor-default ${service.border}`}
    >
      {/* Top background gradient on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon + tag */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 bg-[#0a1628] rounded-xl flex items-center justify-center group-hover:bg-[#f5c518] transition-colors duration-300 shadow-lg">
            <Icon
              size={22}
              className="text-[#f5c518] group-hover:text-[#0a1628] transition-colors duration-300"
            />
          </div>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#0a1628] font-bold text-xl mb-3 leading-tight group-hover:text-[#0a1628] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Link */}
        <div className="flex items-center gap-1.5 text-[#0a1628] text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Mehr erfahren
          <ArrowRight size={15} />
        </div>
      </div>

      {/* Emergency badge */}
      {service.highlight && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -top-2.5 -right-2.5 w-14 h-14 bg-red-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-red-500/30"
          aria-label="Notfalldienst rund um die Uhr"
        >
          <span className="text-[9px] font-bold leading-none">24/7</span>
          <span className="text-[8px] leading-none opacity-80 mt-0.5">NOTFALL</span>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="leistungen"
      className="py-28 lg:py-36 bg-[#f8f9fb]"
      aria-labelledby="leistungen-titel"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Was wir bieten
          </motion.p>
          <motion.h2
            id="leistungen-titel"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-5"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Vom Einfamilienhaus bis zum Gewerbeobjekt – wir bieten das
            komplette Spektrum an elektrotechnischen Dienstleistungen aus einer
            Hand.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0a1628] text-[#0a1628] font-semibold rounded-xl hover:bg-[#0a1628] hover:text-white transition-all duration-200 text-sm"
          >
            Jetzt Beratungsgespräch vereinbaren
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
