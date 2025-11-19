import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Jeff Williams',
  description:
    "Data Engineer & Software Developer | M.S. Advanced Data Analytics (May 2025) | Building end-to-end data solutions from infrastructure to analytics across diverse industries | Experience spans production platforms, freelance projects, and internal enterprise deployments | Tech stack: Python, Airflow, dbt, Kubernetes, AWS, React, PostgreSQL, and modern data tools",
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

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Data Engineering': Category[];
  'Data Science': Category[];
  'Cloud & Infrastructure': Category[];
  'Data Platforms': Category[];
  'AI/ML Tools': Category[];
  'Other': Category[];
  'Web Development': Category[];
  'Databases': Category[];
};

export const technologies: Technologies = {
  'Data Engineering': [
    { text: 'Python', logo: 'mdi:python' },
    { text: 'R', logo: 'mdi:r' },
    { text: 'ETL/ELT Pipelines', logo: 'mdi:transfer' },
    { text: 'Apache Spark', logo: 'mdi:spark' },
    { text: 'Airflow', logo: 'mdi:airflow' },
    { text: 'dbt-core', logo: 'mdi:dbt' },
    { text: 'Polars', logo: 'mdi:polars' },
  ],
  'Data Science': [
    { text: 'pandas', logo: 'simple-icons:pandas' },
    { text: 'scikit-learn', logo: 'simple-icons:python' },
    { text: 'numpy', logo: 'simple-icons:numpy' },
    { text: 'matplotlib', logo: 'simple-icons:python' },
    { text: 'PyTorch', logo: 'simple-icons:pytorch' },
    { text: 'Jupyter Notebook', logo: 'simple-icons:jupyter' },
    { text: 'DuckDB', logo: 'simple-icons:duckdb' },
  ],
  'Cloud & Infrastructure': [
    { text: 'Docker', logo: 'mdi:docker' },
    { text: 'Kubernetes', logo: 'mdi:kubernetes' },
    { text: 'AWS (Lambda, Glue)', logo: 'mdi:aws' },
    { text: 'MinIO', logo: 'mdi:minio' },
    { text: 'Linux', logo: 'mdi:linux' },
    { text: 'Git', logo: 'mdi:git' },
    { text: 'CI/CD', logo: 'mdi:cicd' },
  ],
  'Data Platforms': [
    { text: 'PostgreSQL', logo: 'mdi:postgresql' },
    { text: 'MySQL', logo: 'simple-icons:mysql' },
    { text: 'Data Lakes', logo: 'mdi:datalake' },
    { text: 'Medallion Architecture', logo: 'mdi:medallion' },
    { text: 'Snowflake', logo: 'mdi:snowflake' },
    { text: 'BigQuery', logo: 'mdi:bigquery' },
  ],
  'AI/ML Tools': [
    { text: 'Vector Databases (Qdrant, Weaviate, pgvector)', logo: 'mdi:qdrant' },
    { text: 'LlamaIndex', logo: 'mdi:llamaindex' },
    { text: 'LangChain', logo: 'mdi:langchain' },
  ],
  'Other': [
    { text: 'REST APIs', logo: 'mdi:rest' },
    { text: 'Tableau', logo: 'mdi:tableau' },
    { text: 'Jira', logo: 'mdi:jira' },
    { text: 'VS Code', logo: 'mdi:visual-studio-code' },
    { text: 'Parquet', logo: 'mdi:parquet' },
    { text: 'JSON', logo: 'mdi:json' },
    { text: 'Figma', logo: 'mdi:figma' },
    { text: 'Streamlit', logo: 'mdi:streamlit' },
  ],
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'PHP', logo: 'mdi:language-php' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
  ],
  'Databases': [
    { text: 'PostgreSQL', logo: 'mdi:postgresql' },
    { text: 'MySQL', logo: 'simple-icons:mysql' },
    { text: 'MongoDB', logo: 'simple-icons:mongodb' },
  ],
}
