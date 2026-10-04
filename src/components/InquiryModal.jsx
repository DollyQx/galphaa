import React, { useState } from 'react';
import { X, Send, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export const InquiryModal = ({ initialSubject = '', initialSong = '', onClose }) => {
  const { addInquiry } = useData();

  const [formData, setFormData] = useState({
    songTitle: initialSong || '',
    name: '',
    email: '',
    company: '',
    role: '',
    inquiryType: 'Private Preview',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Private Preview',
    'Licensing',
    'Film / Series',
    'Artist Collaboration',
    'Release Partnership',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return;

    // Persist to CRM LocalStorage data layer
    addInquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.company ? `Company: ${formData.company}` : '',
      subject: initialSubject || `Inquiry: ${formData.inquiryType}`,
      songTitle: formData.songTitle || null,
      projectType: formData.inquiryType,
      timeline: formData.role || 'Standard Timeline',
      budget: 'Unspecified',
      message: formData.message,
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070709]/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-xl bg-[#0d0e14] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/5 text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] text-[#f59e0b] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="font-serif-title text-2xl font-bold text-white tracking-wide">
              REQUEST RECEIVED & LOGGED
            </h3>
            
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
              Thank you. Your inquiry regarding {formData.songTitle ? <strong className="text-white">"{formData.songTitle}"</strong> : 'this composition'} has been logged into the artist CRM.
            </p>

            <p className="text-[11px] text-[#64748b]">
              Management will review your request and reach out directly.
            </p>

            <button
              onClick={onClose}
              className="btn-primary text-xs py-2.5 px-6 rounded-full mt-4 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dc2626]/20 text-[#fca5a5] border border-[#dc2626]/30 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Lock className="w-3 h-3" />
                <span>PRIVATE PREVIEW REQUEST</span>
              </div>

              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
                PRIVATE PREVIEW REQUEST
              </h2>
              
              {formData.songTitle && (
                <p className="text-xs text-[#f59e0b] font-semibold mt-1">
                  Selected work: <span className="text-white uppercase tracking-wide">{formData.songTitle}</span>
                </p>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Company / Label</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Studio / Record Label"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Producer / Music Supervisor / Artist"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Inquiry Type *</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none cursor-pointer"
                >
                  {inquiryTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your project, timeline, or licensing inquiry..."
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-4 h-4 rounded border-white/20 bg-[#070709] text-[#f59e0b] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="consentCheckbox" className="text-xs text-[#94a3b8] cursor-pointer">
                  I agree to be contacted regarding this inquiry.
                </label>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748b]">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                  <span>Strict Professional NDA Protection</span>
                </div>
                <button
                  type="submit"
                  disabled={!formData.consent}
                  className="btn-primary text-xs py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND REQUEST</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
