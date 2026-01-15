"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

export type MicroTypeFormAnswer = {
  answeredYes: boolean;
  choice: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

type MicroTypeFormProps = {
  className?: string;
  firstStep: {
    question: string;
    yesLabel?: string;
  };
  secondStep: {
    question: string;
    options: Array<{ value: string; label: string }>;
    selectLabel?: string;
  };
  contactInfo?: {
    title?: string;
    lines?: string[];
    phone?: string;
    email?: string;
  };
  onSubmit?: (answer: MicroTypeFormAnswer) => void | Promise<void>;
};

const DEFAULT_CONTACT_TITLE = "Notre Atelier";

export function MicroTypeForm({
  className,
  firstStep,
  secondStep,
  contactInfo,
  onSubmit,
}: MicroTypeFormProps) {
  const [step, setStep] = React.useState(0);
  const [answeredYes, setAnsweredYes] = React.useState(false);
  const [choice, setChoice] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const canGoNext = step === 1 && choice.trim().length > 0;

  const submitToEmail = async (payload: MicroTypeFormAnswer) => {
    const selectedOption = secondStep.options.find(
      (option) => option.value === payload.choice
    );
    const choiceLabel = selectedOption?.label ?? payload.choice;
    const messageParts = [
      `Assurance deja contactee: ${payload.answeredYes ? "oui" : "non"}`,
      `Type d'intervention: ${choiceLabel}`,
      payload.phone ? `Telephone: ${payload.phone}` : null,
      payload.message ? `Message: ${payload.message}` : null,
    ].filter(Boolean);

    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        message: messageParts.join("\n"),
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new Error(data?.error || "Echec de l'envoi");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage(null);
    const payload: MicroTypeFormAnswer = {
      answeredYes,
      choice,
      name,
      email,
      phone: phone || undefined,
      message: message || undefined,
    };

    try {
      const submit = onSubmit ?? submitToEmail;
      await submit(payload);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Echec de l'envoi"
      );
    }
  };

  const containerStyles =
    "animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/70 backdrop-blur-xl shadow-2xl shadow-zinc-200/50";

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {/* Barre de progression discrète */}
      <div className="absolute -top-4 lg:-top-12 left-0 w-full flex justify-between px-2 ">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              step >= i ? "w-[31%] bg-orange-600" : "w-[31%] bg-zinc-200"
            )}
          />
        ))}
      </div>

      {step === 0 && (
        <section
          className={cn(containerStyles, "p-8 md:p-12 text-center space-y-8")}
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 font-bold">
              Étape 01 — Qualification
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-950">
              {firstStep.question}
            </h2>
          </div>
          <Button
            type="button"
            size="lg"
            className="h-16 px-10 rounded-2xl bg-zinc-950 hover:bg-orange-600 text-white font-mono text-xs font-bold uppercase tracking-widest transition-all group shadow-xl shadow-zinc-200"
            onClick={() => {
              setAnsweredYes(true);
              setStep(1);
            }}
          >
            {firstStep.yesLabel ?? "Oui, je souhaite un devis"}
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>
      )}

      {step === 1 && (
        <section className={cn(containerStyles, "p-8 md:p-12 space-y-8")}>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 font-bold">
              Étape 02 — Votre besoin
            </span>
            <h2 className="font-heading text-3xl font-black uppercase tracking-tighter text-zinc-950">
              {secondStep.question}
            </h2>
          </div>

          <div className="space-y-4">
            <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              {secondStep.selectLabel ?? "Type de prestation"}
            </label>
            <select
              className="h-14 w-full rounded-xl border border-zinc-200 bg-white px-4 font-sans text-sm focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all outline-none appearance-none cursor-pointer shadow-sm"
              value={choice}
              onChange={(event) => setChoice(event.target.value)}
            >
              <option value="">Sélectionner une option...</option>
              {secondStep.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="ghost"
              className="h-14 px-8 rounded-xl font-mono text-xs uppercase tracking-widest text-zinc-500"
              onClick={() => setStep(0)}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
            <Button
              type="button"
              className="h-14 flex-1 rounded-xl bg-zinc-950 hover:bg-orange-600 font-mono text-xs uppercase tracking-widest"
              onClick={() => setStep(2)}
              disabled={!canGoNext}
            >
              Suivant
            </Button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section
          className={cn(containerStyles, "grid lg:grid-cols-[1fr_300px] gap-0")}
        >
          <form className="p-8 md:p-10 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-600 font-bold">
                Étape 03 — Finalisation
              </span>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tighter">
                Contactez l'expert
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <LabelLight>Nom complet</LabelLight>
                <InputPrimary
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Jean Dupont"
                  required
                />
              </div>
              <div className="space-y-2">
                <LabelLight>Email</LabelLight>
                <InputPrimary
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <LabelLight>Téléphone</LabelLight>
              <InputPrimary
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06 00 00 00 00"
              />
            </div>

            <div className="space-y-2">
              <LabelLight>Votre demande</LabelLight>
              <Textarea
                rows={4}
                className="rounded-xl border-zinc-200 focus:border-orange-600 focus:ring-orange-600/20 shadow-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Précisez les dégâts ou votre besoin particulier..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep(1)}
                className="font-mono text-[10px] uppercase tracking-widest text-zinc-500"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Retour
              </Button>
              <Button
                type="submit"
                className="w-full sm:flex-1 h-14 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs uppercase tracking-widest shadow-lg shadow-orange-200 transition-all"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading"
                  ? "Envoi..."
                  : status === "success"
                  ? "Message envoyé !"
                  : "Envoyer ma demande"}
                {status === "idle" && <Send className="ml-3 h-4 w-4" />}
                {status === "success" && (
                  <CheckCircle2 className="ml-3 h-4 w-4" />
                )}
              </Button>
              {status === "error" && errorMessage && (
                <p className="text-xs text-red-600">{errorMessage}</p>
              )}
            </div>
          </form>

          {/* Sidebar Info Contact */}
          {contactInfo && (
            <aside className="bg-zinc-950 p-8 md:p-10 text-white flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-black uppercase tracking-tighter text-orange-500 leading-none">
                  {contactInfo.title ?? DEFAULT_CONTACT_TITLE}
                </h3>
                <div className="h-1 w-12 bg-zinc-800 rounded-full" />
              </div>

              <div className="space-y-6 font-sans text-sm text-zinc-400">
                {contactInfo.lines && (
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-orange-600 shrink-0" />
                    <div className="space-y-1">
                      {contactInfo.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}
                {contactInfo.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                    <p>{contactInfo.phone}</p>
                  </div>
                )}
                {contactInfo.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                    <p className="break-all">{contactInfo.email}</p>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-zinc-900">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Réponse sous 24h ouvrées
                </p>
              </div>
            </aside>
          )}
        </section>
      )}
    </div>
  );
}

// Sous-composants utilitaires locaux
const LabelLight = ({ children }: { children: React.ReactNode }) => (
  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
    {children}
  </label>
);

const InputPrimary = (props: React.ComponentProps<typeof Input>) => (
  <Input
    {...props}
    className="h-12 rounded-xl border-zinc-200 focus:border-orange-600 focus:ring-orange-600/20 shadow-sm transition-all"
  />
);

// "use client"

// import * as React from "react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// export type MicroTypeFormAnswer = {
//   answeredYes: boolean
//   choice: string
//   name: string
//   email: string
//   phone?: string
//   message?: string
// }

// type MicroTypeFormProps = {
//   className?: string
//   firstStep: {
//     question: string
//     yesLabel?: string
//   }
//   secondStep: {
//     question: string
//     options: Array<{ value: string; label: string }>
//     selectLabel?: string
//   }
//   contactInfo?: {
//     title?: string
//     lines?: string[]
//     phone?: string
//     email?: string
//   }
//   onSubmit?: (answer: MicroTypeFormAnswer) => void | Promise<void>
// }

// const DEFAULT_CONTACT_TITLE = "Contact"

// export function MicroTypeForm({
//   className,
//   firstStep,
//   secondStep,
//   contactInfo,
//   onSubmit,
// }: MicroTypeFormProps) {
//   const [step, setStep] = React.useState(0)
//   const [answeredYes, setAnsweredYes] = React.useState(false)
//   const [choice, setChoice] = React.useState("")
//   const [name, setName] = React.useState("")
//   const [email, setEmail] = React.useState("")
//   const [phone, setPhone] = React.useState("")
//   const [message, setMessage] = React.useState("")
//   const [status, setStatus] = React.useState<"idle" | "loading" | "success">(
//     "idle"
//   )

//   const canGoNext =
//     (step === 0 && answeredYes) ||
//     (step === 1 && choice.trim().length > 0)

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     if (status === "loading") return

//     setStatus("loading")
//     const payload: MicroTypeFormAnswer = {
//       answeredYes,
//       choice,
//       name,
//       email,
//       phone: phone || undefined,
//       message: message || undefined,
//     }

//     try {
//       await onSubmit?.(payload)
//       setStatus("success")
//     } catch {
//       setStatus("idle")
//     }
//   }

//   return (
//     <div className={cn("space-y-6", className)}>
//       {step === 0 && (
//         <section className="space-y-4 rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm">
//           <p className="text-lg font-semibold">{firstStep.question}</p>
//           <Button
//             type="button"
//             size="lg"
//             onClick={() => {
//               setAnsweredYes(true)
//               setStep(1)
//             }}
//           >
//             {firstStep.yesLabel ?? "Oui"}
//           </Button>
//         </section>
//       )}

//       {step === 1 && (
//         <section className="space-y-4 rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm">
//           <p className="text-lg font-semibold">{secondStep.question}</p>
//           <label className="space-y-2 text-sm text-muted-foreground">
//             <span>{secondStep.selectLabel ?? "Faites votre choix"}</span>
//             <select
//               className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm"
//               value={choice}
//               onChange={(event) => setChoice(event.target.value)}
//             >
//               <option value="">Selectionner</option>
//               {secondStep.options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <div className="flex flex-wrap gap-3">
//             <Button type="button" variant="outline" onClick={() => setStep(0)}>
//               Retour
//             </Button>
//             <Button type="button" onClick={() => setStep(2)} disabled={!canGoNext}>
//               Suivant
//             </Button>
//           </div>
//         </section>
//       )}

//       {step === 2 && (
//         <section className="grid gap-6 rounded-2xl border border-border/70 bg-white/80 p-6 shadow-sm lg:grid-cols-[minmax(0,1fr)_220px]">
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="grid gap-4 md:grid-cols-2">
//               <label className="space-y-2 text-sm text-muted-foreground">
//                 <span>Nom complet</span>
//                 <Input
//                   value={name}
//                   onChange={(event) => setName(event.target.value)}
//                   placeholder="Nom et prenom"
//                   required
//                 />
//               </label>
//               <label className="space-y-2 text-sm text-muted-foreground">
//                 <span>Email</span>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                   placeholder="vous@example.com"
//                   required
//                 />
//               </label>
//               <label className="space-y-2 text-sm text-muted-foreground">
//                 <span>Telephone</span>
//                 <Input
//                   value={phone}
//                   onChange={(event) => setPhone(event.target.value)}
//                   placeholder="+33 ..."
//                 />
//               </label>
//             </div>
//             <label className="space-y-2 text-sm text-muted-foreground">
//               <span>Votre demande</span>
//               <Textarea
//                 rows={4}
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 placeholder="Decrivez votre besoin."
//               />
//             </label>
//             <div className="flex flex-wrap gap-3">
//               <Button type="button" variant="outline" onClick={() => setStep(1)}>
//                 Retour
//               </Button>
//               <Button type="submit" disabled={status === "loading"}>
//                 {status === "loading" ? "Envoi..." : "Envoyer"}
//               </Button>
//               {status === "success" && (
//                 <p className="text-sm text-emerald-700">Merci, message envoye.</p>
//               )}
//             </div>
//           </form>

//           {contactInfo && (
//             <aside className="space-y-3 text-sm text-muted-foreground">
//               <p className="text-base font-semibold text-foreground">
//                 {contactInfo.title ?? DEFAULT_CONTACT_TITLE}
//               </p>
//               {contactInfo.lines?.map((line, index) => (
//                 <p key={`${line}-${index}`}>{line}</p>
//               ))}
//               {contactInfo.phone && <p>Tel: {contactInfo.phone}</p>}
//               {contactInfo.email && <p>Email: {contactInfo.email}</p>}
//             </aside>
//           )}
//         </section>
//       )}
//     </div>
//   )
// }
