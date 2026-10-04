import React, { useState } from 'react';
import { 
  Play, 
  Music, 
  Feather, 
  ArrowRight,
  Lock,
  BookOpen
} from 'lucide-react';
import { MusicCard } from '../components/MusicCard';
import { getPlatformIconComponent } from '../components/SocialIcons';
import { getTrackPlatformLinks } from '../data/musicData';
import { useData } from '../context/DataContext';

export const HomePage = ({ setActivePage, onOpenSongDetail, onOpenInquiry }) => {
  const { releasedTracks, unreleasedTracks, poems, artistProfile } = useData();
  const [showEmbed, setShowEmbed] = useState(false);

  // Featured / Latest Single
  const latestRelease = releasedTracks.find(t => t.featured) || releasedTracks[0] || {};
  const latestPlatforms = getTrackPlatformLinks(latestRelease);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 01 — WHO IS G Alphaa (HERO SECTION) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-white/5">
        
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e14] via-[#070709] to-[#070709]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
              <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase">
                01 — WHO IS G Alphaa
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
                {artistProfile.artistName || "G Alphaa"}
              </h1>
              
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#f59e0b] uppercase">
                MUSICIAN · LYRICIST · COMPOSER · SHAYAR
              </p>
            </div>

            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif-title text-2xl sm:text-4xl text-white font-medium leading-tight">
                STORIES IN SOUND.<br />FEELINGS IN WORDS.
              </h2>
              <p className="font-handwriting text-2xl text-[#fcd34d]">
                "{artistProfile.headline}"
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed font-light pt-2">
                {artistProfile.shortBio}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActivePage('music')}
                className="btn-primary text-xs py-3.5 px-7 shadow-xl shadow-[#f59e0b]/10 cursor-pointer"
              >
                <Music className="w-4 h-4" />
                <span>LISTEN TO MUSIC ({releasedTracks.length})</span>
              </button>

              <button
                onClick={() => setActivePage('poetry')}
                className="btn-secondary text-xs py-3.5 px-7 cursor-pointer"
              >
                <Feather className="w-4 h-4 text-[#f59e0b]" />
                <span>READ POETRY ({poems.length})</span>
              </button>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={artistProfile.profileImage || "/images/about.png"}
                alt="G Alphaa Silhouette Composer Portrait"
                loading="lazy"
                className="w-full h-[450px] sm:h-[520px] object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = '/images/about.png'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="badge-amber font-semibold text-[11px]">{artistProfile.artistName}</span>
                <p className="font-handwriting text-xl text-white">
                  "Every chord holds an unspoken silence..."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 — THE MUSIC (EDITORIAL FULL-WIDTH SECTION) */}
      <section className="container-custom">
        <div className="rounded-3xl bg-[#0d0e14] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                02 — THE MUSIC
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Compositions & Original Releases
              </h2>
              <p className="text-sm text-[#94a3b8] font-light">
                "Songs, compositions and sounds by G Alphaa."
              </p>
            </div>

            <button
              onClick={() => setActivePage('music')}
              className="btn-primary text-xs py-3 px-6 self-start md:self-auto cursor-pointer"
            >
              <span>Explore All {releasedTracks.length} Songs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {releasedTracks.slice(0, 4).map((track) => (
              <MusicCard key={track.id} track={track} onOpenDetail={onOpenSongDetail} />
            ))}
          </div>

        </div>
      </section>

      {/* 03 — THE POETRY (EDITORIAL LITERATURE SECTION) */}
      {poems.length > 0 && (
        <section className="container-custom">
          <div className="rounded-3xl bg-gradient-to-br from-[#12131c] via-[#0d0e14] to-[#070709] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                03 — THE POETRY
              </span>
              <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white">
                THE POETRY
              </h2>
              <p className="font-handwriting text-2xl text-[#fcd34d]">
                "Words that don't need a melody."
              </p>
            </div>

            {/* Featured Poem Specimen */}
            <div className="max-w-3xl mx-auto bg-[#070709] p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6 text-center shadow-xl">
              <span className="text-[10px] font-bold text-[#f59e0b] uppercase tracking-widest block">
                FEATURED VERSE
              </span>
              
              <h3 className="font-serif-title text-2xl font-bold text-white">
                {poems[0].title}
              </h3>

              <p className="font-serif-editorial text-lg sm:text-xl text-[#94a3b8] italic whitespace-pre-line leading-relaxed max-w-xl mx-auto">
                "{poems[0].excerpt || poems[0].fullPoem}"
              </p>

              <button
                onClick={() => setActivePage('poetry')}
                className="btn-secondary text-xs py-2.5 px-6 mx-auto cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#f59e0b]" />
                <span>Read All Verses ({poems.length})</span>
              </button>
            </div>

          </div>
        </section>
      )}

      {/* 04 — LATEST RELEASE */}
      {latestRelease.title && (
        <section className="container-custom">
          <div className="relative rounded-3xl bg-[#0d0e14] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                {showEmbed && latestRelease.youtubeEmbedId ? (
                  <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${latestRelease.youtubeEmbedId}?autoplay=1`}
                      title={latestRelease.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <img
                      src={latestRelease.thumbnail || '/images/hero.png'}
                      alt={latestRelease.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = '/images/hero.png'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="badge-amber font-bold text-xs uppercase tracking-wider shadow-lg">
                        04 — LATEST RELEASE
                      </span>
                    </div>

                    {latestRelease.youtubeEmbedId ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setShowEmbed(true)}
                          className="w-16 h-16 rounded-full bg-[#f59e0b] text-[#070709] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </button>
                      </div>
                    ) : (
                      <div className="absolute bottom-6 left-6 right-6">
                        <button
                          onClick={() => onOpenSongDetail(latestRelease)}
                          className="btn-primary text-xs py-2.5 px-5 cursor-pointer"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>View Single Details</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
                    FEATURED SINGLE
                  </span>
                  <h2 className="font-serif-title text-4xl sm:text-5xl font-bold text-white leading-tight">
                    {latestRelease.title}
                  </h2>
                  <p className="text-base text-[#f59e0b] font-semibold">
                    {latestRelease.artist || 'G Alphaa'}
                  </p>
                </div>

                {latestRelease.description && (
                  <p className="text-sm text-[#94a3b8] font-serif-editorial text-lg italic leading-relaxed">
                    "{latestRelease.description}"
                  </p>
                )}

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] block">
                    Listen on Streaming Platforms:
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {latestPlatforms.slice(0, 4).map((plat) => {
                      const Icon = getPlatformIconComponent(plat.id);
                      return (
                        <a
                          key={plat.id}
                          href={plat.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs py-2 px-3 gap-2"
                        >
                          <Icon className={`w-4 h-4 ${plat.color}`} />
                          <span>{plat.name}</span>
                        </a>
                      );
                    })}

                    <button
                      onClick={() => onOpenSongDetail(latestRelease)}
                      className="btn-primary text-xs py-2 px-4 ml-auto cursor-pointer"
                    >
                      <span>Full Song Info & Platforms</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* 05 — THE UNRELEASED CATALOGUE */}
      <section className="container-custom">
        <div className="rounded-3xl bg-gradient-to-br from-[#180a0c] via-[#0d0e14] to-[#070709] border border-[#dc2626]/30 p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dc2626]/20 border border-[#dc2626]/40 text-[10px] font-bold text-[#fca5a5] uppercase">
                <Lock className="w-3 h-3 text-[#dc2626]" />
                <span>05 — THE UNRELEASED CATALOGUE</span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white">
                Private Vault ({unreleasedTracks.length} Compositions)
              </h2>
              <p className="font-handwriting text-2xl text-[#fcd34d]">
                "Some songs are waiting for the right story."
              </p>
            </div>

            <button
              onClick={() => setActivePage('unreleased')}
              className="btn-secondary text-xs py-3 px-6 hover:border-[#dc2626] self-start md:self-auto cursor-pointer"
            >
              <Lock className="w-4 h-4 text-[#dc2626]" />
              <span>Explore Private Vault</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {unreleasedTracks.slice(0, 3).map((track, idx) => (
              <div key={track.id} className="bg-[#070709] p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif-title text-xl font-bold text-[#f59e0b]">
                    0{idx + 1}
                  </span>
                  <span className="badge-crimson text-[9px]">UNRELEASED · PRIVATE</span>
                </div>
                <h4 className="font-serif-title text-lg font-bold text-white uppercase">{track.title}</h4>
                <p className="text-xs text-[#94a3b8]">Original composition</p>
                <button
                  onClick={() => onOpenInquiry(`PRIVATE PREVIEW REQUEST: ${track.title}`, track.title)}
                  className="btn-secondary w-full text-xs py-2 mt-2 cursor-pointer"
                >
                  Request Private Preview
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 — WORK TOGETHER */}
      <section className="container-custom">
        <div className="rounded-3xl bg-gradient-to-r from-[#141622] via-[#0d0e14] to-[#070709] border border-white/10 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
              06 — WORK TOGETHER
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
              SOME STORIES NEED MUSIC.<br />SOME JUST NEED WORDS.
            </h2>
            <p className="text-sm text-[#94a3b8] font-light leading-relaxed">
              For artists, filmmakers, labels, brands and creators looking for original music, lyrics, or licensing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('collaborate')}
              className="btn-primary text-xs py-3.5 px-7 cursor-pointer"
            >
              <span>WORK WITH G Alphaa</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('unreleased')}
              className="btn-secondary text-xs py-3.5 px-7 cursor-pointer"
            >
              <span>EXPLORE UNRELEASED</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
