import { toggleTheme, getCurrentTheme } from '../utils/themeToggle.js'

const navLinks = [
  { href: '#about',          label: 'About' },
  { href: '#experience',     label: 'Experience' },
  { href: '#projects',       label: 'Projects' },
  { href: '#skills',         label: 'Skills' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact',        label: 'Contact' },
]

export function Navbar() {
  return `
    <header class="navbar" id="navbar" role="banner">
      <div class="navbar__inner">
        <a href="#hero" class="navbar__logo" aria-label="Deepak Polisetti — home">
          <span class="navbar__logo-dot"></span>
          <span class="navbar__logo-name">Deepak<span class="navbar__logo-accent">.ai</span></span>
        </a>

        <nav class="navbar__nav" aria-label="Primary navigation">
          ${navLinks.map(({ href, label }) => `
            <a href="${href}" class="navbar__link" data-nav-link>${label}</a>
          `).join('')}
        </nav>

        <div class="navbar__actions">
          <!-- Theme Toggle -->
          <button
            class="theme-toggle"
            id="theme-toggle-btn"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            <!-- Sun icon (shown in dark mode to switch to light) -->
            <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <!-- Moon icon (shown in light mode to switch to dark) -->
            <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <a
            href="https://www.linkedin.com/in/deepak-polisetti/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar__linkedin-btn"
            aria-label="Visit Deepak's LinkedIn profile"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.5 1.5 0 0 0-1.5 1.5c0 .83.67 1.5 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5c0-.83-.67-1.5-1.5-1.5z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button
          class="navbar__toggle"
          id="navbar-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
          aria-controls="navbar-mobile"
        >
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="navbar__mobile" id="navbar-mobile" aria-hidden="true">
        <nav class="navbar__mobile-nav" aria-label="Mobile navigation">
          ${navLinks.map(({ href, label }) => `
            <a href="${href}" class="navbar__mobile-link" data-mobile-link>${label}</a>
          `).join('')}
        </nav>
        <a
          href="https://www.linkedin.com/in/deepak-polisetti/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--linkedin navbar__mobile-cta"
        >
          Connect on LinkedIn
        </a>
      </div>
    </header>
  `
}

export function initNavbar() {
  const navbar    = document.getElementById('navbar')
  const toggle    = document.getElementById('navbar-toggle')
  const mobile    = document.getElementById('navbar-mobile')
  const themeBtn  = document.getElementById('theme-toggle-btn')
  const navLinks  = document.querySelectorAll('[data-nav-link]')
  const mobileLinks = document.querySelectorAll('[data-mobile-link]')

  // ── Scroll: blur + active link ──
  const sections = document.querySelectorAll('section[id]')

  const onScroll = () => {
    // Glassmorphism on scroll
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled')
    } else {
      navbar.classList.remove('navbar--scrolled')
    }

    // Active section highlight
    let current = ''
    sections.forEach(section => {
      const top = section.offsetTop - 120
      if (window.scrollY >= top) current = section.id
    })

    navLinks.forEach(link => {
      link.classList.toggle('navbar__link--active', link.getAttribute('href') === `#${current}`)
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // ── Mobile toggle ──
  const closeMobile = () => {
    toggle.classList.remove('navbar__toggle--active')
    mobile.classList.remove('navbar__mobile--open')
    toggle.setAttribute('aria-expanded', 'false')
    mobile.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('no-scroll')
  }

  toggle?.addEventListener('click', () => {
    const isOpen = mobile.classList.contains('navbar__mobile--open')
    if (isOpen) {
      closeMobile()
    } else {
      toggle.classList.add('navbar__toggle--active')
      mobile.classList.add('navbar__mobile--open')
      toggle.setAttribute('aria-expanded', 'true')
      mobile.setAttribute('aria-hidden', 'false')
      document.body.classList.add('no-scroll')
    }
  })

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobile)
  })

  // ── Theme toggle ──
  themeBtn?.addEventListener('click', () => {
    const next = toggleTheme()
    themeBtn.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`)
  })
}