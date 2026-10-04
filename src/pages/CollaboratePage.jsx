import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, ShieldCheck, Sparkles, Film, Music, Feather, Building2, Key } from 'lucide-react';

export const CollaboratePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Songwriting',
    projectDetails: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { title: 'Songwriting', icon: Feather, desc: 'Original Hindustani lyrics & melodic songwriting' },
    { title: 'Lyrics', icon: Feather, desc: 'Custom Shayari, nazms, and song lyrics' },
    { title: 'Composition', icon: Music, desc: 'Acoustic, vocal, and orchestral composition' },
    { title: 'Music Production', icon: Sparkles, desc: 'Full track arrangements & sound design' },
    { title: 'Artist Collaboration', icon: Briefcase, desc: 'Duets, co-writing, and feature tracks' },
    { title: 'Film / Web Series Music', icon: Film, desc: 'Original soundtracks & background compositions' },
    { title: 'Commercial Music', icon: Building2, desc: 'Brand anthems and commercial themes' },
    { title: 'Custom Composition', icon: Music, desc: 'Bespoke compositions for specialized projects' },
    { title: 'Licensing', icon: Key, desc: 'Master and publishing rights licensing' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CREATIVE & COMMERCIAL PARTNERSHIPS</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          COLLABORATE
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "Creating together for stories that resonate."
        </p>

        <p className="text-base text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          Professional inquiries for original music, songwriting, film placements, and exclusive composition licensing.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]">
            CREATIVE SERVICES
          </span>
          <h2 className="font-serif-title text-2xl font-bold text-white mt-1">
            Areas of Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                onClick={() => setFormData({ ...formData, inquiryType: srv.title })}
                className="cinematic-card p-5 cursor-pointer space-y-2 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-3xl mx-auto bg-[#0d0e14] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {submitted ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] text-[#f59e0b] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-3xl font-bold text-white">
              Inquiry Sent Successfully
            </h3>
            <p className="text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to G Alphaa. Your inquiry regarding <strong className="text-white">"{formData.inquiryType}"</strong> has been transmitted. We will review your proposal and respond promptly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary text-xs py-2.5 px-6 rounded-full mt-4"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="font-serif-title text-2xl font-bold text-white">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1">
                Fill in the details of your proposal, project timeline, or licensing requirements.
              </p>
            </div>

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
                  <label className="block text-[#94a3b8] font-medium mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Production House / Studio / Agency"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Inquiry Type *</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  >
                    {services.map((s, idx) => (
                      <option key={idx} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Project Details / Working Title</label>
                  <input
                    type="text"
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="e.g. Indie Feature Film Score"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#94a3b8] font-medium mb-1">Budget Range (Optional)</label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. Project Budget Range"
                    className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Message & Creative Brief *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your story, music needs, timeline, or licensing vision..."
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[11px] text-[#64748b]">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                  <span>Strict Professional Privacy Assured</span>
                </div>
                <button
                  type="submit"
                  className="btn-primary text-xs py-3 px-8"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Proposal</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>

    </div>
  );
};
