import React, { useState } from 'react';
import { X, Play, Music, Share2, Check, ExternalLink, Disc, Calendar, Clock, UserCheck } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/musicData';

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

  // Determine dynamic platform buttons (ONLY render if URL exists)
  const availablePlatforms = [];
  if (song.youtubeUrl) availablePlatforms.push({ name: 'YouTube', url: song.youtubeUrl, icon: YoutubeIcon, color: 'text-[#dc2626]' });
  if (song.spotifyUrl) availablePlatforms.push({ name: 'Spotify', url: song.spotifyUrl, icon: Music, color: 'text-[#22c55e]' });
  if (song.appleMusicUrl) availablePlatforms.push({ name: 'Apple Music', url: song.appleMusicUrl, icon: Music, color: 'text-[#f43f5e]' });
  
  if (song.otherPlatformUrls) {
    Object.entries(song.otherPlatformUrls).forEach(([plat, url]) => {
      if (url) availablePlatforms.push({ name: plat, url: url, icon: ExternalLink, color: 'text-[#f59e0b]' });
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070709]/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-3xl bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#070709]/70 text-white hover:text-[#f59e0b] hover:bg-black flex items-center justify-center border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media / Header Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#070709]">
          <img
            src={song.thumbnail || '/images/hero.png'}
            alt={song.title}
            className="w-full h-full object-cover filter brightness-75 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-amber">{song.status}</span>
                {song.genre && (
                  <span className="text-xs text-[#94a3b8] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {song.genre}
                  </span>
                )}
              </div>
              <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-white tracking-wide">
                {song.title}
              </h2>
              <p className="text-[#f59e0b] text-sm font-semibold tracking-wider mt-1">
                ARTIST: {song.artist}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {song.youtubeEmbedId ? (
                <button
                  onClick={() => setShowEmbed(true)}
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play YouTube Embed</span>
                </button>
              ) : (
                <a
                  href={song.youtubeUrl || SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  <YoutubeIcon className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Direct Embedded YouTube Player Frame when toggled or if embed ID exists */}
          {showEmbed && song.youtubeEmbedId && (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10">
              <iframe
                src={`https://www.youtube.com/embed/${song.youtubeEmbedId}?autoplay=1`}
                title={song.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Description */}
          {song.description && (
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1">
                About this composition
              </h4>
              <p className="text-sm text-white/90 leading-relaxed font-serif-editorial text-lg italic">
                "{song.description}"
              </p>
            </div>
          )}

          {/* Meta Info: Duration & Release Date */}
          <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs">
            <div className="flex items-center gap-2 text-[#94a3b8]">
              <Clock className="w-4 h-4 text-[#f59e0b]" />
              <span>Duration: <strong className="text-white">{song.duration || 'Full Length Single'}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#94a3b8]">
              <Calendar className="w-4 h-4 text-[#f59e0b]" />
              <span>Release Status: <strong className="text-white">{song.releaseDate || 'Official Single'}</strong></span>
            </div>
          </div>

          {/* Credits */}
          {song.credits && Object.keys(song.credits).length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span>Composition & Track Credits</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#070709] p-3 rounded-lg border border-white/5 text-xs">
                {song.credits.composedBy && (
                  <div>
                    <span className="text-[#64748b] block">Composer</span>
                    <span className="text-white font-medium">{song.credits.composedBy}</span>
                  </div>
                )}
                {song.credits.writtenBy && (
                  <div>
                    <span className="text-[#64748b] block">Lyricist / Shayar</span>
                    <span className="text-white font-medium">{song.credits.writtenBy}</span>
                  </div>
                )}
                {song.credits.musicProducer && (
                  <div>
                    <span className="text-[#64748b] block">Music Producer</span>
                    <span className="text-white font-medium">{song.credits.musicProducer}</span>
                  </div>
                )}
                {song.credits.vocals && (
                  <div>
                    <span className="text-[#64748b] block">Vocals</span>
                    <span className="text-white font-medium">{song.credits.vocals}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Dynamic Platform Buttons - ONLY shown if URL exists */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-3">
              Available Platforms
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {availablePlatforms.length > 0 ? (
                availablePlatforms.map((plat, idx) => {
                  const Icon = plat.icon;
                  return (
                    <a
                      key={idx}
                      href={plat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2 px-3.5 gap-2"
                    >
                      <Icon className={`w-4 h-4 ${plat.color}`} />
                      <span>{plat.name}</span>
                    </a>
                  );
                })
              ) : (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-4 gap-2"
                >
                  <Youtube className="w-4 h-4 text-[#dc2626]" />
                  <span>Official YouTube Channel</span>
                </a>
              )}

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="btn-secondary text-xs py-2 px-3.5 gap-2 ml-auto"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4 text-[#f59e0b]" />}
                <span>{copied ? 'Link Copied!' : 'Share Track'}</span>
              </button>
            </div>
          </div>

          {/* Licensing prompt CTA */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
            <span>Interested in licensing this track for film or media?</span>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(`Licensing Request: ${song.title}`);
              }}
              className="text-[#f59e0b] hover:underline font-semibold bg-transparent border-none cursor-pointer"
            >
              Discuss Licensing →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
