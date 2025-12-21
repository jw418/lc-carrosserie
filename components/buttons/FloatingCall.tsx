"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { cn } from "@/lib/utils";

const formatPhoneLink = (phone: string) => phone.replace(/\s+/g, "");

export function FloatingCall() {
  const [visible, setVisible] = useState(false);

  const phoneLink = `tel:${formatPhoneLink(siteConfig.phone)}`;
  // On utilise souvent le même numéro pour WhatsApp
  const whatsappLink = `https://wa.me/${formatPhoneLink(
    siteConfig.phone
  )}?text=Bonjour, je souhaiterais un devis pour ma carrosserie.`;

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-8">
      {/* Option WhatsApp - Plus discret */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg border border-zinc-200 transition-all hover:scale-110 hover:bg-green-50"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="h-5 w-5 text-green-600" />
      </a>

      {/* Bouton Principal - Appel / Devis */}
      <a
        href={phoneLink}
        className={cn(
          "group relative flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-4 text-white shadow-2xl transition-all hover:bg-orange-600 hover:-translate-y-1 active:scale-95",
          "animate-in fade-in slide-in-from-bottom-4 duration-500"
        )}
      >
        {/* Animation de pulse discret en arrière-plan */}
        <span className="absolute inset-0 rounded-full bg-zinc-950 group-hover:bg-orange-600 animate-ping opacity-20 duration-1000" />

        <div className="flex flex-col items-start leading-tight">
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
            Devis Express
          </span>
          <span className="font-heading text-sm font-black uppercase tracking-tight">
            Photo par SMS / Appel
          </span>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
          <Phone className="h-4 w-4" />
        </div>
      </a>

      {/* Petite étiquette "En ligne" pour l'aspect rassurant */}
      <div className="flex items-center gap-2 px-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-tighter text-zinc-500">
          Atelier ouvert — Réponse rapide
        </span>
      </div>
    </div>
  );
}
