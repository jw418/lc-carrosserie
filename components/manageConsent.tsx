"use client";

import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useConsent } from "@/hooks/useConsent";
import { useRouter } from "next/navigation";
import { Cookie, ShieldCheck, ArrowRight } from "lucide-react";

const ManageConsent = () => {
  const { consent, saveConsent } = useConsent();
  const [open, setOpen] = useState(false);

  const [tempConsent, setTempConsent] = useState({
    iframe: consent?.iframe ?? false,
    analytics: consent?.analytics ?? false,
  });

  const handleSave = () => {
    saveConsent(tempConsent);
    setOpen(false);
  };
  const router = useRouter();

  const handleGoToPrivacy = () => {
    setOpen(false);
    router.push("/politique-confidentialite");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild className=" hover:cursor-pointer">
        <button className="text-zinc-500 transition hover:text-orange-600 text-[12px] font-mono uppercase tracking-widest flex items-center gap-2">
          <Cookie size={12} />
          Cookies
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md rounded-[2rem] border-zinc-200 bg-white p-8">
        <AlertDialogHeader className="space-y-3">
          <div className="h-12 w-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-orange-600 border border-zinc-100">
            <ShieldCheck size={24} />
          </div>
          <AlertDialogTitle className="font-heading text-2xl font-black uppercase tracking-tighter text-zinc-950">
            Gestion des cookies
          </AlertDialogTitle>
          <AlertDialogDescription className="font-sans text-zinc-400 text-sm leading-relaxed">
            Nous utilisons des cookies pour optimiser votre expérience de
            navigation et analyser le trafic de notre atelier en ligne.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col gap-5 my-8">
          {/* Cookies nécessaires */}
          <div className="flex items-start justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
            <div className="space-y-1">
              <Label
                htmlFor="necessary"
                className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-950"
              >
                Indispensables
              </Label>
              <p className="text-[11px] text-zinc-500 leading-tight pr-4">
                Nécessaires au bon fonctionnement du site et à la sécurité.
              </p>
            </div>
            <Switch
              id="necessary"
              checked
              disabled
              className="data-[state=checked]:bg-zinc-400"
            />
          </div>

          {/* Contenus tiers */}
          <div className="flex items-start justify-between p-4 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="space-y-1">
              <Label
                htmlFor="iframe"
                className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-950"
              >
                Services Tiers
              </Label>
              <p className="text-[11px] text-zinc-500 leading-tight pr-4">
                Affichage de Google Maps pour l'atelier et vidéos explicatives.
              </p>
            </div>
            <Switch
              id="iframe"
              checked={tempConsent.iframe}
              onCheckedChange={(checked) =>
                setTempConsent((c) => ({ ...c, iframe: checked }))
              }
              className="data-[state=checked]:bg-orange-600"
            />
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between p-4 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="space-y-1">
              <Label
                htmlFor="analytics"
                className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-950"
              >
                Mesure d'audience
              </Label>
              <p className="text-[11px] text-zinc-500 leading-tight pr-4">
                Statistiques anonymes pour améliorer nos services de
                carrosserie.
              </p>
            </div>
            <Switch
              id="analytics"
              checked={tempConsent.analytics}
              onCheckedChange={(checked) =>
                setTempConsent((c) => ({ ...c, analytics: checked }))
              }
              className="data-[state=checked]:bg-orange-600"
            />
          </div>

          <button
            onClick={handleGoToPrivacy}
            className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 transition-colors text-[10px] font-mono uppercase tracking-widest self-start"
          >
            Politique de confidentialité
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <AlertDialogFooter className="flex-col sm:flex-row gap-3">
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 rounded-xl"
          >
            Annuler
          </Button>
          <Button
            onClick={handleSave}
            className="bg-zinc-950 hover:bg-orange-600 text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-6 rounded-xl transition-all shadow-xl shadow-zinc-200 active:scale-95"
          >
            Enregistrer les choix
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ManageConsent;
