import React, { useState } from 'react';
import { X, Upload, Music, Link as LinkIcon, Image as ImageIcon, UserCheck } from 'lucide-react';

export const SongFormModal = ({ song, onClose, onSave }) => {
  const isEditing = !!song;
  const [activeTab, setActiveTab] = useState('details');

  const [formData, setFormData] = useState(() => {
    if (song) {
      return {
        id: song.id || `song-${Date.now()}`,
        title: song.title || '',
        artist: song.artist || 'G Alphaa',
        status: song.status || 'RELEASED',
        featured: !!song.featured,
        thumbnail: song.thumbnail || '/images/hero.png',
        youtubeUrl: song.youtubeUrl || '',
        spotifyUrl: song.spotifyUrl || '',
        appleMusicUrl: song.appleMusicUrl || '',
        youtubeMusicUrl: song.youtubeMusicUrl || '',
        anghamiUrl: song.anghamiUrl || '',
        jioSaavnUrl: song.jioSaavnUrl || '',
        wynkUrl: song.wynkUrl || '',
        amazonMusicUrl: song.amazonMusicUrl || '',
        youtubeEmbedId: song.youtubeEmbedId || '',
        duration: song.duration || '',
        releaseDate: song.releaseDate || '',
        description: song.description || '',
        credits: {
          writtenBy: song.credits?.writtenBy || 'G Alphaa',
          composedBy: song.credits?.composedBy || 'G Alphaa',
          performedBy: song.credits?.performedBy || 'G Alphaa',
          producedBy: song.credits?.producedBy || '',
        }
      };
    }
    return {
      id: `song-${Date.now()}`,
      title: '',
      artist: 'G Alphaa',
      status: 'RELEASED',
      featured: false,
      thumbnail: '/images/hero.png',
      youtubeUrl: '',
      spotifyUrl: '',
      appleMusicUrl: '',
      youtubeMusicUrl: '',
      anghamiUrl: '',
      jioSaavnUrl: '',
      wynkUrl: '',
      amazonMusicUrl: '',
      youtubeEmbedId: '',
      duration: '',
      releaseDate: '',
      description: '',
      credits: {
        writtenBy: 'G Alphaa',
        composedBy: 'G Alphaa',
        performedBy: 'G Alphaa',
        producedBy: ''
      }
    };
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, thumbnail: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Song Title is required');
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0f0f15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#14141d]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#f59e0b]/10 text-[#f59e0b] rounded-xl border border-[#f59e0b]/20">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif-title">
                {isEditing ? 'Edit Song Details' : 'Add New Song'}
              </h3>
              <p className="text-xs text-slate-400">
                Update catalog metadata, artwork, and streaming platform URLs.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#0a0a0f] px-6 gap-2 overflow-x-auto">
          {[
            { id: 'details', label: 'Overview', icon: Music },
            { id: 'platforms', label: 'Streaming Links', icon: LinkIcon },
            { id: 'artwork', label: 'Artwork & Media', icon: ImageIcon },
            { id: 'credits', label: 'Credits & Rights', icon: UserCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-colors border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-[#f59e0b] text-[#f59e0b] bg-white/5'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. HAWA BHI GUZRE NA"
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Primary Artist
                  </label>
                  <input
                    type="text"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Catalog Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                  >
                    <option value="RELEASED">RELEASED</option>
                    <option value="UNRELEASED">UNRELEASED</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Duration (e.g. 3:45)
                  </label>
                  <input
                    type="text"
                    value={formData.duration || ''}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g. 3:42"
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Release Date
                  </label>
                  <input
                    type="text"
                    value={formData.releaseDate || ''}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    placeholder="e.g. Oct 2025"
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 accent-[#f59e0b] rounded"
                />
                <label htmlFor="featuredToggle" className="text-sm font-medium text-slate-200 cursor-pointer">
                  Feature this song on Home Showcase Hero section
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Song Description / Story Behind The Track
                </label>
                <textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the emotional inspiration, musical genre, or narrative..."
                  className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: STREAMING LINKS */}
          {activeTab === 'platforms' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Provide custom platform links. If left empty, the site will automatically generate search fallbacks for users.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#dc2626] uppercase tracking-wider mb-1">
                    YouTube Video URL
                  </label>
                  <input
                    type="url"
                    value={formData.youtubeUrl || ''}
                    onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#dc2626]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#22c55e] uppercase tracking-wider mb-1">
                    Spotify URL
                  </label>
                  <input
                    type="url"
                    value={formData.spotifyUrl || ''}
                    onChange={(e) => setFormData({ ...formData, spotifyUrl: e.target.value })}
                    placeholder="https://open.spotify.com/track/..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#22c55e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#f43f5e] uppercase tracking-wider mb-1">
                    Apple Music URL
                  </label>
                  <input
                    type="url"
                    value={formData.appleMusicUrl || ''}
                    onChange={(e) => setFormData({ ...formData, appleMusicUrl: e.target.value })}
                    placeholder="https://music.apple.com/..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#f43f5e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#ff0000] uppercase tracking-wider mb-1">
                    YouTube Music URL
                  </label>
                  <input
                    type="url"
                    value={formData.youtubeMusicUrl || ''}
                    onChange={(e) => setFormData({ ...formData, youtubeMusicUrl: e.target.value })}
                    placeholder="https://music.youtube.com/..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#ff0000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#00d285] uppercase tracking-wider mb-1">
                    JioSaavn URL
                  </label>
                  <input
                    type="url"
                    value={formData.jioSaavnUrl || ''}
                    onChange={(e) => setFormData({ ...formData, jioSaavnUrl: e.target.value })}
                    placeholder="https://www.jiosaavn.com/..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#00d285]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#e11d48] uppercase tracking-wider mb-1">
                    Wynk Music URL
                  </label>
                  <input
                    type="url"
                    value={formData.wynkUrl || ''}
                    onChange={(e) => setFormData({ ...formData, wynkUrl: e.target.value })}
                    placeholder="https://wynk.in/music/..."
                    className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#e11d48]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARTWORK & MEDIA */}
          {activeTab === 'artwork' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Artwork Image URL
                    </label>
                    <input
                      type="text"
                      value={formData.thumbnail}
                      onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                      placeholder="/images/hero.png or https://..."
                      className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Or Upload Image File
                    </label>
                    <label className="flex items-center justify-center gap-2 border border-dashed border-white/20 hover:border-[#f59e0b] bg-[#181822] py-4 rounded-lg cursor-pointer text-slate-300 hover:text-white transition-colors">
                      <Upload className="w-5 h-5 text-[#f59e0b]" />
                      <span className="text-xs font-semibold">Choose Cover Image File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      YouTube Embed Video ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.youtubeEmbedId || ''}
                      onChange={(e) => setFormData({ ...formData, youtubeEmbedId: e.target.value })}
                      placeholder="e.g. dQw4w9WgXcQ"
                      className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#f59e0b]"
                    />
                  </div>
                </div>

                {/* Cover Preview */}
                <div className="flex flex-col items-center justify-center p-4 bg-[#14141d] border border-white/10 rounded-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Artwork Preview
                  </p>
                  <div className="w-44 h-44 rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a0a0f] flex items-center justify-center">
                    {formData.thumbnail ? (
                      <img
                        src={formData.thumbnail}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/images/hero.png'; }}
                      />
                    ) : (
                      <ImageIcon className="w-10 h-10 text-slate-600" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CREDITS */}
          {activeTab === 'credits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Written By / Lyricist
                </label>
                <input
                  type="text"
                  value={formData.credits.writtenBy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      credits: { ...formData.credits, writtenBy: e.target.value }
                    })
                  }
                  className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Composed By / Composer
                </label>
                <input
                  type="text"
                  value={formData.credits.composedBy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      credits: { ...formData.credits, composedBy: e.target.value }
                    })
                  }
                  className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Performed By / Singer
                </label>
                <input
                  type="text"
                  value={formData.credits.performedBy || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      credits: { ...formData.credits, performedBy: e.target.value }
                    })
                  }
                  className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Music Produced By
                </label>
                <input
                  type="text"
                  value={formData.credits.producedBy || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      credits: { ...formData.credits, producedBy: e.target.value }
                    })
                  }
                  placeholder="e.g. G Alphaa"
                  className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                />
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-black bg-[#f59e0b] hover:bg-[#d97706] rounded-lg transition-colors shadow-lg cursor-pointer"
            >
              {isEditing ? 'Save Changes' : 'Create Song'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
