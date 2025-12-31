import { siteConfig } from "@/data/site.config"

const toAbsoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.websiteUrl}${path}`

export const toJsonLd = (data: Record<string, unknown>) =>
  JSON.stringify(data).replace(/</g, "\\u003c")

export const buildBusinessJsonLd = () => ({
  "@type": siteConfig.schemaType || "LocalBusiness",
  "@id": `${siteConfig.websiteUrl}#business`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.websiteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: [toAbsoluteUrl(siteConfig.ogImage)],
  logo: toAbsoluteUrl(siteConfig.logoUrl),
  priceRange: siteConfig.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    postalCode: siteConfig.zipCode,
    addressCountry: siteConfig.state,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      areaServed: "FR",
      availableLanguage: ["fr"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
})

export const buildWebSiteJsonLd = () => ({
  "@type": "WebSite",
  "@id": `${siteConfig.websiteUrl}#website`,
  url: siteConfig.websiteUrl,
  name: siteConfig.name,
})

type WebPageJsonLdInput = {
  title: string
  description: string
  url: string
  type?: string
}

export const buildWebPageJsonLd = ({
  title,
  description,
  url,
  type = "WebPage",
}: WebPageJsonLdInput) => ({
  "@type": type,
  "@id": `${url}#webpage`,
  url,
  name: title,
  description,
  isPartOf: { "@id": `${siteConfig.websiteUrl}#website` },
  about: { "@id": `${siteConfig.websiteUrl}#business` },
})

export const buildFaqJsonLd = (
  items: Array<{ question: string; answer: string }>
) => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
})
