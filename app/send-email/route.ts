import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/data/site.config";

const attachmentSchema = z.object({
  filename: z.string().min(1, "Nom de fichier requis"),
  content: z.string().min(1, "Contenu requis"),
  contentType: z.string().optional(),
  size: z.number().int().positive().optional(),
});

const contactSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.email("Email invalide"),
  message: z.string().min(1, "Message requis"),
  attachments: z.array(attachmentSchema).max(4).optional(),
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
      title: "Votre demande a bien ete envoyee",
      intro:
        "Merci pour votre message. Notre equipe revient vers vous rapidement.",
      bodyHtml: `
        <p style="margin:0 0 12px;">Bonjour ${safeName},</p>
        <p style="margin:0 0 12px;color:#52525b;">
          Nous avons bien recu votre demande. Un conseiller vous recontacte sous 24h.
        </p>
        <div style="background:#f4f4f5;border:1px solid #e4e4e7;border-radius:12px;padding:12px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:${accentColor};font-weight:700;margin-bottom:8px;">
            Recapitulatif
          </div>
          <div style="font-size:13px;color:#18181b;line-height:1.6;">${messageHtml}</div>
        </div>
        <p style="margin:12px 0 0;color:#52525b;font-size:12px;">
          Si vous souhaitez ajouter des informations, repondez a ce mail ou appelez-nous directement.
        </p>
      `,
      ctaLabel: "Appeler l'atelier",
      ctaUrl: `tel:${phoneLink}`,
      preheader: "Confirmation de votre demande LC Carrosserie",
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
        from: "LC Carrosserie <ne-pas-repondre@msg-lccarrosserie.fr>",
        to: [toEmail],
        replyTo: email,
        subject: `Nouveau message de ${name}`,
        html: adminHtml,
        text: adminText,
        attachments: resendAttachments.length ? resendAttachments : undefined,
      }),
      resend.emails.send({
        from: "LC Carrosserie <ne-pas-repondre@msg-lccarrosserie.fr>",
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
