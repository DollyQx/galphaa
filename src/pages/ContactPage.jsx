import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';
import { SOCIAL_LINKS } from '../data/musicData';

export const ContactPage = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 container-custom space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#f59e0b] uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>OFFICIAL MANAGEMENT & CONTACT</span>
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-bold text-white tracking-tight">
          GET IN TOUCH
        </h1>

        <p className="font-handwriting text-2xl text-[#fcd34d]">
          "Connect with G Alphaa"
        </p>

        <p className="text-base text-[#94a3b8] max-w-xl mx-auto font-light leading-relaxed">
          For management inquiries, media features, performance bookings, or general messages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        
        {/* Left Contact & Social Info */}
        <div className="lg:col-span-5 space-y-6 bg-[#0d0e14] p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-serif-title text-2xl font-bold text-white border-l-2 border-[#f59e0b] pl-3">
              Official Channels
            </h3>
            
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Connect directly through official platforms or submit your message using the form.
            </p>

            <div className="space-y-4">
              
              {/* YouTube Channel */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#dc2626] hover:bg-[#dc2626]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#dc2626]/20 text-[#dc2626] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <YouTubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">YouTube Official</h4>
                  <p className="text-[11px] text-[#94a3b8]">@GAlphaaMusic/videos</p>
                </div>
              </a>

              {/* Digital Representation */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Official Portfolio</h4>
                  <p className="text-[11px] text-[#94a3b8]">G Alphaa Digital Presence</p>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-xs text-[#64748b]">
            <p>© {new Date().getFullYear()} G Alphaa Management. Confidentiality respected.</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 bg-[#0d0e14] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          
          {submitted ? (
            <div className="text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] text-[#f59e0b] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-white">
                Message Sent
              </h3>
              <p className="text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                Thank you for contacting G Alphaa. Your message has been received and logged.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary text-xs py-2 px-6 rounded-full mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h3 className="font-serif-title text-2xl font-bold text-white mb-4">
                Send a Direct Message
              </h3>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={contactData.subject}
                  onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                  placeholder="Subject of message"
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#94a3b8] font-medium mb-1">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-[#070709] border border-white/10 rounded-xl p-3 text-white focus:border-[#f59e0b] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs py-3.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
