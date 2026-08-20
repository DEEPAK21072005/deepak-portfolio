/* ==========================================================================
   Utility Modules — cursor.js
   Custom cursor: dot + ring + particle trail canvas
   Respects prefers-reduced-motion
   ========================================================================== */

export function initCursor() {
  // Bail on touch devices and reduced motion
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isTouch || reducedMotion) return

  const dot = document.getElementById('cursor-dot')
  const ring = document.getElementById('cursor-ring')
  const trailCanvas = document.getElementById('cursor-trail')

  if (!dot || !ring || !trailCanvas) return

  // Trail canvas setup
  const ctx = trailCanvas.getContext('2d')
  let W = window.innerWidth
  let H = window.innerHeight
  trailCanvas.width = W
  trailCanvas.height = H

  window.addEventListener('resize', () => {
    W = window.innerWidth
    H = window.innerHeight
    trailCanvas.width = W
    trailCanvas.height = H
  })

  // Mouse position
  let mouseX = W / 2
  let mouseY = H / 2

  // Ring follows with lag
  let ringX = mouseX
  let ringY = mouseY

  // Trail particles
  const particles = []
  const MAX_PARTICLES = 18

  class Particle {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.alpha = 0.55
      this.radius = Math.random() * 3 + 1.5
      this.decay = 0.025 + Math.random() * 0.02
      this.color = Math.random() > 0.5 ? '0, 245, 255' : '139, 92, 246'
    }

    update() {
      this.alpha -= this.decay
      this.radius *= 0.96
    }

    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
      ctx.fill()
    }

    get dead() {
      return this.alpha <= 0
    }
  }

  // Track mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Add trail particle
    particles.push(new Particle(mouseX, mouseY))
    if (particles.length > MAX_PARTICLES) {
      particles.shift()
    }

    // Move dot immediately
    dot.style.left = `${mouseX}px`
    dot.style.top = `${mouseY}px`
  })

  // Hover effects on interactive elements
  const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, .tilt-card, .project-card, .cert-card, .skills__pill'

  function addHoverListeners() {
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
    })
  }

  addHoverListeners()

  // Observer to re-add listeners when DOM changes
  const observer = new MutationObserver(() => addHoverListeners())
  observer.observe(document.body, { childList: true, subtree: true })

  // Animation loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, W, H)

    // Smooth ring follow (lerp)
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12

    ring.style.left = `${ringX}px`
    ring.style.top = `${ringY}px`

    // Draw + update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.draw(ctx)
      p.update()
      if (p.dead) particles.splice(i, 1)
    }

    requestAnimationFrame(animate)
  }

  animate()
}
