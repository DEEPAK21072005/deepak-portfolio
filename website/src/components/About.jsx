import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Calendar, 
  Award, 
  Sparkles, 
  Copy, 
  Check, 
  BookOpen, 
  Bot, 
  Eye, 
  BarChart3, 
  Cloud,
  Quote,
  CheckCircle2
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

export default function About() {
  const { personal, education } = ResumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const domainInterests = [
    { label: 'LLMs & RAG Architectures', icon: Bot, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
    { label: 'Computer Vision & Spatial AI', icon: Eye, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
    { label: 'Sustainability & Data Analytics', icon: BarChart3, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    { label: 'Enterprise Cloud AI', icon: Cloud, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About Deepak Polisetti">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            About Deepak
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Turning Data Into Strategic Decisions.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            A closer look at my background, academic journey, and engineering mindset.
          </p>
        </div>

        {/* Highlighted Objective Blockquote Box (Translucent Glass) */}
        <div className="relative mb-14 p-6 sm:p-8 rounded-2xl bg-[#090916]/75 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,245,255,0.1)] backdrop-blur-xl">
          <div className="absolute -top-4 left-6 p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md">
            <Quote className="w-4 h-4" />
          </div>
          <div className="pt-2">
            <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider block">
              Core Objective &amp; Mission
            </span>
            <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic mt-2 leading-relaxed">
              "{personal.objective}"
            </blockquote>
          </div>
        </div>

        {/* Main Grid: Story + Personal Details + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story & Domain Focus (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 shadow-xl backdrop-blur-xl space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 font-display">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Background &amp; Engineering Philosophy
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I'm <strong className="text-white">Deepak Polisetti</strong>, an engineering undergraduate specializing in 
                Artificial Intelligence &amp; Machine Learning at <strong className="text-white">Uttaranchal University</strong>. 
                My focus lies at the convergence of machine learning research and enterprise software development.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Through industry internships at <strong className="text-cyan-300">IBM</strong> and <strong className="text-emerald-300">Shell</strong>, 
                I've gained hands-on experience building Retrieval-Augmented Generation (RAG) pipelines with WatsonX Granite models, 
                forecasting industrial greenhouse gas emissions, and architecting real-time computer vision interfaces.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I believe in building systems with high precision, maintainable clean architecture, and tangible user value. When not training models, 
                I explore new LLM frameworks, fine-tune models, and design responsive web applications.
              </p>

              {/* Domain Focus Chips */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-3 font-semibold">
                  Key Technical Focus Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {domainInterests.map((interest, idx) => {
                    const IconComponent = interest.icon;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold backdrop-blur-md ${interest.color}`}
                      >
                        <IconComponent className="w-4 h-4 shrink-0" />
                        <span>{interest.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Education Card */}
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 shadow-xl backdrop-blur-xl space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                      Academic Foundation
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-cyan-300 font-medium">{edu.field}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 py-2.5 border-y border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-emerald-400 font-semibold">
                    <Award className="w-4 h-4" />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Right: Quick Info Cards & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 shadow-xl backdrop-blur-xl space-y-5">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Quick Info &amp; Contact
              </h3>

              <div className="space-y-4 divide-y divide-slate-800/60 text-xs sm:text-sm">
                
                {/* Location */}
                <div className="pt-3 first:pt-0 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    Location
                  </span>
                  <span className="text-slate-200 font-medium text-right">{personal.location}</span>
                </div>

                {/* Email with copy */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    Email
                  </span>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-cyan-400 hover:text-cyan-300 font-mono text-xs truncate max-w-[170px] sm:max-w-[200px]"
                    >
                      {personal.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Education */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    Degree
                  </span>
                  <span className="text-slate-200 font-medium text-right">B.Tech CSE (AI &amp; ML)</span>
                </div>

                {/* University */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    University
                  </span>
                  <span className="text-slate-200 font-medium text-right">Uttaranchal University</span>
                </div>

                {/* CGPA */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    Academic CGPA
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">{personal.cgpa}</span>
                </div>

                {/* Expected Graduation */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    Expected Graduation
                  </span>
                  <span className="text-slate-200 font-medium font-mono">May {personal.graduationYear}</span>
                </div>

                {/* Status */}
                <div className="pt-3 flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Status
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                    {personal.status}
                  </span>
                </div>

              </div>
            </div>

            {/* Quick Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 via-[#0C0C1B]/80 to-slate-900/80 border border-indigo-500/30 shadow-xl backdrop-blur-xl">
              <span className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider block mb-2">
                Why Interview Deepak?
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Proven track record in building RAG pipelines, deploying machine learning systems, and contributing to sustainability data initiatives with a strong academic 8.61 CGPA foundation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
