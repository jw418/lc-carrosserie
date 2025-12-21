"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useConsent, ConsentState } from "@/hooks/useConsent";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const CookieBanner = () => {
  const { consent, saveConsent, hasConsent, isLoaded } = useConsent();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const initialConsent: ConsentState = {
    iframe: consent?.iframe ?? false,
    analytics: consent?.analytics ?? false,
  };
  const [tempConsent, setTempConsent] = useState<ConsentState>(initialConsent);

  const handleGoToPrivacy = () => {
    setOpen(false);
    router.push("/politique-confidentialite");
  };

  const handleAcceptAll = () => {
    saveConsent({ iframe: true, analytics: true });
  };

  const handleRejectAll = () => {
    saveConsent({ iframe: false, analytics: false });
  };

  const handleSave = () => {
    saveConsent(tempConsent);
    setOpen(false);
  };

  if (!isLoaded || hasConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 px-4 py-6 shadow-[0_-20px_40px_rgba(0,0,0,0.25)] backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:justify-between md:items-center">
        <div className="flex flex-col gap-3 md:gap-2">
          <p className="text-sm text-foreground">
            Nous utilisons des cookies pour améliorer votre expérience, diffuser des vidéos (YouTube)
            et mesurer l&apos;audience (Google Analytics, Ads).
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/politique-confidentialite" className="text-sm font-semibold text-primary underline">
              En savoir plus
            </Link>

            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="link" className="h-auto p-0 text-primary">
                  Gérer mes préférences
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Gestion des cookies</AlertDialogTitle>
                  <AlertDialogDescription>
                    Choisissez les types de cookies que vous souhaitez autoriser.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="my-4 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="necessary" className="text-sm font-medium">
                        Cookies nécessaires
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Toujours actifs. Indispensables au fonctionnement du site.
                      </p>
                    </div>
                    <Switch id="necessary" checked disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="iframe" className="text-sm font-medium">
                        Contenus tiers
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Intégration de services externes (YouTube, Google Maps…).
                      </p>
                    </div>
                    <Switch
                      id="iframe"
                      checked={tempConsent.iframe}
                      onCheckedChange={(checked) =>
                        setTempConsent((c) => ({ ...c, iframe: checked }))
                      }
                      className="transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="analytics" className="text-sm font-medium">
                        Mesure d&apos;audience & Publicité
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Analyse de trafic et ciblage publicitaire (Google Analytics, Ads…).
                      </p>
                    </div>
                    <Switch
                      id="analytics"
                      checked={tempConsent.analytics}
                      onCheckedChange={(checked) =>
                        setTempConsent((c) => ({ ...c, analytics: checked }))
                      }
                      className="transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                    />
                  </div>

                  <button
                    onClick={handleGoToPrivacy}
                    className="self-start text-sm font-semibold text-primary underline"
                  >
                    En savoir plus sur notre politique de cookies
                  </button>
                </div>

                <AlertDialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={handleSave}>Sauvegarder mes choix</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 md:flex-row">
          <Button variant="outline" onClick={handleRejectAll}>
            Tout refuser
          </Button>
          <Button onClick={handleAcceptAll}>Tout accepter</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
