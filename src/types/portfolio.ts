export interface Project {
  id: string;
  title: string;
  category: 'web' | 'dsa' | 'dbms' | 'all';
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  accent: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'education' | 'academic' | 'activity' | 'competition';
  description: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  link?: string;
  status: 'Completed' | 'In Progress';
}

export interface PortfolioProfile {
  name: string;
  title: string;
  badge: string;
  college: string;
  collegeLocation: string;
  location: string;
  email: string;
  graduationYear: string;
  bioIntro: string;
  bioFull: string[];
  heroSkills: string[];
  roles: string[];
  githubPlaceholder: string;
  linkedinPlaceholder: string;
}
