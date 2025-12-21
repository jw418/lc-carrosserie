"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/data/site.config";

const SERVICES_LINKS = [
  { href: "/services/carrosserie-generale", label: "Carrosserie générale" },
  { href: "/services", label: "Tous les services (redir.)" },
];

const ZONES_LINKS = [
  { href: "/aix-en-provence", label: "Aix-en-Provence" },
  { href: "/marseille", label: "Marseille" },
];

const MAIN_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

const formatPhoneLink = (phone: string) => phone.replace(/\s+/g, "");

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneLink = `tel:${formatPhoneLink(siteConfig.phone)}`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo.png"
            alt="LC Carrosserie"
            width={44}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden text-lg font-semibold tracking-tight text-gray-900 sm:block">
            LC Carrosserie
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {MAIN_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-gray-900"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-800">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[240px] rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                  <div className="flex flex-col gap-2">
                    {SERVICES_LINKS.map((item) => (
                      <NavigationMenuLink
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-800">
                  Zones
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[240px] rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                  <div className="flex flex-col gap-2">
                    {ZONES_LINKS.map((item) => (
                      <NavigationMenuLink
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>

          <div className="flex items-center gap-3 pl-2">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-gray-500 transition hover:text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={phoneLink}
            className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Phone className="mr-2 h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5">
            {MAIN_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Services
              </p>
              <div className="mt-2 flex flex-col gap-2">
                {SERVICES_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Zones desservies
              </p>
              <div className="mt-2 flex flex-col gap-2">
                {ZONES_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-600">
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <a
              href={phoneLink}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="mr-2 h-4 w-4" />
              Appeler {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
