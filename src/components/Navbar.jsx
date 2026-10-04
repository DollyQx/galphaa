import React, { useState, useEffect } from 'react';
import { 
  Music, 
  Feather, 
  Lock, 
  User, 
  Briefcase, 
  Mail, 
  Home, 
  Menu, 
  X,
  Disc
} from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';
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

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'poetry', label: 'Poetry', icon: Feather },
    { id: 'unreleased', label: 'Unreleased', icon: Lock, badge: '28' },
    { id: 'about', label: 'About', icon: User },
    { id: 'collaborate', label: 'Collaborate', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-[#070709]/90 via-[#070709]/40 to-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo / Brand */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left bg-transparent border-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center text-[#070709] font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Disc className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <span className="font-serif-title text-2xl font-bold tracking-widest text-white group-hover:text-[#ff9e2c] transition-colors">
              G ALPHA
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-medium">
              Official Artist
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d0e14]/80 p-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border-none cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-[#070709] shadow-md shadow-amber-500/20'
                    : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-[#070709] text-[#f59e0b]' : 'bg-[#dc2626]/20 text-[#fca5a5] border border-[#dc2626]/40'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Social Icons & Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 pr-3 border-r border-white/10">
            {SOCIAL_LINKS.youtube && (
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="Official YouTube Channel"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#dc2626]/20 hover:border-[#dc2626]/50 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#ff4d4d] transition-all duration-300"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => handleNavClick('collaborate')}
            className="btn-primary text-xs py-2 px-4 rounded-full"
          >
            Inquire / Licensing
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#f59e0b]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#070709]/98 border-b border-white/10 p-6 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-3 rounded-lg text-sm font-semibold tracking-wider border-none text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#f59e0b] text-[#070709]'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#dc2626]/30 text-white font-bold border border-[#dc2626]/50">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#94a3b8] hover:text-white"
              >
                <YoutubeIcon className="w-4 h-4 text-[#dc2626]" />
                <span>YouTube Channel</span>
              </a>
              <button
                onClick={() => handleNavClick('collaborate')}
                className="btn-primary text-xs py-2 px-4"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
