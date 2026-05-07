"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Penthouse Zürich Seefeld",
    category: "Wohnbau",
    description:
      "Komplette Neuinstallation inkl. KNX Smart Home und architektonische Lichtplanung.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop",
    year: "2024",
    wide: true,
  },
  {
    id: 2,
    title: "Bürokomplex Zürich Nord",
    category: "Gewerbe",
    description:
      "Elektroplanung für 12'000 m² Bürofläche, Notbeleuchtung und IT-Infrastruktur.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop",
    year: "2024",
    wide: false,
  },
  {
    id: 3,
    title: "Industriehalle Winterthur",
    category: "Industrie",
    description:
      "Hochspannungsverteilung, Maschineninstallationen und Sicherheitsbeleuchtung.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&q=80&auto=format&fit=crop",
    year: "2023",
    wide: false,
  },
  {
    id: 4,
    title: "Restaurantumbau Altstadt",
    category: "Gastronomie",
    description:
      "Lichtdesign, Kücheninstallation und Terrassenbeleuchtung.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&auto=format&fit=crop",
    year: "2023",
    wide: false,
  },
  {
    id: 5,
    title: "Einfamilienhaus Küsnacht",
    category: "Wohnbau",
    description:
      "Smart Home mit vollständiger Integration von Licht, Heizung und Beschattung.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop",
    year: "2023",
    wide: false,
  },
];

type Project = (typeof projects)[0];

function ProjectCard({ project }: { project: Project }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        onClick={() => setSelected(true)}
        className={`relative group cursor-pointer overflow-hidden ${
          project.wide ? "sm:col-span-2" : ""
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setSelected(true)}
        aria-label={`Projekt ansehen: ${project.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Overlay — subtle, darkens on hover */}
        <div className="absolute inset-0 bg-[#0c1c35]/40 group-hover:bg-[#0c1c35]/65 transition-all duration-300" />

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-[10px] text-[#f5c518] font-semibold tracking-widest uppercase">
            {project.category} · {project.year}
          </span>
          <h3 className="text-white font-semibold text-base mt-1">
            {project.title}
          </h3>
        </div>
      </motion.article>

      {/* Simple lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            onClick={() => setSelected(false)}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white max-w-xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#f5c518]">
                    {project.category} · {project.year}
                  </span>
                  <button
                    onClick={() => setSelected(false)}
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label="Schliessen"
                  >
                    <X size={18} />
                  </button>
                </div>
                <h3 className="text-[#0c1c35] font-bold text-xl mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section
      id="projekte"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="projekte-titel"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Projekte
            </motion.p>
            <motion.h2
              id="projekte-titel"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-[#0c1c35] leading-tight"
            >
              Ausgewählte Referenzen
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm max-w-xs leading-relaxed"
          >
            Eine Auswahl abgeschlossener Projekte in der Deutschschweiz.
          </motion.p>
        </div>

        {/* Image grid — simple, no complex masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
