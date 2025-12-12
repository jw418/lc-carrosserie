export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-gray-500">Contact</p>
        <h1 className="text-3xl font-semibold text-gray-900">
          Echangeons sur votre carrosserie
        </h1>
      </header>

      <p className="text-gray-700 leading-relaxed">
        Une question sur une reparation, une peinture ou un choc a faire
        evaluer ? Laissez nous un message avec vos coordonnees. Nous revenons
        vers vous rapidement pour convenir d&apos;un rendez-vous ou d&apos;un devis.
      </p>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Coordonnees</h2>
          <p className="mt-2 text-gray-700">
            Telefoner ou ecrire : les informations detaillees seront bientot
            affichees ici avec une carte d&apos;acces.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Horaires</h2>
          <p className="mt-2 text-gray-700">
            Du lundi au vendredi, sur rendez-vous. Nous mettons a jour cette
            section des que les horaires definitifs sont en ligne.
          </p>
        </div>
      </div>

      <p className="text-gray-700">
        Pendant que nous finalisons le formulaire, vous pouvez nous envoyer un
        email ou nous appeler directement. Merci pour votre patience.
      </p>
    </div>
  );
}
