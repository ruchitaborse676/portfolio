import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssistant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CERTIFICATIONS', href: '#certifications', id: 'certifications' },
    { name: 'RESUME', href: '#resume', id: 'resume' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-blue-100/70 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-3 h-3 rounded-full bg-blue-600 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform duration-200 animate-pulse" />
            <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
              {portfolioProfile.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 sm:gap-1.5 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-wider transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAssistant}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/70 transition-all duration-200 hover:shadow-xs cursor-pointer group"
              title="Open Portfolio Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span>Assistant</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-200 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAssistant}
              className="p-2 rounded-full text-blue-600 bg-blue-50 border border-blue-100"
              aria-label="Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-lg px-4 pt-3 pb-6 space-y-2 mt-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Ask Ruchita's Assistant</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
