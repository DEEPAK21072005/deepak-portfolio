/* ==========================================================================
   Animations — GSAP utility module
   Handles scroll-triggered entrance animations per section.
   Respects prefers-reduced-motion.
   ========================================================================== */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function animateHero() {
  if (prefersReducedMotion()) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('#hero-badge', { opacity: 0, y: 20, duration: 0.6, delay: 0.2 })
    .from('#hero-line1', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
    .from('#hero-line2', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
    .from('#hero-line3', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
    .from('#hero-desc',  { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('#hero-actions', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('#hero-stats .hero__stat-card', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.3')
    .from('#hero-image', { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.8')
}

export function animateOnScroll() {
  if (prefersReducedMotion()) return

  // Generic reveal elements
  gsap.utils.toArray('.reveal').forEach(el => {
    let fromState = { opacity: 0, y: 35 }
    if (el.classList.contains('reveal--left'))  fromState = { opacity: 0, x: -45 }
    if (el.classList.contains('reveal--right')) fromState = { opacity: 0, x: 45 }

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      ...fromState,
      duration: 0.8,
      ease: 'power3.out',
    })
  })

  // Stagger cards in grids
  const gridSelectors = [
    '.projects__grid .project-card',
    '.skills__grid .skills__category',
    '.certifications__grid .certifications__card',
    '.achievements__grid .achievement__item',
  ]

  gridSelectors.forEach(selector => {
    const items = gsap.utils.toArray(selector)
    if (!items.length) return

    gsap.from(items, {
      scrollTrigger: {
        trigger: items[0],
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 35,
      stagger: 0.07,
      duration: 0.65,
      ease: 'power3.out',
    })
  })

  const refreshTriggers = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }

  refreshTriggers()
  window.addEventListener('load', refreshTriggers)
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh()
}
