import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Star } from "lucide-react";

import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Carrosserie générale : services, prix et assurance | LC Carrosserie",
  description:
    "Services de carrosserie, déroulé en atelier, prix et délais. Assurance : prise en charge complète, gestion des litiges, sans avance travaux et franchise offerte.",
};

const HERO_LABELS = [
  "Toutes assurances",
  "Aucune avance travaux",
  "Franchise offerte",
];

const WORK_ITEMS = [
  {
    title: "Réparation de tôlerie",
    body: [
      "Redressage et remise en forme des éléments de tôlerie (ailes, portières, capots…).",
      "Remplacement des pièces trop endommagées pour être réparées.",
      "Remise en état des pare-chocs, bas de caisse et boucliers.",
      "Objectif : des lignes nettes, des ajustements réguliers et un rendu conforme avant peinture.",
    ],
  },
  {
    title: "Peinture de carrosserie",
    body: [
      "Préparation des supports (ponçage, apprêt, masquage) avant teinte constructeur et vernis.",
      "Réparation de rayures, éclats et défauts d’aspect.",
      "Peinture partielle d’un élément ou complète de plusieurs éléments pour harmoniser la teinte.",
      "Résultat attendu : aucun contraste visible entre les zones reprises et le reste de la carrosserie.",
    ],
  },
  {
    title: "Débosselage sans peinture",
    body: [
      "Corrige les bosses quand la peinture est intacte (grêle, coups de portière, petits enfoncements).",
      "Solution rapide et économique, en conservant la peinture d’origine.",
      "Validation au cas par cas : si la zone est trop marquée, on privilégie une réparation classique.",
    ],
  },
  {
    title: "Remise en état avant restitution LOA / LLD",
    body: [
      "Traitement des impacts, retouches de peinture, correction des bosses légères.",
      "Remise en état des éléments visibles pour limiter les frais de fin de contrat.",
      "Ciblage des travaux réellement utiles pour éviter les surcoûts.",
      "Basés à Éguilles : prise en charge pour le Pays d’Aix et la métropole Aix-Marseille-Provence.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Diagnostic et préparation",
    desc: "Inspection des zones touchées, validation des pièces à remplacer et de la méthode (tôlerie, peinture, DSP).",
  },
  {
    title: "Démontage et remise en forme",
    desc: "Démontage des éléments pour travailler proprement, redressage, mastic, remplacement des pièces irréparables.",
  },
  {
    title: "Préparation, peinture, finition",
    desc: "Préparation des surfaces, application de la teinte constructeur puis vernis, contrôle des raccords et de la brillance.",
  },
  {
    title: "Remontage et contrôle final",
    desc: "Remontage, ajustements, vérification sous différents angles et lumières avant restitution.",
  },
];

const EXTRA_SERVICES = [
  {
    title: "Rénovation des optiques de phares",
    points: [
      "Ponçage et polissage pour retrouver la transparence.",
      "Protection pour limiter le re-jaunissement.",
    ],
  },
  {
    title: "Réparation de jantes alu abîmées",
    points: [
      "Rattrapage des bords frottés et micro-chocs.",
      "Correction des éclats et défauts d’aspect.",
    ],
  },
  {
    title: "Rénovation et réparation de cuir",
    points: [
      "Nettoyage, traitement et recoloration des zones marquées.",
      "Petites réparations sur sièges, volant ou éléments intérieurs.",
    ],
  },
  {
    title: "Covering partiel ou complet",
    points: [
      "Protection ou personnalisation (toit, rétros, éléments ciblés).",
      "Projet global possible sur plusieurs éléments de carrosserie.",
    ],
  },
  {
    title: "Dépannage et mécanique légère",
    points: [
      "Organisation d’un rapatriement si le véhicule ne roule pas.",
      "Interventions légères en parallèle pour éviter de multiplier les rendez-vous.",
    ],
  },
];

const FAQ = [
  {
    q: "Est-ce que je suis obligé de passer par le garage conseillé par mon assurance ?",
    a: "Non. Vous avez le libre choix du réparateur, même si l’assureur recommande un garage partenaire. Nous gérons la réparation et le dossier assurance dans le respect de vos garanties.",
  },
  {
    q: "Est-ce que je vais devoir avancer les frais de réparation ?",
    a: "Non dans le cadre d’un sinistre pris en charge : aucune avance de travaux, franchise offerte. Un chèque de garantie est demandé et n’est encaissé qu’après indemnisation de votre assurance.",
  },
  {
    q: "Combien de temps ma voiture sera-t-elle immobilisée ?",
    a: "Selon l’ampleur des dégâts, les pièces à remplacer et la validation assurance. Nous donnons dès le devis une date de dépôt (ou d’enlèvement), une durée estimée et les solutions de véhicule de prêt.",
  },
  {
    q: "Comment se passe le devis pour une réparation de carrosserie ?",
    a: "Examen du véhicule ou photos pour lister les éléments touchés, pièces à remplacer et peinture à reprendre. Devis détaillé gratuit et sans engagement, puis planification après validation.",
  },
  {
    q: "Pouvez-vous aussi traiter des petits défauts esthétiques en plus du sinistre ?",
    a: "Oui. Pendant l’immobilisation, nous pouvons intégrer rayures, jantes frottées, optiques ternis ou cuir abîmé, en distinguant ce qui relève du sinistre et ce qui relève d’une remise en état esthétique.",
  },
];

const WORK_EXAMPLES = [
  {
    title: "Choc de parking",
    subtitle: "Pare-chocs arrière enfoncé + peinture",
    beforeAlt: "Pare-chocs arrière enfoncé avec rayures",
    afterAlt: "Pare-chocs arrière réparé et repeint",
  },
  {
    title: "Gros impact latéral",
    subtitle: "Aile et portière froissées",
    beforeAlt: "Aile et portière froissées",
    afterAlt: "Aile et portière redressées et peintes",
  },
  {
    title: "Restitution LOA",
    subtitle: "Retouches multiples avant fin de contrat",
    beforeAlt: "Jantes frottées et rayures multiples",
    afterAlt: "Jantes et éléments carrosserie remis à neuf",
  },
];

const formatPhoneForTel = (phone: string) => phone.replace(/\s+/g, "");

export default function CarrosserieGeneralePage() {
  const phoneLink = `tel:${formatPhoneForTel(siteConfig.phone)}`;

  return (
    <div className="bg-white text-gray-900">
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
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={1.2} />
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
                Choc, rayure ou élément à reprendre : on diagnostique, chiffre et répare dans notre atelier à Éguilles.
                Nous vous expliquons ce que votre assurance peut couvrir, préparons le dossier, puis planifions l’intervention
                pour remettre votre véhicule en état rapidement. Intervention dans les Bouches-du-Rhône, autour d’Aix-en-Provence et de Marseille.
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
                <p className="text-sm uppercase tracking-wide text-gray-300">Atelier à Éguilles</p>
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
                    Vous êtes à Aix ou à Marseille ? Consultez nos pages locales :
                    <br />
                    <a href="/aix-en-provence/carrosserie" className="font-semibold underline">
                      Carrosserie à Aix-en-Provence
                    </a>{" "}
                    •{" "}
                    <a href="/marseille/carrosserie" className="font-semibold underline">
                      Carrosserie à Marseille
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Les travaux de carrosserie que nous réalisons</h2>
            <p className="text-gray-700">
              Sinistre assurance ou remise en état esthétique : nous corrigeons les défauts visibles qui dégradent l’apparence
              ou la valeur de votre voiture (tôle marquée, peinture abîmée, bosses, petits chocs du quotidien).
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {WORK_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-700 list-disc list-inside">
                  {item.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Comment se déroule une réparation en atelier</h2>
          <p className="text-gray-700">
            Chaque véhicule suit un déroulé précis pour garantir un résultat propre et durable, depuis le diagnostic jusqu’au contrôle final.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-4 top-4 text-5xl font-black text-gray-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Services complémentaires pour remettre votre véhicule en valeur</h2>
            <p className="text-gray-700">
              À ajouter pendant une réparation ou sur rendez-vous : sécurité, confort et esthétique.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EXTRA_SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-gray-700 list-disc list-inside">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-gray-100 bg-zinc-900 p-8 text-white shadow-sm">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Prix, devis et délais</h2>
            <p className="text-zinc-300">
              Devis clair, gratuit et sans engagement. Validation avant lancement des travaux.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 rounded-2xl bg-zinc-800/60 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">Un devis de carrosserie clair</h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-200 list-disc list-inside">
                <li>Éléments concernés : tôlerie, peinture, jantes, optiques, etc.</li>
                <li>Pièces à réparer ou à remplacer, main-d’œuvre et fournitures.</li>
                <li>Part estimée prise en charge par l’assurance.</li>
                <li>Envoi possible après photos, affiné sur place si besoin.</li>
              </ul>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                Estimation sur photos possible
              </div>
            </div>
            <div className="space-y-3 rounded-2xl bg-zinc-800/60 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">Ce qui influence le prix & les délais</h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-zinc-200 list-disc list-inside">
                <li>Ampleur des dégâts et nombre de pièces touchées.</li>
                <li>Réparation vs remplacement de certaines pièces.</li>
                <li>Étendue de la peinture (retouche locale, élément complet, harmonisation).</li>
                <li>Délais liés à l’assurance, à l’expertise et à la disponibilité des pièces.</li>
              </ul>
              <p className="text-sm text-zinc-200">
                Nous vous donnons dès le devis une date de démarrage, une estimation d’immobilisation et les solutions de véhicule de prêt.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Nos réalisations en carrosserie</h2>
            <p className="text-gray-700">
              Quelques cas typiques : chocs de parking, impacts plus lourds, remises en état avant restitution LOA/LLD.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {WORK_EXAMPLES.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="p-4 space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.title}</p>
                  <p className="text-sm text-gray-700">{item.subtitle}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                  <div className="p-4 text-center text-xs text-gray-600">
                    Avant
                    <div className="mt-2 h-24 rounded-lg bg-gray-100" aria-label={item.beforeAlt} />
                  </div>
                  <div className="p-4 text-center text-xs text-gray-600">
                    Après
                    <div className="mt-2 h-24 rounded-lg bg-gray-100" aria-label={item.afterAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Questions fréquentes de nos clients</h2>
            <p className="text-gray-700">Libre choix du réparateur, avance de frais, délais et devis.</p>
          </div>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-gray-900 transition group-open:bg-gray-50">
                  <span>{item.q}</span>
                  <ArrowRight className="mt-1 h-4 w-4 transition group-open:rotate-90" />
                </summary>
                <div className="border-t border-gray-100 bg-gray-50/80 px-4 py-3 text-sm leading-relaxed text-gray-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-zinc-50 p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Parlez-nous de votre réparation</h2>
              <p className="text-gray-700">
                Expliquez la situation, joignez quelques photos : nous préparons votre dossier, vérifions la prise en charge
                possible et vous proposons un plan simple (dépôt ou enlèvement, véhicule de prêt, délais).
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-semibold text-gray-900">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                  Dossier assurance géré
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                  0 € à avancer
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200">
                  Véhicule de prêt
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <a
                href={phoneLink}
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Appeler l’atelier
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Demander un devis en ligne
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
