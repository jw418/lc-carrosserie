"use client";

import * as React from "react";

import { useConsent } from "@/hooks/useConsent";
import { cn } from "@/lib/utils";

type GoogleMapEmbedProps = {
  mapSrc: string;
  fallbackImageSrc?: string;
  fallbackAlt?: string;
  mapLink?: string;
  title?: string;
  className?: string;
  height?: number;
  onRequestConsent?: () => void;
};

export function GoogleMapEmbed({
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9407071153355!2d5.359685413067668!3d43.54527785928183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9f3bb3d7d0aa9%3A0xe44190cc08aa9c3c!2sLC%20CARROSSERIE%20AIX%20EN%20PROVENCE!5e0!3m2!1sfr!2sfr!4v1767178341570!5m2!1sfr!2sfr",
  fallbackImageSrc = "/img/map.png",
  fallbackAlt = "Plan aerien du quartier",
  mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.9407071153355!2d5.359685413067668!3d43.54527785928183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9f3bb3d7d0aa9%3A0xe44190cc08aa9c3c!2sLC%20CARROSSERIE%20AIX%20EN%20PROVENCE!5e0!3m2!1sfr!2sfr!4v1767178341570!5m2!1sfr!2sfr",
  title = "Carte Google Maps",
  className,
  height = 420,
  onRequestConsent,
}: GoogleMapEmbedProps) {
  const { consent, saveConsent, isLoaded } = useConsent();

  const handleConsent = () => {
    if (onRequestConsent) {
      onRequestConsent();
      return;
    }

    saveConsent({
      iframe: true,
      analytics: consent?.analytics ?? false,
    });
  };

  const canShowMap = isLoaded && Boolean(consent?.iframe);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border",
        className
      )}
    >
      {canShowMap ? (
        <>
          <iframe
            title={title}
            src={mapSrc}
            height={height}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            allowFullScreen
          />
        </>
      ) : (
        <div className="relative">
          <img
            src={fallbackImageSrc}
            alt={fallbackAlt}
            className="h-full w-full object-cover"
            style={{ height }}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
