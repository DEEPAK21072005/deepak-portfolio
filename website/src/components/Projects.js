import { projects } from '../data/projects.js'
import { refreshScrollTrigger } from '../utils/animations.js'

const CATEGORIES = [
  { id: 'all',  label: 'All Projects' },
  { id: 'ai',   label: 'AI & ML' },
  { id: 'data', label: 'Data' },
  { id: 'web',  label: 'Web' },
  { id: 'game', label: 'Games' },
]

// Unsplash high quality tech visual image mappings per category & project
const PROJECT_IMAGES = {
  'ai-career-assistant': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
  'korean-grammar-coach': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
  'ghg-emissions-dashboard': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
  'sentiment-analysis': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  'gesture-control': 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop',
  'air-draw': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  'expense-tracker': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
  'dragon-cursor': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
  'express-crud': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
  'todo-react': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop',
  'weather-forecast': 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=600&auto=format&fit=crop',
  'snake-water-gun': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
  'fake-news-detection': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop',
  'jarvis-voice-assistant': 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop',
  'perfect-guess': 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=600&auto=format&fit=crop',
  'deepak-portfolio': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop',
}

function ProjectCard(project) {
  const categoryColors = {
    ai:   { color: '#10B981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.2)' },
    data: { color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.2)' },
    web:  { color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.2)' },
    game: { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.2)' },
  }
  const c = categoryColors[project.category] || categoryColors.web
  const imageUrl = PROJECT_IMAGES[project.id] || PROJECT_IMAGES['ai-career-assistant']

  return `
    <article
      class="project-card tilt-card"
      id="project-${project.id}"
      data-category="${project.category}"
      data-tilt
      tabindex="0"
      aria-label="Project: ${project.title}"
    >
      <!-- Image Thumbnail Banner -->
      <div class="project-card__image-wrapper">
        <img
          src="${imageUrl}"
          alt="Visual presentation of ${project.title}"
          class="project-card__image"
          loading="lazy"
          width="600"
          height="320"
        />
        <div class="project-card__image-overlay" style="background: linear-gradient(to top, rgba(10, 10, 15, 0.95), transparent);"></div>
        
        <!-- Category badge -->
        <div class="project-card__cat" style="color:${c.color};background:${c.bg};border-color:${c.border};">
          ${project.category.toUpperCase()}
        </div>
      </div>

      <!-- Title -->
      <h3 class="project-card__title">${project.title}</h3>

      <!-- Problem / Solution toggle strip -->
      <div class="project-card__body">
        <p class="project-card__text">${project.solution}</p>
      </div>

      <!-- Impact metric -->
      <div class="project-card__impact" style="border-color:${c.border};">
        <span class="project-card__impact-label">Impact</span>
        <span class="project-card__impact-text">${project.impact}</span>
      </div>

      <!-- Tech tags -->
      <div class="project-card__tags">
        ${project.technologies.slice(0, 4).map(t => `
          <span class="project-card__tag" style="color:${c.color};border-color:${c.border};">${t}</span>
        `).join('')}
        ${project.technologies.length > 4 ? `<span class="project-card__tag-more">+${project.technologies.length - 4}</span>` : ''}
      </div>

      <!-- Links footer -->
      <div class="project-card__footer">
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="View ${project.title} on GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.25a9.75 9.75 0 0 0-3.08 19.01c.49.09.67-.21.67-.47v-1.72c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.61 0 0 .83-.27 2.69 1.01A9.28 9.28 0 0 1 12 6.43c.83 0 1.66.11 2.44.33 1.86-1.28 2.69-1.01 2.69-1.01.54 1.36.2 2.36.1 2.61.64.69 1.02 1.57 1.02 2.64 0 3.78-2.3 4.61-4.49 4.85.35.31.67.93.67 1.89v2.8c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"/></svg>
            GitHub
          </a>
        ` : ''}
        ${project.demo && project.demo !== '#' ? `
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-card__link project-card__link--demo" aria-label="View live demo of ${project.title}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
        ` : ''}
      </div>

      <!-- Hover glow border -->
      <div class="project-card__glow-border" style="--card-color:${c.color};" aria-hidden="true"></div>
    </article>
  `
}

export function Projects() {
  return `
    <section class="projects" id="projects" aria-label="Projects">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container projects__inner">

        <div class="projects__header reveal">
          <span class="section__label" style="color:#10B981;">Projects</span>
          <h2 class="section__heading">Things I've built.</h2>
          <p class="projects__subtitle">A collection of AI, data, and web projects demonstrating real-world engineering.</p>
        </div>

        <!-- Filter tabs -->
        <div class="projects__filters" role="tablist" aria-label="Filter projects by category">
          ${CATEGORIES.map(({ id, label }) => `
            <button
              class="projects__filter-btn ${id === 'all' ? 'projects__filter-btn--active' : ''}"
              role="tab"
              aria-selected="${id === 'all'}"
              data-filter="${id}"
              id="filter-${id}"
            >
              ${label}
            </button>
          `).join('')}
        </div>

        <!-- Projects grid -->
        <div class="projects__grid" id="projects-grid" aria-live="polite" aria-label="Projects grid">
          ${projects.map(p => ProjectCard(p)).join('')}
        </div>

      </div>
    </section>
  `
}

export function initProjects() {
  const filterBtns = document.querySelectorAll('.projects__filter-btn')
  const cards = document.querySelectorAll('.project-card')

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter

      filterBtns.forEach(b => {
        b.classList.remove('projects__filter-btn--active')
        b.setAttribute('aria-selected', 'false')
      })
      btn.classList.add('projects__filter-btn--active')
      btn.setAttribute('aria-selected', 'true')

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter
        if (match) {
          card.style.display = ''
          requestAnimationFrame(() => {
            card.style.opacity = '1'
            card.style.transform = ''
          })
        } else {
          card.style.opacity = '0'
          card.style.transform = 'scale(0.92)'
          setTimeout(() => { card.style.display = 'none' }, 280)
        }
      })

      refreshScrollTrigger()
    })
  })

  // 3D Tilt effect
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reducedMotion) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const rotX = (-y / rect.height) * 10
        const rotY = (x / rect.width) * 10
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`
      })

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
      })

      card.addEventListener('focus', () => {
        card.style.transform = 'perspective(800px) translateZ(4px)'
      })
      card.addEventListener('blur', () => {
        card.style.transform = ''
      })
    })
  }
}
