"use client";

import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Paperclip, Upload, X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message trop court"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consentement requis." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

type AttachmentPayload = {
  filename: string;
  content: string;
  contentType?: string;
  size?: number;
};

const MAX_ATTACHMENTS = 4;
const MAX_FILE_SIZE = 6 * 1024 * 1024;

const formatFileSize = (size: number) => {
  if (size < 1024) return `${size} o`;
  const kb = size / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} Ko`;
  return `${(kb / 1024).toFixed(1)} Mo`;
};

const isAcceptedFile = (file: File) =>
  file.type.startsWith("image/") || file.type === "application/pdf";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentsError, setAttachmentsError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessingAttachments, setIsProcessingAttachments] = useState(false);
  const fileInputId = useId();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });
  const watchedFields = form.watch(["name", "email", "phone", "message"]);
  const showConsent =
    watchedFields.some((value) => value?.trim()) || attachments.length > 0;

  const addFiles = (files: File[]) => {
    setAttachments((prev) => {
      const next = [...prev];
      let error: string | null = null;

      for (const file of files) {
        if (next.length >= MAX_ATTACHMENTS) {
          error = `Limite de ${MAX_ATTACHMENTS} fichiers atteinte.`;
          break;
        }
        if (!isAcceptedFile(file)) {
          error = `Format non supporte: ${file.name}`;
          continue;
        }
        if (file.size > MAX_FILE_SIZE) {
          error = `Fichier trop lourd (${formatFileSize(file.size)}).`;
          continue;
        }
        next.push(file);
      }

      setAttachmentsError(error);
      return next;
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files.length) {
      addFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      addFiles(Array.from(event.target.files));
      event.target.value = "";
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, idx) => idx !== index));
    setAttachmentsError(null);
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          const [, base64] = reader.result.split(",");
          resolve(base64 ?? "");
        } else {
          reject(new Error("Format de fichier invalide"));
        }
      };
      reader.onerror = () => reject(new Error("Lecture du fichier impossible"));
      reader.readAsDataURL(file);
    });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    setErrorMessage(null);
    setAttachmentsError(null);

    const messageWithPhone = values.phone
      ? `${values.message}\n\nTelephone: ${values.phone}`
      : values.message;

    try {
      let attachmentsPayload: AttachmentPayload[] = [];
      if (attachments.length) {
        setIsProcessingAttachments(true);
        try {
          attachmentsPayload = await Promise.all(
            attachments.map(async (file) => ({
              filename: file.name,
              content: await toBase64(file),
              contentType: file.type,
              size: file.size,
            }))
          );
        } finally {
          setIsProcessingAttachments(false);
        }
      }

      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: messageWithPhone,
          attachments: attachmentsPayload.length ? attachmentsPayload : undefined,
          consent: values.consent,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Echec de l'envoi");
      }

      form.reset();
      setAttachments([]);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur inconnue");
    }
  };

  const isLoading = status === "loading" || isProcessingAttachments;

  return (
    <Form {...form}>
      <form
        id="contact-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="Nom et prenom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="vous@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telephone (optionnel)</FormLabel>
                <FormControl>
                  <Input placeholder="+33 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre demande</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Decrivez le vehicule, les degats et vos disponibilites."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <label className="text-sm font-medium">Pieces jointes (optionnel)</label>
          <div
            className={cn(
              "rounded-xl border border-dashed p-6 text-center transition-colors",
              isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30"
            )}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <input
              id={fileInputId}
              type="file"
              accept="image/*,application/pdf"
              multiple
              className="sr-only"
              onChange={handleFileChange}
            />
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Glissez-deposez vos fichiers ici
            </p>
            <Button variant="outline" asChild>
              <label htmlFor={fileInputId} className="cursor-pointer">
                Selectionner sur l'appareil
              </label>
            </Button>
            <p className="text-xs text-muted-foreground">
              JPG, PNG ou PDF • {MAX_ATTACHMENTS} fichiers max • {formatFileSize(MAX_FILE_SIZE)} chacun
            </p>
          </div>
        </div>

          {attachmentsError && (
            <p className="text-xs text-destructive">{attachmentsError}</p>
          )}

          {attachments.length > 0 && (
            <ul className="space-y-2">
              {attachments.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  <span className="flex items-center gap-2 text-foreground">
                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                    {file.name}
                    <span className="text-xs text-muted-foreground">
                      ({formatFileSize(file.size)})
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={`Supprimer ${file.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {showConsent && (
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="rounded-lg border border-border p-4">
                <div className="flex items-start gap-3">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border"
                    />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="text-sm font-medium">
                      J'accepte que mes informations soient utilisees pour etre recontacte.
                    </FormLabel>
                    <FormDescription className="text-xs">
                      Vos donnees sont traitees uniquement pour repondre a votre demande.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isLoading}
          >
            {isLoading ? <Spinner className="size-4" /> : "Envoyer la demande"}
          </Button>
          {status === "success" && (
            <p className="text-sm text-emerald-700">
              Message envoye. Nous revenons vers vous rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive">
              {errorMessage || "Une erreur est survenue, veuillez reessayer."}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
