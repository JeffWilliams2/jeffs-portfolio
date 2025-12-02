import { useState } from 'react';

const TechTag = ({ children }) => (
  <span className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400">{children}</span>
);

const ProjectCard = ({ title, description, tech, onClick }) => (
  <div onClick={onClick} className="block group cursor-pointer">
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-zinc-100 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <svg className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => <TechTag key={t}>{t}</TechTag>)}
      </div>
    </div>
  </div>
);

const ExperienceItem = ({ role, type, period, points }) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
      <div>
        <span className="font-medium text-zinc-100">{role}</span>
        <span className="text-zinc-600 mx-2">·</span>
        <span className="text-zinc-400">{type}</span>
      </div>
      <span className="text-sm text-zinc-500">{period}</span>
    </div>
    <ul className="text-zinc-400 space-y-1 text-sm">
      {points.map((point, i) => (
        <li key={i} className="flex">
          <span className="text-zinc-700 mr-3">—</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const BlogLink = ({ title, status }) => (
  <a href="#" className="flex items-center justify-between py-3 border-b border-zinc-800/50 group">
    <span className="text-zinc-200 group-hover:text-emerald-400 transition-colors">{title}</span>
    <span className="text-xs text-zinc-600">{status}</span>
  </a>
);

const TimelineItem = ({ year, event, detail }) => (
  <div className="flex gap-6">
    <span className="text-sm text-zinc-500 w-12 shrink-0">{year}</span>
    <div>
      <div className="text-zinc-200">{event}</div>
      <div className="text-sm text-zinc-500">{detail}</div>
    </div>
  </div>
);

const Nav = ({ page, setPage }) => (
  <nav className="relative border-b border-zinc-800/50">
    <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
      <button onClick={() => setPage('home')} className="font-medium hover:text-emerald-400 transition-colors">
        Jeff Williams
      </button>
      <div className="flex items-center gap-6 text-sm">
        <button 
          onClick={() => setPage('about')} 
          className={`transition-colors ${page === 'about' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`}
        >
          About
        </button>
        <button 
          onClick={() => setPage('projects')} 
          className={`transition-colors ${page === 'projects' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`}
        >
          Projects
        </button>
        <a href="#writing" className="text-zinc-400 hover:text-zinc-100 transition-colors">Writing</a>
        <a href="https://github.com/jeffwilliams2" className="text-zinc-400 hover:text-zinc-100 transition-colors">GitHub</a>
      </div>
    </div>
  </nav>
);

const Background = () => (
  <>
    <div className="fixed inset-0 bg-[linear-gradient(rgba(39,39,42,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.2)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none"></div>
    <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
  </>
);

const Footer = ({ setPage }) => (
  <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-zinc-800/50">
    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
      <span>© 2025</span>
      <div className="flex gap-6">
        <a href="https://github.com/jeffwilliams2" className="hover:text-zinc-300 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/jefferywilliams4" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
        <a href="mailto:jeffwilliams2030@gmail.com" className="hover:text-zinc-300 transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

// ============ HOME PAGE ============
const HomePage = ({ setPage }) => {
  const projects = [
    { title: 'Production Data Platform', description: 'Kubernetes-based infrastructure processing 20TB+ biomedical data. Medallion architecture, automated orchestration, 99.5% uptime.', tech: ['Kubernetes', 'Airflow', 'dbt', 'PostgreSQL'] },
    { title: 'Multi-tenant SaaS', description: 'Full-stack application with AI document processing, Stripe billing, and row-level security on Supabase.', tech: ['Next.js', 'TypeScript', 'LangChain', 'Supabase'] },
    { title: 'Serverless ML Pipeline', description: 'Travel recommendations via AWS Bedrock + Claude. Cognito auth, Lambda backend, React frontend.', tech: ['AWS Bedrock', 'Lambda', 'React'] },
    { title: 'Distributed Spark Processing', description: 'EMR cluster for historical market data. PySpark transformations with S3 integration.', tech: ['Spark', 'AWS EMR', 'S3'] },
  ];

  const experience = [
    { role: 'Data Engineer', type: 'Biotech', period: '2025', points: ['Sole engineer owning production data platform lifecycle', 'Cut processing time from weeks to 2 days', 'Presented architecture to executive leadership'] },
    { role: 'Software Developer', type: 'Independent', period: '2024–Present', points: ['Building SaaS with modern full-stack patterns', 'CI/CD pipelines and infrastructure as code', 'AI integration for document processing'] },
    { role: 'Analyst → Banking', type: 'Finance', period: '2022–2024', points: ['ETL pipelines for portfolio analytics', 'Tableau dashboards for client reporting', '$100K+ daily transactions, 100% accuracy'] },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Background />
      <Nav page="home" setPage={setPage} />

      <main className="relative">
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
          <div className="flex items-center gap-2 text-sm text-emerald-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Open to opportunities
          </div>
          <h1 className="text-4xl font-medium mb-6 leading-snug max-w-2xl">
            Data engineer building reliable platforms and pipelines at scale.
          </h1>
          <div className="text-zinc-400 space-y-4 leading-relaxed max-w-2xl">
            <p>
              I design data infrastructure—ETL systems, orchestration, cloud architecture. Recently the sole data engineer 
              on a production platform processing 20TB+ of biomedical data.
            </p>
            <p>
              Finance background before engineering. MS in Advanced Data Analytics, 2025. 
              I like understanding both the business problem and the technical solution.
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <a href="mailto:jeffwilliams2030@gmail.com" className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded text-sm font-medium hover:bg-zinc-200 transition-colors">
              Get in touch
            </a>
            <a href="https://linkedin.com/in/jefferywilliams4" className="px-4 py-2 border border-zinc-800 rounded text-sm hover:border-zinc-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
          <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => <ExperienceItem key={i} {...exp} />)}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Selected Projects</h2>
            <button onClick={() => setPage('projects')} className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">View all →</button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => <ProjectCard key={i} {...p} onClick={() => setPage('projects')} />)}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
          <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-6">Stack</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-3 text-sm text-zinc-400">
            <p><span className="text-zinc-300">Data:</span> Airflow, dbt, Dagster, Spark, Kafka</p>
            <p><span className="text-zinc-300">Cloud:</span> AWS (S3, Lambda, EMR, Bedrock), GCP, Snowflake</p>
            <p><span className="text-zinc-300">Infrastructure:</span> Kubernetes, Docker, Terraform, CI/CD</p>
            <p><span className="text-zinc-300">Code:</span> Python, SQL, TypeScript, React, Next.js</p>
          </div>
        </section>

        <section id="writing" className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
          <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-6">Writing</h2>
          <p className="text-zinc-400 text-sm mb-6">Notes on data engineering and cloud architecture. Video breakdowns coming.</p>
          <div>
            <BlogLink title="Medallion Architecture in Practice" status="soon" />
            <BlogLink title="Finance to Data Engineering: What Transferred" status="soon" />
            <BlogLink title="Cost-Conscious AWS Architecture" status="soon" />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-800/50">
          <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Certifications</h2>
          <p className="text-zinc-400 text-sm">
            AWS Cloud Practitioner · Databricks Gen AI · Dagster Essentials · LangChain · AWS Solutions Architect <span className="text-zinc-600">(in progress)</span>
          </p>
        </section>

        <Footer setPage={setPage} />
      </main>
    </div>
  );
};

// ============ ABOUT PAGE ============
const AboutPage = ({ setPage }) => {
  const timeline = [
    { year: '2025', event: 'MS Advanced Data Analytics, UNT', detail: 'Machine learning, big data systems, statistical computing' },
    { year: '2025', event: 'Data Engineer — Biotech', detail: 'Production Kubernetes platform, 20TB+ biomedical data' },
    { year: '2024', event: 'Started independent software development', detail: 'Full-stack SaaS, AI integrations, modern patterns' },
    { year: '2024', event: 'Banking Associate — Major Bank', detail: 'Operations, transaction processing, compliance' },
    { year: '2023', event: 'Data Analyst — Capital Management', detail: 'ETL pipelines, Tableau dashboards, portfolio analytics' },
    { year: '2022', event: 'Finance Representative — Brokerage', detail: 'Client services, financial operations' },
    { year: '2021', event: 'BBA Finance, UNT', detail: 'Statistics, financial modeling, quantitative analysis' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Background />
      <Nav page="about" setPage={setPage} />

      <main className="relative max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-medium mb-8">About</h1>
        
        <div className="text-zinc-300 space-y-5 leading-relaxed">
          <p>
            I'm a data engineer based in Texas. I build data platforms, design ETL pipelines, and architect cloud infrastructure. 
            My focus is on systems that are reliable, maintainable, and actually solve business problems.
          </p>
          
          <p>
            I didn't start in tech. I studied finance at UNT, worked at a brokerage, then moved into banking operations. 
            That work gave me a front-row seat to how data flows (or doesn't) through organizations—and I kept finding myself 
            more interested in building the systems than using them.
          </p>

          <p>
            So I went back to school. Finished my MS in Advanced Data Analytics in May 2025, focusing on machine learning, 
            big data systems, and statistical computing. While studying, I landed a data engineering role where I ended 
            up owning a production Kubernetes platform processing 20TB+ of biomedical data.
          </p>

          <p>
            That experience shaped how I think about engineering: infrastructure as a product, observability as a requirement, 
            documentation as a deliverable. I presented architecture decisions to executives and learned that the technical 
            solution is only half the job—you have to be able to explain why it matters.
          </p>
        </div>

        <h2 className="text-xl font-medium mt-12 mb-4 text-zinc-100">What I'm looking for</h2>
        <div className="text-zinc-300 space-y-4 leading-relaxed">
          <p>
            Roles where I can design and build data infrastructure at scale. Solutions architect, data platform engineer, 
            senior data engineer—titles matter less than the work. I want to be close to architecture decisions, not just 
            executing tickets.
          </p>
          <p>
            I'm especially interested in teams building data platforms, real-time pipelines, or ML infrastructure. 
            Bonus if there's a finance or healthcare angle—domains where I have context.
          </p>
        </div>

        <h2 className="text-xl font-medium mt-12 mb-4 text-zinc-100">Outside of work</h2>
        <p className="text-zinc-400 leading-relaxed">
          I'm working on a technical blog and video series covering data engineering concepts—medallion architecture, 
          cost optimization, that kind of thing. Planning to post shorts on YouTube/TikTok once I've built up a backlog.
        </p>

        <h2 className="text-xl font-medium mt-12 mb-4 text-zinc-100">Timeline</h2>
        <div className="space-y-6 mt-6">
          {timeline.map((item, i) => <TimelineItem key={i} {...item} />)}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <a href="mailto:jeffwilliams2030@gmail.com" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            Get in touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};

// ============ PROJECTS PAGE ============
const ProjectsPage = ({ setPage }) => {
  const otherProjects = [
    { title: 'AWS Bedrock Travel App', desc: 'Serverless ML application with Claude integration, Cognito auth', tech: ['AWS Bedrock', 'Lambda', 'React'] },
    { title: 'EMR Spark Pipeline', desc: 'Distributed processing for historical market data on AWS', tech: ['Spark', 'PySpark', 'AWS EMR'] },
    { title: 'Stock Analytics Framework', desc: 'Quantitative analysis for ETF performance and risk metrics', tech: ['Python', 'Pandas', 'NumPy'] },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Background />
      <Nav page="projects" setPage={setPage} />

      <main className="relative max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-medium mb-4">Projects</h1>
        <p className="text-zinc-400 mb-12">Detailed case studies on selected work. Architecture decisions, challenges, outcomes.</p>

        {/* Case Study 1 */}
        <article className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Case Study</span>
            <span className="text-xs text-zinc-500">Data Engineering</span>
          </div>
          <h2 className="text-2xl font-medium mb-4">Production Data Platform for Biomedical Research</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Kubernetes', 'Apache Airflow', 'dbt', 'PostgreSQL', 'Prometheus', 'Grafana', 'Python'].map(t => <TechTag key={t}>{t}</TechTag>)}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 mb-8">
            <div>
              <div className="text-2xl font-medium text-emerald-400">20TB+</div>
              <div className="text-sm text-zinc-500">Data processed</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-emerald-400">99.5%</div>
              <div className="text-sm text-zinc-500">Platform uptime</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-emerald-400">60%</div>
              <div className="text-sm text-zinc-500">Faster incident response</div>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Context</h3>
              <p>
                Joined as the sole data engineer at a biotech company processing multi-modal biomedical data—EMR records, 
                genomic sequences, lab results. The existing system was a patchwork of scripts with manual intervention 
                required at every step. Processing cycles took weeks and failures were common.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Approach</h3>
              <p className="mb-3">
                I redesigned the platform from the ground up with three priorities: reliability, observability, and autonomy.
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Implemented medallion architecture (bronze/silver/gold layers) using dbt for transformations and data quality validation</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Built Apache Airflow DAGs with automated orchestration, replacing manual triggers with event-driven pipelines</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Deployed on Kubernetes for horizontal scaling and fault tolerance</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Created Prometheus/Grafana monitoring with 25+ custom dashboards and proactive alerting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Challenges</h3>
              <p>
                The hardest part wasn't technical—it was organizational. Research teams had built workflows around the old system's 
                quirks. I spent significant time understanding their actual needs versus stated requirements, then documented 
                everything extensively so the platform could outlive my tenure.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Outcome</h3>
              <p>
                Processing time dropped from weeks to 2 days. The platform hit 99.5% uptime over my tenure. Incident response 
                improved 60% thanks to better observability. I presented the architecture to executive leadership, which led to 
                broader adoption of cloud-native practices across the organization.
              </p>
            </div>
          </div>
        </article>

        {/* Case Study 2 */}
        <article className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Case Study</span>
            <span className="text-xs text-zinc-500">Full-Stack / AI</span>
          </div>
          <h2 className="text-2xl font-medium mb-4">AI-Powered Multi-tenant SaaS Platform</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'LangChain', 'OpenAI', 'Stripe', 'Vercel'].map(t => <TechTag key={t}>{t}</TechTag>)}
          </div>

          <div className="grid sm:grid-cols-3 gap-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 mb-8">
            <div>
              <div className="text-2xl font-medium text-emerald-400">RLS</div>
              <div className="text-sm text-zinc-500">Row-level security</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-emerald-400">AI</div>
              <div className="text-sm text-zinc-500">Document processing</div>
            </div>
            <div>
              <div className="text-2xl font-medium text-emerald-400">IaC</div>
              <div className="text-sm text-zinc-500">Infrastructure as code</div>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Context</h3>
              <p>
                A self-directed project to go deep on modern full-stack patterns. The goal was to build something 
                production-ready—not a tutorial project—that I could point to as evidence of software engineering skills 
                alongside my data engineering background.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Architecture</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Next.js frontend with TypeScript for type safety across the stack</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Supabase backend with PostgreSQL and row-level security for multi-tenancy</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>LangChain + OpenAI for document processing and intelligent automation</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Stripe integration for subscription billing with webhook handling</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>CI/CD via GitHub Actions, deployed on Vercel with preview environments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">What I Learned</h3>
              <p className="mb-3">
                This project forced me to think like a software engineer, not just a data engineer. A few specific lessons:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Row-level security is powerful but requires careful policy design upfront</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>AI features need graceful degradation—users shouldn't see raw errors when APIs fail</li>
                <li className="flex"><span className="text-zinc-600 mr-3">—</span>Subscription billing has edge cases everywhere (prorations, failed payments, plan changes)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Status</h3>
              <p>
                Ongoing development. The core platform is functional with auth, billing, and AI features working. 
                Currently iterating on the document processing pipeline and exploring additional LLM capabilities.
              </p>
            </div>
          </div>
        </article>

        {/* Other Projects */}
        <section>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">Other Projects</h2>
          <div className="space-y-4">
            {otherProjects.map((p, i) => (
              <div key={i} className="p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-zinc-200 mb-1">{p.title}</h3>
                    <p className="text-sm text-zinc-500 mb-2">{p.desc}</p>
                    <div className="flex gap-2">
                      {p.tech.map(t => <span key={t} className="text-xs text-zinc-600">{t}</span>)}
                    </div>
                  </div>
                  <a href="https://github.com/jeffwilliams2" className="text-zinc-600 hover:text-emerald-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <button onClick={() => setPage('home')} className="text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back home
          </button>
          <a href="https://github.com/jeffwilliams2" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
            View GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};

// ============ MAIN APP ============
export default function Portfolio() {
  const [page, setPage] = useState('home');
  
  if (page === 'about') return <AboutPage setPage={setPage} />;
  if (page === 'projects') return <ProjectsPage setPage={setPage} />;
  return <HomePage setPage={setPage} />;
}