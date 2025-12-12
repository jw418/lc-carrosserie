export default function CarrosserieGeneralePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-gray-500">Services</p>
        <h1 className="text-3xl font-semibold text-gray-900">
          Carrosserie generale
        </h1>
      </header>

      <p className="text-gray-700 leading-relaxed">
        Cette page presente prochainement le detail de nos prestations
        (redressage, peinture, debosselage, remplacement d&apos;elements et
        remise en etat complete). En attendant, voici un apercu rapide.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Reparations</h2>
          <p className="mt-2 text-gray-700">
            Evaluation des degats, redressage, ajustements et preparation avant
            peinture pour retrouver une carrosserie propre.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Finitions</h2>
          <p className="mt-2 text-gray-700">
            Peinture cabine, vernis et controle qualite pour livrer un aspect
            uniforme, durable et protege.
          </p>
        </div>
      </div>

      <p className="text-gray-700">
        Pour un devis ou une question specifique, passez par la page contact :
        nous orienterons votre demande rapidement.
      </p>
    </div>
  );
}
