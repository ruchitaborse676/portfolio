import React, { useState } from 'react';
import { Sparkles, Mail, MapPin, Github, Linkedin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';
import { CrystalDecoration } from './CrystalDecoration';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending / prepare mailto link
    const mailtoUrl = `mailto:${portfolioProfile.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="flower"
        size="lg"
        className="absolute top-10 -right-16 lg:right-6 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="cluster"
        size="md"
        className="absolute bottom-10 -left-12 lg:left-6 pointer-events-none -z-10"
        opacity={0.32}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a question, an internship opportunity, or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 shadow-sm border border-white/90 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${portfolioProfile.email}`}
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                  >
                    {portfolioProfile.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & College Card */}
            <div className="glass-panel-subtle rounded-3xl p-6 border border-blue-100 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Academic Campus & Location
                  </span>
                  <p className="text-xs text-slate-600">
                    {portfolioProfile.college}
                  </p>
                  <p className="text-xs text-slate-500">
                    {portfolioProfile.collegeLocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="glass-panel-subtle rounded-3xl p-6 border border-blue-100 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block text-slate-500">
                Professional Links
              </span>

              <div className="space-y-2">
                <a
                  href={portfolioProfile.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/80 hover:bg-blue-50/80 border border-slate-200/70 hover:border-blue-200 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors block">
                        LinkedIn Profile
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Connect with Ruchita Borse
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </a>

                <a
                  href={portfolioProfile.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/80 hover:bg-blue-50/80 border border-slate-200/70 hover:border-blue-200 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-800 group-hover:text-blue-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors block">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] text-slate-400">
                        View repositories and code
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-7 sm:p-9 shadow-lg shadow-blue-500/5 border border-white/90">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below to initiate an email to Ruchita Borse.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your default email client has been prepared with your message.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Your Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Your Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Ruchita, I came across your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
