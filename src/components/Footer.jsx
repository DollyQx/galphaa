import React from 'react';
import { Disc, ArrowUp, Feather, ShieldCheck } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/musicData';

export const Footer = ({ setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-[#94a3b8] relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-[#121216] grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center text-[#070709] font-bold">
                <Disc className="w-5 h-5" />
              </div>
              <span className="font-serif-title text-2xl font-bold tracking-widest text-white">
                G ALPHA
              </span>
            </div>
            <p className="text-sm text-[#94a3b8] max-w-md leading-relaxed">
              Musician · Lyricist · Composer · Shayar. Creating melodies and verses for the moments that stay.
            </p>
            <p className="font-handwriting text-lg text-[#fcd34d]">
              "Stories in Sound. Feelings in Words."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#f59e0b] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { setActivePage('home'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('music'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">Music Catalogue</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('poetry'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">The Poetry</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('unreleased'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">Unreleased Songs (28)</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('about'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">About G ALPHA</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('collaborate'); scrollToTop(); }} className="hover:text-[#f59e0b] bg-transparent border-none text-[#94a3b8] cursor-pointer">Collaborate / Licensing</button>
              </li>
            </ul>
          </div>

          {/* Licensing & Industry Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#f59e0b] pl-2">
              Licensing & Inquiries
            </h4>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              For film, web-series placements, exclusive composition licensing, or lyric inquiries, contact G ALPHA directly.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.youtube && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:border-[#dc2626] hover:text-[#ff4d4d] transition-all"
                >
                  <YoutubeIcon className="w-4 h-4 text-[#dc2626]" />
                  <span>YouTube Official</span>
                </a>
              )}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#64748b]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Unreleased audio is protected & private.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} G ALPHA. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#f59e0b] bg-transparent border-none text-[#64748b] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
