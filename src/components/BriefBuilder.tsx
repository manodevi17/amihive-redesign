import React, { useState } from 'react'
import {
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Send,
  Calendar,
  User,
  Building,
  Mail,
  Phone,
} from 'lucide-react'
import { COMPANY_INFO } from '../data/content'

interface BriefBuilderProps {
  isOpen: boolean
  onClose: () => void
  initialProjectTitle?: string
  initialData?: {
    industry?: string
    goal?: string
    timeline?: string
    recommendation?: string
    techStack?: string[]
  }
}

export const BriefBuilder: React.FC<BriefBuilderProps> = ({
  isOpen,
  onClose,
  initialProjectTitle,
  initialData,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [copied, setCopied] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  // Form State
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    'Web & Cloud Application',
  ])
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([
    'Authentication & Security (RBAC)',
  ])
  const [selectedTier, setSelectedTier] = useState<string>('growth')
  const [clientInfo, setClientInfo] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: initialProjectTitle
      ? `Interested in architecture similar to: ${initialProjectTitle}`
      : initialData?.recommendation
      ? `Recommended by Service Finder: ${initialData.recommendation} (${initialData.industry})`
      : '',
  })

  if (!isOpen) return null

  const capabilitiesList = [
    { id: 'web', label: 'Web & Cloud Application', desc: 'React, Next.js, Node.js SPAs & Enterprise Portals' },
    { id: 'ai', label: 'AI Automation & LLMs', desc: 'Custom Agents, Workflow Triggers & Data Pipelines' },
    { id: 'mobile', label: 'Mobile App (iOS/Android)', desc: 'React Native, Flutter Cross-Platform Engineering' },
    { id: 'ecom', label: 'E-Commerce Platform', desc: 'Multi-Currency Checkout & Real-time Inventory' },
    { id: 'brand', label: 'Brand Identity & UI/UX', desc: 'Design Systems, Vector Logos & High-Fidelity Prototypes' },
    { id: 'security', label: 'Cybersecurity & Compliance', desc: 'Penetration Testing, WAF & Zero-Trust Defense' },
  ]

  const integrationsList = [
    { id: 'auth', label: 'Authentication & Security (RBAC)' },
    { id: 'payments', label: 'Payment Gateway (Stripe / Razorpay / PayPal)' },
    { id: 'realtime', label: 'Real-Time WebSockets & Streaming' },
    { id: 'crm', label: 'CRM / ERP Synchronization' },
    { id: 'ai-engine', label: 'Custom AI Models & Vector Search' },
    { id: 'cloud-infra', label: 'Multi-Zone Cloud Deployment (AWS / Azure)' },
  ]

  const tiers = [
    {
      id: 'mvp',
      name: 'Rapid Sprint MVP',
      timeline: '2 – 4 Weeks',
      bestFor: 'Startups & Fast Prototype Launches',
      badge: 'Speed Priority',
    },
    {
      id: 'growth',
      name: 'Production Enterprise System',
      timeline: '5 – 8 Weeks',
      bestFor: 'Growing Businesses & Commercial Platforms',
      badge: 'Most Popular',
    },
    {
      id: 'enterprise',
      name: 'Full Scale Modernization & Retainer',
      timeline: '8 – 12+ Weeks',
      bestFor: 'Multi-System Digital Ecosystems & Dedicated Squad',
      badge: 'Enterprise SLA',
    },
  ]

  const toggleCapability = (label: string) => {
    setSelectedCapabilities((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    )
  }

  const toggleIntegration = (label: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    )
  }

  const generateBriefText = () => {
    return `=== AMIHIVE ENTERPRISE PROJECT BRIEF ===
Generated: ${new Date().toLocaleDateString()}
Client Name: ${clientInfo.name || 'Not specified'}
Company: ${clientInfo.company || 'Not specified'}
Email: ${clientInfo.email || 'Not specified'}
Phone: ${clientInfo.phone || 'Not specified'}

Target Execution Tier: ${
      tiers.find((t) => t.id === selectedTier)?.name
    } (${tiers.find((t) => t.id === selectedTier)?.timeline})

Selected Capabilities:
${selectedCapabilities.map((c) => `- ${c}`).join('\n')}

Architectural Integrations:
${selectedIntegrations.map((i) => `- ${i}`).join('\n')}

Project Notes & Requirements:
${clientInfo.notes || 'No custom notes provided.'}

Engineering Firm: AmiHive Software Solutions
Email: ${COMPANY_INFO.email} | Phone: ${COMPANY_INFO.phone}
Marthandam, Kanyakumari Dt, Tamil Nadu, India
========================================`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generateBriefText())
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleWhatsAppSend = () => {
    const briefText = generateBriefText()
    const encoded = encodeURIComponent(briefText)
    window.open(`https://wa.me/918300611720?text=${encoded}`, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-navy text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/25 border border-orange-400/40 text-orange-200 text-xs font-bold uppercase tracking-wider mb-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-brand-amber" />
              Enterprise Project Brief Builder
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Interactive Scope & Architecture Planner
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 font-normal">
              Configure your requirements, select architectural integrations, and generate a tailored engineering brief in minutes.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close brief builder"
          >
            ✕
          </button>
        </div>

        {/* Multi-Step Stepper Indicator */}
        <div className="px-6 py-3 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between text-xs">
          {[
            { num: 1, label: 'Scope' },
            { num: 2, label: 'Integrations' },
            { num: 3, label: 'Timeline & Tier' },
            { num: 4, label: 'Review & Submit' },
          ].map((s) => {
            const isActive = currentStep === s.num
            const isCompleted = currentStep > s.num
            return (
              <button
                key={s.num}
                onClick={() => setCurrentStep(s.num)}
                className={`flex items-center gap-2 font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-brand-orange'
                    : isCompleted
                    ? 'text-brand-blue'
                    : 'text-slate-500'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-xs'
                      : isCompleted
                      ? 'bg-brand-blue-50 text-brand-blue-dark'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {isCompleted ? '✓' : s.num}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            )
          })}
        </div>

        {/* Step Content */}
        <div className="p-6 sm:p-8 max-h-[62vh] overflow-y-auto">
          {/* STEP 1: CAPABILITIES */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900">
                  Step 1: Select Required Project Capabilities
                </h3>
                <p className="text-xs text-slate-600">
                  Select one or multiple modules needed for your platform.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilitiesList.map((item) => {
                  const isChecked = selectedCapabilities.includes(item.label)
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCapability(item.label)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'border-brand-orange bg-orange-50/70 shadow-xs ring-2 ring-orange-500/20'
                          : 'border-slate-200 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-brand-orange border-brand-orange text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 2: INTEGRATIONS */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900">
                  Step 2: Key Architecture & Integrations
                </h3>
                <p className="text-xs text-slate-600">
                  Identify essential backend infrastructure, APIs, and security requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {integrationsList.map((item) => {
                  const isChecked = selectedIntegrations.includes(item.label)
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIntegration(item.label)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'border-brand-orange bg-orange-50/70 ring-2 ring-orange-500/20'
                          : 'border-slate-200 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        {item.label}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-2 transition-colors ${
                          isChecked
                            ? 'bg-brand-orange border-brand-orange text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 3: TIMELINE & TIER */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900">
                  Step 3: Execution Tier & Timeline Expectations
                </h3>
                <p className="text-xs text-slate-600">
                  Choose the cadence and engineering depth that matches your organization’s schedule.
                </p>
              </div>

              <div className="space-y-3">
                {tiers.map((tier) => {
                  const isSelected = selectedTier === tier.id
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-brand-orange bg-orange-50/80 shadow-md ring-2 ring-orange-500/20'
                          : 'border-slate-200 hover:border-orange-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-900">{tier.name}</span>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-100 text-brand-orange font-bold">
                            {tier.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">{tier.bestFor}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue bg-white px-3 py-1.5 rounded-full border border-blue-200 shadow-2xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {tier.timeline}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected
                              ? 'border-brand-orange bg-brand-orange text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & CONTACT */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-blue-50 text-brand-blue flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Project Brief Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Our engineering team at AmiHive Software Solutions will review your specification and reach out via email/phone within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via WhatsApp for Instant Response</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Step 4: Contact Details & Specification Review
                    </h3>
                    <p className="text-xs text-slate-600">
                      Enter your details so we can send the formal specification and timeline estimate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={clientInfo.name}
                          onChange={(e) =>
                            setClientInfo({ ...clientInfo, name: e.target.value })
                          }
                          placeholder="e.g. David Miller"
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company or Brand Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={clientInfo.company}
                          onChange={(e) =>
                            setClientInfo({ ...clientInfo, company: e.target.value })
                          }
                          placeholder="e.g. Nexus Enterprises"
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={clientInfo.email}
                          onChange={(e) =>
                            setClientInfo({ ...clientInfo, email: e.target.value })
                          }
                          placeholder="david@company.com"
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={clientInfo.phone}
                          onChange={(e) =>
                            setClientInfo({ ...clientInfo, phone: e.target.value })
                          }
                          placeholder="+91 / International"
                          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Goals, Context or Vision Notes
                    </label>
                    <textarea
                      rows={3}
                      value={clientInfo.notes}
                      onChange={(e) =>
                        setClientInfo({ ...clientInfo, notes: e.target.value })
                      }
                      placeholder="Briefly describe what you are looking to build or transform..."
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Brief Specification Preview
                      </span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 text-xs text-brand-orange hover:text-brand-orange-hover font-bold cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied Specification!' : 'Copy Spec'}</span>
                      </button>
                    </div>

                    <pre className="text-[11px] font-mono text-slate-600 bg-white p-3 rounded-xl border border-slate-200 whitespace-pre-wrap max-h-36 overflow-y-auto">
                      {generateBriefText()}
                    </pre>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black rounded-full shadow-md transition-all cursor-pointer active:scale-98 uppercase tracking-wider"
                    >
                      Submit Brief to AmiHive Engineering
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto py-3.5 px-6 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Stepper Controls */}
        {!submitted && (
          <div className="px-6 py-4 bg-[#F8FAFC] border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                currentStep === 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <span className="text-xs font-bold text-slate-600 font-mono">
              Step {currentStep} of 4
            </span>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                className="inline-flex items-center gap-1.5 px-6 py-2 text-xs font-black text-white bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover rounded-full shadow-xs transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs font-bold text-brand-blue">
                Ready to submit
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
