import React, { useState } from 'react'
import { TECH_STACK } from '../data/content'
import {
  Code,
  Globe,
  Server,
  Cpu,
  Bot,
  Cloud,
  Box,
  Layers,
  Database,
  HardDrive,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

interface TechOrbitProps {
  onExploreClick?: () => void
}

export const TechOrbit: React.FC<TechOrbitProps> = ({ onExploreClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedTech, setSelectedTech] = useState<string>('React')

  const categories = ['All', 'Frontend', 'Backend', 'AI & Data', 'Cloud', 'DevOps', 'Database']

  const filteredTech =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category.toLowerCase().includes(activeCategory.toLowerCase()))

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-brand-blue" />
      case 'Globe':
        return <Globe className="w-5 h-5 text-brand-blue" />
      case 'Server':
        return <Server className="w-5 h-5 text-brand-blue" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-orange" />
      case 'Bot':
        return <Bot className="w-5 h-5 text-brand-amber" />
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-orange-500" />
      case 'Box':
        return <Box className="w-5 h-5 text-blue-500" />
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-sky" />
      case 'Database':
        return <Database className="w-5 h-5 text-brand-blue" />
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-blue-600" />
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-orange" />
    }
  }

  const techDetails: Record<string, { role: string; enterpriseValue: string }> = {
    React: {
      role: 'Enterprise Frontend Architecture',
      enterpriseValue: 'Powers rapid, highly-responsive single-page applications with modular component architecture.',
    },
    'Next.js': {
      role: 'Server-Side Rendering & Hybrid Web',
      enterpriseValue: 'Enables sub-second page loads, automated SEO indexing, and enterprise edge compute.',
    },
    'Node.js': {
      role: 'High-Concurrency Runtime',
      enterpriseValue: 'Executes millions of asynchronous events for real-time web, APIs, and microservices.',
    },
    '.NET': {
      role: 'Enterprise Backend Services',
      enterpriseValue: 'Provides enterprise-grade transactional security, high-throughput APIs, and legacy system integration.',
    },
    'Python AI': {
      role: 'Machine Learning & Autonomous Agents',
      enterpriseValue: 'Drives NLP pipelines, predictive analytics, custom LLM fine-tuning, and automated workflows.',
    },
    AWS: {
      role: 'Elastic Cloud Infrastructure',
      enterpriseValue: 'Global multi-zone deployment with auto-scaling, high availability, and 99.99% uptime guarantees.',
    },
    Docker: {
      role: 'Microservice Containerization',
      enterpriseValue: 'Standardizes environments from local development to cloud production for zero configuration drift.',
    },
    Kubernetes: {
      role: 'Container Orchestration & Scaling',
      enterpriseValue: 'Automates deployment, scaling, and management of containerized enterprise applications.',
    },
    MongoDB: {
      role: 'Document Data Store',
      enterpriseValue: 'Flexible schema storage engineered for unstructured payloads, rapid iterations, and high write volume.',
    },
    PostgreSQL: {
      role: 'ACID Relational Core Data',
      enterpriseValue: 'Rock-solid relational consistency for mission-critical transactional and financial records.',
    },
    TypeScript: {
      role: 'Strict Type System',
      enterpriseValue: 'Eliminates whole classes of runtime bugs and accelerates cross-team enterprise engineering.',
    },
    'Tailwind CSS': {
      role: 'Enterprise Design System',
      enterpriseValue: 'Consistent, accessible styling tokens engineered for high-performance responsive interfaces.',
    },
  }

  const currentDetail = techDetails[selectedTech] || {
    role: 'Core Enterprise Technology',
    enterpriseValue: 'Engineered for reliability, performance, and long-term scalability.',
  }

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 justify-center">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-brand-blue-dark'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Grid + Interactive Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Technology Badges Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filteredTech.map((tech) => {
            const isSelected = selectedTech === tech.name
            return (
              <button
                key={tech.name}
                onClick={() => setSelectedTech(tech.name)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-brand-orange bg-orange-50/70 shadow-md ring-2 ring-orange-500/20 translate-y-[-2px]'
                    : 'border-slate-200 hover:border-orange-300 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    {getIcon(tech.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">{tech.name}</h4>
                  <span className="text-[11px] text-brand-blue font-bold">{tech.badge}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Tech Architectural Inspector Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-navy text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-amber/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-[11px] font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3 text-brand-amber" />
              Enterprise Architecture Spec
            </div>

            <h3 className="text-2xl font-black text-white mb-1">{selectedTech}</h3>
            <p className="text-xs font-bold text-brand-amber uppercase tracking-wider mb-4">
              {currentDetail.role}
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 mb-6 backdrop-blur-sm">
              <span className="text-[11px] font-bold text-orange-200 uppercase tracking-wider block mb-1.5">
                How AmiHive Deploys This:
              </span>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                {currentDetail.enterpriseValue}
              </p>
            </div>

            <div className="space-y-2 text-xs text-blue-100">
              <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Enterprise Readiness</span>
                <span className="font-bold text-brand-sky">Grade A+ (Verified)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Deployment Architecture</span>
                <span className="font-bold text-white">Docker / Cloud Native</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-300">Security Standard</span>
                <span className="font-bold text-brand-amber">Zero-Trust TLS 1.3</span>
              </div>
            </div>

            {onExploreClick && (
              <button
                onClick={onExploreClick}
                className="mt-6 w-full py-3 px-6 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md uppercase tracking-wider"
              >
                <span>Consult Our Solution Architects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
