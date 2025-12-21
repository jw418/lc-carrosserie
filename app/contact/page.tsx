import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site.config";

export default function ContactPage() {
  const { phone, email, full_address, openingHours } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-medium text-gray-500">Contact</p>
        <h1 className="text-3xl font-semibold text-gray-900">
          Contactez notre carrosserie
        </h1>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          Un choc, une aile a reprendre ou un devis peinture ? Envoyez nous les
          infos essentielles et nous revenons vers vous rapidement pour une
          prise en charge ou un rendez-vous.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Demander un devis ou une prise en charge
        </h2>
        <p className="text-gray-700">
          Remplissez le formulaire ci-dessous avec votre vehicule, les degats et
          vos disponibilites. Nous repondons au plus vite.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <ContactForm />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Nos coordonnees</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">Telephone</p>
            <a className="mt-1 block text-gray-700" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">Email</p>
            <a className="mt-1 block text-gray-700" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">Adresse</p>
            <p className="mt-1 text-gray-700">{full_address}</p>
            <p className="mt-1 text-sm text-gray-600">{openingHours.weekdays}</p>
            <p className="text-sm text-gray-600">{openingHours.weekend}</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Venir a l&apos;atelier depuis Aix-en-Provence ou Marseille
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Depuis Aix</h3>
            <p className="mt-2 text-gray-700">
              15-20 minutes en voiture via la D9 direction Eguilles. Parking sur
              place devant l&apos;atelier.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Depuis Marseille
            </h3>
            <p className="mt-2 text-gray-700">
              35-40 minutes par l&apos;A51 puis D9. Sortie Eguilles, suivre la zone
              artisanale des Jalassieres.
            </p>
          </div>
        </div>
        <p className="text-gray-700">
          Si besoin, appelez avant de partir pour verifier la disponibilite ou
          organiser un depannage.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">FAQ contact</h2>
        <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <p className="font-semibold text-gray-900">
              Quels elements fournir pour un devis rapide ?
            </p>
            <p className="text-gray-700">
              Marque, modele, photos des degats, numero d&apos;immatriculation et vos
              disponibilites.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Sous combien de temps repondez-vous ?
            </p>
            <p className="text-gray-700">
              Nous visons une reponse sous 24h ouvrables, plus rapide si vous
              indiquez des creneaux.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Faut-il prendre rendez-vous pour passer ?
            </p>
            <p className="text-gray-700">
              Oui, un appel ou un message avant votre venue nous permet de vous
              recevoir sans attente.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">CTA final</h2>
        <p className="text-gray-700">
          Pret a lancer la reparation ? Envoyez votre demande et nous vous
          confirmons un rendez-vous.
        </p>
        <a
          href="#contact-form"
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
        >
          Acceder au formulaire
        </a>
      </section>
    </div>
  );
}
