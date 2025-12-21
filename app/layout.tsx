import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/sections/Footer";
import GoTop from "@/components/buttons/GoTop";
import Navbar from "@/components/sections/Navbar";

import { Toaster } from "@/components/ui/sonner";

import GtagScripts from "@/components/GoogleTagsSrcipt";
import CookieBanner from "@/components/CookieBanner";
import GoogleConsentUpdater from "@/components/GoogleConsentUpdater";
import { ConsentProvider } from "@/hooks/useConsent";
import { Inter, JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site.config";
import { FloatingCall } from "@/components/buttons/FloatingCall";

// La police principale pour le corps de texte
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// La police pour les titres massifs (Look éditorial)
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-archivo",
});

// La police pour le côté technique/expertise
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: "LC Carrosserie | Carrosserie et peinture auto à Éguilles",
    template: "%s | LC Carrosserie",
  },
  description:
    "Atelier de carrosserie et peinture automobile à Éguilles. Réparations toutes assurances, aucune avance de travaux, véhicule de prêt et franchise offerte.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "LC Carrosserie | Carrosserie et peinture auto à Éguilles",
    description:
      "Gestion complète de votre réparation carrosserie : diagnostic, dossier assurance, peinture, véhicule de prêt et restitution planifiée.",
    url: siteConfig.websiteUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${archivo.variable} ${jetbrains.variable} font-sans antialiased `}
      >
        <ConsentProvider>
          <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            {children}
            <CookieBanner />
            <GoogleConsentUpdater />
            <GtagScripts />
            <Footer />
            <Toaster />
            {/* <GoTop /> */}
            <FloatingCall />
          </div>
        </ConsentProvider>
      </body>
    </html>
  );
}
