import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/sections/Footer";

import Navbar from "@/components/sections/Navbar";

import { Toaster } from "@/components/ui/sonner";

import GtagScripts from "@/components/GoogleTagsSrcipt";
import CookieBanner from "@/components/CookieBanner";
import GoogleConsentUpdater from "@/components/GoogleConsentUpdater";
import { ConsentProvider } from "@/hooks/useConsent";
import { Inter, JetBrains_Mono, Archivo } from "next/font/google";

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
    default: siteConfig.seoTitle,
    template: "%s | LC Carrosserie",
  },
  description: siteConfig.seoDescription,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.websiteUrl,
  },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.websiteUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
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
