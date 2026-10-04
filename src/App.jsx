import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MusicPage } from './pages/MusicPage';
import { PoetryPage } from './pages/PoetryPage';
import { UnreleasedPage } from './pages/UnreleasedPage';
import { AboutPage } from './pages/AboutPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

import { SongDetailModal } from './components/SongDetailModal';
import { PoetryDetailModal } from './components/PoetryDetailModal';
import { InquiryModal } from './components/InquiryModal';

export function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [inquirySubject, setInquirySubject] = useState(null);
  const [inquirySong, setInquirySong] = useState(null);

  // Dynamic Page Title & Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageTitles = {
      home: 'G ALPHA — Musician, Lyricist, Composer & Shayar',
      music: 'G ALPHA — Music',
      poetry: 'G ALPHA — Poetry',
      unreleased: 'G ALPHA — Unreleased Catalogue',
      about: 'G ALPHA — About',
      collaborate: 'G ALPHA — Collaborate',
      contact: 'G ALPHA — Contact',
      admin: 'G ALPHA — Admin Portal & CRM'
    };

    document.title = pageTitles[activePage] || 'G ALPHA — Musician, Lyricist, Composer & Shayar';
  }, [activePage]);

  const handleOpenInquiry = (subject = '', songTitle = '') => {
    setInquirySubject(subject || 'General Inquiry');
    setInquirySong(songTitle || '');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col font-sans selection:bg-[#f59e0b] selection:text-[#070709]">
      
      {/* Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Active Page View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenSongDetail={(song) => setSelectedSong(song)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {activePage === 'music' && (
          <MusicPage
            onOpenSongDetail={(song) => setSelectedSong(song)}
          />
        )}

        {activePage === 'poetry' && (
          <PoetryPage
            onOpenPoetryDetail={(poem) => setSelectedPoem(poem)}
          />
        )}

        {activePage === 'unreleased' && (
          <UnreleasedPage
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {activePage === 'collaborate' && (
          <CollaboratePage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'admin' && (
          <AdminPage setActivePage={setActivePage} />
        )}
      </main>

      {/* Modals */}
      {selectedSong && (
        <SongDetailModal
          song={selectedSong}
          onClose={() => setSelectedSong(null)}
          onOpenInquiry={handleOpenInquiry}
        />
      )}

      {selectedPoem && (
        <PoetryDetailModal
          poem={selectedPoem}
          onClose={() => setSelectedPoem(null)}
        />
      )}

      {inquirySubject !== null && (
        <InquiryModal
          initialSubject={inquirySubject}
          initialSong={inquirySong}
          onClose={() => { setInquirySubject(null); setInquirySong(null); }}
        />
      )}

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;
