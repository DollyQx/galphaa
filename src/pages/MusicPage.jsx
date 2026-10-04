import React, { useState, useMemo } from 'react';
import { Music, Search, ArrowUpDown, Filter } from 'lucide-react';
import { MusicCard } from '../components/MusicCard';
import { RELEASED_TRACKS } from '../data/musicData';

export const MusicPage = ({ onOpenSongDetail }) => {
  const [filterCategory, setFilterCategory] = useState('ALL'); // 'ALL' | 'RELEASED' | 'FEATURED'
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Featured'); // 'Featured' | 'A-Z' | 'Newest'

  const processedTracks = useMemo(() => {
    let result = [...RELEASED_TRACKS];

    // Category Filter
    if (filterCategory === 'RELEASED') {
      result = result.filter(t => t.status === 'RELEASED');
    } else if (filterCategory === 'FEATURED') {
      result = result.filter(t => t.featured);
    }

    // Search Filter (Case Insensitive)
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(t => t.title.toLowerCase().includes(term));
    }

    // Sorting
    if (sortBy === 'A-Z') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Newest') {
      result.sort((a, b) => {
        if (!a.releaseDate && !b.releaseDate) return 0;
        if (!a.releaseDate) return 1;
        if (!b.releaseDate) return -1;
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      });
    } else if (sortBy === 'Featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filterCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Music className="w-3.5 h-3.5" />
          <span>MUSIC LIBRARY</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          THE MUSIC
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "Songs, compositions and sounds by G ALPHA."
        </p>

        <p className="text-base text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          Official music catalogue written, composed, and produced by G ALPHA.
        </p>
      </div>

      {/* Filter, Search & Sort Bar */}
      <div className="bg-[#0d0e14] p-4 sm:p-6 rounded-3xl border border-white/10 space-y-4 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            {['ALL', 'RELEASED', 'FEATURED'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  filterCategory === cat
                    ? 'bg-[#f59e0b] text-[#070709] shadow-lg shadow-[#f59e0b]/20 font-bold'
                    : 'bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search songs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#070709] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#f59e0b] focus:outline-none"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <ArrowUpDown className="w-4 h-4 text-[#94a3b8] hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto bg-[#070709] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#f59e0b] focus:outline-none cursor-pointer"
              >
                <option value="Featured">Sort: Featured</option>
                <option value="A-Z">Sort: A-Z</option>
                <option value="Newest">Sort: Newest</option>
              </select>
            </div>

          </div>

        </div>
      </div>

      {/* Catalogue Grid */}
      {processedTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processedTracks.map((track) => (
            <MusicCard key={track.id} track={track} onOpenDetail={onOpenSongDetail} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#94a3b8] space-y-2">
          <p className="text-base">No compositions found matching "{searchTerm}"</p>
          <button
            onClick={() => { setSearchTerm(''); setFilterCategory('ALL'); }}
            className="text-xs text-[#f59e0b] underline font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
};
