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
    value: "info@volta-elektro.ch",
    href: "mailto:info@volta-elektro.ch",
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

type FormState = "idle" | "loading" | "success" | "error";

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
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section
      id="kontakt"
      className="py-28 lg:py-36 bg-[#f8f9fb]"
      aria-labelledby="kontakt-titel"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#f5c518] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Kontakt
          </motion.p>
          <motion.h2
            id="kontakt-titel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-5"
          >
            Lassen Sie uns sprechen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Beschreiben Sie Ihr Projekt oder Ihr Anliegen – wir melden uns
            innert 24 Stunden mit einem konkreten Vorschlag.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Dark card */}
            <div className="bg-[#0a1628] rounded-3xl p-8 text-white">
              <h3 className="font-bold text-xl mb-2">Volta Elektro AG</h3>
              <p className="text-white/50 text-sm mb-7 leading-relaxed">
                Ihr Ansprechpartner für alle elektrotechnischen Fragen in der
                Deutschschweiz.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                    aria-label={`${label}: ${value}`}
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#f5c518] transition-colors duration-200">
                      <Icon
                        size={16}
                        className="text-[#f5c518] group-hover:text-[#0a1628] transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] uppercase tracking-[0.1em] font-semibold mb-0.5">
                        {label}
                      </div>
                      <div className="text-white font-medium text-sm group-hover:text-[#f5c518] transition-colors duration-200">
                        {value}
                      </div>
                      <div className="text-white/40 text-xs mt-0.5">{sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp quick action */}
            <a
              href="https://wa.me/41799876543?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Offerte%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl px-6 py-4 font-semibold text-sm hover:bg-[#1ebe5d] transition-colors duration-200 shadow-lg shadow-[#25D366]/20"
              aria-label="Schreiben Sie uns auf WhatsApp"
            >
              <MessageCircle size={20} />
              Direkt auf WhatsApp schreiben
            </a>

            {/* Map embed placeholder */}
            <div
              className="rounded-2xl overflow-hidden h-40 bg-[#0a1628]/5 border border-gray-200 relative"
              aria-label="Standort Volta Elektro AG"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/8.5278,47.3769,13,0/600x320@2x?access_token=pk.placeholder"
                alt="Karte Zürich"
                className="w-full h-full object-cover opacity-60"
                aria-hidden="true"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0a1628]/60 gap-2">
                <MapPin size={24} className="text-[#f5c518]" />
                <span className="text-xs font-medium text-center px-4">
                  Industriestrasse 42<br />8005 Zürich
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#0a1628]/5 border border-gray-100">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-2xl">
                    Vielen Dank!
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns innert
                    24 Stunden bei Ihnen.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="mt-2 text-sm text-[#0a1628] font-semibold underline underline-offset-2 hover:text-[#163260]"
                  >
                    Neue Anfrage senden
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Kontaktformular"
                >
                  <h3 className="text-[#0a1628] font-bold text-xl mb-7">
                    Offerte oder Beratung anfragen
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[#0a1628] mb-1.5"
                      >
                        Vor- und Nachname <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0a1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent placeholder:text-gray-300 transition"
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#0a1628] mb-1.5"
                      >
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.ch"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0a1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent placeholder:text-gray-300 transition"
                        autoComplete="email"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#0a1628] mb-1.5"
                      >
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+41 79 000 00 00"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0a1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent placeholder:text-gray-300 transition"
                        autoComplete="tel"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-[#0a1628] mb-1.5"
                      >
                        Gewünschte Leistung
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0a1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent bg-white transition"
                      >
                        <option value="">Bitte wählen…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#0a1628] mb-1.5"
                    >
                      Ihre Nachricht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihr Anliegen…"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0a1628] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent placeholder:text-gray-300 transition resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    Ihre Daten werden vertraulich behandelt und nicht an Dritte
                    weitergegeben. Datenschutzerklärung{" "}
                    <a href="#" className="underline hover:text-gray-600 transition-colors">
                      hier lesen
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0a1628] text-white font-semibold rounded-xl hover:bg-[#163260] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Anfrage absenden
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
