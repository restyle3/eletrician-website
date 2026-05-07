"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    title: "Moradia – Lisboa",
    category: "Habitação",
    year: "2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70&auto=format&fit=crop",
    desc: "Instalação eléctrica completa de moradia unifamiliar em Lisboa, incluindo quadro geral, circuitos de iluminação e tomadas, e preparação para carregador VE.",
  },
  {
    title: "Escritórios – Porto",
    category: "Comércio",
    year: "2024",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70&auto=format&fit=crop",
    desc: "Projecto eléctrico e instalação para espaço de escritórios de 1.200 m² no Porto, com sistemas de iluminação LED regulável e UPS dedicado.",
  },
  {
    title: "Armazém Industrial – Setúbal",
    category: "Indústria",
    year: "2023",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=70&auto=format&fit=crop",
    desc: "Electrificação completa de armazém industrial em Setúbal: alimentações trifásicas, iluminação industrial LED e sistemas de segurança integrados.",
  },
  {
    title: "Restaurante – Cascais",
    category: "Restauração",
    year: "2023",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cfd27195?w=800&q=70&auto=format&fit=crop",
    desc: "Instalação eléctrica e de iluminação para restaurante em Cascais, com sistema de cenas de luz programável e circuitos dedicados para cozinha profissional.",
  },
  {
    title: "Edifício Residencial – Braga",
    category: "Habitação",
    year: "2023",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=70&auto=format&fit=crop",
    desc: "Instalação eléctrica de edifício com 24 apartamentos em Braga, incluindo infra-estruturas de telecomunicações e sistema de energia solar partilhada.",
  },
  {
    title: "Clínica – Coimbra",
    category: "Comércio",
    year: "2022",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=70&auto=format&fit=crop",
    desc: "Instalação eléctrica especializada para clínica médica em Coimbra, com grupos electrogéneos, UPS para equipamentos críticos e iluminação de emergência.",
  },
];

const categories = ["Todos", "Habitação", "Comércio", "Indústria", "Restauração"];

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<(typeof projects)[0] | null>(null);

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Referências
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0c1c35]">
            Projectos recentes
          </h2>
        </motion.div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtrar por categoria">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              className={`px-4 py-1.5 text-xs font-medium border transition-colors duration-150 ${
                active === cat
                  ? "bg-[#0c1c35] border-[#0c1c35] text-white"
                  : "border-[#0c1c35]/20 text-[#0c1c35]/60 hover:border-[#0c1c35]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e4ea]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(project)}
                className="relative bg-white aspect-[4/3] overflow-hidden cursor-pointer group text-left"
                aria-label={`Ver projecto: ${project.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0c1c35]/0 group-hover:bg-[#0c1c35]/65 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-[#f5c518] text-[10px] font-semibold tracking-widest uppercase mb-1">
                    {project.category} · {project.year}
                  </div>
                  <div className="text-white font-semibold text-sm">{project.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#080f1e]/90 p-4"
              onClick={() => setLightbox(null)}
              role="dialog"
              aria-modal="true"
              aria-label={lightbox.title}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.img}
                  alt={lightbox.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <div className="text-[#f5c518] text-[10px] font-semibold tracking-widest uppercase mb-2">
                    {lightbox.category} · {lightbox.year}
                  </div>
                  <h3 className="text-[#0c1c35] font-bold text-lg mb-3">{lightbox.title}</h3>
                  <p className="text-[#0c1c35]/60 text-sm leading-relaxed">{lightbox.desc}</p>
                </div>
              </motion.div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
