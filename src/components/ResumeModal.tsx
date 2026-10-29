import React from 'react';
import { X, Download, Printer, GraduationCap, Code, Briefcase, Mail, MapPin } from 'lucide-react';
import { portfolioProfile, skillCategories, projectsData, experienceItems } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-blue-100 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Resume Preview — {portfolioProfile.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-white border border-slate-200 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <a
              href="/Ruchita_Borse_Resume.pdf"
              download="Ruchita_Borse_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white border border-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {portfolioProfile.name}
              </h1>
              <p className="text-base font-semibold text-blue-600 mt-0.5">
                {portfolioProfile.title}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {portfolioProfile.collegeLocation}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {portfolioProfile.email}
                </span>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                CSE Student @ SVKM
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Motivated Computer Science Engineering student at SVKM College of Engineering, Shirpur.
              Passionate about building scalable digital solutions, solving complex algorithmic challenges,
              and contributing to high-impact software projects. Demonstrates strong foundational expertise
              in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
              <div>
                <p className="font-bold text-slate-900">
                  Bachelor of Technology / Engineering in Computer Science & Engineering
                </p>
                <p className="text-xs text-slate-600">
                  {portfolioProfile.college}, {portfolioProfile.collegeLocation}
                </p>
              </div>
              <p className="text-xs font-semibold text-blue-600">
                2023 – 2027 (Expected)
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">Languages:</span>
                C, C++, Python, JavaScript (ES6+), SQL, Basics of Java
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">Web Technologies:</span>
                HTML5, CSS3, Tailwind CSS, React.js, Responsive UI/UX
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">Databases & Systems:</span>
                MySQL, Relational Schema Design, Normalization, Query Optimization
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">Fundamentals & Tools:</span>
                DSA, OOP, DBMS, OS Concepts, Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-1">
              Featured Projects
            </h2>
            {projectsData.slice(0, 3).map((proj) => (
              <div key={proj.id} className="text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{proj.title}</span>
                  <span className="text-xs font-medium text-slate-400">
                    {proj.tags.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{proj.description}</p>
                <ul className="list-disc list-inside text-[11px] text-slate-500 pl-1">
                  {proj.features.slice(0, 2).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Co-curricular & Activities */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-1">
              Co-Curricular Activities & Training
            </h2>
            {experienceItems.slice(1).map((exp) => (
              <div key={exp.id} className="text-xs space-y-0.5">
                <div className="flex justify-between font-semibold text-slate-800">
                  <span>{exp.role}</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-600">{exp.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between text-xs text-slate-500">
          <span>Official Academic Resume • SVKM College of Engineering</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
