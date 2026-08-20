import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  ExternalLink, 
  FileText, 
  Cloud, 
  Leaf, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Cpu,
  Layers
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

export default function Experience({ onOpenCertModal }) {
  const { internships } = ResumeData;

  const getCompanyIcon = (company) => {
    if (company.includes('IBM')) return Cloud;
    if (company.includes('Shell')) return Leaf;
    return Briefcase;
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden" aria-label="Internships & Industry Experience">
      {/* Cosmic background glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono text-blue-400 font-semibold tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            Industry Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Enterprise AI &amp; Sustainability Engineering.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Engineering real-world AI pipelines, RAG systems, and greenhouse gas predictive analytics at global enterprises.
          </p>
        </div>

        {/* Timeline List with Cosmic Lighting */}
        <div className="relative border-l-2 border-cyan-500/20 ml-4 sm:ml-8 space-y-12">
          {internships.map((exp, idx) => {
            const IconComponent = getCompanyIcon(exp.company);
            return (
              <div 
                key={exp.id || idx}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Glowing Node on Timeline */}
                <div 
                  className="absolute -left-[19px] top-1.5 w-9 h-9 rounded-xl bg-[#090912] border-2 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black"
                  style={{ 
                    borderColor: exp.color,
                    boxShadow: `0 0 15px ${exp.color}40`
                  }}
                >
                  <IconComponent className="w-4 h-4" style={{ color: exp.color }} />
                </div>

                {/* Card Container with Futuristic Glassmorphism */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F1A]/85 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group-hover:shadow-cyan-950/30 group-hover:translate-y-[-2px] backdrop-blur-md">
                  
                  {/* Top Bar: Company, Role, Date */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-800/70">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                          {exp.company}
                        </h3>
                        <span 
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold"
                          style={{ 
                            backgroundColor: `${exp.color}18`, 
                            color: exp.color,
                            border: `1px solid ${exp.color}40` 
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-cyan-300 mt-1">
                        {exp.role}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description Overview */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  {/* Key Contributions & Impact Bullets */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                      Key Deliverables &amp; Technical Scope:
                    </span>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Certificate Action */}
                  <div className="mt-6 pt-5 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.certificate && (
                      <button
                        onClick={() => onOpenCertModal({
                          title: `${exp.role} — ${exp.company}`,
                          issuer: exp.company,
                          file: exp.certificate
                        })}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all hover:scale-105"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
