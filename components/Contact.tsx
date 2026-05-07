"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+41 44 123 45 67",
    href: "tel:+41441234567",
    sub: "Mo–Fr 07:00–18:00 · Sa 08:00–13:00",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@ep-elektro.ch",
    href: "mailto:info@ep-elektro.ch",
    sub: "Antwort innert 24 Stunden",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Industriestrasse 42, 8005 Zürich",
    href: "https://maps.google.com/?q=Industriestrasse+42+8005+Zürich",
    sub: "Parkplätze vorhanden",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+41 79 987 65 43",
    href: "https://wa.me/41799876543?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Offerte%20anfragen.",
    sub: "Nachrichten jederzeit",
  },
];

const services = [
  "Elektroinstallationen",
  "Smart Home / KNX",
  "Notfallreparatur",
  "Beleuchtungsplanung",
  "Wartungsvertrag",
  "Elektroverteiler",
  "Sonstiges",
];

type FormState = "idle" | "loading" | "success";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section
      id="kontakt"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="kontakt-titel"
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
            Kontakt
          </motion.p>
          <motion.h2
            id="kontakt-titel"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-[#0c1c35] leading-tight"
          >
            Lassen Sie uns sprechen.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info — simple list, no dark card box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Beschreiben Sie Ihr Projekt — wir melden uns innert 24 Stunden
              mit einem konkreten Vorschlag.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                  aria-label={`${label}: ${value}`}
                >
                  <Icon
                    size={16}
                    className="text-[#f5c518] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-[#0c1c35] text-sm font-medium group-hover:text-[#163260] transition-colors">
                      {value}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/41799876543?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Offerte%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-[#0c1c35] font-semibold border-b border-[#0c1c35] pb-px hover:text-[#25D366] hover:border-[#25D366] transition-colors duration-200"
              aria-label="Auf WhatsApp schreiben"
            >
              <MessageCircle size={15} />
              Direkt auf WhatsApp schreiben
            </a>
          </motion.div>

          {/* Form — clean, no heavy card styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-4 py-8"
              >
                <CheckCircle2 size={36} className="text-[#f5c518]" />
                <h3 className="text-[#0c1c35] font-bold text-2xl">
                  Vielen Dank!
                </h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                  Ihre Anfrage ist bei uns eingegangen. Wir melden uns innert
                  24 Stunden.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                  }}
                  className="text-sm text-[#0c1c35] font-semibold border-b border-[#0c1c35] pb-px hover:border-[#f5c518] transition-colors"
                >
                  Neue Anfrage senden
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Kontaktformular">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#0c1c35] uppercase tracking-wide mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 border border-gray-200 text-[#0c1c35] text-sm focus:outline-none focus:border-[#0c1c35] placeholder:text-gray-300 transition-colors"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#0c1c35] uppercase tracking-wide mb-2">
                      E-Mail <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="max@beispiel.ch"
                      className="w-full px-4 py-3 border border-gray-200 text-[#0c1c35] text-sm focus:outline-none focus:border-[#0c1c35] placeholder:text-gray-300 transition-colors"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#0c1c35] uppercase tracking-wide mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+41 79 000 00 00"
                      className="w-full px-4 py-3 border border-gray-200 text-[#0c1c35] text-sm focus:outline-none focus:border-[#0c1c35] placeholder:text-gray-300 transition-colors"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#0c1c35] uppercase tracking-wide mb-2">
                      Leistung
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 text-[#0c1c35] text-sm focus:outline-none focus:border-[#0c1c35] bg-white transition-colors"
                    >
                      <option value="">Bitte wählen…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-7">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#0c1c35] uppercase tracking-wide mb-2">
                    Nachricht <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihr Projekt…"
                    className="w-full px-4 py-3 border border-gray-200 text-[#0c1c35] text-sm focus:outline-none focus:border-[#0c1c35] placeholder:text-gray-300 transition-colors resize-none"
                  />
                </div>

                <p className="text-gray-300 text-xs mb-6">
                  Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                </p>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0c1c35] text-white text-sm font-semibold hover:bg-[#163260] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Wird gesendet…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Anfrage absenden
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
