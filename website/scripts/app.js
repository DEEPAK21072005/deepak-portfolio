import { Navbar, initNavbar } from '../src/components/Navbar.js'
import { Hero } from '../src/components/Hero.js'
import { initHeroCanvas } from '../src/components/HeroCanvas.js'
import { About } from '../src/components/About.js'
import { Experience } from '../src/components/Experience.js'
import { Projects, initProjects } from '../src/components/Projects.js'
import { Skills } from '../src/components/Skills.js'
import { Certifications, initCertifications } from '../src/components/Certifications.js'
import { Achievements } from '../src/components/Achievements.js'
import { Contact, initContact } from '../src/components/Contact.js'
import { Footer } from '../src/components/Footer.js'
import { animateHero, animateOnScroll } from '../src/utils/animations.js'
import { initTheme } from '../src/utils/themeToggle.js'
import { initCursor } from '../src/utils/cursor.js'
import { initPreloader, initScrollProgress } from '../src/utils/preloader.js'

export function initApp() {
  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  // Initialize theme first to avoid FOUC
  initTheme()

  // Render all components in semantic page flow
  app.innerHTML = `
    ${Navbar()}
    <main id="main-content">
      ${Hero()}
      ${About()}
      ${Experience()}
      ${Projects()}
      ${Skills()}
      ${Certifications()}
      ${Achievements()}
      ${Contact()}
    </main>
    ${Footer()}
  `

  // Initialize interactive components & utilities
  initNavbar()
  initProjects()
  initCertifications()
  initContact()
  initCursor()
  initPreloader()
  initScrollProgress()

  // Initialize Three.js Neural Net in Hero
  initHeroCanvas('hero-canvas-container')

  // Initialize GSAP scroll and entrance animations
  animateHero()
  animateOnScroll()
}
