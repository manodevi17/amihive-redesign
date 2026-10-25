import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ProjectModal } from './components/ProjectModal'
import { ServiceFinder } from './components/ServiceFinder'
import { BriefBuilder } from './components/BriefBuilder'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'
import type { ProjectItem } from './data/types'

export function App() {
  const [activePage, setActivePage] = useState<string>('home')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isServiceFinderOpen, setIsServiceFinderOpen] = useState<boolean>(false)
  const [isBriefBuilderOpen, setIsBriefBuilderOpen] = useState<boolean>(false)
  const [briefInitialTitle, setBriefInitialTitle] = useState<string | undefined>(undefined)
  const [serviceFinderData, setServiceFinderData] = useState<
    | {
        industry?: string
        goal?: string
        timeline?: string
        recommendation?: string
        techStack?: string[]
      }
    | undefined
  >(undefined)

  // URL hash sync for direct links (e.g. #about, #services, #projects, #faq, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['home', 'about', 'services', 'projects', 'faq', 'contact'].includes(hash)) {
        setActivePage(hash)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handlePageChange = (page: string) => {
    setActivePage(page)
    window.location.hash = page === 'home' ? '' : page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenBriefBuilder = (initialTitle?: string) => {
    setBriefInitialTitle(initialTitle)
    setIsBriefBuilderOpen(true)
  }

  const handleTransferFromServiceFinder = (summary: {
    industry: string
    goal: string
    timeline: string
    recommendation: string
    techStack: string[]
  }) => {
    setServiceFinderData(summary)
    setBriefInitialTitle(summary.recommendation)
    setIsBriefBuilderOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-brand-orange selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBriefBuilder={() => handleOpenBriefBuilder()}
        onOpenServiceFinder={() => setIsServiceFinderOpen(true)}
      />

      {/* Main Page Canvas */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenBriefBuilder={handleOpenBriefBuilder}
            onOpenServiceFinder={() => setIsServiceFinderOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={handlePageChange}
            onOpenBriefBuilder={() => handleOpenBriefBuilder()}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={handlePageChange}
            onOpenBriefBuilder={handleOpenBriefBuilder}
            onOpenServiceFinder={() => setIsServiceFinderOpen(true)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            setActivePage={handlePageChange}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenBriefBuilder={handleOpenBriefBuilder}
          />
        )}

        {activePage === 'faq' && (
          <FAQPage
            setActivePage={handlePageChange}
            onOpenBriefBuilder={() => handleOpenBriefBuilder()}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            setActivePage={handlePageChange}
            onOpenBriefBuilder={() => handleOpenBriefBuilder()}
          />
        )}
      </main>

      {/* Enterprise Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenBriefBuilder={() => handleOpenBriefBuilder()}
      />

      {/* Case Study Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBriefBuilder={handleOpenBriefBuilder}
      />

      {/* Smart Service Finder Interactive Advisor Modal */}
      <ServiceFinder
        isOpen={isServiceFinderOpen}
        onClose={() => setIsServiceFinderOpen(false)}
        onSelectServiceAndBrief={handleTransferFromServiceFinder}
      />

      {/* Enterprise Project Brief Builder Modal */}
      <BriefBuilder
        isOpen={isBriefBuilderOpen}
        onClose={() => {
          setIsBriefBuilderOpen(false)
          setBriefInitialTitle(undefined)
          setServiceFinderData(undefined)
        }}
        initialProjectTitle={briefInitialTitle}
        initialData={serviceFinderData}
      />

      {/* Floating Instant WhatsApp Desk */}
      <WhatsAppButton />
    </div>
  )
}

export default App
