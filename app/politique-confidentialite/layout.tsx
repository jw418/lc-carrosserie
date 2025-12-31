import type { Metadata } from "next"

import { siteConfig } from "@/data/site.config"
import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo"

const title = "Politique de confidentialite | LC Carrosserie"
const description =
  "Informations sur la collecte des donnees, l'usage des cookies et vos droits."
const pageUrl = `${siteConfig.websiteUrl}/politique-confidentialite`

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

export default function PrivacyLayout({
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
        type: "PrivacyPolicy",
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
