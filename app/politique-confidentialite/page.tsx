"use client";

import React from "react";
import { siteConfig } from "@/data/site.config";
import { useConsent } from "@/hooks/useConsent";
import {
  Lock,
  Database,
  UserCheck,
  Share2,
  Cookie,
  ShieldAlert,
  RefreshCcw,
  Mail,
  Phone,
} from "lucide-react";

const PolitiqueConfidentialite: React.FC = () => {
  const { consent } = useConsent();
  const {
    legalName,
    tradeName,
    websiteUrl,
    full_address,
    streetAddress,
    zipCode,
    city,
    email,
    privacyEmail,
    phoneFr,
  } = siteConfig;

  const privacyContact = privacyEmail || email;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Section */}
      <header className="bg-zinc-950 py-16 mb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-6">
            <Lock size={14} /> Protection des données
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tighter">
            Politique de{" "}
            <span className="text-orange-600">Confidentialité</span>
          </h1>
          <p className="mt-4 text-zinc-400 font-light max-w-2xl mx-auto italic">
            Comment nous traitons vos informations personnelles chez {tradeName}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 grid gap-8">
        {/* Introduction / Responsable */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm leading-relaxed">
          <p className="text-zinc-600 italic mb-6 border-l-4 border-orange-600 pl-4 bg-zinc-50 py-4 rounded-r-xl">
            Cette politique explique comment {legalName} ("{tradeName}")
            collecte, utilise et protège vos données personnelles lorsque vous
            utilisez le site {websiteUrl}. Elle s&apos;applique à
            l&apos;ensemble des services proposés via ce site.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-6 pt-4 border-t border-zinc-100">
            <div>
              <p className="font-mono text-[10px] uppercase text-zinc-400 mb-1 tracking-widest font-bold">
                Responsable du traitement
              </p>
              <p className="text-zinc-950 font-bold">{legalName}</p>
              <p className="text-sm text-zinc-500">{full_address}</p>
            </div>
            <div className="flex gap-4">
              <a
                href={`tel:${phoneFr}`}
                className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-orange-600 transition-colors"
              >
                <Phone size={16} className="text-orange-600" /> {phoneFr}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-orange-600 transition-colors"
              >
                <Mail size={16} className="text-orange-600" /> {email}
              </a>
            </div>
          </div>
        </section>

        {/* Collecte des données */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-orange-600">
            <Database size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight text-zinc-950">
              Collecte des données
            </h2>
          </div>
          <p className="text-zinc-600 text-sm mb-6 font-light">
            Nous collectons uniquement les données nécessaires au traitement de
            vos demandes :
          </p>
          <div className="grid gap-4">
            {[
              "Informations d'identification transmises via le formulaire de contact (nom, prenom).",
              "Coordonnees de contact (adresse e-mail, numero de telephone) pour vous repondre.",
              "Preferences de consentement associees au cookie site_consent.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100"
              >
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 shrink-0" />
                <p className="text-sm text-zinc-700 leading-snug font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Utilisation & Partage */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-lg font-heading font-black uppercase text-zinc-950 mb-4 tracking-tight">
              Utilisation
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Les données collectées servent uniquement à répondre à vos
              demandes, planifier un rendez-vous, vous communiquer des
              informations sur nos services ou assurer le suivi commercial.
            </p>
          </section>
          <section className="bg-white p-8 rounded-2xl border border-zinc-200">
            <div className="flex items-center gap-2 mb-4">
              <Share2 size={18} className="text-orange-600" />
              <h3 className="text-lg font-heading font-black uppercase text-zinc-950 tracking-tight">
                Partage
              </h3>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Vos données ne sont ni vendues ni louées. Elles ne sont partagées
              qu&apos;avec des prestataires techniques indispensables au
              fonctionnement du site.
            </p>
          </section>
        </div>

        {/* Droits des utilisateurs */}
        <section className="bg-zinc-950 p-8 rounded-2xl text-white shadow-xl ring-1 ring-orange-600/50">
          <div className="flex items-center gap-3 mb-6 text-orange-500">
            <UserCheck size={24} />
            <h2 className="text-xl font-heading font-black uppercase tracking-tight">
              Vos Droits (RGPD)
            </h2>
          </div>
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-light">
            <p>
              Vous disposez des droits d&apos;accès, de rectification,
              d&apos;effacement, d&apos;opposition, de limitation et de
              portabilité de vos données.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
              <p className="text-white font-medium italic">
                Pour exercer vos droits :
              </p>
              <div className="grid gap-2 font-mono text-xs uppercase tracking-widest">
                <p className="flex gap-2">
                  <span className="text-orange-600">Email:</span>{" "}
                  {privacyContact}
                </p>
                <p className="flex gap-2">
                  <span className="text-orange-600">Poste:</span> {legalName},{" "}
                  {streetAddress}, {zipCode} {city}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies Section */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm overflow-hidden relative">
          <div className="absolute -top-6 -right-6 text-zinc-50">
            <Cookie size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-orange-600">
              <Cookie size={24} />
              <h2 className="text-xl font-heading font-black uppercase tracking-tight text-zinc-950">
                Utilisation des cookies
              </h2>
            </div>

            <div className="bg-orange-50/50 p-6 rounded-xl mb-6">
              <p className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-600 mb-2">
                État de votre consentement
              </p>
              <p className="text-sm font-bold text-zinc-900 italic">
                {consent
                  ? `YouTube : ${
                      consent.iframe ? "ACCEPTÉ ✅" : "REFUSÉ ❌"
                    } | Analytics : ${
                      consent.analytics ? "ACCEPTÉ ✅" : "REFUSÉ ❌"
                    }`
                  : "Aucun choix effectué"}
              </p>
            </div>

            <div className="space-y-4 text-zinc-600 text-sm font-light">
              <p>
                Nous utilisons le cookie{" "}
                <strong className="text-zinc-900">site_consent</strong> pour
                mémoriser vos préférences YouTube et Google Analytics pendant
                365 jours.
              </p>
              <p>
                Lorsque vous acceptez les cookies tiers, Google peut déposer des
                cookies soumis à leurs propres politiques de confidentialité.
              </p>
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                className="inline-block text-orange-600 font-bold hover:underline"
              >
                Consulter la politique cookies de Google →
              </a>
            </div>
          </div>
        </section>

        {/* Sécurité & Maj */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-2xl border border-zinc-200">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert size={18} className="text-orange-600" />
              <h3 className="text-lg font-heading font-black uppercase text-zinc-950 tracking-tight">
                Sécurité
              </h3>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-light italic">
              Mesures techniques et organisationnelles adaptées pour protéger
              vos données contre toute perte, accès non autorisé ou divulgation.
            </p>
          </section>
          <section className="bg-white p-8 rounded-2xl border border-zinc-200">
            <div className="flex items-center gap-2 mb-4">
              <RefreshCcw size={18} className="text-orange-600" />
              <h3 className="text-lg font-heading font-black uppercase text-zinc-950 tracking-tight">
                Mises à jour
              </h3>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-light">
              Cette politique peut être mise à jour régulièrement. Toute
              modification sera publiée sur cette page.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;

// "use client";
// import { siteConfig } from "@/data/site.config";
// import { useConsent } from "@/hooks/useConsent";

// const PolitiqueConfidentialite: React.FC = () => {
//   const { consent } = useConsent();
//   const {
//     legalName,
//     tradeName,
//     websiteUrl,
//     full_address,
//     streetAddress,
//     zipCode,
//     city,
//     email,
//     privacyEmail,
//     phoneFr,
//   } = siteConfig;

//   const privacyContact = privacyEmail || email;

//   return (
//     <div className="mx-auto max-w-4xl p-5 mt-12 mb-36">
//       <h1 className="text-3xl font-bold text-center mb-12">
//         Politique de confidentialite
//       </h1>

//       <p className="mt-4">
//         Cette politique explique comment {legalName} ("{tradeName}") collecte,
//         utilise et protege vos donnees personnelles lorsque vous utilisez le
//         site {websiteUrl}. Elle s&apos;applique a l&apos;ensemble des services
//         proposes via ce site.
//       </p>
//       <p className="mt-2">
//         Responsable du traitement : <strong>{legalName}</strong>, situe au{" "}
//         {full_address}. Vous pouvez nous joindre au{" "}
//         <strong>{phoneFr || email}</strong> ou par e-mail a{" "}
//         <a href={`mailto:${email}`} className="underline text-coolRoof">
//           {email}
//         </a>
//         .
//       </p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">
//         Collecte des donnees personnelles
//       </h2>
//       <p>
//         Nous collectons uniquement les donnees necessaires au traitement de vos
//         demandes :
//       </p>
//       <ul className="list-disc list-inside ml-4">
//         <li>
//           Informations d&apos;identification transmises via le formulaire de
//           contact (nom, prenom).
//         </li>
//         <li>
//           Coordonnees de contact (adresse e-mail, numero de telephone) pour vous
//           repondre.
//         </li>
//         <li>
//           Preferences de consentement associees au cookie{" "}
//           <strong>site_consent</strong>.
//         </li>
//       </ul>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">Utilisation des donnees</h2>
//       <p>
//         Les donnees collectees servent uniquement a repondre a vos demandes,
//         planifier un rendez-vous, vous communiquer des informations sur nos
//         services ou assurer le suivi commercial, sur la base de votre
//         consentement ou de notre interet legitime a gerer {tradeName}.
//       </p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">
//         Droits des utilisateurs
//       </h2>
//       <p>
//         Vous disposez des droits d&apos;acces, de rectification, d&apos;effacement,
//         d&apos;opposition, de limitation et de portabilite de vos donnees. Vous
//         pouvez retirer votre consentement a tout moment. Pour exercer vos
//         droits, contactez-nous a{" "}
//         <a
//           href={`mailto:${privacyContact}`}
//           className="underline text-coolRoof"
//         >
//           {privacyContact}
//         </a>{" "}
//         ou par courrier a {legalName}, {streetAddress}, {zipCode} {city}.
//       </p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">Partage des donnees</h2>
//       <p>
//         Vos donnees ne sont ni vendues ni louees. Elles ne sont partagees
//         qu&apos;avec des prestataires techniques indispensables au
//         fonctionnement du site
//         {websiteUrl.startsWith("http") ? ` (${websiteUrl})` : ""} et uniquement
//         dans le cadre strict de leur mission, ou si la loi l&apos;exige.
//       </p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">Utilisation des cookies</h2>
//       <p>
//         Nous utilisons un cookie nomme <strong>site_consent</strong> pour
//         memoriser vos preferences concernant :
//       </p>
//       <ul className="list-disc list-inside ml-4">
//         <li>Les contenus tiers (YouTube)</li>
//         <li>La mesure d&apos;audience (Google Analytics, Ads)</li>
//       </ul>
//       <p className="mt-2">
//         Ce cookie est conserve pendant 365 jours et ne contient aucune donnee
//         personnelle.
//       </p>

//       <p className="mt-4 text-sm text-gray-700">
//         Choix actuel :{" "}
//         <strong>
//           {consent
//             ? `Cookies YouTube : ${
//                 consent.iframe ? "acceptes" : "refuses"
//               }, Analytics : ${consent.analytics ? "acceptes" : "refuses"}`
//             : "Aucun choix effectue"}
//         </strong>
//         .
//       </p>

//       <p className="mt-2">
//         Lorsque vous acceptez les cookies tiers, YouTube (Google) peut deposer
//         des cookies pour la lecture de videos, la mesure d&apos;audience et la
//         personnalisation. Ces cookies sont soumis aux politiques de Google.
//       </p>

//       <p className="mt-2">
//         Plus d&apos;informations sur la{" "}
//         <a
//           href="https://policies.google.com/technologies/cookies"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline text-coolRoof"
//         >
//           politique de cookies de Google
//         </a>
//         .
//       </p>

//       <p>Vous pouvez gerer vos preferences de cookies via le lien en bas de page.</p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">Securite</h2>
//       <p>
//         Nous mettons en oeuvre des mesures techniques et organisationnelles
//         adaptees pour proteger vos donnees personnelles contre toute perte,
//         utilisation abusive, acces non autorise ou divulgation.
//       </p>

//       <h2 className="mt-6 mb-2 text-2xl font-semibold">
//         Modifications de la politique de confidentialite
//       </h2>
//       <p>
//         Cette politique peut etre mise a jour pour refleter l&apos;evolution de nos
//         pratiques ou de la reglementation. Toute modification sera publiee sur
//         cette page avec mention de la date de mise a jour.
//       </p>
//     </div>
//   );
// };

// export default PolitiqueConfidentialite;
