import React from 'react';
import { GraduationCap, Calendar, Code2, Heart } from 'lucide-react';
import { quickInfoItems } from '../data/portfolioData';

export const QuickInfoBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16 sm:mb-24">
      <div className="glass-panel rounded-3xl p-6 sm:p-7 shadow-xl shadow-blue-500/5 border border-white/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blue-100/60">
        {quickInfoItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 ${index !== 0 ? 'sm:pl-6 lg:pl-8 pt-4 sm:pt-0' : ''}`}
          >
            {/* Round icon badge */}
            <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs group hover:bg-blue-600 hover:text-white transition-colors duration-300">
              {getIcon(item.icon)}
            </div>

            {/* Information Texts */}
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {item.title}
              </p>
              <p className="text-xs font-medium text-slate-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
