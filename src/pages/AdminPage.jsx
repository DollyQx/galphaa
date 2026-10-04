import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { SongFormModal } from '../components/admin/SongFormModal';
import { PoetryFormModal } from '../components/admin/PoetryFormModal';
import { 
  Lock, Key, LogOut, Music, Feather, Globe, Mail, Database, 
  Plus, Search, Edit2, Trash2, CheckCircle2, AlertCircle, Clock, 
  Star, ExternalLink, Download, Upload, RefreshCw, Eye, Sparkles, Filter
} from 'lucide-react';

export const AdminPage = ({ setActivePage }) => {
  const {
    releasedTracks,
    unreleasedTracks,
    poems,
    socialLinks,
    artistProfile,
    inquiries,
    saveSong,
    deleteSong,
    toggleSongStatus,
    toggleSongFeatured,
    savePoem,
    deletePoem,
    updateSocialLinks,
    updateArtistProfile,
    updateInquiryStatus,
    deleteInquiry,
    exportData,
    importData,
    resetData,
  } = useData();

  // --- PIN AUTHENTICATION ---
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('galphaa_admin_authed') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // --- TAB STATE ---
  const [activeTab, setActiveTab] = useState('overview');

  // --- MODAL STATES ---
  const [editingSong, setEditingSong] = useState(null);
  const [isSongModalOpen, setIsSongModalOpen] = useState(false);

  const [editingPoem, setEditingPoem] = useState(null);
  const [isPoemModalOpen, setIsPoemModalOpen] = useState(false);

  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // --- FILTER & SEARCH STATES ---
  const [songSearch, setSongSearch] = useState('');
  const [songFilter, setSongFilter] = useState('ALL'); // ALL, RELEASED, UNRELEASED, FEATURED

  const [poemSearch, setPoemSearch] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('ALL'); // ALL, NEW, CONTACTED, CLOSED

  // --- PROFILE & SOCIAL EDITING FORM STATES ---
  const [profileForm, setProfileForm] = useState(artistProfile);
  const [linksForm, setLinksForm] = useState(socialLinks);
  const [profileSuccessMsg, setProfileSuccessMsg] = useState('');

  useEffect(() => {
    setProfileForm(artistProfile);
    setLinksForm(socialLinks);
  }, [artistProfile, socialLinks]);

  // Auth Handler
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === 'admin2026' || pinInput === '1234' || pinInput === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('galphaa_admin_authed', 'true');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('galphaa_admin_authed');
  };

  // Import JSON Handler
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = importData(event.target.result);
        if (result.success) {
          alert('Database restored successfully!');
        } else {
          alert(`Import failed: ${result.error}`);
        }
      };
      reader.readAsText(file);
    }
  };

  // Filtered lists
  const allSongs = [
    ...releasedTracks.map(s => ({ ...s, status: 'RELEASED' })),
    ...unreleasedTracks.map(s => ({ ...s, status: 'UNRELEASED' }))
  ];

  const filteredSongs = allSongs.filter(s => {
    const matchesSearch = (s.title || '').toLowerCase().includes(songSearch.toLowerCase()) ||
                          (s.artist || '').toLowerCase().includes(songSearch.toLowerCase());
    if (songFilter === 'RELEASED') return matchesSearch && s.status === 'RELEASED';
    if (songFilter === 'UNRELEASED') return matchesSearch && s.status === 'UNRELEASED';
    if (songFilter === 'FEATURED') return matchesSearch && s.featured;
    return matchesSearch;
  });

  const filteredPoems = poems.filter(p => 
    (p.title || '').toLowerCase().includes(poemSearch.toLowerCase()) ||
    (p.category || '').toLowerCase().includes(poemSearch.toLowerCase()) ||
    (p.excerpt || '').toLowerCase().includes(poemSearch.toLowerCase())
  );

  const filteredInquiries = inquiries.filter(inq => {
    if (inquiryFilter === 'NEW') return inq.status === 'NEW';
    if (inquiryFilter === 'CONTACTED') return inq.status === 'CONTACTED';
    if (inquiryFilter === 'CLOSED') return inq.status === 'CLOSED';
    return true;
  });

  const newInquiriesCount = inquiries.filter(i => i.status === 'NEW').length;

  // Render PIN login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070709] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-md bg-[#0f0f15] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="font-serif-title text-3xl font-bold text-white tracking-tight">
              G Alphaa Admin
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Enter security PIN to access artist catalog CRM
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
                Security PIN (Default: 1234 or admin2026)
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => { setPinInput(e.target.value); setPinError(false); }}
                  placeholder="••••••••"
                  className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#f59e0b] text-center tracking-widest text-lg font-mono"
                  autoFocus
                />
                <Key className="w-5 h-5 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {pinError && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Incorrect PIN. Please try 1234 or admin2026.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-[#f59e0b]/20 cursor-pointer"
            >
              Access Portal
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => setActivePage('home')}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              ← Return to Main Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 pt-24 pb-16">
      <div className="container-custom">
        
        {/* Top Control Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#f59e0b]/10 text-[#f59e0b] text-[10px] font-mono font-semibold uppercase tracking-wider rounded-md border border-[#f59e0b]/30">
                CRM Portal Active
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Storage: Local / JSON Sync
              </span>
            </div>
            <h1 className="font-serif-title text-3xl font-bold text-white tracking-tight mt-1">
              G Alphaa — Control Center
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActivePage('home')}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#f59e0b]" />
              <span>View Frontend</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Lock Portal</span>
            </button>
          </div>
        </div>

        {/* Stats Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div 
            onClick={() => { setActiveTab('songs'); setSongFilter('RELEASED'); }}
            className="p-5 bg-[#0f0f15] border border-white/10 rounded-2xl hover:border-[#f59e0b]/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-semibold tracking-wider">Released Tracks</span>
              <Music className="w-5 h-5 text-[#22c55e] group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-white font-mono">{releasedTracks.length}</p>
            <p className="text-[11px] text-slate-500 mt-1">Active on streaming platforms</p>
          </div>

          <div 
            onClick={() => { setActiveTab('songs'); setSongFilter('UNRELEASED'); }}
            className="p-5 bg-[#0f0f15] border border-white/10 rounded-2xl hover:border-[#f59e0b]/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-semibold tracking-wider">Unreleased Vault</span>
              <Lock className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-white font-mono">{unreleasedTracks.length}</p>
            <p className="text-[11px] text-slate-500 mt-1">Private catalog for licensing</p>
          </div>

          <div 
            onClick={() => setActiveTab('poetry')}
            className="p-5 bg-[#0f0f15] border border-white/10 rounded-2xl hover:border-[#f59e0b]/50 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-semibold tracking-wider">Poetry & Shayari</span>
              <Feather className="w-5 h-5 text-[#a855f7] group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-white font-mono">{poems.length}</p>
            <p className="text-[11px] text-slate-500 mt-1">Written verses & recitations</p>
          </div>

          <div 
            onClick={() => setActiveTab('inquiries')}
            className="p-5 bg-[#0f0f15] border border-white/10 rounded-2xl hover:border-[#f59e0b]/50 transition-all cursor-pointer group relative overflow-hidden"
          >
            {newInquiriesCount > 0 && (
              <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#f59e0b] text-black font-bold text-[10px] rounded-full animate-pulse">
                {newInquiriesCount} NEW
              </span>
            )}
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase font-semibold tracking-wider">Client Inquiries</span>
              <Mail className="w-5 h-5 text-[#3b82f6] group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-3xl font-bold text-white font-mono">{inquiries.length}</p>
            <p className="text-[11px] text-slate-500 mt-1">Direct booking & licensing leads</p>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex items-center gap-2 border-b border-white/10 mb-8 overflow-x-auto pb-1">
          {[
            { id: 'overview', label: 'Overview', icon: Sparkles },
            { id: 'songs', label: 'Songs Catalog', icon: Music, badge: allSongs.length },
            { id: 'poetry', label: 'Poetry & Shayari', icon: Feather, badge: poems.length },
            { id: 'profile', label: 'Links & Profile', icon: Globe },
            { id: 'inquiries', label: 'Inquiries CRM', icon: Mail, badge: newInquiriesCount > 0 ? `${newInquiriesCount} new` : null, badgeColor: 'bg-[#f59e0b] text-black' },
            { id: 'settings', label: 'Data Backup', icon: Database }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#f59e0b] text-black shadow-lg shadow-[#f59e0b]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`px-2 py-0.5 text-[10px] font-mono rounded-full font-bold ${
                    tab.badgeColor ? tab.badgeColor : isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Quick Actions Panel */}
              <div className="bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white font-serif-title flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#f59e0b]" /> Quick Actions
                </h3>
                <p className="text-xs text-slate-400">
                  Manage G Alphaa's digital footprint instantly across all pages.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => { setEditingSong(null); setIsSongModalOpen(true); }}
                    className="w-full flex items-center justify-between p-3.5 bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 rounded-xl text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#22c55e]/10 text-[#22c55e] rounded-lg">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Add New Song</span>
                    </div>
                    <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
                  </button>

                  <button
                    onClick={() => { setEditingPoem(null); setIsPoemModalOpen(true); }}
                    className="w-full flex items-center justify-between p-3.5 bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 rounded-xl text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#a855f7]/10 text-[#a855f7] rounded-lg">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Add New Poem</span>
                    </div>
                    <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
                  </button>

                  <button
                    onClick={() => exportData()}
                    className="w-full flex items-center justify-between p-3.5 bg-[#161622] hover:bg-[#1f1f2e] border border-white/10 rounded-xl text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-lg">
                        <Download className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Backup Catalog (JSON)</span>
                    </div>
                    <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
                  </button>
                </div>
              </div>

              {/* Recent Inquiries List */}
              <div className="lg:col-span-2 bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-lg font-bold text-white font-serif-title flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#3b82f6]" /> Recent Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs font-semibold text-[#f59e0b] hover:underline"
                  >
                    View All ({inquiries.length})
                  </button>
                </div>

                {inquiries.length === 0 ? (
                  <p className="text-xs text-slate-500 py-8 text-center">No inquiries submitted yet.</p>
                ) : (
                  <div className="space-y-3">
                    {inquiries.slice(0, 3).map((inq) => (
                      <div
                        key={inq.id}
                        onClick={() => { setSelectedInquiry(inq); setActiveTab('inquiries'); }}
                        className="p-4 bg-[#14141d] hover:bg-[#1a1a26] border border-white/5 hover:border-white/20 rounded-xl transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{inq.name}</span>
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md ${
                              inq.status === 'NEW' ? 'bg-[#f59e0b] text-black' :
                              inq.status === 'CONTACTED' ? 'bg-[#3b82f6]/20 text-[#3b82f6]' :
                              'bg-slate-800 text-slate-400'
                            }`}>
                              {inq.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">{inq.subject} — {inq.projectType}</p>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: SONGS CATALOG */}
        {activeTab === 'songs' && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0f0f15] border border-white/10 rounded-2xl p-4">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={songSearch}
                  onChange={(e) => setSongSearch(e.target.value)}
                  placeholder="Search by title or artist..."
                  className="w-full bg-[#161622] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {['ALL', 'RELEASED', 'UNRELEASED', 'FEATURED'].map(f => (
                  <button
                    key={f}
                    onClick={() => setSongFilter(f)}
                    className={`px-3 py-1.5 text-[11px] font-bold tracking-wider rounded-lg transition-colors cursor-pointer ${
                      songFilter === f
                        ? 'bg-[#f59e0b] text-black'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Add Song Button */}
              <button
                onClick={() => { setEditingSong(null); setIsSongModalOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Song</span>
              </button>

            </div>

            {/* Songs Table */}
            <div className="bg-[#0f0f15] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#14141d] text-slate-400 uppercase tracking-widest text-[10px] border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4">Track Details</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Featured</th>
                      <th className="py-3.5 px-4">Credits</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredSongs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-500">
                          No songs found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredSongs.map((song) => {
                        const isReleased = song.status === 'RELEASED';
                        return (
                          <tr key={song.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={song.thumbnail || '/images/hero.png'}
                                  alt={song.title}
                                  className="w-10 h-10 rounded-lg object-cover border border-white/10 bg-slate-900"
                                  onError={(e) => { e.target.src = '/images/hero.png'; }}
                                />
                                <div>
                                  <p className="font-bold text-white text-sm">{song.title}</p>
                                  <p className="text-[11px] text-slate-400">{song.artist}</p>
                                </div>
                              </div>
                            </td>

                            <td className="py-3.5 px-4">
                              <button
                                onClick={() => toggleSongStatus(song.id)}
                                title="Click to toggle Released / Unreleased"
                                className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border cursor-pointer transition-colors ${
                                  isReleased
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
                                }`}
                              >
                                {song.status}
                              </button>
                            </td>

                            <td className="py-3.5 px-4">
                              {isReleased ? (
                                <button
                                  onClick={() => toggleSongFeatured(song.id)}
                                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                    song.featured
                                      ? 'text-[#f59e0b] bg-[#f59e0b]/10'
                                      : 'text-slate-600 hover:text-slate-400'
                                  }`}
                                  title="Toggle Showcase Featured Status"
                                >
                                  <Star className={`w-4 h-4 ${song.featured ? 'fill-[#f59e0b]' : ''}`} />
                                </button>
                              ) : (
                                <span className="text-slate-600 text-[10px]">—</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4">
                              <span className="text-[11px] text-slate-400">
                                {song.credits?.writtenBy ? `Lyrics: ${song.credits.writtenBy}` : 'G Alphaa'}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => { setEditingSong(song); setIsSongModalOpen(true); }}
                                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                  title="Edit Song"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => {
                                    if (confirm(`Are you sure you want to delete "${song.title}"?`)) {
                                      deleteSong(song.id);
                                    }
                                  }}
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                                  title="Delete Song"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: POETRY & SHAYARI */}
        {activeTab === 'poetry' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0f0f15] border border-white/10 rounded-2xl p-4">
              
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={poemSearch}
                  onChange={(e) => setPoemSearch(e.target.value)}
                  placeholder="Search poetry by title or verse..."
                  className="w-full bg-[#161622] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <button
                onClick={() => { setEditingPoem(null); setIsPoemModalOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Poem</span>
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPoems.map((poem) => (
                <div key={poem.id} className="bg-[#0f0f15] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30 text-[10px] font-bold rounded-md uppercase">
                        {poem.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{poem.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white font-serif-title">{poem.title}</h4>
                    <p className="text-xs text-slate-400 italic line-clamp-3">"{poem.excerpt || poem.fullPoem}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[11px] text-slate-500">
                      {poem.audioRecitation ? '🎙️ Recitation Audio Attached' : 'Text Only'}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setEditingPoem(poem); setIsPoemModalOpen(true); }}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete poem "${poem.title}"?`)) {
                            deletePoem(poem.id);
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LINKS & PROFILE */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {profileSuccessMsg && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-xl flex items-center justify-between">
                <span>{profileSuccessMsg}</span>
                <button onClick={() => setProfileSuccessMsg('')} className="text-emerald-400">✕</button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Artist Biography Form */}
              <div className="bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white font-serif-title flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#f59e0b]" /> Artist Profile & Bio
                </h3>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Artist Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.artistName || 'G Alphaa'}
                    onChange={(e) => setProfileForm({ ...profileForm, artistName: e.target.value })}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Hero Headline
                  </label>
                  <input
                    type="text"
                    value={profileForm.headline || ''}
                    onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Short Bio (Displayed on About page)
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.shortBio || ''}
                    onChange={(e) => setProfileForm({ ...profileForm, shortBio: e.target.value })}
                    className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    updateArtistProfile(profileForm);
                    setProfileSuccessMsg('Artist profile updated successfully!');
                    setTimeout(() => setProfileSuccessMsg(''), 3000);
                  }}
                  className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Save Profile Changes
                </button>
              </div>

              {/* Streaming & Social Links Form */}
              <div className="bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white font-serif-title flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-[#3b82f6]" /> Social & Streaming Platform URLs
                </h3>

                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                  {Object.keys(linksForm).map((platformKey) => (
                    <div key={platformKey}>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {platformKey} URL
                      </label>
                      <input
                        type="text"
                        value={linksForm[platformKey] || ''}
                        onChange={(e) => setLinksForm({ ...linksForm, [platformKey]: e.target.value || null })}
                        placeholder={`https://${platformKey}.com/...`}
                        className="w-full bg-[#161622] border border-white/10 rounded-xl px-4 py-2 text-white text-xs focus:outline-none focus:border-[#3b82f6]"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    updateSocialLinks(linksForm);
                    setProfileSuccessMsg('Social & Platform links updated successfully!');
                    setTimeout(() => setProfileSuccessMsg(''), 3000);
                  }}
                  className="px-5 py-2.5 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Save Platform Links
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: INQUIRIES CRM */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0f0f15] border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 uppercase font-semibold">Filter Status:</span>
              </div>
              <div className="flex items-center gap-2">
                {['ALL', 'NEW', 'CONTACTED', 'CLOSED'].map(status => (
                  <button
                    key={status}
                    onClick={() => setInquiryFilter(status)}
                    className={`px-3 py-1.5 text-[11px] font-bold tracking-wider rounded-lg transition-colors cursor-pointer ${
                      inquiryFilter === status
                        ? 'bg-[#3b82f6] text-white'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0f0f15] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#14141d] text-slate-400 uppercase tracking-widest text-[10px] border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4">Contact Person</th>
                      <th className="py-3.5 px-4">Project / Subject</th>
                      <th className="py-3.5 px-4">Budget Range</th>
                      <th className="py-3.5 px-4">Date Submitted</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500">
                          No inquiries found.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-4">
                            <div>
                              <p className="font-bold text-white text-sm">{inq.name}</p>
                              <p className="text-[11px] text-slate-400">{inq.email}</p>
                              {inq.phone && <p className="text-[10px] text-slate-500">{inq.phone}</p>}
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <p className="font-semibold text-slate-200">{inq.subject || 'General Inquiry'}</p>
                            <p className="text-[11px] text-slate-400">{inq.projectType}</p>
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="font-mono text-slate-300">{inq.budget || 'Not specified'}</span>
                          </td>

                          <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={inq.status}
                              onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                              className={`px-2 py-1 text-[10px] font-bold rounded-lg border focus:outline-none ${
                                inq.status === 'NEW' ? 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30' :
                                inq.status === 'CONTACTED' ? 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30' :
                                'bg-slate-800 text-slate-400 border-slate-700'
                              }`}
                            >
                              <option value="NEW">NEW</option>
                              <option value="CONTACTED">CONTACTED</option>
                              <option value="CLOSED">CLOSED</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedInquiry(inq)}
                                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                title="View Message Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`Delete inquiry lead from ${inq.name}?`)) {
                                    deleteInquiry(inq.id);
                                  }
                                }}
                                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
                                title="Delete Inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DATA BACKUP & RESTORE */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl space-y-6">
            <div className="bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white font-serif-title flex items-center gap-2">
                <Database className="w-5 h-5 text-[#f59e0b]" /> Catalog Backup & Restore
              </h3>
              <p className="text-xs text-slate-400">
                Safeguard all song metadata, poetry, platform links, and inquiry leads. Download a single JSON backup file or restore from a previous backup.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => exportData()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Backup JSON</span>
                </button>

                <label className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all">
                  <Upload className="w-4 h-4 text-[#3b82f6]" />
                  <span>Import JSON Backup</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Reset Factory Defaults
              </h4>
              <p className="text-xs text-slate-400">
                This action will wipe all custom edits stored in LocalStorage and restore original catalog datasets.
              </p>

              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all data back to original defaults? This cannot be undone unless you have a backup.')) {
                    resetData();
                    alert('Data reset to original defaults.');
                  }
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reset All Data</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* MODALS */}
      {isSongModalOpen && (
        <SongFormModal
          song={editingSong}
          onClose={() => { setIsSongModalOpen(false); setEditingSong(null); }}
          onSave={(songData) => saveSong(songData)}
        />
      )}

      {isPoemModalOpen && (
        <PoetryFormModal
          poem={editingPoem}
          onClose={() => { setIsPoemModalOpen(false); setEditingPoem(null); }}
          onSave={(poemData) => savePoem(poemData)}
        />
      )}

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0f0f15] border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white font-serif-title">Inquiry Details</h3>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 font-semibold uppercase">Client Name:</span>
                <p className="text-sm font-bold text-white mt-0.5">{selectedInquiry.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-500 font-semibold uppercase">Email:</span>
                  <p className="text-slate-200 mt-0.5">{selectedInquiry.email}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold uppercase">Phone:</span>
                  <p className="text-slate-200 mt-0.5">{selectedInquiry.phone || 'N/A'}</p>
                </div>
              </div>

              <div>
                <span className="text-slate-500 font-semibold uppercase">Project / Subject:</span>
                <p className="text-slate-200 font-semibold mt-0.5">{selectedInquiry.subject}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-500 font-semibold uppercase">Timeline:</span>
                  <p className="text-slate-300 mt-0.5">{selectedInquiry.timeline}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold uppercase">Budget:</span>
                  <p className="text-[#f59e0b] font-mono mt-0.5">{selectedInquiry.budget}</p>
                </div>
              </div>

              <div>
                <span className="text-slate-500 font-semibold uppercase">Message:</span>
                <p className="p-3 bg-[#161622] border border-white/5 rounded-xl text-slate-200 mt-1 leading-relaxed">
                  {selectedInquiry.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={`mailto:${selectedInquiry.email}?subject=Re: ${encodeURIComponent(selectedInquiry.subject || 'G Alphaa Inquiry')}`}
                className="px-4 py-2 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Reply via Email
              </a>

              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-2 text-slate-400 hover:text-white text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
