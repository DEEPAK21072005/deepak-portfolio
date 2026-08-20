import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  X, 
  PlusCircle, 
  Award, 
  FolderPlus, 
  Trash2, 
  LogOut, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  RotateCcw
} from 'lucide-react';

export default function AdminPanel({ 
  isOpen, 
  onClose, 
  onAddProject, 
  onAddCertificate, 
  onResetData, 
  projectsCount, 
  certificationsCount 
}) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('add-project'); // 'add-project' | 'add-cert' | 'stats'

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    solution: '',
    impact: '',
    technologies: '',
    github: '',
    demo: '',
    image: ''
  });

  // New Certificate Form State
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    category: 'AI & ML',
    date: new Date().getFullYear().toString(),
    badge: 'Verified Credential',
    file: ''
  });

  const [feedback, setFeedback] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Deepak738*') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect admin password. Please verify and try again.');
    }
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.solution.trim()) {
      setFeedback({ type: 'error', message: 'Project title and solution description are required.' });
      return;
    }

    const techArray = newProject.technologies
      ? newProject.technologies.split(',').map(t => t.trim()).filter(Boolean)
      : ['Python', 'AI'];

    const projectPayload = {
      id: `project-${Date.now()}`,
      title: newProject.title.trim(),
      category: newProject.category,
      categoryLabel: newProject.category === 'ai' ? 'AI & Machine Learning' : newProject.category === 'data' ? 'Data & Analytics' : newProject.category === 'game' ? 'Games & Interactive' : 'Web Development',
      solution: newProject.solution.trim(),
      problem: newProject.solution.trim(),
      impact: newProject.impact.trim() || 'Engineered production-grade solution with high performance',
      technologies: techArray,
      github: newProject.github.trim() || 'https://github.com/DEEPAK21072005',
      demo: newProject.demo.trim() || '#',
      image: newProject.image.trim() || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
    };

    onAddProject(projectPayload);
    setFeedback({ type: 'success', message: `Project "${projectPayload.title}" added to portfolio!` });
    setNewProject({
      title: '',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      solution: '',
      impact: '',
      technologies: '',
      github: '',
      demo: '',
      image: ''
    });

    setTimeout(() => setFeedback(null), 3000);
  };

  const handleCreateCert = (e) => {
    e.preventDefault();
    if (!newCert.title.trim() || !newCert.issuer.trim()) {
      setFeedback({ type: 'error', message: 'Certificate title and issuer are required.' });
      return;
    }

    const certPayload = {
      id: `cert-${Date.now()}`,
      title: newCert.title.trim(),
      issuer: newCert.issuer.trim(),
      category: newCert.category,
      date: newCert.date || new Date().getFullYear().toString(),
      badge: newCert.badge.trim() || 'Verified Credential',
      file: newCert.file.trim() || '/assets/certificates/IBM/Completion Certificate _ SkillsBuild Retrival Augumented Generation.pdf'
    };

    onAddCertificate(certPayload);
    setFeedback({ type: 'success', message: `Certificate "${certPayload.title}" added!` });
    setNewCert({
      title: '',
      issuer: '',
      category: 'AI & ML',
      date: new Date().getFullYear().toString(),
      badge: 'Verified Credential',
      file: ''
    });

    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0F0F17] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 id="admin-title" className="text-base font-bold text-white font-display">
                Admin Control Center
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                {isAuthenticated ? 'Authenticated Session' : 'Secure Admin Portal'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Admin Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          
          {!isAuthenticated ? (
            /* Login Gate */
            <div className="max-w-md mx-auto py-8 space-y-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-md">
                <Lock className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white font-display">
                  Restricted Admin Access
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Enter your administrative password to add or modify projects and credentials.
                </p>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{authError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
                >
                  Unlock Admin Portal
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-6">
              
              {/* Feedback notification */}
              {feedback && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  feedback.type === 'success' 
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' 
                    : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                }`}>
                  {feedback.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-rose-400" />}
                  <span>{feedback.message}</span>
                </div>
              )}

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('add-project')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === 'add-project' 
                      ? 'bg-cyan-500 text-slate-950 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FolderPlus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>

                <button
                  onClick={() => setActiveTab('add-cert')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === 'add-cert' 
                      ? 'bg-cyan-500 text-slate-950 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Add Certificate</span>
                </button>

                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === 'stats' 
                      ? 'bg-cyan-500 text-slate-950 shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Overview & Reset</span>
                </button>
              </div>

              {/* Tab 1: Add Project */}
              {activeTab === 'add-project' && (
                <form onSubmit={handleCreateProject} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Project Title *</label>
                      <input
                        type="text"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        placeholder="e.g. Autonomous Vision Robot"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Category *</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      >
                        <option value="ai">AI & Machine Learning</option>
                        <option value="data">Data & Analytics</option>
                        <option value="web">Web Application</option>
                        <option value="game">Games & Interactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Technologies (comma-separated)</label>
                    <input
                      type="text"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                      placeholder="Python, PyTorch, OpenCV, FastAPI"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Problem &amp; Solution Summary *</label>
                    <textarea
                      rows={3}
                      value={newProject.solution}
                      onChange={(e) => setNewProject({ ...newProject, solution: e.target.value })}
                      placeholder="Describe what the system solves and how you engineered it..."
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">GitHub Repository Link</label>
                      <input
                        type="url"
                        value={newProject.github}
                        onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                        placeholder="https://github.com/..."
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Live Demo URL</label>
                      <input
                        type="url"
                        value={newProject.demo}
                        onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                        placeholder="https://..."
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:scale-[1.01] transition-all"
                  >
                    + Publish Project to Live Portfolio
                  </button>
                </form>
              )}

              {/* Tab 2: Add Certificate */}
              {activeTab === 'add-cert' && (
                <form onSubmit={handleCreateCert} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Certificate Title *</label>
                      <input
                        type="text"
                        value={newCert.title}
                        onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                        placeholder="e.g. Deep Learning Specialization"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Issuer / Organization *</label>
                      <input
                        type="text"
                        value={newCert.issuer}
                        onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                        placeholder="e.g. IBM / Google / Stanford"
                        required
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Category</label>
                      <input
                        type="text"
                        value={newCert.category}
                        onChange={(e) => setNewCert({ ...newCert, category: e.target.value })}
                        placeholder="AI & ML"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Year</label>
                      <input
                        type="text"
                        value={newCert.date}
                        onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                        placeholder="2025"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Badge Label</label>
                      <input
                        type="text"
                        value={newCert.badge}
                        onChange={(e) => setNewCert({ ...newCert, badge: e.target.value })}
                        placeholder="Verified Credential"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Certificate PDF / Document Link</label>
                    <input
                      type="text"
                      value={newCert.file}
                      onChange={(e) => setNewCert({ ...newCert, file: e.target.value })}
                      placeholder="/assets/certificates/..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md hover:scale-[1.01] transition-all"
                  >
                    + Add Certificate to Portfolio
                  </button>
                </form>
              )}

              {/* Tab 3: Overview & Reset */}
              {activeTab === 'stats' && (
                <div className="space-y-6 text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block mb-1">Live Projects Count</span>
                      <span className="text-2xl font-bold font-mono text-cyan-400">{projectsCount}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block mb-1">Live Certifications Count</span>
                      <span className="text-2xl font-bold font-mono text-amber-400">{certificationsCount}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <h5 className="font-semibold text-white flex items-center gap-1.5">
                      <RotateCcw className="w-4 h-4 text-rose-400" />
                      Restore Default Portfolio Data
                    </h5>
                    <p className="text-slate-400 text-xs">
                      Reset custom added items back to Deepak's standard verified resume snapshot.
                    </p>
                    <button
                      onClick={() => {
                        onResetData();
                        setFeedback({ type: 'success', message: 'Portfolio data reset to default!' });
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/30 text-xs font-semibold hover:bg-rose-500/20 transition-colors"
                    >
                      Reset Custom Data
                    </button>
                  </div>
                </div>
              )}

              {/* Logout Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Logged in as Administrator</span>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock / Logout</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
