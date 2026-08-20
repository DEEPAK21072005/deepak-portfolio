export function Footer() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container footer__inner">

        <div class="footer__top">
          <span class="footer__brand">Deepak Polisetti</span>
          <nav class="footer__links" aria-label="Footer navigation">
            <a href="#about" class="footer__link">About</a>
            <a href="#projects" class="footer__link">Projects</a>
            <a href="#experience" class="footer__link">Experience</a>
            <a href="#contact" class="footer__link">Contact</a>
          </nav>
        </div>

        <div class="footer__bottom">
          <p class="footer__copy">&copy; 2025 Deepak Polisetti. Built with intention.</p>
          <p class="footer__location">Made in Dehradun, India</p>
        </div>

      </div>
    </footer>
  `;
}
