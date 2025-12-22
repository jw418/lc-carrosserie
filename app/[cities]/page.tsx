import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import cities from "@/data/cities.json";
import { siteConfig } from "@/data/site.config";
import { ContactForm } from "@/components/ContactForm";

type CityPageParams = Promise<{ cities?: string }> | { cities?: string };

type CityPageProps = {
  params: CityPageParams;
};

type City = (typeof cities)[number];

const cityPhotos = [
  {
    title: "Pare choc arrière repris",
    location: "Marseille 8e",
    description: "Redressage, préparation et peinture constructeur.",
  },
  {
    title: "Aile et portière ré-alignées",
    location: "La Valentine",
    description: "Remplacement des agrafes, apprêt et vernis.",
  },
  {
    title: "Réparation choc parking",
    location: "Euroméditerranée",
    description: "DSP et retouche peinture localisée.",
  },
];

const marseilleReviews = [
  {
    name: "Lamia R.",
    location: "Marseille 13008",
    text: "Ils ont tout géré avec l'assurance, j'ai eu un véhicule de prêt et la voiture est revenue impeccable.",
  },
  {
    name: "Hugo S.",
    location: "Boulevard Rabatau",
    text: "Réparation rapide et aucune avance de frais. Je n'ai pas eu besoin de me déplacer plusieurs fois.",
  },
  {
    name: "Claire P.",
    location: "Marseille 13005",
    text: "Très pro : prise de photos, explications claires sur la franchise et restitution nickel.",
  },
];

const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

async function resolveSlug(params: CityPageParams) {
  const awaited = await params;
  return (awaited?.cities || "").toString().toLowerCase();
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const slug = await resolveSlug(params);
  const city = slug
    ? (cities as City[]).find((item) => item.id === slug)
    : undefined;

  if (!city) {
    return {
      title: "Zone d'intervention - LC Carrosserie",
      description:
        "Carrosserie et peinture automobile. Contactez-nous pour vérifier la prise en charge dans votre ville.",
    };
  }

  return {
    title: city.seo?.title || `Carrosserie ${city.name}`,
    description: city.seo?.description || city.info,
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const slug = await resolveSlug(params);
  const city = slug
    ? (cities as City[]).find((item) => item.id === slug)
    : undefined;

  if (!city) {
    return notFound();
  }

  const hero = city.hero;
  const content = city.content;
  const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;
  const testimonials = slug === "marseille" ? marseilleReviews : [];
  const photos = slug === "marseille" ? cityPhotos : [];

  return (
    <div className="bg-white text-gray-900">
      <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{content?.introTitle}</h2>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {city.name} • Atelier à Éguilles
            </p>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            {content?.introParagraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {content?.introBullets && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.introBullets.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {content?.servicesLink && (
            <a
              href={content.servicesLink.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-2 underline-offset-4 transition hover:text-gray-600"
            >
              {content.servicesLink.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </section>

        <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-50 p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold">{content?.processTitle}</h2>
              <p className="text-gray-600">
                Organisation pensée pour limiter vos déplacements à Marseille.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200">
              <MapPin className="h-4 w-4" />
              Récupération et restitution sur Marseille
            </div>
          </div>

          {content?.processSteps && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="absolute right-4 top-4 text-5xl font-black text-gray-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {step.title}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {content?.example && (
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{content.exampleTitle}</h2>
              <p className="text-gray-600">
                Un parcours typique, du premier appel à la restitution.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { label: "Situation", text: content.example.situation },
                { label: "Prise de contact", text: content.example.contact },
                {
                  label: "Organisation et réparation",
                  text: content.example.organization,
                },
                { label: "Résultat", text: content.example.result },
              ].map((block) => (
                <div
                  key={block.label}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {block.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {testimonials.length > 0 && (
          <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-900 p-8 text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                {content?.testimonialsTitle}
              </h2>
              <p className="text-zinc-400">
                Exemples de retours après réparation depuis Marseille.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col gap-3 rounded-2xl border border-zinc-700 bg-zinc-800/60 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-sm font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-zinc-400">{review.location}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-200">
                    “{review.text}”
                  </p>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {photos.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
              <Camera className="h-4 w-4" />
              Travaux récents pour des clients marseillais
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {photos.map((photo) => (
                <div
                  key={photo.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white shadow-md"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_40%)]" />
                  <div className="relative space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                      {photo.location}
                    </p>
                    <p className="text-lg font-semibold leading-tight">
                      {photo.title}
                    </p>
                    <p className="text-sm text-gray-200">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {content?.finalCta && (
          <section className="rounded-3xl border border-gray-200 bg-zinc-50 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-3xl font-bold">{content.finalCta.title}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {content.finalCta.text}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                    Récupération à Marseille
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                    Véhicule de prêt disponible
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                    Dossier assurance géré
                  </span>
                </div>
                {content.finalCta.aixLink && (
                  <a
                    href={content.finalCta.aixLink.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-2 underline-offset-4 transition hover:text-gray-600"
                  >
                    Découvrez aussi {content.finalCta.aixLink.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-700">
                  Un conseiller vous rappelle pour caler la logistique.
                </p>
                <a
                  href={phoneLink}
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler maintenant
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Envoyer une demande
                </a>
              </div>
            </div>
          </section>
        )}

        {content?.faq && (
          <section className="space-y-6" id="faq">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{content.faqTitle}</h2>
              <p className="text-gray-600">
                Libre choix du réparateur, dossier assurance et logistique
                depuis Marseille.
              </p>
            </div>
            <div className="space-y-4">
              {content.faq.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 p-4 text-left text-sm font-semibold text-gray-900 transition group-open:bg-gray-50">
                    <span>{item.question}</span>
                    <ArrowRight className="mt-1 h-4 w-4 transition group-open:rotate-90" />
                  </summary>
                  <div className="border-t border-gray-100 bg-gray-50/60 p-4 text-sm leading-relaxed text-gray-700">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        <section
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          id="contact-form"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Envoyez vos photos</h2>
              <p className="text-gray-700">
                Indiquez que vous êtes à {city.name}, joignez quelques images et
                vos disponibilités. Nous revenons vers vous rapidement pour
                planifier la récupération ou un rendez-vous atelier.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Dossier assurance préparé dès le premier échange.
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Véhicule de prêt réservé si nécessaire.
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Restitution possible à Marseille ou à l’atelier.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
