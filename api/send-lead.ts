import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, project, agent } = req.body;

  if (!name || !email || !project) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeAgent = escapeHtml(agent);
  const safeProject = escapeHtml(project).replace(/\n/g, '<br/>');

  try {
    await resend.emails.send({
      from: 'Hermes Agents <onboarding@resend.dev>',
      to: ['hermes.promox@gmail.com'],
      replyTo: email,
      subject: `Nouvelle demande d'agent — ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; max-width: 640px;">
          <h2 style="margin: 0 0 24px;">Nouvelle demande d'agent IA</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          ${safeAgent ? `<p><strong>Agent souhaité :</strong> ${safeAgent}</p>` : ''}
          <div style="margin-top: 24px; background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <strong>Brief :</strong><br/>
            ${safeProject}
          </div>
          <p style="margin-top: 32px; color: #666; font-size: 13px;">
            Reçu via hermes-agents-ten.vercel.app
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
