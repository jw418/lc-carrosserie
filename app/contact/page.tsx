import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { siteConfig } from "@/data/site.config";
import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const title = "Contact & Devis Gratuit | LC Carrosserie Éguilles";
const description =
  "Besoin d'un devis carrosserie ou peinture ? Contactez LC Carrosserie à Éguilles. Expertise assurance, sans avance de frais et véhicule de prêt.";
const pageUrl = `${siteConfig.websiteUrl}/contact`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
};

export default function ContactPage() {
  const { phone, email, full_address, openingHours } = siteConfig;
  const mapQuery = encodeURIComponent(full_address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <main className="relative min-h-screen bg-background pt-32 pb-20 overflow-hidden">
      {/* Background Decoratif (Lignes de structure) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-border max-w-7xl" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-border" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* --- COLONNE GAUCHE : INFOS --- */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                  Ouvert : 24h/24, 7j/7
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-foreground">
                Parlons de votre <span className="text-primary">Projet.</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-md">
                Un choc, une rayure ou un sinistre ? Notre équipe d'experts à
                Éguilles analyse vos dégâts et vous propose une solution clé en
                main, avec ou sans assurance.
              </p>
            </header>

            {/* Cartes de contact rapides */}
            <div className="grid gap-4">
              <a
                href={`tel:${phone}`}
                className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                    Ligne directe
                  </p>
                  <p className="font-bold text-lg leading-none mt-1">{phone}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="p-3 rounded-lg bg-secondary text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                    Localisation
                  </p>
                  <p className="font-medium text-base mt-1 leading-snug">
                    {full_address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="p-3 rounded-lg bg-secondary text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                    Horaires d'accueil
                  </p>
                  <p className="text-sm mt-1">{openingHours.weekdays}</p>
                </div>
              </div>
            </div>

            <GoogleMapEmbed
              mapSrc={mapSrc}
              mapLink={siteConfig.mapLink}
              fallbackImageSrc="/img/map.png"
              fallbackAlt="Vue aerienne simplifiee de l'atelier"
            />

            {/* Reassurance Sinistre */}
            <div className="p-6 rounded-2xl bg-zinc-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck size={24} />
                <span className="font-heading uppercase font-bold tracking-tight text-xl">
                  Liberté de choix
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <strong className="text-white">
                  Rappel Loi Article L211-5-1 du Code des assurances :
                </strong>{" "}
                Vous êtes libre de choisir votre carrossier. Nous gérons le
                dossier avec toutes les assurances, sans que vous n'ayez
                d'avance de frais à prévoir.
              </p>
            </div>
          </div>

          {/* --- COLONNE DROITE : LE FORMULAIRE --- */}
          <div className="lg:col-span-7">
            <div className="mb-6 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-4 shadow-sm">
              <p className="font-heading text-base md:text-lg font-black uppercase tracking-tight text-primary">
                Service de récupération et restitution de véhicule gratuit et à
                domicile
              </p>
            </div>
            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Accent décoratif orange sur le formulaire */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />

              <div className="mb-8 space-y-3">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tighter italic">
                  Demande de devis express
                </h2>
                <div className="h-1 w-12 bg-primary mt-2" />
              </div>

              {/* Ici, ton composant ContactForm devra être mis à jour avec le select */}
              <ContactForm />

              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Réponse sous 24h maximum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION ACCÈS / FAQ (Design Grille Technique) --- */}
      <section className="max-w-7xl mx-auto px-6 mt-32 border-t border-border pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-black uppercase tracking-tight">
              Accès Aix-en-Provence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              À seulement 15 min via la{" "}
              <span className="text-foreground font-medium">D9</span>. Parking
              client gratuit directement devant l'atelier pour une expertise
              rapide.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-black uppercase tracking-tight">
              Accès Marseille
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              35 min par l'
              <span className="text-foreground font-medium">A51</span> (Sortie
              Éguilles). Idéalement situé dans la zone artisanale des
              Jalassières.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-black uppercase tracking-tight">
              Besoin de photos ?
            </h3>
            <p className="text-muted-foreground leading-relaxed italic">
              Pour un devis précis, n'oubliez pas d'envoyer des photos globales
              et détaillées via le formulaire.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// import type { Metadata } from "next";

// import { ContactForm } from "@/components/ContactForm";
// import { siteConfig } from "@/data/site.config";
// import { buildBusinessJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo";

// const title = "Contact carrosserie | LC Carrosserie";
// const description =
//   "Contactez notre atelier a Eguilles pour un devis carrosserie ou une prise en charge assurance.";
// const pageUrl = `${siteConfig.websiteUrl}/contact`;

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
//     type: "website",
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

// export default function ContactPage() {
//   const { phone, email, full_address, openingHours } = siteConfig;
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       buildBusinessJsonLd(),
//       {
//         ...buildWebPageJsonLd({
//           title,
//           description,
//           url: pageUrl,
//           type: "ContactPage",
//         }),
//         mainEntity: {
//           "@type": "ContactPoint",
//           telephone: phone,
//           email,
//           contactType: "customer service",
//           areaServed: "FR",
//           availableLanguage: ["fr"],
//         },
//       },
//     ],
//   };

//   return (
//     <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
//       />
//       <header className="space-y-3">
//         <p className="text-sm font-medium text-gray-500">Contact</p>
//         <h1 className="text-3xl font-semibold text-gray-900">
//           Contactez notre carrosserie
//         </h1>
//         <p className="max-w-3xl text-gray-700 leading-relaxed">
//           Un choc, une aile a reprendre ou un devis peinture ? Envoyez nous les
//           infos essentielles et nous revenons vers vous rapidement pour une
//           prise en charge ou un rendez-vous.
//         </p>
//       </header>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">
//           Demander un devis ou une prise en charge
//         </h2>
//         <p className="text-gray-700">
//           Remplissez le formulaire ci-dessous avec votre vehicule, les degats et
//           vos disponibilites. Nous repondons au plus vite.
//         </p>
//         <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//           <ContactForm />
//         </div>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Nos coordonnees</h2>
//         <div className="grid gap-4 sm:grid-cols-3">
//           <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
//             <p className="text-sm font-semibold text-gray-900">Telephone</p>
//             <a className="mt-1 block text-gray-700" href={`tel:${phone}`}>
//               {phone}
//             </a>
//           </div>
//           <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
//             <p className="text-sm font-semibold text-gray-900">Email</p>
//             <a className="mt-1 block text-gray-700" href={`mailto:${email}`}>
//               {email}
//             </a>
//           </div>
//           <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
//             <p className="text-sm font-semibold text-gray-900">Adresse</p>
//             <p className="mt-1 text-gray-700">{full_address}</p>
//             <p className="mt-1 text-sm text-gray-600">{openingHours.weekdays}</p>
//             <p className="text-sm text-gray-600">{openingHours.weekend}</p>
//           </div>
//         </div>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">
//           Venir a l&apos;atelier depuis Aix-en-Provence ou Marseille
//         </h2>
//         <div className="grid gap-4 md:grid-cols-2">
//           <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
//             <h3 className="text-lg font-semibold text-gray-900">Depuis Aix</h3>
//             <p className="mt-2 text-gray-700">
//               15-20 minutes en voiture via la D9 direction Eguilles. Parking sur
//               place devant l&apos;atelier.
//             </p>
//           </div>
//           <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Depuis Marseille
//             </h3>
//             <p className="mt-2 text-gray-700">
//               35-40 minutes par l&apos;A51 puis D9. Sortie Eguilles, suivre la zone
//               artisanale des Jalassieres.
//             </p>
//           </div>
//         </div>
//         <p className="text-gray-700">
//           Si besoin, appelez avant de partir pour verifier la disponibilite ou
//           organiser un depannage.
//         </p>
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">FAQ contact</h2>
//         <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
//           <div>
//             <p className="font-semibold text-gray-900">
//               Quels elements fournir pour un devis rapide ?
//             </p>
//             <p className="text-gray-700">
//               Marque, modele, photos des degats, numero d&apos;immatriculation et vos
//               disponibilites.
//             </p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-900">
//               Sous combien de temps repondez-vous ?
//             </p>
//             <p className="text-gray-700">
//               Nous visons une reponse sous 24h ouvrables, plus rapide si vous
//               indiquez des creneaux.
//             </p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-900">
//               Faut-il prendre rendez-vous pour passer ?
//             </p>
//             <p className="text-gray-700">
//               Oui, un appel ou un message avant votre venue nous permet de vous
//               recevoir sans attente.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
//         <h2 className="text-2xl font-semibold text-gray-900">CTA final</h2>
//         <p className="text-gray-700">
//           Pret a lancer la reparation ? Envoyez votre demande et nous vous
//           confirmons un rendez-vous.
//         </p>
//         <a
//           href="#contact-form"
//           className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
//         >
//           Acceder au formulaire
//         </a>
//       </section>
//     </div>
//   );
// }
