"use client";

import { useConsent, ConsentState } from "@/hooks/useConsent";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CookieBanner = () => {
  const { consent, saveConsent, hasConsent, isLoaded } = useConsent();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleGoToPrivacy = () => {
    setOpen(false);
    router.push("/politique-confidentialite");
  };

  const initialConsent: ConsentState = {
    iframe: consent?.iframe ?? false,
    analytics: consent?.analytics ?? false,
  };

  const [tempConsent, setTempConsent] = useState<ConsentState>(initialConsent);

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
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-300 px-4 py-6 shadow-[0_-20px_40px_rgba(0,0,0,0.25)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row md:items-center sm:justify-between gap-6 ">
          <div className="flex flex-col gap-3 md:gap-2">
            <p className="text-sm text-gray-800">
              Nous utilisons des cookies pour améliorer votre expérience,
              diffuser des vidéos (YouTube) et mesurer l'audience (Google
              Analytics, Ads).
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/politique-confidentialite"
                className="text-blue-600 underline text-sm"
              >
                En savoir plus
              </Link>

              <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Gérer mes préférences
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Gestion des cookies</AlertDialogTitle>
                    <AlertDialogDescription>
                      Choisissez les types de cookies que vous souhaitez
                      autoriser.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <div className="flex flex-col gap-6 my-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label
                          htmlFor="necessary"
                          className="text-sm font-medium"
                        >
                          Cookies nécessaires
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Toujours actifs. Indispensables au fonctionnement du
                          site.
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
                          Intégration de services externes (YouTube, Google
                          Maps…).
                        </p>
                      </div>
                      <Switch
                        id="iframe"
                        checked={tempConsent.iframe}
                        onCheckedChange={(checked) =>
                          setTempConsent((c) => ({ ...c, iframe: checked }))
                        }
                        className="
    data-[state=checked]:bg-green-600
    data-[state=checked]:border-green-600   
    transition-colors
  "
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label
                          htmlFor="analytics"
                          className="text-sm font-medium"
                        >
                          Mesure d’audience & Publicité
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Analyse de trafic et ciblage publicitaire (Google
                          Analytics, Ads…).
                        </p>
                      </div>
                      <Switch
                        id="analytics"
                        checked={tempConsent.analytics}
                        onCheckedChange={(checked) =>
                          setTempConsent((c) => ({ ...c, analytics: checked }))
                        }
                        className="
    data-[state=checked]:bg-green-600
    data-[state=checked]:border-green-600   
    transition-colors
  "
                      />
                    </div>

                    <button
                      onClick={handleGoToPrivacy}
                      className="text-blue-600 underline text-sm self-start"
                    >
                      En savoir plus sur notre politique de cookies
                    </button>
                  </div>

                  <AlertDialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Annuler
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Sauvegarder mes choix
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          <div className="flex  flex-col-reverse md:flex-row gap-3">
            <Button variant="outline" onClick={handleRejectAll}>
              Tout refuser
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Tout accepter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
