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
  useEffect(() => {
    document.querySelectorAll('.tech-badge').forEach((badge) => {
      badge.classList.add('tech-badge-visible')
    })
  }, [])

  return (
    <div className="z-30 mt-12 flex w-full flex-col max-w-[calc(100vw-5rem)] mx-auto lg:max-w-full">
      <div className="space-y-2">
        {categoryGroups.map((group, groupIndex) => (
          <InfiniteScroll
            key={groupIndex}
            duration={50000}
            direction={groupIndex % 2 === 0 ? 'normal' : 'reverse'}
            showFade={true}
            className="flex flex-row justify-center"
          >
            {group.flatMap((category) =>
              technologies[category as keyof Technologies].map(
                (tech: Category, techIndex: number) => {
                  const IconComponent = iconMap[tech.logo] || FaQuestionCircle
                  console.log(`Rendering ${tech.text} with logo ${tech.logo}`)
                  if (!iconMap[tech.logo]) {
                    console.error(`Missing icon for ${tech.text} (${tech.logo})`)
                  }
                  return (
                    <div
                      key={`${category}-${techIndex}`}
                      className="tech-badge repo-card border-border bg-card text-muted-foreground mr-5 flex items-center gap-3 rounded-full border p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                      data-tech-name={`${category}-${techIndex}`}
                    >
                      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-full p-2 text-lg shadow-inner">
                        <IconComponent className="tech-icon text-primary" />
                      </span>
                      <span className="text-foreground font-medium">
                        {tech.text}
                      </span>
                    </div>
                  )
                },
              ),
            )}
          </InfiniteScroll>
        ))}
      </div>
    </div>
  )
}

export default Skills
