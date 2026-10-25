import React, { useState } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { COMPANY_INFO } from '../data/content'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Building,
  User,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from '../components/SocialIcons'

interface ContactPageProps {
  setActivePage: (page: string) => void
  onOpenBriefBuilder: () => void
}

export const ContactPage: React.FC<ContactPageProps> = ({
  setActivePage,
  onOpenBriefBuilder,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleSendViaWhatsApp = () => {
    const text = `Hi AmiHive Team,
Name: ${formState.name}
Company: ${formState.company || 'N/A'}
Email: ${formState.email}
Phone: ${formState.phone}
Subject: ${formState.subject}
Message: ${formState.message}`
    window.open(`https://wa.me/918300611720?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      <Breadcrumb
        pageTitle="ContactUs"
        breadcrumbText="Contact Us"
        subtitle="Connect with our software architects, request enterprise proposals, or schedule an executive technical consultation."
        badgeText="LET'S WORK TOGETHER"
        onHomeClick={() => setActivePage('home')}
      />

      {/* =========================================================================
          SMART IT SOLUTIONS & INTRO (Screenshot 37)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
              Smart <span className="text-brand-orange">IT Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you're planning your next digital transformation, looking for expert guidance, or need reliable technical support, our team is here to help you every step of the way. Reach out today and let's create something extraordinary together.
            </p>
          </div>

          {/* Preserved Contact Cards Grid (Screenshots 37 & 38) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Card 1: Head Office */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-brand-blue hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                Head Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Marthandam, Kanyakumari Dt, Tamil Nadu, India
              </p>
            </div>

            {/* Card 2: Email Us */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-brand-orange hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-brand-orange flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                Email Us
              </h3>
              <div className="text-xs sm:text-sm text-slate-600 space-y-0.5">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-brand-orange block transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.secondaryEmail}`}
                  className="hover:text-brand-orange block transition-colors text-xs text-slate-500"
                >
                  {COMPANY_INFO.secondaryEmail}
                </a>
              </div>
            </div>

            {/* Card 3: Call Us */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-brand-orange hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                Call Us
              </h3>
              <div className="text-xs sm:text-sm text-slate-600 space-y-0.5">
                <p>Phone: {COMPANY_INFO.phone}</p>
                <p className="text-brand-blue font-bold">WhatsApp: {COMPANY_INFO.whatsapp}</p>
              </div>
            </div>

            {/* Card 4: Free Consultations */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-brand-orange hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                Free Consultations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                Get expert guidance for your project. Book a session anytime.
              </p>
              <button
                onClick={onOpenBriefBuilder}
                className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 cursor-pointer"
              >
                <span>Book / Plan Brief</span>
                <Sparkles className="w-3 h-3 text-brand-orange" />
              </button>
            </div>
          </div>

          {/* Social Platforms Row (Screenshot 38) */}
          <div className="mt-8 p-6 rounded-2xl bg-orange-50/40 border border-orange-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Follow Our Social Platforms</h4>
              <p className="text-xs text-slate-600">
                Stay connected with us for updates, tech insights, and the latest trends in innovation, software development, and business technology.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-brand-blue hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all shadow-2xs"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-brand-orange hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all shadow-2xs"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-blue-700 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CONTACT FORM & MAP EMBED (Screenshot 39)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Container (Screenshot 39) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-3xl border border-slate-700 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="mb-8">
              <span className="text-[11px] font-black uppercase tracking-wider text-brand-amber block mb-1">
                DIRECT INQUIRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Send us a message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                We'd love to hear from you. Fill out the form below.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-sky flex items-center justify-center mx-auto border border-brand-orange/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, {formState.name}. Your inquiry has been received by the AmiHive Solutions desk. We will respond promptly within standard business hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                      })
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-amber" />
                      <span>Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-brand-amber" />
                      <span>Company</span>
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Your company / organization"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-amber" />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-amber" />
                      <span>Phone *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 / International"
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Enterprise Web Modernization & AI Integration"
                    className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your vision, timeline, or engineering questions..."
                    className="w-full text-xs sm:text-sm p-4 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-8 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-lg shadow-orange-500/30 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto py-3.5 px-7 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Map Embed and Headquarters Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <div className="p-4 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <MapPin className="w-4 h-4 text-brand-amber" />
                  <span>Headquarters: Marthandam, Tamil Nadu</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Marthandam,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-brand-amber hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe Embed */}
              <div className="w-full h-80 sm:h-96">
                <iframe
                  title="AmiHive Location Map"
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-50 contrast-125"
                ></iframe>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-sky" />
                <span>Enterprise Privacy &amp; NDA Protection</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Every inquiry is handled under strict professional confidentiality. We execute mutual Non-Disclosure Agreements (NDA) prior to reviewing proprietary technical architectures or source code repositories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
