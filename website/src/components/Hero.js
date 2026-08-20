export function Hero() {
  return `
    <section class="hero" id="hero" aria-label="Introduction">
      <!-- Three.js Neural Net Canvas Background -->
      <div class="hero__canvas-bg" id="hero-canvas-container" aria-hidden="true"></div>

      <!-- Gradient overlay for readability -->
      <div class="hero__overlay" aria-hidden="true"></div>

      <div class="container hero__inner">

        <div class="hero__content">
          <!-- Animated status badge -->
          <div class="hero__status-badge reveal" id="hero-badge">
            <span class="hero__status-dot"></span>
            <span class="hero__status-text">Available for Opportunities</span>
          </div>

          <!-- Animated headline with split chars -->
          <h1 class="hero__title" id="hero-title" aria-label="Building Intelligent Data and AI Solutions">
            <span class="hero__title-line reveal" id="hero-line1">Building</span>
            <span class="hero__title-line reveal hero__title-accent" id="hero-line2">Intelligent</span>
            <span class="hero__title-line reveal" id="hero-line3">
              <span class="text-neon-cyan">Data &amp; AI</span>
              <span class="hero__title-normal"> Solutions.</span>
            </span>
          </h1>

          <p class="hero__description reveal" id="hero-desc">
            AI &amp; Analytics professional with hands-on experience at <strong>IBM</strong> and <strong>Shell</strong>.
            Specializing in Machine Learning, NLP, and intelligent cloud systems.
          </p>

          <div class="hero__actions reveal" id="hero-actions">
            <a href="https://www.linkedin.com/in/deepak-polisetti/" target="_blank" rel="noopener noreferrer" class="btn btn--linkedin" id="btn-linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.5 1.5 0 0 0-1.5 1.5c0 .83.67 1.5 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5c0-.83-.67-1.5-1.5-1.5z"/></svg>
              Connect on LinkedIn
            </a>
            <a href="#projects" class="btn btn--primary btn--glow" id="btn-projects">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/assets/resume.pdf" download class="btn btn--outline" id="btn-resume">
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>

          <!-- Stats row -->
          <div class="hero__stats reveal" id="hero-stats">
            <div class="hero__stat-card" id="stat-certs">
              <span class="hero__stat-value">32+</span>
              <span class="hero__stat-label">Certifications</span>
            </div>
            <div class="hero__stat-card" id="stat-projects">
              <span class="hero__stat-value">16+</span>
              <span class="hero__stat-label">AI &amp; Web Projects</span>
            </div>
            <div class="hero__stat-card" id="stat-cgpa">
              <span class="hero__stat-value">8.61</span>
              <span class="hero__stat-label">CGPA (AI &amp; ML)</span>
            </div>
            <div class="hero__stat-card" id="stat-exp">
              <span class="hero__stat-value">IBM &amp; Shell</span>
              <span class="hero__stat-label">Internship Alum</span>
            </div>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="hero__image reveal reveal--right" id="hero-image">
          <div class="hero__photo-wrapper">
            <!-- Glow rings -->
            <div class="hero__ring hero__ring--outer" aria-hidden="true"></div>
            <div class="hero__ring hero__ring--inner" aria-hidden="true"></div>
            <!-- Corner bracket decorators -->
            <div class="hero__corner hero__corner--tl" aria-hidden="true"></div>
            <div class="hero__corner hero__corner--tr" aria-hidden="true"></div>
            <div class="hero__corner hero__corner--bl" aria-hidden="true"></div>
            <div class="hero__corner hero__corner--br" aria-hidden="true"></div>
            <div class="hero__photo">
              <img
                src="/assets/profile.jpg"
                alt="Deepak Polisetti — AI and Data Analytics professional"
                width="400"
                height="400"
                loading="eager"
              />
            </div>
            <div class="hero__photo-badge">
              <span class="hero__badge-dot"></span>
              <span>Dehradun, India</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Scroll indicator -->
      <a href="#about" class="hero__scroll" aria-label="Scroll to about section">
        <span class="hero__scroll-text">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
        </svg>
      </a>
    </section>
  `
}
