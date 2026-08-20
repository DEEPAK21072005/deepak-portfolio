import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Filter, 
  Search, 
  CheckCircle, 
  Tag, 
  Layers, 
  Flame, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons.jsx';


const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'web', label: 'Web Applications' },
  { id: 'game', label: 'Games & Interactive' },
];

export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCat = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery ||
        project.title.toLowerCase().includes(q) ||
        project.problem.toLowerCase().includes(q) ||
        project.solution.toLowerCase().includes(q) ||
        project.technologies.some(t => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" aria-label="Engineered Projects">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Engineered Works & AI Systems.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Production-ready machine learning pipelines, RAG systems, data visualization dashboards, and modern web applications.
          </p>
        </div>

        {/* Controls: Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, title, or topic..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isEmotionLens = project.id === 'emotion-lens' || project.id === 'sentiment-analysis';

            return (
              <article
                key={project.id}
                className={`group relative rounded-2xl bg-[#0C0C1B]/75 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:translate-y-[-4px] backdrop-blur-xl ${
                  isEmotionLens
                    ? 'border-emerald-500/50 shadow-emerald-950/30 hover:shadow-emerald-500/30 ring-1 ring-emerald-500/30'
                    : 'border-slate-800/80 hover:border-cyan-500/40 hover:shadow-cyan-950/30'
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/50 to-transparent" />
                  
                  {/* Category Tag & Featured Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#0A0A0F]/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                      {project.categoryLabel || project.category.toUpperCase()}
                    </span>

                    {isEmotionLens && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-md">
                        <Flame className="w-3 h-3" />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.solution || project.problem}
                    </p>
                  </div>

                  {/* Impact Highlight */}
                  {project.impact && (
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-0.5">
                        Key Impact
                      </span>
                      <span className="text-slate-300 font-medium line-clamp-2">
                        {project.impact}
                      </span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-800/60 text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500 font-mono">Confidential / Internal</span>
                    )}

                    {project.demo && project.demo !== '#' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                          isEmotionLens
                            ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20'
                            : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20'
                        }`}
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Explore</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )
                    )}
                  </div>

                </div>

              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto">
            <Layers className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-white">No projects found</h4>
            <p className="text-xs text-slate-400 mt-1">Try refining your search query or selecting another category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
