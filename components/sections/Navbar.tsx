"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, ArrowUpRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site.config";

const SERVICES_LINKS = [
  {
    href: "/services/carrosserie-generale",
    label: "Carrosserie Générale",
    desc: "Réparation choc et peinture haute précision.",
  },
  {
    href: "/assurance",
    label: "Gestion Assurance",
    desc: "Libre choix du réparateur et zéro avance.",
  },
];

const ZONES_LINKS = [
  { href: "/aix-en-provence", label: "Aix-en-Provence" },
  { href: "/marseille", label: "Marseille" },
  { href: "/eguilles", label: "Éguilles (Atelier)" },
];

const MAIN_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "L'Atelier" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const phoneLink = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-sm border border-zinc-200 bg-zinc-50 flex items-center justify-center group-hover:border-orange-600 transition-colors">
            <Image
              src="/img/logo.png"
              alt="LC"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg font-black tracking-tighter text-zinc-950 uppercase">
              LC Carrosserie
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
              Expertise Éguilles
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {/* LIENS SIMPLES CORRIGÉS */}
              {MAIN_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-mono text-[11px] uppercase tracking-wider bg-transparent hover:bg-zinc-100 cursor-pointer"
                    )}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* DROPDOWN SERVICES */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono text-[11px] uppercase tracking-wider bg-transparent">
                  Prestations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border border-zinc-200">
                    {SERVICES_LINKS.map((service) => (
                      <ListItem
                        key={service.href}
                        title={service.label}
                        href={service.href}
                      >
                        {service.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* DROPDOWN ZONES */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono text-[11px] uppercase tracking-wider bg-transparent">
                  Zones
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-3 bg-white">
                    {ZONES_LINKS.map((zone) => (
                      <ListItem
                        key={zone.href}
                        title={zone.label}
                        href={zone.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-px bg-zinc-200 mx-4" />

          {/* CTA PHONE */}
          <a
            href={phoneLink}
            className="group flex items-center gap-3 bg-zinc-950 px-5 py-2.5 text-white transition-all hover:bg-orange-600"
          >
            <Phone className="h-3.5 w-3.5 text-orange-500 group-hover:text-white" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
              {siteConfig.phone}
            </span>
          </a>
        </nav>

        {/* MOBILE MENU (SHEET) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-zinc-950" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md border-zinc-200 p-0"
            >
              <SheetHeader className="p-6 border-b border-zinc-100 text-left">
                <SheetTitle className="font-heading text-2xl font-black uppercase tracking-tighter">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-6 h-full bg-white">
                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    {MAIN_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-heading text-4xl font-black uppercase tracking-tighter text-zinc-950 hover:text-orange-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <hr className="border-zinc-100" />

                  <div className="space-y-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                      Services
                    </p>
                    {SERVICES_LINKS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center justify-between font-mono text-sm font-bold uppercase group"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4 text-zinc-300 group-hover:text-orange-600" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pb-10">
                  <a
                    href={phoneLink}
                    className="flex w-full items-center justify-center gap-4 bg-zinc-950 py-6 text-white"
                  >
                    <Phone className="h-4 w-4 text-orange-500" />
                    <span className="font-mono text-xs font-black uppercase tracking-widest">
                      Appeler l'atelier
                    </span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// COMPOSANT LISTITEM CORRIGÉ
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-50 focus:bg-zinc-50",
            className
          )}
          {...props}
        >
          <div className="font-mono text-[11px] font-bold uppercase tracking-tight text-zinc-950">
            {title}
          </div>
          {children && (
            <p className="line-clamp-2 font-sans text-[11px] leading-snug text-zinc-500">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
