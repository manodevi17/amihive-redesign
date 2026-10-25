import React, { useState, useMemo } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { PROJECTS_LIST, FEATURED_CASE_STUDY } from '../data/content'
import type { ProjectItem } from '../data/types'
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  Layers,
  FileSpreadsheet,
} from 'lucide-react'

interface ProjectsPageProps {
  setActivePage: (page: string) => void
  onSelectProject: (project: ProjectItem) => void
  onOpenBriefBuilder: (initialTitle?: string) => void
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  setActivePage,
  onSelectProject,
  onOpenBriefBuilder,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filters = [
    { id: 'all', label: 'All Projects (9)' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'web', label: 'Enterprise Web & Cloud' },
    { id: 'mobile', label: 'Mobile Apps & Telemetry' },
    { id: 'iot', label: 'IoT & Smart Automation' },
    { id: 'marketing', label: 'High-Impact Acquisition' },
  ]

  const filteredProjects = useMemo(() => {
    return PROJECTS_LIST.filter((proj) => {
      const matchesFilter =
        selectedFilter === 'all' || proj.categoryFilter === selectedFilter
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.summary.toLowerCase().includes(query) ||
        proj.tags.some((t) => t.toLowerCase().includes(query)) ||
        proj.clientIndustry.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [selectedFilter, searchQuery])

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      <Breadcrumb
        pageTitle="OurProjects"
        breadcrumbText="Our Projects"
        subtitle="Explore our portfolio of high-performance web systems, AI automation engines, and enterprise solutions engineered for industry leaders."
        badgeText="ENGINEERING SHOWCASE"
        onHomeClick={() => setActivePage('home')}
      />

      {/* =========================================================================
          FEATURED CASE STUDY: AURORA (Screenshots 21 & 22)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-navy text-white overflow-hidden shadow-2xl border border-blue-400/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Text Highlights */}
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/25 border border-orange-400/40 text-orange-200 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
                  FEATURED CASE STUDY
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Aurora — Collaborative Workspace
                </h2>

                <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                  A next-generation mixed-reality workspace designed to power immersive teamwork, real-time decision-making, and seamless digital productivity.
                </p>

                {/* Preserved Bullet Points */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                    <span>Real-time immersive multi-user 3D collaboration</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                    <span>AI-driven contextual suggestions for smarter workflows</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                    <span>Cross-device continuity with persistent environments</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(FEATURED_CASE_STUDY)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-lg transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
                  >
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBriefBuilder(FEATURED_CASE_STUDY.title)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-orange-200" />
                    <span>Plan Similar Solution</span>
                  </button>
                </div>
              </div>

              {/* Visual Preview */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[420px]">
                <img
                  src={FEATURED_CASE_STUDY.image}
                  alt="Aurora Mixed Reality Collaborative Workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.onerror = null
                    target.src =
                      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent lg:bg-gradient-to-l lg:from-brand-navy/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EMPOWERING BUSINESSES THROUGH TECHNOLOGY (Screenshot 23)
         ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              Empowering Businesses <span className="text-brand-orange">Through Technology</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              We create future-ready digital experiences with AI, automation, and user-focused design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 shadow-2xs hover:border-brand-blue transition-all">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                AI-Powered Chatbot Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A smart chatbot that uses NLP to assist users with instant, human-like responses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-200 shadow-2xs hover:border-brand-orange transition-all">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                E-Commerce Intelligence Dashboard
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A complete analytics dashboard for managing sales, orders, and inventory forecasting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-blue-50 border border-brand-blue/20 shadow-2xs hover:border-brand-blue transition-all">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Modern Mobile App UI/UX
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A sleek and modern mobile app interface engineered with dark mode support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PROJECT EXPLORER (Screenshots 24-29 + Interactive Tools)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          {/* Header with official orange pill badge */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              PROJECT GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              Interactive <span className="text-brand-orange">Project Explorer</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Explore a curated selection of our latest innovations — combining cutting-edge technology, creative design, and scalable engineering.
            </p>
          </div>

          {/* Interactive Search & Filter Controls */}
          <div className="mb-10 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, tags, tech..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#F8FAFC] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {filters.map((f) => {
                const isActive = selectedFilter === f.id
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-orange text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-brand-blue-dark'
                    }`}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Project Gallery Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Layers className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No projects found matching criteria</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Try clearing your search or switching filter categories.
              </p>
              <button
                onClick={() => {
                  setSelectedFilter('all')
                  setSearchQuery('')
                }}
                className="px-5 py-2 text-xs font-bold text-brand-orange bg-orange-50 rounded-full hover:bg-orange-100"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
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
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-orange-200 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded">
                      {proj.category}
                    </span>
                    <span className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                      {proj.year}
                    </span>
                  </div>

                  {/* Body with Official Orange Pill Button */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2 line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {proj.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="px-4 py-1.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onOpenBriefBuilder(proj.title)
                        }}
                        className="text-[11px] font-semibold text-brand-blue hover:text-brand-orange p-1 cursor-pointer"
                        title="Configure in Brief Builder"
                      >
                        Plan Similar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
