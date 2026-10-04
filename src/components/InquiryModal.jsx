import React, { useState } from 'react';
import { X, Send, CheckCircle2, Lock, ShieldCheck, Briefcase } from 'lucide-react';

export const InquiryModal = ({ initialSubject = '', onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Exclusive Licensing',
    projectDetails: initialSubject || '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070709]/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      <div className="relative w-full max-w-xl bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#070709]/70 text-white hover:text-[#f59e0b] flex items-center justify-center border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] text-[#f59e0b] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-white">
              Inquiry Submitted
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-md mx-auto">
              Thank you for reaching out to G ALPHA. Your inquiry regarding <strong className="text-white">"{formData.projectDetails || formData.inquiryType}"</strong> has been logged. Our management team will review your proposal promptly.
            </p>
            <button
              onClick={onClose}
              className="btn-primary text-xs py-2.5 px-6 rounded-full mt-4"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-title text-xl font-bold text-white">
                  Professional Inquiry
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  Licensing · Film & Series Placements · Collaborations
                </p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] mb-6 pt-2 border-t border-white/10">
              For music labels, film producers, web-series creators, and production houses inquiring about compositions or unreleased tracks.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none"
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
                    className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Production House / Label / Studio"
                    className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Inquiry Type *</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none"
                  >
                    <option value="Exclusive Licensing">Exclusive Licensing</option>
                    <option value="Film / Web Series Placement">Film / Web Series Placement</option>
                    <option value="Artist Collaboration">Artist Collaboration</option>
                    <option value="Custom Composition">Custom Composition</option>
                    <option value="Release Partnership">Release Partnership</option>
                    <option value="Private Preview Request">Private Audio Preview Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Target Song / Project Title</label>
                <input
                  type="text"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="e.g. Unreleased Track Title or Film Title"
                  className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Project Details & Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, production scope, or private preview request..."
                  className="w-full bg-[#070709] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#f59e0b] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748b]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Strict Confidentiality Guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
