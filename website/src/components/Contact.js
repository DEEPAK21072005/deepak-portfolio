const EMAIL_ADDRESS = 'polisettideepak14348@gmail.com';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/deepak-polisetti/',
    className: 'contact__social-link--linkedin',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5V20H3V8.5h3.5ZM4.75 3A2.05 2.05 0 1 1 4.7 7.1 2.05 2.05 0 0 1 4.75 3ZM21 13.4V20h-3.5v-6.2c0-1.56-.56-2.63-1.95-2.63-1.06 0-1.69.72-1.97 1.4-.1.25-.13.6-.13.95V20H10V8.5h3.45v1.57c.46-.7 1.27-1.7 3.1-1.7C18.8 8.37 21 9.84 21 13.4Z" fill="currentColor"/></svg>',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/DEEPAK21072005',
    className: 'contact__social-link--github',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.25a9.75 9.75 0 0 0-3.08 19.01c.49.09.67-.21.67-.47v-1.72c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.61 0 0 .83-.27 2.69 1.01A9.28 9.28 0 0 1 12 6.43c.83 0 1.66.11 2.44.33 1.86-1.28 2.69-1.01 2.69-1.01.54 1.36.2 2.36.1 2.61.64.69 1.02 1.57 1.02 2.64 0 3.78-2.3 4.61-4.49 4.85.35.31.67.93.67 1.89v2.8c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z" fill="currentColor"/></svg>',
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com/deepakpolisetti',
    className: 'contact__social-link--kaggle',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.25h3.28v7.03l5.36-7.03h3.94l-6.2 8 6.63 9.45h-3.9l-5-7.2-1.83 2.32v4.88H5V3.25Z" fill="currentColor"/></svg>',
  },
  {
    name: 'X / Twitter',
    url: 'https://twitter.com/_gentle_man_21',
    className: 'contact__social-link--x',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2.25h3.68l-8.04 9.2L24 21.75h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 2.25h7.58l5.24 6.93 6.08-6.93Zm-1.29 17.3h2.04L6.47 4.34H4.29L17.61 19.55Z" fill="currentColor"/></svg>',
  },
];

export function validateContactForm({ name, email, subject, message }) {
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return 'Please fill out all fields before sending.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Enter a valid email address so Deepak can reply.';
  }

  return null;
}

export async function sendContactMessage({ name, email, subject, message }) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
      signal: controller.signal,
    });

    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json') ? await response.json() : {};

    if (!response.ok) {
      throw new Error(payload.error || 'Unable to send your message. Please try again or email directly.');
    }

    return payload;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function Contact() {
  const socialMarkup = socialLinks.map((social) => `
    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="contact__social-link ${social.className}" aria-label="Visit Deepak's ${social.name} profile">
      <span class="contact__social-icon">${social.icon}</span>
      <span>${social.name}</span>
      <svg class="contact__external-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5h6v6M19 5l-9.5 9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  `).join('');

  return `
    <section class="contact" id="contact" aria-label="Contact">
      <div class="container contact__container">
        <div class="contact__header">
          <span class="section__label">Contact</span>
          <h2 class="section__heading">Let’s build something meaningful.</h2>
          <p class="contact__description">
            I’m open to AI, Machine Learning, and Data Analytics opportunities. Send a message or reach out directly — I’ll get back to you promptly.
          </p>
        </div>

        <div class="contact__content">
          <aside class="contact__info" aria-label="Direct contact and social profiles">
            <article class="contact__card contact__card--email">
              <div class="contact__card-kicker"><span class="contact__presence-dot" aria-hidden="true"></span> Available to connect</div>
              <h3 class="contact__info-heading">Send an email</h3>
              <a class="contact__email" href="mailto:${EMAIL_ADDRESS}">${EMAIL_ADDRESS}</a>
              <div class="contact__email-actions">
                <button type="button" class="contact__copy-button" id="copy-contact-email">Copy email</button>
                <span class="contact__hint" id="contact-hint" aria-live="polite">Usually replies within 24 hours</span>
              </div>
            </article>

            <article class="contact__card contact__card--social">
              <h3 class="contact__info-heading">Connect online</h3>
              <p class="contact__social-copy">Follow my work, projects, and professional journey.</p>
              <div class="contact__socials">
                ${socialMarkup}
              </div>
            </article>
          </aside>

          <div class="contact__form-wrapper">
            <form class="contact__form" id="contact-form" novalidate>
              <div class="contact__form-intro">
                <span class="contact__form-eyebrow">Secure contact form</span>
                <h3 class="contact__form-title">Start a conversation</h3>
                <p>Your details are used only to respond to your message.</p>
              </div>

              <div class="form-group">
                <label for="user_name" class="form-label">Your name</label>
                <input type="text" id="user_name" name="name" class="form-input" autocomplete="name" placeholder="e.g. Sarah Jenkins" required maxlength="100" />
              </div>

              <div class="form-group">
                <label for="user_email" class="form-label">Your email</label>
                <input type="email" id="user_email" name="email" class="form-input" autocomplete="email" inputmode="email" placeholder="e.g. sarah@company.com" required maxlength="254" />
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" class="form-input" placeholder="e.g. AI internship / full-time opportunity" required maxlength="160" />
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-textarea" rows="5" placeholder="Hello Deepak, I’d like to discuss an opportunity…" required maxlength="4000"></textarea>
              </div>

              <button type="submit" class="btn btn--primary contact__submit-btn" id="contact-submit">
                <span data-submit-label>Send message</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>

              <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function copyEmailAddress() {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(EMAIL_ADDRESS);
  }

  const temporaryInput = document.createElement('textarea');
  temporaryInput.value = EMAIL_ADDRESS;
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.style.position = 'fixed';
  temporaryInput.style.opacity = '0';
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  document.execCommand('copy');
  temporaryInput.remove();
  return Promise.resolve();
}

export function initContact() {
  const copyButton = document.getElementById('copy-contact-email');
  const hint = document.getElementById('contact-hint');
  const form = document.getElementById('contact-form');
  const submitButton = document.getElementById('contact-submit');
  const submitLabel = submitButton?.querySelector('[data-submit-label]');
  const formStatus = document.getElementById('form-status');

  const setStatus = (message, state = 'info') => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status form-status--${state}`;
  };

  if (copyButton && hint) {
    copyButton.addEventListener('click', async () => {
      try {
        await copyEmailAddress();
        hint.textContent = 'Email copied to your clipboard';
        hint.classList.add('copied');
      } catch {
        hint.textContent = 'Copy was not available — use the email link above';
        hint.classList.add('copied');
      }

      window.setTimeout(() => {
        hint.textContent = 'Usually replies within 24 hours';
        hint.classList.remove('copied');
      }, 2600);
    });
  }

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const values = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    const validationError = validateContactForm(values);
    if (validationError) {
      setStatus(validationError, 'error');
      return;
    }

    form.setAttribute('aria-busy', 'true');
    if (submitButton) submitButton.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Sending…';
    setStatus('Sending your message securely…', 'info');

    try {
      await sendContactMessage(values);
      form.reset();
      setStatus('Message sent — thank you. Deepak will get back to you soon.', 'success');
      if (submitLabel) submitLabel.textContent = 'Message sent';
    } catch (error) {
      const message = error?.name === 'AbortError'
        ? 'The request timed out. Please email Deepak directly instead.'
        : error?.message || 'Sorry, there was a problem sending your message. Please try again.';
      setStatus(message, 'error');
      if (submitLabel) submitLabel.textContent = 'Try again';
    } finally {
      form.removeAttribute('aria-busy');
      if (submitButton) submitButton.disabled = false;
    }
  });
}
