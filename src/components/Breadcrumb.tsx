import React from 'react'
import { ChevronRight, Home, Sparkles } from 'lucide-react'

interface BreadcrumbProps {
  pageTitle: string
  breadcrumbText: string
  subtitle?: string
  badgeText?: string
  onHomeClick: () => void
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pageTitle,
  breadcrumbText,
  subtitle,
  badgeText,
  onHomeClick,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-blue-dark text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-blue-400/20">
      {/* Dynamic Wave Mesh Grids */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path
            fill="#1FA8F0"
            fillOpacity="0.25"
            d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Radiant ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          {/* Badge if provided */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/25 border border-orange-400/40 text-orange-200 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>{badgeText}</span>
            </div>
          )}

          {/* Title - Exact official bold font */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2">
            {pageTitle}
          </h1>

          {/* Subtitle if any */}
          {subtitle && (
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl font-normal mb-4">
              {subtitle}
            </p>
          )}

          {/* Breadcrumb Links: Home > PageName */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-100 font-medium">
            <button
              onClick={onHomeClick}
              className="inline-flex items-center gap-1 hover:text-brand-orange transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-orange-300" />
            <span className="text-white font-bold">{breadcrumbText}</span>
          </nav>
        </div>

        {/* Official 3D Robotic Assistant Mascot Graphic on Right (Matching Screenshots 16, 20, 21, 30, 37) */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-white/10 to-blue-200/20 backdrop-blur-md border border-white/30 p-4 shadow-2xl flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
            {/* Robot Head Element */}
            <div className="relative w-24 h-24 rounded-2xl bg-white shadow-xl border-2 border-blue-100 flex flex-col items-center justify-center p-2 mb-1">
              <div className="w-16 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-brand-blue-dark flex items-center justify-around px-2 mb-1 shadow-inner">
                {/* Glowing cyan eyes */}
                <div className="w-3.5 h-3.5 rounded-full bg-brand-sky shadow-[0_0_8px_#1FA8F0] animate-pulse"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-brand-sky shadow-[0_0_8px_#1FA8F0] animate-pulse"></div>
              </div>
              <div className="w-6 h-1 rounded-full bg-brand-orange"></div>
              {/* Antenna */}
              <div className="absolute -top-3 w-1.5 h-3 bg-blue-400 rounded-full"></div>
              <div className="absolute -top-4 w-3 h-3 rounded-full bg-brand-orange shadow-sm"></div>
            </div>
            <span className="text-xs font-black text-white tracking-wider">AmiHive AI</span>
            <span className="text-[10px] text-orange-200 font-bold">Official Assistant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
