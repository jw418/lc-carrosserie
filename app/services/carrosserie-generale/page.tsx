import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Star,
  MapPin,
  Hammer,
  Paintbrush,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

import { siteConfig } from "@/data/site.config";
import {
  buildBusinessJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  toJsonLd,
} from "@/lib/seo";

const title =
  "Carrosserie générale : services, prix et assurance | LC Carrosserie";
const description =
  "Services de carrosserie, peinture, devis, prix et délais. Gestion assurance, zéro avance de frais et véhicule de prêt.";
const pageUrl = `${siteConfig.websiteUrl}/services/carrosserie-generale`;

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

const HERO_LABELS = [
  "Toutes assurances",
  "Aucune avance travaux",
  "Franchise offerte",
];

const WORK_ITEMS = [
  {
    title: "Réparation de tôlerie",
    icon: <Hammer className="h-6 w-6" />,
    body: [
      "Redressage et remise en forme des éléments (ailes, portières, capots).",
      "Remplacement des pièces trop endommagées.",
      "Remise en état des pare-chocs et bas de caisse.",
    ],
  },
  {
    title: "Peinture haute précision",
    icon: <Paintbrush className="h-6 w-6" />,
    body: [
      "Respect strict des teintes constructeurs.",
      "Réparation de rayures, éclats et défauts d’aspect.",
      "Peinture partielle ou complète avec vernis haute brillance.",
    ],
  },
  {
    title: "Débosselage sans peinture",
    icon: <Zap className="h-6 w-6" />,
    body: [
      "Correction des bosses si la peinture est intacte (grêle, coups).",
      "Solution rapide et économique.",
      "Conservation de la peinture d'origine.",
    ],
  },
  {
    title: "Restitution LOA / LLD",
    icon: <ShieldCheck className="h-6 w-6" />,
    body: [
      "Remise en état esthétique complète avant fin de contrat.",
      "Ciblage des travaux utiles pour limiter les frais de restitution.",
      "Nettoyage des impacts et micro-rayures.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Diagnostic",
    desc: "Inspection et validation des pièces à remplacer.",
  },
  { title: "Tôlerie", desc: "Démontage et remise en forme des éléments." },
  {
    title: "Peinture",
    desc: "Préparation des surfaces et application vernis.",
  },
  { title: "Contrôle", desc: "Remontage, ajustements et vérification finale." },
];

const FAQ = [
  {
    q: "Libre choix du réparateur ?",
    a: "Oui. Vous êtes libre de choisir votre carrossier, même si votre assureur vous en suggère un autre.",
  },
  {
    q: "Avance de frais ?",
    a: "Zéro avance de frais. Nous attendons le règlement de l'assurance pour encaisser les travaux.",
  },
  {
    q: "Véhicule de prêt ?",
    a: "Nous mettons à votre disposition un véhicule de remplacement durant l'immobilisation.",
  },
];

const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

export default function CarrosserieGeneralePage() {
  const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBusinessJsonLd(),
      buildWebPageJsonLd({ title, description, url: pageUrl }),
      buildFaqJsonLd(FAQ.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  };

  return (
    <div className="bg-white font-sans antialiased text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(251,146,60,0.05)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-2 bg-zinc-950 px-4 py-2 rounded-full shadow-xl shadow-orange-900/10">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">
                Expertise Certifiée • 4.9/5 Google
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-8xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.85]">
              Carrosserie <br />
              <span className="text-orange-600 italic">Haute Précision.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl">
              Choc, rayure ou sinistre complet : nous gérons votre dossier
              assurance de A à Z avec
              <span className="text-zinc-900 font-medium">
                {" "}
                zéro avance de frais
              </span>{" "}
              et véhicule de prêt inclus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={phoneLink}
                className="group relative flex items-center justify-center gap-3 bg-orange-600 px-8 py-5 text-white font-mono text-xs font-black uppercase tracking-widest hover:bg-zinc-950 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl shadow-orange-600/20"
              >
                <Phone size={18} />
                Devis Immédiat
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <div className="flex items-center gap-4 px-6 border border-zinc-200 rounded-2xl bg-zinc-50/50">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-bold uppercase text-zinc-400">
                  Rejoint 1000+ clients satisfaits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group bg-white p-8 rounded-[2rem] border border-zinc-200 hover:border-orange-600 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-black uppercase tracking-tight mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.body.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-sm text-zinc-500 leading-snug"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASSURANCE & LOCATIONS --- */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-orange-600 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                <ShieldCheck size={14} />
                Expertise Assurance
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-950 leading-none">
                Libre choix du réparateur : Reprenez le contrôle.
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed font-light">
                Ne laissez pas votre assureur choisir pour vous. Vous avez le
                droit légal de confier votre véhicule à l'expert de votre choix.
                Nous nous occupons de l'expert, du chiffrage et de la prise en
                charge totale sans que vous n'ayez à décaisser le moindre euro.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {HERO_LABELS.map((l) => (
                  <div
                    key={l}
                    className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-zinc-900 border-l-2 border-orange-600 pl-4 py-2"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-1 bg-zinc-950 rounded-[2.5rem] shadow-3xl">
              <div className="bg-zinc-900 rounded-[2.3rem] p-10 space-y-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px]" />

                <div className="relative">
                  <span className="font-mono text-[10px] text-orange-500 font-bold uppercase tracking-widest block mb-2">
                    Proximité
                  </span>
                  <h3 className="text-3xl font-heading font-black text-white uppercase italic tracking-tighter">
                    Votre Atelier à Éguilles (13)
                  </h3>
                </div>

                <div className="grid gap-3 relative z-10">
                  {["Aix-en-Provence", "Marseille"].map((city) => (
                    <a
                      key={city}
                      href="#"
                      className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-orange-600 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <MapPin
                          className="text-orange-500 group-hover:text-white"
                          size={20}
                        />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                          Carrosserie à {city}
                        </span>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-zinc-500 group-hover:text-white group-hover:translate-x-2 transition-all"
                      />
                    </a>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.2em]">
                    Atelier ouvert du Lundi au Vendredi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section className="py-24 border-t border-zinc-100 bg-zinc-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-black uppercase mb-16 tracking-tight text-center">
            Processus de réparation
          </h2>
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-200 hidden md:block -z-10" />
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-zinc-100 text-center relative shadow-sm"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-600 text-white font-mono font-black flex items-center justify-center rounded-xl shadow-lg">
                  0{i + 1}
                </div>
                <h4 className="mt-6 font-bold uppercase text-sm tracking-widest mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono italic">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none">
                Une rayure ? Un choc ? <br /> Ne restez pas dans le doute.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto font-light">
                Estimation gratuite par photos ou directement à l'atelier. Notre
                équipe d'experts vous répond sous 2h.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={phoneLink}
                  className="bg-white text-zinc-950 px-10 py-5 rounded-2xl font-mono text-xs font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all"
                >
                  Appeler l'atelier
                </a>
                <a
                  href="/contact"
                  className="border border-white/20 text-white px-10 py-5 rounded-2xl font-mono text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Formulaire de contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import type { Metadata } from "next";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Phone,
//   Sparkles,
//   Star,
//   MapPin,
// } from "lucide-react";

// import { siteConfig } from "@/data/site.config";
// import { buildBusinessJsonLd, buildFaqJsonLd, buildWebPageJsonLd, toJsonLd } from "@/lib/seo";

// const title = "Carrosserie generale : services, prix et assurance | LC Carrosserie";
// const description =
//   "Services de carrosserie, peinture, devis, prix et delais. Gestion assurance, zero avance de frais et vehicule de pret.";
// const pageUrl = `${siteConfig.websiteUrl}/services/carrosserie-generale`;

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

// const HERO_LABELS = [
//   "Toutes assurances",
//   "Aucune avance travaux",
//   "Franchise offerte",
// ];

// const WORK_ITEMS = [
//   {
//     title: "Réparation de tôlerie",
//     body: [
//       "Redressage et remise en forme des éléments de tôlerie (ailes, portières, capots…).",
//       "Remplacement des pièces trop endommagées pour être réparées.",
//       "Remise en état des pare-chocs, bas de caisse et boucliers.",
//       "Objectif : des lignes nettes, des ajustements réguliers et un rendu conforme avant peinture.",
//     ],
//   },
//   {
//     title: "Peinture de carrosserie",
//     body: [
//       "Préparation des supports (ponçage, apprêt, masquage) avant teinte constructeur et vernis.",
//       "Réparation de rayures, éclats et défauts d’aspect.",
//       "Peinture partielle d’un élément ou complète de plusieurs éléments pour harmoniser la teinte.",
//       "Résultat attendu : aucun contraste visible entre les zones reprises et le reste de la carrosserie.",
//     ],
//   },
//   {
//     title: "Débosselage sans peinture",
//     body: [
//       "Corrige les bosses quand la peinture est intacte (grêle, coups de portière, petits enfoncements).",
//       "Solution rapide et économique, en conservant la peinture d’origine.",
//       "Validation au cas par cas : si la zone est trop marquée, on privilégie une réparation classique.",
//     ],
//   },
//   {
//     title: "Remise en état avant restitution LOA / LLD",
//     body: [
//       "Traitement des impacts, retouches de peinture, correction des bosses légères.",
//       "Remise en état des éléments visibles pour limiter les frais de fin de contrat.",
//       "Ciblage des travaux réellement utiles pour éviter les surcoûts.",
//       "Basés à Éguilles : prise en charge pour le Pays d’Aix et la métropole Aix-Marseille-Provence.",
//     ],
//   },
// ];

// const PROCESS_STEPS = [
//   {
//     title: "Diagnostic et préparation",
//     desc: "Inspection des zones touchées, validation des pièces à remplacer et de la méthode (tôlerie, peinture, DSP).",
//   },
//   {
//     title: "Démontage et remise en forme",
//     desc: "Démontage des éléments pour travailler proprement, redressage, mastic, remplacement des pièces irréparables.",
//   },
//   {
//     title: "Préparation, peinture, finition",
//     desc: "Préparation des surfaces, application de la teinte constructeur puis vernis, contrôle des raccords et de la brillance.",
//   },
//   {
//     title: "Remontage et contrôle final",
//     desc: "Remontage, ajustements, vérification sous différents angles et lumières avant restitution.",
//   },
// ];

// const EXTRA_SERVICES = [
//   {
//     title: "Rénovation des optiques de phares",
//     points: [
//       "Ponçage et polissage pour retrouver la transparence.",
//       "Protection pour limiter le re-jaunissement.",
//     ],
//   },
//   {
//     title: "Réparation de jantes alu abîmées",
//     points: [
//       "Rattrapage des bords frottés et micro-chocs.",
//       "Correction des éclats et défauts d’aspect.",
//     ],
//   },
//   {
//     title: "Rénovation et réparation de cuir",
//     points: [
//       "Nettoyage, traitement et recoloration des zones marquées.",
//       "Petites réparations sur sièges, volant ou éléments intérieurs.",
//     ],
//   },
//   {
//     title: "Covering partiel ou complet",
//     points: [
//       "Protection ou personnalisation (toit, rétros, éléments ciblés).",
//       "Projet global possible sur plusieurs éléments de carrosserie.",
//     ],
//   },
//   {
//     title: "Dépannage et mécanique légère",
//     points: [
//       "Organisation d’un rapatriement si le véhicule ne roule pas.",
//       "Interventions légères en parallèle pour éviter de multiplier les rendez-vous.",
//     ],
//   },
// ];

// const FAQ = [
//   {
//     q: "Est-ce que je suis obligé de passer par le garage conseillé par mon assurance ?",
//     a: "Non. Vous avez le libre choix du réparateur, même si l’assureur recommande un garage partenaire. Nous gérons la réparation et le dossier assurance dans le respect de vos garanties.",
//   },
//   {
//     q: "Est-ce que je vais devoir avancer les frais de réparation ?",
//     a: "Non dans le cadre d’un sinistre pris en charge : aucune avance de travaux, franchise offerte. Un chèque de garantie est demandé et n’est encaissé qu’après indemnisation de votre assurance.",
//   },
//   {
//     q: "Combien de temps ma voiture sera-t-elle immobilisée ?",
//     a: "Selon l’ampleur des dégâts, les pièces à remplacer et la validation assurance. Nous donnons dès le devis une date de dépôt (ou d’enlèvement), une durée estimée et les solutions de véhicule de prêt.",
//   },
//   {
//     q: "Comment se passe le devis pour une réparation de carrosserie ?",
//     a: "Examen du véhicule ou photos pour lister les éléments touchés, pièces à remplacer et peinture à reprendre. Devis détaillé gratuit et sans engagement, puis planification après validation.",
//   },
//   {
//     q: "Pouvez-vous aussi traiter des petits défauts esthétiques en plus du sinistre ?",
//     a: "Oui. Pendant l’immobilisation, nous pouvons intégrer rayures, jantes frottées, optiques ternis ou cuir abîmé, en distinguant ce qui relève du sinistre et ce qui relève d’une remise en état esthétique.",
//   },
// ];

// const WORK_EXAMPLES = [
//   {
//     title: "Choc de parking",
//     subtitle: "Pare-chocs arrière enfoncé + peinture",
//     beforeAlt: "Pare-chocs arrière enfoncé avec rayures",
//     afterAlt: "Pare-chocs arrière réparé et repeint",
//   },
//   {
//     title: "Gros impact latéral",
//     subtitle: "Aile et portière froissées",
//     beforeAlt: "Aile et portière froissées",
//     afterAlt: "Aile et portière redressées et peintes",
//   },
//   {
//     title: "Restitution LOA",
//     subtitle: "Retouches multiples avant fin de contrat",
//     beforeAlt: "Jantes frottées et rayures multiples",
//     afterAlt: "Jantes et éléments carrosserie remis à neuf",
//   },
// ];

// const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

// export default function CarrosserieGeneralePage() {
//   const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       buildBusinessJsonLd(),
//       buildWebPageJsonLd({
//         title,
//         description,
//         url: pageUrl,
//       }),
//       {
//         "@type": "Service",
//         "@id": `${pageUrl}#service`,
//         name: "Carrosserie et peinture auto",
//         description,
//         serviceType: "Auto body repair",
//         provider: { "@id": `${siteConfig.websiteUrl}#business` },
//         areaServed: ["Eguilles", "Aix-en-Provence", "Marseille"],
//       },
//       buildFaqJsonLd(
//         FAQ.map((item) => ({
//           question: item.q,
//           answer: item.a,
//         }))
//       ),
//     ],
//   };

//   return (
//     <div className="bg-white text-gray-900">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
//       />
//       <section className="relative isolate flex flex-col justify-center bg-white pt-32 pb-20 overflow-hidden">
//         {/* Background subtil */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-zinc-100 max-w-7xl" />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-8 space-y-10">
//               {/* Badge Avis Google */}
//               <div className="inline-flex items-center gap-3 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full">
//                 <div className="flex text-orange-600">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//                 <span className="font-mono text-[11px] font-bold text-zinc-900 uppercase tracking-tighter">
//                   4.9/5{" "}
//                   <span className="text-zinc-400 ml-1">• 120+ Avis Google</span>
//                 </span>
//               </div>

//               {/* Titre Impact Archivo */}
//               <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-950 leading-[0.9] uppercase">
//                 Services de carrosserie : <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
//                   Réparation & Assurance.
//                 </span>
//               </h1>

//               {/* Texte Descriptif Inter */}
//               <p className="font-sans text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light">
//                 Choc, rayure ou élément à reprendre : on diagnostique, chiffre
//                 et répare dans notre atelier à Éguilles. On vous explique ce que
//                 votre assurance peut couvrir, on prépare le dossier, puis on
//                 planifie l’intervention pour remettre votre véhicule en état
//                 rapidement. Intervention dans les Bouches-du-Rhône, autour
//                 d’Aix-en-Provence et de Marseille.
//               </p>

//               {/* Labels & CTA */}
//               <div className="space-y-8">
//                 <div className="flex flex-wrap gap-4">
//                   {HERO_LABELS.map((label) => (
//                     <div
//                       key={label}
//                       className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-900 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-md"
//                     >
//                       <CheckCircle2 size={14} className="text-orange-600" />
//                       {label}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 items-center">
//                   <a
//                     href={phoneLink}
//                     className="group font-mono bg-zinc-950 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 flex items-center gap-3 shadow-2xl"
//                   >
//                     <Phone size={16} />
//                     Appeler l'Expert
//                     <ArrowRight
//                       size={16}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                   </a>
//                   <span className="font-sans text-sm text-zinc-400 italic">
//                     Estimation gratuite & rapide sans rendez-vous.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 2 : EXPERTISE & LOCALISATION (STYLE TECHNIQUE) --- */}
//       <section className="bg-zinc-50 border-y border-zinc-200 py-24">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
//             {/* Colonne de gauche : Logistique */}
//             <div className="space-y-8 flex flex-col justify-center">
//               <div className="inline-flex items-center gap-2 text-orange-600 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
//                 <Sparkles size={14} />
//                 Libre choix du réparateur
//               </div>
//               <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-zinc-950 leading-none">
//                 Gestion assurance, véhicule de prêt & restitution.
//               </h2>
//               <p className="font-sans text-zinc-600 leading-relaxed font-light">
//                 Nous gérons l'intégralité du processus logistique. Que vous
//                 soyez assuré au tiers ou tous risques, notre équipe s'occupe de
//                 la relation avec l'expert pour vous garantir une réparation
//                 conforme aux normes constructeurs, pendant que vous restez
//                 mobile grâce à notre flotte de prêt.
//               </p>
//             </div>

//             {/* Colonne de droite : Carte de navigation locale (Design Premium) */}
//             <div className="relative rounded-3xl bg-zinc-950 p-10 text-white overflow-hidden shadow-2xl">
//               {/* Effet visuel technique */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full" />

//               <div className="relative h-full flex flex-col justify-between space-y-12">
//                 <div className="space-y-4">
//                   <span className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-widest">
//                     Zone d'intervention
//                   </span>
//                   <p className="font-heading text-2xl font-black uppercase italic">
//                     À proximité de chez vous <br /> (Aix & Marseille)
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 gap-4">
//                   <a
//                     href="/aix-en-provence/carrosserie"
//                     className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
//                   >
//                     <div className="flex items-center gap-4">
//                       <MapPin className="text-orange-500" size={20} />
//                       <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-100">
//                         Carrosserie à Aix-en-Provence
//                       </span>
//                     </div>
//                     <ArrowRight
//                       size={18}
//                       className="group-hover:translate-x-2 transition-transform text-zinc-500"
//                     />
//                   </a>

//                   <a
//                     href="/marseille/carrosserie"
//                     className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
//                   >
//                     <div className="flex items-center gap-4">
//                       <MapPin className="text-orange-500" size={20} />
//                       <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-100">
//                         Carrosserie à Marseille
//                       </span>
//                     </div>
//                     <ArrowRight
//                       size={18}
//                       className="group-hover:translate-x-2 transition-transform text-zinc-500"
//                     />
//                   </a>
//                 </div>

//                 <div className="pt-6 border-t border-white/10 flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                   <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.2em]">
//                     Atelier centralisé à Éguilles (13510)
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="relative overflow-hidden border-b bg-gradient-to-b from-zinc-50 to-white">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-200/40 to-transparent blur-3xl" />
//         </div>
//         <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 relative space-y-8">
//           <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
//             <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
//               Services de carrosserie
//             </span>
//             <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-gray-200">
//               <span className="flex text-amber-500">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-4 w-4 fill-current"
//                     strokeWidth={1.2}
//                   />
//                 ))}
//               </span>
//               4.9/5
//               <span className="text-gray-500">• Avis Google</span>
//             </span>
//           </div>

//           <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
//                 Services de carrosserie : réparation et assurance auto
//               </h1>
//               <p className="text-lg leading-relaxed text-gray-700">
//                 Choc, rayure ou élément à reprendre : on diagnostique, chiffre
//                 et répare dans notre atelier à Éguilles. Nous vous expliquons ce
//                 que votre assurance peut couvrir, préparons le dossier, puis
//                 planifions l’intervention pour remettre votre véhicule en état
//                 rapidement. Intervention dans les Bouches-du-Rhône, autour
//                 d’Aix-en-Provence et de Marseille.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {HERO_LABELS.map((label) => (
//                   <span
//                     key={label}
//                     className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200"
//                   >
//                     <CheckCircle2 className="h-4 w-4 text-emerald-600" />
//                     {label}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//                 <a
//                   href={phoneLink}
//                   className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
//                 >
//                   <Phone className="mr-2 h-4 w-4" />
//                   Appeler l’atelier
//                 </a>
//                 <span className="text-sm text-gray-600">
//                   Devis gratuit, dossier assurance géré de A à Z.
//                 </span>
//               </div>
//             </div>
//             <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-white shadow-2xl overflow-hidden">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
//               <div className="relative space-y-4">
//                 <p className="text-sm uppercase tracking-wide text-gray-300">
//                   Atelier à Éguilles
//                 </p>
//                 <p className="text-3xl font-bold leading-tight">
//                   Gestion assurance, <br />
//                   véhicule de prêt, <br />
//                   restitution planifiée.
//                 </p>
//                 <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
//                   <Sparkles className="h-4 w-4" />
//                   Libre choix du réparateur (toutes assurances)
//                 </div>
//                 <div className="rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-gray-100 ring-1 ring-white/10">
//                   <p>
//                     Vous êtes à Aix ou à Marseille ? Consultez nos pages locales
//                     :
//                     <br />
//                     <a
//                       href="/aix-en-provence/carrosserie"
//                       className="font-semibold underline"
//                     >
//                       Carrosserie à Aix-en-Provence
//                     </a>{" "}
//                     •{" "}
//                     <a
//                       href="/marseille/carrosserie"
//                       className="font-semibold underline"
//                     >
//                       Carrosserie à Marseille
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">
//               Les travaux de carrosserie que nous réalisons
//             </h2>
//             <p className="text-gray-700">
//               Sinistre assurance ou remise en état esthétique : nous corrigeons
//               les défauts visibles qui dégradent l’apparence ou la valeur de
//               votre voiture (tôle marquée, peinture abîmée, bosses, petits chocs
//               du quotidien).
//             </p>
//           </div>
//           <div className="grid gap-6 lg:grid-cols-2">
//             {WORK_ITEMS.map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm"
//               >
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {item.title}
//                 </h3>
//                 <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 list-disc list-inside">
//                   {item.body.map((line) => (
//                     <li key={line}>{line}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="space-y-6">
//           <h2 className="text-3xl font-bold">
//             Comment se déroule une réparation en atelier
//           </h2>
//           <p className="text-gray-700">
//             Chaque véhicule suit un déroulé précis pour garantir un résultat
//             propre et durable, depuis le diagnostic jusqu’au contrôle final.
//           </p>
//           <div className="grid gap-4 md:grid-cols-2">
//             {PROCESS_STEPS.map((step, index) => (
//               <div
//                 key={step.title}
//                 className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
//               >
//                 <span className="absolute right-4 top-4 text-5xl font-black text-gray-100">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>
//                 <div className="relative z-10 space-y-2">
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-gray-700">
//                     {step.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">
//               Services complémentaires pour remettre votre véhicule en valeur
//             </h2>
//             <p className="text-gray-700">
//               À ajouter pendant une réparation ou sur rendez-vous : sécurité,
//               confort et esthétique.
//             </p>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {EXTRA_SERVICES.map((service) => (
//               <div
//                 key={service.title}
//                 className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {service.title}
//                 </h3>
//                 <ul className="mt-3 space-y-1 text-sm leading-relaxed text-gray-700 list-disc list-inside">
//                   {service.points.map((point) => (
//                     <li key={point}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-900 p-8 text-white shadow-sm">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">Prix, devis et délais</h2>
//             <p className="text-zinc-300">
//               Devis clair, gratuit et sans engagement. Validation avant
//               lancement des travaux.
//             </p>
//           </div>
//           <div className="grid gap-6 lg:grid-cols-2">
//             <div className="space-y-3 rounded-2xl bg-zinc-800/60 p-6 ring-1 ring-white/10">
//               <h3 className="text-xl font-semibold">
//                 Un devis de carrosserie clair
//               </h3>
//               <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-200 list-disc list-inside">
//                 <li>
//                   Éléments concernés : tôlerie, peinture, jantes, optiques, etc.
//                 </li>
//                 <li>
//                   Pièces à réparer ou à remplacer, main-d’œuvre et fournitures.
//                 </li>
//                 <li>Part estimée prise en charge par l’assurance.</li>
//                 <li>
//                   Envoi possible après photos, affiné sur place si besoin.
//                 </li>
//               </ul>
//               <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white">
//                 Estimation sur photos possible
//               </div>
//             </div>
//             <div className="space-y-3 rounded-2xl bg-zinc-800/60 p-6 ring-1 ring-white/10">
//               <h3 className="text-xl font-semibold">
//                 Ce qui influence le prix & les délais
//               </h3>
//               <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-200 list-disc list-inside">
//                 <li>Ampleur des dégâts et nombre de pièces touchées.</li>
//                 <li>Réparation vs remplacement de certaines pièces.</li>
//                 <li>
//                   Étendue de la peinture (retouche locale, élément complet,
//                   harmonisation).
//                 </li>
//                 <li>
//                   Délais liés à l’assurance, à l’expertise et à la disponibilité
//                   des pièces.
//                 </li>
//               </ul>
//               <p className="text-sm text-zinc-200">
//                 Nous vous donnons dès le devis une date de démarrage, une
//                 estimation d’immobilisation et les solutions de véhicule de
//                 prêt.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">
//               Nos réalisations en carrosserie
//             </h2>
//             <p className="text-gray-700">
//               Quelques cas typiques : chocs de parking, impacts plus lourds,
//               remises en état avant restitution LOA/LLD.
//             </p>
//           </div>
//           <div className="grid gap-4 md:grid-cols-3">
//             {WORK_EXAMPLES.map((item) => (
//               <div
//                 key={item.title}
//                 className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
//               >
//                 <div className="p-4 space-y-1">
//                   <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                     {item.title}
//                   </p>
//                   <p className="text-sm text-gray-700">{item.subtitle}</p>
//                 </div>
//                 <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
//                   <div className="p-4 text-center text-xs text-gray-600">
//                     Avant
//                     <div
//                       className="mt-2 h-24 rounded-lg bg-gray-100"
//                       aria-label={item.beforeAlt}
//                     />
//                   </div>
//                   <div className="p-4 text-center text-xs text-gray-600">
//                     Après
//                     <div
//                       className="mt-2 h-24 rounded-lg bg-gray-100"
//                       aria-label={item.afterAlt}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">
//               Questions fréquentes de nos clients
//             </h2>
//             <p className="text-gray-700">
//               Libre choix du réparateur, avance de frais, délais et devis.
//             </p>
//           </div>
//           <div className="space-y-3">
//             {FAQ.map((item) => (
//               <details
//                 key={item.q}
//                 className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
//               >
//                 <summary className="flex cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-gray-900 transition group-open:bg-gray-50">
//                   <span>{item.q}</span>
//                   <ArrowRight className="mt-1 h-4 w-4 transition group-open:rotate-90" />
//                 </summary>
//                 <div className="border-t border-gray-100 bg-gray-50/80 px-4 py-3 text-sm leading-relaxed text-gray-700">
//                   {item.a}
//                 </div>
//               </details>
//             ))}
//           </div>
//         </section>

//         <section className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm">
//           <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold">
//                 Parlez-nous de votre réparation
//               </h2>
//               <p className="text-gray-700">
//                 Expliquez la situation, joignez quelques photos : nous préparons
//                 votre dossier, vérifions la prise en charge possible et vous
//                 proposons un plan simple (dépôt ou enlèvement, véhicule de prêt,
//                 délais).
//               </p>
//               <div className="flex flex-wrap gap-2 text-sm font-semibold text-gray-900">
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                   Dossier assurance géré
//                 </span>
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                   0 € à avancer
//                 </span>
//                 <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
//                   Véhicule de prêt
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
//               <a
//                 href={phoneLink}
//                 className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
//               >
//                 <Phone className="mr-2 h-4 w-4" />
//                 Appeler l’atelier
//               </a>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
//               >
//                 Demander un devis en ligne
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
