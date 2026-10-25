import React from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import {
  STRATEGIC_STEPS,
  SKILL_METERS,
} from '../data/content'
import {
  Sparkles,
  BrainCircuit,
  Workflow,
  Target,
  Search,
  PenTool,
  Rocket,
  Award,
  Globe2,
} from 'lucide-react'

interface AboutPageProps {
  setActivePage: (page: string) => void
  onOpenBriefBuilder: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenBriefBuilder }) => {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* Enterprise Header - Official Blue Wave & 3D Mascot */}
      <Breadcrumb
        pageTitle="AboutUs"
        breadcrumbText="About Us"
        subtitle="Empowering organizations worldwide through modern cloud architecture, smart automation, and disciplined full-stack engineering."
        badgeText="WHO WE ARE"
        onHomeClick={() => setActivePage('home')}
      />

      {/* =========================================================================
          WHO WE ARE SECTION (Screenshots 16 & 17)
         ========================================================================= */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="AmiHive executive leadership and engineers shaking hands"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget
                  target.onerror = null
                  target.src =
                    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

              {/* Overlaid Statistics Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-brand-orange">
                      HEADQUARTERS
                    </h4>
                    <p className="text-sm font-black text-slate-900">
                      Marthandam, Tamil Nadu, India
                    </p>
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-black">
                    Global Reach
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preserved Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Scalable IT Solutions <span className="text-brand-orange">for Modern Businesses</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At AmiHive, we engineer smart, scalable, and high-performance digital solutions designed to accelerate business transformation. By blending deep technical expertise with creative problem-solving, we help organizations unlock new opportunities and achieve sustainable growth.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether it's custom software development, AI-powered automation, cloud modernization, or enterprise-level digital strategy, we focus on building technology that strengthens your operations and drives long-term success in a rapidly evolving digital world.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <Award className="w-5 h-5 text-brand-blue mb-1.5" />
                <div className="text-sm font-bold text-slate-900">Enterprise Standards</div>
                <div className="text-xs text-slate-500">Zero-compromise engineering</div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <Globe2 className="w-5 h-5 text-brand-orange mb-1.5" />
                <div className="text-sm font-bold text-slate-900">Worldwide Delivery</div>
                <div className="text-xs text-slate-500">Cross-timezone collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STRATEGIC APPROACH (Screenshot 18)
         ========================================================================= */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              EXECUTION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 mb-3">
              Our Strategic <span className="text-brand-orange">Approach</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Our workflow combines deep understanding, intelligent design, and high-performance development to deliver impactful IT solutions that drive digital transformation and long-term business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STRATEGIC_STEPS.map((s) => (
              <div
                key={s.step}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-brand-orange transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200">{s.step}</span>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-brand-orange flex items-center justify-center">
                      {s.iconName === 'Search' && <Search className="w-6 h-6" />}
                      {s.iconName === 'PenTool' && <PenTool className="w-6 h-6" />}
                      {s.iconName === 'Rocket' && <Rocket className="w-6 h-6" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Phase Scope:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {s.subItems.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEAD WITH INNOVATION. BUILD SMARTER (Screenshot 19)
         ========================================================================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Progress Meters */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
                CAPABILITY SPECTRUM
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Lead With Innovation.{' '}
                <span className="text-brand-orange">Build Smarter</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We merge creativity, strategy, and advanced technology to transform ideas into impactful digital solutions — delivering innovation, precision, and exceptional brand experiences.
              </p>

              {/* Preserved Skill Progress Bars with Blue & Orange Gradients */}
              <div className="space-y-5 pt-4">
                {SKILL_METERS.map((meter) => (
                  <div key={meter.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800">
                      <span>{meter.label}</span>
                      <span className="text-brand-orange font-black font-mono">{meter.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-orange to-brand-orange-deep transition-all duration-1000"
                        style={{ width: `${meter.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Preserved Value Cards (Screenshot 19 - Blue, Green, Lavender, Orange) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Blue - Innovative Creative Team */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    Innovative Creative Team
                  </h3>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Our team blends imagination with strategic thinking to craft compelling visuals that strengthen your brand identity.
                  </p>
                </div>
              </div>

              {/* Card 2: Green - Intelligent IT Solutions */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    Intelligent IT Solutions
                  </h3>
                  <p className="text-xs text-brand-blue-50 leading-relaxed">
                    We deliver smart, scalable, and data-driven digital solutions that empower businesses to grow and evolve with confidence.
                  </p>
                </div>
              </div>

              {/* Card 3: Light Blue/Lavender - Reliable & High-Performance Workflow */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-sky to-brand-blue text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    Reliable &amp; High-Performance Workflow
                  </h3>
                  <p className="text-xs text-blue-50 leading-relaxed">
                    Our goal-driven process ensures agile delivery, rigorous testing, and resilient solutions engineered to perform under demanding enterprise loads.
                  </p>
                </div>
              </div>

              {/* Card 4: Vibrant Orange - Goal-Focused Execution */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2 leading-snug">
                    Goal-Focused Execution
                  </h3>
                  <p className="text-xs text-orange-100 leading-relaxed">
                    We align every design, strategy, and development step with your business objectives to deliver measurable growth and undeniable ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Strip */}
      <section className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-navy text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-black text-white">
              Ready to collaborate with AmiHive?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Let's craft the strategic roadmap for your digital transformation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBriefBuilder}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/25 transition-all cursor-pointer"
            >
              Build Project Brief
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep hover:from-brand-orange hover:to-brand-orange-hover text-white text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer active:scale-95 uppercase tracking-wider"
            >
              Connect Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
