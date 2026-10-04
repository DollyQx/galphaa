import React, { useState } from 'react';
import { X, Feather, Upload, Image as ImageIcon } from 'lucide-react';

export const PoetryFormModal = ({ poem, onClose, onSave }) => {
  const isEditing = !!poem;

  const [formData, setFormData] = useState(() => {
    if (poem) {
      return {
        id: poem.id || `p-${Date.now()}`,
        title: poem.title || '',
        category: poem.category || 'Shayari / Nazm',
        date: poem.date || new Date().getFullYear().toString(),
        excerpt: poem.excerpt || '',
        fullPoem: poem.fullPoem || '',
        audioRecitation: poem.audioRecitation || '',
        artwork: poem.artwork || '/images/poetry.png'
      };
    }
    return {
      id: `p-${Date.now()}`,
      title: '',
      category: 'Shayari / Nazm',
      date: new Date().getFullYear().toString(),
      excerpt: '',
      fullPoem: '',
      audioRecitation: '',
      artwork: '/images/poetry.png'
    };
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, artwork: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.fullPoem.trim()) {
      alert('Poem Title and Full Poem text are required.');
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0f0f15] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#14141d]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#f59e0b]/10 text-[#f59e0b] rounded-xl border border-[#f59e0b]/20">
              <Feather className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif-title">
                {isEditing ? 'Edit Poetry / Shayari' : 'Add New Poetry'}
              </h3>
              <p className="text-xs text-slate-400">
                Manage Hindustani poetry, ghazals, verses, and recitation recordings.
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                Poetry Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Khamoshi Ki Aawaz"
                className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                Category / Style
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
              >
                <option value="Shayari / Nazm">Shayari / Nazm</option>
                <option value="Ghazal Verses">Ghazal Verses</option>
                <option value="Nazm">Nazm</option>
                <option value="Poetic Thought">Poetic Thought</option>
                <option value="Couplet (Sher)">Couplet (Sher)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
              Short Excerpt (Displayed on Cards)
            </label>
            <input
              type="text"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="e.g. Kuch baatein honton par aa ke thehar jaati hain..."
              className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
              Full Poetry Text *
            </label>
            <textarea
              rows={6}
              value={formData.fullPoem}
              onChange={(e) => setFormData({ ...formData, fullPoem: e.target.value })}
              placeholder="Write or paste full verses here..."
              className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b] font-serif leading-relaxed"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                Recitation Audio Link (MP3/SoundCloud/Drive)
              </label>
              <input
                type="text"
                value={formData.audioRecitation || ''}
                onChange={(e) => setFormData({ ...formData, audioRecitation: e.target.value })}
                placeholder="https://..."
                className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                Artwork / Background Image URL
              </label>
              <input
                type="text"
                value={formData.artwork}
                onChange={(e) => setFormData({ ...formData, artwork: e.target.value })}
                placeholder="/images/poetry.png"
                className="w-full bg-[#181822] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#f59e0b]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
              Or Upload Custom Artwork File
            </label>
            <label className="flex items-center justify-center gap-2 border border-dashed border-white/20 hover:border-[#f59e0b] bg-[#181822] py-3 rounded-lg cursor-pointer text-slate-300 hover:text-white transition-colors">
              <Upload className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-xs font-semibold">Choose Image File</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
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
              {isEditing ? 'Save Poetry' : 'Create Poetry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
