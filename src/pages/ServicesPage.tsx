import React, { useState } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { SERVICES_LIST } from '../data/content'
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Code2,
  ShoppingBag,
  Globe,
  Palette,
  Layout,
  TrendingUp,
  Share2,
  Smartphone,
  ExternalLink,
  FileSpreadsheet,
} from 'lucide-react'

interface ServicesPageProps {
  setActivePage: (page: string) => void
  onOpenBriefBuilder: (initialTitle?: string) => void
  onOpenServiceFinder: () => void
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setActivePage,
  onOpenBriefBuilder,
  onOpenServiceFinder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'development', label: 'Web & Mobile Engineering' },
    { id: 'ai-data', label: 'AI & Autonomous Systems' },
    { id: 'core', label: 'Marketing & SEO Growth' },
    { id: 'security', label: 'Cybersecurity & Defense' },
    { id: 'design', label: 'Branding & Identity' },
  ]

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory)

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Cpu className="w-6 h-6 text-brand-orange" />
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-brand-blue" />
      case 'Globe':
        return <Globe className="w-6 h-6 text-brand-blue" />
      case 'Palette':
        return <Palette className="w-6 h-6 text-brand-orange" />
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-blue" />
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-blue" />
      case 'Share2':
        return <Share2 className="w-6 h-6 text-brand-orange" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-700" />
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-brand-blue" />
      default:
        return <Code2 className="w-6 h-6 text-brand-blue" />
    }
  }

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      <Breadcrumb
        pageTitle="OurServices"
        breadcrumbText="Our Services"
        subtitle="End-to-end digital capabilities designed to accelerate business transformation, strengthen digital operations, and capture market share."
        badgeText="FULL-SPECTRUM IT CAPABILITIES"
        onHomeClick={() => setActivePage('home')}
      />

      {/* =========================================================================
          INTRO & SERVICE FINDER HERO CALLOUT
         ========================================================================= */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              Digital Services for <span className="text-brand-orange">Modern Business Growth</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We help businesses harness modern technologies—AI, automation, smart analytics, and custom digital solutions—to scale faster, improve efficiency, and deliver powerful customer experiences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-navy text-white shadow-xl max-w-md w-full border border-blue-400/30">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-amber mb-2">
              <Sparkles className="w-4 h-4" />
              Smart Service Finder
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Need Help Choosing the Right Architecture?
            </h3>
            <p className="text-xs text-blue-100 mb-4 leading-relaxed font-normal">
              Our interactive advisor will analyze your industry and goals to generate an exact package recommendation in under 60 seconds.
            </p>
            <button
              onClick={onOpenServiceFinder}
              className="w-full py-2.5 px-5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Launch Smart Service Finder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES DIRECTORY WITH CATEGORY FILTER
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((c) => {
              const isActive = selectedCategory === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-brand-blue-dark'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-2xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
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
                    <div className="absolute top-3 left-3 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md text-slate-800">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <span className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-wider text-orange-200 bg-slate-900/60 px-2 py-0.5 rounded">
                      {srv.tagline}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Included Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {srv.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {srv.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBriefBuilder(srv.title)}
                    className="px-4 py-1.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Configure Brief</span>
                  </button>

                  <a
                    href={`https://wa.me/918300611720?text=Hi%20AmiHive%2C%20I'm%20interested%20in%20discussing%20your%20${encodeURIComponent(
                      srv.title
                    )}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-blue"
                  >
                    <span>Talk to Architect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Bottom Banner */}
      <section className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-navy text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-black text-white">
              Looking for a custom enterprise engagement?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              We offer dedicated engineering squads, cloud modernization retainers, and SLA-backed maintenance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBriefBuilder()}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/25 transition-all cursor-pointer"
            >
              Build Project Brief
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
