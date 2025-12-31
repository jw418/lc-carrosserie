import { Faq } from "@/components/Faq"
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed"
import { ImageCarousel } from "@/components/ImageCarousel"
import { MicroTypeForm } from "@/components/MicroTypeForm"
import { siteConfig } from "@/data/site.config"

const serviceImages = [
  "/img/services/covering.png",
  "/img/services/jantes.png",
  "/img/services/peinture.png",
  "/img/services/restitution.png",
  "/img/services/services.png",
  "/img/services/tolerie.png",
]

const faqItems = [
  {
    question: "Proposez-vous un vehicule de pret ?",
    answer: "Oui, selon disponibilite et type d'intervention.",
  },
  {
    question: "Faut-il avancer des frais ?",
    answer: "Non, la prise en charge peut se faire sans avance.",
  },
  {
    question: "Quel est le delai moyen ?",
    answer: "Cela depend des pieces et de l'accord assurance.",
  },
]

const microChoices = [
  { value: "tolerie", label: "Reparation tolerie" },
  { value: "peinture", label: "Peinture carrosserie" },
  { value: "jantes", label: "Reparation jantes" },
]

export default function TestPage() {
  const mapQuery = encodeURIComponent(siteConfig.full_address)
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          Page de test composants
        </h1>
        <GoogleMapEmbed
          mapSrc={mapSrc}
          mapLink={siteConfig.mapLink}
          fallbackImageSrc="/img/services/services.png"
          fallbackAlt="Vue aerienne simplifiee de l'atelier"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ</h2>
        <Faq items={faqItems} allowMultiple />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Micro Typeform
        </h2>
        <MicroTypeForm
          firstStep={{
            question: "Avez-vous deja contacte votre assurance ?",
            yesLabel: "Oui",
          }}
          secondStep={{
            question: "Quel type d'intervention souhaitez-vous ?",
            options: microChoices,
          }}
          contactInfo={{
            title: "Contact atelier",
            lines: [siteConfig.full_address],
            phone: siteConfig.phoneFr ?? siteConfig.phone,
            email: siteConfig.email,
          }}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Carousel</h2>
        <ImageCarousel
          items={serviceImages.map((src) => ({
            src,
            title: "Intervention atelier",
          }))}
        />
      </section>
    </div>
  )
}
