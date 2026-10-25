import React from 'react'
import type { ProjectItem } from '../data/types'
import { X, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Tag, Calendar, Building2 } from 'lucide-react'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
  onOpenBriefBuilder?: (projectTitle: string) => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenBriefBuilder,
}) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-brand-orange">
              <Tag className="w-3 h-3" />
              {project.category}
            </span>
            <span className="text-xs text-slate-600 flex items-center gap-1 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Banner / Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget
              target.onerror = null
              target.src =
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-black uppercase tracking-wider text-brand-amber mb-1">
              Case Study Deep Dive
            </p>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-black text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Industry info */}
          <div className="flex items-center gap-2 text-sm text-slate-700 bg-orange-50/60 p-3.5 rounded-2xl border border-orange-200/80">
            <Building2 className="w-4 h-4 text-brand-orange" />
            <span className="font-bold text-slate-900">Industry Scope:</span>
            <span>{project.clientIndustry}</span>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Executive Summary
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-brand-orange/10 border border-brand-orange/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange-hover mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                The AmiHive Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Measurable Impact */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              Verified Business Impact &amp; Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.impact.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-900">
                      Outcome 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Architecture &amp; Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions with Official Pill Buttons */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-semibold">
            Engineered by AmiHive Software Solutions
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onOpenBriefBuilder && (
              <button
                onClick={() => {
                  onClose()
                  onOpenBriefBuilder(project.title)
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-brand-blue hover:text-brand-orange bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>Plan Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href={`https://wa.me/918300611720?text=Hi%20AmiHive%2C%20I%20am%20interested%20in%20a%20solution%20similar%20to%20${encodeURIComponent(
                project.title
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-black text-white bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover rounded-full shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>Discuss With Architect</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
