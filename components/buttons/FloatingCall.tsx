"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { siteConfig } from "@/data/site.config";

const formatPhoneLink = (phone: string) => phone.replace(/\s+/g, "");

export function FloatingCall() {
  const [visible, setVisible] = useState(false);
  const phoneLink = `tel:${formatPhoneLink(siteConfig.phone)}`;

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={phoneLink}
      className="fixed bottom-6 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-semibold text-white shadow-xl ring-2 ring-white/30 transition hover:-translate-y-0.5 hover:shadow-2xl sm:right-6"
      aria-label={`Appeler ${siteConfig.phone}`}
    >
      <Phone className="h-4 w-4" />
      Appeler l atelier
    </a>
  );
}
