"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export type ConsentState = {
  iframe: boolean;
  analytics: boolean;
};

type ConsentContextType = {
  consent: ConsentState | null;
  saveConsent: (c: ConsentState) => void;
  clearConsent: () => void;
  hasConsent: boolean;
  isLoaded: boolean;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("site_consent");
    if (cookie) {
      try {
        const parsed = JSON.parse(cookie) as ConsentState;
        setConsent(parsed);
      } catch {
        setConsent(null);
      }
    } else {
      setConsent(null);
    }
    setIsLoaded(true);
  }, []);

  const saveConsent = (newConsent: ConsentState) => {
    Cookies.set("site_consent", JSON.stringify(newConsent), { expires: 365 });
    setConsent(newConsent);
  };

  const clearConsent = () => {
    Cookies.remove("site_consent");
    setConsent(null);
  };

  const hasConsent = consent !== null;

  return (
    <ConsentContext.Provider
      value={{ consent, saveConsent, clearConsent, hasConsent, isLoaded }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
};
