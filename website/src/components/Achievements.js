import { achievements } from '../data/achievements.js';

export function Achievements() {
  return `
    <section class="achievements" id="achievements" aria-label="Achievements & Competitions">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container achievements__inner">
        <div class="achievements__header reveal">
          <span class="section__label" style="color:#EC4899;">Achievements</span>
          <h2 class="section__heading">Recognition &amp; Milestones.</h2>
          <p class="achievements__subheading">Highlights from competitive hackathons, academic excellence, and technical leadership.</p>
        </div>

        <div class="achievements__grid">
          ${achievements.map((item, index) => `
            <article class="achievement__item reveal tilt-card glass-card" id="achievement-${index}">
              <div class="achievement__icon-wrapper">
                <span class="achievement__icon">🏆</span>
              </div>
              <div class="achievement__content">
                <span class="achievement__meta">${item.year} · ${item.category || 'Honors'}</span>
                <h3 class="achievement__title">${item.title}</h3>
                <p class="achievement__description">${item.description}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
