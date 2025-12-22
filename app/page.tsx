"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  CheckCircle2,
  Car,
  PaintBucket,
  FileCheck,
  ArrowRight,
  Star,
  Clock,
  ShieldCheck,
  Menu,
  Truck,
  CarFront,
} from "lucide-react";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site.config";

// --- CONFIGURATION & DATA ---

const CONTACT_INFO = {
  phone: siteConfig.phone,
  phoneDisplay: siteConfig.phoneFr ?? siteConfig.phone,
  address: siteConfig.full_address,
  mapLink: siteConfig.mapLink,
  hours: `${siteConfig.openingHours.weekdays} | ${siteConfig.openingHours.weekend}`,
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnostic & Chiffrage",
    desc: "Expertise visuelle immédiate. Nous analysons les dommages et établissons un devis précis connecté aux barèmes assurances.",
  },
  {
    title: "Gestion Administrative",
    desc: "Nous pilotons le dossier avec votre assurance et l'expert. Vous n'avez aucune démarche complexe à gérer.",
  },
  {
    title: "Réparation Technique",
    desc: "Commande pièces d'origine, véhicule de courtoisie fourni, et exécution des travaux selon les normes constructeur.",
  },
  {
    title: "Contrôle Qualité",
    desc: "Inspection finale sous lumière rasante, nettoyage complet du véhicule et restitution clés en main.",
  },
];

const REVIEWS = [
  {
    name: "Sophie D.",
    location: "Éguilles",
    text: "Service d'une rare qualité. Véhicule de prêt récent, aucuns frais à avancer et ma voiture est ressortie plus neuve qu'avant le choc.",
  },
  {
    name: "Marc A.",
    location: "Aix-en-Provence",
    text: "Atelier très pro. Ils ont géré l'expert qui voulait minimiser les réparations. Résultat parfait, peinture indiscernable.",
  },
  {
    name: "Ludo P.",
    location: "Marseille",
    text: "Enfin un carrossier qui soigne les détails. Accueil classe, atelier propre, et respect des délais annoncé.",
  },
];

const FAQS = [
  {
    q: "Proposez-vous un véhicule de courtoisie ?",
    r: "Absolument. Nous disposons d'une flotte de véhicules récents pour garantir votre mobilité durant toute la durée de l'immobilisation.",
  },
  {
    q: "La franchise est-elle offerte ?",
    r: "C'est notre politique commerciale standard : selon l'ampleur des travaux, nous prenons en charge votre franchise (totale ou partielle).",
  },
  {
    q: "Faut-il avancer les frais ?",
    r: "Non. Grâce à la cession de créance, nous sommes réglés directement par votre assurance. Vous ne sortez pas d'argent.",
  },
  {
    q: "Avez-vous l'agrément de mon assurance ?",
    r: "Loi Hamon : Vous avez le libre choix du réparateur. Que nous soyons agréés ou non par votre compagnie spécifique, cela ne change rien pour vous : pas d'avance de frais et garantie des travaux.",
  },
];

// --- COMPONENTS ---

type SectionTitleProps = {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  align?: "center" | "left";
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
}) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"}`}>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ElementType;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}) => {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};

const SERVICES = [
  {
    title: "Réparation tôlerie",
    description:
      "Redressage, réparation d’éléments et remise en forme pour retrouver un véhicule propre et aligné.",
    image: "/img/tolerie.jpg", // Remplace par tes vrais chemins
    href: "/services/carrosserie-generale",
    showBtn: true,
  },
  {
    title: "Peinture carrosserie",
    description:
      "Préparation soignée, peinture constructeur et vernis pour un rendu uniforme et une finition impeccable.",
    image: "/img/peinture.jpg",
    href: "/services/carrosserie-generale",
    showBtn: true,
  },
  {
    title: "Fin de location LOA / LLD",
    description:
      "Remise en état ciblée pour éviter les pénalités de restitution et présenter un véhicule impeccable.",
    image: "/img/restitution.jpg",
    href: "/services/loa-lld",
    showBtn: false,
  },
  {
    title: "Réparation de jantes",
    description:
      "Correction des impacts de trottoirs et rénovation complète pour redonner l'aspect du neuf à vos roues.",
    image: "/img/jantes.jpg",
    href: "",
    showBtn: false,
  },
  {
    title: "Covering & Esthétique",
    description:
      "Personnalisation partielle ou totale et protection de carrosserie pour un style unique.",
    image: "/img/covering.jpg",
    href: "/services/covering",
    showBtn: false,
  },
  {
    title: "Accompagnement Sinistre",
    description:
      "Gestion complète de votre dossier assurance, expertise et aide aux démarches administratives.",
    image: "/img/sinistre.jpg",
    href: "/assurance",
    showBtn: true,
  },
];
const Badge: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
    <CheckCircle2 className="w-3 h-3 mr-2" />
    {children}
  </span>
);

// --- MAIN PAGE ---

const microCopy = [
  "Aucune avance de travaux",
  "Dossier assurance géré de A à Z",
  "Véhicule de prêt",
  "Franchise offerte",
  "Travaux rapides",
  "Enlèvement possible",
  "Devis gratuit / 24h",
];

export default function LCCarrosserieHome() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[90vh] flex flex-col justify-center bg-zinc-50 pt-32 pb-20 overflow-hidden font-sans">
        {/* Background Architectural : Lignes de structure */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-zinc-200/60 max-w-7xl" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-zinc-200/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            {/* COLONNE GAUCHE : TEXTE EDITORIAL */}
            <motion.div
              className="lg:col-span-7 relative z-20" // Augmentation du z-index pour rester au dessus
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Social Proof */}
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-tighter text-zinc-900 uppercase">
                    4.9/5{" "}
                    <span className="text-zinc-400 font-medium ml-1">
                      sur Google (80+ avis)
                    </span>
                  </span>
                </div>
                <div className="h-4 w-px bg-zinc-300 hidden sm:block" />
                <div className="flex items-center gap-2 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Atelier Éguilles
                  </span>
                </div>
              </div>

              {/* Titre avec gestion de la cassure de mot pour éviter l'overflow */}
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-950 leading-[0.85] mb-8 uppercase break-words">
                LC CARROSSERIE, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-orange-600">
                  RESTAURATION & PEINTURE.
                </span>
              </h1>

              {/* Texte */}
              <p className="font-sans text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed font-light">
                Votre voiture a subi un choc, un accrochage ou des rayures de
                vandalisme ? Notre atelier de carrosserie installé à Éguilles
                prend en charge votre véhicule, gère entièrement votre dossier
                avec l’assurance et vous permet de repartir sans avance de
                travaux lorsque c’est possible. Nous accompagnons au quotidien
                les automobilistes d’Éguilles, du pays d’Aix et de la métropole
                marseillaise.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
                <button className="font-mono bg-zinc-950 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-3 group">
                  Prendre Rendez-vous
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="font-mono border border-zinc-200 bg-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 text-zinc-900"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </motion.div>

            {/* COLONNE DROITE : IMAGE & SERVICES */}
            <motion.div
              className="lg:col-span-5 relative z-10 mt-10 lg:mt-0 flex flex-col gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] bg-zinc-200 overflow-hidden shadow-2xl lg:shadow-none">
                <img
                  src="/img/hero.png"
                  alt="Expert LC Carrosserie avec voiture Alpine orange"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-[10px] border-white/5" />
              </div>

              {/* Checklist */}
              <div className="pt-8 border-t border-zinc-200">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 block">
                  Expertise & Services
                </span>
                <div className="grid grid-cols-1 gap-y-3">
                  {microCopy.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 bg-orange-600 shrink-0" />
                      <span className="font-mono text-[11px] font-bold text-zinc-800 uppercase tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Expertise Technique"
            subtitle="Nous ne sommes pas un simple garage. Nous sommes un atelier technique dédié à la restauration esthétique et structurelle de votre véhicule."
          />

          <section className="bg-white py-24 md:py-32 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* HEADER SECTION */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                <div className="max-w-2xl">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">
                    Nos Expertises
                  </span>
                  <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9]">
                    Services <br />
                    <span className="text-zinc-400">Haute Précision.</span>
                  </h2>
                </div>
                <p className="font-sans text-zinc-500 max-w-sm text-sm leading-relaxed mb-2">
                  De la petite rayure à la restructuration lourde, notre atelier
                  déploie un savoir-faire artisanal couplé aux technologies de
                  pointe.
                </p>
              </div>

              {/* GRILLE DE SERVICES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
                {SERVICES.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white group flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors duration-500" />
                    </div>

                    <div className="p-8 flex flex-col flex-1 min-h-[280px]">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-heading text-2xl font-black tracking-tight text-zinc-950 uppercase leading-none">
                          {service.title}
                        </h3>
                        <CheckCircle2
                          size={18}
                          className="text-zinc-200 group-hover:text-orange-600 transition-colors"
                        />
                      </div>

                      <p className="font-sans text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                        {service.description}
                      </p>

                      {service.showBtn && (
                        <Link
                          href={service.href}
                          className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950 hover:text-orange-600 transition-colors group/btn"
                        >
                          Plus d'infos
                          <ArrowUpRight
                            size={14}
                            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INSURANCE HIGHLIGHT BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-primary font-bold tracking-wide uppercase text-sm">
                    Zéro Tracas
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Gestion Intégrale du Sinistre
                </h3>
                <p className="text-muted-foreground mb-8">
                  Votre assurance tente de vous imposer son réparateur ?
                  Refusez. La loi est de votre côté. En choisissant LC
                  Carrosserie, nous gérons l'expert, la paperasse, et nous vous
                  offrons plus de services que le garage agréé.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "0€ d'avance de frais)",
                    "Franchise offerte",
                    "Véhicule de prêt",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-foreground font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link href="/contact#contact-form">
                    <Button variant="primary">Déclarer un sinistre</Button>
                  </Link>
                  <Link
                    href="/assurance"
                    className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-950 hover:text-orange-600 transition-colors group/btn"
                  >
                    Plus d'infos
                    <ArrowUpRight
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
              <div className="bg-secondary md:w-1/3 p-8 flex flex-col justify-center items-center text-center border-l border-border">
                <div className="text-5xl md:text-6xl font-black text-foreground mb-2">
                  0€
                </div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest mb-4">
                  A avancer
                </div>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Nous encaissons le règlement uniquement lorsque l'assurance
                  vous a payé.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Votre parcours client"
            subtitle="Une organisation industrielle au service de votre tranquillité."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-muted/30 group-hover:text-primary/20 transition-colors">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div className="h-px bg-border w-full relative top-[-20px]" />
                </div>

                <h4 className="text-lg font-bold mb-3 text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-50 py-24 md:py-32 overflow-hidden font-sans">
        {/* Background Decoratif discret */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-100/50 -skew-x-12 translate-x-1/2 z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* COLONNE GAUCHE : TEXTE PRINCIPAL */}
            <div className="lg:col-span-6">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 block">
                Proximité & Mobilité
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-[0.9] mb-8">
                Un atelier à Eguilles, <br />
                <span className="text-orange-600">
                  au service du pays d'Aix et de Marseille.
                </span>
              </h2>
              <p className="text-zinc-600 text-lg font-light leading-relaxed mb-10">
                Notre carrosserie est située à Éguilles, tout près
                d’Aix-en-Provence. Nous accompagnons les automobilistes du pays
                d’Aix et de la métropole marseillaise, avec une organisation
                pensée pour simplifier votre prise en charge, notamment en cas
                de sinistre.
              </p>

              {/* BADGE SERVICE À DOMICILE */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white border border-zinc-200 shadow-sm"
              >
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-zinc-950 flex items-center justify-center text-white border-2 border-white">
                    <Truck size={18} />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center text-white border-2 border-white">
                    <CarFront size={18} />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[11px] font-black uppercase tracking-widest text-zinc-950">
                    Service Premium à domicile
                  </p>
                  <p className="text-xs text-zinc-500 font-light">
                    Enlèvement du véhicule + véhicule de prêt à votre porte.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* COLONNE DROITE : CARTES LOCALES */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-6">
              {/* CARTE AIX */}
              <div className="group bg-white p-8 border border-zinc-200 hover:border-orange-600/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-sm bg-zinc-50 flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-orange-600 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-zinc-950">
                    Carrosserie pour Aix-en-Provence
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
                  Depuis Aix-en-Provence, vous pouvez nous confier votre
                  véhicule pour une réparation de carrosserie et une gestion de
                  dossier assurance simplifiée. Véhicule de prêt possible.
                </p>
                <Link
                  href="/aix-en-provence/carrosserie"
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-950 group-hover:text-orange-600 transition-colors"
                >
                  Découvrir l'offre Aix-en-Provence{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* CARTE MARSEILLE */}
              <div className="group bg-white p-8 border border-zinc-200 hover:border-orange-600/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-sm bg-zinc-50 flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-orange-600 transition-colors">
                    <MapPin size={16} />
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-zinc-950">
                    Carrosserie pour Marseille
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
                  Vous venez de Marseille ou des environs ? Nous vous proposons
                  une prise en charge claire, un suivi de dossier, et une
                  restitution contrôlée, avec une organisation flexible.
                </p>
                <Link
                  href="/marseille/carrosserie"
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-950 group-hover:text-orange-600 transition-colors"
                >
                  Découvrir l'offre Marseille{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* REVIEWS SECTION */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-foreground">
                L'avis de nos clients
              </h2>
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-foreground font-bold">4.9/5</span>
                <span className="text-muted-foreground text-sm">
                  (Google Reviews)
                </span>
              </div>
            </div>
            <Button variant="outline">Lire tous les avis</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-background p-8 rounded-xl border border-border shadow-xs"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">
                      {review.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & FAQ */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Questions Fréquentes
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-card rounded-lg border border-border overflow-hidden"
                  >
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 group-open:bg-secondary/50 transition-colors text-foreground">
                      {faq.q}
                      <span className="transition-transform duration-300 group-open:rotate-180 text-muted-foreground">
                        <svg
                          fill="none"
                          height="20"
                          width="20"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-muted-foreground mt-2 p-5 pt-0 text-sm leading-relaxed">
                      {faq.r}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-border relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

              <h2 className="text-2xl font-bold mb-8 text-foreground">
                Nous trouver à Éguilles
              </h2>

              <address className="not-italic space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-secondary rounded-full text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-lg mb-1">
                      Atelier Principal
                    </strong>
                    <span className="text-muted-foreground block mb-2">
                      {CONTACT_INFO.address}
                    </span>
                    <a
                      href={CONTACT_INFO.mapLink}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Voir sur la carte →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-secondary rounded-full text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-lg mb-1">
                      Horaires Atelier
                    </strong>
                    <span className="text-muted-foreground">
                      {CONTACT_INFO.hours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-secondary rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-lg mb-1">
                      Contact Rapide
                    </strong>
                    <span className="text-muted-foreground block mb-2">
                      Réponse immédiate aux heures d'ouverture
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </address>

              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  icon={Phone}
                >
                  Appeler l'atelier
                </Button>
                <Button variant="outline" className="w-full justify-center">
                  Envoyer une photo (MMS/WhatsApp)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
