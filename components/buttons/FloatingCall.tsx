"use client";

import { useEffect, useState, useCallback } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { cn } from "@/lib/utils";

const formatPhoneLink = (phone: string) => phone.replace(/\s+/g, "");

export function FloatingCall() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [shouldNudge, setShouldNudge] = useState(false);

  const phoneLink = `tel:${formatPhoneLink(siteConfig.phone)}`;
  const whatsappLink = `https://wa.me/${formatPhoneLink(
    siteConfig.phone
  )}?text=Bonjour, je souhaiterais un devis pour ma carrosserie.`;

  // Gestion du scroll (Apparition + Détection Footer)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Apparaît après 200px de scroll
      setIsVisible(scrollY > 200);

      // Détecte si on est à moins de 100px du bas
      setIsAtBottom(scrollY + windowHeight > fullHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion des animations récurrentes
  useEffect(() => {
    if (!isVisible) return;

    const triggerNudge = () => {
      setShouldNudge(true);
      setTimeout(() => setShouldNudge(false), 1500);
    };

    // Premier appel à 5 secondes
    const initialTimer = setTimeout(triggerNudge, 5000);

    // Intervalle toutes les 30 secondes
    const interval = setInterval(triggerNudge, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500 ease-in-out sm:right-8",
        isAtBottom
          ? "opacity-40 scale-90 pointer-events-none lg:pointer-events-auto lg:opacity-60"
          : "opacity-100 scale-100"
      )}
    >
      {/* Container Principal */}
      <div
        className={cn(
          "flex items-center gap-2 rounded-full bg-zinc-950 p-2 pl-6 shadow-2xl transition-all duration-300 border border-zinc-800",
          shouldNudge && "animate-bounce ring-2 ring-orange-500/50"
        )}
      >
        {/* Texte Editorial */}
        <div className="flex flex-col items-start leading-tight mr-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-orange-500 font-bold">
            Devis Express
          </span>
          <span className="font-heading text-xs font-black uppercase tracking-tight text-white">
            Appel - Message What's App
          </span>
        </div>

        {/* Boutons d'action */}
        <div className="flex items-center gap-1.5">
          {/* Appel Direct */}
          <a
            href={phoneLink}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Appel téléphonique"
          >
            <Phone className="h-5 w-5 fill-current" />
          </a>
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Devis via WhatsApp"
          >
            <MessageCircle className="h-5 w-5  text-[#25D366]" />
          </a>
        </div>
      </div>

      {/* Petit badge Statut - Masqué quand on est en bas */}
      {!isAtBottom && (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-sm animate-in fade-in slide-in-from-right-4 duration-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-zinc-600">
            réponse rapide 7j/7
          </span>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Phone, MessageCircle } from "lucide-react";
// import { siteConfig } from "@/data/site.config";
// import { cn } from "@/lib/utils";

// const formatPhoneLink = (phone: string) => phone.replace(/\s+/g, "");

// export function FloatingCall() {
//   const [visible, setVisible] = useState(false);
//   const [nudge, setNudge] = useState(false);

//   const phoneLink = `tel:${formatPhoneLink(siteConfig.phone)}`;
//   // On utilise souvent le même numéro pour WhatsApp
//   const whatsappLink = `https://wa.me/${formatPhoneLink(
//     siteConfig.phone
//   )}?text=Bonjour, je souhaiterais un devis pour ma carrosserie.`;

//   useEffect(() => {
//     const showTimer = window.setTimeout(() => {
//       setVisible(true);
//     }, 5000);

//     let intervalId: number | null = null;
//     const startInterval = window.setTimeout(() => {
//       intervalId = window.setInterval(() => {
//         setNudge(true);
//         window.setTimeout(() => setNudge(false), 1200);
//       }, 30000);
//     }, 5000);

//     return () => {
//       window.clearTimeout(showTimer);
//       window.clearTimeout(startInterval);
//       if (intervalId !== null) {
//         window.clearInterval(intervalId);
//       }
//     };
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-8">
//       {/* Option WhatsApp - Plus discret */}

//       {/* Bouton Principal - Appel / Devis */}
//       <div
//         className={cn(
//           "group relative flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-4 text-white shadow-2xl transition-all hover:bg-orange-600 hover:-translate-y-1 active:scale-95",
//           "animate-in fade-in slide-in-from-bottom-4 duration-500",
//           nudge && "ring-2 ring-orange-500/50"
//         )}
//       >
//         {/* Animation de pulse discret en arrière-plan */}
//         <span className="pointer-events-none absolute inset-0 rounded-full bg-zinc-950 group-hover:bg-orange-600 animate-ping opacity-20 duration-1000" />

//         <div className="flex flex-col items-start leading-tight">
//           <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
//             Devis Express
//           </span>
//           <span className="font-heading text-sm font-black uppercase tracking-tight">
//             Photo par SMS / Appel
//           </span>
//         </div>
//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg border border-zinc-200 transition-all hover:scale-110 hover:bg-green-50 hover:cursor-pointer"
//           aria-label="Contact WhatsApp"
//         >
//           <MessageCircle className="h-5 w-5 text-green-600" />
//         </a>
//         <a
//           href={phoneLink}
//           aria-label="Appeler LC Carrosserie"
//           className="relative z-10 hover:cursor-pointer"
//         >
//           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
//             <Phone className="h-4 w-4" />
//           </div>
//         </a>
//       </div>

//       {/* Petite étiquette "En ligne" pour l'aspect rassurant */}
//       <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/70 border border-zinc-900/60 backdrop-blur">
//         <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//         </span>
//         <span className="font-mono text-[9px] uppercase tracking-tighter text-zinc-300">
//           Atelier ouvert — Réponse rapide
//         </span>
//       </div>
//     </div>
//   );
// }
