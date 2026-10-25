import React, { useState } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { FAQ_LIST, COMPANY_INFO } from '../data/content'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageSquare,
  Search,
  FileSpreadsheet,
} from 'lucide-react'

interface FAQPageProps {
  setActivePage: (page: string) => void
  onOpenBriefBuilder: () => void
}

export const FAQPage: React.FC<FAQPageProps> = ({ setActivePage, onOpenBriefBuilder }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3'])
  const [faqSearch, setFaqSearch] = useState<string>('')

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredFaqs = FAQ_LIST.filter(
    (f) =>
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase())
  )

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      <Breadcrumb
        pageTitle="FAQ"
        breadcrumbText="FAQ"
        subtitle="Clear answers about our engineering capabilities, engagement models, project timelines, and post-launch enterprise support."
        badgeText="COMMONLY ASKED QUESTIONS"
        onHomeClick={() => setActivePage('home')}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              Most Common <span className="text-brand-orange">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Find transparent insights on how we collaborate, deliver on schedule, and guarantee high engineering quality.
            </p>

            {/* Quick Search */}
            <div className="relative max-w-md mx-auto mt-6">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search questions (e.g. support, timeline, international)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-[#F8FAFC] focus:bg-white"
              />
            </div>
          </div>

          {/* Grid Layout: Visual on Left (matching screenshot) + Accordions on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Column (Professional Representative - Screenshot 31) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="AmiHive client consultant ready to answer questions"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.onerror = null
                    target.src =
                      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-brand-orange">
                        Need custom guidance?
                      </h4>
                      <p className="text-xs text-slate-700">
                        Our technical architects are available for direct sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion Column (All 6 Preserved Questions - Screenshots 31-36) */}
            <div className="lg:col-span-7 space-y-4">
              {filteredFaqs.map((item) => {
                const isOpen = openIds.includes(item.id)
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-brand-blue bg-blue-50/20 shadow-md ring-1 ring-blue-500/20'
                        : 'border-slate-200 hover:border-orange-300 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-base font-bold text-slate-900 leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                        {item.answer}
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Help card */}
              <div className="mt-8 p-6 rounded-2xl bg-orange-50/40 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Have a specific or unlisted question?
                    </h4>
                    <p className="text-xs text-slate-600">
                      Reach out directly to our engineering support desk or generate a scope brief.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenBriefBuilder}
                    className="px-4 py-2.5 rounded-full bg-white hover:bg-orange-100 text-brand-orange border border-orange-200 text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Brief Builder</span>
                  </button>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
