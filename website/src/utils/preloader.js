/* ==========================================================================
   Preloader — preloader.js
   Animated progress bar + neural net SVG
   Dismisses on window load with GSAP fade
   ========================================================================== */

import { gsap } from 'gsap'

export function initPreloader() {
  const preloader = document.getElementById('preloader')
  const bar = document.getElementById('preloader-bar')
  const pct = document.getElementById('preloader-pct')

  if (!preloader) return

  let progress = 0
  let targetProgress = 0
  let rafId = null
  let done = false

  // Fake progress that races towards target
  function tick() {
    progress += (targetProgress - progress) * 0.08
    if (bar) bar.style.width = `${progress}%`
    if (pct) pct.textContent = `${Math.round(progress)}%`

    if (progress < 99 || !done) {
      rafId = requestAnimationFrame(tick)
    } else {
      dismiss()
    }
  }

  // Advance target progress at intervals
  const interval = setInterval(() => {
    targetProgress = Math.min(targetProgress + Math.random() * 18 + 5, 85)
    clearInterval(interval)
  }, 200)

  const interval2 = setInterval(() => {
    if (!done) targetProgress = Math.min(targetProgress + Math.random() * 10 + 3, 90)
  }, 500)

  rafId = requestAnimationFrame(tick)

  function dismiss() {
    if (rafId) cancelAnimationFrame(rafId)
    clearInterval(interval2)

    gsap.to(preloader, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      delay: 0.2,
      onComplete: () => {
        preloader.classList.add('preloader--done')
        preloader.style.display = 'none'
        document.body.style.overflow = ''

        // Trigger hero entrance
        document.dispatchEvent(new CustomEvent('preloader:done'))
      }
    })
  }

  // Complete when page fully loads
  window.addEventListener('load', () => {
    done = true
    targetProgress = 100
    clearInterval(interval2)

    // Ensure it completes visually
    setTimeout(() => {
      if (preloader && !preloader.classList.contains('preloader--done')) {
        dismiss()
      }
    }, 800)
  })

  // Failsafe: dismiss after 5 seconds regardless
  setTimeout(() => {
    if (!done || !preloader.classList.contains('preloader--done')) {
      done = true
      targetProgress = 100
      dismiss()
    }
  }, 5000)

  // Prevent scroll during preload
  document.body.style.overflow = 'hidden'
}

export function initScrollProgress() {
  // Create scroll progress bar
  const progressBar = document.createElement('div')
  progressBar.id = 'scroll-progress'
  document.body.appendChild(progressBar)

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    progressBar.style.width = `${pct}%`
  }, { passive: true })
}
