import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Lock, 
  MapPin, 
  ArrowUp
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons.jsx';
import { ResumeData } from '../data/resumeData.js';


export default function Footer({ onOpenAdmin }) {
  const { personal } = ResumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07070B] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden" role="contentinfo">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(0,245,255,0.3)] group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-[#080811] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-black text-sm tracking-tighter bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    DP
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold text-white font-display">
                Deepak Polisetti
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AI &amp; Data Analytics Engineer specializing in Machine Learning, RAG architectures, and predictive analytics. Built with intention and craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dehradun, Uttarakhand, India</span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
              <a href="#certifications" className="text-slate-400 hover:text-white transition-colors">Certifications</a>
              <a href="#achievements" className="text-slate-400 hover:text-white transition-colors">Achievements</a>
              <a href="#languages" className="text-slate-400 hover:text-white transition-colors">Languages</a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
              Connect &amp; Top
            </span>

            <div className="flex items-center gap-2">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#38B6FF] hover:border-[#0A66C2]/60 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-all hover:scale-105"
                title="Scroll back to top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            {/* Admin Portal Trigger */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-400 hover:text-cyan-300 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors mt-2"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Panel</span>
            </button>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Deepak Polisetti. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">B.Tech CSE (AI & ML)</span>
            <span>•</span>
            <span className="text-cyan-400 font-mono">Uttaranchal University</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
