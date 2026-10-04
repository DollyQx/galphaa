import React, { useState } from 'react';
import { X, Play, Share2, Check, UserCheck, CheckCircle } from 'lucide-react';
import { getPlatformIconComponent } from './SocialIcons';
import { getTrackPlatformLinks } from '../data/musicData';

export const SongDetailModal = ({ song, onClose, onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  if (!song) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const platforms = getTrackPlatformLinks(song);

  // Map all possible credit fields dynamically
  const creditEntries = [];
  if (song.credits) {
    if (song.credits.lyrics || song.credits.writtenBy) creditEntries.push({ label: 'Lyrics', value: song.credits.lyrics || song.credits.writtenBy });
    if (song.credits.composition || song.credits.composedBy) creditEntries.push({ label: 'Composition', value: song.credits.composition || song.credits.composedBy });
    if (song.credits.music) creditEntries.push({ label: 'Music', value: song.credits.music });
    if (song.credits.production || song.credits.musicProducer) creditEntries.push({ label: 'Production', value: song.credits.production || song.credits.musicProducer });
    if (song.credits.vocals) creditEntries.push({ label: 'Vocals', value: song.credits.vocals });
    if (song.credits.featuring) creditEntries.push({ label: 'Featuring', value: song.credits.featuring });
    if (song.credits.mixing) creditEntries.push({ label: 'Mixing', value: song.credits.mixing });
    if (song.credits.mastering) creditEntries.push({ label: 'Mastering', value: song.credits.mastering });
    if (song.credits.label) creditEntries.push({ label: 'Label', value: song.credits.label });
  }

  const isOfficialRelease = song.status === 'RELEASED';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070709]/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#070709]/80 text-white hover:text-[#f59e0b] hover:bg-black flex items-center justify-center border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Layout: Mobile stacked vertically, Desktop 2-column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* LEFT: Artwork / Video Container */}
          <div className="md:col-span-5 bg-[#070709] relative flex flex-col justify-center min-h-[280px] md:min-h-full border-b md:border-b-0 md:border-r border-white/10">
            {showEmbed && song.youtubeEmbedId ? (
              <div className="w-full aspect-video md:h-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${song.youtubeEmbedId}?autoplay=1`}
                  title={song.title}
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[300px] overflow-hidden group">
                <img
                  src={song.thumbnail || '/images/hero.png'}
                  alt={song.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-transparent" />
                
                {song.youtubeEmbedId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setShowEmbed(true)}
                      className="w-16 h-16 rounded-full bg-[#f59e0b] text-[#070709] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: Details, Credits, Streaming & Share */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Header Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                {isOfficialRelease && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#22c55e] bg-[#22c55e]/10 px-2.5 py-1 rounded border border-[#22c55e]/30">
                    <CheckCircle className="w-3 h-3" />
                    <span>Official Release</span>
                  </span>
                )}
              </div>

              {/* Title & Artist */}
              <div>
                <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white tracking-wide">
                  {song.title}
                </h2>
                <p className="text-[#f59e0b] text-sm font-semibold tracking-wider mt-1">
                  G Alphaa
                </p>
              </div>

              {/* About the Song (Only if exists) */}
              {song.description && (
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] block">About the Song</span>
                  <p className="text-sm text-white/90 leading-relaxed font-serif-editorial italic">
                    "{song.description}"
                  </p>
                </div>
              )}

              {/* Credits Section */}
              {creditEntries.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>CREDITS</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3 bg-[#070709] p-3.5 rounded-xl border border-white/5 text-xs">
                    {creditEntries.map((credit, idx) => (
                      <div key={idx}>
                        <span className="text-[#64748b] block text-[10px] uppercase font-bold">{credit.label}</span>
                        <span className="text-white font-medium">{credit.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STREAMING PLATFORMS */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                    AVAILABLE ON STREAMING PLATFORMS
                  </h4>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 text-xs text-[#f59e0b] hover:underline bg-transparent border-none cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5 text-[#f59e0b]" />}
                    <span>{copied ? 'Link Copied' : 'Share'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {platforms.map((plat) => {
                    const Icon = getPlatformIconComponent(plat.id);
                    return (
                      <a
                        key={plat.id}
                        href={plat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 ${plat.bg} text-xs text-white/90 hover:text-white transition-all duration-200`}
                        title={`Listen on ${plat.name}`}
                      >
                        <Icon className={`w-4 h-4 ${plat.color} flex-shrink-0`} />
                        <span className="truncate text-[11px] font-medium">{plat.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Licensing Note */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
              <span>Licensing inquiry for film or series?</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry(`Licensing Request: ${song.title}`);
                }}
                className="text-[#f59e0b] hover:underline font-semibold bg-transparent border-none cursor-pointer"
              >
                Inquire Licensing →
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

