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
  title: "EP Elektro – Ihr Elektriker in Zürich & Deutschschweiz",
  description:
    "EP Elektro ist Ihr zuverlässiger Partner für Elektroinstallationen, Smart Home, Beleuchtungssysteme und Notfallreparaturen in der Deutschschweiz. NIV-zertifiziert, ISO 9001. Jetzt Offerte anfragen.",
  keywords: [
    "Elektriker Zürich",
    "EP Elektro",
    "Elektroinstallation Schweiz",
    "Smart Home Zürich",
    "Elektriker Notfall",
    "KNX Installation",
  ],
  authors: [{ name: "EP Elektro" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://www.ep-elektro.ch",
    siteName: "EP Elektro",
    title: "EP Elektro – Ihr Elektriker in Zürich",
    description:
      "Professionelle Elektroinstallationen, Smart Home und 24/7 Notfallservice in der Deutschschweiz.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "EP Elektro – Elektriker in Zürich",
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
      lang="de-CH"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
