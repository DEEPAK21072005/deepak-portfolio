export function About() {
  return `
    <section class="about" id="about" aria-label="About Deepak Polisetti">
      <div class="noise-overlay" aria-hidden="true"></div>
      <div class="container about__inner">

        <div class="about__header reveal">
          <span class="section__label">About</span>
          <h2 class="section__heading">Getting to know me.</h2>
        </div>

        <div class="about__grid">

          <!-- Left: Text -->
          <div class="about__text reveal reveal--left">
            <p>
              I'm <strong class="about__name-highlight">Deepak Polisetti</strong>, a Computer Science student specializing in
              AI and Machine Learning at Uttaranchal University. My work sits at
              the intersection of artificial intelligence and practical
              problem-solving — I build systems that turn data into decisions.
            </p>
            <p>
              Through internships at <strong>IBM</strong> and <strong>Shell</strong>, I've gained hands-on experience
              with enterprise AI platforms, cloud computing, and sustainability
              analytics. I'm particularly drawn to NLP, retrieval-augmented
              generation, and building intelligent applications that have
              real-world impact.
            </p>
            <p>
              When I'm not building AI systems, you'll find me exploring new
              frameworks, contributing to open-source projects, or diving into
              research papers. I believe the best way to learn is to build.
            </p>

            <!-- Fun facts bar -->
            <div class="about__interests">
              <div class="about__interest-chip">
                <span class="about__interest-icon">🤖</span>
                <span>LLMs &amp; RAG</span>
              </div>
              <div class="about__interest-chip">
                <span class="about__interest-icon">👁️</span>
                <span>Computer Vision</span>
              </div>
              <div class="about__interest-chip">
                <span class="about__interest-icon">📊</span>
                <span>Data Analytics</span>
              </div>
              <div class="about__interest-chip">
                <span class="about__interest-icon">☁️</span>
                <span>Cloud AI</span>
              </div>
            </div>
          </div>

          <!-- Right: Detail cards with 3D flip -->
          <div class="about__details reveal reveal--right">
            <div class="about__card glass-card">
              ${[
                { label: 'Location',    value: 'Dehradun, Uttarakhand, India' },
                { label: 'Education',   value: 'B.Tech CSE (AI &amp; ML)' },
                { label: 'University',  value: 'Uttaranchal University' },
                { label: 'CGPA',        value: '8.61 / 10.0' },
                { label: 'Graduation',  value: 'May 2027' },
                { label: 'Languages',   value: 'English · Hindi · Telugu' },
                { label: 'Email',       value: '<a href="mailto:polisettideepak14348@gmail.com" class="about__email-link">polisettideepak14348@gmail.com</a>' },
              ].map(({ label, value }) => `
                <div class="about__detail">
                  <span class="about__detail-label">${label}</span>
                  <span class="about__detail-value">${value}</span>
                </div>
              `).join('')}
            </div>

            <!-- Floating achievement badge -->
            <div class="about__badge-float">
              <div class="about__badge-inner">
                <span class="about__badge-num">32+</span>
                <span class="about__badge-text">Certifications</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
