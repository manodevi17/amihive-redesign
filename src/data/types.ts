export interface ServiceItem {
  id: string
  title: string
  tagline: string
  description: string
  iconName: string
  category: 'core' | 'development' | 'ai-data' | 'design' | 'security'
  features: string[]
  technologies: string[]
  deliverables: string[]
  metrics?: string
  image: string
}

export interface ProjectItem {
  id: string
  title: string
  category: string
  categoryFilter: 'all' | 'ai' | 'web' | 'mobile' | 'iot' | 'marketing'
  summary: string
  description: string
  challenge: string
  solution: string
  impact: string[]
  tags: string[]
  image: string
  clientIndustry: string
  year: string
  featured?: boolean
}

export interface TestimonialItem {
  id: string
  clientName: string
  roleOrCompany: string
  industry: string
  quote: string
  rating: number
  avatarText: string
  accentColor: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'services' | 'delivery' | 'support'
}

export interface ValuePillar {
  title: string
  description: string
  iconName: string
  tag: string
}

export interface StrategicStep {
  step: string
  title: string
  description: string
  iconName: string
  subItems: string[]
}

export interface SkillMeter {
  label: string
  percentage: number
}
