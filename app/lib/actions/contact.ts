'use server';

import { Resend } from 'resend';

type ContactInput = { name: string; email: string; message: string };
type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(input: ContactInput): Promise<ContactResult> {
  const name = (input.name ?? '').trim();
  const email = (input.email ?? '').trim();
  const message = (input.message ?? '').trim();

  if (!name || name.length > 100) {
    return { ok: false, error: 'Please enter your name.' };
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (!message || message.length > 5000) {
    return { ok: false, error: 'Message is required (max 5000 characters).' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return { ok: false, error: 'Email is not configured. Please email me directly.' };
  }

  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL ?? 'nehorai.hadad@gmail.com';

  const sentAt = new Date().toLocaleString('en-IL', {
    timeZone: 'Asia/Jerusalem',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const textBody = [
    `From:    ${name} <${email}>`,
    `Sent:    ${sentAt}`,
    ``,
    `─────────────────────────────────`,
    ``,
    message,
    ``,
    `─────────────────────────────────`,
    `Reply directly to this email to respond.`,
  ].join('\n');

  const htmlBody = `
<div style="font-family:monospace;max-width:600px;margin:0 auto;background:#09090b;color:#e4e4e7;padding:32px;border-radius:12px">
  <p style="color:#22d3ee;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 24px">Portfolio Contact</p>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    <tr><td style="color:#71717a;font-size:12px;padding:4px 0;width:60px">Name</td><td style="color:#e4e4e7;font-size:14px">${name.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td></tr>
    <tr><td style="color:#71717a;font-size:12px;padding:4px 0">Email</td><td style="color:#e4e4e7;font-size:14px"><a href="mailto:${email}" style="color:#22d3ee;text-decoration:none">${email}</a></td></tr>
    <tr><td style="color:#71717a;font-size:12px;padding:4px 0">Sent</td><td style="color:#e4e4e7;font-size:12px">${sentAt}</td></tr>
  </table>
  <div style="background:#18181b;border:1px solid #27272a;border-radius:8px;padding:20px;white-space:pre-wrap;font-size:14px;line-height:1.7;color:#d4d4d8">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
  <p style="color:#52525b;font-size:11px;margin:24px 0 0">Hit reply to respond directly to ${email}</p>
</div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: textBody,
      html: htmlBody,
    });
    if (error) {
      console.error('[contact] Resend error', error);
      return { ok: false, error: 'Could not send right now. Please try again in a moment.' };
    }
    return { ok: true };
  } catch (err) {
    console.error('[contact] Unexpected error', err);
    return { ok: false, error: 'Could not send right now. Please try again in a moment.' };
  }
}
