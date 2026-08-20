import { experiences } from '../data/experience.js'

export function Experience() {
  return `
    <section class="experience" id="experience" aria-label="Work Experience">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container experience__inner">

        <div class="experience__header reveal">
          <span class="section__label" style="color: #3B82F6;">Experience</span>
          <h2 class="section__heading">Where I've worked.</h2>
          <p class="experience__subtitle">Real-world exposure to enterprise AI and sustainability at global organizations.</p>
        </div>

        <!-- Animated timeline -->
        <div class="experience__timeline" role="list">
          ${experiences.map((exp, index) => `
            <article class="experience__card reveal ${index % 2 === 0 ? 'reveal--left' : 'reveal--right'}" role="listitem" id="exp-${exp.id}">
              <div class="experience__card-inner glass-card">
                <!-- Timeline connector -->
                <div class="experience__connector" aria-hidden="true">
                  <div class="experience__dot"></div>
                </div>

                <div class="experience__content">
                  <div class="experience__meta">
                    <div class="experience__company-row">
                      <span class="experience__company">${exp.company}</span>
                      <span class="experience__badge">${exp.type}</span>
                    </div>
                    <h3 class="experience__role">${exp.role}</h3>
                    <time class="experience__period">${exp.period}</time>
                  </div>

                  <p class="experience__description">${exp.description}</p>

                  <ul class="experience__impact" aria-label="Key contributions">
                    ${exp.impact.map(item => `
                      <li class="experience__impact-item">
                        <span class="experience__impact-dot" aria-hidden="true"></span>
                        ${item}
                      </li>
                    `).join('')}
                  </ul>

                  <div class="experience__tags">
                    ${exp.technologies.map(tech => `
                      <span class="experience__tag">${tech}</span>
                    `).join('')}
                  </div>

                  ${exp.certificate ? `
                    <a href="${exp.certificate}" target="_blank" rel="noopener noreferrer" class="experience__cert-link" aria-label="View ${exp.company} certificate">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      View Certificate
                    </a>
                  ` : ''}
                </div>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `
}
