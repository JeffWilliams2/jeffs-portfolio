import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Jeff Williams',
  description:
    "Data Engineer specializing in ETL/ELT pipelines, cloud infrastructure, and data platforms. MS in Advanced Data Analytics. Building scalable data systems from pipelines to production.",
  href: 'https://jeffwilliams.dev',
  author: 'Jeff Williams',
  locale: 'en-US',
  location: 'Texas, USA',
  email: 'jeffwilliams2030@gmail.com'
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/JeffWilliams2',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jefferywilliams4',
    label: 'LinkedIn',
  },
  { 
    href: 'mailto:jeffwilliams2030@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Instagram: 'lucide:instagram',
  Email: 'lucide:mail',
}

export interface ExperienceItem {
  role: string
  type: string
  period: string
  points: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Data Engineer (Internship)',
    type: 'Genomics Startup',
    period: 'May 2025 – Sept 2025',
    points: [
      'Built production ETL/ELT pipelines processing biomedical and EMR data from various sources',
      'Architected data lakehouse utilizing medallion architecture with data quality validation',
      'Deployed Kubernetes/Docker infrastructure supporting microservices and CI/CD pipelines',
      'Led end-to-end data projects from technical design to executive presentations'
    ]
  },
  {
    role: 'Software Engineer',
    type: 'PermianBytes',
    period: 'Jan 2024 – Present',
    points: [
      'Building full-stack web applications with Next.js, Node.js, and PostgreSQL',
      'Developing SaaS MVPs with authentication, payments (Stripe), and AI integrations',
      'Delivering contract solutions for clients across various industries'
    ]
  },
  {
    role: 'Private Client Banker',
    type: 'JPMorgan Chase & Co.',
    period: 'Mar 2024 – Jul 2024',
    points: [
      'Managed high-volume transactions and account services for private banking clients',
      'Analyzed customer financial data to provide tailored product recommendations'
    ]
  },
  {
    role: 'Financial Services Representative',
    type: 'Charles Schwab',
    period: 'Jan 2022 – Dec 2022',
    points: [
      'Earned Series 7 and SIE licenses for securities trading',
      'Advised clients on investment strategies and portfolio management',
      'Executed trades and managed accounts across equities, options, and fixed income'
    ]
  }
]

export const CERTIFICATIONS = [
  'Certified Cloud Practitioner (2024)',
  'Dagster Essentials — Dagster Labs (Oct 2025)',
  'Gen AI Fundamentals — Databricks (Aug 2025)',
  'LangChain for LLM Application Dev — DeepLearning.AI (Jul 2025)'
]

export interface TimelineItem {
  year: string
  event: string
  detail: string
}

export const TIMELINE: TimelineItem[] = [
  {
    year: '2025',
    event: 'MS Advanced Data Analytics, UNT',
    detail: 'Machine Learning, Deep Learning, Big Data Systems, Statistical Computing'
  },
  {
    year: '2025',
    event: 'Data Engineer — Genomics Startup',
    detail: 'ETL/ELT pipelines · Medallion architecture · Kubernetes/Docker · Python, Airflow, Dagster'
  },
  {
    year: '2024',
    event: 'Banking — JPMorgan Chase & Co.',
    detail: 'Transaction processing, pattern identification, financial operations'
  },
  {
    year: '2022',
    event: 'Finance Representative — Charles Schwab',
    detail: 'Series 7, SIE · Client relations, financial services'
  },
  {
    year: '2021',
    event: 'BBA Finance, UNT',
    detail: 'Financial Markets, Investments, Economics, Derivatives'
  }
]

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Data Engineering': Category[];
  'Cloud & Infrastructure': Category[];
  'Databases & Platforms': Category[];
  'AI/ML': Category[];
  'Web Development': Category[];
};

export const technologies: Technologies = {
  'Data Engineering': [
    { text: 'Apache Airflow', logo: 'mdi:airflow' },
    { text: 'dbt', logo: 'mdi:dbt' },
    { text: 'Dagster', logo: 'mdi:transfer' },
    { text: 'Apache Spark', logo: 'mdi:spark' },
    { text: 'pandas', logo: 'simple-icons:pandas' },
    { text: 'NumPy', logo: 'simple-icons:numpy' },
    { text: 'DuckDB', logo: 'simple-icons:duckdb' },
    { text: 'ETL/ELT', logo: 'mdi:transfer' },
  ],
  'Cloud & Infrastructure': [
    { text: 'AWS', logo: 'mdi:aws' },
    { text: 'GCP', logo: 'mdi:google-cloud' },
    { text: 'Kubernetes', logo: 'mdi:kubernetes' },
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'CI/CD', logo: 'mdi:cicd' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'Linux', logo: 'mdi:linux' },
  ],
  'Databases & Platforms': [
    { text: 'PostgreSQL', logo: 'mdi:postgresql' },
    { text: 'MySQL', logo: 'simple-icons:mysql' },
    { text: 'Snowflake', logo: 'mdi:snowflake' },
    { text: 'BigQuery', logo: 'mdi:bigquery' },
    { text: 'Databricks', logo: 'simple-icons:databricks' },
    { text: 'Redshift', logo: 'mdi:aws' },
    { text: 'MongoDB', logo: 'simple-icons:mongodb' },
  ],
  'AI/ML': [
    { text: 'Python', logo: 'mdi:python' },
    { text: 'LangChain', logo: 'mdi:langchain' },
    { text: 'OpenAI APIs', logo: 'simple-icons:openai' },
    { text: 'scikit-learn', logo: 'simple-icons:scikitlearn' },
    { text: 'Tableau', logo: 'simple-icons:tableau' },
    { text: 'Streamlit', logo: 'simple-icons:streamlit' },
  ],
  'Web Development': [
    { text: 'TypeScript', logo: 'mdi:language-typescript' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'React', logo: 'simple-icons:react' },
    { text: 'Next.js', logo: 'simple-icons:nextdotjs' },
    { text: 'Node.js', logo: 'simple-icons:nodedotjs' },
    { text: 'SQL', logo: 'mdi:database' },
  ],
}
