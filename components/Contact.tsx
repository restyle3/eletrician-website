"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 21 000 00 00",
    href: "tel:+351210000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ep-elektro.pt",
    href: "mailto:info@ep-elektro.pt",
  },
  {
    icon: MapPin,
    label: "Morada",
    value: "Rua da Electricidade 12, 1000-001 Lisboa",
    href: "https://maps.google.com",
  },
];

const services = [
  "Instalação eléctrica",
  "Manutenção / Assistência",
  "Emergência",
  "Iluminação",
  "Quadros eléctricos",
  "Casa inteligente",
  "Outro",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contacto" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#f5c518] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Contacto
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0c1c35] mb-4">
              Fale connosco
            </h2>
            <p className="text-[#0c1c35]/50 text-sm leading-relaxed mb-10">
              Solicite um orçamento gratuito ou esclareça as suas dúvidas. Respondemos
              em menos de 24 horas nos dias úteis.
            </p>

            {/* Contact info list */}
            <ul className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <Icon size={18} strokeWidth={1.5} className="text-[#0c1c35]/40 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-[#0c1c35]/35 mb-0.5">{label}</div>
                    <a
                      href={href}
                      className="text-sm text-[#0c1c35] hover:underline"
                      target={label === "Morada" ? "_blank" : undefined}
                      rel={label === "Morada" ? "noopener noreferrer" : undefined}
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <a
              href="https://wa.me/351210000000?text=Olá%2C%20gostaria%20de%20pedir%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#0c1c35]/50 hover:text-[#0c1c35] transition-colors duration-150"
              aria-label="Contactar por WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle size={40} className="text-[#0c1c35]" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-[#0c1c35]">Muito obrigado!</h3>
                <p className="text-sm text-[#0c1c35]/50">
                  Recebemos a sua mensagem e entraremos em contacto em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulário de contacto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#0c1c35]/50 mb-1.5">
                      Nome *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full border border-[#0c1c35]/15 px-3 py-2.5 text-sm text-[#0c1c35] placeholder-[#0c1c35]/25 focus:outline-none focus:border-[#0c1c35]/40 transition-colors bg-transparent"
                      placeholder="João Silva"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs text-[#0c1c35]/50 mb-1.5">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full border border-[#0c1c35]/15 px-3 py-2.5 text-sm text-[#0c1c35] placeholder-[#0c1c35]/25 focus:outline-none focus:border-[#0c1c35]/40 transition-colors bg-transparent"
                      placeholder="+351 900 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-[#0c1c35]/50 mb-1.5">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border border-[#0c1c35]/15 px-3 py-2.5 text-sm text-[#0c1c35] placeholder-[#0c1c35]/25 focus:outline-none focus:border-[#0c1c35]/40 transition-colors bg-transparent"
                    placeholder="joao@empresa.pt"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs text-[#0c1c35]/50 mb-1.5">
                    Serviço pretendido
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-[#0c1c35]/15 px-3 py-2.5 text-sm text-[#0c1c35] focus:outline-none focus:border-[#0c1c35]/40 transition-colors bg-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-[#0c1c35]/50 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-[#0c1c35]/15 px-3 py-2.5 text-sm text-[#0c1c35] placeholder-[#0c1c35]/25 focus:outline-none focus:border-[#0c1c35]/40 transition-colors bg-transparent resize-none"
                    placeholder="Descreva brevemente o seu projecto ou avaria..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c1c35] text-white text-sm font-medium hover:bg-[#0c1c35]/85 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "A enviar..." : (
                    <>
                      Enviar mensagem
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
