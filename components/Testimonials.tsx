"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Markus Huber",
    role: "Bauherr, Küsnacht ZH",
    avatar: "MH",
    rating: 5,
    text: "Volta Elektro hat unser neues Einfamilienhaus mit einem vollständigen KNX Smart Home ausgestattet. Die Arbeit war tadellos, der Abschluss erfolgte sogar zwei Tage früher als geplant. Absolute Empfehlung!",
  },
  {
    name: "Sandra Meier-Brünner",
    role: "Immobilienverwalterin, Zürich",
    avatar: "SM",
    rating: 5,
    text: "Wir arbeiten seit vier Jahren mit Volta Elektro zusammen und sind stets begeistert. Professionell, pünktlich und kompetent – man merkt, dass das Team wirklich weiss, was es tut.",
  },
  {
    name: "Thomas Bächler",
    role: "Geschäftsführer tbk Architekten",
    avatar: "TB",
    rating: 5,
    text: "Für unser Bürogebäude in Zürich Nord hat Volta Elektro eine massgeschneiderte Lösung geliefert. Die Zusammenarbeit auf der Baustelle war reibungslos und die Qualität der Ausführung überzeugt jeden Tag.",
  },
  {
    name: "Petra Zimmermann",
    role: "Hotelbetreiberin, Winterthur",
    avatar: "PZ",
    rating: 5,
    text: "Nach einem Wasserschaden mussten wir unsere gesamte Elektroanlage sanieren lassen. Volta Elektro war innert 24 Stunden vor Ort und hat alles schnell und sauber wieder instand gestellt.",
  },
  {
    name: "Giorgio Ferretti",
    role: "Restaurateur, Zürich Altstadt",
    avatar: "GF",
    rating: 5,
    text: "Das Lichtkonzept, das Volta Elektro für unser Restaurant entwickelt hat, ist einfach wunderschön. Die Gäste kommentieren es regelmässig positiv. Top Beratung und erstklassige Umsetzung.",
  },
  {
    name: "Claudia Röthlisberger",
    role: "Eigenheimbesitzerin, Zollikon",
    avatar: "CR",
    rating: 5,
    text: "Sehr freundliches Team, sauber auf der Baustelle und immer erreichbar für Fragen. Das Preis-Leistungs-Verhältnis ist ausgezeichnet. Wir werden definitiv wieder auf Volta Elektro zurückgreifen.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="referenzen"
      className="py-28 lg:py-36 bg-white overflow-hidden"
      aria-labelledby="referenzen-titel"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Kundenstimmen
          </motion.p>
          <motion.h2
            id="referenzen-titel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-5"
          >
            Was unsere Kunden sagen
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-[#f5c518] text-[#f5c518]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-[#0a1628] font-bold">4.9</span>
            <span className="text-gray-400 text-sm">/ 5.0 · 180+ Bewertungen</span>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-[#f8f9fb] hover:bg-white rounded-2xl p-7 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-[#0a1628]/5 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-[#f5c518] mb-4 opacity-80"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} von 5 Sternen`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#f5c518] text-[#f5c518]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-[#f5c518] text-xs font-bold shrink-0"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[#0a1628] font-semibold text-sm leading-none mb-0.5">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
