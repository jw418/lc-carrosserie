type CityPageProps = {
  params: {
    cities: string;
  };
};

export default function CityPage({ params }: CityPageProps) {
  const cityName = params.cities.replace(/-/g, " ");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <p className="text-sm font-medium text-gray-500">Zone</p>
      <h1 className="text-3xl font-semibold text-gray-900">
        Intervention a {cityName}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        Nous intervenons a {cityName} et dans les environs pour les travaux de
        carrosserie et de peinture. Cette page sera completee avec plus de
        details (delais, disponibilites, photos) tres prochainement.
      </p>

      <p className="text-gray-700">
        En attendant, contactez nous via le formulaire general pour verifier nos
        disponibilites sur votre commune.
      </p>
    </div>
  );
}
