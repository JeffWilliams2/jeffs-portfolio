import { DEFAULT_METADATA } from '@/constants/metadata';

import DefaultPostHeroImage from '@/assets/images/default/default-post-hero-image.jpg';
import DefaultProjectHeroImage from '@/assets/images/default/default-project-hero-image.jpg';

export const BASE_FOLDERS = {
  POST: 'src/content/post',
  PROJECT: 'src/content/project',
} as const;

export const COLLECTIONS = {
  POST: 'post',
  PROJECT: 'project',
} as const;

/** technologies */
export const TAGS = [
  'data-engineering',
  'python',
  'sql',
  'spark',
  'pyspark',
  'airflow',
  'dbt',
  'snowflake',
  'databricks',
  'aws',
  'kubernetes',
  'docker',
  'terraform',
  'data-modeling',
  'etl',
  'elt',
  'data-warehouse',
  'databases',
  'postgresql',
  'kafka',
  'streaming',
  'architecture',
  'devops',
  'cicd',
  'infrastructure',
  'finance',
  'best-practices',
  'fundamentals',
  'system-design',
  'api',
  'security',
  'ai',
  'nlp',
  'react',
  'lambda',
  'analytics-engineering',
  'performance',
  'orchestration',
  'lakehouse',
  'next.js',
  'fastapi',
  'healthcare',
] as const;

/** adjust this later */
/** form of an article, no technologies */
export const CATEGORIES = [
  {
    name: 'data-engineering',
    icon: 'mdi:database-cog-outline',
  },
  {
    name: 'databases',
    icon: 'mdi:database-outline',
  },
  {
    name: 'cloud-infrastructure',
    icon: 'mdi:cloud-outline',
  },
  {
    name: 'data-processing',
    icon: 'mdi:cog-transfer-outline',
  },
  {
    name: 'devops',
    icon: 'mdi:infinity',
  },
  {
    name: 'system-design',
    icon: 'mdi:sitemap-outline',
  },
  {
    name: 'finance-data',
    icon: 'mdi:chart-line',
  },
  {
    name: 'tutorials',
    icon: 'mdi:teach',
  },
  {
    name: 'tools',
    icon: 'mdi:tools',
  },
] as const;

// use imported images here
export const DEFAULTS_POST = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultPostHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;

export const DEFAULTS_PROJECT = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultProjectHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;
