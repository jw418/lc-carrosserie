"use client";
import { useEffect } from "react";
import { useConsent } from "@/hooks/useConsent";

const GoogleConsentUpdater = () => {
  const { consent, isLoaded } = useConsent();

  useEffect(() => {
    if (!isLoaded) return;

    if (consent?.analytics) {
      let attempts = 0;
      const interval = setInterval(() => {
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
            functionality_storage: "granted",
            personalization_storage: "granted",
          });
          clearInterval(interval);
          console.log("Consent updated for gtag.");
        } else {
          console.log("Attempting to update consent...", attempts);
          attempts++;
          if (attempts > 10) clearInterval(interval);
        }
      }, 200);
    } else {
      // Consent refused → désactiver le stockage
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage: "denied",
          analytics_storage: "denied",
          functionality_storage: "denied",
          personalization_storage: "denied",
        });
        console.log("Consent denied for gtag.");
      }
    }
  }, [consent, isLoaded]);

  return null;
};

export default GoogleConsentUpdater;
