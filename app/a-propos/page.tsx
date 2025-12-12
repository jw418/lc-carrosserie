export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium text-gray-500">A propos</p>
        <h1 className="text-3xl font-semibold text-gray-900">
          LC Carrosserie en quelques lignes
        </h1>
      </header>

      <p className="text-gray-700 leading-relaxed">
        Nous sommes une equipe de carrossiers et peintres bases en Occitanie,
        attaches aux finitions propres et aux delais tenus. Ce site est en cours
        de construction : cette page resume simplement qui nous sommes pendant
        que nous preparons le reste du contenu.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Savoir-faire</h2>
          <p className="mt-2 text-gray-700">
            Redressage, peinture, remplacement d&apos;elements de carrosserie,
            interventions sur vehicules utilitaires et particuliers.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Engagements</h2>
          <p className="mt-2 text-gray-700">
            Accueil simple, diagnostics clairs, devis rapides et suivi pour que
            vous recuperiez votre vehicule en confiance.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Besoin d&apos;en savoir plus ou de planifier une intervention ? Contactez
        nous via la page contact. Nous serons ravis de vous repondre.
      </p>
    </div>
  );
}
