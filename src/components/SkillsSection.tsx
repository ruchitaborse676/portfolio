import React, { useState } from 'react';
import { 
  Code, Globe, Database, Cpu, Wrench, Users, CheckCircle2, Sparkles, Filter 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { CrystalDecoration } from './CrystalDecoration';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="geode"
        size="md"
        className="absolute top-10 -left-12 sm:left-2 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="flower"
        size="md"
        className="absolute bottom-10 -right-12 sm:right-4 pointer-events-none -z-10"
        opacity={0.35}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A solid foundation in computer science fundamentals, programming languages, and web technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-blue-200'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-blue-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/90 hover:border-blue-200 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List items */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/60 hover:border-blue-200 flex items-center justify-between transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-blue-600 bg-white/90 px-2 py-0.5 rounded-full border border-blue-100/80">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom pill */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-right">
                <span className="text-[11px] font-semibold text-slate-400">
                  Confirmed Skills
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
