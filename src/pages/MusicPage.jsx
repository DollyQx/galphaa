import React, { useState } from 'react';
import { 
  Music, 
  Search, 
  Play, 
  Youtube, 
  Clock, 
  Filter, 
  Disc,
  Check,
  Share2
} from 'lucide-react';
import { RELEASED_TRACKS, SOCIAL_LINKS } from '../data/musicData';

export const MusicPage = ({ onOpenSongDetail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Filter logic
  const filteredTracks = RELEASED_TRACKS.filter((track) => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (track.genre && track.genre.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (!matchesSearch) return false;

    if (activeFilter === 'FEATURED') return track.featured;
    if (activeFilter === 'DEVOTIONAL') return track.genre && track.genre.toLowerCase().includes('spiritual');
    if (activeFilter === 'BALLAD') return track.genre && (track.genre.toLowerCase().includes('ballad') || track.genre.toLowerCase().includes('acoustic'));
    
    return true;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-12">
      
      {/* Page Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Disc className="w-3.5 h-3.5" />
          <span>MUSIC LIBRARY ({RELEASED_TRACKS.length} SONGS)</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE MUSIC
        </h1>

        <p className="text-base text-[#94a3b8] leading-relaxed font-light">
          Official catalogue of released songs, compositions, and soundscapes composed and written by G ALPHA.
        </p>

        <p className="font-handwriting text-xl text-[#fcd34d]">
          "Melodies for the moments that stay..."
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0d0e14] border border-white/10 shadow-xl">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'ALL', label: `All Releases (${RELEASED_TRACKS.length})` },
            { id: 'FEATURED', label: 'Featured Tracks' },
            { id: 'BALLAD', label: 'Indie & Ballads' },
            { id: 'DEVOTIONAL', label: 'Spiritual / Devotional' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border-none cursor-pointer ${
                activeFilter === btn.id
                  ? 'bg-[#f59e0b] text-[#070709] shadow-md'
                  : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search songs or genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#070709] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#f59e0b] focus:outline-none"
          />
        </div>
      </div>

      {/* Music Cards Grid */}
      {filteredTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              onClick={() => onOpenSongDetail(track)}
              className="cinematic-card p-5 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-black/60">
                  <img
                    src={track.thumbnail}
                    alt={track.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#f59e0b] text-[#070709] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Status Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="badge-amber font-bold text-[10px]">
                      {track.status}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-serif-title text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-1">
                    ARTIST: <span className="text-white font-medium">{track.artist}</span>
                  </p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#94a3b8]">
                <span>{track.genre || 'Single'}</span>
                <span className="text-[#f59e0b] group-hover:translate-x-1 transition-transform font-semibold">
                  Details →
                </span>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#0d0e14] rounded-2xl border border-white/10 space-y-3">
          <Music className="w-10 h-10 text-[#64748b] mx-auto" />
          <h3 className="text-lg font-bold text-white">No tracks match your search</h3>
          <p className="text-xs text-[#94a3b8]">Try searching with a different song title or keyword.</p>
        </div>
      )}

    </div>
  );
};
