import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function WelcomeLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const TOTAL_DURATION_MS = 3000; // Exactly 3 seconds intro
    const INTERVAL_STEP_MS = 30;
    const totalSteps = TOTAL_DURATION_MS / INTERVAL_STEP_MS;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(currentPercent);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // smooth exit transition
        }, 150);
      }
    }, INTERVAL_STEP_MS);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#030308] text-white transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none filter blur-sm' : 'opacity-100 scale-100'
      }`}
      aria-label="Welcome Loading Screen"
    >
      {/* Background Cosmic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(0,0,0,0),rgba(3,3,8,0.92))]" />

      {/* Top HUD Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-[11px] font-mono text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>INITIALIZING DEEPAK'S PORTFOLIO...</span>
        </div>

        <button
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
        >
          <span>Skip (3s Intro)</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Center Welcome Motion Core */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto space-y-6 my-auto">
        
        {/* Animated Cyber Crest Monogram */}
        <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
          {/* Outer rotating orbital rings */}
          <div 
            className="absolute inset-0 rounded-full border border-cyan-500/40 animate-spin" 
            style={{ animationDuration: '5s' }} 
          />
          <div 
            className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/30 animate-spin" 
            style={{ animationDuration: '8s', animationDirection: 'reverse' }} 
          />
          <div 
            className="absolute -inset-6 rounded-full border border-dotted border-amber-500/20 animate-spin" 
            style={{ animationDuration: '12s' }} 
          />

          {/* Glowing central core badge */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shadow-[0_0_35px_rgba(0,245,255,0.6)]">
            <div className="w-full h-full bg-[#070712] rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.25),transparent)]" />
              <span className="font-mono font-black text-2xl sm:text-3xl tracking-tighter bg-gradient-to-r from-cyan-300 via-white to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,245,255,0.8)]">
                DP
              </span>
            </div>
          </div>
        </div>

        {/* Welcome Headline with Glowing Motion */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Welcome to my portfolio
          </h1>
          <p className="text-sm sm:text-base text-cyan-300 font-mono tracking-wide">
            Polisetti M N Venkata Sai Deepak • AI &amp; Data Engineering
          </p>
        </div>

        {/* Futuristic Cyber Progress Meter */}
        <div className="w-64 sm:w-80 space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Loading Modules</span>
            </span>
            <span className="text-white font-bold">{progress}%</span>
          </div>

          <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-white/15 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-400 shadow-[0_0_15px_rgba(0,245,255,0.8)] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>AI MODELS &bull; CLOUD RAG</span>
            <span>{progress === 100 ? 'LAUNCHING' : 'LOADING'}</span>
          </div>
        </div>

      </div>

      {/* Bottom DJ Powered Credit */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-2 pb-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950/40 via-[#0A0A16]/80 to-amber-950/40 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,245,255,0.15)] backdrop-blur-md">
          <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold font-mono uppercase tracking-widest text-slate-200">
            Designed &amp; Powered by <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]">DJ</span>
          </span>
          <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
        </div>
        <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
          &copy; 2025 • All Systems Nominal
        </span>
      </div>

    </div>
  );
}
