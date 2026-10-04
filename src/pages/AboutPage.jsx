import React from 'react';
import { User, Feather, Music, Disc, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/aboutData';

export const AboutPage = ({ setActivePage, onOpenInquiry }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <User className="w-3.5 h-3.5" />
          <span>BIOGRAPHY & ARTISTIC PROFILE</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          ABOUT G ALPHA
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "{ARTIST_PROFILE.headline}"
        </p>

        <p className="text-base text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          {ARTIST_PROFILE.tagline}
        </p>
      </div>

      {/* Hero Editorial Profile Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0d0e14] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="/images/about.png"
              alt="G ALPHA Composer Portrait"
              className="w-full h-96 sm:h-[420px] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif-title text-xl font-bold text-white">G ALPHA</h3>
              <p className="text-xs text-[#f59e0b] mt-0.5">Musician · Lyricist · Composer · Shayar</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-[#94a3b8] text-base leading-relaxed font-light">
            {ARTIST_PROFILE.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-2 border-t border-white/10">
            {ARTIST_PROFILE.disciplines.map((d, idx) => (
              <span key={idx} className="badge-amber font-semibold">
                {d}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Core Artistic Pillars Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
            CRAFT & METHOD
          </span>
          <h2 className="font-serif-title text-3xl font-bold text-white">
            Artistic Foundations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTIST_PROFILE.artisticPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="cinematic-card p-6 sm:p-8 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif-title text-xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Callout */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#141622] via-[#0d0e14] to-[#070709] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-serif-title text-2xl font-bold text-white">
            Looking to collaborate or license music?
          </h3>
          <p className="text-xs text-[#94a3b8]">
            Available for film scoring, lyric writing, song compositions, and custom music production.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('Collaboration Inquiry')}
          className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
        >
          <span>Start Collaboration</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
