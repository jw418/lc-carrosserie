"use client";

import Link from "next/link";
import { useState } from "react";
import { Cookie, ShieldCheck, Settings2, ArrowRight } from "lucide-react";

import { useConsent, ConsentState } from "@/hooks/useConsent";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

const CookieBanner = () => {
  const { consent, saveConsent, hasConsent, isLoaded } = useConsent();
  const [open, setOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

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
  const router = useRouter();
  const handleGoToPrivacy = () => {
    setOpen(false);
    router.push("/politique-confidentialite");
  };

  if (!isLoaded || hasConsent) return null;

  return (
    <>
      <AlertDialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value && !hasConsent) {
            setIsBannerVisible(true);
          }
        }}
      >
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
                  Affichage de Google Maps pour l'atelier et vidéos
                  explicatives.
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
        {/* <AlertDialogContent className="max-w-md rounded-[2rem] border-zinc-200 bg-white p-8">
          <AlertDialogHeader className="space-y-3">
            <div className="h-12 w-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-orange-600 border border-zinc-100">
              <ShieldCheck size={24} />
            </div>
            <AlertDialogTitle className="font-heading text-2xl font-black uppercase tracking-tighter text-zinc-950">
              Configuration
            </AlertDialogTitle>
            <AlertDialogDescription className="font-sans text-zinc-500 text-sm leading-relaxed">
              Personnalisez vos autorisations de cookies.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="my-8 flex flex-col gap-5">
            <div className="flex items-start justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div className="space-y-1">
                <Label className="font-mono text-[10px] font-black uppercase tracking-widest">
                  Indispensables
                </Label>
                <p className="text-[11px] text-zinc-500">
                  Toujours actifs pour le fonctionnement.
                </p>
              </div>
              <Switch
                checked
                disabled
                className="data-[state=checked]:bg-zinc-400"
              />
            </div>

            <div className="flex items-start justify-between p-4 rounded-2xl border border-zinc-100">
              <div className="space-y-1">
                <Label className="font-mono text-[10px] font-black uppercase tracking-widest">
                  Contenus tiers
                </Label>
                <p className="text-[11px] text-zinc-500">
                  YouTube, Google Maps, etc.
                </p>
              </div>
              <Switch
                checked={tempConsent.iframe}
                onCheckedChange={(checked) =>
                  setTempConsent((c) => ({ ...c, iframe: checked }))
                }
                className="data-[state=checked]:bg-orange-600"
              />
            </div>

            <div className="flex items-start justify-between p-4 rounded-2xl border border-zinc-100">
              <div className="space-y-1">
                <Label className="font-mono text-[10px] font-black uppercase tracking-widest">
                  Analytics
                </Label>
                <p className="text-[11px] text-zinc-500">
                  Mesure de trafic et publicites.
                </p>
              </div>
              <Switch
                checked={tempConsent.analytics}
                onCheckedChange={(checked) =>
                  setTempConsent((c) => ({ ...c, analytics: checked }))
                }
                className="data-[state=checked]:bg-orange-600"
              />
            </div>
          </div>

          <AlertDialogFooter className="flex-col sm:flex-row gap-3">
            <Button
              variant="ghost"
              onClick={() => setOpen(false)}
              className="font-mono text-[10px] uppercase tracking-widest"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSave}
              className="bg-zinc-950 hover:bg-orange-600 text-white font-mono text-[10px] uppercase tracking-widest px-8 py-6 rounded-xl transition-all"
            >
              Enregistrer mes choix
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent> */}
      </AlertDialog>

      {isBannerVisible && (
        <div className="fixed bottom-6 left-6 z-[60] w-[calc(100%-3rem)] max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            {/* Background subtil decoration */}
            <div className="absolute -right-4 -top-4 text-zinc-50 pointer-events-none">
              <Cookie size={120} strokeWidth={0.5} />
            </div>

            <div className="relative flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-orange-500 shadow-lg">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-black uppercase tracking-tighter text-zinc-950">
                    Respect de votre vie privee
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-zinc-500">
                    Nous utilisons des cookies pour ameliorer votre experience,
                    diffuser des videos et mesurer l'audience de l'atelier.
                  </p>
                </div>
              </div>

              {/* Actions Secondaires */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/politique-confidentialite"
                  className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-950 underline transition-colors"
                >
                  En savoir plus
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setIsBannerVisible(false);
                    setOpen(true);
                  }}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors"
                >
                  <Settings2 size={12} />
                  Gerer les preferences
                </button>
              </div>

              {/* Boutons Principaux */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="rounded-xl border-zinc-200 font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-all h-12"
                >
                  Refuser
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="rounded-xl bg-zinc-950 font-mono text-[10px] font-bold uppercase tracking-widest text-white hover:bg-orange-600 transition-all h-12 shadow-lg shadow-zinc-100"
                >
                  Accepter tout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import { useConsent, ConsentState } from "@/hooks/useConsent";
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// // } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

// const CookieBanner = () => {
//   const { consent, saveConsent, hasConsent, isLoaded } = useConsent();
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const initialConsent: ConsentState = {
//     iframe: consent?.iframe ?? false,
//     analytics: consent?.analytics ?? false,
//   };
//   const [tempConsent, setTempConsent] = useState<ConsentState>(initialConsent);

//   const handleGoToPrivacy = () => {
//     setOpen(false);
//     router.push("/politique-confidentialite");
//   };

//   const handleAcceptAll = () => {
//     saveConsent({ iframe: true, analytics: true });
//   };

//   const handleRejectAll = () => {
//     saveConsent({ iframe: false, analytics: false });
//   };

//   const handleSave = () => {
//     saveConsent(tempConsent);
//     setOpen(false);
//   };

//   if (!isLoaded || hasConsent) return null;

//   return (
//     <div className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background/95 px-4 py-6 shadow-[0_-20px_40px_rgba(0,0,0,0.25)] backdrop-blur supports-[backdrop-filter]:backdrop-blur">
//       <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:justify-between md:items-center">
//         <div className="flex flex-col gap-3 md:gap-2">
//           <p className="text-sm text-foreground">
//             Nous utilisons des cookies pour améliorer votre expérience, diffuser des vidéos (YouTube)
//             et mesurer l&apos;audience (Google Analytics, Ads).
//           </p>
//           <div className="flex flex-wrap items-center gap-4">
//             <Link href="/politique-confidentialite" className="text-sm font-semibold text-primary underline">
//               En savoir plus
//             </Link>

//             <AlertDialog open={open} onOpenChange={setOpen}>
//               <AlertDialogTrigger asChild>
//                 <Button variant="link" className="h-auto p-0 text-primary">
//                   Gérer mes préférences
//                 </Button>
//               </AlertDialogTrigger>

//               <AlertDialogContent>
//                 <AlertDialogHeader>
//                   <AlertDialogTitle>Gestion des cookies</AlertDialogTitle>
//                   <AlertDialogDescription>
//                     Choisissez les types de cookies que vous souhaitez autoriser.
//                   </AlertDialogDescription>
//                 </AlertDialogHeader>

//                 <div className="my-4 flex flex-col gap-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <Label htmlFor="necessary" className="text-sm font-medium">
//                         Cookies nécessaires
//                       </Label>
//                       <p className="text-xs text-muted-foreground">
//                         Toujours actifs. Indispensables au fonctionnement du site.
//                       </p>
//                     </div>
//                     <Switch id="necessary" checked disabled />
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div>
//                       <Label htmlFor="iframe" className="text-sm font-medium">
//                         Contenus tiers
//                       </Label>
//                       <p className="text-xs text-muted-foreground">
//                         Intégration de services externes (YouTube, Google Maps…).
//                       </p>
//                     </div>
//                     <Switch
//                       id="iframe"
//                       checked={tempConsent.iframe}
//                       onCheckedChange={(checked) =>
//                         setTempConsent((c) => ({ ...c, iframe: checked }))
//                       }
//                       className="transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
//                     />
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div>
//                       <Label htmlFor="analytics" className="text-sm font-medium">
//                         Mesure d&apos;audience & Publicité
//                       </Label>
//                       <p className="text-xs text-muted-foreground">
//                         Analyse de trafic et ciblage publicitaire (Google Analytics, Ads…).
//                       </p>
//                     </div>
//                     <Switch
//                       id="analytics"
//                       checked={tempConsent.analytics}
//                       onCheckedChange={(checked) =>
//                         setTempConsent((c) => ({ ...c, analytics: checked }))
//                       }
//                       className="transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
//                     />
//                   </div>

//                   <button
//                     onClick={handleGoToPrivacy}
//                     className="self-start text-sm font-semibold text-primary underline"
//                   >
//                     En savoir plus sur notre politique de cookies
//                   </button>
//                 </div>

//                 <AlertDialogFooter>
//                   <Button variant="outline" onClick={() => setOpen(false)}>
//                     Annuler
//                   </Button>
//                   <Button onClick={handleSave}>Sauvegarder mes choix</Button>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialog>
//           </div>
//         </div>

//         <div className="flex flex-col-reverse gap-3 md:flex-row">
//           <Button variant="outline" onClick={handleRejectAll}>
//             Tout refuser
//           </Button>
//           <Button onClick={handleAcceptAll}>Tout accepter</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieBanner;
