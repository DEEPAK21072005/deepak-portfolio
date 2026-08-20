import React from 'react';
import { 
  Trophy, 
  Award, 
  Leaf, 
  Brain, 
  Lightbulb, 
  Presentation, 
  Target, 
  Globe,
  Sparkles,
  Calendar
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

export default function Achievements() {
  const { achievements } = ResumeData;

  const getAchievementIcon = (iconName) => {
    const map = {
      'Award': Trophy,
      'Leaf': Leaf,
      'Brain': Brain,
      'Lightbulb': Lightbulb,
      'Presentation': Presentation,
      'Target': Target,
      'Globe': Globe,
    };
    return map[iconName] || Award;
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden" aria-label="Key Achievements & Competitions">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono text-pink-400 font-semibold tracking-widest uppercase bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full mb-3">
            Recognition &amp; Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Key Achievements &amp; Milestones.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Competitive hackathons, academic excellence, global challenges, and technical presentations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = getAchievementIcon(item.icon);
            return (
              <div
                key={item.id || idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 hover:border-pink-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:translate-y-[-3px] backdrop-blur-xl"
              >
                <div>
                  {/* Top Bar: Icon, Year, Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div 
                      className="p-2.5 rounded-xl border"
                      style={{ 
                        backgroundColor: `${item.color}15`, 
                        borderColor: `${item.color}35`,
                        color: item.color 
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono font-semibold text-pink-400">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition-colors font-display">
                    {item.title}
                  </h3>
                  
                  {item.organization && (
                    <span className="text-xs font-mono text-cyan-400 block mt-1">
                      {item.organization}
                    </span>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified Distinction</span>
                  <span className="text-pink-400">✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
