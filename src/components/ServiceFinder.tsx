import React, { useState, useMemo } from 'react'
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  Clock,
  Send,
  Building,
} from 'lucide-react'

interface ServiceFinderProps {
  isOpen: boolean
  onClose: () => void
  onSelectServiceAndBrief?: (summary: {
    industry: string
    goal: string
    timeline: string
    recommendation: string
    techStack: string[]
  }) => void
}

export const ServiceFinder: React.FC<ServiceFinderProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndBrief,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ecommerce')
  const [selectedGoal, setSelectedGoal] = useState<string>('growth')
  const [selectedTimeline, setSelectedTimeline] = useState<string>('accelerated')

  const industries = [
    { id: 'ecommerce', label: 'E-Commerce & Retail' },
    { id: 'manufacturing', label: 'Manufacturing & Materials' },
    { id: 'fmcg', label: 'FMCG & Food Distribution' },
    { id: 'saas', label: 'Tech SaaS & Startups' },
    { id: 'services', label: 'Professional Services & Artisans' },
    { id: 'healthcare', label: 'Health & Wellness' },
  ]

  const goals = [
    {
      id: 'growth',
      title: 'Accelerate Digital Growth & Sales',
      desc: 'High-converting web, marketing funnels & SEO',
    },
    {
      id: 'automation',
      title: 'Automate Repetitive Workflows',
      desc: 'AI agents, CRM sync & operational streamlining',
    },
    {
      id: 'custom-software',
      title: 'Build Custom Platform / Web Portal',
      desc: 'Scalable cloud backends, SPAs & client portals',
    },
    {
      id: 'mobile-app',
      title: 'Launch Cross-Platform Mobile App',
      desc: 'iOS & Android native experience with dark mode',
    },
    {
      id: 'security-infra',
      title: 'Cloud Security & Modernization',
      desc: 'Zero-trust defense, penetration testing & DevOps',
    },
  ]

  const timelines = [
    { id: 'accelerated', label: 'Rapid Sprint', time: '2 - 4 Weeks', badge: 'High Agility' },
    { id: 'standard', label: 'Standard Enterprise', time: '5 - 8 Weeks', badge: 'Full Architecture' },
    { id: 'ongoing', label: 'Dedicated Retainer', time: 'Continuous', badge: 'Sustained Scale' },
  ]

  // Intelligent Recommendation logic
  const recommendation = useMemo(() => {
    let serviceName = 'Web Development & High-Conversion Experience'
    let tech = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    let deliverables = ['Responsive Modern Web System', 'SEO Architecture', 'Speed Optimization']
    let estimatedWeeks =
      selectedTimeline === 'accelerated'
        ? '2-4 Weeks (Rapid Sprint)'
        : selectedTimeline === 'standard'
        ? '5-8 Weeks (Enterprise)'
        : 'Continuous Dedicated Retainer'

    if (selectedGoal === 'automation') {
      serviceName = 'AI Automation & Process Optimization'
      tech = ['Python AI', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker']
      deliverables = ['Custom Autonomous Agents', 'API Data Pipelines', 'Operational Cockpit']
    } else if (selectedGoal === 'custom-software') {
      serviceName = 'Enterprise Full-Stack Software Engineering'
      tech = ['React', 'Next.js', 'Node.js', '.NET', 'PostgreSQL', 'AWS']
      deliverables = ['Multi-Tenant Architecture', 'Role-Based Access (RBAC)', 'Cloud Infrastructure']
    } else if (selectedGoal === 'mobile-app') {
      serviceName = 'Cross-Platform Mobile App & UI/UX'
      tech = ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Figma']
      deliverables = ['iOS & Android App Store Ready Binaries', 'Offline Sync Engine', 'Admin Panel']
    } else if (selectedGoal === 'security-infra') {
      serviceName = 'Cybersecurity & Enterprise Cloud Modernization'
      tech = ['AWS Cloud', 'Docker', 'Kubernetes', 'Cloudflare WAF', 'OWASP Standards']
      deliverables = ['Vulnerability Audit Report', 'Hardened Infrastructure', '24/7 Monitoring']
    } else if (selectedIndustry === 'ecommerce') {
      serviceName = 'High-Performance E-Commerce & Retail Intelligence'
      tech = ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis']
      deliverables = ['Frictionless Checkout Storefront', 'Inventory Analytics', 'Payment Gateway']
    }

    return {
      serviceName,
      tech,
      deliverables,
      estimatedWeeks,
    }
  }, [selectedIndustry, selectedGoal, selectedTimeline])

  if (!isOpen) return null

  const handleApplyToBrief = () => {
    if (onSelectServiceAndBrief) {
      onSelectServiceAndBrief({
        industry: industries.find((i) => i.id === selectedIndustry)?.label || selectedIndustry,
        goal: goals.find((g) => g.id === selectedGoal)?.title || selectedGoal,
        timeline: timelines.find((t) => t.id === selectedTimeline)?.time || selectedTimeline,
        recommendation: recommendation.serviceName,
        techStack: recommendation.tech,
      })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-navy text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/25 border border-orange-400/40 text-orange-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
              Smart Service Finder
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Interactive Solution Architecture Advisor
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl font-normal">
              Answer 3 fast questions to let our intelligent advisor calculate the optimal service package, technology stack, and timeline for your business.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close Service Finder"
          >
            ✕
          </button>
        </div>

        {/* Wizard Controls */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          {/* Step 1: Industry */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Select Your Industry Or Domain
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {industries.map((ind) => {
                const isSelected = selectedIndustry === ind.id
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'border-brand-orange bg-orange-50/80 text-brand-orange shadow-xs ring-2 ring-orange-500/20'
                        : 'border-slate-200 hover:border-orange-300 bg-white text-slate-700'
                    }`}
                  >
                    <Building className={`w-4 h-4 shrink-0 ${isSelected ? 'text-brand-orange' : 'text-slate-400'}`} />
                    <span>{ind.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2: Goal */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                What Is Your Core Strategic Goal?
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {goals.map((goal) => {
                const isSelected = selectedGoal === goal.id
                return (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-brand-orange bg-orange-50/80 text-slate-900 ring-2 ring-orange-500/20'
                        : 'border-slate-200 hover:border-orange-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {goal.title}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-orange" />}
                    </div>
                    <p className="text-xs text-slate-500">{goal.desc}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 3: Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-orange-100 text-brand-orange text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Target Timeline & Execution Speed
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timelines.map((tl) => {
                const isSelected = selectedTimeline === tl.id
                return (
                  <button
                    key={tl.id}
                    onClick={() => setSelectedTimeline(tl.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-brand-orange bg-orange-50/80 ring-2 ring-orange-500/20'
                        : 'border-slate-200 hover:border-orange-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                      <span>{tl.label}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                        {tl.badge}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">{tl.time}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Computed Recommended Architecture Result Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-navy text-white border border-blue-400/40 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-brand-amber block mb-1">
                  Tailored Technology Recommendation
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {recommendation.serviceName}
                </h4>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold shrink-0">
                <Clock className="w-3.5 h-3.5 text-brand-amber" />
                <span>Estimated: {recommendation.estimatedWeeks}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-orange-200 block mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-amber" />
                  Key Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {recommendation.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-orange-200 block mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-amber" />
                  Recommended Technology Foundation
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {recommendation.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950/80 border border-blue-400/40 text-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleApplyToBrief}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-lg transition-all cursor-pointer active:scale-98 uppercase tracking-wider"
              >
                <span>Transfer to Project Brief Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/918300611720?text=Hi%20AmiHive%2C%20the%20Smart%20Service%20Finder%20recommended%20${encodeURIComponent(
                  recommendation.serviceName
                )}%20for%20my%20business.%20Let's%20discuss.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Instant WhatsApp Consult</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
