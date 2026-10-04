import React, { createContext, useContext, useState, useEffect } from 'react';
import { RELEASED_TRACKS, UNRELEASED_TRACKS, SOCIAL_LINKS } from '../data/musicData';
import { POEMS, POETRY_SUBHEADING } from '../data/poetryData';
import { ARTIST_PROFILE } from '../data/aboutData';

const DataContext = createContext();

const STORAGE_KEY = 'galphaa_crm_data_v1';

const INITIAL_INQUIRIES = [
  {
    id: 'inq-101',
    name: 'Aarav Mehta',
    email: 'aarav.m@cinemastudio.in',
    phone: '+91 98765 43210',
    subject: 'Film Score & Song Composition',
    songTitle: 'HAWA BHI GUZRE NA',
    projectType: 'Film / OTT Series Soundtrack',
    timeline: 'Within 1-2 Months',
    budget: '₹1,00,000 - ₹2,50,000',
    message: 'We are interested in licensing "HAWA BHI GUZRE NA" or commissioning an original acoustic ballad for an upcoming indie feature film.',
    status: 'NEW',
    createdAt: '2026-10-03T14:22:00.000Z'
  },
  {
    id: 'inq-102',
    name: 'Priya Sharma',
    email: 'priya@musicfestival.org',
    phone: '+91 91234 56789',
    subject: 'Live Acoustic & Poetry Recitation',
    songTitle: null,
    projectType: 'Live Event / Concert Booking',
    timeline: 'Immediate (Next 2 Weeks)',
    budget: '₹50,000 - ₹1,00,000',
    message: 'Inquiring about G Alphaa performing a 45-minute live set of music and poetry at our annual cultural evening in Delhi.',
    status: 'CONTACTED',
    createdAt: '2026-10-01T09:15:00.000Z'
  }
];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          releasedTracks: parsed.releasedTracks || RELEASED_TRACKS,
          unreleasedTracks: parsed.unreleasedTracks || UNRELEASED_TRACKS,
          poems: parsed.poems || POEMS,
          poetrySubheading: parsed.poetrySubheading || POETRY_SUBHEADING,
          socialLinks: parsed.socialLinks || SOCIAL_LINKS,
          artistProfile: parsed.artistProfile || ARTIST_PROFILE,
          inquiries: parsed.inquiries || INITIAL_INQUIRIES,
        };
      }
    } catch (err) {
      console.error('Error loading CRM data from LocalStorage:', err);
    }
    return {
      releasedTracks: RELEASED_TRACKS,
      unreleasedTracks: UNRELEASED_TRACKS,
      poems: POEMS,
      poetrySubheading: POETRY_SUBHEADING,
      socialLinks: SOCIAL_LINKS,
      artistProfile: ARTIST_PROFILE,
      inquiries: INITIAL_INQUIRIES,
    };
  });

  // Save to LocalStorage whenever data updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error('Error persisting CRM data:', err);
    }
  }, [data]);

  // --- SONGS CRUD ---
  const saveSong = (songData) => {
    setData((prev) => {
      const isReleased = songData.status === 'RELEASED';
      let newReleased = [...prev.releasedTracks];
      let newUnreleased = [...prev.unreleasedTracks];

      // Remove existing from both lists if updating
      newReleased = newReleased.filter((s) => s.id !== songData.id);
      newUnreleased = newUnreleased.filter((s) => s.id !== songData.id);

      if (isReleased) {
        newReleased.unshift(songData);
      } else {
        newUnreleased.unshift(songData);
      }

      return {
        ...prev,
        releasedTracks: newReleased,
        unreleasedTracks: newUnreleased,
      };
    });
  };

  const deleteSong = (id) => {
    setData((prev) => ({
      ...prev,
      releasedTracks: prev.releasedTracks.filter((s) => s.id !== id),
      unreleasedTracks: prev.unreleasedTracks.filter((s) => s.id !== id),
    }));
  };

  const toggleSongStatus = (id) => {
    setData((prev) => {
      let releasedSong = prev.releasedTracks.find((s) => s.id === id);
      let unreleasedSong = prev.unreleasedTracks.find((s) => s.id === id);

      let newReleased = [...prev.releasedTracks];
      let newUnreleased = [...prev.unreleasedTracks];

      if (releasedSong) {
        newReleased = newReleased.filter((s) => s.id !== id);
        newUnreleased.unshift({ ...releasedSong, status: 'UNRELEASED' });
      } else if (unreleasedSong) {
        newUnreleased = newUnreleased.filter((s) => s.id !== id);
        newReleased.unshift({
          ...unreleasedSong,
          status: 'RELEASED',
          thumbnail: unreleasedSong.thumbnail || '/images/hero.png',
          credits: unreleasedSong.credits || { writtenBy: 'G Alphaa', composedBy: 'G Alphaa' }
        });
      }

      return {
        ...prev,
        releasedTracks: newReleased,
        unreleasedTracks: newUnreleased,
      };
    });
  };

  const toggleSongFeatured = (id) => {
    setData((prev) => ({
      ...prev,
      releasedTracks: prev.releasedTracks.map((s) =>
        s.id === id ? { ...s, featured: !s.featured } : s
      ),
    }));
  };

  // --- POETRY CRUD ---
  const savePoem = (poemData) => {
    setData((prev) => {
      const exists = prev.poems.some((p) => p.id === poemData.id);
      let newPoems = [...prev.poems];
      if (exists) {
        newPoems = newPoems.map((p) => (p.id === poemData.id ? poemData : p));
      } else {
        newPoems.unshift(poemData);
      }
      return { ...prev, poems: newPoems };
    });
  };

  const deletePoem = (id) => {
    setData((prev) => ({
      ...prev,
      poems: prev.poems.filter((p) => p.id !== id),
    }));
  };

  // --- SOCIAL LINKS & PROFILE ---
  const updateSocialLinks = (newLinks) => {
    setData((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const updateArtistProfile = (newProfile) => {
    setData((prev) => ({ ...prev, artistProfile: newProfile }));
  };

  // --- INQUIRIES CRM ---
  const addInquiry = (inquiry) => {
    const newInquiry = {
      id: `inq-${Date.now()}`,
      status: 'NEW',
      createdAt: new Date().toISOString(),
      ...inquiry,
    };
    setData((prev) => ({
      ...prev,
      inquiries: [newInquiry, ...prev.inquiries],
    }));
    return newInquiry;
  };

  const updateInquiryStatus = (id, newStatus) => {
    setData((prev) => ({
      ...prev,
      inquiries: prev.inquiries.map((inq) =>
        inq.id === id ? { ...inq, status: newStatus } : inq
      ),
    }));
  };

  const deleteInquiry = (id) => {
    setData((prev) => ({
      ...prev,
      inquiries: prev.inquiries.filter((inq) => inq.id !== id),
    }));
  };

  // --- BACKUP & RESTORE ---
  const exportData = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `G_Alphaa_CRM_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonData) => {
    try {
      const parsed = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      if (!parsed.releasedTracks || !parsed.poems) {
        throw new Error('Invalid JSON backup structure');
      }
      setData({
        releasedTracks: parsed.releasedTracks || RELEASED_TRACKS,
        unreleasedTracks: parsed.unreleasedTracks || UNRELEASED_TRACKS,
        poems: parsed.poems || POEMS,
        poetrySubheading: parsed.poetrySubheading || POETRY_SUBHEADING,
        socialLinks: parsed.socialLinks || SOCIAL_LINKS,
        artistProfile: parsed.artistProfile || ARTIST_PROFILE,
        inquiries: parsed.inquiries || [],
      });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const resetData = () => {
    const defaultData = {
      releasedTracks: RELEASED_TRACKS,
      unreleasedTracks: UNRELEASED_TRACKS,
      poems: POEMS,
      poetrySubheading: POETRY_SUBHEADING,
      socialLinks: SOCIAL_LINKS,
      artistProfile: ARTIST_PROFILE,
      inquiries: INITIAL_INQUIRIES,
    };
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        ...data,
        saveSong,
        deleteSong,
        toggleSongStatus,
        toggleSongFeatured,
        savePoem,
        deletePoem,
        updateSocialLinks,
        updateArtistProfile,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        exportData,
        importData,
        resetData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
