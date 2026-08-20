import { certifications, issuerFilters } from '../data/certifications.js';

export function Certifications() {
  const counts = { All: certifications.length };
  certifications.forEach(cert => {
    counts[cert.issuer] = (counts[cert.issuer] || 0) + 1;
  });

  return `
    <section class="certifications" id="certifications" aria-label="Certifications">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container certifications__inner">
        <div class="certifications__header reveal">
          <span class="section__label" style="color:#F59E0B;">Certifications</span>
          <h2 class="section__heading">Credentials &amp; Learning.</h2>
          <p class="certifications__subheading">32+ verified professional certifications from leading industry leaders</p>
        </div>
        
        <div class="certifications__controls reveal">
          <div class="certifications__search-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="certifications__search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="cert-search" class="certifications__search" placeholder="Search by certificate title or keyword..." aria-label="Search certifications" />
          </div>
          <div class="certifications__filters" id="cert-filters">
            ${issuerFilters.map(issuer => {
              const count = counts[issuer] || 0;
              if (issuer !== 'All' && count === 0) return '';
              return `
                <button class="certifications__filter-pill ${issuer === 'All' ? 'active' : ''}" data-issuer="${issuer}">
                  ${issuer} <span class="certifications__pill-count">${count}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="certifications__grid" id="cert-grid">
          ${certifications.map(cert => `
            <article class="certifications__card reveal tilt-card" data-issuer="${cert.issuer}" data-title="${cert.title.toLowerCase()}">
              <div class="certifications__card-top">
                <span class="certifications__issuer-badge">${cert.issuer}</span>
                <h3 class="certifications__card-title">${cert.title}</h3>
              </div>
              <div class="certifications__card-bottom">
                <button class="certifications__view-btn" data-pdf="${cert.file}" data-title="${cert.title} — ${cert.issuer}">
                  <span>View Certificate</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Modal for viewing certificate -->
    <div class="cert-modal" id="cert-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="cert-modal__backdrop" id="cert-modal-backdrop"></div>
      <div class="cert-modal__content glass-card">
        <button class="cert-modal__close" id="cert-modal-close" aria-label="Close modal">&times;</button>
        <h3 class="cert-modal__title" id="cert-modal-title">Certificate</h3>
        <div class="cert-modal__body" id="cert-modal-body">
          <iframe id="cert-modal-iframe" src="" title="Certificate Preview"></iframe>
        </div>
      </div>
    </div>
  `;
}

export function initCertifications() {
  const searchInput = document.getElementById('cert-search');
  const filterBtns = document.querySelectorAll('.certifications__filter-pill');
  const certCards = document.querySelectorAll('.certifications__card');
  const modal = document.getElementById('cert-modal');
  const modalBackdrop = document.getElementById('cert-modal-backdrop');
  const modalClose = document.getElementById('cert-modal-close');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalIframe = document.getElementById('cert-modal-iframe');

  let activeIssuer = 'All';
  let searchQuery = '';

  function filterCerts() {
    certCards.forEach(card => {
      const issuer = card.dataset.issuer;
      const title = card.dataset.title;
      const matchesIssuer = activeIssuer === 'All' || issuer === activeIssuer;
      const matchesSearch = !searchQuery || title.includes(searchQuery.toLowerCase());

      if (matchesIssuer && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeIssuer = btn.dataset.issuer;
      filterCerts();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterCerts();
  });

  // Modal handlers
  document.querySelectorAll('.certifications__view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pdf = btn.dataset.pdf;
      const title = btn.dataset.title;
      if (modalTitle) modalTitle.textContent = title;
      if (modalIframe) modalIframe.src = pdf;
      if (modal) {
        modal.classList.add('cert-modal--open');
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('cert-modal--open');
      modal.setAttribute('aria-hidden', 'true');
      if (modalIframe) modalIframe.src = '';
    }
  };

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
}
