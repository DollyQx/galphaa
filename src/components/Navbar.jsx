import React, { useState, useEffect } from 'react';
import { Lock, Menu, X } from 'lucide-react';
import { YouTubeIcon } from './icons/YouTubeIcon';
import { SOCIAL_LINKS } from '../data/musicData';

export const Navbar = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scrolling when mobile overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Support Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const centerNavItems = [
    { id: 'music', label: 'Music' },
    { id: 'poetry', label: 'Poetry' },
    { id: 'unreleased', label: 'Unreleased', isUnreleased: true },
  ];

  const rightNavItems = [
    { id: 'about', label: 'About' },
    { id: 'collaborate', label: 'Collaborate' },
    { id: 'contact', label: 'Contact' },
  ];

  const mobileNavItems = [
    { id: 'home', num: '01', label: 'HOME' },
    { id: 'music', num: '02', label: 'MUSIC' },
    { id: 'poetry', num: '03', label: 'POETRY' },
    { id: 'unreleased', num: '04', label: 'UNRELEASED', isUnreleased: true },
    { id: 'about', num: '05', label: 'ABOUT' },
    { id: 'collaborate', num: '06', label: 'COLLABORATE' },
    { id: 'contact', num: '07', label: 'CONTACT' },
  ];

  const youtubeUrl = SOCIAL_LINKS.youtube || 'https://www.youtube.com/@GAlphaaMusic/videos';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
          : 'bg-gradient-to-b from-[#070709]/80 via-[#070709]/30 to-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* Left: G Alphaa Wordmark (Returns to Home) */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="group text-left bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm py-1"
          aria-label="G Alphaa - Home"
        >
          <span className="font-serif-title text-2xl font-bold tracking-tight text-white group-hover:text-[#f59e0b] transition-colors duration-200">
            G Alphaa
          </span>
        </button>

        {/* Center Desktop Navigation: Music, Poetry, Unreleased */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation Left">
          {centerNavItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 py-1 border-none bg-transparent cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm ${
                  item.isUnreleased
                    ? isActive 
                      ? 'text-[#f59e0b]' 
                      : 'text-[#f59e0b]/80 hover:text-[#f59e0b]'
                    : isActive 
                      ? 'text-[#f59e0b]' 
                      : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {item.isUnreleased && <Lock className="w-3 h-3 text-[#f59e0b]" />}
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Navigation: About, Collaborate, Contact + YouTube Icon */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8" aria-label="Primary Navigation Right">
            {rightNavItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 py-1 border-none bg-transparent cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm ${
                    isActive ? 'text-[#f59e0b]' : 'text-[#94a3b8] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Subtle YouTube Link Icon */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official YouTube Channel"
            title="Official YouTube Channel"
            className="text-[#94a3b8] hover:text-[#dc2626] transition-colors duration-200 p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm"
          >
            <YouTubeIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-white hover:text-[#f59e0b] bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-md"
          aria-label="Open navigation"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="w-6 h-6" />
        </button>

      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-fade-in overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Bar: Wordmark + Close Button */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
            <button 
              onClick={() => handleNavClick('home')}
              className="bg-transparent border-none cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm"
            >
              <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white">
                G Alphaa
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#f59e0b] bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-full"
              aria-label="Close navigation"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Main Editorial Menu Items (01 HOME - 07 CONTACT) */}
          <nav className="relative z-10 my-auto py-8 flex flex-col gap-4 sm:gap-6" aria-label="Mobile Menu Links">
            {mobileNavItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-4 sm:gap-6 text-left border-none bg-transparent cursor-pointer group py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] rounded-sm transition-colors duration-200 ${
                    isActive ? 'text-[#f59e0b]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className={`font-mono text-xs sm:text-sm tracking-widest font-semibold ${
                    isActive ? 'text-[#f59e0b]' : 'text-[#64748b] group-hover:text-[#f59e0b]'
                  }`}>
                    {item.num}
                  </span>
                  <span className={`font-serif-title text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#f59e0b]' : 'group-hover:text-[#f59e0b]'
                  }`}>
                    {item.label}
                  </span>
                  {item.isUnreleased && (
                    <Lock className="w-4 h-4 text-[#f59e0b] ml-1" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Bottom Social & Artist Title */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#f59e0b] uppercase">
              MUSICIAN · LYRICIST · COMPOSER · SHAYAR
            </p>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs text-[#94a3b8] hover:text-white transition-colors duration-200"
            >
              <YouTubeIcon className="w-4 h-4 text-[#dc2626]" />
              <span>YouTube Channel</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};

