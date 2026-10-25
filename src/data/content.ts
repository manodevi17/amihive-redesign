import type { ServiceItem, ProjectItem, TestimonialItem, FAQItem, ValuePillar, StrategicStep, SkillMeter } from './types'

export const COMPANY_INFO = {
  name: 'AmiHive Software Solutions',
  shortName: 'AmiHive',
  tagline: 'Premium IT Solutions & Digital Transformation',
  mission:
    'We build cutting-edge digital ecosystems powered by cloud, automation, AI, full-stack engineering, and enterprise-grade architectures — designed to scale your business.',
  email: 'info@amihive.com',
  secondaryEmail: 'amihive007@gmail.com',
  phone: '+91 83006 11720',
  whatsapp: '+91 83006 11720',
  whatsappUrl: 'https://wa.me/918300611720?text=Hello%20AmiHive%20Team%2C%20I%20would%20like%20to%20discuss%20a%20new%20technology%20project.',
  location: 'Marthandam, Kanyakumari Dt, Tamil Nadu, India',
  fullAddress: 'Marthandam, Kanyakumari District, Tamil Nadu 629165, India',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.3308964724647!2d77.2155!3d8.3186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04533036e84c17%3A0x6b445d4cbe23405!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
  },
  hours: 'Mon – Fri: 9:00 AM – 7:00 PM IST',
  emergencySupport: '24/7 SLA-backed Enterprise Monitoring',
}

export const ENTERPRISE_METRICS = [
  { value: '99.8%', label: 'On-Time Project Delivery', detail: 'Consistent agile milestone fulfillment' },
  { value: '50+', label: 'Digital Solutions Deployed', detail: 'From startups to enterprise ecosystems' },
  { value: '100%', label: 'Client Satisfaction Index', detail: 'Measured post-launch quality assurance' },
  { value: '24/7', label: 'Continuous Technical Support', detail: 'Zero-downtime mission-critical systems' },
]

export const CORE_PILLARS = [
  {
    id: 'web-software',
    title: 'Web & Software Development',
    description:
      'Build responsive, high-performance websites and custom software that align with your business goals and provide an exceptional user experience.',
    iconName: 'Code2',
    gradient: 'from-brand-blue to-brand-sky',
    deliverables: ['Custom Web Portals', 'Cloud Microservices', 'High-speed SPAs & SSR'],
  },
  {
    id: 'automation-process',
    title: 'Automation & Process Optimization',
    description:
      'Streamline your operations, reduce manual tasks, and improve efficiency with smart automation solutions tailored to your business.',
    iconName: 'Cpu',
    gradient: 'from-brand-blue-dark to-brand-blue',
    deliverables: ['Workflow Orchestration', 'RPA & Data Pipelines', 'AI Decision Engines'],
  },
  {
    id: 'branding-marketing',
    title: 'Branding & Digital Marketing',
    description:
      'Enhance your brand presence online with creative designs, social media strategies, and marketing campaigns that engage and convert.',
    iconName: 'Megaphone',
    gradient: 'from-brand-sky to-brand-blue-dark',
    deliverables: ['Identity & Design Systems', 'Performance Marketing', 'SEO Growth Strategy'],
  },
]

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Intelligent Autonomous Systems',
    description:
      'Automate workflows and eliminate repetitive tasks using powerful, AI-driven automation built on cutting-edge neural models.',
    iconName: 'Bot',
    category: 'ai-data',
    features: [
      'Custom LLM & Generative AI workflows',
      'Intelligent document processing & NLP',
      'Automated customer support routing',
      'Predictive analytics & workflow triggers',
    ],
    technologies: ['Python', 'OpenAI', 'LangChain', 'TensorFlow', 'FastAPI'],
    deliverables: ['Custom AI Agents', 'Data Pipelines', 'Operational Analytics'],
    metrics: 'Up to 70% reduction in manual repetitive cycles',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ecommerce-application',
    title: 'E-commerce Application',
    tagline: 'High-Converting Digital Commerce',
    description:
      'Build scalable and secure e-commerce platforms to boost your online business with frictionless checkout and smart inventory intelligence.',
    iconName: 'ShoppingBag',
    category: 'development',
    features: [
      'Multi-vendor & headless commerce architectures',
      'Real-time inventory & fulfillment tracking',
      'Global multi-currency payment gateways',
      'Personalized customer recommendation engine',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    deliverables: ['Custom Storefronts', 'Merchant Admin Suite', 'API Integrations'],
    metrics: 'Average 3.2x faster checkout page speeds',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Modern Enterprise-Grade Web',
    description:
      'High-performance websites built for speed, security, and modern user experience using resilient React and Next.js foundations.',
    iconName: 'Globe',
    category: 'development',
    features: [
      'Single Page Apps (SPA) & Server Side Rendering (SSR)',
      'Sub-second page load times with optimal Core Web Vitals',
      'Strict accessibility compliance (WCAG 2.1 AA)',
      'Scalable modular component libraries',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    deliverables: ['Production Web Apps', 'Design Systems', 'CI/CD Pipelines'],
    metrics: '95+ Google Lighthouse performance scoring',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'logo-branding',
    title: 'Logo & Branding',
    tagline: 'Memorable Corporate Identity',
    description:
      'Creative logos and brand graphics designed to make your brand stand out with cohesive design guidelines that project authority.',
    iconName: 'Palette',
    category: 'design',
    features: [
      'Corporate brand identity systems & vector logos',
      'Typography, color palettes & iconography design',
      'Marketing collateral & pitch deck design',
      'Interactive digital brand guidelines',
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Blender 3D'],
    deliverables: ['Brand Guidelines Book', 'Vector Asset Suite', 'Social Kits'],
    metrics: '100% vector scalability & brand consistency',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'static-dynamic-web-design',
    title: 'Static/Dynamic Web Design',
    tagline: 'Engaging Interactive Interfaces',
    description:
      'Visually stunning static and dynamic websites engineered for engagement, crystal-clear messaging, and seamless device responsiveness.',
    iconName: 'Layout',
    category: 'development',
    features: [
      'Fluid responsive layouts across mobile, tablet & desktop',
      'Smooth micro-interactions & GPU-accelerated motion',
      'CMS integration (Sanity, Strapi, WordPress Headless)',
      'SEO-friendly static generation & edge caching',
    ],
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Next.js'],
    deliverables: ['Custom Landing Pages', 'Corporate Portals', 'CMS Connectors'],
    metrics: '100% mobile-first responsive architecture',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'search-engine-optimization',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Organic Search Authority',
    description:
      'Boost your search rankings and grow your online visibility with advanced SEO methodologies, technical audits, and high-impact strategies.',
    iconName: 'TrendingUp',
    category: 'core',
    features: [
      'Deep technical SEO & structured schema markup',
      'Competitive keyword intelligence & topical authority',
      'Core Web Vitals acceleration & crawl optimization',
      'Local SEO & Google Business Profile dominance',
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Semrush', 'Lighthouse'],
    deliverables: ['Monthly Audit Reports', 'Keyword Roadmaps', 'Schema Setup'],
    metrics: 'Average 140% organic traffic growth within 6 months',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'High-Impact Multi-Channel Growth',
    description:
      'Expand your digital reach with high-converting marketing strategies, strategic social media positioning, and targeted paid campaigns.',
    iconName: 'Share2',
    category: 'core',
    features: [
      'Targeted pay-per-click (PPC) and paid social campaigns',
      'Conversion Rate Optimization (CRO) and funnel design',
      'Email automation, retention & lifecycle campaigns',
      'Full-funnel attribution and ROI dashboard reporting',
    ],
    technologies: ['Meta Ads', 'Google Ads', 'HubSpot', 'Mailchimp', 'GA4'],
    deliverables: ['Ad Creatives & Copy', 'Campaign Setup', 'ROI Analytics'],
    metrics: 'Consistent 3.5x to 6x Return on Ad Spend (ROAS)',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cybersecurity-protection',
    title: 'Cybersecurity & Protection',
    tagline: 'Enterprise Defense & Compliance',
    description:
      'Protect your digital assets with advanced cybersecurity solutions, penetration testing, automated vulnerability scanning, and secure architecture.',
    iconName: 'ShieldCheck',
    category: 'security',
    features: [
      'Comprehensive vulnerability assessment & penetration audits',
      'End-to-end data encryption in transit and at rest',
      'Identity & Access Management (IAM) with Zero Trust policies',
      'DDoS mitigation and Web Application Firewall (WAF) deployment',
    ],
    technologies: ['Cloudflare', 'OWASP', 'AWS IAM', 'SSL/TLS', 'Docker Security'],
    deliverables: ['Security Audit Report', 'WAF Architecture', 'Backup Plans'],
    metrics: 'Zero security breaches across client deployed estates',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mobile-app-ui-ux',
    title: 'Mobile App Development & UI/UX',
    tagline: 'Cross-Platform Mobile Engineering',
    description:
      'Modern mobile applications and intuitive user interfaces engineered for seamless interactions, native speed, and dark mode elegance.',
    iconName: 'Smartphone',
    category: 'development',
    features: [
      'iOS and Android native and cross-platform apps (React Native / Flutter)',
      'Human-centric UI/UX research, wireframing & prototyping',
      'Offline-first synchronization and push notifications',
      'App Store & Play Store publishing and CI/CD pipelines',
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Figma'],
    deliverables: ['App Store Binaries', 'UI/UX Prototypes', 'Backend APIs'],
    metrics: 'Smooth 60 FPS performance and 4.8+ user satisfaction rating',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
]

export const TECH_STACK = [
  { name: 'React', category: 'Frontend', badge: 'Core UI', icon: 'Code' },
  { name: 'Next.js', category: 'Frontend', badge: 'Full-Stack SSR', icon: 'Globe' },
  { name: 'Node.js', category: 'Backend', badge: 'Runtime', icon: 'Server' },
  { name: '.NET', category: 'Backend', badge: 'Enterprise API', icon: 'Cpu' },
  { name: 'Python AI', category: 'AI & Data', badge: 'Machine Learning', icon: 'Bot' },
  { name: 'AWS', category: 'Cloud', badge: 'Cloud Infrastructure', icon: 'Cloud' },
  { name: 'Docker', category: 'DevOps', badge: 'Containers', icon: 'Box' },
  { name: 'Kubernetes', category: 'DevOps', badge: 'Orchestration', icon: 'Layers' },
  { name: 'MongoDB', category: 'Database', badge: 'NoSQL Document', icon: 'Database' },
  { name: 'PostgreSQL', category: 'Database', badge: 'Relational DB', icon: 'HardDrive' },
  { name: 'TypeScript', category: 'Frontend', badge: 'Type Safety', icon: 'CheckCircle2' },
  { name: 'Tailwind CSS', category: 'Frontend', badge: 'Design System', icon: 'Sparkles' },
]

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'Reliable & Enterprise-Grade Security',
    description:
      'We implement advanced security standards to keep your data, applications, and infrastructure fully protected at every layer.',
    iconName: 'ShieldCheck',
    tag: 'Zero-Trust Protocol',
  },
  {
    title: 'Customer-Focused Collaboration',
    description:
      'We work closely with you so every solution aligns perfectly with your goals, timeline, and measurable business milestones.',
    iconName: 'Users',
    tag: 'Transparent Agility',
  },
  {
    title: 'Cutting-Edge & Innovative Solutions',
    description:
      'We deliver modern, scalable, and future-ready digital solutions engineered to scale seamlessly as your operations expand.',
    iconName: 'Zap',
    tag: 'Modern Engineering',
  },
  {
    title: 'On-Time & Efficient Delivery',
    description:
      'Every project is executed with precision, strict sprint governance, and proactive communication to ensure on-time delivery.',
    iconName: 'Clock',
    tag: 'Guaranteed Milestones',
  },
]

export const STRATEGIC_STEPS: StrategicStep[] = [
  {
    step: '01',
    title: 'Discover & Analyze',
    description:
      'We begin by understanding your business goals, audience, and challenges — creating data-driven strategies for guaranteed success.',
    iconName: 'Search',
    subItems: ['Stakeholder alignment workshops', 'Architecture audit & roadmap', 'KPI definition & feasibility study'],
  },
  {
    step: '02',
    title: 'Design & Develop',
    description:
      'We craft intuitive UI/UX and build robust digital experiences using modern frameworks, clean engineering, and automated testing.',
    iconName: 'PenTool',
    subItems: ['Interactive Figma prototypes', 'Agile bi-weekly sprint builds', 'Continuous integration & code audits'],
  },
  {
    step: '03',
    title: 'Launch & Empower',
    description:
      'We deploy your solution and provide ongoing support with an emphasis on scalability, high availability, and future-ready performance.',
    iconName: 'Rocket',
    subItems: ['Zero-downtime production deployment', 'Telemetry & APM monitoring', 'Ongoing maintenance & SLAs'],
  },
]

export const SKILL_METERS: SkillMeter[] = [
  { label: 'Programming & Full-Stack Development', percentage: 91 },
  { label: 'Creative Design, Graphics & 3D Visualization', percentage: 87 },
  { label: 'Animation & Motion Experience', percentage: 72 },
  { label: 'Digital Marketing & Brand Growth', percentage: 68 },
]

export const ABOUT_VALUE_CARDS = [
  {
    title: 'Innovative Creative Team',
    description:
      'Our team blends imagination with strategic thinking to craft compelling visuals that strengthen your brand identity and market perception.',
    iconName: 'Sparkles',
    accent: 'blue',
  },
  {
    title: 'Intelligent IT Solutions',
    description:
      'We deliver smart, scalable, and data-driven digital solutions that empower businesses to grow and evolve with absolute confidence.',
    iconName: 'BrainCircuit',
    accent: 'orange',
  },
  {
    title: 'Reliable & High-Performance Workflow',
    description:
      'Our goal-driven process ensures agile delivery, rigorous testing, and resilient solutions engineered to perform under demanding enterprise loads.',
    iconName: 'Workflow',
    accent: 'blue',
  },
  {
    title: 'Goal-Focused Execution',
    description:
      'We align every design, strategy, and development step with your business objectives to deliver measurable growth and undeniable ROI.',
    iconName: 'Target',
    accent: 'sky',
  },
]

export const FEATURED_CASE_STUDY: ProjectItem = {
  id: 'aurora-collaborative-workspace',
  title: 'Aurora — Collaborative Workspace',
  category: 'Featured Mixed-Reality & Cloud Platform',
  categoryFilter: 'ai',
  summary:
    'A next-generation mixed-reality workspace designed to power immersive teamwork, real-time decision-making, and seamless digital productivity.',
  description:
    'Aurora combines spatial computing, real-time telemetry, and enterprise microservices to allow distributed engineering teams to collaborate in persistent 3D data rooms with AI-assisted contextual guidance.',
  challenge:
    'Legacy remote collaboration tools faced latency bottlenecks, fragmented document silos, and poor cross-device synchronization during complex CAD and strategic planning sessions.',
  solution:
    'AmiHive engineered a high-throughput WebGL and WebRTC architecture backed by Node.js real-time event streaming and AI contextual summaries that dynamically synthesize discussion insights.',
  impact: [
    'Sub-50ms latency for global multi-user persistent spatial sessions',
    '38% reduction in cross-timezone meeting cycles for engineering squads',
    'Enterprise SSO with SOC-2 type II compliance and encrypted audit logging',
  ],
  tags: ['WebGL 3D', 'Real-Time WebRTC', 'AI Contextual NLP', 'Node.js', 'Persistent Sessions'],
  image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
  clientIndustry: 'Enterprise Collaboration & Spatial Tech',
  year: '2025 - 2026',
  featured: true,
}

export const PROJECTS_LIST: ProjectItem[] = [
  FEATURED_CASE_STUDY,
  {
    id: 'ai-chat-assistant',
    title: 'AI Chat Assistant / AI-Powered Chat Automation',
    category: 'Intelligent Conversational AI',
    categoryFilter: 'ai',
    summary:
      'Contextual help inside your workflow. An intelligent NLP-driven virtual assistant built to streamline customer interactions with real-time, human-like responses.',
    description:
      'An enterprise conversational agent trained on proprietary domain knowledge bases, capable of resolving Tier-1 support tickets, scheduling appointments, and escalating complex queries seamlessly.',
    challenge:
      'Customer support agents were overwhelmed with repetitive queries, resulting in 4+ hour response times during peak hours.',
    solution:
      'A multi-tier retrieval-augmented generation (RAG) assistant connected directly to CRM pipelines and ticketing systems with sentiment analysis.',
    impact: [
      '82% first-contact resolution rate on routine inquiries',
      'Average response time reduced from 4 hours to under 3 seconds',
      '24/7 multilingual coverage across English, Tamil, Hindi, and Spanish',
    ],
    tags: ['Python AI', 'LLM RAG', 'FastAPI', 'Vector Embeddings', 'Customer Operations'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'SaaS & Enterprise Operations',
    year: '2026',
  },
  {
    id: 'realtime-analytics-dashboard',
    title: 'Realtime Analytics / E-Commerce Dashboard',
    category: 'High-Performance Commerce Intelligence',
    categoryFilter: 'web',
    summary:
      'Live dashboards with predictive signals. A high-performance analytics platform that simplifies order tracking, sales insights, and inventory forecasting.',
    description:
      'A mission-critical enterprise commerce cockpit displaying streaming order metrics, conversion funnels, inventory turnover rates, and automated stock re-ordering notifications.',
    challenge:
      'Fragmented legacy spreadsheets led to delayed inventory re-stocking and missed seasonal sales trends across 15+ fulfillment hubs.',
    solution:
      'Architected a React and Next.js front-end with WebSockets connected to a resilient PostgreSQL time-series warehouse and automated alert pipelines.',
    impact: [
      'Zero latency on streaming sales feeds and batch inventory calculations',
      '32% decrease in out-of-stock incidents across retail partners',
      'Unified single-pane-of-glass management for executive stakeholders',
    ],
    tags: ['React', 'Next.js', 'PostgreSQL', 'WebSockets', 'Predictive Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'E-Commerce & Retail Supply Chain',
    year: '2025',
  },
  {
    id: 'mobile-os-concept',
    title: 'Mobile OS Concept / Next-Gen Mobile App UI',
    category: 'Mobile Experience & Native Interfaces',
    categoryFilter: 'mobile',
    summary:
      'Low-friction mobile interactions. A modern mobile interface engineered for seamless navigation, dark mode support, and elevated user experience.',
    description:
      'A mobile application interface featuring fluid gesture physics, adaptive micro-animations, customizable dashboard widgets, and strict battery-efficient rendering.',
    challenge:
      'Users experienced high cognitive load and confusing deep nested menus in the prior mobile utility client.',
    solution:
      'Rebuilt navigation around one-thumb bottom sheets, haptic confirmations, and instant offline cache synchronization.',
    impact: [
      '4.9 star user rating across 15,000+ app store reviews',
      '42% increase in daily active user (DAU) retention',
      '60 FPS steady rendering performance across Android and iOS',
    ],
    tags: ['React Native', 'TypeScript', 'Gesture Physics', 'Dark Mode', 'Mobile UX'],
    image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Mobile Utilities & FinTech',
    year: '2025',
  },
  {
    id: 'edge-iot-control',
    title: 'Edge IoT Control',
    category: 'Industrial IoT & Telemetry',
    categoryFilter: 'iot',
    summary: 'Secure device orchestration at scale with sensor telemetry and low-latency response.',
    description:
      'An industrial gateway software suite connecting factory sensors, power meters, and automated machinery to a centralized monitoring dashboard with automated failover.',
    challenge:
      'Unreliable factory floor connectivity caused data blackouts and unmonitored equipment overheating.',
    solution:
      'Edge gateway firmware with local caching, MQTT protocol compression, and automated cloud sync once network connectivity resumes.',
    impact: [
      '10,000+ connected sensor nodes streaming without message drop',
      'Automated shutdown protocols preventing catastrophic machine overheating',
      'Local edge compute latency under 12 milliseconds',
    ],
    tags: ['IoT', 'MQTT', 'Docker', 'Edge Computing', 'Industrial Telemetry'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Smart Manufacturing & Energy',
    year: '2025',
  },
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation',
    category: 'Connected Ecosystems & Automation',
    categoryFilter: 'iot',
    summary: 'Connected devices working seamlessly together for automated living and facility management.',
    description:
      'A unified residential automation ecosystem controlling lighting, climate, security cameras, and smart locks with zero-latency local hub coordination.',
    challenge:
      'Homeowners struggled with disjointed apps and delayed automation triggers between competing device protocols.',
    solution:
      'Standardized Matter-compliant protocol bridge with intuitive mobile widgets and voice-assistant integrations.',
    impact: [
      'Over 25,000 active device automations triggered daily',
      '22% reduction in residential energy consumption via smart thermostat curves',
      'Bank-grade TLS 1.3 local network encryption',
    ],
    tags: ['Smart Home', 'Embedded Systems', 'Mobile App', 'Security Encryption'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Consumer IoT & Smart Living',
    year: '2024',
  },
  {
    id: 'wearable-tech-interface',
    title: 'Wearable Tech Interface',
    category: 'Health Telemetry & Micro-Displays',
    categoryFilter: 'mobile',
    summary: 'Innovative interface for wearable devices, health telemetry, and intuitive gesture controls.',
    description:
      'A low-power biometric monitoring UI designed for smart wristbands, displaying heart rate variance, sleep stages, and workout zones with minimal battery consumption.',
    challenge:
      'High display power consumption drained battery life in under 18 hours while rendering complex health graphs.',
    solution:
      'Optimized vector rendering pipelines utilizing hardware color indexing, boosting battery autonomy to 5+ days.',
    impact: [
      '5-day battery autonomy maintained during continuous sensor recording',
      'Real-time optical heart rate anomaly detection algorithms',
      'HIPAA-compliant encrypted biometric synchronization',
    ],
    tags: ['Wearables', 'Low-Power UI', 'Biometrics', 'Micro-Interactions'],
    image: 'https://images.unsplash.com/photo-1510519138195-068d828884bb?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Digital Health & MedTech',
    year: '2025',
  },
  {
    id: 'high-conversion-marketing',
    title: 'High-Conversion Marketing',
    category: 'Strategic Digital Acquisition',
    categoryFilter: 'marketing',
    summary: 'A strategically crafted landing page focused on boosting engagement, brand visibility, and lead generation.',
    description:
      'A high-performance conversion engine featuring tailored value propositions, social proof proofpoints, interactive calculators, and A/B tested multi-step forms.',
    challenge:
      'Low marketing funnel conversion rate (1.1%) leading to high customer acquisition costs.',
    solution:
      'Redesigned the narrative flow, eliminated layout shifts, improved speed to 98/100, and integrated localized trust proof.',
    impact: [
      'Conversion rate surged from 1.1% to 4.6% within 60 days',
      'Over 180 qualified enterprise leads captured in the first quarter',
      'Zero layout shift (CLS = 0.00) and instant 650ms First Contentful Paint',
    ],
    tags: ['Conversion Optimization', 'Landing Page', 'SEO Strategy', 'Analytics Funnel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'FinTech & B2B Services',
    year: '2025',
  },
  {
    id: 'interactive-portfolio-platform',
    title: 'Interactive Portfolio Platform',
    category: 'Creative Technology & Spatial Web',
    categoryFilter: 'web',
    summary: 'A dynamic personal portfolio experience featuring smooth animations, responsive layouts, and intuitive routing.',
    description:
      'A showcase platform built for high-end creative agencies and tech executives, featuring 3D project cards, fluid sound micro-effects, and fast static delivery.',
    challenge:
      'Portfolios often suffer from heavy asset bloat and sluggish mobile navigation.',
    solution:
      'Implemented progressive image loading with modern WebP compression and smooth layout transitions.',
    impact: [
      'Featured on multiple design award showcases',
      'Instant routing with zero layout jitter on all screen sizes',
      'Sub-200kb initial JavaScript payload',
    ],
    tags: ['Interactive Web', 'Creative Technology', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Creative Agencies & Media',
    year: '2026',
  },
]

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'stitchcraft-artistry',
    clientName: 'StitchCraft Artistry',
    roleOrCompany: 'Aari work Specialist',
    industry: 'Handcrafted Fashion & Artisanal Embroidery',
    quote:
      'A reliable and highly skilled team. They handled our project with professionalism, clear communication, and strong technical expertise.',
    rating: 5,
    avatarText: 'SC',
    accentColor: '#0056D2',
  },
  {
    id: 'pn-granites',
    clientName: 'Pn Granites',
    roleOrCompany: 'Granite Supplier',
    industry: 'Architectural Stone & Building Materials',
    quote:
      'The team delivered exceptional quality and a seamless experience. Their creativity, attention to detail, and commitment to our vision were outstanding.',
    rating: 5,
    avatarText: 'PN',
    accentColor: '#003A99',
  },
  {
    id: 'master-foods',
    clientName: 'Master',
    roleOrCompany: 'dosa and idli batter Supplier',
    industry: 'Packaged Food & FMCG Distribution',
    quote:
      'Their strategic approach and innovative ideas helped elevate our brand\'s digital presence. Truly a partner you can trust.',
    rating: 5,
    avatarText: 'M',
    accentColor: '#1FA8F0',
  },
]

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in your services?',
    answer:
      'Our services include end-to-end digital engineering: comprehensive UI/UX design, custom web and mobile software development, cloud infrastructure setup, AI and process automation, corporate branding, and ongoing digital marketing strategy tailored to your specific business goals.',
    category: 'services',
  },
  {
    id: 'faq-2',
    question: 'What type of company is measured / served?',
    answer:
      'We serve ambitious startups, mid-market enterprises, established industrial companies, and digital agencies across multiple industries including FinTech, E-Commerce, Healthcare, Manufacturing, FMCG, and Professional Services.',
    category: 'general',
  },
  {
    id: 'faq-3',
    question: 'How long will it take to complete a project?',
    answer:
      'Project timelines vary based on scope and architectural complexity. Most core web applications and focused digital projects are completed within 2 to 6 weeks. Larger enterprise platforms or multi-service ecosystems follow structured 8 to 12-week agile sprint phases with continuous delivery.',
    category: 'delivery',
  },
  {
    id: 'faq-4',
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! We offer flexible ongoing maintenance, proactive security updates, cloud infrastructure monitoring, performance optimization, and SLA-backed long-term support packages for all clients to ensure uninterrupted operation.',
    category: 'support',
  },
  {
    id: 'faq-5',
    question: 'Can I customize my project based on my business needs?',
    answer:
      'Absolutely! Every single project we build is 100% customizable based on your unique vision, workflow requirements, existing legacy integrations, and future expansion roadmap.',
    category: 'services',
  },
  {
    id: 'faq-6',
    question: 'Do you work with international clients?',
    answer:
      'Yes, we work with clients worldwide through structured online meetings, asynchronous communication, real-time Slack/Teams collaboration, and transparent project tracking boards.',
    category: 'general',
  },
]
