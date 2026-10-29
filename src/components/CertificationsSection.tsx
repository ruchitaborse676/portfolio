import React, { useState } from 'react';
import { Sparkles, Award, Calendar, CheckCircle2, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types/portfolio';
import { CrystalDecoration } from './CrystalDecoration';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="prism"
        size="md"
        className="absolute top-8 -right-10 lg:right-8 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="flower"
        size="md"
        className="absolute bottom-10 -left-10 lg:left-4 pointer-events-none -z-10"
        opacity={0.35}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>CREDENTIALS & LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Certifications & <span className="text-blue-600">Coursework</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Structured learning credentials and academic coursework verified across engineering domains.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/90 hover:border-blue-200 flex flex-col justify-between group"
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                      cert.status === 'Completed'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-50/70 text-blue-700 border border-blue-100/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <ShieldCheck className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Credential Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-100">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Academic Credential
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 py-4 text-sm text-slate-600 border-y border-slate-100">
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Issuing Body:</span>
                <span className="font-semibold text-slate-800">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Timeline / Date:</span>
                <span className="font-semibold text-slate-800">{selectedCert.date}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Verification Status:</span>
                <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedCert.status}
                </span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 font-medium block mb-2">Validated Competencies:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
