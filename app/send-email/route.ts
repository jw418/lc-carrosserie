import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/data/site.config";

const MAX_ATTACHMENTS = 4;
const MAX_ATTACHMENT_SIZE = 6 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "pdf"];

const estimateBase64Size = (content: string) => {
  const normalized = content.trim();
  const padding = normalized.endsWith("==")
    ? 2
    : normalized.endsWith("=")
    ? 1
    : 0;
  return Math.floor((normalized.length * 3) / 4) - padding;
};

const hasAllowedExtension = (filename: string) => {
  const ext = filename.split(".").pop()?.toLowerCase();
  return ext ? ALLOWED_EXTENSIONS.includes(ext) : false;
};

const isAllowedContentType = (contentType?: string) => {
  if (!contentType) return false;
  return contentType.startsWith("image/") || contentType === "application/pdf";
};

const base64Pattern = /^[A-Za-z0-9+/]+={0,2}$/;

const attachmentSchema = z
  .object({
    filename: z.string().min(1, "Nom de fichier requis"),
    content: z.string().min(1, "Contenu requis"),
    contentType: z.string().optional(),
    size: z.number().int().positive().optional(),
  })
  .superRefine((attachment, ctx) => {
    const contentTypeAllowed = isAllowedContentType(attachment.contentType);
    const extensionAllowed = hasAllowedExtension(attachment.filename);
    if (!contentTypeAllowed && !extensionAllowed) {
      ctx.addIssue({
        code: "custom",
        message: "Type de fichier non supporte.",
        path: ["contentType"],
      });
    }

    if (!base64Pattern.test(attachment.content)) {
      ctx.addIssue({
        code: "custom",
        message: "Contenu de fichier invalide.",
        path: ["content"],
      });
    }

    const computedSize = estimateBase64Size(attachment.content);
    const declaredSize = attachment.size ?? computedSize;
    if (
      computedSize > MAX_ATTACHMENT_SIZE ||
      declaredSize > MAX_ATTACHMENT_SIZE
    ) {
      ctx.addIssue({
        code: "custom",
        message: "Fichier trop volumineux.",
        path: ["size"],
      });
    }
  });

const contactSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.email("Email invalide"),
  message: z.string().min(1, "Message requis"),
  consent: z.literal(true).refine((val) => val === true, {
    message: "Consentement requis.",
  }),
  attachments: z.array(attachmentSchema).max(MAX_ATTACHMENTS).optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.websiteUrl;
const accentColor = "#f97316";
const phoneLink = siteConfig.phone.replace(/\s+/g, "");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatMessageHtml = (value: string) =>
  escapeHtml(value).replace(/\r?\n/g, "<br />");

const buildFooterHtml = () => {
  const description =
    siteConfig.baseline || "Atelier de carrosserie automobile";
  const phoneDisplay = siteConfig.phoneFr || siteConfig.phone;
  const addressLine = `${siteConfig.streetAddress}, ${siteConfig.zipCode} ${siteConfig.city}`;
  const hours = `${siteConfig.openingHours.weekdays}`;

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
      <tr>
        <td style="background:#09090b;padding:24px;border-radius:16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-family:Arial, sans-serif;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:-0.02em;color:#ffffff;">
                ${escapeHtml(
                  siteConfig.name
                )}<span style="color:${accentColor};">.</span>
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial, sans-serif;font-size:12px;line-height:1.6;color:#71717a;padding:12px 0 16px;">
                ${escapeHtml(description)}
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial, sans-serif;font-size:12px;color:#a1a1aa;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:4px 0;color:#52525b;width:90px;">Adresse</td>
                    <td style="padding:4px 0;color:#e4e4e7;">${escapeHtml(
                      addressLine
                    )}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:#52525b;">Telephone</td>
                    <td style="padding:4px 0;">
                      <a href="tel:${escapeHtml(
                        phoneLink
                      )}" style="color:#ffffff;text-decoration:none;">${escapeHtml(
    phoneDisplay
  )}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:#52525b;">Horaires</td>
                    <td style="padding:4px 0;color:#e4e4e7;">${escapeHtml(
                      hours
                    )}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;color:#52525b;">Site</td>
                    <td style="padding:4px 0;">
                      <a href="${escapeHtml(
                        baseUrl
                      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(
    baseUrl
  )}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid #27272a;padding-top:12px;margin-top:12px;font-family:Arial, sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#3f3f46;">
                ${new Date().getFullYear()} ${escapeHtml(siteConfig.legalName)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};

const buildEmailLayout = ({
  title,
  intro,
  bodyHtml,
  ctaLabel,
  ctaUrl,
  preheader,
}: {
  title: string;
  intro?: string;
  bodyHtml: string;
  ctaLabel?: string;
  ctaUrl?: string;
  preheader?: string;
}) => `
  <!doctype html>
  <html lang="fr">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;background:#f4f4f5;color:#18181b;">
      <span style="display:none;visibility:hidden;opacity:0;color:transparent;height:0;width:0;">
        ${preheader ? escapeHtml(preheader) : ""}
      </span>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">
              <tr>
                <td style="padding:24px 24px 0 24px;font-family:Arial, sans-serif;">
                  <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.25em;color:${accentColor};font-weight:700;">
                    ${escapeHtml(siteConfig.name)}
                  </div>
                  <h1 style="margin:12px 0 8px;font-size:28px;line-height:1.2;font-weight:800;color:#18181b;">
                    ${escapeHtml(title)}
                  </h1>
                  ${
                    intro
                      ? `<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#52525b;">${escapeHtml(
                          intro
                        )}</p>`
                      : ""
                  }
                </td>
              </tr>
              <tr>
                <td style="padding:0 24px 24px 24px;">
                  <div style="background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;padding:20px;font-family:Arial, sans-serif;font-size:14px;line-height:1.7;color:#27272a;">
                    ${bodyHtml}
                  </div>
                  ${
                    ctaLabel && ctaUrl
                      ? `<div style="padding-top:16px;">
                          <a href="${escapeHtml(
                            ctaUrl
                          )}" style="display:inline-block;background:${accentColor};color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:12px 18px;border-radius:999px;">
                            ${escapeHtml(ctaLabel)}
                          </a>
                        </div>`
                      : ""
                  }
                  ${buildFooterHtml()}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Payload JSON requis" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Champs invalides", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !toEmail) {
    return NextResponse.json(
      { error: "Configuration email manquante" },
      { status: 500 }
    );
  }

  const { name, email, message, attachments } = parsed.data;

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const messageHtml = formatMessageHtml(message);
    const attachmentItems =
      attachments?.map((attachment) => escapeHtml(attachment.filename)) ?? [];
    const attachmentsHtml = attachmentItems.length
      ? `
          <tr>
            <td style="padding:6px 0;color:#52525b;vertical-align:top;">Pieces jointes</td>
            <td style="padding:6px 0;color:#18181b;">
              <ul style="margin:0;padding-left:18px;">
                ${attachmentItems.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </td>
          </tr>
        `
      : "";

    const adminHtml = buildEmailLayout({
      title: "Nouveau message recu",
      intro: "Une demande a ete envoyee via le formulaire du site.",
      bodyHtml: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
          <tr>
            <td style="padding:6px 0;color:#52525b;width:120px;">Nom</td>
            <td style="padding:6px 0;color:#18181b;font-weight:600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#52525b;">Email</td>
            <td style="padding:6px 0;">
              <a href="mailto:${safeEmail}" style="color:${accentColor};text-decoration:none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#52525b;vertical-align:top;">Message</td>
            <td style="padding:6px 0;color:#18181b;">${messageHtml}</td>
          </tr>
          ${attachmentsHtml}
        </table>
        <p style="margin:16px 0 0;color:#52525b;font-size:12px;">
          Vous pouvez repondre directement a cet email pour contacter la personne.
        </p>
      `,
      preheader: `Nouveau message de ${name}`,
    });

    const attachmentsText = attachments?.length
      ? [
          "",
          "Pieces jointes:",
          ...attachments.map((attachment) => `- ${attachment.filename}`),
        ]
      : [];

    const adminText = [
      "Nouveau message via le formulaire LC Carrosserie.",
      "",
      `Nom: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      ...attachmentsText,
      "",
      "Vous pouvez repondre directement a cet email pour contacter la personne.",
    ].join("\n");

    const confirmationHtml = buildEmailLayout({
      title: "Demande bien reçue",
      intro: `Bonjour ${safeName}, merci de nous avoir contactés. Voici le récapitulatif de votre dossier.`,
      bodyHtml: `
        <div style="margin-bottom: 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#09090b; border-radius:12px; padding:20px; color:#ffffff;">
                <div style="font-family:Arial, sans-serif; font-size:10px; text-transform:uppercase; letter-spacing:0.2em; color:${accentColor}; font-weight:700; margin-bottom:12px;">
                  Statut de votre demande
                </div>
                <div style="font-family:Arial, sans-serif; font-size:16px; font-weight:800; text-transform:uppercase; font-style:italic;">
                  En cours de traitement <span style="color:${accentColor};">.</span>
                </div>
                <p style="margin:12px 0 0; font-size:13px; color:#a1a1aa; line-height:1.5;">
                  Notre équipe a bien reçu vos informations. Un conseiller de l'atelier analyse votre dossier et reviendra vers vous par téléphone ou par email sous 24h ouvrées.
                </p>
              </td>
            </tr>
          </table>
        </div>

        <div style="border:1px solid #e4e4e7; border-radius:12px; padding:20px;">
          <div style="font-family:Arial, sans-serif; font-size:11px; text-transform:uppercase; letter-spacing:0.15em; color:#71717a; font-weight:700; margin-bottom:16px; border-bottom:1px solid #f4f4f5; padding-bottom:8px;">
            Récapitulatif de votre message
          </div>
          
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px; line-height:1.6;">
            <tr>
              <td style="padding:4px 0; color:#71717a; width:100px;">Référence</td>
              <td style="padding:4px 0; color:#18181b; font-weight:700;">#${Math.random()
                .toString(36)
                .substr(2, 6)
                .toUpperCase()}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#71717a; vertical-align:top;">Votre message</td>
              <td style="padding:4px 0; color:#18181b;">${messageHtml}</td>
            </tr>
            ${
              attachmentItems.length > 0
                ? `
            <tr>
              <td style="padding:4px 0; color:#71717a; vertical-align:top;">Fichiers joints</td>
              <td style="padding:4px 0; color:#18181b; font-size:12px;">
                ${attachmentItems.map((item) => `• ${item}`).join("<br/>")}
              </td>
            </tr>`
                : ""
            }
          </table>
        </div>

        <div style="margin-top:24px; padding:0 10px;">
           <p style="margin:0; font-size:12px; color:#71717a; font-style:italic;">
            Une précision à apporter ? Vous pouvez répondre directement à cet email pour compléter votre demande.
           </p>
        </div>
      `,
      ctaLabel: "Appeler l'atelier",
      ctaUrl: `tel:${phoneLink}`,
      preheader: "Confirmation de votre demande - LC Carrosserie",
    });

    const confirmationText = [
      `Bonjour ${name},`,
      "",
      "Merci, votre demande a bien ete envoyee.",
      "Nous revenons vers vous sous 24h.",
      "",
      "Recapitulatif:",
      message,
      "",
      `Telephone: ${siteConfig.phoneFr || siteConfig.phone}`,
      `Site: ${baseUrl}`,
    ].join("\n");

    const resendAttachments =
      attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
      })) ?? [];

    await Promise.all([
      resend.emails.send({
        from: "LC Carrosserie <ne-pas-repondre@lc-carrosserie.fr>",
        to: [toEmail],
        replyTo: email,
        subject: `Nouveau message de ${name}`,
        html: adminHtml,
        text: adminText,
        attachments: resendAttachments.length ? resendAttachments : undefined,
      }),
      resend.emails.send({
        from: "LC Carrosserie <ne-pas-repondre@lc-carrosserie.fr>",
        to: [email],
        replyTo: toEmail,
        subject: `Confirmation de votre demande - ${siteConfig.name}`,
        html: confirmationHtml,
        text: confirmationText,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi", details: `${error}` },
      { status: 500 }
    );
  }
}
