import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
  Zap,
} from "lucide-react";

import cities from "@/data/cities.json";
import { siteConfig } from "@/data/site.config";
import { ContactForm } from "@/components/ContactForm";
import {
  buildBusinessJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  toJsonLd,
} from "@/lib/seo";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MicroTypeForm } from "@/components/MicroTypeForm";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Truck } from "lucide-react";
// Types inchangés...
type CityPageParams = Promise<{ cities?: string }> | { cities?: string };
type CityPageProps = { params: CityPageParams };
type City = (typeof cities)[number];

const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

async function resolveSlug(params: CityPageParams) {
  const awaited = await params;
  return (awaited?.cities || "").toString().toLowerCase();
}

// export async function generateMetadata({
//   params,
// }: CityPageProps): Promise<Metadata> {
//   const slug = await resolveSlug(params);
//   const city = slug
//     ? (cities as City[]).find((item) => item.id === slug)
//     : undefined;

//   if (!city) {
//     return {
//       title: `Zone d'intervention | ${siteConfig.name}`,
//       description:
//         "Carrosserie et peinture auto. Contactez-nous pour verifier la prise en charge dans votre ville.",
//     };
//   }

//   const title = `Carrosserie ${city.name} | ${siteConfig.name}`;
//   const description = `Carrosserie et peinture auto a ${city.name}. Atelier a Eguilles, gestion assurance et vehicule de pret.`;
//   const pageUrl = `${siteConfig.websiteUrl}/${city.id}`;

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: pageUrl,
//     },
//     openGraph: {
//       title,
//       description,
//       url: pageUrl,
//       siteName: siteConfig.name,
//       locale: "fr_FR",
//       type: "article",
//       images: [
//         {
//           url: siteConfig.ogImage,
//           alt: siteConfig.name,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [siteConfig.ogImage],
//     },
//   };
// }

export default async function CityPage({ params }: CityPageProps) {
  const slug = await resolveSlug(params);
  const city = slug
    ? (cities as City[]).find((item) => item.id === slug)
    : undefined;

  if (!city) return notFound();

  const content = city.content;
  const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;
  const testimonials =
    slug === "marseille"
      ? [
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
        ]
      : [];
  const pageTitle = `Carrosserie ${city.name} | ${siteConfig.name}`;
  const pageDescription = `Carrosserie et peinture auto a ${city.name}. Atelier a Eguilles, gestion assurance et vehicule de pret.`;
  const pageUrl = `${siteConfig.websiteUrl}/${city.id}`;
  const faqItems =
    content?.faq?.map((item) => ({
      question: item.question,
      answer: item.answer,
    })) ?? [];
  const jsonLdGraph: Record<string, unknown>[] = [
    buildBusinessJsonLd(),
    buildWebPageJsonLd({
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
    }),
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `Carrosserie a ${city.name}`,
      description: pageDescription,
      serviceType: "Auto body repair",
      provider: { "@id": `${siteConfig.websiteUrl}#business` },
      areaServed: [city.name, city.department],
    },
  ];

  if (faqItems.length) {
    jsonLdGraph.push(buildFaqJsonLd(faqItems));
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph,
  };

  return (
    <>
      <div className="bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
        />{" "}
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -skew-x-12 translate-x-1/4 z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* LEFT COLUMN: CONTENT */}
              <div className="space-y-10">
                {/* Google Notes & Badge */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 rounded-full">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          className="fill-orange-600 text-orange-600"
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                      5/5 Google Maps
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Atelier Ouvert
                  </div>
                </div>

                {/* Title & Chapo */}
                <div className="space-y-6">
                  <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-950 leading-[0.9]">
                    Carrosserie à Marseille, <br />
                    <span className="text-orange-600 italic">
                      Sans vous déplacer.
                    </span>
                  </h1>
                  <p className="text-lg text-zinc-500 leading-relaxed font-light max-w-xl">
                    Que vous soyez dans le centre de Marseille ou à La
                    Valentine, il n’est pas toujours simple de se libérer pour
                    faire réparer votre voiture. Nous organisons la récupération
                    du véhicule, la gestion de votre dossier assurance et la
                    restitution, pour une prise en charge clé en main.
                  </p>
                </div>

                {/* Labels de réassurance */}
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {[
                    { icon: <ShieldCheck size={18} />, text: "0 € à avancer" },
                    {
                      icon: <Clock size={18} />,
                      text: "Véhicule de prêt gratuit",
                    },
                    {
                      icon: <Truck size={18} />,
                      text: "Récupération à Marseille",
                    },
                    {
                      icon: <CheckCircle2 size={18} />,
                      text: "Dossier géré de A à Z",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="text-orange-600 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-100 pb-1 w-full">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <Button
                    size="lg"
                    className="hover: cursor-pointer h-16 px-8 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white gap-3 group"
                  >
                    <Phone size={20} className="text-orange-600" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-mono text-[10px] uppercase opacity-60">
                        Appel d'urgence
                      </span>
                      <span className="font-heading text-lg font-black tracking-tight">
                        06 12 71 09 45
                      </span>
                    </div>
                  </Button>
                </div>
              </div>

              {/* RIGHT COLUMN: FORM */}
              <div className="lg:sticky lg:top-32">
                <MicroTypeForm
                  firstStep={{
                    question:
                      "Souhaitez-vous une prise en charge à Marseille ?",
                    yesLabel: "Oui, estimer mes travaux",
                  }}
                  secondStep={{
                    question: "Quel est votre besoin ?",
                    options: [
                      { value: "sinistre", label: "Sinistre (Assurance)" },
                      {
                        value: "esthetique",
                        label: "Remise en état esthétique",
                      },
                      { value: "loa", label: "Retour LOA / LLD" },
                      { value: "peinture", label: "Travaux de peinture" },
                      { value: "tolerie", label: "Réparation de tôlerie" },
                      {
                        value: "debosselage",
                        label: "Débosselage sans peinture",
                      },
                      { value: "autre", label: "Autre prestation" },
                    ],
                    selectLabel: "Type d'intervention",
                  }}
                  contactInfo={{
                    title: "Atelier Éguilles",
                    lines: ["Zone Artisanale", "13510 Éguilles"],
                    phone: "06 12 71 09 45",
                    email: "contact@carrosserie-eguilles.fr",
                  }}
                />

                <p className="mt-6 text-center font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Garantie constructeur préservée • Toutes assurances
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 1 : HERO ÉDITORIAL & INTRO */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {city.name} • Expertise de proximité
                </span>
                <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9]">
                  {content?.introTitle}
                </h1>
              </div>

              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light max-w-2xl">
                {content?.introParagraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Grille de points forts avec icônes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {content?.introBullets?.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50"
                  >
                    <div className="mt-1 h-5 w-5 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[11px] font-bold uppercase text-zinc-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-zinc-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EMPLACEMENT IMAGE 1 : FOCUS TECHNIQUE */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl">
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500" />
                {/* Remplacer par src="/img/votre-image.jpg" */}
                <div className="flex items-center justify-center h-full text-zinc-300 font-mono text-xs italic uppercase">
                  <img
                    src="/img/AxelleEtLudovic.jpg"
                    alt="Atelier LC Carrosserie"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-950 text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
                <p className="font-heading text-2xl font-black leading-none">
                  80+
                </p>
                <p className="font-mono text-[9px] uppercase tracking-widest mt-2 text-zinc-400">
                  Avis clients vérifiés sur le secteur
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 2 : LE PROCESSUS (FULL WIDTH DARK) */}
        <section className="bg-zinc-950 py-24 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-zinc-800 pb-12">
              <div className="max-w-2xl space-y-4">
                <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight italic">
                  {content?.processTitle}
                </h2>
                <p className="text-zinc-400 font-light text-lg">
                  Organisation optimisée pour les automobilistes de {city.name}.
                </p>
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] border border-zinc-800 px-6 py-4 rounded-full">
                <MapPin className="h-4 w-4 text-orange-600" />
                Logistique {city.name} incluse
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden rounded-3xl">
              {content?.processSteps?.map((step, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 p-10 space-y-6 hover:bg-zinc-900 transition-colors group"
                >
                  <span className="font-heading text-6xl font-black text-zinc-800 group-hover:text-orange-600 transition-colors leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs font-black uppercase tracking-widest text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* SECTION 3 : ÉTUDE DE CAS (NOUVELLE SECTION VISUELLE) */}
        {content?.example && (
          <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* EMPLACEMENT IMAGE 2 : AVANT/APRÈS OU DETAIL PEINTURE */}
                <div className="lg:col-span-6 order-2 lg:order-1 relative">
                  <div className="relative aspect-video rounded-3xl bg-zinc-100 overflow-hidden shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-mono text-[10px] uppercase">
                      Visuel Étude de Cas
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-10 -right-10 h-40 w-40 border-r-2 border-t-2 border-zinc-100 rounded-tr-[4rem] -z-10" />
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Zap size={16} fill="currentColor" />
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                        Focus Réalisation
                      </span>
                    </div>
                    <h2 className="font-heading text-4xl font-black uppercase tracking-tighter">
                      {content.exampleTitle}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        label: "Problématique",
                        text: content.example.situation,
                      },
                      {
                        label: "Solution Logistique",
                        text: content.example.contact,
                      },
                      {
                        label: "Intervention",
                        text: content.example.organization,
                      },
                      { label: "Résultat Final", text: content.example.result },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="group border-l-2 border-zinc-100 pl-6 py-1 hover:border-orange-600 transition-colors"
                      >
                        <p className="font-mono text-[10px] font-black uppercase text-zinc-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-zinc-700 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* TESTIMONIALS & FAQ - Sections existantes conservées mais stylisées */}
        <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
          {/* Témoignages Style Grid Moderne */}
          <ReviewsSection
            title={`Avis clients a ${city.name}`}
            reviews={testimonials.map((review) => ({
              name: review.name,
              location: review.location,
              text: review.text,
            }))}
            className="py-0 bg-transparent border-0"
            containerClassName="px-0"
          />

          {/* FAQ - Accordéon Minimaliste */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl font-black uppercase text-center">
              {content?.faqTitle}
            </h2>
            <div className="space-y-3">
              {content?.faq?.map((item) => (
                <details
                  key={item.question}
                  className="group border border-zinc-100 rounded-2xl overflow-hidden transition-all hover:border-zinc-200"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer bg-white list-none">
                    <span className="font-bold text-sm text-zinc-900">
                      {item.question}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-orange-600 group-open:rotate-90 transition-transform"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed font-light">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CONTACT SECTION (CONVERSION FOCUS) */}
          <div
            id="contact-form"
            className="relative p-1 lg:p-12 rounded-[2.5rem] bg-zinc-950 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,#ea580c_0%,transparent_50%)]" />

            <div className="relative bg-white rounded-[2rem] p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase leading-none tracking-tighter text-zinc-950">
                  Prêt à retrouver <br />
                  <span className="text-orange-600 italic">
                    votre véhicule neuf ?
                  </span>
                </h2>
                <p className="text-zinc-600 text-lg font-light leading-relaxed">
                  Indiquez que vous êtes à{" "}
                  <span className="font-bold text-zinc-950">{city.name}</span>,
                  joignez vos photos. Nous gérons le reste.
                </p>

                <div className="space-y-4">
                  {[
                    "Dossier assurance géré à 100%",
                    "Véhicule de prêt premium",
                    "Restitution à domicile sur " + city.name,
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 font-mono text-[10px] font-black uppercase tracking-widest text-zinc-900"
                    >
                      <CheckCircle2 size={14} className="text-orange-600" />
                      {t}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <a
                    href={phoneLink}
                    className="inline-flex items-center gap-4 bg-zinc-950 text-white px-8 py-4 rounded-full font-mono text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-colors group"
                  >
                    <Phone size={14} />
                    Appeler pour une prise en charge
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 shadow-inner">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import {
//   ArrowRight,
//   Camera,
//   CheckCircle2,
//   MapPin,
//   Phone,
//   Star,
// } from "lucide-react";

// import cities from "@/data/cities.json";
// import { siteConfig } from "@/data/site.config";
// import { ContactForm } from "@/components/ContactForm";

// type CityPageParams = Promise<{ cities?: string }> | { cities?: string };

// type CityPageProps = {
//   params: CityPageParams;
// };

// type City = (typeof cities)[number];

// const cityPhotos = [
//   {
//     title: "Pare choc arrière repris",
//     location: "Marseille 8e",
//     description: "Redressage, préparation et peinture constructeur.",
//   },
//   {
//     title: "Aile et portière ré-alignées",
//     location: "La Valentine",
//     description: "Remplacement des agrafes, apprêt et vernis.",
//   },
//   {
//     title: "Réparation choc parking",
//     location: "Euroméditerranée",
//     description: "DSP et retouche peinture localisée.",
//   },
// ];

// const marseilleReviews = [
//   {
//     name: "Lamia R.",
//     location: "Marseille 13008",
//     text: "Ils ont tout géré avec l'assurance, j'ai eu un véhicule de prêt et la voiture est revenue impeccable.",
//   },
//   {
//     name: "Hugo S.",
//     location: "Boulevard Rabatau",
//     text: "Réparation rapide et aucune avance de frais. Je n'ai pas eu besoin de me déplacer plusieurs fois.",
//   },
//   {
//     name: "Claire P.",
//     location: "Marseille 13005",
//     text: "Très pro : prise de photos, explications claires sur la franchise et restitution nickel.",
//   },
// ];

// const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

// async function resolveSlug(params: CityPageParams) {
//   const awaited = await params;
//   return (awaited?.cities || "").toString().toLowerCase();
// }

// export async function generateMetadata({
//   params,
// }: CityPageProps): Promise<Metadata> {
//   const slug = await resolveSlug(params);
//   const city = slug
//     ? (cities as City[]).find((item) => item.id === slug)
//     : undefined;

//   if (!city) {
//     return {
//       title: "Zone d'intervention - LC Carrosserie",
//       description:
//         "Carrosserie et peinture automobile. Contactez-nous pour vérifier la prise en charge dans votre ville.",
//     };
//   }

//   return {
//     title: city.seo?.title || `Carrosserie ${city.name}`,
//     description: city.seo?.description || city.info,
//   };
// }

// export default async function CityPage({ params }: CityPageProps) {
//   const slug = await resolveSlug(params);
//   const city = slug
//     ? (cities as City[]).find((item) => item.id === slug)
//     : undefined;

//   if (!city) {
//     return notFound();
//   }

//   const hero = city.hero;
//   const content = city.content;
//   const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;
//   const testimonials = slug === "marseille" ? marseilleReviews : [];
//   const photos = slug === "marseille" ? cityPhotos : [];

//   return (
//     <div className="bg-white text-gray-900">
//       <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">{content?.introTitle}</h2>
//             <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
//               {city.name} • Atelier à Éguilles
//             </p>
//           </div>

//           <div className="space-y-4 text-lg leading-relaxed text-gray-700">
//             {content?.introParagraphs?.map((paragraph) => (
//               <p key={paragraph}>{paragraph}</p>
//             ))}
//           </div>

//           {content?.introBullets && (
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               {content.introBullets.map((item) => (
//                 <div
//                   key={item.title}
//                   className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     {item.title}
//                   </p>
//                   <p className="mt-2 text-sm text-gray-700 leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {content?.servicesLink && (
//             <a
//               href={content.servicesLink.href}
//               className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-2 underline-offset-4 transition hover:text-gray-600"
//             >
//               {content.servicesLink.label}
//               <ArrowRight className="h-4 w-4" />
//             </a>
//           )}
//         </section>

//         <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-50 p-8">
//           <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="text-3xl font-bold">{content?.processTitle}</h2>
//               <p className="text-gray-600">
//                 Organisation pensée pour limiter vos déplacements à Marseille.
//               </p>
//             </div>
//             <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200">
//               <MapPin className="h-4 w-4" />
//               Récupération et restitution sur Marseille
//             </div>
//           </div>

//           {content?.processSteps && (
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               {content.processSteps.map((step, index) => (
//                 <div
//                   key={step.title}
//                   className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
//                 >
//                   <span className="absolute right-4 top-4 text-5xl font-black text-gray-100">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <div className="relative z-10 space-y-2">
//                     <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                       {step.title}
//                     </p>
//                     <p className="text-sm leading-relaxed text-gray-700">
//                       {step.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         {content?.example && (
//           <section className="space-y-6">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold">{content.exampleTitle}</h2>
//               <p className="text-gray-600">
//                 Un parcours typique, du premier appel à la restitution.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//               {[
//                 { label: "Situation", text: content.example.situation },
//                 { label: "Prise de contact", text: content.example.contact },
//                 {
//                   label: "Organisation et réparation",
//                   text: content.example.organization,
//                 },
//                 { label: "Résultat", text: content.example.result },
//               ].map((block) => (
//                 <div
//                   key={block.label}
//                   className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
//                 >
//                   <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     {block.label}
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-gray-700">
//                     {block.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {testimonials.length > 0 && (
//           <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-900 p-8 text-white">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold">
//                 {content?.testimonialsTitle}
//               </h2>
//               <p className="text-zinc-400">
//                 Exemples de retours après réparation depuis Marseille.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//               {testimonials.map((review) => (
//                 <div
//                   key={review.name}
//                   className="flex flex-col gap-3 rounded-2xl border border-zinc-700 bg-zinc-800/60 p-6"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-700 text-sm font-bold">
//                       {review.name.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold">{review.name}</p>
//                       <p className="text-xs text-zinc-400">{review.location}</p>
//                     </div>
//                   </div>
//                   <p className="text-sm leading-relaxed text-zinc-200">
//                     “{review.text}”
//                   </p>
//                   <div className="flex items-center gap-1 text-amber-400">
//                     {[...Array(5)].map((_, index) => (
//                       <Star key={index} className="h-4 w-4 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {photos.length > 0 && (
//           <section className="space-y-4">
//             <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
//               <Camera className="h-4 w-4" />
//               Travaux récents pour des clients marseillais
//             </div>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//               {photos.map((photo) => (
//                 <div
//                   key={photo.title}
//                   className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white shadow-md"
//                 >
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_40%)]" />
//                   <div className="relative space-y-2">
//                     <p className="text-xs font-semibold uppercase tracking-wide text-gray-300">
//                       {photo.location}
//                     </p>
//                     <p className="text-lg font-semibold leading-tight">
//                       {photo.title}
//                     </p>
//                     <p className="text-sm text-gray-200">{photo.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {content?.finalCta && (
//           <section className="rounded-3xl border border-gray-200 bg-zinc-50 p-8">
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//               <div className="md:col-span-2 space-y-3">
//                 <h2 className="text-3xl font-bold">{content.finalCta.title}</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {content.finalCta.text}
//                 </p>
//                 <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-800">
//                   <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                     Récupération à Marseille
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                     Véhicule de prêt disponible
//                   </span>
//                   <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                     Dossier assurance géré
//                   </span>
//                 </div>
//                 {content.finalCta.aixLink && (
//                   <a
//                     href={content.finalCta.aixLink.href}
//                     className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline decoration-2 underline-offset-4 transition hover:text-gray-600"
//                   >
//                     Découvrez aussi {content.finalCta.aixLink.label}
//                     <ArrowRight className="h-4 w-4" />
//                   </a>
//                 )}
//               </div>
//               <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
//                 <p className="text-sm font-semibold text-gray-700">
//                   Un conseiller vous rappelle pour caler la logistique.
//                 </p>
//                 <a
//                   href={phoneLink}
//                   className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   <Phone className="mr-2 h-4 w-4" />
//                   Appeler maintenant
//                 </a>
//                 <a
//                   href="#contact-form"
//                   className="inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
//                 >
//                   <ArrowRight className="mr-2 h-4 w-4" />
//                   Envoyer une demande
//                 </a>
//               </div>
//             </div>
//           </section>
//         )}

//         {content?.faq && (
//           <section className="space-y-6" id="faq">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold">{content.faqTitle}</h2>
//               <p className="text-gray-600">
//                 Libre choix du réparateur, dossier assurance et logistique
//                 depuis Marseille.
//               </p>
//             </div>
//             <div className="space-y-4">
//               {content.faq.map((item) => (
//                 <details
//                   key={item.question}
//                   className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
//                 >
//                   <summary className="flex cursor-pointer items-start justify-between gap-4 p-4 text-left text-sm font-semibold text-gray-900 transition group-open:bg-gray-50">
//                     <span>{item.question}</span>
//                     <ArrowRight className="mt-1 h-4 w-4 transition group-open:rotate-90" />
//                   </summary>
//                   <div className="border-t border-gray-100 bg-gray-50/60 p-4 text-sm leading-relaxed text-gray-700">
//                     {item.answer}
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </section>
//         )}

//         <section
//           className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
//           id="contact-form"
//         >
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="space-y-3">
//               <h2 className="text-2xl font-bold">Envoyez vos photos</h2>
//               <p className="text-gray-700">
//                 Indiquez que vous êtes à {city.name}, joignez quelques images et
//                 vos disponibilités. Nous revenons vers vous rapidement pour
//                 planifier la récupération ou un rendez-vous atelier.
//               </p>
//               <div className="space-y-2 text-sm text-gray-700">
//                 <p className="flex items-center gap-2">
//                   <CheckCircle2 className="h-4 w-4 text-emerald-600" />
//                   Dossier assurance préparé dès le premier échange.
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <CheckCircle2 className="h-4 w-4 text-emerald-600" />
//                   Véhicule de prêt réservé si nécessaire.
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <CheckCircle2 className="h-4 w-4 text-emerald-600" />
//                   Restitution possible à Marseille ou à l’atelier.
//                 </p>
//               </div>
//             </div>
//             <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4">
//               <ContactForm />
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
