import React, { useState } from 'react';
import { Sparkles, Github, ExternalLink, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { CrystalDecoration } from './CrystalDecoration';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'dsa' | 'dbms'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative Translucent Blue Crystals in Background */}
      <CrystalDecoration
        variant="flower"
        size="lg"
        className="absolute top-2 -right-16 lg:right-6 pointer-events-none -z-10"
        opacity={0.35}
      />
      <CrystalDecoration
        variant="cluster"
        size="md"
        className="absolute bottom-20 -left-12 lg:left-6 pointer-events-none -z-10"
        opacity={0.32}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ACADEMIC & PERSONAL WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical applications, database architectures, and algorithm implementations built during engineering coursework.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Applications' },
            { id: 'dbms', label: 'Database & Systems' },
            { id: 'dsa', label: 'Algorithms & Tools' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-blue-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/90 hover:border-blue-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {project.category.toUpperCase()}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-slate-400 hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Features highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100/80 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200/60 hover:border-blue-200 transition-all duration-200"
                      title="View GitHub Repository (Editable link)"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-100 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 mb-4 pr-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                {selectedProject.category.toUpperCase()} PROJECT
              </span>
              <h3 className="text-2xl font-bold text-slate-900 pt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-medium text-slate-500">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Detailed Body */}
            <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
              <p>{selectedProject.longDescription || selectedProject.description}</p>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2.5">
                  Core Implementation Features:
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">
                  Technologies Employed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 italic">
                SVKM Engineering Academic Portfolio
              </span>

              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
