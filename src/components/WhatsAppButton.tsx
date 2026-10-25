import React, { useState } from 'react'
import { MessageSquare, X, Send, Clock, ShieldCheck } from 'lucide-react'
import { COMPANY_INFO } from '../data/content'

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(
    'Hello AmiHive Team! I would like to schedule an enterprise project consultation.'
  )

  const quickPresets = [
    'Enterprise Web & Cloud Modernization',
    'AI Automation & Process Optimization',
    'Mobile App Architecture (iOS/Android)',
    'Request a Custom Quote & Timeline',
  ]

  const handleSend = () => {
    const encoded = encodeURIComponent(selectedMessage)
    window.open(`https://wa.me/918300611720?text=${encoded}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-slate-800">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                  AH
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">AmiHive Direct Desk</h3>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white/90 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 border-b border-slate-100 text-xs text-slate-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Connect directly with our senior technology architects.</span>
          </div>

          <div className="p-4 space-y-3">
            <label className="block text-xs font-semibold text-slate-700">
              Quick Inquiries:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {quickPresets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setSelectedMessage(`Hi AmiHive, I'm interested in ${preset}.`)}
                  className="text-[11px] text-left px-2.5 py-1 rounded-md bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-slate-200 text-slate-700 transition-all cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Message:
              </label>
              <textarea
                value={selectedMessage}
                onChange={(e) => setSelectedMessage(e.target.value)}
                rows={3}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-md transition-all cursor-pointer active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat ({COMPANY_INFO.phone})</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp assistance"
      >
        <div className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none group-hover:bg-[#25D366]/50"></div>
        <MessageSquare className="w-7 h-7 relative z-10" />
        <span className="sr-only">Open WhatsApp chat</span>

        {/* Tooltip on hover */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap shadow-lg">
            Chat with an Expert
          </span>
        )}
      </button>
    </div>
  )
}
