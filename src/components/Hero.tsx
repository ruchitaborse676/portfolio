import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, FileText, MapPin, Sparkles } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenAssistant: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssistant, onOpenResumeModal }) => {
  // Rotating animated role phrases from centralized portfolio data
  const rolePhrases = portfolioProfile.roles;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // If reduced motion is requested, rotate text smoothly without rapid typing/deleting
      setDisplayedText(rolePhrases[currentPhraseIndex]);
      const timer = setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % rolePhrases.length);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const currentFullText = rolePhrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        // Finished typing full phrase, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 32);
      } else {
        // Finished deleting, transition to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % rolePhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, prefersReducedMotion]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient icy blue glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-50/70 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Student & College Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-xs backdrop-blur-md text-xs sm:text-sm font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{portfolioProfile.badge}</span>
            </div>

            {/* Location Subtitle */}
            <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-blue-700 uppercase">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{portfolioProfile.location}</span>
            </div>

            {/* Main Name Heading - STRICT SINGLE LINE */}
            <div className="w-full overflow-visible">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold tracking-tight text-[#0a192f] font-display whitespace-nowrap leading-tight">
                Ruchita Borse
              </h1>
            </div>

            {/* Animated Rotating Role Subtitle - FIXED HEIGHT TO PREVENT CONTENT JUMP */}
            <div className="h-9 sm:h-10 lg:h-11 flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 font-semibold text-lg sm:text-xl lg:text-2xl tracking-normal">
                {displayedText}
              </span>
              {!prefersReducedMotion && (
                <span className="inline-block w-0.5 h-5 sm:h-6 lg:h-7 bg-blue-600 ml-1.5 animate-pulse shadow-xs shadow-blue-400" />
              )}
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              {portfolioProfile.bioIntro}
            </p>

            {/* Skill Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              {portfolioProfile.heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50/90 text-blue-700 border border-blue-200/70 shadow-2xs hover:bg-blue-100/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              {/* Primary: Explore Work */}
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 active:scale-95 cursor-pointer group"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Contact Me */}
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-medium text-slate-700 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:border-blue-200 hover:text-blue-700 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </button>

              {/* Resume Button */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-medium text-slate-700 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:border-blue-200 hover:text-blue-700 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Crystal Sculpture & Profile Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Layered Translucent Blue Crystal Sculpture Composition */}
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Layer 1: Ambient Glowing Crystal Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-300/40 via-sky-200/50 to-blue-400/30 blur-2xl transform scale-110 animate-pulse pointer-events-none" />

              {/* Layer 2: Original Extracted Crystal Petals Sculpture Background */}
              <div 
                className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain pointer-events-none opacity-90 scale-110 sm:scale-125"
                style={{
                  backgroundImage: `url('/crystal-sculpture.png')`,
                  filter: 'drop-shadow(0 15px 30px rgba(37,99,235,0.25))'
                }}
              />

              {/* Layer 3: Dynamic Translucent Glass Crystal Petals (SVG + CSS Caustics) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_60s_linear_infinite] opacity-60"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="crystalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="crystalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Layered Crystal Petals */}
                <ellipse cx="200" cy="80" rx="45" ry="75" transform="rotate(0 200 80)" fill="url(#crystalGrad1)" />
                <ellipse cx="285" cy="115" rx="45" ry="75" transform="rotate(30 285 115)" fill="url(#crystalGrad2)" />
                <ellipse cx="320" cy="200" rx="45" ry="75" transform="rotate(60 320 200)" fill="url(#crystalGrad1)" />
                <ellipse cx="285" cy="285" rx="45" ry="75" transform="rotate(120 285 285)" fill="url(#crystalGrad2)" />
                <ellipse cx="200" cy="320" rx="45" ry="75" transform="rotate(180 200 320)" fill="url(#crystalGrad1)" />
                <ellipse cx="115" cy="285" rx="45" ry="75" transform="rotate(240 115 285)" fill="url(#crystalGrad2)" />
                <ellipse cx="80" cy="200" rx="45" ry="75" transform="rotate(300 80 200)" fill="url(#crystalGrad1)" />
                <ellipse cx="115" cy="115" rx="45" ry="75" transform="rotate(330 115 115)" fill="url(#crystalGrad2)" />
              </svg>

              {/* Layer 4: Foreground Profile Card */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] rounded-3xl bg-white/95 backdrop-blur-xl border border-white/90 shadow-2xl p-3 sm:p-3.5 transition-transform duration-300 hover:scale-[1.01] group">
                
                {/* Photo Frame Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/4.5] shadow-xs">
                  <img
                    src="/profile.jpg"
                    alt="Ruchita Borse"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-white/20 pointer-events-none" />
                </div>

                {/* Bottom Card Footer Banner */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      {portfolioProfile.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium">
                      CSE Student @ SVKM
                    </p>
                  </div>

                  {/* Floating Portfolio Assistant Interactive Badge */}
                  <button
                    onClick={onOpenAssistant}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 shadow-2xs transition-all duration-200 active:scale-95 cursor-pointer group/btn"
                    title="Chat with Ruchita's Assistant"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                    <span>Portfolio Assistant</span>
                    <Sparkles className="w-3 h-3 text-blue-600 group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
