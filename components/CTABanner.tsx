"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const badges = [
  "Orçamento gratuito",
  "Primeira consulta sem compromisso",
  "Preços transparentes",
  "Resposta em menos de 24 horas",
];

export default function CTABanner() {
  return (
    <section className="bg-[#0c1c35] py-20 lg:py-24" aria-label="Serviço de emergência 24/7">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Serviço de emergência · 24/7
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Emergência eléctrica?
            </h2>
            <p className="text-white/40 text-base">
              Estamos disponíveis de imediato, todos os dias, a qualquer hora.
            </p>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="tel:+351210000000"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#f5c518] text-[#0c1c35] font-bold text-sm hover:bg-[#f5c518]/90 transition-colors duration-200"
              aria-label="Ligar agora para EP Elektro"
            >
              <Phone size={16} />
              +351 21 000 00 00
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white text-sm hover:border-white/50 transition-colors duration-200"
            >
              Pedir orçamento
            </a>
          </motion.div>
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6"
          aria-label="Vantagens"
        >
          {badges.map((b) => (
            <span key={b} className="text-white/35 text-xs">
              ✓ {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
