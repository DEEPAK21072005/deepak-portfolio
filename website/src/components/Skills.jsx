import React, { useState, useEffect, useRef } from 'react';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import { 
  Cpu, 
  Terminal, 
  Brain, 
  BarChart, 
  Cloud, 
  Sparkles, 
  CheckCircle2,
  TrendingUp,
  Activity
} from 'lucide-react';
import { ResumeData } from '../data/resumeData.js';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Skills() {
  const { skills } = ResumeData;
  const [chartType, setChartType] = useState('radar'); // 'radar' or 'bar'

  // Prepare Radar Data
  const radarData = {
    labels: skills.chartSkills.map(s => s.name),
    datasets: [
      {
        label: 'Proficiency Score (%)',
        data: skills.chartSkills.map(s => s.score),
        backgroundColor: 'rgba(0, 245, 255, 0.2)',
        borderColor: '#00F5FF',
        borderWidth: 2,
        pointBackgroundColor: '#00F5FF',
        pointBorderColor: '#0A0A0F',
        pointHoverBackgroundColor: '#FFFFFF',
        pointHoverBorderColor: '#00F5FF',
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
        grid: { color: 'rgba(255, 255, 255, 0.08)' },
        pointLabels: {
          color: '#94a3b8',
          font: { size: 11, family: 'Space Grotesk, sans-serif', weight: '600' }
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#64748b',
          stepSize: 20,
          font: { size: 9 }
        },
        suggestedMin: 50,
        suggestedMax: 100,
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0A0A0F',
        borderColor: '#00F5FF',
        borderWidth: 1,
        titleColor: '#FFFFFF',
        bodyColor: '#00F5FF',
        padding: 10,
        callbacks: {
          label: (context) => ` Proficiency: ${context.raw}%`
        }
      }
    }
  };

  // Prepare Bar Data
  const barData = {
    labels: skills.chartSkills.map(s => s.name),
    datasets: [
      {
        label: 'Proficiency (%)',
        data: skills.chartSkills.map(s => s.score),
        backgroundColor: skills.chartSkills.map(s => s.color || '#00F5FF'),
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
        ticks: { color: '#64748b', font: { size: 10 } }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: '#cbd5e1',
          font: { size: 11, family: 'Space Grotesk, sans-serif', weight: '500' }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0A0A0F',
        borderColor: '#38bdf8',
        borderWidth: 1,
        titleColor: '#FFFFFF',
        bodyColor: '#38bdf8',
        padding: 10,
        callbacks: {
          label: (context) => ` Score: ${context.raw}%`
        }
      }
    }
  };

  const categoryIcons = {
    'programming': Terminal,
    'ai-ml': Brain,
    'data-analytics': BarChart,
    'cloud-tools': Cloud,
    'currently-learning': Sparkles,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" aria-label="Technical Skills & Competencies">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono text-purple-400 font-semibold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Skills Analytics & Toolkit.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Quantitative analysis of core engineering competencies alongside categorized frameworks and platforms.
          </p>
        </div>

        {/* Top Grid: Interactive Chart & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left: Chart.js Canvas (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 shadow-xl backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Proficiency Distribution
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Interactive Chart.js visualization</p>
              </div>

              {/* Chart Toggle */}
              <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <button
                  onClick={() => setChartType('radar')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    chartType === 'radar'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Radial Radar
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    chartType === 'bar'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Score Bar
                </button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-[340px] sm:h-[380px] w-full flex items-center justify-center">
              {chartType === 'radar' ? (
                <Radar data={radarData} options={radarOptions} />
              ) : (
                <Bar data={barData} options={barOptions} />
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <span>High Competency Threshold: 80%+</span>
              <span className="font-mono text-cyan-400">Evaluated on Real-World Projects</span>
            </div>
          </div>

          {/* Right: Detailed Skill Breakdown Bars (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0C0C1B]/75 border border-slate-800/80 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Score Breakdown
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Top technical proficiencies and mastery index</p>
            </div>

            <div className="space-y-3.5 my-auto">
              {skills.chartSkills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="font-mono text-cyan-400 font-semibold">{skill.score}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.score}%`,
                        backgroundColor: skill.color || '#00F5FF'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Updated: 2025</span>
              <span className="text-emerald-400 font-medium">✓ Tested via IBM & Shell Projects</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Categorized Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Cpu;
            const isLearning = cat.id === 'currently-learning';

            return (
              <div
                key={cat.id}
                className={`p-6 rounded-2xl bg-[#0C0C1B]/75 border transition-all duration-300 shadow-xl hover:translate-y-[-2px] backdrop-blur-xl ${
                  isLearning 
                    ? 'border-amber-500/30 bg-gradient-to-br from-[#0C0C1B]/80 to-amber-950/20' 
                    : 'border-slate-800/80 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="p-2 rounded-xl"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-display">
                      {cat.title}
                    </h4>
                  </div>
                  {isLearning && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-semibold">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skillItem, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800/90 text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      {skillItem}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
