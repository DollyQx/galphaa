import React from 'react';
import { ArrowUp, Disc, ShieldCheck, Lock } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
import { useData } from '../context/DataContext';

export const Footer = ({ setActivePage }) => {
  const { socialLinks } = useData();
  const youtubeUrl = (socialLinks && socialLinks.youtube) || 'https://www.youtube.com/@GAlphaaMusic/videos';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 text-[#94a3b8] pt-16 pb-12">
      <div className="container-custom space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#dc2626] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#070709] rounded-full flex items-center justify-center">
                  <Disc className="w-4 h-4 text-[#f59e0b] animate-spin-slow" />
                </div>
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold text-white tracking-widest block">
                  G Alphaa
                </span>
                <span className="text-[10px] text-[#f59e0b] font-semibold tracking-wider uppercase">
                  MUSICIAN · LYRICIST · COMPOSER · SHAYAR
                </span>
              </div>
            </div>

            <p className="font-handwriting text-xl text-[#fcd34d] max-w-sm">
              "Stories in sound. Feelings in words."
            </p>

            <p className="text-xs text-[#64748b] max-w-md leading-relaxed font-light">
              Official portfolio and digital catalogue for G Alphaa. All rights reserved for compositions, lyrics, audio recordings, and literary works.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Music', key: 'music' },
                { name: 'Poetry', key: 'poetry' },
                { name: 'Unreleased', key: 'unreleased' },
                { name: 'About', key: 'about' },
                { name: 'Collaborate', key: 'collaborate' },
                { name: 'Contact', key: 'contact' },
                { name: 'Admin Portal CRM', key: 'admin', isAdmin: true }
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => setActivePage(item.key)}
                    className={`hover:text-[#f59e0b] transition-colors flex items-center gap-1.5 ${
                      item.isAdmin ? 'text-slate-400 hover:text-[#f59e0b]' : ''
                    }`}
                  >
                    {item.isAdmin && <Lock className="w-3 h-3 text-[#f59e0b]" />}
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (Strictly Official Links) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Official Social
            </h4>
            
            <div className="space-y-2">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white hover:border-[#dc2626] hover:text-[#ff4d4d] transition-all"
              >
                <YoutubeIcon className="w-4 h-4 text-[#dc2626]" />
                <span>YouTube Channel</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#64748b]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Verified Official Channel</span>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© G Alphaa. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
