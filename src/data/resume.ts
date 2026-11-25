export interface ExperienceRole {
  title: string;
  period: string;
  badge?: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  overallPeriod: string;
  location?: string;
  roles: ExperienceRole[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  accent: 'cyan' | 'violet';
  metrics: { label: string; value: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  url: string;
}

export const RESUME_DATA = {
  name: 'Gaurav Bhandari',
  role: 'Frontend Developer',
  tagline: 'Crafting fast, responsive, and scalable React.js web experiences with clean architecture and modern UI.',
  phone: '+91-9521823780',
  email: 'gauravbhandari824@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gaurav-bhandari23/',
  github: 'https://github.com/gauravbhandari23',
  resumePdf: '/gaurav_resume.pdf',
  stats: [
    { label: 'Core Stack', value: 'React.js' },
    { label: 'MCA CGPA', value: '8.4' },
    { label: 'Focus', value: 'UI & Perf' },
  ],
  experiences: [
    {
      company: 'Arkonix',
      overallPeriod: '01/2026 – 06/2026',
      roles: [
        {
          title: 'Frontend Developer (Contract)',
          period: '01/2026 – 06/2026',
          badge: 'Contract',
          highlights: [
            'Built reusable React components using Hooks to create scalable and maintainable frontend applications.',
            'Implemented responsive layouts and optimized application performance to ensure compatibility across desktop and mobile devices.',
            'Worked in an Agile team environment, participating in sprint planning, code reviews, and feature delivery.',
          ],
        },
      ],
      tags: ['React Hooks', 'Responsive Design', 'Performance', 'Agile'],
    },
    {
      company: 'PolyMinds Labs',
      overallPeriod: '01/2025 – Current',
      roles: [
        {
          title: 'Frontend Developer (Full-time)',
          period: '01/2025 – Current',
          badge: 'Current',
          highlights: [
            'Developed and maintained responsive user interfaces with React.js and JavaScript, ensuring optimal performance across browsers.',
            'Collaborated with backend developers to integrate APIs, ensuring seamless communication between frontend and backend systems.',
            'Implemented reusable components following best practices in state management, code organization, and version control using Git.',
          ],
        },
        {
          title: 'Frontend Developer Intern',
          period: 'January 2025 – June 2025',
          badge: 'Internship',
          highlights: [
            'Built responsive UI components and enhanced user interface functionality using React and modern CSS frameworks.',
            'Participated in code reviews and contributed to frontend development workflows and team collaboration processes.',
            'Implemented performance improvements and conducted testing to ensure optimal application functionality across platforms.',
          ],
        },
      ],
      tags: ['React.js', 'JavaScript', 'API Integration', 'State Management', 'Git'],
    },
    {
      company: "What's Cookin'",
      overallPeriod: '01/2022 – 02/2022',
      roles: [
        {
          title: 'Software Development Intern',
          period: '01/2022 – 02/2022',
          badge: 'Internship',
          highlights: [
            'Assisted in developing UI components with React and contributed to frontend functionality improvements.',
            'Worked on styling and layout adjustments to improve application visual design and user experience.',
            'Supported frontend development tasks and helped with basic performance testing and bug identification.',
          ],
        },
      ],
      tags: ['React', 'UI/UX Styling', 'Bug Fixing', 'Testing'],
    },
  ] as ExperienceItem[],
  skills: {
    languages: [
      { name: 'JavaScript', level: 'Primary' },
      { name: 'HTML5', level: 'Semantic' },
      { name: 'CSS3', level: 'Modern' },
      { name: 'SQL', level: 'Queries' },
    ],
    frameworks: [
      { name: 'ReactJS', level: 'Hooks & Context' },
      { name: 'Tailwind CSS', level: 'Utility-First' },
      { name: 'Git', level: 'Version Control' },
      { name: 'GitHub', level: 'Collaboration' },
    ],
    tools: [
      { name: 'VS Code', level: 'IDE' },
      { name: 'Cursor', level: 'AI IDE' },
      { name: 'Claude Code CLI', level: 'AI Workflow' },
      { name: 'Postman', level: 'API Testing' },
      { name: 'Docker', level: 'Containers' },
      { name: 'AWS', level: 'Cloud' },
    ],
  },
  projects: [
    {
      title: 'E-Commerce Platform',
      subtitle: 'Clothing Storefront & Cart Engine',
      description:
        'A fully functional clothing e-commerce platform built with React, featuring dynamic product listings, category-based filtering, and real-time cart & checkout management.',
      highlights: [
        'Dynamic product listings with smooth category-based filtering for seamless browsing.',
        'Implemented React Context and Hooks for real-time cart state and checkout updates.',
      ],
      tech: ['React', 'JavaScript', 'Context API', 'React Hooks'],
      githubUrl: 'https://github.com/gauravbhandari23/ecomm',
      accent: 'cyan',
      metrics: [
        { label: 'State', value: 'Context API' },
        { label: 'Updates', value: 'Real-time Cart' },
      ],
    },
    {
      title: 'Hotel Booking App',
      subtitle: 'Search, Room Selection & Reservations',
      description:
        'A responsive hotel booking frontend built using React and Tailwind CSS, streamlining room discovery, availability filtering, dynamic pricing, and reservation checkout.',
      highlights: [
        'Interactive booking workflow with date selection and real-time availability filtering.',
        'Automated price calculation and clean multi-step checkout experience.',
      ],
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/gauravbhandari23/HotelBook',
      accent: 'violet',
      metrics: [
        { label: 'Styling', value: 'Tailwind CSS' },
        { label: 'Flow', value: 'End-to-End' },
      ],
    },
  ] as ProjectItem[],
  education: [
    {
      institution: 'Manipal University',
      degree: 'Master of Computer Application (MCA)',
      period: '2022 – 2024',
      score: '8.4 CGPA',
    },
    {
      institution: 'JECRC University',
      degree: 'Bachelor of Computer Application (BCA)',
      period: '2019 – 2022',
      score: '7.7 CGPA',
    },
  ] as EducationItem[],
  certifications: [
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      issuer: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-6ed053a5-facf-49ce-adc9-38405ed5e56a/',
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/9fc124cc4ec0',
    },
  ] as CertificationItem[],
};

