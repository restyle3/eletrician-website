import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EP Elektro – Electricista em Portugal",
  description:
    "A EP Elektro é o seu parceiro de confiança para instalações eléctricas, casa inteligente, sistemas de iluminação e reparações de emergência em Portugal. Orçamento gratuito.",
  keywords: [
    "electricista Lisboa",
    "EP Elektro",
    "instalações eléctricas Portugal",
    "casa inteligente",
    "electricista urgência",
    "quadros eléctricos",
  ],
  authors: [{ name: "EP Elektro" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.ep-elektro.pt",
    siteName: "EP Elektro",
    title: "EP Elektro – Electricista em Portugal",
    description:
      "Instalações eléctricas profissionais, casa inteligente e serviço de emergência 24/7 em Portugal.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "EP Elektro – Electricista em Portugal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
