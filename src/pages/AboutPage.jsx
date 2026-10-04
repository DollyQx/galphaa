import React from 'react';
import { User, Music, Feather, Compass, MapPin, CheckCircle2 } from 'lucide-react';
import { ARTIST_PROFILE } from '../data/aboutData';

export const AboutPage = ({ setActivePage }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT THE ARTIST</span>
        </div>

        <h1 className="font-serif-title text-5xl sm:text-7xl font-bold text-white tracking-tight">
          {ARTIST_PROFILE.artistName}
        </h1>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#f59e0b] uppercase">
          {ARTIST_PROFILE.roles.join(' · ')}
        </p>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "{ARTIST_PROFILE.headline}"
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Photograph Container */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={ARTIST_PROFILE.profileImage}
              alt={`${ARTIST_PROFILE.artistName} Portrait`}
              loading="lazy"
              className="w-full h-[480px] sm:h-[540px] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#94a3b8]">
              <span className="font-semibold text-white">{ARTIST_PROFILE.artistName}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>{ARTIST_PROFILE.location}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Editorial Biography */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-4">
            <h2 className="font-serif-title text-3xl font-bold text-white">
              Creative Philosophy
            </h2>

            {ARTIST_PROFILE.longBio.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#94a3b8] leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Artistic Pillars */}
          <div className="pt-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Creative Pillars
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTIST_PROFILE.artisticPillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#0d0e14] p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-[#f59e0b] block">{pillar.number}</span>
                  <h4 className="text-xs font-bold text-white">{pillar.title}</h4>
                  <p className="text-[11px] text-[#94a3b8] leading-normal">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActivePage('collaborate')}
              className="btn-primary text-xs py-3 px-6"
            >
              <span>Work with G Alphaa</span>
            </button>
            <button
              onClick={() => setActivePage('music')}
              className="btn-secondary text-xs py-3 px-6"
            >
              <span>Listen to Music</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
