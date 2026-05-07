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
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Elektroinstallationen",
    description:
      "Neuinstallationen und Renovierungen in Wohn- und Gewerbebauten. Normgerecht, sorgfältig geplant und ausgeführt.",
    emergency: false,
  },
  {
    icon: Wrench,
    title: "Wartung & Service",
    description:
      "Regelmässige Wartungsverträge für Privat- und Geschäftskunden. Präventive Instandhaltung Ihrer Elektroanlagen.",
    emergency: false,
  },
  {
    icon: AlertTriangle,
    title: "Notfallreparaturen",
    description:
      "Rund um die Uhr erreichbar. Unser Notfalldienst ist innerhalb kürzester Zeit bei Ihnen — 365 Tage im Jahr.",
    emergency: true,
  },
  {
    icon: Lightbulb,
    title: "Beleuchtungssysteme",
    description:
      "LED-Planung, Aussenbeleuchtung, Industriebeleuchtung. Energieeffiziente Lichtlösungen für jeden Bereich.",
    emergency: false,
  },
  {
    icon: Cpu,
    title: "Elektroverteiler",
    description:
      "Planung und Montage von Haupt- und Unterverteilungen. Normenkonform für Neubauten und Sanierungen.",
    emergency: false,
  },
  {
    icon: Wifi,
    title: "Smart Home",
    description:
      "KNX- und Loxone-Systeme: Lichtsteuerung, Beschattung, Sicherheit und Multimedia intelligent vernetzt.",
    emergency: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="leistungen"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="leistungen-titel"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Leistungen
          </motion.p>
          <motion.h2
            id="leistungen-titel"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#0c1c35] leading-tight max-w-xl"
          >
            Das komplette Spektrum elektrotechnischer Dienstleistungen.
          </motion.h2>
        </div>

        {/* Services grid — flat, no card boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                className="border-b border-r border-gray-100 p-8 lg:p-10 group hover:bg-[#f8f9fb] transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={20}
                    className={
                      service.emergency
                        ? "text-red-500 shrink-0 mt-0.5"
                        : "text-[#0c1c35] shrink-0 mt-0.5"
                    }
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-[#0c1c35] font-semibold text-base mb-2 flex items-center gap-2">
                      {service.title}
                      {service.emergency && (
                        <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 border border-red-200 px-1.5 py-0.5">
                          24/7
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14"
        >
          <a
            href="#kontakt"
            className="text-[#0c1c35] text-sm font-semibold border-b border-[#0c1c35] pb-px hover:border-[#f5c518] hover:text-[#0c1c35] transition-colors duration-200"
          >
            Beratungsgespräch vereinbaren →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
