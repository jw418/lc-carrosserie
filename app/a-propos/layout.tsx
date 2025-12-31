import type { Metadata } from "next"

import { siteConfig } from "@/data/site.config"
import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo"

const title = "A propos | LC Carrosserie"
const description =
  "Decouvrez l'atelier LC Carrosserie a Eguilles, notre equipe et nos valeurs."
const pageUrl = `${siteConfig.websiteUrl}/a-propos`

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

export default function AboutLayout({
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
        type: "AboutPage",
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
