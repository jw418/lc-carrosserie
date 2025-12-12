import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Message requis"),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_RECEIVER_EMAIL;

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

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "LC Carrosserie <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi", details: `${error}` },
      { status: 500 }
    );
  }
}
