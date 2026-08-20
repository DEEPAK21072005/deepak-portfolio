import { skillCategories } from '../data/skills.js'

const CATEGORY_ICONS = {
  'Programming':             '{ }',
  'AI & Machine Learning':   '🧠',
  'Data & Analytics':        '📊',
  'Cloud & Tools':           '☁️',
  'Currently Learning':      '⚡',
}

const CATEGORY_COLORS = {
  'Programming':             { color: '#8B5CF6', border: 'rgba(139, 92, 246, 0.2)', bg: 'rgba(139, 92, 246, 0.06)' },
  'AI & Machine Learning':   { color: '#00F5FF', border: 'rgba(0, 245, 255, 0.2)',  bg: 'rgba(0, 245, 255, 0.06)' },
  'Data & Analytics':        { color: '#3B82F6', border: 'rgba(59, 130, 246, 0.2)', bg: 'rgba(59, 130, 246, 0.06)' },
  'Cloud & Tools':           { color: '#10B981', border: 'rgba(16, 185, 129, 0.2)', bg: 'rgba(16, 185, 129, 0.06)' },
  'Currently Learning':      { color: '#F59E0B', border: 'rgba(245, 158, 11, 0.2)', bg: 'rgba(245, 158, 11, 0.06)', pulse: true },
}

export function Skills() {
  return `
    <section class="skills" id="skills" aria-label="Skills">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container skills__inner">

        <div class="skills__header reveal">
          <span class="section__label" style="color:#8B5CF6;">Skills</span>
          <h2 class="section__heading">My technical toolkit.</h2>
          <p class="skills__subtitle">Technologies and tools I use to build intelligent, data-driven systems.</p>
        </div>

        <div class="skills__grid">
          ${skillCategories.map(category => {
            const c = CATEGORY_COLORS[category.label] || CATEGORY_COLORS['Cloud & Tools']
            const icon = CATEGORY_ICONS[category.label] || '✦'
            return `
              <div class="skills__category reveal" id="skills-${category.id}">
                <div class="skills__category-header">
                  <span class="skills__category-icon" style="color:${c.color};">${icon}</span>
                  <h3 class="skills__category-label" style="color:${c.color};">${category.label}</h3>
                </div>
                <div class="skills__list">
                  ${category.skills.map((skill, i) => `
                    <span
                      class="skills__pill ${c.pulse ? 'skills__pill--pulse' : ''}"
                      style="--pill-color:${c.color};--pill-bg:${c.bg};--pill-border:${c.border};animation-delay:${i * 0.08}s;"
                      title="${skill}"
                    >${skill}</span>
                  `).join('')}
                </div>
              </div>
            `
          }).join('')}
        </div>

        <!-- Proficiency legend -->
        <div class="skills__legend reveal">
          <span class="skills__legend-item">
            <span class="skills__legend-dot" style="background:#00F5FF;box-shadow:0 0 6px #00F5FF;"></span>
            Core Expertise
          </span>
          <span class="skills__legend-item">
            <span class="skills__legend-dot" style="background:#8B5CF6;box-shadow:0 0 6px #8B5CF6;"></span>
            Proficient
          </span>
          <span class="skills__legend-item">
            <span class="skills__legend-dot" style="background:#F59E0B;box-shadow:0 0 6px #F59E0B;" class="pulse-dot"></span>
            In Progress
          </span>
        </div>

      </div>
    </section>
  `
}
