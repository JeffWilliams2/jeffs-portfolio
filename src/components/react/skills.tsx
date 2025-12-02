import { useEffect } from 'react'
import { technologies, type Technologies, type Category } from '../../consts'
import { InfiniteScroll } from '../ui/infinite-scroll'
import { type IconType } from 'react-icons'
import {
  FaQuestionCircle,
  FaDatabase,
  FaCloud,
  FaCode,
  FaExchangeAlt,
  FaChartLine,
  FaPaintBrush,
  FaServer,
  FaLinux,
  FaTools,
  FaBug,
} from 'react-icons/fa'
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPhp,
  SiAstro,
  SiTailwindcss,
  SiGit,
  SiDigitalocean,
  SiCloudflare,
  SiNetlify,
  SiNodedotjs,
  SiApache,
  SiMysql,
  SiMongodb,
  SiPython,
  SiR,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiSnowflake,
  SiPytorch,
  SiJupyter,
  SiTableau,
  SiStreamlit,
  SiApacheairflow,
  SiDuckdb,
  SiLangchain,
  SiJson,
  SiDbt,
  SiAmazon,
  SiMinio,
  SiOllama,
  SiPandas,
  SiNumpy,
} from 'react-icons/si'
import { FileCode, LucideAppWindow, Code } from 'lucide-react'

const iconMap: { [key: string]: IconType } = {
  'mdi:language-html5': SiHtml5,
  'mdi:language-javascript': SiJavascript,
  'mdi:language-css3': SiCss3,
  'mdi:language-php': SiPhp,
  'simple-icons:astro': SiAstro,
  'simple-icons:pandas': SiPandas,
  'simple-icons:numpy': SiNumpy,
  'simple-icons:python': SiPython,
  'simple-icons:pytorch': SiPytorch,
  'simple-icons:jupyter': SiJupyter,
  'simple-icons:duckdb': SiDuckdb,
  'mdi:tailwind': SiTailwindcss,
  'mdi:git': SiGit,
  'mdi:digital-ocean': SiDigitalocean,
  'cib:cloudflare': SiCloudflare,
  'cib:netlify': SiNetlify,
  'mdi:nodejs': SiNodedotjs,
  'cib:apache': SiApache,
  'simple-icons:mysql': SiMysql,
  'mdi:mysql': SiMysql, // Ensure both MySQL logo values work
  'simple-icons:mongodb': SiMongodb,
  'mdi:python': SiPython,
  'mdi:r': SiR,
  'mdi:postgresql': SiPostgresql,
  'mdi:docker': SiDocker,
  'mdi:kubernetes': SiKubernetes,
  'mdi:snowflake': SiSnowflake,
  'mdi:pytorch': SiPytorch,
  'mdi:jupyter': SiJupyter,
  'mdi:tableau': SiTableau,
  'mdi:streamlit': SiStreamlit,
  'mdi:airflow': SiApacheairflow,
  'mdi:spark': FaCloud, // Generic cloud icon for Apache Spark
  'mdi:duckdb': SiDuckdb,
  'mdi:langchain': SiLangchain,
  'mdi:qdrant': FaDatabase, // Generic database icon for Qdrant
  'mdi:medallion': FaCode, // Generic code icon for Medallion Architecture
  'mdi:datalake': FaCloud, // Generic cloud icon for Data Lakes
  'mdi:polars': SiPython, // Python icon for Polars (it's a Python library)
  'mdi:json': SiJson,
  'mdi:parquet': FaDatabase, // Generic database icon for Parquet
  'mdi:transfer': FaExchangeAlt, // Generic exchange icon for ELT/ETL Pipelines
  'mdi:bigquery': FaCloud, // Generic cloud icon for BigQuery
  'mdi:dbt': FaDatabase, // Generic database icon for dbt-core
  'mdi:pandas': SiPandas, // Pandas icon
  'mdi:scikit-learn': SiPython, // Python icon for scikit-learn
  'mdi:figma': FaPaintBrush, // Generic paintbrush icon for Figma
  'mdi:linux': FaLinux, // Linux icon
  'mdi:cicd': FaTools, // Generic tools icon for CI/CD
  'mdi:rest': FaExchangeAlt, // Generic exchange icon for REST APIs
  'mdi:numpy': SiNumpy, // Numpy icon
  'mdi:matplotlib': SiPython, // Python icon for matplotlib
  'mdi:visual-studio-code': FaCode, // Code icon for VS Code
  'mdi:jira': FaBug, // Bug icon for Jira
  'mdi:aws': SiAmazon, // AWS icon
  'mdi:minio': SiMinio, // MinIO icon
  'mdi:llamaindex': SiOllama, // LlamaIndex icon
}

const categories = Object.keys(technologies)
const uniqueCategories = Array.from(new Set(categories)) // Ensure no duplicates
const groupSize = Math.ceil(uniqueCategories.length / 3)
const categoryGroups = [
  uniqueCategories.slice(0, groupSize),
  uniqueCategories.slice(groupSize, groupSize * 2),
  uniqueCategories.slice(groupSize * 2),
]

const Skills: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400">
      <p>
        <span className="text-zinc-900 dark:text-zinc-300 font-medium">Data:</span> Airflow, dbt, Dagster, Spark, Kafka
      </p>
      <p>
        <span className="text-zinc-900 dark:text-zinc-300 font-medium">Cloud:</span> AWS (S3, Lambda, EMR, Bedrock), GCP, Snowflake
      </p>
      <p>
        <span className="text-zinc-900 dark:text-zinc-300 font-medium">Infrastructure:</span> Kubernetes, Docker, Terraform, CI/CD
      </p>
      <p>
        <span className="text-zinc-900 dark:text-zinc-300 font-medium">Code:</span> Python, SQL, TypeScript, React, Next.js
      </p>
    </div>
  )
}

export default Skills
