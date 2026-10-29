/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssistantModal } from './components/AssistantModal';
import { ResumeModal } from './components/ResumeModal';
import { GuideModal } from './components/GuideModal';

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-800 selection:bg-blue-500 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Global Background Ambient Glow Grid */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#93c5fd 0.75px, transparent 0.75px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top sticky navigation bar */}
      <Navbar onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero 
          onOpenAssistant={() => setIsAssistantOpen(true)} 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        
        <QuickInfoBar />
        
        <AboutSection />
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <ExperienceSection />
        
        <CertificationsSection />
        
        <ResumeSection 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
        />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Floating Interactive Assistant Trigger on Bottom-Right */}
      <aside aria-label="Portfolio Assistant" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 border border-blue-400/40 backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer group"
          title="Open AI Portfolio Assistant"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="text-xs font-bold tracking-wide">Assistant</span>
        </button>
      </aside>

      {/* Interactive Modals */}
      <AssistantModal 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

      <GuideModal 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)} 
      />

    </div>
  );
}
