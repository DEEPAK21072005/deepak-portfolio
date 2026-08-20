import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Award, 
  Code2, 
  BrainCircuit,
  ChevronDown,
  Compass,
  Zap,
  Phone
} from 'lucide-react';
import { LinkedinIcon } from './Icons.jsx';
import { ResumeData } from '../data/resumeData.js';

export default function Hero() {
  const { personal } = ResumeData;

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden"
      aria-label="Deepak Polisetti Introduction"
    >
      {/* Ambient Cosmic Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/8 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F5FF08_1px,transparent_1px),linear-gradient(to_bottom,#00F5FF08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] sm:bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Info & Actions (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/75 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,255,0.15)] text-[11px] sm:text-xs font-medium text-slate-200 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">{personal.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-blink-fast inline-block" />
                {personal.availability}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-blink-slow" />
                AI &amp; Data Analytics Professional
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] drop-shadow-lg">
                {personal.name}
              </h1>
              
              <h2 className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent pt-0.5 font-display">
                {personal.role} &bull; <span className="text-cyan-300 font-mono text-sm sm:text-base">SGPA: 9.04 / 10.0</span>
              </h2>
            </div>

            {/* Tagline & Summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personal.tagline}
            </p>

            <div className="text-xs sm:text-sm text-slate-300 max-w-2xl border-l-2 border-cyan-400 pl-3 sm:pl-4 py-1.5 bg-cyan-950/25 rounded-r-xl backdrop-blur-sm">
              Enterprise experience at <strong className="text-white font-semibold">IBM</strong> and <strong className="text-white font-semibold">Shell</strong>. Specializing in Machine Learning, NLP, RAG systems, and predictive data analytics.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href="/assets/resume.pdf"
                download="Deepak_Polisetti_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#0C0C1E]/60 text-slate-200 border border-white/15 hover:border-cyan-400 hover:text-white hover:bg-slate-800/80 transition-all shadow-md hover:scale-[1.02] backdrop-blur-md"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#0A66C2]/20 text-[#38B6FF] border border-[#0A66C2]/40 hover:bg-[#0A66C2]/35 hover:border-[#0A66C2]/70 transition-all hover:scale-[1.02] backdrop-blur-md"
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                aria-label="Contact Deepak"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="hidden sm:inline">Contact</span>
              </a>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 w-full max-w-2xl border-t border-white/10">
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0C0C1E]/50 border border-white/10 flex flex-col backdrop-blur-md shadow-lg">
                <span className="text-xl sm:text-3xl font-bold font-mono text-cyan-400 drop-shadow-[0_0_10px_rgba(0,245,255,0.4)]">32+</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Certifications</span>
              </div>
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0C0C1E]/50 border border-white/10 flex flex-col backdrop-blur-md shadow-lg">
                <span className="text-xl sm:text-3xl font-bold font-mono text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.4)]">15+</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Projects</span>
              </div>
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0C0C1E]/50 border border-white/10 flex flex-col backdrop-blur-md shadow-lg">
                <span className="text-xl sm:text-3xl font-bold font-mono text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">8.61</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">CGPA (9.04 SGPA)</span>
              </div>
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0C0C1E]/50 border border-white/10 flex flex-col backdrop-blur-md shadow-lg">
                <span className="text-base sm:text-xl font-bold font-mono text-amber-400 truncate">IBM &amp; Shell</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Intern Alum</span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Sleek Profile with Floating Up-and-Down Motion (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group w-full max-w-[220px] sm:max-w-[280px] animate-float">
              
              {/* Rotating Celestial Orbital Rings */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-500/25 animate-spin pointer-events-none" 
                style={{ animationDuration: '30s' }} 
              />
              <div 
                className="absolute -inset-5 sm:-inset-7 rounded-full border border-dashed border-indigo-500/20 animate-spin pointer-events-none" 
                style={{ animationDuration: '40s', animationDirection: 'reverse' }} 
              />

              {/* Glowing Outer Atmospheric Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/35 via-indigo-500/25 to-amber-500/25 blur-2xl opacity-80 group-hover:opacity-100 transition duration-500" />
              
              {/* Compact Sleek Profile Glass Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0C0C1E]/60 border border-cyan-500/35 shadow-2xl p-2 sm:p-2.5 backdrop-blur-xl">
                
                {/* Corner Cyber HUD Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-400 z-10" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-400 z-10" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-400 z-10" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-400 z-10" />

                {/* Profile Image Container */}
                <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-900/80">
                  <img
                    src={personal.profileImage}
                    alt={`${personal.name} — AI and Data Analytics professional`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/85 via-transparent to-transparent" />
                  
                  {/* Floating Location Badge */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#0A0A0F]/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs">
                    <div className="flex items-center gap-1 text-slate-200">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{personal.location}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[9px] font-semibold border border-cyan-500/30">
                      India
                    </span>
                  </div>
                </div>

                {/* Compact Sub-Banner Info */}
                <div className="p-2 pt-2.5 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[10px] sm:text-[11px]">Uttaranchal ('27)</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-cyan-400 font-semibold text-[10px] sm:text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-blink-fast inline-block" />
                    <span>AI &amp; ML</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 sm:gap-1 text-slate-400 hover:text-cyan-400 transition-colors">
        <a href="#about" className="flex flex-col items-center gap-0.5 focus:outline-none" aria-label="Scroll to About Section">
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
            Explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
