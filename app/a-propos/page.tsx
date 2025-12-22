"use client";

import { motion } from "framer-motion";
import {
  Users,
  History,
  Target,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-950 font-sans">
      <main className="space-y-0">
        {/* HEADER SECTION - H1 */}
        <section className="relative pt-24 pb-20 border-b border-zinc-100 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(var(--zinc-950)_1px,transparent_1px),linear-gradient(90deg,var(--zinc-950)_1px,transparent_1px)] [background-size:30px_30px]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div {...fadeIn}>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 block">
                L'Excellence Visible
              </span>
              <h1 className="font-heading text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                À propos de notre <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-950 to-zinc-500">
                  carrosserie.
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-zinc-500 font-light leading-relaxed italic">
                Nous sommes une équipe de carrossiers et peintres attachés aux
                finitions propres et aux délais tenus. Chez LC Carrosserie, rien
                n'est laissé au hasard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* NOTRE HISTOIRE - H2 */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <History className="text-orange-600" size={24} />
                <h2 className="font-heading text-3xl font-black uppercase italic tracking-tight">
                  Notre Histoire
                </h2>
              </div>
              <div className="space-y-6 text-zinc-600 leading-relaxed font-light">
                <p>
                  Ce qui nous anime : optimiser, organiser, trouver la meilleure
                  solution pour chaque situation — sans jamais perdre de vue la
                  satisfaction client.
                </p>
                <p>
                  Depuis notre création, chaque jour, nous veillons à ce que LC
                  Carrosserie avance, se structure et offre un service sérieux,
                  maîtrisé et fiable. Nous ne visons pas "correct", nous visons
                  l'excellence.
                </p>
              </div>
            </motion.div>
            <div className="aspect-video bg-zinc-200 border border-zinc-300 relative overflow-hidden group">
              <img
                src="/img/atelier-equipe.jpg"
                alt="Atelier LC Carrosserie"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-zinc-950/10" />
            </div>
          </div>
        </section>

        {/* NOTRE ÉQUIPE - H2 (Basé sur tes captures) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-heading text-4xl font-black uppercase tracking-tighter mb-16 text-center lg:text-left">
              Vos principaux{" "}
              <span className="text-orange-600">interlocuteurs.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
              {/* LUDOVIC */}
              <motion.div className="bg-white p-10 space-y-6" {...fadeIn}>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-black uppercase italic tracking-tight">
                    Ludovic
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                    Direction & Stratégie
                  </p>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  Ludovic est celui qui pilote l'entreprise avec rigueur,
                  constance et une vision claire du développement. Il veille
                  quotidiennement à ce que chaque intervention réponde à nos
                  standards de qualité élevés.
                </p>
              </motion.div>

              {/* AXELLE */}
              <motion.div
                className="bg-white p-10 space-y-6"
                {...fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-black uppercase italic tracking-tight">
                    Axelle
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                    Relation Client & Expertise Service
                  </p>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  Axelle, c'est la touche de délicatesse et d'attention que nos
                  clients remarquent immédiatement. Elle accompagne, rassure et
                  explique — elle transforme une situation perçue comme
                  contraignante en une expérience fluide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NOS VALEURS & ENGAGEMENTS - H2 (Basé sur ta capture "Notre engagement") */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600 opacity-10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Nos valeurs : pourquoi <br />
                <span className="text-orange-600">nous choisir.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Un travail propre, irréprochable",
                  "Des démarches simplifiées",
                  "Un accompagnement complet",
                  "Une écoute réelle",
                  "Une exigence quotidienne",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="h-5 w-5 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" strokeWidth={4} />
                    </div>
                    <span className="font-mono text-xs uppercase font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 space-y-4">
                <Target className="text-orange-600" />
                <h3 className="font-heading text-xl font-black uppercase italic tracking-tight">
                  Savoir-faire
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Redressage, peinture, remplacement d'éléments. Nous
                  intervenons sur utilitaires et particuliers avec une précision
                  chirurgicale.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-bold text-orange-500 uppercase hover:text-white transition-colors"
                >
                  Voir nos services <ArrowRight size={12} />
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 space-y-4">
                <ShieldCheck className="text-orange-600" />
                <h3 className="font-heading text-xl font-black uppercase italic tracking-tight">
                  Confiance
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  Diagnostics clairs et devis rapides. Nous gérons votre dossier
                  assurance pour une tranquillité d'esprit totale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ATELIER & ZONE D'INTERVENTION - H2 */}
        <section className="py-24 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tighter">
                Notre Atelier à{" "}
                <span className="text-orange-600">Éguilles.</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed">
                Situé stratégiquement pour desservir tout le Pays d'Aix et la
                métropole marseillaise. Nous proposons un service de
                récupération et restitution de véhicule à domicile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              <Link
                href="/carrossier-aix-en-provence"
                className="group p-8 border border-zinc-100 bg-zinc-50 hover:bg-zinc-950 transition-all duration-500"
              >
                <MapPin className="mx-auto mb-4 text-orange-600" />
                <h3 className="font-heading text-xl font-black uppercase italic group-hover:text-white transition-colors">
                  Aix-en-Provence
                </h3>
                <p className="text-[10px] font-mono uppercase text-zinc-400 mt-2 tracking-widest">
                  En savoir plus
                </p>
              </Link>
              <Link
                href="/carrossier-marseille"
                className="group p-8 border border-zinc-100 bg-zinc-50 hover:bg-zinc-950 transition-all duration-500"
              >
                <MapPin className="mx-auto mb-4 text-orange-600" />
                <h3 className="font-heading text-xl font-black uppercase italic group-hover:text-white transition-colors">
                  Marseille
                </h3>
                <p className="text-[10px] font-mono uppercase text-zinc-400 mt-2 tracking-widest">
                  En savoir plus
                </p>
              </Link>
              <Link
                href="/contact"
                className="group p-8 border border-zinc-100 bg-zinc-50 hover:bg-orange-600 transition-all duration-500"
              >
                <Users className="mx-auto mb-4 text-zinc-400 group-hover:text-white" />
                <h3 className="font-heading text-xl font-black uppercase italic group-hover:text-white transition-colors">
                  Nous Contacter
                </h3>
                <p className="text-[10px] font-mono uppercase text-zinc-400 group-hover:text-orange-100 mt-2 tracking-widest">
                  Planifier un RDV
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
