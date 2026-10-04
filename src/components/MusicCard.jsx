import React from 'react';
import { Play, Music } from 'lucide-react';
import { getTrackPlatformLinks } from '../data/musicData';
import { getPlatformIconComponent } from './SocialIcons';

export const MusicCard = ({ track, onOpenDetail }) => {
  const platforms = getTrackPlatformLinks(track);

  return (
    <div
      onClick={() => onOpenDetail(track)}
      className="cinematic-card p-4 cursor-pointer group flex flex-col justify-between h-full border border-white/10 hover:border-[#f59e0b]/40 rounded-xl transition-all duration-300 bg-[#0d0e14]/90"
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
            {track.artist || 'G Alphaa'}
          </p>
        </div>

      </div>

      {/* Available Platforms Section */}
      <div className="pt-3 mt-3 border-t border-white/5 space-y-1.5">
        <span className="text-[10px] text-[#64748b] block font-semibold uppercase tracking-wider">
          LISTEN ON PLATFORMS:
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {platforms.slice(0, 5).map((plat) => {
            const Icon = getPlatformIconComponent(plat.id);
            return (
              <a
                key={plat.id}
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`p-1.5 rounded-md bg-white/5 border border-white/5 ${plat.bg} transition-colors duration-200`}
                title={`Listen on ${plat.name}`}
              >
                <Icon className={`w-3.5 h-3.5 ${plat.color}`} />
              </a>
            );
          })}
          {platforms.length > 5 && (
            <span className="text-[10px] font-bold text-[#f59e0b] ml-1">
              +{platforms.length - 5}
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

