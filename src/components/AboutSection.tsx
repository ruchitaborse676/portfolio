import React from 'react';
import { BookOpen, Target, Sparkles, Terminal, Award, Laptop } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';
import { CrystalDecoration } from './CrystalDecoration';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Academic Dedication',
      description: 'Pursuing B.Tech / B.E. in Computer Science & Engineering at SVKM College of Engineering, Shirpur.',
      tag: 'B.Tech CSE (2023 - 2027)'
    },
    {
      icon: Terminal,
      title: 'Problem Solving & DSA',
      description: 'Actively practicing Data Structures & Algorithms and writing structured logic in C, C++, and Python.',
      tag: 'Logic & Algorithms'
    },
    {
      icon: Laptop,
      title: 'Modern Web Development',
      description: 'Building clean, responsive front-end user interfaces using HTML5, CSS3, Tailwind CSS, and React.',
      tag: 'Web Experiences'
    },
    {
      icon: Sparkles,
      title: 'Continuous Growth',
      description: 'Exploring modern developer tooling, database optimization, and practical AI applications.',
      tag: 'Always Learning'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="flower"
        size="lg"
        className="absolute -top-16 -right-16 sm:-right-8 pointer-events-none -z-10"
        opacity={0.4}
      />
      <CrystalDecoration
        variant="cluster"
        size="md"
        className="absolute -bottom-12 -left-12 sm:left-4 pointer-events-none -z-10"
        opacity={0.35}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineering student, developer at heart, and continuous learner focused on software excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Bio card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 shadow-lg shadow-blue-500/5 border border-white/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>Hello, I'm</span>
                <span className="text-blue-600">{portfolioProfile.name}</span>
              </h3>
              
              {portfolioProfile.bioFull.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Academic Snapshot badges */}
            <div className="pt-6 border-t border-blue-100/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">Degree</span>
                <span className="text-sm font-bold text-slate-800">B.Tech / B.E. CSE</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">Institution</span>
                <span className="text-sm font-bold text-slate-800">SVKM CoE, Shirpur</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">Graduation</span>
                <span className="text-sm font-bold text-slate-800">2027 (Expected)</span>
              </div>
            </div>
          </div>

          {/* Right: Pillars & Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel-subtle rounded-2xl p-5 border border-blue-100/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        {item.description}
                      </p>
                      <span className="inline-block pt-1 text-[11px] font-semibold text-blue-600">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
