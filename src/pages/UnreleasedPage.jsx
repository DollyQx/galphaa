import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Key, 
  Film, 
  Building2,
  Users,
  Search,
  Sparkles
} from 'lucide-react';
import { UNRELEASED_TRACKS } from '../data/musicData';

export const UnreleasedPage = ({ onOpenInquiry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUnreleased = UNRELEASED_TRACKS.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/40 text-xs font-semibold tracking-widest text-[#fca5a5] uppercase">
          <Lock className="w-3.5 h-3.5 text-[#dc2626]" />
          <span>PRIVATE INDUSTRY VAULT ({UNRELEASED_TRACKS.length} WORKS)</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE UNRELEASED CATALOGUE
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "Some songs are waiting for the right story."
        </p>

        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed font-light">
          Selected unreleased compositions are available for selected collaborations, licensing, film and series placements, and release partnerships.
        </p>

        {/* NDA Security Banner */}
        <div className="p-3 rounded-xl bg-[#0d0e14] border border-[#dc2626]/30 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#94a3b8]">
          <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
          <span>Protected Catalogue: Audio files available under private NDA preview upon request.</span>
        </div>
      </div>

      {/* Industry Options Banner */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#12080a] via-[#0d0e14] to-[#070709] border border-[#dc2626]/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
        <div className="relative z-10 space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="badge-crimson font-bold">PRIVATE INDUSTRY ACCESS</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white leading-tight">
              B2B Partnerships & Licensing
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Designed for music labels, film directors, web series producers, music supervisors, and collaborating artists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Private Preview', icon: Lock, desc: 'Protected audio stream' },
              { title: 'Licensing', icon: Key, desc: 'Master & publishing rights' },
              { title: 'Film / Series', icon: Film, desc: 'Original soundtracking' },
              { title: 'Artist Collaboration', icon: Users, desc: 'Co-writes & features' },
              { title: 'Release Partnership', icon: Building2, desc: 'Label co-releases' }
            ].map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onOpenInquiry(`Inquiry: ${opt.title}`)}
                  className="bg-white/5 hover:bg-[#dc2626]/10 border border-white/10 hover:border-[#dc2626]/50 p-4 rounded-xl cursor-pointer transition-all space-y-2 group"
                >
                  <Icon className="w-5 h-5 text-[#dc2626] group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-bold text-white">{opt.title}</h4>
                  <p className="text-[11px] text-[#94a3b8]">{opt.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Vault Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0d0e14] rounded-2xl border border-white/10">
        <div>
          <h3 className="font-serif-title text-xl font-bold text-white">Private Catalogue</h3>
          <p className="text-xs text-[#94a3b8]">28 original unreleased compositions</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search unreleased titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#070709] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#dc2626] focus:outline-none"
          />
        </div>
      </div>

      {/* Unreleased Grid (Requirement #6: Auto-numbering, 01 NAQAB TERA, Original composition) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredUnreleased.map((track, idx) => {
          const paddedNumber = String(idx + 1).padStart(2, '0');
          return (
            <div
              key={track.id}
              className="cinematic-card p-6 space-y-5 flex flex-col justify-between group border border-white/10 hover:border-[#dc2626]/50 rounded-2xl bg-[#090a0f]"
            >
              <div className="space-y-4">
                
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-serif-title text-2xl font-bold text-[#f59e0b]/80 group-hover:text-[#f59e0b] transition-colors">
                    {paddedNumber}
                  </span>
                  <span className="badge-crimson text-[9px] font-bold">
                    UNRELEASED · PRIVATE
                  </span>
                </div>

                {/* Title & Descriptor */}
                <div className="space-y-1">
                  <h4 className="font-serif-title text-lg font-bold text-white group-hover:text-[#fca5a5] transition-colors leading-snug tracking-wide uppercase">
                    {track.title}
                  </h4>
                  <p className="text-xs text-[#94a3b8] font-light">
                    Original composition
                  </p>
                  <p className="text-[11px] text-[#64748b]">G Alphaa</p>
                </div>

              </div>

              {/* Request Private Preview Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => onOpenInquiry(`PRIVATE PREVIEW REQUEST: ${track.title}`, track.title)}
                  className="btn-secondary w-full text-xs py-2.5 px-3 justify-center gap-1.5 hover:border-[#dc2626]"
                >
                  <Key className="w-3.5 h-3.5 text-[#dc2626]" />
                  <span>Request Private Preview</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
