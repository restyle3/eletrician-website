"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Penthouse Zürich Seefeld",
    category: "Wohnbau",
    description:
      "Komplette Neuinstallation inkl. KNX Smart Home, architektonische Lichtplanung und Photovoltaikanlage.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-2 row-span-1 lg:row-span-2",
    height: "h-64 lg:h-full",
    year: "2024",
  },
  {
    id: 2,
    title: "Bürokomplex Zürich Nord",
    category: "Gewerbe",
    description:
      "Elektroplanung und -installation für 12'000 m² Bürofläche, inkl. Notbeleuchtung und IT-Infrastruktur.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
    span: "col-span-1",
    height: "h-52",
    year: "2024",
  },
  {
    id: 3,
    title: "Industriehalle Winterthur",
    category: "Industrie",
    description:
      "Hochspannungsverteilung, Maschineninstallationen und Sicherheitsbeleuchtung.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80&auto=format&fit=crop",
    span: "col-span-1",
    height: "h-52",
    year: "2023",
  },
  {
    id: 4,
    title: "Restaurantumbau Altstadt",
    category: "Gastronomie",
    description:
      "Lichtdesign, Kücheninstallation und Terrassen­beleuchtung für Premium-Gastronomie.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop",
    span: "col-span-1",
    height: "h-48",
    year: "2023",
  },
  {
    id: 5,
    title: "Einfamilienhaus Küsnacht",
    category: "Wohnbau",
    description:
      "Smart Home Loxone mit vollständiger Integration von Licht, Heizung, Beschattung und Sicherheit.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    span: "col-span-1",
    height: "h-48",
    year: "2023",
  },
];

type Project = (typeof projects)[0];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <motion.article
        className={`relative rounded-2xl overflow-hidden cursor-pointer ${project.span} ${project.height} bg-gray-100`}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setSelected(true)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        aria-label={`Projekt ansehen: ${project.title}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setSelected(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          loading="lazy"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.6 }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#f5c518] bg-[#0a1628]/70 backdrop-blur-sm px-3 py-1 rounded-full border border-[#f5c518]/30">
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="text-[11px] text-white/60 font-medium">{project.year}</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-bold text-lg leading-tight mb-1">
            {project.title}
          </h3>
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={
              hovered
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.25 }}
            className="text-white/70 text-xs leading-relaxed overflow-hidden"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-5 right-5 w-9 h-9 bg-[#f5c518] rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowUpRight size={16} className="text-[#0a1628]" />
        </motion.div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(false)}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#f5c518]">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="text-[#0a1628] font-bold text-2xl mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelected(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    aria-label="Schliessen"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-500 leading-relaxed">{project.description}</p>
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
      className="py-28 lg:py-36 bg-[#f8f9fb]"
      aria-labelledby="projekte-titel"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-3"
            >
              Referenzen
            </motion.p>
            <motion.h2
              id="projekte-titel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight"
            >
              Ausgewählte
              <br />
              Projekte
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-base max-w-xs leading-relaxed"
          >
            Eine Auswahl unserer abgeschlossenen Elektriker­projekte in der
            Deutschschweiz.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-[#0a1628] font-semibold text-sm hover:text-[#163260] transition-colors"
          >
            Alle Projekte anfragen
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
