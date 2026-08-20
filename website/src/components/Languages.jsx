import React from 'react';
import { 
  Globe2, 
  Languages as LanguagesIcon, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

export default function Languages() {
  const { languages } = ResumeData;

  const getLanguageIcon = (iconName) => {
    switch (iconName) {
      case 'Globe2': return Globe2;
      case 'BookOpen': return BookOpen;
      default: return LanguagesIcon;
    }
  };

  return (
    <section id="languages" className="py-20 relative overflow-hidden" aria-label="Language Proficiencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <LanguagesIcon className="w-3.5 h-3.5 text-cyan-400" />
            Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Language Proficiencies.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Multilingual fluency enabling seamless cross-cultural communication and global collaboration.
          </p>
        </div>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((lang, idx) => {
            const IconComponent = getLanguageIcon(lang.icon);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:translate-y-[-3px] backdrop-blur-xl"
              >
                <div>
                  {/* Top Bar: Icon & Native Script */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold text-slate-300 font-mono">
                      {lang.nativeName}
                    </span>
                  </div>

                  {/* Language Name & Fluency Level */}
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang.level}
                  </p>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Fluency</span>
                    <span className="text-cyan-400 font-bold">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_8px_rgba(0,245,255,0.5)] transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    />
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
