import type { Metadata } from "next";
import { siteConfig } from "@/data/site.config";
import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo";
import {
  Scale,
  ShieldCheck,
  Globe,
  Building2,
  UserCircle,
  MessageSquare,
} from "lucide-react";

const title = "Mentions Légales & Médiation | LC Carrosserie";
const description =
  "Informations légales de LC Carrosserie : éditeur, hébergeur, gestion des litiges et médiation de la consommation.";
const pageUrl = `${siteConfig.websiteUrl}/mentions-legales`;

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
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function MentionsLegalesPage() {
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
  };

  const {
    legalName,
    tradeName,
    companyType,
    owner,
    publisher,
    full_address,
    streetAddress,
    zipCode,
    city,
    phoneFr,
    email,
    websiteUrl,
    siren,
    siret,
    tvaNumber,
    rcsNumber,
    hostName,
    hostWebsite,
    hostAddress,
  } = siteConfig;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="bg-zinc-950 py-16 mb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-6">
            <Scale size={14} /> Compliance & Transparence
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tighter">
            Mentions <span className="text-orange-600">Légales</span>
          </h1>
          <p className="mt-4 text-zinc-400 font-light max-w-2xl mx-auto italic">
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 (L.C.E.N.)
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 grid gap-8">
        {/* 1. ÉDITEUR DU SITE */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-6 text-orange-600">
            <Building2 size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight text-zinc-950">
              Éditeur du site
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-zinc-600 leading-relaxed text-sm">
            <div>
              <p className="font-bold text-zinc-950 mb-1">Raison Sociale</p>
              <p>
                {legalName} {tradeName ? `(${tradeName})` : ""}
              </p>
              <p className="mt-2 font-bold text-zinc-950 mb-1">
                Forme Juridique
              </p>
              <p>{companyType}</p>
            </div>
            <div>
              <p className="font-bold text-zinc-950 mb-1">Siège Social</p>
              <p>
                {streetAddress}
                <br />
                {zipCode} {city}
              </p>
              <p className="mt-2 font-bold text-zinc-950 mb-1">Contact</p>
              <p>
                {phoneFr} •{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-orange-600 hover:underline"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 2. IDENTIFICATION & RCS */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-orange-600">
            <ShieldCheck size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight text-zinc-950">
              Identification Entreprise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-50 p-4 rounded-xl">
              <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">
                Siren
              </p>
              <p className="text-sm font-bold text-zinc-800 tracking-wider">
                {siren}
              </p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-xl">
              <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">
                Siret
              </p>
              <p className="text-sm font-bold text-zinc-800 tracking-wider">
                {siret}
              </p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-xl">
              <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">
                N° TVA
              </p>
              <p className="text-sm font-bold text-zinc-800 tracking-wider">
                {tvaNumber}
              </p>
            </div>
            <div className="bg-zinc-50 p-4 rounded-xl">
              <p className="text-[10px] font-mono uppercase text-zinc-400 mb-1">
                RCS
              </p>
              <p className="text-sm font-bold text-zinc-800 tracking-wider">
                {rcsNumber}
              </p>
            </div>
          </div>
        </section>

        {/* 3. MÉDIATION DE LA CONSOMMATION (Document joint) */}
        <section className="bg-zinc-950 p-8 rounded-2xl text-white shadow-xl ring-1 ring-orange-600/50">
          <div className="flex items-center gap-3 mb-6 text-orange-500">
            <MessageSquare size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight">
              Règlement des litiges
            </h2>
          </div>
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-light">
            <p className="text-white font-medium">
              Conformément à l’article L. 612-1 du Code de la consommation, en
              cas d&apos;insatisfaction et en second recours, le consommateur a
              la possibilité de se rapprocher du Médiateur de la consommation.
            </p>
            <p>
              Tout professionnel doit proposer à ses clients la possibilité de
              recourir gratuitement à un médiateur. En cas de litige
              n&apos;ayant pu être réglé dans le cadre d&apos;une réclamation
              préalable auprès de nos services, vous pouvez saisir le CM2C :
            </p>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl inline-block">
              <p className="font-bold text-orange-500 mb-1 italic">
                Coordonnées du Médiateur :
              </p>
              <p>
                CM2C (Centre de la Médiation de la Consommation de Conciliateurs
                de Justice)
              </p>
              <p>
                Site Internet :{" "}
                <a
                  href="https://www.cm2c.net"
                  target="_blank"
                  className="text-white underline hover:text-orange-400"
                >
                  www.cm2c.net
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 4. HÉBERGEMENT */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-orange-600">
            <Globe size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight text-zinc-950">
              Hébergement
            </h2>
          </div>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Ce site est hébergé par{" "}
            <span className="font-bold text-zinc-950">{hostName}</span>.
            <br />
            Adresse : {hostAddress}
            <br />
            Site Web :{" "}
            <a href={hostWebsite} className="text-orange-600 hover:underline">
              {hostWebsite}
            </a>
          </p>
        </section>

        {/* 5. PROPRIÉTÉ INTELLECTUELLE & DONNÉES */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-lg font-heading font-black uppercase text-zinc-950 mb-4 tracking-tight">
              Propriété Intellectuelle
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              L&apos;ensemble de ce site (structure, textes, logos, images)
              relève de la législation française et internationale sur le droit
              d&apos;auteur. Toute reproduction partielle ou totale est
              strictement interdite sans autorisation écrite de {legalName}.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-lg font-heading font-black uppercase text-zinc-950 mb-4 tracking-tight">
              Données Personnelles
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Les informations recueillies via nos formulaires sont destinées
              exclusivement à LC Carrosserie. Conformément à la loi «
              Informatique et Libertés », vous disposez d&apos;un droit
              d&apos;accès, de rectification et d&apos;opposition.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
// import type { Metadata } from "next";

// import { siteConfig } from "@/data/site.config";
// import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo";

// const title = "Mentions legales | LC Carrosserie";
// const description =
//   "Informations legales de LC Carrosserie : editeur, hebergeur, contact et coordonnees.";
// const pageUrl = `${siteConfig.websiteUrl}/mentions-legales`;

// export const metadata: Metadata = {
//   title,
//   description,
//   alternates: {
//     canonical: pageUrl,
//   },
//   openGraph: {
//     title,
//     description,
//     url: pageUrl,
//     siteName: siteConfig.name,
//     locale: "fr_FR",
//     type: "article",
//     images: [
//       {
//         url: siteConfig.ogImage,
//         alt: siteConfig.name,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title,
//     description,
//     images: [siteConfig.ogImage],
//   },
// };

// export default function MentionsLegalesPage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       buildBusinessJsonLd(),
//       buildWebPageJsonLd({
//         title,
//         description,
//         url: pageUrl,
//       }),
//     ],
//   };
//   const {
//     legalName,
//     tradeName,
//     companyType,
//     owner,
//     publisher,
//     full_address,
//     streetAddress,
//     zipCode,
//     city,
//     phoneFr,
//     email,
//     websiteUrl,
//     siren,
//     siret,
//     tvaNumber,
//     rcsNumber,
//     hostName,
//     hostWebsite,
//     hostAddress,
//   } = siteConfig;

//   return (
//     <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
//       />
//       <header className="space-y-2">
//         <p className="text-sm font-medium text-gray-500">Informations légales</p>
//         <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
//       </header>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
//         <p className="text-gray-700">
//           {legalName} ({tradeName}) - {companyType}
//           <br />
//           Adresse : {streetAddress}, {zipCode} {city}
//           <br />
//           Téléphone : {phoneFr}
//           <br />
//           Email : <a className="underline" href={`mailto:${email}`}>{email}</a>
//         </p>
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Responsables</h2>
//         <p className="text-gray-700">
//           Propriétaire / Directeur de publication : {owner}
//           <br />
//           Responsable éditorial : {publisher}
//         </p>
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Coordonnées de l&apos;entreprise</h2>
//         <p className="text-gray-700">
//           Adresse principale : {full_address}
//           <br />
//           SIREN : {siren} / SIRET : {siret}
//           <br />
//           TVA intracommunautaire : {tvaNumber}
//           <br />
//           RCS : {rcsNumber}
//         </p>
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Hébergement</h2>
//         <p className="text-gray-700">
//           Hébergeur : {hostName}
//           <br />
//           Adresse : {hostAddress}
//           <br />
//           Site : <a className="underline" href={hostWebsite} target="_blank" rel="noreferrer">{hostWebsite}</a>
//         </p>
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Propriété intellectuelle</h2>
//         <p className="text-gray-700">
//           Le contenu de ce site ({websiteUrl}) est la propriété de {legalName}, sauf mention contraire.
//           Toute reproduction ou utilisation non autorisée est interdite.
//         </p>
//       </section>

//       <section className="space-y-2">
//         <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
//         <p className="text-gray-700">
//           Pour toute question, vous pouvez nous écrire à{" "}
//           <a className="underline" href={`mailto:${email}`}>{email}</a> ou nous appeler au {phoneFr}.
//         </p>
//       </section>
//     </div>
//   );
// }
