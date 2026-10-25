import React, { useState, useEffect } from 'react'
import { AmiHiveLogo } from './AmiHiveLogo'
import { COMPANY_INFO } from '../data/content'
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  MessageSquare,
  FileSpreadsheet,
} from 'lucide-react'

interface NavbarProps {
  activePage: string
  setActivePage: (page: string) => void
  onOpenBriefBuilder?: () => void
  onOpenServiceFinder?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenBriefBuilder,
  onOpenServiceFinder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Enterprise Contact Utility Bar */}
      <div className="hidden lg:block bg-brand-navy text-slate-300 border-b border-blue-900/40 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-sky" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Marthandam, Kanyakumari Dt, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {onOpenServiceFinder && (
              <button
                onClick={onOpenServiceFinder}
                className="text-xs text-orange-200 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Sparkles className="w-3 h-3 text-brand-orange" />
                <span>Service Finder</span>
              </button>
            )}
            <span className="text-slate-600">|</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-sky hover:text-brand-sky flex items-center gap-1 font-medium transition-colors"
            >
              <span>WhatsApp Direct</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Background as on official website) */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-md py-3 border-b border-slate-200'
            : 'py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="cursor-pointer focus:outline-none"
            aria-label="AmiHive Home"
          >
            <AmiHiveLogo variant="dark" size="md" />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-extrabold tracking-wider transition-colors cursor-pointer rounded-md ${
                    isActive
                      ? 'text-brand-orange font-black'
                      : 'text-brand-blue-dark hover:text-brand-orange'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-orange rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenBriefBuilder && (
              <button
                onClick={onOpenBriefBuilder}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-blue-dark hover:text-brand-orange bg-blue-50/70 hover:bg-orange-50 border border-blue-200 hover:border-orange-200 rounded-full transition-all cursor-pointer"
                title="Create a customized project scope & cost brief"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-brand-orange" />
                <span>Brief Builder</span>
              </button>
            )}

            {/* Official Connect Us Pill Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blue hover:from-brand-blue hover:to-brand-blue-dark rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>Connect Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blue rounded-full shadow-xs"
            >
              Connect Us
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => {
                const isActive = activePage === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'text-brand-orange bg-orange-50 font-black'
                        : 'text-brand-blue-dark hover:text-brand-orange hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-brand-orange" />}
                  </button>
                )
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {onOpenBriefBuilder && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onOpenBriefBuilder()
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-orange-200 text-brand-orange text-sm font-bold hover:bg-orange-50"
                >
                  <FileSpreadsheet className="w-4 h-4 text-brand-orange" />
                  <span>Interactive Brief Builder</span>
                </button>
              )}
              {onOpenServiceFinder && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onOpenServiceFinder()
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-blue-200 bg-blue-50/50 text-brand-blue text-sm font-bold"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Smart Service Finder</span>
                </button>
              )}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-orange text-white text-sm font-bold hover:bg-brand-orange-hover shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
