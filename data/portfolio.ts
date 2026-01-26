export interface Profile {
  name: string
  role: string
  email: string
  github: string
  linkedin?: string
  location: string
  yearsOfExperience: number
  avatar: string
  bio: string
}

export interface Experience {
  company: string
  logo?: string
  role: string
  period: string
  isCurrent: boolean
  technologies: string[]
  contributions: string[]
  description?: string
}

export interface FileItem {
  name: string
  type: 'file' | 'folder'
  icon?: string
  iconClass?: string
  view?: string
  children?: FileItem[]
  expanded?: boolean
}

export const profile: Profile = {
  name: 'Vũ Thanh Bảy',
  role: 'Senior Frontend Developer',
  email: 'vuthanhbayit@gmail.com',
  github: 'github.com/vuthanhbayit',
  linkedin: 'linkedin.com/in/vuthanhbay',
  location: 'Hanoi, Vietnam',
  yearsOfExperience: 7,
  avatar: '/images/avatar.jpg',
  bio: 'Passionate Frontend Developer with 7+ years of experience specializing in Vue.js ecosystem. Expert in building high-performance web applications with focus on SEO optimization and user experience.'
}

export const experiences: Experience[] = [
  {
    company: 'Thinkpro',
    logo: '/images/thinkpro.jpg',
    role: 'Senior Frontend Developer',
    period: '2021 - Present',
    isCurrent: true,
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'TailwindCSS', 'Pinia'],
    contributions: [
      'Led frontend architecture for e-commerce platform',
      'Achieved 100 Lighthouse performance score',
      'Implemented SSR/SSG strategies for SEO',
      'Built reusable component library',
      'Mentored junior developers'
    ],
    description: 'Leading frontend development for Vietnam\'s premium laptop e-commerce platform.'
  },
  {
    company: 'Azoom',
    logo: '/images/azoom.jpg',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    isCurrent: false,
    technologies: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS', 'Vuex'],
    contributions: [
      'Developed multiple client-facing web applications',
      'Integrated RESTful APIs and GraphQL',
      'Optimized Core Web Vitals metrics',
      'Implemented responsive designs'
    ],
    description: 'Worked on various Japanese client projects focusing on performance and quality.'
  },
  {
    company: 'Amela',
    logo: '/images/amela.jpg',
    role: 'Frontend Developer',
    period: '2018 - 2019',
    isCurrent: false,
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5', 'jQuery'],
    contributions: [
      'Built interactive web interfaces',
      'Collaborated with design team',
      'Implemented pixel-perfect UIs',
      'Participated in code reviews'
    ],
    description: 'Started professional career in frontend development with focus on Vue.js.'
  }
]

export const skills = {
  frontend: {
    framework: 'Vue.js',
    metaFramework: 'Nuxt.js',
    language: 'TypeScript',
    styling: 'TailwindCSS',
    stateManagement: 'Pinia',
    testing: 'Vitest'
  },
  seo: {
    coreWebVitals: 100,
    performance: 98,
    accessibility: 95,
    bestPractices: 100,
    seoScore: 100
  },
  backend: {
    runtime: 'Node.js',
    apiArchitecture: 'REST / GraphQL',
    versionControl: 'Git Flow',
    containerization: 'Docker',
    ci: 'GitHub Actions'
  },
  tools: ['VS Code', 'Figma', 'Postman', 'Chrome DevTools', 'Notion']
}

export const fileTree: FileItem[] = [
  {
    name: 'src',
    type: 'folder',
    icon: 'folder',
    iconClass: 'text-blue-400',
    expanded: true,
    children: [
      {
        name: 'About.vue',
        type: 'file',
        icon: 'fab fa-vuejs',
        iconClass: 'text-green-500',
        view: 'about'
      },
      {
        name: 'Experience.ts',
        type: 'file',
        icon: 'fab fa-js',
        iconClass: 'text-yellow-400',
        view: 'experience'
      },
      {
        name: 'Skills.css',
        type: 'file',
        icon: 'fab fa-css3-alt',
        iconClass: 'text-blue-400',
        view: 'skills'
      },
      {
        name: 'Home.vue',
        type: 'file',
        icon: 'fab fa-vuejs',
        iconClass: 'text-green-500',
        view: 'home'
      }
    ]
  },
  {
    name: 'config',
    type: 'folder',
    icon: 'folder',
    iconClass: 'text-green-400',
    expanded: false,
    children: [
      {
        name: '.env.local',
        type: 'file',
        icon: 'fas fa-cog',
        iconClass: 'text-gray-400',
        view: 'env'
      }
    ]
  },
  {
    name: 'package.json',
    type: 'file',
    icon: 'fas fa-file-code',
    iconClass: 'text-red-400',
    view: 'package'
  },
  {
    name: 'README.md',
    type: 'file',
    icon: 'fab fa-markdown',
    iconClass: 'text-blue-300',
    view: 'readme'
  },
  {
    name: 'SEO_REPORT.log',
    type: 'file',
    icon: 'fas fa-file-alt',
    iconClass: 'text-yellow-300',
    view: 'seo-report'
  }
]

export const terminalLogs = [
  '> Initializing render pipeline...',
  '> Loading Vue ecosystem modules...',
  '> Compiling experience.ts...',
  '> Optimizing bundle size...',
  '> Running performance audit...',
  '> Establishing secure connection to mainframe'
]
