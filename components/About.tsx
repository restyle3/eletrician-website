"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const credentials = [
  "Certificados pela DGEG",
  "Conformidade com as normas RTIEBT",
  "Seguros de responsabilidade civil",
  "Parceiros certificados ABB e Schneider Electric",
  "Formação contínua das nossas equipas",
  "Mais de 18 anos de experiência no sector",
];

export default function About() {
  return (
    <section
      id="sobre-nos"
      className="bg-[#0c1c35] py-24 lg:py-32"
      aria-label="Sobre a EP Elektro"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left – image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop"
              alt="Técnico EP Elektro em obra"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0c1c35] to-transparent" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-[#f5c518] px-4 py-3">
              <div className="text-[#0c1c35] text-2xl font-bold leading-none">18+</div>
              <div className="text-[#0c1c35]/70 text-xs mt-0.5">Anos de experiência</div>
            </div>
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Sobre nós
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Qualidade e rigor
              <br />
              <span className="font-light text-white/50">em cada instalação.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Desde 2006 que a EP Elektro executa instalações eléctricas de
              alta qualidade para clientes particulares, empresas e indústria.
              A nossa equipa de técnicos qualificados trabalha com rigor,
              pontualidade e total transparência em cada projecto.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Trabalhamos com os materiais e equipamentos das melhores marcas
              do sector, garantindo segurança e durabilidade a longo prazo em
              todas as instalações que realizamos.
            </p>

            {/* Credentials list */}
            <ul className="space-y-3" aria-label="Certificações e qualificações">
              {credentials.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#f5c518] shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-block mt-10 text-sm text-white/40 hover:text-white transition-colors duration-200"
            >
              Conhecer a empresa →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
