import React from 'react'
import { AmiHiveLogo } from './AmiHiveLogo'
import { COMPANY_INFO } from '../data/content'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Send,
  FileSpreadsheet,
} from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from './SocialIcons'

interface FooterProps {
  setActivePage: (page: string) => void
  onOpenBriefBuilder?: () => void
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenBriefBuilder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateTo = (page: string) => {
    setActivePage(page)
    scrollToTop()
  }

  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-blue-950">
      {/* Top Pre-Footer / Official CTA Banner (Screenshot 15) */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-blue-dark to-brand-navy border-b border-blue-800/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-amber block mb-1">
              LET'S TALK
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              LET'S BUILD YOUR NEXT <span className="text-brand-orange">PROJECT TOGETHER</span>
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
              Partner with AmiHive to transform your concepts into enterprise-grade, high-performance digital ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenBriefBuilder && (
              <button
                onClick={onOpenBriefBuilder}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-bold transition-all cursor-pointer backdrop-blur-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-brand-amber" />
                <span>Build Project Brief</span>
              </button>
            )}

            {/* Official Orange Start Your Project Pill Button */}
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-lg shadow-orange-500/30 transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
            >
              <span>Start Your Project</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <AmiHiveLogo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              AmiHive Software Solutions engineers intelligent, scalable, and secure digital platforms. We blend deep technical capability with human-centric design to drive high-impact transformation for global enterprises.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-3">
                Connect with Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-brand-blue border border-blue-800/40 text-blue-200 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-brand-orange border border-blue-800/40 text-blue-200 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-slate-700 border border-blue-800/40 text-blue-200 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-950/80 hover:bg-[#0077B5] border border-blue-800/40 text-blue-200 hover:text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.id)}
                    className="hover:text-brand-amber hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 text-slate-400"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  AI & Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  UI / UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  Cybersecurity & Protection
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-brand-amber transition-colors cursor-pointer text-left"
                >
                  SEO & Digital Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-brand-amber transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>{COMPANY_INFO.email}</span>
                  <span className="text-[11px] text-slate-500">{COMPANY_INFO.secondaryEmail}</span>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-brand-amber transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-sky" />
                <span>Enterprise SLA & NDA Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-12 mt-12 border-t border-blue-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 AmiHive Software Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Terms of Service</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-orange-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
