import React, { useState, useMemo } from 'react';
import { 
  Award, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

export default function Certifications({ certifications, onOpenCertModal }) {
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [certSearch, setCertSearch] = useState('');

  // Extract unique issuers
  const issuers = useMemo(() => {
    const list = ['All'];
    const seen = new Set();
    certifications.forEach(c => {
      if (c.issuer && !seen.has(c.issuer)) {
        seen.add(c.issuer);
        list.push(c.issuer);
      }
    });
    return list;
  }, [certifications]);

  // Filtered list for search or manual inspection
  const filteredCerts = useMemo(() => {
    return certifications.filter(cert => {
      const matchIssuer = selectedIssuer === 'All' || cert.issuer === selectedIssuer;
      const q = certSearch.toLowerCase();
      const matchSearch = !certSearch || 
        cert.title.toLowerCase().includes(q) || 
        cert.issuer.toLowerCase().includes(q) ||
        (cert.category && cert.category.toLowerCase().includes(q));
      return matchIssuer && matchSearch;
    });
  }, [certifications, selectedIssuer, certSearch]);

  // Split certificates evenly into two distinct rich sets for the 2 opposing rows
  const midPoint = Math.ceil(certifications.length / 2);
  const row1Certs = certifications.slice(0, midPoint);
  const row2Certs = certifications.slice(midPoint);

  // Duplicate for seamless infinite loop
  const row1Loop = [...row1Certs, ...row1Certs];
  const row2Loop = [...row2Certs, ...row2Certs];

  const getIssuerBadgeStyle = (issuer) => {
    const styles = {
      'IBM': { color: '#60A5FA', bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.3)' },
      'Google Cloud': { color: '#34D399', bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.3)' },
      'AWS': { color: '#FBBF24', bg: 'rgba(245, 158, 11, 0.12)', border: 'rgba(245, 158, 11, 0.3)' },
      'Infosys': { color: '#A78BFA', bg: 'rgba(139, 92, 246, 0.12)', border: 'rgba(139, 92, 246, 0.3)' },
      'Tata': { color: '#22D3EE', bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.3)' },
      'Deloitte': { color: '#4ADE80', bg: 'rgba(74, 222, 128, 0.12)', border: 'rgba(74, 222, 128, 0.3)' },
      'JP Morgan': { color: '#E2E8F0', bg: 'rgba(148, 163, 184, 0.12)', border: 'rgba(148, 163, 184, 0.3)' },
      'Accenture': { color: '#C084FC', bg: 'rgba(192, 132, 252, 0.12)', border: 'rgba(192, 132, 252, 0.3)' },
      'Quantium': { color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.12)', border: 'rgba(56, 189, 248, 0.3)' },
      'Microsoft': { color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.12)', border: 'rgba(56, 189, 248, 0.3)' },
    };
    return styles[issuer] || { color: '#00F5FF', bg: 'rgba(0, 245, 255, 0.12)', border: 'rgba(0, 245, 255, 0.3)' };
  };

  const renderCard = (cert, uniqueKey) => {
    const badge = getIssuerBadgeStyle(cert.issuer);
    return (
      <div
        key={uniqueKey}
        onClick={() => onOpenCertModal({
          title: `${cert.title} — ${cert.issuer}`,
          issuer: cert.issuer,
          file: cert.file
        })}
        className="w-[280px] sm:w-[350px] p-4 sm:p-5 rounded-2xl bg-[#0C0C1E]/60 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer group hover:scale-[1.02] hover:shadow-cyan-950/40 backdrop-blur-xl shrink-0 select-none"
      >
        <div>
          {/* Top Bar: Issuer pill & Date */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider"
              style={{ color: badge.color, backgroundColor: badge.bg, border: `1px solid ${badge.border}` }}
            >
              {cert.issuer}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {cert.date || '2024–2025'}
            </span>
          </div>

          {/* Certificate Title */}
          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display line-clamp-2 leading-snug">
            {cert.title}
          </h4>

          {cert.category && (
            <span className="inline-block mt-2 text-[11px] font-mono text-slate-400">
              Domain: <span className="text-slate-300">{cert.category}</span>
            </span>
          )}
        </div>

        {/* Bottom Bar: Action & Verified Check */}
        <div className="pt-4 mt-3 border-t border-slate-800/70 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-emerald-400 font-medium text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified</span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all">
            <span>View Credential</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" aria-label="Professional Certifications">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <span className="text-xs font-mono text-amber-400 font-semibold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            32+ Verified Accreditations
          </span>
          <div className="flex flex-wrap items-end justify-between gap-4 w-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Continuous Learning &amp; Credentials.
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-2">
                Two-tier dynamic motion showcase of professional certifications from IBM, Google Cloud, AWS, Infosys, Tata, and Deloitte.
              </p>
            </div>

            {/* Live Counter Badge */}
            <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300 font-semibold">{certifications.length} Credentials Verified</span>
            </div>
          </div>
        </div>

        {/* Search & Issuer Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {/* Quick Issuer Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {issuers.slice(0, 9).map((issuer) => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                  selectedIssuer === issuer
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold shadow-sm'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={certSearch}
              onChange={(e) => setCertSearch(e.target.value)}
              placeholder="Filter by keyword or topic..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500/60"
            />
          </div>
        </div>

      </div>

      {/* DUAL OPPOSING CONTINUOUS MARQUEES */}
      {!certSearch && selectedIssuer === 'All' ? (
        <div className="space-y-6 w-full overflow-hidden relative">
          
          {/* Gradient Edge Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10 pointer-events-none" />

          {/* ROW 1: Auto-moving RIGHT TO LEFT */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-left flex gap-5 py-2">
              {row1Loop.map((cert, idx) => renderCard(cert, `row1-${cert.id}-${idx}`))}
            </div>
          </div>

          {/* ROW 2: Auto-moving LEFT TO RIGHT */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-right flex gap-5 py-2">
              {row2Loop.map((cert, idx) => renderCard(cert, `row2-${cert.id}-${idx}`))}
            </div>
          </div>

          <div className="text-center pt-2 text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
            <span>✦ Hover any certificate card to pause scrolling &amp; inspect</span>
          </div>

        </div>
      ) : (
        /* Filtered Grid View when recruiter searches or selects specific issuer */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert, idx) => renderCard(cert, `filtered-${cert.id}-${idx}`))}
          </div>

          {filteredCerts.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <Layers className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-sm text-slate-400">No certifications found for "{certSearch}".</p>
              <button
                onClick={() => { setSelectedIssuer('All'); setCertSearch(''); }}
                className="mt-3 text-xs text-amber-400 underline font-semibold"
              >
                Reset filter &amp; view full dual-row marquee
              </button>
            </div>
          )}
        </div>
      )}

    </section>
  );
}
