import React, { useState } from 'react'
import {
  ENTERPRISE_METRICS,
  CORE_PILLARS,
  SERVICES_LIST,
  VALUE_PILLARS,
  STRATEGIC_STEPS,
  PROJECTS_LIST,
  FEATURED_CASE_STUDY,
  TESTIMONIALS_LIST,
} from '../data/content'
import type { ProjectItem } from '../data/types'
import { TechOrbit } from '../components/TechOrbit'
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Search,
  PenTool,
  Rocket,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Layers,
  Code2,
  Bot,
  MessageSquare,
  FileSpreadsheet,
} from 'lucide-react'

interface HomePageProps {
  setActivePage: (page: string) => void
  onSelectProject: (project: ProjectItem) => void
  onOpenBriefBuilder: (initialTitle?: string) => void
  onOpenServiceFinder: () => void
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectProject,
  onOpenBriefBuilder,
  onOpenServiceFinder,
}) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0)
  const [projectFilter, setProjectFilter] = useState<'all' | 'ai' | 'web' | 'mobile' | 'iot' | 'marketing'>('all')

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.categoryFilter === projectFilter)

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_LIST.length)
  }

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx(
      (prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length
    )
  }

  const currentTestimonial = TESTIMONIALS_LIST[activeTestimonialIdx]

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* =========================================================================
          HERO SECTION (Official Luminous Royal Blue & Glowing Globe Canvas - Page 1)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-navy text-white pt-16 pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-blue-400/20">
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#1FA8F0" opacity="0.4" />
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0056D2" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Dynamic Glow Spheres */}
        <div className="absolute -top-32 -right-20 w-[550px] h-[550px] bg-brand-sky/20 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Red/Orange Badge (Screenshot 1) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-200 text-xs font-black tracking-widest uppercase backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-amber animate-pulse" />
              <span>PREMIUM IT SOLUTIONS &amp; DIGITAL TRANSFORMATION</span>
            </div>

            {/* Main Headline with Signature Orange Highlight */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Accelerate Your Business Growth{' '}
              <span className="block mt-1 bg-gradient-to-r from-brand-amber via-brand-orange to-brand-orange-deep bg-clip-text text-transparent">
                With Intelligent Technology
              </span>
            </h1>

            {/* Preserved Subtitle */}
            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We build cutting-edge digital ecosystems powered by cloud, automation, AI, full-stack engineering, and enterprise-grade architectures — designed to scale your business.
            </p>

            {/* Hero CTAs - Official Orange Pill GET STARTED button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActivePage('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-sm sm:text-base font-black shadow-lg hover:shadow-orange-500/40 transition-all duration-200 cursor-pointer active:scale-95 group uppercase tracking-wider"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenServiceFinder}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-bold backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-brand-amber" />
                <span>Smart Service Finder</span>
              </button>

              <button
                onClick={() => onOpenBriefBuilder()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-orange-200 hover:text-white border border-orange-400/40 text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-brand-orange" />
                <span>Build Project Brief</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="pt-6 border-t border-blue-400/30 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-blue-100 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-sky" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-amber" />
                <span>Cloud Native Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-200" />
                <span>Client-First Partnership</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Official Radiant 3D Earth Globe / Cyber Sphere Graphic (Page 1) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 sm:w-96 aspect-square rounded-full bg-gradient-to-tr from-brand-blue/40 via-brand-sky/30 to-brand-orange/20 p-4 border border-brand-sky/30 shadow-2xl backdrop-blur-sm flex items-center justify-center animate-[spin_45s_linear_infinite]">
              {/* Concentric orbital rings */}
              <div className="absolute inset-4 rounded-full border border-brand-sky/30 border-dashed"></div>
              <div className="absolute inset-12 rounded-full border border-orange-400/30"></div>

              {/* Core Glowing Globe */}
              <div className="relative w-44 sm:w-56 aspect-square rounded-full bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-navy shadow-[0_0_60px_rgba(0,164,239,0.6)] flex items-center justify-center text-center p-6">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-1 shadow-md">
                    <Bot className="w-6 h-6 text-brand-amber" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    Ami<span className="text-brand-orange">Hive</span>
                  </span>
                  <span className="text-[10px] text-blue-200 font-bold">
                    Intelligent Core
                  </span>
                </div>
              </div>

              {/* Orbiting Tech Nodes */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[11px] font-bold text-white shadow-lg">
                React &amp; Next.js
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-orange/80 to-brand-amber/80 backdrop-blur-md border border-orange-300 text-[11px] font-bold text-white shadow-lg">
                Python AI &amp; Cloud
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[11px] font-bold text-brand-blue-50 shadow-lg">
                Fast APIs
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-[11px] font-bold text-brand-sky shadow-lg">
                Zero-Trust
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENTERPRISE METRICS BANNER
         ========================================================================= */}
      <section className="bg-[#F8FAFC] border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {ENTERPRISE_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-orange transition-all duration-300 text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl font-black text-brand-blue mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500">{metric.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO (Official Styling - Screenshot 2)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with signature Orange pill and two-tone title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Digital Services for{' '}
              <span className="text-brand-orange">Modern Business Growth</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We help businesses harness modern technologies—AI, automation, smart analytics, and custom digital solutions—to scale faster, improve efficiency, and deliver powerful customer experiences.
            </p>
          </div>

          {/* 3 Core Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-sky flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:from-brand-orange group-hover:to-brand-orange-deep transition-all duration-300">
                    {pillar.iconName === 'Code2' && <Code2 className="w-7 h-7" />}
                    {pillar.iconName === 'Cpu' && <Layers className="w-7 h-7" />}
                    {pillar.iconName === 'Megaphone' && <Sparkles className="w-7 h-7" />}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {pillar.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setActivePage('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors cursor-pointer"
                  >
                    <span>Explore Service Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Smart Service Finder Callout Banner */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-50/70 via-blue-50/50 to-white border border-orange-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-orange to-brand-orange-deep text-white flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Not sure which service fits your current stage?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Try our interactive Smart Service Finder to generate an architecture and delivery roadmap tailored to your industry.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenServiceFinder}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue hover:from-brand-blue hover:to-brand-blue-dark text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>Launch Service Finder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL SERVICES CATALOG (Screenshots 3 & 4)
         ========================================================================= */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
                WHAT WE OFFER
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
                Digital Capabilities for <span className="text-brand-orange">Enterprise Scale</span>
              </h2>
            </div>
            <button
              onClick={() => setActivePage('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-orange cursor-pointer"
            >
              <span>View All 9 Services &amp; Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header Image */}
                <div className="relative h-44 w-full bg-slate-800 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src =
                        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-wider text-orange-200 bg-slate-900/70 backdrop-blur-xs px-2.5 py-0.5 rounded">
                    {srv.tagline}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {srv.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Official Orange Pill Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBriefBuilder(srv.title)}
                      className="px-4 py-1.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={`https://wa.me/918300611720?text=Hi%20AmiHive%2C%20I'm%20inquiring%20about%20${encodeURIComponent(
                        srv.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-blue hover:text-brand-blue flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FUTURE-READY TECHNOLOGY (Screenshots 4 & 5)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              ARCHITECTURE &amp; STACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
              Future-Ready <span className="text-brand-orange">Technology for Modern Enterprises</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We engineer intelligent, scalable, and secure systems using React, Next.js, Node.js, .NET, Python AI, AWS, Docker, Kubernetes, MongoDB, PostgreSQL.
            </p>
          </div>

          {/* Interactive Orbit Component */}
          <TechOrbit onExploreClick={() => setActivePage('contact')} />
        </div>
      </section>

      {/* =========================================================================
          WHO WE ARE (Screenshot 6)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="AmiHive modern engineering team collaborating"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget
                  target.onerror = null
                  target.src =
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

              {/* Floating Overlaid Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-orange">
                      AmiHive Software Solutions
                    </h4>
                    <p className="text-sm font-black text-slate-900">
                      Engineering High-Trust Digital Transformation
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preserved Text Content with Official Orange Button */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Scalable IT Solutions <span className="text-brand-orange">for Modern Businesses</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At AmiHive, we engineer smart, scalable, and high-performance digital solutions designed to accelerate business transformation. By blending deep technical expertise with creative problem-solving, we help organizations unlock new opportunities and achieve sustainable growth.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether it's custom software development, AI-powered automation, cloud modernization, or enterprise-level digital strategy, we focus on building technology that strengthens your operations and drives long-term success in a rapidly evolving digital world.
            </p>

            {/* Official Orange Discover More Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActivePage('about')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-md hover:shadow-orange-500/30 transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>Connect With Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US (Screenshot 7)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">
              Your Trusted Partner <span className="text-brand-orange">for Future-Ready IT Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              We empower businesses with high-quality, innovative, and reliable digital solutions designed for long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:bg-white hover:border-brand-orange hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue mb-4 shadow-2xs group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all">
                    {v.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {v.iconName === 'Users' && <Users className="w-6 h-6" />}
                    {v.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                    {v.iconName === 'Clock' && <Clock className="w-6 h-6" />}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange block mb-1">
                    {v.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STRATEGIC APPROACH (Screenshot 8)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 mb-3">
              Our Strategic <span className="text-brand-orange">Approach</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our workflow combines deep understanding, intelligent design, and high-performance development to deliver impactful IT solutions that drive digital transformation and long-term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {STRATEGIC_STEPS.map((s) => (
              <div
                key={s.step}
                className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-brand-amber transition-colors">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-brand-orange">
                      {s.iconName === 'Search' && <Search className="w-6 h-6" />}
                      {s.iconName === 'PenTool' && <PenTool className="w-6 h-6" />}
                      {s.iconName === 'Rocket' && <Rocket className="w-6 h-6" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Activities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {s.subItems.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED CASE STUDY & PROJECT SHOWCASE (Screenshots 9-11, 21-29)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-black uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
                LATEST CASE STUDIES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
                Crafting Future-Ready Digital Solutions{' '}
                <span className="text-brand-orange">for Business Growth</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-normal">
                Explore how we bring ideas to life through innovative design, smart engineering, and scalable technology delivering digital experiences for businesses worldwide.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'ai', label: 'AI & Automation' },
                { id: 'web', label: 'Enterprise Web' },
                { id: 'mobile', label: 'Mobile & IoT' },
              ].map((tab) => {
                const isActive = projectFilter === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setProjectFilter(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-orange text-white shadow-md'
                        : 'bg-white/10 hover:bg-white/20 text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Featured Case Study Hero Box (Aurora) */}
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-black uppercase tracking-wider">
                  FEATURED CASE STUDY
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {FEATURED_CASE_STUDY.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {FEATURED_CASE_STUDY.summary}
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                    <span>Real-time immersive multi-user 3D collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                    <span>AI-driven contextual suggestions for smarter workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
                    <span>Cross-device continuity with persistent environments</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(FEATURED_CASE_STUDY)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-lg transition-all cursor-pointer active:scale-95"
                  >
                    <span>View Case Study Deep Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActivePage('projects')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    <span>Open Project Explorer</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[350px]">
                <img
                  src={FEATURED_CASE_STUDY.image}
                  alt={FEATURED_CASE_STUDY.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.onerror = null
                    target.src =
                      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-l lg:from-slate-900/40"></div>
              </div>
            </div>
          </div>

          {/* Project Gallery Cards (With Official Orange View Details Button) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(1, 7).map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-800/90 rounded-2xl border border-slate-700 overflow-hidden shadow-lg hover:border-brand-orange hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onSelectProject(proj)}
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src =
                        'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-orange-200 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                    {proj.year}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-brand-amber transition-colors mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <span className="px-4 py-1.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-slate-400">{proj.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setActivePage('projects')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <span>Explore All Projects &amp; Interactive Filters</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT TESTIMONIALS (Screenshots 12, 13, 14)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange-deep bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 mb-3 inline-block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Real feedback from clients who trusted us with their digital journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-12">
            Verified client partnerships across specialized industries
          </p>

          {/* Testimonial Card */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-brand-orange mx-auto mb-6 shadow-xs">
              <Quote className="w-6 h-6" />
            </div>

            {/* Client Avatar / Logo Badge */}
            <div className="relative w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-lg shadow-md border-2 border-white ring-4 ring-orange-100 bg-gradient-to-tr from-brand-orange to-brand-orange-deep">
              {currentTestimonial.avatarText}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {currentTestimonial.clientName}
            </h3>
            <p className="text-xs sm:text-sm text-brand-orange font-bold mb-1">
              {currentTestimonial.roleOrCompany}
            </p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-6">
              {currentTestimonial.industry}
            </p>

            {/* Preserved Quote */}
            <p className="text-base sm:text-xl italic text-slate-700 leading-relaxed font-serif max-w-2xl mx-auto mb-6">
              "{currentTestimonial.quote}"
            </p>

            {/* Stars */}
            <div className="flex justify-center items-center gap-1 text-brand-amber mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-amber" />
              ))}
            </div>

            {/* Slider Navigation - Exact Official Red/Orange Circular Buttons */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-brand-orange-deep hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-black text-slate-700 font-mono">
                {activeTestimonialIdx + 1} / {TESTIMONIALS_LIST.length}
              </span>

              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-brand-orange-deep hover:bg-brand-orange-hover text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
