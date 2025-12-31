import type { Metadata } from "next"

import { siteConfig } from "@/data/site.config"
import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo"

const title = "Assurance auto et carrosserie | LC Carrosserie"
const description =
  "Prise en charge assurance auto, libre choix du reparateur, zero avance de frais et suivi du dossier."
const pageUrl = `${siteConfig.websiteUrl}/assurance`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "article",
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
  },
}

export default function AssuranceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBusinessJsonLd(),
      buildWebPageJsonLd({
        title,
        description,
        url: pageUrl,
      }),
    ],
  }

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
      />
    </>
  )
}
