import React, { useState } from 'react';
import { 
  Play, 
  Music, 
  Feather, 
  Youtube, 
  ChevronRight, 
  Sparkles, 
  Disc, 
  Clock, 
  Share2, 
  Check,
  ArrowRight,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { RELEASED_TRACKS, SOCIAL_LINKS } from '../data/musicData';

export const HomePage = ({ setActivePage, onOpenSongDetail, onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  
  // Latest Release Track
  const latestTrack = RELEASED_TRACKS.find(t => t.id === 'hawa-bhi-guzre-na') || RELEASED_TRACKS[0];
  
  // Featured tracks for catalogue
  const featuredTracks = RELEASED_TRACKS.filter(t => t.featured || t.id !== 'hawa-bhi-guzre-na');

  const handleShareLatest = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 space-y-24">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#dc2626]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Handwritten Top Annotation */}
            <div className="inline-block relative">
              <span className="font-handwriting text-2xl text-[#fcd34d] block transform -rotate-2 mb-1">
                ~ Verses born under midnight lights ~
              </span>
            </div>

            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-[0.2em] text-[#f59e0b] uppercase">
              <span>MUSICIAN</span>
              <span>·</span>
              <span>LYRICIST</span>
              <span>·</span>
              <span>COMPOSER</span>
              <span>·</span>
              <span>SHAYAR</span>
            </div>

            {/* Main Artistic Headline */}
            <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Stories in Sound. <br />
              <span className="amber-gradient-text">Feelings in Words.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              A musician, lyricist, composer and shayar creating melodies and verses for the moments that stay.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActivePage('music')}
                className="btn-primary text-sm py-3.5 px-7"
              >
                <Music className="w-4 h-4" />
                <span>Listen to Music</span>
              </button>

              <button
                onClick={() => setActivePage('poetry')}
                className="btn-secondary text-sm py-3.5 px-7"
              >
                <Feather className="w-4 h-4 text-[#f59e0b]" />
                <span>Read My Poetry</span>
              </button>
            </div>

            {/* Subtle Handwritten Annotation below buttons */}
            <p className="font-handwriting text-lg text-[#94a3b8]/80 pt-2">
              "Every chord holds an unspoken silence..."
            </p>

          </div>

          {/* Right Hero Visual (Cinematic Artist Representation) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#f59e0b]/40 via-[#dc2626]/20 to-[#f59e0b]/30 blur-lg opacity-75 animate-pulse" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0d0e14] shadow-2xl group">
                <img
                  src="/images/hero.png"
                  alt="G ALPHA Artist Silhouette"
                  className="w-full h-[460px] sm:h-[520px] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/30" />

                {/* Floating Handwritten Annotation on Visual */}
                <div className="absolute top-6 right-6 bg-[#070709]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-handwriting text-[#fcd34d] transform rotate-3">
                  G ALPHA Official
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0d0e14]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-title text-lg font-bold text-white">G ALPHA</h3>
                    <p className="text-xs text-[#94a3b8]">Independent Artist & Composer</p>
                  </div>
                  <button
                    onClick={() => setActivePage('about')}
                    className="text-xs text-[#f59e0b] hover:underline font-semibold flex items-center gap-1 bg-transparent border-none cursor-pointer"
                  >
                    <span>Biography</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOME: MUSIC + POETRY TWIN CARDS */}
      <section className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
            ARTISTIC DOMAINS
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
            Sound and Solitude
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* THE MUSIC CARD */}
          <div className="cinematic-card p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 transition-transform">
                <Music className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#94a3b8] uppercase">
                COMPOSITIONS & RELEASES
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-white group-hover:text-[#ff9e2c] transition-colors">
                THE MUSIC
              </h3>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                "Songs, compositions and sounds by G ALPHA."
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setActivePage('music')}
                className="btn-primary w-full text-xs py-3 justify-between"
              >
                <span>Explore Music</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* THE POETRY CARD */}
          <div className="cinematic-card p-8 sm:p-10 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] group-hover:scale-110 transition-transform">
                <Feather className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#94a3b8] uppercase">
                VERSES & SHAYARI
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-white group-hover:text-[#ff9e2c] transition-colors">
                THE POETRY
              </h3>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                "Poetry, thoughts and verses by G ALPHA."
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setActivePage('poetry')}
                className="btn-secondary w-full text-xs py-3 justify-between"
              >
                <span>Explore Poetry</span>
                <ArrowRight className="w-4 h-4 text-[#f59e0b]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* LATEST RELEASE FEATURE SECTION */}
      <section className="container-custom">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#12141d] via-[#0d0e14] to-[#070709] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Artwork Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={latestTrack.thumbnail}
                  alt={latestTrack.title}
                  className="w-full aspect-square object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="badge-amber font-bold">LATEST RELEASE</span>
                </div>
              </div>
            </div>

            {/* Details & Player Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#f59e0b] uppercase">
                  CURRENT SINGLE
                </span>
                <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white tracking-wide mt-1">
                  {latestTrack.title}
                </h2>
                <p className="text-sm font-semibold text-[#94a3b8] mt-1">
                  ARTIST: <span className="text-white">{latestTrack.artist}</span>
                </p>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed font-serif-editorial text-lg italic border-l-2 border-[#f59e0b] pl-4">
                "{latestTrack.description}"
              </p>

              {/* Streaming Platforms Section (ONLY renders platforms with actual URLs) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                  Stream & Watch
                </h4>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenSongDetail(latestTrack)}
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Listen Now</span>
                  </button>

                  {SOCIAL_LINKS.youtube && (
                    <a
                      href={latestTrack.youtubeUrl || SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2.5 px-4 gap-2"
                    >
                      <Youtube className="w-4 h-4 text-[#dc2626]" />
                      <span>YouTube</span>
                    </a>
                  )}

                  <button
                    onClick={handleShareLatest}
                    className="btn-secondary text-xs py-2.5 px-3.5 gap-2"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4 text-[#f59e0b]" />}
                    <span>{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURED MUSIC CATALOGUE (HORIZONTAL SCROLLABLE) */}
      <section className="container-custom space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
              FEATURED TRACKS
            </span>
            <h2 className="font-serif-title text-3xl font-bold text-white">
              Songs & Compositions
            </h2>
          </div>

          <button
            onClick={() => setActivePage('music')}
            className="text-xs text-[#f59e0b] hover:underline font-semibold flex items-center gap-1 bg-transparent border-none cursor-pointer"
          >
            <span>View All Releases ({RELEASED_TRACKS.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {featuredTracks.map((track) => (
            <div
              key={track.id}
              onClick={() => onOpenSongDetail(track)}
              className="cinematic-card flex-shrink-0 w-72 p-4 cursor-pointer group space-y-3"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-black/50">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b] text-[#070709] flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 text-[#f59e0b] backdrop-blur-md border border-white/10 font-bold">
                    {track.status}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif-title text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors truncate">
                  {track.title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-0.5">{track.artist}</p>
              </div>

              {track.genre && (
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748b]">
                  <span>{track.genre}</span>
                  <span className="text-[#f59e0b]">Details →</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
