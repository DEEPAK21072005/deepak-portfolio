import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;
const MAX_MESSAGE_LENGTH = 4000;

function cleanValue(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character]));
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const name = cleanValue(req.body?.name, 100);
  const email = cleanValue(req.body?.email, 254);
  const subject = cleanValue(req.body?.subject, 160).replace(/[\r\n]+/g, ' ');
  const message = cleanValue(req.body?.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    console.error('Contact form is missing one or more mail environment variables.');
    return res.status(503).json({ error: 'The email service is temporarily unavailable. Please use the direct email link.' });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      // Sending from the authenticated mailbox avoids DMARC and SMTP sender-rejection failures.
      from: `Deepak Polisetti Portfolio <${SMTP_USER}>`,
      replyTo: { name, address: email },
      to: EMAIL_TO,
      subject: `[Portfolio] ${subject}`,
      text: `New portfolio message\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<h2>New portfolio message</h2><p><strong>From:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    });

    return res.status(200).json({ success: true, message: 'Message received.' });
  } catch (error) {
    console.error('Contact email send failed:', error instanceof Error ? error.message : error);
    return res.status(502).json({ error: 'Unable to send your message right now. Please email Deepak directly.' });
  }
}
