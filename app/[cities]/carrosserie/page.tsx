type CityCarrosseriePageProps = {
  params: {
    cities: string;
  };
};

export default function CityCarrosseriePage({
  params,
}: CityCarrosseriePageProps) {
  const cityName = params.cities.replace(/-/g, " ");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <p className="text-sm font-medium text-gray-500">Service local</p>
      <h1 className="text-3xl font-semibold text-gray-900">
        Carrosserie a {cityName}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        Pour les habitants de {cityName}, nous proposons les prestations
        classiques de carrosserie : redressage, peinture et remplacement
        d&apos;elements. Cette section sera enrichie prochainement avec des
        exemples locaux et nos delais sur place.
      </p>

      <p className="text-gray-700">
        Vous pouvez deja prendre contact pour planifier une evaluation ou un
        devis rapide.
      </p>
    </div>
  );
}
