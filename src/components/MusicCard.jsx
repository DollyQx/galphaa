import React from 'react';
import { Play, Music, ExternalLink } from 'lucide-react';
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon } from './SocialIcons';

export const MusicCard = ({ track, onOpenDetail }) => {
  // Check available platform links
  const availablePlatforms = [];
  if (track.youtubeUrl) availablePlatforms.push({ name: 'YouTube', icon: YoutubeIcon, color: 'text-[#dc2626]', url: track.youtubeUrl });
  if (track.spotifyUrl) availablePlatforms.push({ name: 'Spotify', icon: SpotifyIcon, color: 'text-[#22c55e]', url: track.spotifyUrl });
  if (track.appleMusicUrl) availablePlatforms.push({ name: 'Apple Music', icon: AppleMusicIcon, color: 'text-[#f43f5e]', url: track.appleMusicUrl });

  return (
    <div
      onClick={() => onOpenDetail(track)}
      className="cinematic-card p-4 cursor-pointer group flex flex-col justify-between h-full border border-white/10 hover:border-[#f59e0b]/40 rounded-xl transition-all duration-300"
    >
      <div className="space-y-3">
        
        {/* Artwork with subtle zoom on hover */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-black/60 shadow-lg">
          <img
            src={track.thumbnail || '/images/hero.png'}
            alt={track.title}
            loading="lazy"
            className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-108 transition-transform duration-500 ease-out"
          />
          
          {/* Soft Glow & Play Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#f59e0b] text-[#070709] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Title & Artist */}
        <div className="space-y-0.5 group-hover:translate-x-1 transition-transform duration-300">
          <h3 className="font-serif-title text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors leading-tight line-clamp-1">
            {track.title}
          </h3>
          <p className="text-xs text-[#94a3b8] font-medium tracking-wide">
            {track.artist || 'G ALPHA'}
          </p>
        </div>

      </div>

      {/* Available Platforms Section */}
      <div className="pt-3 mt-3 border-t border-white/5 space-y-1.5">
        {availablePlatforms.length > 0 ? (
          <div>
            <span className="text-[10px] text-[#64748b] block font-semibold uppercase tracking-wider mb-1">
              Available on:
            </span>
            <div className="flex items-center gap-2">
              {availablePlatforms.map((plat, idx) => {
                const Icon = plat.icon;
                return (
                  <a
                    key={idx}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
                    title={`Listen on ${plat.name}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${plat.color}`} />
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-[11px] text-[#64748b]">
            <span className="text-[#94a3b8]">Single</span>
            <span className="text-[#f59e0b] group-hover:underline font-semibold">View Details →</span>
          </div>
        )}
      </div>

    </div>
  );
};
