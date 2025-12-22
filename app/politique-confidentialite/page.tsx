"use client";
import { siteConfig } from "@/data/site.config";
import { useConsent } from "@/hooks/useConsent";

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
    <div className="mx-auto max-w-4xl p-5 mt-12 mb-36">
      <h1 className="text-3xl font-bold text-center mb-12">
        Politique de confidentialite
      </h1>

      <p className="mt-4">
        Cette politique explique comment {legalName} ("{tradeName}") collecte,
        utilise et protege vos donnees personnelles lorsque vous utilisez le
        site {websiteUrl}. Elle s&apos;applique a l&apos;ensemble des services
        proposes via ce site.
      </p>
      <p className="mt-2">
        Responsable du traitement : <strong>{legalName}</strong>, situe au{" "}
        {full_address}. Vous pouvez nous joindre au{" "}
        <strong>{phoneFr || email}</strong> ou par e-mail a{" "}
        <a href={`mailto:${email}`} className="underline text-coolRoof">
          {email}
        </a>
        .
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">
        Collecte des donnees personnelles
      </h2>
      <p>
        Nous collectons uniquement les donnees necessaires au traitement de vos
        demandes :
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>
          Informations d&apos;identification transmises via le formulaire de
          contact (nom, prenom).
        </li>
        <li>
          Coordonnees de contact (adresse e-mail, numero de telephone) pour vous
          repondre.
        </li>
        <li>
          Preferences de consentement associees au cookie{" "}
          <strong>site_consent</strong>.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Utilisation des donnees</h2>
      <p>
        Les donnees collectees servent uniquement a repondre a vos demandes,
        planifier un rendez-vous, vous communiquer des informations sur nos
        services ou assurer le suivi commercial, sur la base de votre
        consentement ou de notre interet legitime a gerer {tradeName}.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">
        Droits des utilisateurs
      </h2>
      <p>
        Vous disposez des droits d&apos;acces, de rectification, d&apos;effacement,
        d&apos;opposition, de limitation et de portabilite de vos donnees. Vous
        pouvez retirer votre consentement a tout moment. Pour exercer vos
        droits, contactez-nous a{" "}
        <a
          href={`mailto:${privacyContact}`}
          className="underline text-coolRoof"
        >
          {privacyContact}
        </a>{" "}
        ou par courrier a {legalName}, {streetAddress}, {zipCode} {city}.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Partage des donnees</h2>
      <p>
        Vos donnees ne sont ni vendues ni louees. Elles ne sont partagees
        qu&apos;avec des prestataires techniques indispensables au
        fonctionnement du site
        {websiteUrl.startsWith("http") ? ` (${websiteUrl})` : ""} et uniquement
        dans le cadre strict de leur mission, ou si la loi l&apos;exige.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Utilisation des cookies</h2>
      <p>
        Nous utilisons un cookie nomme <strong>site_consent</strong> pour
        memoriser vos preferences concernant :
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Les contenus tiers (YouTube)</li>
        <li>La mesure d&apos;audience (Google Analytics, Ads)</li>
      </ul>
      <p className="mt-2">
        Ce cookie est conserve pendant 365 jours et ne contient aucune donnee
        personnelle.
      </p>

      <p className="mt-4 text-sm text-gray-700">
        Choix actuel :{" "}
        <strong>
          {consent
            ? `Cookies YouTube : ${
                consent.iframe ? "acceptes" : "refuses"
              }, Analytics : ${consent.analytics ? "acceptes" : "refuses"}`
            : "Aucun choix effectue"}
        </strong>
        .
      </p>

      <p className="mt-2">
        Lorsque vous acceptez les cookies tiers, YouTube (Google) peut deposer
        des cookies pour la lecture de videos, la mesure d&apos;audience et la
        personnalisation. Ces cookies sont soumis aux politiques de Google.
      </p>

      <p className="mt-2">
        Plus d&apos;informations sur la{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-coolRoof"
        >
          politique de cookies de Google
        </a>
        .
      </p>

      <p>Vous pouvez gerer vos preferences de cookies via le lien en bas de page.</p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">Securite</h2>
      <p>
        Nous mettons en oeuvre des mesures techniques et organisationnelles
        adaptees pour proteger vos donnees personnelles contre toute perte,
        utilisation abusive, acces non autorise ou divulgation.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold">
        Modifications de la politique de confidentialite
      </h2>
      <p>
        Cette politique peut etre mise a jour pour refleter l&apos;evolution de nos
        pratiques ou de la reglementation. Toute modification sera publiee sur
        cette page avec mention de la date de mise a jour.
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
