export const portfolio = {
  name: 'Lakkshit Khare',
  firstName: 'Lakkshit',
  lastName: 'Khare',
  title: 'Software Engineer',
  identity: 'Software Engineer | AI/ML & Full-Stack Developer',
  disciplines: ['AI/ML', 'Full-Stack', 'Backend'],
  location: 'India',
  email: 'lakkshitkhare@gmail.com',
  year: 2026,
  portrait: {
    // Set an uploaded photo path or a verified direct image URL, not a LinkedIn page URL.
    src: '',
    alt: 'Portrait of Lakkshit Khare',
    objectPosition: '50% 35%',
  },
  about: {
    introduction:
      "I'm Lakkshit Khare, a Software Engineer with hands-on experience across AI/ML, Data Science, backend engineering and full-stack development.",
    description:
      'I enjoy building practical software systems that combine intelligent models with modern application architecture. My experience includes Python, Java, FastAPI, Spring Boot, Angular, REST APIs, machine learning and data-driven applications.',
    current:
      "I'm currently working at Infosys as a System Engineer Trainee, bringing a problem-solving mindset to modern full-stack and enterprise software development.",
  },
  currentRole: {
    position: 'System Engineer Trainee',
    displayPosition: ['SYSTEM ENGINEER', 'TRAINEE'],
    company: 'Infosys',
    period: '2025 \u2014 Present',
    description:
      'Working as a System Engineer Trainee at Infosys, developing practical experience across modern full-stack technologies and enterprise software development.',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git', 'GitHub'],
  },
  experiences: [
    {
      position: 'System Engineer Trainee',
      company: 'Infosys',
      period: '2025 \u2014 Present',
      current: true,
      description:
        'Contributing across frontend and backend responsibilities in team-based full-stack development.',
      contributions: [
        'Building with Angular and TypeScript on the frontend, and Java, Spring Boot, MySQL and REST APIs on the backend.',
        'Working in an Agile, team-based software development environment.',
        'Using Git and GitHub for code integration, collaboration and conflict resolution.',
      ],
    },
    {
      position: 'Machine Learning Intern',
      company: 'BIT MESRA',
      period: 'May 2024 \u2014 July 2024',
      current: false,
      description:
        'Developed a deep learning model for groundwater availability prediction, achieving approximately 89% accuracy using geospatial and geophysical datasets.',
      contributions: [
        'Contributed to data collection and preprocessing for natural-disaster impact analysis, including flood and lightning-related datasets.',
        'Evaluated machine-learning models using Precision, Recall and F1-Score.',
      ],
    },
  ],
  education: {
    institution: 'Kalinga Institute of Industrial Technology',
    abbreviation: 'KIIT',
    degree: 'Bachelor of Technology',
    period: '2022 \u2014 2026',
    graduation: 2026,
    cgpa: '8.03',
  },
  certification: {
    title: 'IBM Data Science & Big Data Foundations Certificate',
    date: 'May 2025',
  },
  research: {
    title: 'Journal Paper',
    institution: 'NIAMT, Ranchi',
    context: 'Remote internship',
    description:
      'Developed predictive models to determine depression severity and estimate the likelihood of depressive conditions using physiological signal analysis.',
    note: 'Research-focused predictive modeling using physiological signal analysis.',
  },
  contact: {
    description:
      'Open to conversations about software engineering, AI/ML, full-stack development and interesting technical projects.',
  },
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const indexNavigation = [
  ...navigation.slice(0, 4),
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  navigation[4],
];

export const githubProfileUrl = 'https://github.com/LakkshitKhare';
export const linkedinProfileUrl = 'https://www.linkedin.com/in/lakkshit-khare-89685320b';

export const socialLinks = [
  { label: 'GitHub', href: githubProfileUrl },
  { label: 'LinkedIn', href: linkedinProfileUrl },
  { label: 'Email', href: `mailto:${portfolio.email}` },
];

export interface Project {
  number: string;
  title: string;
  displayTitle: string[];
  category: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  highlight?: string;
  additional?: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'AI Job Matcher',
    displayTitle: ['AI JOB', 'MATCHER'],
    category: 'FULL-STACK / ARTIFICIAL INTELLIGENCE',
    subtitle: 'Job discovery, made intelligent.',
    description:
      'An AI-powered job matching platform that recommends relevant opportunities based on resume analysis, preferred role and location.',
    technologies: ['Python', 'FastAPI', 'Streamlit', 'Gemini API', 'REST APIs', 'Machine Learning'],
    features: [
      'Resume analysis and job recommendations',
      'Role matching and location-based filtering',
      'AI-generated customized CV content',
    ],
    highlight:
      'Integrated Gemini API to generate customized CV content tailored to specific job applications.',
    image: '/images/job-matcher.jpg',
    imageAlt: 'Editorial visualization of a resume and job-matching interface on a black laptop.',
    githubUrl: githubProfileUrl,
    liveUrl: 'https://job-matcher-webapp-lakku.streamlit.app/',
  },
  {
    number: '02',
    title: 'EEG / Mental Health Prediction',
    displayTitle: ['EEG / MENTAL', 'HEALTH PREDICTION'],
    category: 'MACHINE LEARNING / RESEARCH',
    subtitle: 'Understanding the signals.',
    description:
      'A machine-learning research project focused on physiological signal analysis for depression detection, severity prediction and predictive modeling.',
    technologies: ['Machine Learning', 'Deep Learning', 'Signal Analysis', 'Feature Engineering'],
    features: [
      'EEG / physiological signal analysis',
      'Depression classification and severity prediction',
      'Predictive modeling and deep learning',
      'Feature engineering and model evaluation',
    ],
    highlight:
      'This work resulted in a journal publication during a remote internship at NIAMT, Ranchi.',
    additional:
      'Research-focused predictive modeling using physiological signal analysis. This work resulted in a journal publication during a remote internship at NIAMT, Ranchi. It is research work, not a clinical diagnostic tool.',
    image: '/images/physiological-signals.jpg',
    imageAlt: 'Conceptual glass head with delicate neural filaments, illustrating physiological signal research.',
    githubUrl: githubProfileUrl,
  },
];

export const skillGroups = [
  { name: 'Programming', skills: ['Java', 'Python', 'TypeScript', 'HTML', 'CSS','PL/SQL'] },
  { name: 'Backend', skills: ['Spring Boot', 'FastAPI', 'REST APIs'] },
  { name: 'Frontend', skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'] },
  {
    name: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'AI/ML', 'Data Science', 'Predictive Modeling'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'JupyterLab', 'Google Colab', 'IBM Watson Studio', 'Hadoop', 'Quadratic AI','Oracle EBS'],
  },
];