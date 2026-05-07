"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Ferreira",
    role: "Proprietário – Lisboa",
    text: "Trabalho impecável na instalação eléctrica da nossa moradia. Cumpriram o prazo e deixaram tudo limpo. Muito profissionais.",
  },
  {
    name: "Ana Costa",
    role: "Directora – Empresa em Porto",
    text: "A EP Elektro modernizou toda a instalação dos nossos escritórios. O acompanhamento foi exemplar, do projecto à conclusão.",
  },
  {
    name: "Miguel Santos",
    role: "Gerente de restaurante – Cascais",
    text: "Resolveram uma avaria de urgência num sábado à noite sem hesitar. Rápidos, competentes e com preço justo. Altamente recomendo.",
  },
  {
    name: "Carla Mendes",
    role: "Gestora de propriedades – Cascais",
    text: "Trabalham connosco há mais de cinco anos em vários imóveis. Sempre pontuais, sempre com a documentação em ordem. Parceiros de confiança.",
  },
  {
    name: "Rui Oliveira",
    role: "Arquitecto – Braga",
    text: "Parceiros de eleição nos meus projectos de habitação. Excelente leitura do projecto e execução sempre alinhada com o que foi acordado.",
  },
  {
    name: "Sofia Nunes",
    role: "COO – Empresa industrial em Setúbal",
    text: "Refizeram toda a instalação da nossa fábrica com zero interrupções. A equipa da EP Elektro é verdadeiramente profissional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testemunhos" className="bg-[#f8f9fb] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4"
        >
          <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Testemunhos
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0c1c35]">
              O que dizem os nossos clientes
            </h2>
            <span className="text-[#0c1c35]/40 text-sm shrink-0">4.9 · 180+ avaliações</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e4ea]">
          {testimonials.map(({ name, role, text }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="bg-[#f8f9fb] p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} className="fill-[#f5c518] text-[#f5c518]" />
                ))}
              </div>
              <blockquote className="text-sm text-[#0c1c35]/70 leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </blockquote>
              <footer>
                <div className="text-sm font-semibold text-[#0c1c35]">{name}</div>
                <div className="text-xs text-[#0c1c35]/40 mt-0.5">{role}</div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
