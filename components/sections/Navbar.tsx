"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Hammer,
  MapPin,
} from "lucide-react";

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
  SheetClose,
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
    icon: <Hammer className="h-5 w-5 text-orange-600" />,
  },
  {
    href: "/assurance",
    label: "Gestion Assurance",
    desc: "Libre choix du réparateur et zéro avance.",
    icon: <ShieldCheck className="h-5 w-5 text-orange-600" />,
  },
];

const ZONES_LINKS = [
  { href: "/aix-en-provence", label: "Aix-en-Provence" },
  { href: "/marseille", label: "Marseille" },
];

const MAIN_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "L'Atelier" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const phoneLink = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 flex items-center justify-center group-hover:border-orange-600 group-hover:bg-white transition-all duration-300">
            <Image
              src="/img/logo.png"
              alt="LC Carrosserie"
              width={34}
              height={34}
              className="object-contain transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-black tracking-tighter text-zinc-950 uppercase leading-none">
              LC Carrosserie
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-orange-600 font-bold">
              Expertise & Réparation
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {MAIN_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-mono text-[11px] uppercase tracking-widest font-bold bg-transparent hover:bg-zinc-50 hover:text-orange-600 transition-colors"
                    )}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono text-[11px] uppercase tracking-widest font-bold bg-transparent hover:bg-zinc-50">
                  Prestations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 bg-white border-zinc-100 shadow-2xl rounded-2xl">
                    <li className="md:col-span-2 mb-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border-b border-zinc-100 pb-2">
                        Nos services experts
                      </p>
                    </li>
                    {SERVICES_LINKS.map((service) => (
                      <ListItem
                        key={service.href}
                        title={service.label}
                        href={service.href}
                        icon={service.icon}
                      >
                        {service.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono text-[11px] uppercase tracking-widest font-bold bg-transparent">
                  Zones
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-2 p-4 bg-white border-zinc-100 shadow-2xl rounded-2xl">
                    {ZONES_LINKS.map((zone) => (
                      <ListItem
                        key={zone.href}
                        title={zone.label}
                        href={zone.href}
                        icon={<MapPin className="h-4 w-4 text-zinc-400" />}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="h-6 w-px bg-zinc-200 mx-6" />

          {/* CTA PHONE */}
          <a
            href={phoneLink}
            className="group relative flex items-center gap-3 bg-zinc-950 px-6 py-3 text-white transition-all hover:bg-orange-600 rounded-xl overflow-hidden shadow-lg shadow-zinc-200"
          >
            <Phone className="h-3.5 w-3.5 text-orange-500 group-hover:text-white transition-colors" />
            <span className="font-mono text-[11px] font-black uppercase tracking-widest">
              {siteConfig.phone}
            </span>
          </a>
        </nav>

        {/* MOBILE MENU TRIGGER */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 hover:border-orange-600 transition-all"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-md border-zinc-200 p-0 flex flex-col"
            >
              <SheetHeader className="p-6 border-b border-zinc-100 text-left">
                <SheetTitle className="font-heading text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
                  <span className="h-2 w-2 bg-orange-600 rounded-full" />
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-8 h-full bg-white overflow-y-auto">
                <div className="space-y-8">
                  <div className="flex flex-col gap-6">
                    {MAIN_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="font-heading text-5xl font-black uppercase tracking-tighter text-zinc-950 hover:text-orange-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <hr className="border-zinc-100" />

                  <div className="space-y-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                      Expertise & Services
                    </p>
                    <div className="grid gap-4">
                      {SERVICES_LINKS.map((s) => (
                        <SheetClose asChild key={s.href}>
                          <Link
                            href={s.href}
                            className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 font-mono text-sm font-black uppercase group hover:border-orange-600 transition-all"
                          >
                            <span className="flex items-center gap-3">
                              {s.icon}
                              {s.label}
                            </span>
                            <ArrowUpRight className="h-5 w-5 text-zinc-300 group-hover:text-orange-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <SheetClose asChild>
                    <a
                      href={phoneLink}
                      className="flex w-full items-center justify-center gap-4 bg-zinc-950 py-7 text-white rounded-[2rem] shadow-xl shadow-zinc-200 active:scale-95 transition-transform"
                    >
                      <Phone className="h-5 w-5 text-orange-500" />
                      <span className="font-mono text-xs font-black uppercase tracking-widest">
                        Appeler l'atelier
                      </span>
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-zinc-50 focus:bg-zinc-50",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 mb-1">
            {icon}
            <div className="text-xs font-black uppercase tracking-widest font-mono text-zinc-950 group-hover:text-orange-600 transition-colors">
              {title}
            </div>
          </div>
          {children && (
            <p className="line-clamp-2 text-[11px] leading-relaxed text-zinc-500 font-sans italic">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// "use client";

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, Phone, ArrowUpRight } from "lucide-react";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { cn } from "@/lib/utils";
// import { siteConfig } from "@/data/site.config";

// const SERVICES_LINKS = [
//   {
//     href: "/services/carrosserie-generale",
//     label: "Carrosserie Générale",
//     desc: "Réparation choc et peinture haute précision.",
//   },
//   {
//     href: "/assurance",
//     label: "Gestion Assurance",
//     desc: "Libre choix du réparateur et zéro avance.",
//   },
// ];

// const ZONES_LINKS = [
//   { href: "/aix-en-provence", label: "Aix-en-Provence" },
//   { href: "/marseille", label: "Marseille" },
// ];

// const MAIN_LINKS = [
//   { href: "/", label: "Accueil" },
//   { href: "/a-propos", label: "L'Atelier" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const phoneLink = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

//   return (
//     <header className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md overflow-visible">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3 group">
//           <div className="relative h-10 w-10 overflow-hidden rounded-sm border border-zinc-200 bg-zinc-50 flex items-center justify-center group-hover:border-orange-600 transition-colors">
//             <Image
//               src="/img/logo.png"
//               alt="LC"
//               width={32}
//               height={32}
//               className="object-contain"
//               priority
//             />
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className="font-heading text-lg font-black tracking-tighter text-zinc-950 uppercase">
//               LC Carrosserie
//             </span>
//             <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
//               Devis immédiat
//             </span>
//           </div>
//         </Link>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden lg:flex items-center gap-2 overflow-visible">
//           <NavigationMenu viewport={false} className="overflow-visible">
//             <NavigationMenuList className="overflow-visible">
//               {MAIN_LINKS.map((link) => (
//                 <NavigationMenuItem key={link.href}>
//                   <NavigationMenuLink
//                     asChild
//                     className={navigationMenuTriggerStyle()}
//                   >
//                     <Link href={link.href}>{link.label}</Link>
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               ))}

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Prestations</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[300px] gap-3 p-4 md:w-[360px] md:grid-cols-2">
//                     {SERVICES_LINKS.map((service) => (
//                       <ListItem
//                         key={service.href}
//                         title={service.label}
//                         href={service.href}
//                       >
//                         {service.desc}
//                       </ListItem>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Zones</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[200px] gap-2 p-3">
//                     {ZONES_LINKS.map((zone) => (
//                       <ListItem
//                         key={zone.href}
//                         title={zone.label}
//                         href={zone.href}
//                       />
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           <div className="h-6 w-px bg-zinc-200 mx-4" />

//           {/* CTA PHONE */}
//           <a
//             href={phoneLink}
//             className="group flex items-center gap-3 bg-zinc-950 px-5 py-2.5 text-white transition-all hover:bg-orange-600"
//           >
//             <Phone className="h-3.5 w-3.5 text-orange-500 group-hover:text-white" />
//             <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
//               {siteConfig.phone}
//             </span>
//           </a>
//         </nav>

//         {/* MOBILE MENU (SHEET) */}
//         <div className="lg:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <button className="p-2 text-zinc-950" aria-label="Menu">
//                 <Menu className="h-6 w-6" />
//               </button>
//             </SheetTrigger>
//             <SheetContent
//               side="right"
//               className="w-full sm:max-w-md border-zinc-200 p-0"
//             >
//               <SheetHeader className="p-6 border-b border-zinc-100 text-left">
//                 <SheetTitle className="font-heading text-2xl font-black uppercase tracking-tighter">
//                   Navigation
//                 </SheetTitle>
//               </SheetHeader>

//               <div className="flex flex-col p-6 h-full bg-white">
//                 <div className="space-y-6">
//                   <div className="flex flex-col gap-4">
//                     {MAIN_LINKS.map((link) => (
//                       <SheetClose asChild key={link.href}>
//                         <Link
//                           href={link.href}
//                           className="font-heading text-4xl font-black uppercase tracking-tighter text-zinc-950 hover:text-orange-600 transition-colors"
//                         >
//                           {link.label}
//                         </Link>
//                       </SheetClose>
//                     ))}
//                   </div>

//                   <hr className="border-zinc-100" />

//                   <div className="space-y-4">
//                     <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
//                       Services
//                     </p>
//                     {SERVICES_LINKS.map((s) => (
//                       <SheetClose asChild key={s.href}>
//                         <Link
//                           href={s.href}
//                           className="flex items-center justify-between font-mono text-sm font-bold uppercase group"
//                         >
//                           {s.label}
//                           <ArrowUpRight className="h-4 w-4 text-zinc-300 group-hover:text-orange-600" />
//                         </Link>
//                       </SheetClose>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-auto pb-10">
//                   <SheetClose asChild>
//                     <a
//                       href={phoneLink}
//                       className="flex w-full items-center justify-center gap-4 bg-zinc-950 py-6 text-white"
//                     >
//                       <Phone className="h-4 w-4 text-orange-500" />
//                       <span className="font-mono text-xs font-black uppercase tracking-widest">
//                         Appeler l'atelier
//                       </span>
//                     </a>
//                   </SheetClose>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

// // COMPOSANT LISTITEM CORRIGÉ
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, href, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <Link
//           href={href || "#"}
//           ref={ref as any}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           {children && (
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//               {children}
//             </p>
//           )}
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
