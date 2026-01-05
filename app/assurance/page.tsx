import { FadeIn } from "@/components/animations/FadeIn";
import {
  Scale,
  FileText,
  Car,
  ShieldCheck,
  Gavel,
  ArrowRight,
  Phone,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function AssurancePage() {
  const etapesExpertise = [
    "Déclaration de sinistre (avec notre aide)",
    "Fixation du rendez-vous d'expertise",
    "Examen du véhicule et rapport d'expert",
    "Confirmation de prise en charge",
    "Lancement des travaux et commande de pièces",
    "Réparation et restitution du véhicule",
    "Règlement direct par l'assurance (zéro avance)",
  ];

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* SECTION HERO DE LA PAGE */}
      <section className="relative pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-6">
              Expertise & Droit des assurés
            </FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-[0.9] mb-8 uppercase">
              Prise en charge par <br />
              <span className="text-orange-600 underline decoration-zinc-200 underline-offset-12">
                votre assurance auto.
              </span>
            </h1>
            <p className="font-sans text-xl text-zinc-600 leading-relaxed font-light">
              Après un sinistre, il ne s’agit pas seulement de réparer la tôle :
              il faut déclarer le dossier, comprendre vos garanties et gérer
              l’expertise. Nous simplifions chaque étape.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION LIBRE CHOIX & LOI HAMON */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Scale className="w-12 h-12 text-zinc-900 mb-6" />
              <h2 className="font-heading text-4xl font-black tracking-tighter text-zinc-900 uppercase leading-none mb-6">
                Le libre choix <br />
                du réparateur
              </h2>
              <div className="p-6 bg-zinc-50 border-l-4 border-orange-600">
                <p className="font-sans text-sm text-zinc-600 leading-relaxed italic">
                  "La loi vous laisse le libre choix de votre réparateur. Vous
                  n'êtes jamais obligé de passer par un garage imposé par votre
                  assureur."
                </p>
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028742662"
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-4 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-orange-600 transition-colors"
                >
                  Article L211-5-1 du Code des assurances{" "}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="space-y-8">
              <h3 className="font-heading text-2xl font-bold text-zinc-950 uppercase tracking-tight flex items-center gap-4">
                <span className="w-8 h-px bg-orange-600" /> Nous vous aidons dès
                la déclaration
              </h3>
              <p className="font-sans text-zinc-600 leading-relaxed font-light text-lg">
                Dès que l’incident arrive, nous pouvons vous accompagner pour
                faire ou finaliser votre déclaration de sinistre auprès de votre
                assurance, en vous guidant sur les éléments à communiquer.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {etapesExpertise.map((etape, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 border border-zinc-100 bg-zinc-50/50 group hover:border-orange-200 transition-colors"
                  >
                    <span className="font-mono text-xs text-zinc-300 font-bold group-hover:text-orange-600">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-sm font-bold text-zinc-800 uppercase tracking-tight">
                      {etape}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-zinc-400 italic mt-4">
                De votre côté, aucune paperasse supplémentaire : nous gérons le
                traitement intégral du dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES LOGISTIQUES */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 font-heading text-[20vw] leading-none select-none -translate-y-1/4 translate-x-1/4">
          LOGISTIQUE
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="font-heading text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Dossier géré de A à Z, <br />
                <span className="text-orange-600">Zéro contrainte.</span>
              </h3>
              <p className="font-sans text-zinc-400 font-light text-lg mb-12">
                Une fois le sinistre déclaré, nous nous chargeons de
                l’organisation de l’expertise, des échanges techniques et de la
                planification de la réparation.
              </p>
              <div className="space-y-6">
                {[
                  "Enlèvement du véhicule (Domicile / Travail)",
                  "Mise à disposition d'un véhicule de prêt",
                  "Aucune avance de frais de réparation",
                  "Information en temps réel des étapes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                      <CheckCircle2
                        size={14}
                        className="text-zinc-600 group-hover:text-white"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
                <FileText className="text-orange-600 w-16 h-16 mb-8" />
                <h4 className="font-heading text-3xl font-bold uppercase mb-4 tracking-tighter">
                  Gestion Administrative
                </h4>
                <p className="font-sans text-zinc-500 font-light leading-relaxed">
                  L’idée est simple : une fois le sinistre déclaré, nous nous
                  occupons du reste à votre place. Vous restez maître de votre
                  véhicule, nous gérons la complexité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LITIGES & JURIDIQUE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h3 className="font-heading text-4xl font-black tracking-tighter uppercase mb-8">
                Gestion des litiges & <br />
                Défense de vos intérêts
              </h3>
              <p className="font-sans text-zinc-600 text-lg font-light leading-relaxed mb-8">
                Si un désaccord apparaît (montant de la réparation, refus
                partiel, interprétation des garanties…), nous ne vous laissons
                pas seul face à l’assurance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-orange-600" />
                  <p className="font-sans text-sm font-bold text-zinc-900 uppercase tracking-tight">
                    Analyse Technique
                  </p>
                  <p className="font-sans text-sm text-zinc-500 font-light">
                    Reprise point par point du dossier pour identifier les
                    blocages techniques ou administratifs.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-orange-600" />
                  <p className="font-sans text-sm font-bold text-zinc-900 uppercase tracking-tight">
                    Service Juridique
                  </p>
                  <p className="font-sans text-sm text-zinc-500 font-light">
                    Accès à un avocat partenaire pour faire valoir vos droits en
                    cas de litige prolongé.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-zinc-50 p-10 border border-zinc-100">
              <Gavel size={40} className="text-zinc-900 mb-6" />
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">
                Objectif
              </p>
              <p className="font-heading text-xl font-bold text-zinc-900 uppercase tracking-tight">
                Éviter que le dossier ne traîne inutilement et protéger votre
                capital auto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FINALE : POURQUOI NOUS CHOISIR */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h3 className="font-heading text-5xl font-black tracking-tighter uppercase mb-16">
            Moins à payer,{" "}
            <span className="text-orange-600">plus de qualité.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-left">
            {[
              {
                t: "Liberté Totale",
                d: "Exercice du droit au libre choix du réparateur.",
              },
              {
                t: "Rapidité",
                d: "Réparation plus rapide que le circuit imposé.",
              },
              {
                t: "Service +",
                d: "Travail soigné avec travaux supplémentaires offerts.",
              },
              { t: "Économie", d: "Bénéficiez d'une franchise offerte." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-zinc-200 bg-white">
                <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-mono text-xs mb-6">
                  {idx + 1}
                </div>
                <p className="font-heading text-lg font-bold uppercase mb-2">
                  {item.t}
                </p>
                <p className="font-sans text-sm text-zinc-500 font-light leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          {/* FINAL CTA BOX */}
          <div className="bg-zinc-950 p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-4xl font-black tracking-tighter uppercase mb-6 leading-none">
                Confiez-nous votre dossier d'assurance
              </h2>
              <p className="font-sans text-zinc-400 mb-10 font-light">
                Ne laissez pas les démarches administratives vous freiner.
                Contactez notre atelier à Éguilles pour une prise en charge
                immédiate.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-mono px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  Prendre RDV <ArrowRight size={14} />
                </button>
                <a
                  href="tel:0442XXXXXX"
                  className="border border-zinc-800 hover:border-zinc-600 text-white font-mono px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={14} /> Appeler l'atelier
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
