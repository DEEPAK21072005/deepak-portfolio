import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Languages from './components/Languages.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import CertificateModal from './components/CertificateModal.jsx';
import SpaceBackground from './components/SpaceBackground.jsx';
import WelcomeLoader from './components/WelcomeLoader.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import { ResumeData } from './data/resumeData.js';

export default function App() {
  // Welcome Loading Animation State
  const [isLoading, setIsLoading] = useState(true);

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('atlas_theme') || 'dark';
  });

  // Dynamic projects list (supports adding via Admin Panel)
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('atlas_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= ResumeData.projects.length) {
          return parsed;
        }
      } catch (e) {
        return ResumeData.projects;
      }
    }
    return ResumeData.projects;
  });

  // Dynamic certifications list (supports adding via Admin Panel)
  const [certifications, setCertifications] = useState(() => {
    const saved = localStorage.getItem('atlas_certifications');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= ResumeData.certifications.length) {
          return parsed;
        }
      } catch (e) {
        return ResumeData.certifications;
      }
    }
    return ResumeData.certifications;
  });

  // Modals state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [certModal, setCertModal] = useState({
    isOpen: false,
    cert: null
  });

  // Theme effect
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('atlas_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Admin actions
  const handleAddProject = (newProj) => {
    const updated = [newProj, ...projects];
    setProjects(updated);
    localStorage.setItem('atlas_projects', JSON.stringify(updated));
  };

  const handleAddCertificate = (newCert) => {
    const updated = [newCert, ...certifications];
    setCertifications(updated);
    localStorage.setItem('atlas_certifications', JSON.stringify(updated));
  };

  const handleResetData = () => {
    setProjects(ResumeData.projects);
    setCertifications(ResumeData.certifications);
    localStorage.removeItem('atlas_projects');
    localStorage.removeItem('atlas_certifications');
  };

  // Certificate Modal Actions
  const handleOpenCertModal = (certData) => {
    setCertModal({
      isOpen: true,
      cert: certData
    });
  };

  const handleCloseCertModal = () => {
    setCertModal({
      isOpen: false,
      cert: null
    });
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
      
      {/* 1. Cinematic Welcome Intro Screen */}
      {isLoading && (
        <WelcomeLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Full HD Parallax Space Background with Stars, Moon & Meteors */}
      <SpaceBackground />

      {/* 3. Foreground Interactive Content */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar 
          onOpenAdmin={() => setIsAdminOpen(true)}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Semantic Page Content with Scroll Reveal Animations */}
        <main id="main-content" tabIndex="-1">
          <Hero />

          <ScrollReveal direction="up" delay={50}>
            <About />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Experience onOpenCertModal={handleOpenCertModal} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Projects projects={projects} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Skills />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Certifications 
              certifications={certifications} 
              onOpenCertModal={handleOpenCertModal} 
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Achievements />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Languages />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <Contact />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <ScrollReveal direction="up" delay={20}>
          <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
        </ScrollReveal>
      </div>

      {/* Admin Panel Modal */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onAddProject={handleAddProject}
        onAddCertificate={handleAddCertificate}
        onResetData={handleResetData}
        projectsCount={projects.length}
        certificationsCount={certifications.length}
      />

      {/* Certificate Viewer Modal */}
      <CertificateModal
        isOpen={certModal.isOpen}
        onClose={handleCloseCertModal}
        cert={certModal.cert}
      />
    </div>
  );
}
