import { useState, useEffect } from 'react';

const Terminal = ({ lines, className }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    
    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLine]) {
            newLines[currentLine] = { ...line, text: '' };
          }
          newLines[currentLine].text = line.text.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(c => c + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return (
    <div className={`bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-xs text-zinc-500 font-mono">~/jeff/init.sh</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-emerald-500 mr-2">{line.prompt || '>'}</span>
            <span className={line.color || 'text-zinc-300'}>{line.text}</span>
            {i === currentLine && currentLine < lines.length && (
              <span className="w-2 h-5 bg-emerald-500 ml-0.5 animate-pulse"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillOrb = ({ skill, delay }) => (
  <div 
    className="px-4 py-2 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 rounded-full border border-zinc-700/50 text-sm text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    {skill}
  </div>
);

const NavLink = ({ children, active }) => (
  <a 
    href="#" 
    className={`relative px-1 py-2 text-sm transition-colors duration-200 ${
      active ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
    }`}
  >
    {children}
    {active && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
    )}
  </a>
);

const BlogCard = ({ title, tags, date, readTime }) => (
  <div className="group relative bg-zinc-900/30 rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition-all duration-300 cursor-pointer overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="flex gap-2 mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg font-medium text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2">{title}</h3>
      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  
  const terminalLines = [
    { prompt: '$', text: 'whoami', color: 'text-cyan-400' },
    { prompt: '', text: 'Jeff Williams — Data & Software Engineer', color: 'text-zinc-100' },
    { prompt: '$', text: 'cat skills.json | jq .core', color: 'text-cyan-400' },
    { prompt: '', text: '["ETL/ELT", "Cloud Architecture", "Full-Stack Dev"]', color: 'text-amber-400' },
    { prompt: '$', text: 'echo $PASSION', color: 'text-cyan-400' },
    { prompt: '', text: 'Turning raw data into decisions_', color: 'text-emerald-400' },
  ];

  const skills = [
    'Python', 'SQL', 'Apache Spark', 'dbt', 'Airflow', 
    'AWS', 'GCP', 'Snowflake', 'PostgreSQL', 'Docker',
    'React', 'TypeScript', 'FastAPI', 'Kubernetes', 'Terraform'
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(39,39,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.3)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
      
      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
              JW
            </div>
            <span className="font-medium">jeffwilliams.dev</span>
          </div>
          <div className="flex items-center gap-8">
            <NavLink active={activeSection === 'home'}>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Blog</NavLink>
            <a href="#" className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-sm font-medium text-zinc-950 hover:opacity-90 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for opportunities
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building the
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  data infrastructure
                </span>
                of tomorrow
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Data & Software Engineer with a passion for transforming raw data into actionable insights. 
                MS in Advanced Data Analytics. Finance background meets modern engineering.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                  View Projects
                </a>
                <a href="#" className="px-6 py-3 border border-zinc-700 rounded-lg font-medium hover:border-zinc-500 transition-colors">
                  Read Blog
                </a>
              </div>
            </div>
            <div>
              <Terminal lines={terminalLines} className="shadow-2xl shadow-emerald-500/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <SkillOrb key={skill} skill={skill} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest from the Blog</h2>
              <p className="text-zinc-400">Deep dives into data engineering, cloud architecture, and finance analytics</p>
            </div>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
              View all posts →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <BlogCard 
              title="Building Real-Time ETL Pipelines with Apache Kafka and dbt"
              tags={['Data Engineering', 'Kafka']}
              date="Dec 2024"
              readTime="8 min read"
            />
            <BlogCard 
              title="Cost Optimization Strategies for Snowflake Workloads"
              tags={['Cloud', 'Snowflake']}
              date="Nov 2024"
              readTime="6 min read"
            />
            <BlogCard 
              title="From Finance to Data Engineering: A Career Transition Guide"
              tags={['Career', 'Finance']}
              date="Nov 2024"
              readTime="10 min read"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-zinc-500 text-sm">
            © 2024 Jeff Williams. Built with Astro.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
