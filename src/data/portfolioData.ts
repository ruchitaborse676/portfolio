import { Project, SkillCategory, ExperienceItem, Certification, PortfolioProfile } from '../types/portfolio';

export const portfolioProfile: PortfolioProfile = {
  name: 'Ruchita Borse',
  title: 'Aspiring Software Developer',
  badge: 'Computer Science Engineering Student • SVKM College of Engineering, Shirpur',
  college: 'SVKM College of Engineering, Shirpur',
  collegeLocation: 'Shirpur, Maharashtra, India',
  location: 'SHIRPUR, MAHARASHTRA, INDIA',
  email: 'ruchitaborse676@gmail.com',
  graduationYear: '2027',
  bioIntro:
    'Passionate about creating innovative solutions with technology. Eager to learn, grow and make an impact in the world of software development.',
  bioFull: [
    'I am a Computer Science and Engineering student at SVKM College of Engineering, Shirpur, passionate about software development, algorithmic problem-solving, and building modern web applications.',
    'My technical journey centers on solidifying core fundamentals in Data Structures & Algorithms (DSA), Object-Oriented Programming, and Database Management Systems (DBMS). I enjoy translating logic into efficient code and crafting user-friendly digital experiences.',
    'I am continuously expanding my skillset with modern frontend technologies, cloud concepts, and exploring Generative AI applications to solve real-world problems.'
  ],
  heroSkills: ['Web Development', 'DSA', 'DBMS', 'AI & GenAI', 'Problem Solving'],
  roles: [
    'Aspiring Python Developer',
    'Computer Science Engineering Student',
    'SVKM Student',
    'Passionate Learner'
  ],
  githubPlaceholder: 'https://github.com/ruchitaborse',
  linkedinPlaceholder: 'https://www.linkedin.com/in/ruchita-borse'
};

export const quickInfoItems = [
  {
    icon: 'GraduationCap',
    title: 'SVKM College of Engineering,',
    subtitle: 'Shirpur',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: 'Calendar',
    title: 'Graduation',
    subtitle: '2027',
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: 'Code2',
    title: 'C / C++ | Python',
    subtitle: 'HTML | CSS | JS',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    icon: 'Heart',
    title: 'Always learning',
    subtitle: 'Always growing',
    color: 'from-cyan-500 to-blue-500'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'Code',
    description: 'Core languages used for problem solving, coursework, and application logic.',
    skills: [
      { name: 'C & C++', level: 'Core Fundamentals', highlight: true },
      { name: 'Python', level: 'Intermediate', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Intermediate', highlight: true },
      { name: 'SQL', level: 'Relational Queries', highlight: true },
      { name: 'Java (Basics)', level: 'Academic Foundations', highlight: false }
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'Globe',
    description: 'Modern front-end styling and building responsive web experiences.',
    skills: [
      { name: 'HTML5 & Semantic Markup', level: 'Proficient', highlight: true },
      { name: 'CSS3 & Flexbox/Grid', level: 'Proficient', highlight: true },
      { name: 'Tailwind CSS', level: 'Intermediate', highlight: true },
      { name: 'React.js', level: 'Intermediate', highlight: true },
      { name: 'Responsive Design', level: 'Mobile-first', highlight: true },
      { name: 'DOM Manipulation', level: 'Proficient', highlight: false }
    ]
  },
  {
    id: 'dbms',
    title: 'Database Management',
    icon: 'Database',
    description: 'Designing structured schemas, queries, and understanding relational data.',
    skills: [
      { name: 'MySQL', level: 'Intermediate', highlight: true },
      { name: 'Relational Schema Design', level: 'Academic Level', highlight: true },
      { name: 'SQL Queries & Joins', level: 'Proficient', highlight: true },
      { name: 'Data Normalization (1NF-3NF)', level: 'Fundamental', highlight: false }
    ]
  },
  {
    id: 'cs-core',
    title: 'CS Fundamentals',
    icon: 'Cpu',
    description: 'Crucial engineering principles and algorithmic problem solving.',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', level: 'Active Practice', highlight: true },
      { name: 'Object-Oriented Programming (OOP)', level: 'Strong Concepts', highlight: true },
      { name: 'Database Management Systems (DBMS)', level: 'Academic Excellence', highlight: true },
      { name: 'Operating System Concepts', level: 'Coursework', highlight: false },
      { name: 'Computer Networks Basics', level: 'Coursework', highlight: false }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: 'Wrench',
    description: 'Development environments, version control, and utility software.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', highlight: true },
      { name: 'Visual Studio Code', level: 'Primary IDE', highlight: true },
      { name: 'Vite & Modern Build Tools', level: 'Proficient', highlight: true },
      { name: 'Linux / Command Line Basics', level: 'Familiar', highlight: false },
      { name: 'Chrome DevTools', level: 'Debugging', highlight: false }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: 'Users',
    description: 'Interpersonal, collaborative, and analytical strengths.',
    skills: [
      { name: 'Problem Solving & Logic', level: 'Core Strength', highlight: true },
      { name: 'Eager & Fast Learner', level: 'Continuous Growth', highlight: true },
      { name: 'Team Collaboration', level: 'Academic Projects', highlight: true },
      { name: 'Clear Communication', level: 'Verbal & Written', highlight: false },
      { name: 'Time & Project Management', level: 'Organized', highlight: false }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio & Showcase',
    category: 'web',
    subtitle: 'Modern Responsive Blue Crystal Portfolio',
    description:
      'A sleek personal portfolio featuring frosted glassmorphism, responsive UI, 3D crystal sculpture aesthetics, and an interactive AI Portfolio Assistant.',
    longDescription:
      'Designed and engineered as a showcase of Computer Science Engineering work. Implemented using React, Tailwind CSS, and TypeScript with a clean blue-and-white theme, interactive resume viewer, and customized assistant.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    features: [
      'Custom blue glassmorphism theme and 3D crystal composition',
      'Integrated AI Portfolio Assistant with context awareness',
      'Downloadable & printable formatted resume view',
      'Fully responsive across all screen sizes and mobile devices'
    ],
    githubUrl: 'https://github.com/ruchitaborse/portfolio',
    liveUrl: '#',
    accent: 'blue'
  },
  {
    id: 'student-dbms',
    title: 'Student Database Management System',
    category: 'dbms',
    subtitle: 'Academic Database & Record Management',
    description:
      'A structured relational database system designed to manage student enrollments, course selections, attendance records, and academic grading.',
    longDescription:
      'Built as part of database engineering coursework. Employs a normalized relational schema with primary/foreign key constraints, transactional integrity, and optimized SQL queries for generating student performance reports.',
    tags: ['Python', 'MySQL', 'DBMS', 'SQL Queries', 'Data Normalization'],
    features: [
      'Normalized relational tables (3NF) to eliminate data redundancy',
      'Automated queries for semester grade point calculations',
      'CRUD operations for student profiles and course enrollments',
      'Structured error handling and data validation rules'
    ],
    githubUrl: 'https://github.com/ruchitaborse/student-dbms',
    liveUrl: '',
    accent: 'sky'
  },
  {
    id: 'dsa-visualizer',
    title: 'Algorithmic Explorer & DSA Visualizer',
    category: 'dsa',
    subtitle: 'Interactive Algorithm Concept Demonstrator',
    description:
      'An educational web project that visualizes fundamental data structures and sorting algorithms step-by-step for intuitive learning.',
    longDescription:
      'Helps computer science students visualize how algorithms execute under the hood. Covers sorting routines (Bubble, Selection, Insertion, Merge) and tree/graph traversals (BFS, DFS) with animated step controls.',
    tags: ['JavaScript', 'HTML5 Canvas', 'Data Structures', 'Algorithms', 'CSS3'],
    features: [
      'Visual bar chart animations for sorting algorithms',
      'Configurable speed controls and array size sliders',
      'Comparison and swap operation counters in real-time',
      'Clear explanations of time and space complexities'
    ],
    githubUrl: 'https://github.com/ruchitaborse/dsa-visualizer',
    liveUrl: '',
    accent: 'indigo'
  },
  {
    id: 'quiz-portal',
    title: 'Interactive Tech Quiz & Assessment Portal',
    category: 'web',
    subtitle: 'Responsive Web Quiz Application',
    description:
      'A dynamic quiz application designed for testing knowledge in Computer Science topics, programming syntax, and general engineering aptitude.',
    longDescription:
      'Features timed quizzes, categorized questions (C++, Python, Web, DBMS), instant feedback upon answer selection, score calculation, and summary review screens.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'State Management'],
    features: [
      'Timed assessment mode with countdown timer',
      'Categorized question banks with explanation breakdowns',
      'Instant score review and accuracy metrics',
      'Mobile responsive layout with smooth transitions'
    ],
    githubUrl: 'https://github.com/ruchitaborse/tech-quiz-portal',
    liveUrl: '',
    accent: 'blue'
  },
  {
    id: 'study-planner',
    title: 'Campus Study & Task Planner',
    category: 'web',
    subtitle: 'Productivity Tool for Engineering Students',
    description:
      'A practical web tool to organize semester schedules, assignment deadlines, lab submissions, and study goals with progress tracking.',
    longDescription:
      'Engineered to assist college students in balancing multiple coursework deadlines. Uses local storage for persistence, supports task tagging by subject, and displays progress analytics.',
    tags: ['React', 'Local Storage', 'Tailwind CSS', 'UI/UX'],
    features: [
      'Categorized subject tags for CSE semester subjects',
      'Priority flags and submission deadline reminders',
      'Progress bar indicating completed coursework tasks',
      'Clean minimalist interface with ice-blue accents'
    ],
    githubUrl: 'https://github.com/ruchitaborse/study-planner',
    liveUrl: '',
    accent: 'cyan'
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'B.Tech / B.E. in Computer Science & Engineering',
    organization: 'SVKM College of Engineering',
    location: 'Shirpur, Maharashtra, India',
    period: '2023 - 2027 (Expected)',
    type: 'education',
    description:
      'Pursuing Bachelor of Engineering / Technology in Computer Science. Actively focusing on core computing curriculum, software engineering principles, and lab practicums.',
    achievements: [
      'Consistent academic progress in Core CS subjects including DSA, DBMS, and OOP.',
      'Active participant in departmental coding workshops and technical seminars.',
      'Collaborated on group coursework projects for database design and web development.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Member & Participant',
    organization: 'College Technical & Coding Activities',
    location: 'SVKM College of Engineering, Shirpur',
    period: '2023 - Present',
    type: 'activity',
    description:
      'Engaged in college technical activities, coding hackathons, and peer-to-peer programming study circles.',
    achievements: [
      'Participated in department-level problem-solving challenges.',
      'Explored practical applications of Python and C++ in algorithmic problems.',
      'Contributed to peer learning sessions on Git, GitHub, and web technologies.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Academic Projects & Practical Labs',
    organization: 'Department of Computer Science & Engineering',
    location: 'SVKM CoE, Shirpur',
    period: '2023 - Present',
    type: 'academic',
    description:
      'Hands-on implementation of lab curriculum involving data structures, database normalization, and web fundamentals.',
    achievements: [
      'Implemented custom linked lists, stacks, queues, and binary trees in C/C++.',
      'Constructed complete relational database schemas with complex SQL queries in MySQL.',
      'Built responsive front-end interfaces using modern HTML, CSS, and JavaScript.'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Data Structures and Algorithms (DSA)',
    issuer: 'Academic Coursework & Self-Paced Learning',
    date: '2024 - Present',
    skills: ['Data Structures', 'Algorithms', 'C++', 'Problem Solving'],
    status: 'In Progress'
  },
  {
    id: 'cert-2',
    title: 'Front-End Web Development Fundamentals',
    issuer: 'Online Learning Platform / Workshop',
    date: '2024',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    status: 'Completed'
  },
  {
    id: 'cert-3',
    title: 'Database Management Systems & SQL',
    issuer: 'Departmental Lab Practicum & Online Course',
    date: '2024',
    skills: ['MySQL', 'Relational Schemas', 'Queries', 'Normalization'],
    status: 'Completed'
  },
  {
    id: 'cert-4',
    title: 'Python for Problem Solving',
    issuer: 'Technical Training & Coding Assessment',
    date: '2023',
    skills: ['Python Basics', 'Control Flow', 'Functions', 'File I/O'],
    status: 'Completed'
  }
];

export const assistantPredefinedAnswers: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['who', 'about', 'ruchita', 'introduce', 'profile', 'bio'],
    answer:
      "Ruchita Borse is a Computer Science Engineering student at SVKM College of Engineering in Shirpur, Maharashtra, India (Expected Graduation: 2027). She is an aspiring Software Developer passionate about writing clean code, solving algorithmic problems, and building modern, responsive digital applications."
  },
  {
    keywords: ['college', 'education', 'degree', 'svkm', 'shirpur', 'study', 'university'],
    answer:
      "Ruchita is currently pursuing her Computer Science Engineering degree at SVKM College of Engineering, located in Shirpur, Maharashtra, India. Her anticipated graduation year is 2027, with a strong focus on core CS fundamentals, DSA, and DBMS."
  },
  {
    keywords: ['skill', 'stack', 'languages', 'tech', 'programming', 'python', 'c++', 'react'],
    answer:
      "Ruchita's technical skills include:\n• Programming Languages: C, C++, Python, JavaScript (ES6+), SQL\n• Web Development: HTML5, CSS3, Tailwind CSS, React.js, Responsive Design\n• Databases: MySQL, Relational Database Design, SQL Joins & Normalization\n• CS Fundamentals: Data Structures & Algorithms (DSA), OOP, DBMS, OS concepts\n• Tools: Git, GitHub, VS Code, Vite"
  },
  {
    keywords: ['project', 'work', 'built', 'portfolio', 'dbms', 'app'],
    answer:
      "Ruchita has built several academic and practical projects:\n1. Personal Portfolio Website — An ice-blue glassmorphic portfolio with an interactive AI assistant\n2. Student Database Management System — Normalized MySQL & Python application\n3. Algorithmic Explorer & DSA Visualizer — Step-by-step sorting and traversal visualizer\n4. Interactive Quiz & Assessment Portal — Responsive React assessment platform\n5. Campus Study & Task Planner — Productivity tool for engineering coursework"
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'linkedin', 'github', 'message'],
    answer:
      "You can contact Ruchita Borse directly via email at ruchitaborse676@gmail.com. She is also reachable through LinkedIn and GitHub. Feel free to use the contact form at the bottom of this portfolio to send a direct message!"
  },
  {
    keywords: ['resume', 'cv', 'download'],
    answer:
      "You can view and download Ruchita's resume right from this website! Simply click the 'Resume' button in the top navigation or in the hero section, or scroll down to the dedicated Resume section to download 'Ruchita_Borse_Resume.pdf'."
  }
];
