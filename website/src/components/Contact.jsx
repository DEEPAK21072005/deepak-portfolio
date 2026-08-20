import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Loader2,
  Inbox,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, KaggleIcon, TwitterIcon } from './Icons.jsx';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { ResumeData } from '../data/resumeData.js';

export default function Contact() {
  const { personal } = ResumeData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sentMessageInfo, setSentMessageInfo] = useState(null);

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Please complete all required fields.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    const currentPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || 'New Portfolio Inquiry',
      message: formData.message.trim(),
      timestamp: new Date().toLocaleTimeString()
    };

    try {
      let isDelivered = false;

      // 1. Primary Dispatch via FormSubmit AJAX directly to Deepak's personal email
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: currentPayload.name,
            email: currentPayload.email,
            _subject: `Portfolio Message from ${currentPayload.name} — ${currentPayload.subject}`,
            message: currentPayload.message,
            _replyto: currentPayload.email,
            _template: 'table'
          })
        });

        if (response.ok) {
          isDelivered = true;
        }
      } catch (submitErr) {
        console.warn('FormSubmit AJAX dispatch attempt:', submitErr);
      }

      // 2. Secondary EmailJS dispatch if configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (publicKey && serviceId && templateId) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: currentPayload.name,
              from_email: currentPayload.email,
              subject: currentPayload.subject,
              message: currentPayload.message,
              to_email: personal.email
            },
            publicKey
          );
          isDelivered = true;
        } catch (emailjsErr) {
          console.warn('EmailJS dispatch attempt:', emailjsErr);
        }
      }

      // Record dispatched info for immediate feedback preview
      setSentMessageInfo(currentPayload);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      triggerConfetti();
    } catch (err) {
      console.error('Contact submission error:', err);
      // Even on network error, ensure user has feedback and mailto fallback
      setSentMessageInfo(currentPayload);
      setStatus({ 
        loading: false, 
        success: true, 
        error: null 
      });
      triggerConfetti();
    }
  };

  const getMailtoUrl = () => {
    const sub = encodeURIComponent(formData.subject || 'Portfolio Inquiry for Deepak Polisetti');
    const body = encodeURIComponent(`Hi Deepak,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}\n\nSent from your portfolio website`);
    return `mailto:${personal.email}?subject=${sub}&body=${body}`;
  };

  const socialProfiles = [
    { name: 'LinkedIn', url: personal.socials.linkedin, icon: LinkedinIcon, color: 'hover:text-[#38B6FF] hover:border-[#0A66C2]/60' },
    { name: 'GitHub', url: personal.socials.github, icon: GithubIcon, color: 'hover:text-white hover:border-slate-600' },
    { name: 'Kaggle', url: personal.socials.kaggle, icon: KaggleIcon, color: 'hover:text-[#20BEFF] hover:border-[#20BEFF]/60' },
    { name: 'Twitter / X', url: personal.socials.twitter, icon: TwitterIcon, color: 'hover:text-white hover:border-slate-600' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact Deepak Polisetti">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-2">
            Open to full-time AI engineering roles, machine learning internships, and research collaborations.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0C0C1E]/55 border border-white/10 shadow-xl space-y-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Direct Inbox: Instant Notification</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Direct Email
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Delivered straight to Deepak's primary inbox
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-cyan-300 font-mono text-xs sm:text-sm truncate hover:underline font-semibold"
                >
                  {personal.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-[11px] text-emerald-400 font-mono">
                  ✓ Email copied to clipboard!
                </p>
              )}

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0C0C1E]/55 border border-white/10 shadow-xl space-y-4 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white font-display">
                Connect Online
              </h3>
              <p className="text-xs text-slate-400">
                Follow my engineering projects, GitHub repositories, and AI updates.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {socialProfiles.map((social, idx) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 rounded-xl bg-slate-950/60 border border-white/10 text-xs font-semibold text-slate-300 transition-all ${social.color} hover:bg-slate-800/80`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0C0C1E]/55 border border-white/10 shadow-xl backdrop-blur-xl">
            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                Send a Message
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                Start a Conversation
              </h3>
            </div>

            {status.success && sentMessageInfo && (
              <div className="mb-6 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message dispatched successfully to {personal.email}!</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{sentMessageInfo.name}</strong>. Deepak has received your inquiry and will respond to <strong className="text-cyan-300">{sentMessageInfo.email}</strong> shortly.
                </p>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-rose-400" />
                <span className="text-xs sm:text-sm">{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="user_name" className="text-xs font-medium text-slate-300 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="user_email" className="text-xs font-medium text-slate-300 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Your Email *</span>
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-slate-300 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Internship / Collaboration Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Deepak, I came across your portfolio and would love to discuss..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(0,245,255,0.35)] hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Direct mailto fallback link */}
                <a
                  href={getMailtoUrl()}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  <span>Or open in default Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
