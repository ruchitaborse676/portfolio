import React from 'react';
import { Sparkles, Calendar, MapPin, CheckCircle2, GraduationCap, Award, Code2 } from 'lucide-react';
import { experienceItems } from '../data/portfolioData';
import { CrystalDecoration } from './CrystalDecoration';

export const ExperienceSection: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'activity':
        return <Award className="w-5 h-5 text-blue-600" />;
      case 'academic':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="cluster"
        size="md"
        className="absolute top-12 -left-10 lg:left-4 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="geode"
        size="md"
        className="absolute bottom-16 -right-10 lg:right-6 pointer-events-none -z-10"
        opacity={0.35}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Education & <span className="text-blue-600">Activities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Academic progression, departmental hands-on labs, and collaborative technical initiatives.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 w-0.5 bg-blue-200/70 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-10">
            {experienceItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Center */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-100 shadow-md items-center justify-center z-10">
                    <span className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>

                  {/* Empty Spacer Column for timeline layout */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="glass-panel rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/90 hover:border-blue-200 group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          {getTypeIcon(item.type)}
                          <span className="capitalize">{item.type}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 mb-4">
                        <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights list */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout card for internships/future experience */}
          <div className="mt-12 text-center p-6 rounded-3xl glass-panel-subtle border border-blue-200/60 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">
              Looking for Summer 2025 / 2026 Software Engineering Internships
            </p>
            <p className="text-xs text-slate-500">
              Open to internship opportunities in Software Development, Web Engineering, and Quality Engineering.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
