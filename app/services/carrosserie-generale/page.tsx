"use client";
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
  Subtitles,
  ClipboardCheck,
  Calculator,
  Clock,
  FileText,
  Info,
} from "lucide-react";

import { siteConfig } from "@/data/site.config";
import {
  buildBusinessJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  toJsonLd,
} from "@/lib/seo";

import { motion } from "framer-motion";
import { CreditCard, Gift, ArrowUpRight } from "lucide-react";
import { ImageCarousel } from "@/components/ImageCarousel";
import Link from "next/link";

const title =
  "Carrosserie générale : services, prix et assurance | LC Carrosserie";
const description =
  "Services de carrosserie, peinture, devis, prix et délais. Gestion assurance, zéro avance de frais et véhicule de prêt.";
const pageUrl = `${siteConfig.websiteUrl}/services/carrosserie-generale`;

// export const metadata: Metadata = {
//   title,
//   description,
//   alternates: { canonical: pageUrl },
//   openGraph: {
//     title,
//     description,
//     url: pageUrl,
//     siteName: siteConfig.name,
//     locale: "fr_FR",
//     type: "article",
//     images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title,
//     description,
//     images: [siteConfig.ogImage],
//   },
// };

const REALISATIONS_IMAGES = [
  "/img/carousels/home/2025-05-06.webp",
  "/img/carousels/home/2025-07-28.webp",
  "/img/carousels/home/2025-10-06.webp",
  "/img/carousels/home/covering.png",
  "/img/carousels/home/tolerie.png",
];
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

const EXTRA_SERVICES = [
  {
    title: "Prise en charge totale du dossier assurance",
    icon: <ShieldCheck className="h-6 w-6" />,
    desc: "Nous gérons les échanges avec l'expert et l'assurance pour vous simplifier la vie.",
    points: [
      "Gestion des échanges avec l'expert.",
      "Suivi du dossier assurance.",
      "Validation des réparations avant intervention.",
    ],
  },
];

const WORK_EXAMPLES = [
  {
    title: "Réparation de tôlerie",
    icon: <Hammer className="h-6 w-6" />,
    subtitle: "Réparation de tôlerie",
    beforeAlt: "Avant",
    afterAlt: "Après",
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
];

const MAIN_SERVICES = [
  {
    title: "Réparation de tôlerie",
    description:
      "Qu’il soit question de pare-chocs enfoncé, d’une aile froissée ou d’une portière pliée, nous intervenons sur l’ensemble des éléments de carrosserie. Nous travaillons la tôle pour retrouver des lignes nettes et des ajustements propres, afin que les jeux entre les pièces (jours, alignements) soient à nouveau réguliers avant la mise en peinture. L’objectif est de retrouver un véhicule conforme et visuellement irréprochable.",
    points: [
      "Redressage et remise en forme des éléments de tôlerie (ailes, portières, capots…)",
      "Remplacement des pièces trop endommagées pour être réparées",
      "Remise en état des pare-chocs, bas de caisse et boucliers",
    ],
    image: "/img/services/service-tolerie.jpg",
  },
  {
    title: "Peinture de carrosserie",
    description:
      "Après une réparation de tôlerie, la peinture est une étape clé pour que la réparation soit invisible. Nous préparons chaque support (ponçage, apprêt, masquage) avant d’appliquer la teinte constructeur puis un vernis de protection, de manière à respecter l’aspect d’origine du véhicule. Le but : une réparation homogène, sans différence visible entre les zones reprises et le reste de la carrosserie.",
    points: [
      "Réparation de rayures, éclats et défauts d’aspect",
      "Peinture partielle d’un élément",
      "Peinture complète de plusieurs éléments pour harmoniser la teinte",
    ],
    image: "/img/services/service-peinture.jpg",
  },
  {
    title: "Débosselage sans peinture",
    description:
      "Lorsque la peinture n’est pas abîmée, le débosselage sans peinture permet de corriger certaines bosses (grêle, coups de portière, petits enfoncements) sans repeindre la pièce. C’est une solution plus rapide et plus économique, tout en conservant la peinture d’origine du véhicule. Nous vous indiquons si cette technique est possible ou si une réparation classique est plus adaptée.",
    image: "/img/services/service-dsp.jpg",
  },
  {
    title: "Remise en état LOA / LLD",
    description:
      "Avant la restitution d’un véhicule en LOA ou LLD, les rayures, chocs de stationnement, jantes abîmées ou petits défauts de carrosserie peuvent entraîner des frais importants. Nous proposons une remise en état ciblée pour limiter au maximum les surcoûts de fin de contrat : traitement des impacts, retouches de peinture, correction des bosses légères et remise en état des éléments visibles. L’objectif : rendre un véhicule propre, conforme aux attentes du loueur, sans travaux inutiles.",
    image: "/img/services/service-loa.jpg",
  },
];

const STEPS = [
  {
    title: "Diagnostic et préparation",
    description:
      "Nous commençons par inspecter les zones endommagées et vérifier s’il y a d’autres éléments touchés. Cela permet de valider les pièces à remplacer, les surfaces à reprendre et le type d’intervention le plus adapté (tôlerie, peinture, débosselage sans peinture).",
    icon: <ClipboardCheck size={24} />,
    tags: ["Inspection", "Expertise", "Chiffrage"],
  },
  {
    title: "Démontage et remise en forme",
    description:
      "Les éléments nécessaires sont démontés pour travailler proprement : pare-chocs, optiques, baguettes, pièces de tôlerie… Nous redressons ensuite les parties déformées, appliquons du mastic pour combler les défauts et remplaçons les pièces trop abîmées pour être réparées.",
    icon: <Hammer size={24} />,
    tags: ["Redressage", "Tôlerie", "Ajustement"],
  },
  {
    title: "Préparation, peinture et finition",
    description:
      "Une fois la carrosserie remise en forme, nous préparons les surfaces, appliquons la teinte constructeur puis le vernis de protection. Les raccords et la brillance sont contrôlés pour obtenir un aspect homogène avec le reste du véhicule.",
    icon: <Paintbrush size={24} />,
    tags: ["Mise en peinture", "Vernis Haute Brillance"],
  },
  {
    title: "Remontage et contrôle final",
    description:
      "Après séchage, nous remontons l’ensemble des éléments, vérifions les ajustements et inspectons les zones reprises sous différents angles et lumières.",
    icon: <ShieldCheck size={24} />,
    tags: ["Qualité", "Vérification", "Restitution"],
  },
];

const COMPLEMENTARY_SERVICES = [
  {
    title: "Rénovation des optiques",
    description:
      "Nous redonnons de la transparence à vos optiques lorsque les phares sont ternis ou jaunis. Cela permet de retrouver un éclairage efficace et un véhicule plus sécurisant, surtout de nuit ou par mauvaise visibilité.",
    points: [
      "Ponçage et polissage des optiques",
      "Protection pour limiter le re-jaunissement",
    ],
    image: "/img/optiques-renov.jpg",
  },
  {
    title: "Réparation de jantes alu",
    description:
      "Les jantes sont souvent les premières touchées par les trottoirs et les manœuvres de stationnement. Nous corrigeons les frottements et micro-chocs pour rendre à vos jantes un aspect propre.",
    points: [
      "Rattrapage des bords frottés",
      "Correction des éclats et marques légères",
    ],
    image: "/img/jantes-repair.jpg",
  },
  {
    title: "Rénovation du cuir",
    description:
      "Sièges, volant ou éléments intérieurs peuvent se marquer avec le temps : usure, frottements, petites griffures ou débuts de déchirure. Nous intervenons pour redonner vie à votre habitacle.",
    points: [
      "Nettoyage et traitement du cuir",
      "Réparation de zones marquées ou abîmées",
    ],
    image: "/img/cuir-renov.jpg",
  },
  {
    title: "Covering esthétique",
    description:
      "Pour les clients qui souhaitent aller plus loin sur l’esthétique ou la personnalisation, nous proposons du covering partiel ou complet pour protéger ou transformer le style de votre véhicule.",
    points: [
      "Toit, rétroviseurs, éléments spécifiques",
      "Projet global sur plusieurs éléments de carrosserie",
    ],
    image: "/img/covering.jpg",
  },
  {
    title: "Dépannage & Mécanique",
    description:
      "En complément, nous pouvons organiser un dépannage ou rapatriement de votre véhicule lorsqu’il ne peut pas rouler, ou réaliser certaines interventions de mécanique légère en parallèle.",
    points: [
      "Organisation de rapatriement véhicule",
      "Interventions de mécanique légère",
    ],
    image: "/img/depannage.jpg",
  },
];

const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

export default function CarrosserieGeneralePage() {
  const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBusinessJsonLd(),
      buildWebPageJsonLd({
        title,
        description,
        url: pageUrl,
      }),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Carrosserie et peinture auto",
        description,
        serviceType: "Auto body repair",
        provider: { "@id": `${siteConfig.websiteUrl}#business` },
        areaServed: ["Eguilles", "Aix-en-Provence", "Marseille"],
      },
      buildFaqJsonLd(
        FAQ.map((item) => ({
          question: item.q,
          answer: item.a,
        }))
      ),
    ],
  };

  return (
    <>
      <div className="bg-white font-sans antialiased text-zinc-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
        />

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-background">
          {/* Background architectural : Lignes de précision et gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-border/40 max-w-7xl" />
            <div className="absolute top-[40%] left-0 w-full h-px bg-border/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* COLONNE GAUCHE : TEXTE EDITORIAL */}
              <div className="lg:col-span-8 space-y-8">
                {/* Titre Impactant */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
                    Services de carrosserie :<br />
                    <span className="text-primary italic">
                      Réparation & Assurance.
                    </span>
                  </h1>
                </motion.div>

                {/* Zone Avis Google - Placée sous le titre pour la crédibilité immédiate */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 bg-card w-fit px-5 py-3 rounded-2xl border border-border shadow-sm"
                >
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest border-l border-border pl-4">
                    4.9/5 • 120+ Avis Google
                  </span>
                </motion.div>

                {/* Description Textuelle */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl"
                >
                  Choc, rayure ou élément à reprendre : on diagnostique, chiffre
                  et répare dans notre atelier à{" "}
                  <span className="text-foreground font-medium underline decoration-primary/30">
                    Éguilles
                  </span>
                  . On gère votre dossier assurance de A à Z pour remettre votre
                  véhicule en état rapidement autour d’Aix-en-Provence et de
                  Marseille.
                </motion.p>

                {/* Checklist de services (Horizontal sur desktop) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {[
                    {
                      icon: <ShieldCheck size={18} />,
                      text: "Toutes assurances",
                    },
                    {
                      icon: <CreditCard size={18} />,
                      text: "Aucune avance travaux",
                    },
                    { icon: <Gift size={18} />, text: "Franchise offerte" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-secondary/50 px-4 py-3 rounded-xl border border-border"
                    >
                      <span className="text-primary">{item.icon}</span>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-tight">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Call to Actions */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <a
                    href="tel:+33000000000"
                    className="group relative flex items-center justify-center gap-3 bg-primary px-8 py-5 text-primary-foreground font-mono text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-2xl shadow-xl shadow-primary/20"
                  >
                    <Phone size={18} />
                    Appeler l'Expert
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <div className="flex items-center gap-4 px-6 py-4 border border-border rounded-2xl bg-card">
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-40"></span>
                      <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold uppercase text-foreground">
                        Estimation gratuite & rapide
                      </span>
                      <span className="text-[9px] font-mono uppercase text-muted-foreground tracking-tighter">
                        Sans rendez-vous à l'atelier
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* COLONNE DROITE : VISUEL (Optionnel mais recommandé pour un Hero) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block lg:col-span-4 relative"
              >
                <div className="aspect-[3/4] rounded-3xl bg-zinc-200 overflow-hidden border border-border relative">
                  {/* Image placeholder - à remplacer par votre image réelle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white/80 font-mono text-[10px] uppercase tracking-widest">
                      <MapPin size={12} className="text-primary" />
                      Zone Éguilles • Aix • Marseille
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-24 bg-zinc-50 font-sans border-t border-zinc-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
              <div className="max-w-3xl">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">
                  Nos Expertises
                </span>
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9]">
                  Les travaux de carrosserie <br />
                  <span className="text-zinc-400">que nous réalisons.</span>
                </h2>
              </div>
              <p className="font-sans text-zinc-500 max-w-sm text-base leading-relaxed mb-2 font-light">
                Qu’il s’agisse d’un sinistre pris en charge par votre assurance
                ou d’une remise en état esthétique, nous corrigeons les défauts
                visibles qui dégradent l’apparence ou la valeur de votre voiture
                : tôle marquée, peinture abîmée, bosses, petits chocs du
                quotidien.
              </p>
            </div>

            {/* GRILLE DE SERVICES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl">
              {MAIN_SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white group flex flex-col h-full overflow-hidden"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/0 transition-colors duration-500" />

                    {/* Badge Motif Technique */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm border-l-2 border-orange-600">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-900">
                          Tech. Expertise {idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 md:p-12 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-zinc-950 uppercase leading-none">
                        {service.title}
                      </h3>
                      <CheckCircle2
                        size={22}
                        className="text-zinc-200 group-hover:text-orange-600 transition-colors shrink-0"
                      />
                    </div>

                    <p className="font-sans text-zinc-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    {/* LISTE DES POINTS (Si existants) */}
                    {service.points && (
                      <ul className="space-y-3 mb-10 pt-6 border-t border-zinc-100">
                        {service.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-xs md:text-sm text-zinc-500"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* FOOTER CARD */}
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-950 transition-colors">
                        LC Carrosserie Éguilles
                      </span>
                      <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950 group-hover:text-orange-600 transition-colors">
                        Détails
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* REASSURANCE FINALE */}
            <div className="mt-20 flex flex-col items-center text-center">
              <div className="h-px w-24 bg-orange-600 mb-8" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 max-w-xl">
                Toutes nos interventions respectent scrupuleusement les normes
                constructeurs pour préserver votre garantie.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* COLONNE GAUCHE : TEXTE EDITORIAL */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-primary font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                  <ShieldCheck size={14} />
                  Expertise Assurance
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-none">
                  Libre choix du réparateur : Reprenez le contrôle.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Ne laissez pas votre assureur choisir pour vous. Vous avez le
                  droit légal de confier votre véhicule à l'expert de votre
                  choix. Nous nous occupons de l'expert, du chiffrage et de la
                  prise en charge totale sans que vous n'ayez à décaisser le
                  moindre euro.
                </p>
              </div>

              {/* COLONNE DROITE : CARTE DE PROXIMITÉ (LOOK DARK) */}
              <div className="relative p-1 bg-zinc-950 rounded-[2.5rem] shadow-2xl">
                <div className="bg-zinc-900 rounded-[2.3rem] p-10 space-y-8 relative overflow-hidden">
                  {/* Effet de lumière en arrière-plan */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />

                  <div className="relative space-y-4">
                    <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest block">
                      Proximité & Localisation
                    </span>
                    <p className="font-sans text-zinc-300 text-sm leading-relaxed">
                      Basés à{" "}
                      <span className="text-white font-bold">Éguilles</span>,
                      nous opérons dans le Pays d’Aix et dans l’ensemble de la
                      Métropole Aix-Marseille-Provence.
                    </p>
                  </div>

                  <div className="grid gap-3 relative z-10">
                    {/* Lien Aix-en-Provence */}
                    <a
                      href="/aix-en-provence/carrosserie"
                      className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <MapPin
                          className="text-primary group-hover:text-white"
                          size={20}
                        />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                          Carrosserie à Aix-en-Provence
                        </span>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-zinc-500 group-hover:text-white group-hover:translate-x-2 transition-all"
                      />
                    </a>

                    {/* Lien Marseille */}
                    <a
                      href="/marseille/carrosserie"
                      className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <MapPin
                          className="text-primary group-hover:text-white"
                          size={20}
                        />
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                          Carrosserie à Marseille
                        </span>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-zinc-500 group-hover:text-white group-hover:translate-x-2 transition-all"
                      />
                    </a>
                  </div>

                  <p className="text-xs text-zinc-400 font-light italic">
                    Découvrez nos pages locales dédiées pour organiser votre
                    réparation près de chez vous.
                  </p>

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
        <section className="py-24 bg-white overflow-hidden border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* HEADER */}
            <div className="max-w-3xl mb-20">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
                Flux de travail Atelier
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9] mb-8">
                Comment se déroule <br />
                <span className="text-zinc-400 italic">
                  une réparation en atelier.
                </span>
              </h2>
              <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-2xl">
                Chaque véhicule suit un déroulé précis pour garantir un résultat
                propre et durable, depuis le diagnostic jusqu’au contrôle final.
              </p>
            </div>

            {/* TIMELINE PROCESS */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {/* Ligne de fond (desktop) */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-100 z-0" />

              {STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 group"
                >
                  {/* Numéro et Icone */}
                  <div className="mb-8 flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-white shadow-xl group-hover:bg-primary transition-colors duration-500">
                      {step.icon}
                    </div>
                    <div className="flex flex-col lg:mt-4">
                      <span className="font-mono text-[10px] font-black text-primary uppercase tracking-widest">
                        Étape 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-black uppercase tracking-tight text-zinc-950 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {step.description}
                    </p>

                    {/* Tags techniques */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono font-bold uppercase tracking-tighter px-2 py-1 bg-zinc-50 border border-zinc-100 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* INDICATEUR TECHNIQUE BAS DE PAGE */}
            <div className="mt-20 p-8 border-l-4 border-primary bg-zinc-50 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-600 max-w-xl">
                Recherche de pièces • Démontage • Ponçage • Peinture • Vernis •
                Remontage
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] font-black uppercase text-zinc-950">
                  Contrôle Qualité ISO 9001
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white font-sans border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
              <div className="max-w-3xl">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">
                  Valeur Ajoutée
                </span>
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9]">
                  Services complémentaires <br />
                  <span className="text-zinc-400">pour votre véhicule.</span>
                </h2>
              </div>
              <p className="font-sans text-zinc-500 max-w-sm text-base leading-relaxed mb-2 font-light">
                Que votre voiture soit déjà à l’atelier ou que vous souhaitiez
                simplement améliorer son état général, nous proposons des
                services pour la sécurité, le confort et l’esthétique.
              </p>
            </div>

            {/* GRILLE DE SERVICES (Même style que services principaux) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-2xl">
              {COMPLEMENTARY_SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white group flex flex-col h-full overflow-hidden"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/0 transition-colors duration-500" />

                    {/* Badge Motif Technique */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm border-l-2 border-orange-600">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-900">
                          Prestation {idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 md:p-12 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-heading text-2xl md:text-3xl font-black tracking-tight text-zinc-950 uppercase leading-none">
                        {service.title}
                      </h3>
                      <CheckCircle2
                        size={22}
                        className="text-zinc-200 group-hover:text-orange-600 transition-colors shrink-0"
                      />
                    </div>

                    <p className="font-sans text-zinc-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    {/* LISTE DES POINTS */}
                    {service.points && (
                      <ul className="space-y-3 mb-10 pt-6 border-t border-zinc-100">
                        {service.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-xs md:text-sm text-zinc-500"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* FOOTER CARD */}
                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-950 transition-colors">
                        Expertise Esthétique
                      </span>
                      <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950 group-hover:text-orange-600 transition-colors cursor-pointer">
                        Sur rendez-vous
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* REASSURANCE FINALE */}
            <div className="mt-16 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Disponibles seuls ou pendant vos réparations de carrosserie
                habituelles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background border-t border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* HEADER */}
            <div className="max-w-3xl mb-16">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
                Transparence & Engagement
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9] mb-8">
                Prix, devis <br />
                <span className="text-muted-foreground italic">et délais.</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Chaque réparation est différente : type de choc, nombre
                d’éléments touchés, pièces à remplacer ou non… Plutôt que
                d’afficher des tarifs génériques qui ne correspondent pas à
                votre situation, nous réalisons un
                <span className="text-foreground font-medium">
                  {" "}
                  devis gratuit, en moins de 24h
                </span>
                , pour vos réparations de carrosserie.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* CARTE 1: DEVIS CLAIR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col p-8 bg-card border border-border rounded-3xl shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                  <FileText size={80} />
                </div>

                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Calculator size={24} />
                </div>

                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-foreground mb-6">
                  Un devis clair, gratuit et sans engagement
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Avant de lancer les travaux, nous vous remettons un devis
                  détaillé, qui précise :
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "les éléments concernés (tôlerie, peinture, jantes, etc.)",
                    "les pièces à réparer ou à remplacer",
                    "le coût de la main-d’œuvre et des fournitures",
                    "la part estimée prise en charge par l’assurance",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto text-[11px] font-mono uppercase text-primary font-bold tracking-widest">
                  Réponse sous 24h maximum
                </p>
              </motion.div>

              {/* CARTE 2: INFLUENCE DU PRIX */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col p-8 bg-zinc-950 text-white rounded-3xl shadow-2xl relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6">
                  <Info size={24} />
                </div>

                <h3 className="font-heading text-xl font-black uppercase tracking-tight mb-6">
                  Ce qui influence le prix d’une réparation
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      label: "L'ampleur des dégâts",
                      desc: "Petit impact localisé ou élément fortement enfoncé",
                    },
                    {
                      label: "Le nombre de pièces",
                      desc: "Un pare-chocs seul ou plusieurs éléments",
                    },
                    {
                      label: "Remplacement vs Réparation",
                      desc: "Nécessité de commander des pièces neuves",
                    },
                    {
                      label: "L'étendue de la peinture",
                      desc: "Retouche locale ou élément complet",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-l border-white/20 pl-4 py-1">
                      <h4 className="text-[10px] font-mono font-bold uppercase text-primary tracking-widest mb-1">
                        {item.label}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-[10px] italic text-zinc-500 leading-relaxed pt-6 border-t border-white/10">
                  Notre mission : vous proposer la solution la plus cohérente
                  par rapport à l’état de votre véhicule et à votre assurance.
                </p>
              </motion.div>

              {/* CARTE 3: DELAIS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col p-8 bg-card border border-border rounded-3xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Clock size={24} />
                </div>

                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-foreground mb-6">
                  Délais et immobilisation
                </h3>

                <p className="text-sm text-muted-foreground mb-6 font-light">
                  Les délais dépendent principalement du temps de réponse de
                  l’assurance, de la disponibilité des pièces et de la charge de
                  l’atelier.
                </p>

                <div className="space-y-3 bg-secondary/50 p-6 rounded-2xl border border-border mb-8">
                  <span className="font-mono text-[10px] font-bold text-foreground block mb-2 uppercase tracking-widest underline decoration-primary">
                    Nous vous indiquons :
                  </span>
                  <ul className="space-y-2">
                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                      <Zap size={12} className="text-primary" /> Un délai de
                      démarrage précis
                    </li>
                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                      <Zap size={12} className="text-primary" /> Une durée
                      d'immobilisation estimée
                    </li>
                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                      <Zap size={12} className="text-primary" /> Des solutions
                      de véhicule de prêt
                    </li>
                  </ul>
                </div>

                <p className="text-[11px] text-muted-foreground leading-relaxed mt-auto italic">
                  L’idée est que vous sachiez dès le départ quand déposer votre
                  voiture et comment continuer à vous déplacer.
                </p>
              </motion.div>
            </div>

            {/* CTA FINAL RAPIDE */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <a
                href="#"
                className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-mono text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
              >
                Demander mon estimation gratuite
              </a>
              <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                Estimation par photo possible via WhatsApp ou email
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-white border-y border-zinc-100 overflow-hidden">
          {/* Texture de fond subtile (optionnelle) */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
                  <Sparkles className="h-3 w-3 text-orange-600" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700">
                    Savoir-faire artisanal
                  </span>
                </div>

                {/* Titre style Archivo */}
                <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-950 leading-[0.9]">
                  Nos <span className="text-zinc-400">réalisations</span>
                </h2>

                {/* Descriptif style Mono */}
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 max-w-xl">
                  Avant / après, peinture, tôlerie, finitions et travaux
                  esthétiques réalisés dans notre atelier.
                </p>
              </div>

              {/* Lien vers réseaux ou galerie complète */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="group flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950 hover:text-orange-600 transition-colors"
              >
                Voir plus sur Instagram
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>

            {/* Le Carousel - On lui laisse toute la largeur du container parent */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-zinc-50/50 rounded-[3rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-700" />
              <ImageCarousel
                items={REALISATIONS_IMAGES.map((src) => ({
                  src,
                  title: "Réalisation atelier",
                }))}
              />
            </div>

            {/* Note de bas de section */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-zinc-100" />
              <p className="font-sans text-[10px] italic text-zinc-400">
                Tous les travaux sont garantis et réalisés selon les normes
                constructeurs.
              </p>
              <div className="h-px flex-1 bg-zinc-100" />
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
                  Estimation gratuite par photos ou directement à l'atelier.
                  Notre équipe d'experts vous répond sous 2h.
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

      {/* --- SECTION 2 : EXPERTISE & LOCALISATION (STYLE TECHNIQUE) --- */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Colonne de gauche : Logistique */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-orange-600 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles size={14} />
                Libre choix du réparateur
              </div>
              <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-zinc-950 leading-none">
                Gestion assurance, véhicule de prêt & restitution.
              </h2>
              <p className="font-sans text-zinc-600 leading-relaxed font-light">
                Nous gérons l'intégralité du processus logistique. Que vous
                soyez assuré au tiers ou tous risques, notre équipe s'occupe de
                la relation avec l'expert pour vous garantir une réparation
                conforme aux normes constructeurs, pendant que vous restez
                mobile grâce à notre flotte de prêt.
              </p>
            </div>

            {/* Colonne de droite : Carte de navigation locale (Design Premium) */}
            <div className="relative rounded-3xl bg-zinc-950 p-10 text-white overflow-hidden shadow-2xl">
              {/* Effet visuel technique */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full" />

              <div className="relative h-full flex flex-col justify-between space-y-12">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-widest">
                    Zone d'intervention
                  </span>
                  <p className="font-heading text-2xl font-black uppercase italic">
                    À proximité de chez vous <br /> (Aix & Marseille)
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="/aix-en-provence/carrosserie"
                    className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="text-orange-500" size={20} />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-100">
                        Carrosserie à Aix-en-Provence
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform text-zinc-500"
                    />
                  </a>

                  <a
                    href="/marseille/carrosserie"
                    className="group flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="text-orange-500" size={20} />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-100">
                        Carrosserie à Marseille
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform text-zinc-500"
                    />
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.2em]">
                    Atelier centralisé à Éguilles (13510)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-zinc-50 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-200/40 to-transparent blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 relative space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Services de carrosserie
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-gray-200">
              <span className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    strokeWidth={1.2}
                  />
                ))}
              </span>
              4.9/5
              <span className="text-gray-500">• Avis Google</span>
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Services de carrosserie : réparation et assurance auto
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                Choc, rayure ou élément à reprendre : on diagnostique, chiffre
                et répare dans notre atelier à Éguilles. Nous vous expliquons ce
                que votre assurance peut couvrir, préparons le dossier, puis
                planifions l’intervention pour remettre votre véhicule en état
                rapidement. Intervention dans les Bouches-du-Rhône, autour
                d’Aix-en-Provence et de Marseille.
              </p>
              <div className="flex flex-wrap gap-3">
                {HERO_LABELS.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={phoneLink}
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler l’atelier
                </a>
                <span className="text-sm text-gray-600">
                  Devis gratuit, dossier assurance géré de A à Z.
                </span>
              </div>
            </div>
            <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
              <div className="relative space-y-4">
                <p className="text-sm uppercase tracking-wide text-gray-300">
                  Atelier à Éguilles
                </p>
                <p className="text-3xl font-bold leading-tight">
                  Gestion assurance, <br />
                  véhicule de prêt, <br />
                  restitution planifiée.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  <Sparkles className="h-4 w-4" />
                  Libre choix du réparateur (toutes assurances)
                </div>
                <div className="rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-gray-100 ring-1 ring-white/10">
                  <p>
                    Vous êtes à Aix ou à Marseille ? Consultez nos pages locales
                    :
                    <br />
                    <a
                      href="/aix-en-provence/carrosserie"
                      className="font-semibold underline"
                    >
                      Carrosserie à Aix-en-Provence
                    </a>{" "}
                    •{" "}
                    <a
                      href="/marseille/carrosserie"
                      className="font-semibold underline"
                    >
                      Carrosserie à Marseille
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
