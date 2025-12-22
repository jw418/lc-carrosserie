import type { Metadata } from "next";

import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Mentions légales | LC Carrosserie",
  description:
    "Informations légales de LC Carrosserie : éditeur, hébergeur, contact, SIREN/SIRET et coordonnées.",
};

export default function MentionsLegalesPage() {
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
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-gray-500">Informations légales</p>
        <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
        <p className="text-gray-700">
          {legalName} ({tradeName}) - {companyType}
          <br />
          Adresse : {streetAddress}, {zipCode} {city}
          <br />
          Téléphone : {phoneFr}
          <br />
          Email : <a className="underline" href={`mailto:${email}`}>{email}</a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Responsables</h2>
        <p className="text-gray-700">
          Propriétaire / Directeur de publication : {owner}
          <br />
          Responsable éditorial : {publisher}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Coordonnées de l&apos;entreprise</h2>
        <p className="text-gray-700">
          Adresse principale : {full_address}
          <br />
          SIREN : {siren} / SIRET : {siret}
          <br />
          TVA intracommunautaire : {tvaNumber}
          <br />
          RCS : {rcsNumber}
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Hébergement</h2>
        <p className="text-gray-700">
          Hébergeur : {hostName}
          <br />
          Adresse : {hostAddress}
          <br />
          Site : <a className="underline" href={hostWebsite} target="_blank" rel="noreferrer">{hostWebsite}</a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Propriété intellectuelle</h2>
        <p className="text-gray-700">
          Le contenu de ce site ({websiteUrl}) est la propriété de {legalName}, sauf mention contraire.
          Toute reproduction ou utilisation non autorisée est interdite.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p className="text-gray-700">
          Pour toute question, vous pouvez nous écrire à{" "}
          <a className="underline" href={`mailto:${email}`}>{email}</a> ou nous appeler au {phoneFr}.
        </p>
      </section>
    </div>
  );
}
