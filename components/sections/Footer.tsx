import Link from "next/link";
import { siteConfig } from "@/data/site.config";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import ManageConsent from "@/components/manageConsent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-20">
          {/* COLONNE 1 : BRAND & SOCIAL (Largeur 4) */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              {/* <img
                src="/img/logo.png"
                alt={`${siteConfig.name} logo`}
                className="h-11 w-11 object-contain rounded-full border  bg-white"
              /> */}
              <span className="font-heading text-3xl font-black tracking-tighter text-white uppercase">
                {siteConfig.name}
                <span className="text-orange-600">.</span>
              </span>
            </Link>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8 text-sm font-light">
              {siteConfig.description}
            </p>

            <div className="flex gap-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest hover:text-white transition-colors"
              >
                <span className="w-6 h-px bg-zinc-800 group-hover:bg-orange-600 transition-all" />
                Avis Google
              </a>
            </div>
          </div>

          {/* COLONNE 2 : PRESTATIONS (Largeur 2) */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
              Liens rapides
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carrosserie-generale"
                  className="hover:text-orange-500 transition-colors"
                >
                  Carrosserie
                </Link>
              </li>
              <li>
                <Link
                  href="/assurance"
                  className="hover:text-orange-500 transition-colors"
                >
                  Assurances
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-orange-500 transition-colors"
                >
                  L'Atelier
                </Link>
              </li>
              <li>
                <a
                  href="https://leboncoin.fr/lc-carrosserie"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  Achat / revente LeBonCoin
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : ZONES (Largeur 2) */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
              Zones
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link
                  href="/aix-en-provence"
                  className="hover:text-orange-500 transition-colors"
                >
                  Aix-en-Provence
                </Link>
              </li>
              <li>
                <Link
                  href="/marseille"
                  className="hover:text-orange-500 transition-colors"
                >
                  Marseille
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT (Largeur 4) */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
              Contact & Accès
            </h4>
            <address className="not-italic space-y-5">
              <div className="flex gap-4">
                <MapPin size={16} className="text-orange-600 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed font-light">
                  <span className="text-white font-bold block mb-1 uppercase tracking-tight">
                    <span>LC Carrosserie - Aix-en-Provence</span>
                  </span>
                  <span>{siteConfig.streetAddress}</span>
                  <span className="block">
                    <span>{siteConfig.zipCode}</span>{" "}
                    <span>{siteConfig.city}</span>
                  </span>
                  <span>{siteConfig.state}</span>
                </p>
              </div>

              <div className="flex gap-4">
                <Phone size={16} className="text-orange-600 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white font-mono text-sm hover:text-orange-500 transition-colors"
                >
                  {siteConfig.phoneFr}
                </a>
              </div>

              <div className="flex gap-4 font-light">
                <Clock size={16} className="text-zinc-600 shrink-0" />
                <div className="text-xs space-y-1">
                  <p>{siteConfig.openingHours.weekdays}</p>
                  <p className="text-zinc-500">
                    Peut importe l'heure de votre sinistre, nous sommes là pour
                    vous aider.
                  </p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* BOTTOM BAR : LEGAL & ADMIN */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[10px] font-mono uppercase tracking-widest">
          <div className="space-y-2">
            <p className="text-zinc-600">
              © {currentYear} {siteConfig.legalName}
            </p>
            <p className="text-zinc-800 tracking-tighter">
              SIREN {siteConfig.siren} — {siteConfig.rcsNumber}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link
              href="/mentions-legales"
              className="hover:text-orange-500 transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-orange-500 transition-colors"
            >
              Confidentialité
            </Link>
            <ManageConsent />
          </nav>
        </div>
      </div>
    </footer>
  );
}
