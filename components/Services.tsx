"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wrench,
  AlertCircle,
  Lightbulb,
  Settings,
  Home,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Instalações Eléctricas",
    text: "Instalação elétrica completa para habitações novas e remodelações — desde o quadro até à tomada final, com toda a certificação exigida.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Assistência",
    text: "Contratos de manutenção preventiva e assistência técnica para instalações domésticas e industriais. Rápido, fiável e documentado.",
  },
  {
    icon: AlertCircle,
    title: "Reparações de Emergência",
    text: "Avaria eléctrica? A nossa equipa de urgências está disponível 24 horas por dia, 7 dias por semana — intervenção em poucas horas.",
  },
  {
    icon: Lightbulb,
    title: "Sistemas de Iluminação",
    text: "Projecto e instalação de sistemas de iluminação interior e exterior, incluindo soluções LED de baixo consumo e controlo inteligente.",
  },
  {
    icon: Settings,
    title: "Quadros Eléctricos",
    text: "Instalação, substituição e certificação de quadros eléctricos residenciais e industriais, em conformidade com as normas em vigor.",
  },
  {
    icon: Home,
    title: "Casa Inteligente",
    text: "Automação residencial: iluminação, estores, climatização e segurança integrados num único sistema de controlo intuitivo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#f8f9fb] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Serviços
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0c1c35]">
            O que fazemos
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e4ea]">
          {services.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="bg-[#f8f9fb] p-8 group"
            >
              <Icon
                size={24}
                strokeWidth={1.5}
                className="text-[#0c1c35] mb-5 group-hover:text-[#f5c518] transition-colors duration-200"
              />
              <h3 className="text-base font-semibold text-[#0c1c35] mb-3">{title}</h3>
              <p className="text-sm text-[#0c1c35]/55 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-sm text-[#0c1c35]/55"
        >
          Não encontrou o que procura?{" "}
          <a href="#contacto" className="text-[#0c1c35] font-medium hover:underline">
            Fale connosco →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
