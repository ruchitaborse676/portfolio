import React, { useState } from 'react';
import { Sparkles, Download, Eye, FileText, CheckCircle2, GraduationCap, Code, Briefcase } from 'lucide-react';
import { portfolioProfile, skillCategories, projectsData } from '../data/portfolioData';
import { CrystalDecoration } from './CrystalDecoration';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [activeResumeTab, setActiveResumeTab] = useState<'summary' | 'education' | 'skills' | 'projects'>('summary');

  return (
    <section id="resume" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/25 to-transparent">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="flower"
        size="lg"
        className="absolute -top-10 -left-12 lg:left-10 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="cluster"
        size="md"
        className="absolute -bottom-8 -right-10 lg:right-10 pointer-events-none -z-10"
        opacity={0.38}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Resume & <span className="text-blue-600">Qualifications</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Structured snapshot of academic background, core competencies, and project portfolio.
          </p>
        </div>

        {/* Resume Card Preview */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-500/5 border border-white/90">
          
          {/* Card Top Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-blue-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {portfolioProfile.name}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">
                  {portfolioProfile.title} • {portfolioProfile.college}
                </p>
              </div>
            </div>

            {/* View & Download Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenResumeModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-200 hover:text-blue-600 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>View Full Resume</span>
              </button>

              <a
                href="/Ruchita_Borse_Resume.pdf"
                download="Ruchita_Borse_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 py-6 border-b border-blue-100/60">
            {[
              { id: 'summary', label: 'Summary', icon: Sparkles },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'skills', label: 'Core Skills', icon: Code },
              { id: 'projects', label: 'Projects', icon: Briefcase }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveResumeTab(tab.id as any)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeResumeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                      : 'bg-blue-50/60 text-slate-600 hover:bg-blue-100/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="pt-6 min-h-[220px]">
            {activeResumeTab === 'summary' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-blue-600">
                  Professional Objective & Summary
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dedicated Computer Science Engineering student with strong analytical problem-solving abilities,
                  grounded in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.
                  Demonstrated ability to develop responsive web applications, design normalized relational schemas, and
                  learn complex technical stacks rapidly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                    <span className="font-semibold block text-slate-900 mb-0.5">Primary Focus</span>
                    Software Engineering, Web Development & DSA
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                    <span className="font-semibold block text-slate-900 mb-0.5">Availability</span>
                    Summer 2025/2026 Internships & Engineering Roles
                  </div>
                </div>
              </div>
            )}

            {activeResumeTab === 'education' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col sm:flex-row justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Bachelor of Technology / Engineering (B.Tech / B.E.)
                    </h4>
                    <p className="text-xs font-semibold text-blue-600">
                      Computer Science and Engineering
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {portfolioProfile.college}, {portfolioProfile.collegeLocation}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-blue-700 border border-blue-200">
                      2023 – 2027 (Expected)
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-600 pt-2">
                  <p className="font-semibold text-slate-800">Relevant Coursework:</p>
                  <p>
                    Data Structures & Algorithms, Database Management Systems, Object Oriented Programming,
                    Operating Systems, Discrete Mathematics, Web Technologies, Software Engineering.
                  </p>
                </div>
              </div>
            )}

            {activeResumeTab === 'skills' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillCategories.slice(0, 4).map((cat) => (
                    <div key={cat.id} className="p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100/70">
                      <span className="text-xs font-bold text-blue-700 block mb-1.5">{cat.title}</span>
                      <p className="text-xs text-slate-600 leading-normal">
                        {cat.skills.map((s) => s.name).join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeResumeTab === 'projects' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                {projectsData.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-blue-50/40 border border-blue-100/70">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-slate-900">{proj.title}</h4>
                      <span className="text-[11px] font-semibold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">
                        {proj.tags[0]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-slate-500 bg-white px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 pt-6 border-t border-blue-100/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Verified Computer Science Engineering Resume</span>
            <span>Download file: Ruchita_Borse_Resume.pdf</span>
          </div>

        </div>

      </div>
    </section>
  );
};
