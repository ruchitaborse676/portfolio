import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCode, Image, Link, FileText } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <span>PORTFOLIO SETUP & CUSTOMIZATION GUIDE</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 pt-2">
            Personal Details & Asset Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            This guide outlines all verified details included in the portfolio and how to supply any future updates.
          </p>
        </div>

        {/* Checklist */}
        <div className="space-y-4 text-xs sm:text-sm">
          
          {/* Item 1: Profile Photo */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Original Photograph (/profile.jpg)</span>
            </div>
            <p className="text-slate-600 text-xs pl-6">
              Your exact original photo has been extracted and placed in <code className="bg-white px-1.5 py-0.5 rounded text-emerald-800 font-mono text-[11px]">public/profile.jpg</code> without any AI alterations or face substitutions. It is permanently bundled with your production build.
            </p>
          </div>

          {/* Item 2: Email */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Contact Email ({portfolioProfile.email})</span>
            </div>
            <p className="text-slate-600 text-xs pl-6">
              Confirmed and configured across the Hero, Resume, and Contact sections with one-click clipboard copying and direct mailto links.
            </p>
          </div>

          {/* Item 3: College & Degree */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SVKM College of Engineering, Shirpur (Graduation: 2027)</span>
            </div>
            <p className="text-slate-600 text-xs pl-6">
              Verified Computer Science and Engineering details, location (Shirpur, Maharashtra, India), and degree milestones are configured.
            </p>
          </div>

          {/* Item 4: Missing / Customizable Links */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Items You Can Easily Update Anytime:</span>
            </div>
            <div className="pl-6 space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <Link className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>LinkedIn & GitHub URLs:</strong> Set to placeholders in <code className="bg-white px-1 py-0.5 rounded font-mono text-blue-700">src/data/portfolioData.ts</code>. You can replace them with your exact usernames.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Resume File:</strong> A valid PDF template is available at <code className="bg-white px-1 py-0.5 rounded font-mono text-blue-700">public/Ruchita_Borse_Resume.pdf</code>. You can replace this file anytime with your updated university resume.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>New Projects or Certificates:</strong> Simply add new objects to <code className="bg-white px-1 py-0.5 rounded font-mono text-blue-700">projectsData</code> or <code className="bg-white px-1 py-0.5 rounded font-mono text-blue-700">certificationsData</code>.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            File path: src/data/portfolioData.ts
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
