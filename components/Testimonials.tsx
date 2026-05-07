"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus Huber",
    role: "Bauherr, Küsnacht ZH",
    avatar: "MH",
    text: "EP Elektro hat unser Einfamilienhaus mit einem vollständigen KNX Smart Home ausgestattet. Die Arbeit war tadellos, der Abschluss sogar zwei Tage früher als geplant.",
  },
  {
    name: "Sandra Meier-Brünner",
    role: "Immobilienverwalterin, Zürich",
    avatar: "SM",
    text: "Wir arbeiten seit vier Jahren mit EP Elektro zusammen. Professionell, pünktlich und kompetent — man merkt, dass das Team wirklich weiss, was es tut.",
  },
  {
    name: "Thomas Bächler",
    role: "Geschäftsführer tbk Architekten",
    avatar: "TB",
    text: "Für unser Bürogebäude hat EP Elektro eine massgeschneiderte Lösung geliefert. Die Zusammenarbeit war reibungslos und die Qualität überzeugt jeden Tag.",
  },
  {
    name: "Petra Zimmermann",
    role: "Hotelbetreiberin, Winterthur",
    avatar: "PZ",
    text: "Nach einem Wasserschaden war EP Elektro innert 24 Stunden vor Ort und hat alles schnell und sauber wieder instand gestellt. Sehr zuverlässig.",
  },
  {
    name: "Giorgio Ferretti",
    role: "Restaurateur, Zürich Altstadt",
    avatar: "GF",
    text: "Das Lichtkonzept für unser Restaurant ist einfach wunderschön. Gäste kommentieren es regelmässig positiv. Top Beratung und erstklassige Umsetzung.",
  },
  {
    name: "Claudia Röthlisberger",
    role: "Eigenheimbesitzerin, Zollikon",
    avatar: "CR",
    text: "Sehr freundliches Team, sauber auf der Baustelle und immer erreichbar. Das Preis-Leistungs-Verhältnis ist ausgezeichnet.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="referenzen"
      className="py-24 lg:py-32 bg-[#f8f9fb]"
      aria-labelledby="referenzen-titel"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Kundenstimmen
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <motion.h2
              id="referenzen-titel"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-[#0c1c35] leading-tight"
            >
              Was unsere Kunden sagen
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-1.5 sm:mb-1"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f5c518] text-[#f5c518]" aria-hidden="true" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">4.9 · 180+ Bewertungen</span>
            </motion.div>
          </div>
        </div>

        {/* Flat cards — no strong shadows, no gradient backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="bg-white border border-gray-100 p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[#f5c518] text-[#f5c518]" aria-hidden="true" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 bg-[#0c1c35] flex items-center justify-center text-[#f5c518] text-xs font-bold shrink-0"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[#0c1c35] font-semibold text-sm leading-none mb-0.5">
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
