import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Key, 
  FileText, 
  Briefcase, 
  Film, 
  Sparkles, 
  Send,
  Building2,
  Tv,
  Users,
  Search,
  CheckCircle2
} from 'lucide-react';
import { UNRELEASED_TRACKS } from '../data/musicData';

export const UnreleasedPage = ({ onOpenInquiry }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUnreleased = UNRELEASED_TRACKS.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (track.genre && track.genre.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/40 text-xs font-semibold tracking-widest text-[#fca5a5] uppercase">
          <Lock className="w-3.5 h-3.5 text-[#dc2626]" />
          <span>PRIVATE CATALOGUE ({UNRELEASED_TRACKS.length} COMPOSITIONS)</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE UNRELEASED SONGS
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "Stories waiting for the right moment."
        </p>

        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed font-light">
          A collection of unreleased compositions by G ALPHA, waiting for the right story, the right voice, the right collaboration.
        </p>

        {/* Security Alert Banner */}
        <div className="p-3 rounded-xl bg-[#0d0e14] border border-[#f59e0b]/20 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#94a3b8]">
          <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
          <span>Private Vault: Audio files strictly held under non-disclosure management.</span>
        </div>
      </div>

      {/* UNRELEASED BUSINESS / DEAL SECTION */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#141622] via-[#0d0e14] to-[#070709] border border-[#f59e0b]/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="badge-crimson font-bold">PROFESSIONAL LICENSING & PLACEMENTS</span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white leading-tight">
              "Some songs are waiting for the right story."
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Selected unreleased compositions may be available for exclusive licensing, collaborations, film and series placements, custom releases or other professional opportunities.
            </p>
          </div>

          {/* Industry Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            {[
              { title: 'Exclusive Licensing', icon: Key, desc: 'Master & composition rights' },
              { title: 'Film / Web Series', icon: Film, desc: 'Original soundtrack placements' },
              { title: 'Artist Collaboration', icon: Users, desc: 'Duets & co-writes' },
              { title: 'Custom Composition', icon: Sparkles, desc: 'Bespoke songs' },
              { title: 'Release Partnership', icon: Building2, desc: 'Label releases' }
            ].map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onOpenInquiry(`Inquiry: ${opt.title}`)}
                  className="bg-white/5 hover:bg-[#f59e0b]/10 border border-white/10 hover:border-[#f59e0b]/50 p-4 rounded-xl cursor-pointer transition-all space-y-2 group"
                >
                  <Icon className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-bold text-white">{opt.title}</h4>
                  <p className="text-[11px] text-[#94a3b8]">{opt.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-[#94a3b8]">
              Targeted for: Music Labels · Film Producers · Web Series Creators · Music Supervisors · Production Houses
            </p>
            <button
              onClick={() => onOpenInquiry('General Unreleased Catalogue Inquiry')}
              className="btn-primary text-xs py-3 px-6"
            >
              <span>Discuss a Song</span>
            </button>
          </div>

        </div>
      </section>

      {/* Catalogue Filter & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#0d0e14] rounded-2xl border border-white/10">
        <div>
          <h3 className="font-serif-title text-xl font-bold text-white">Unreleased Titles</h3>
          <p className="text-xs text-[#94a3b8]">Showing {filteredUnreleased.length} of {UNRELEASED_TRACKS.length} titles</p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search unreleased titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#070709] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#f59e0b] focus:outline-none"
          />
        </div>
      </div>

      {/* Unreleased Songs Catalogue Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredUnreleased.map((track) => (
          <div
            key={track.id}
            className="cinematic-card p-5 space-y-4 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              
              {/* Thumbnail Artwork Frame with Private Lock */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#070709] border border-white/10">
                <img
                  src="/images/unreleased.png"
                  alt={track.title}
                  className="w-full h-full object-cover filter brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-10 h-10 rounded-full bg-[#070709]/80 border border-[#dc2626]/50 text-[#fca5a5] flex items-center justify-center backdrop-blur-md shadow-lg">
                    <Lock className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-2 left-2">
                  <span className="badge-crimson text-[9px] font-bold">
                    PRIVATE
                  </span>
                </div>
              </div>

              {/* Title & Tags */}
              <div>
                <h4 className="font-serif-title text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors leading-snug">
                  {track.title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">By G ALPHA</p>
              </div>

              {/* Genre/Mood tags */}
              {track.tags && track.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {track.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#94a3b8] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Request Private Preview Button */}
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => onOpenInquiry(`Private Preview Request for: ${track.title}`)}
                className="btn-secondary w-full text-[11px] py-2 px-3 justify-center gap-1.5"
              >
                <Key className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Discuss / Preview</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
