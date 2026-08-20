import React from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, cert }) {
  if (!isOpen || !cert) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-[#0F0F17] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3 pr-4">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white font-display truncate max-w-[280px] sm:max-w-md">
                {cert.title}
              </h3>
              <span className="text-xs font-mono text-cyan-400">
                Issued by: {cert.issuer}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cert.file && (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Frame / Body */}
        <div className="flex-1 bg-[#0A0A0F] relative flex items-center justify-center p-2">
          {cert.file ? (
            <iframe
              src={cert.file}
              title={`Certificate: ${cert.title}`}
              className="w-full h-full rounded-lg border border-slate-800 bg-white"
            />
          ) : (
            <div className="text-center p-8 text-slate-400 text-sm">
              <FileText className="w-12 h-12 mx-auto mb-3 text-slate-600" />
              <p>Certificate document preview not available directly.</p>
              <span className="text-xs text-slate-500 font-mono mt-1 block">Verified via {cert.issuer}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
