import React from 'react';
import { ArrowUp, Heart, Sparkles, HelpCircle } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onOpenAssistant }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-blue-100 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-blue-100/70 items-center">
          
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                {portfolioProfile.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Computer Science Engineering Student at SVKM College of Engineering, Shirpur.
              Passionate about software engineering, problem solving, and building elegant web experiences.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Ask AI Assistant</span>
            </button>

            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Customization Guide</span>
            </button>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20 active:scale-95 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Ruchita Borse. Built with modern React, TypeScript & Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
