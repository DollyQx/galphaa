import React, { useState } from 'react';
import { X, Feather, Share2, Check, Sparkles, Volume2 } from 'lucide-react';

export const PoetryDetailModal = ({ poem, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!poem) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${poem.title} by G ALPHA\n\n${poem.fullPoem}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070709]/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#070709]/70 text-white hover:text-[#f59e0b] flex items-center justify-center border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header */}
        <div className="p-8 pb-4 text-center border-b border-white/10 bg-gradient-to-b from-[#141620] to-[#0d0e14] relative">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] mb-3">
            <Feather className="w-6 h-6" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="badge-amber">{poem.category}</span>
            <span className="text-xs text-[#94a3b8]">G ALPHA</span>
          </div>

          <h2 className="font-serif-title text-3xl font-bold text-white tracking-wide">
            {poem.title}
          </h2>
          <p className="font-handwriting text-lg text-[#fcd34d] mt-1">
            "Verses written for quiet reflection"
          </p>
        </div>

        {/* Poem Content Body */}
        <div className="p-8 sm:p-10 space-y-6">
          <div className="font-serif-editorial text-lg sm:text-xl text-white/90 leading-relaxed whitespace-pre-line tracking-wide border-l-2 border-[#f59e0b]/40 pl-6 py-2 bg-white/[0.02] rounded-r-xl">
            {poem.fullPoem}
          </div>

          {/* Audio Recitation Status */}
          <div className="flex items-center justify-between p-4 bg-[#070709] rounded-xl border border-white/5 text-xs text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#f59e0b]" />
              <span>Audio Recitation: <strong className="text-white">Written Verse</strong></span>
            </div>
            <button
              onClick={handleShare}
              className="btn-secondary text-xs py-1.5 px-3 gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5 text-[#f59e0b]" />}
              <span>{copied ? 'Copied!' : 'Share Poem'}</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-[#64748b]">
              Authored by G ALPHA · Poetry & Shayari Collection
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
