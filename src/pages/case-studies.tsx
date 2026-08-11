import { motion } from 'motion/react'
import {
  Activity,
  Building2,
  Car,
  Clapperboard,
  FileSearch,
  type LucideIcon,
  LineChart,
  MessagesSquare,
  Mic2,
  Pill,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section'
import {
  PageEnter,
  Reveal,
  fadeScale,
  fadeUp,
  springSoft,
  staggerContainer,
  staggerFast,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

type FeaturedCase = {
  category: string
  icon: LucideIcon
  title: string
  challenge: string
  solution: string
  tags: string[]
}

type ArchiveCase = {
  category: string
  title: string
  description: string
  tags: string[]
}

type RdItem = {
  icon: LucideIcon
  title: string
  description: string
}

const featured: FeaturedCase[] = [
  {
    category: 'Real Estate Tech',
    icon: Building2,
    title: 'Vision AI-Enhanced Real Estate',
    challenge:
      'Weak property narratives, laborious manual description processes, and inferior floorplan clarity.',
    solution:
      'Automated computer vision pipeline that interprets floor plans and generates dynamic property narratives — on Azure with React, .NET Core, and RAG.',
    tags: ['Azure AI', 'RAG', 'React'],
  },
  {
    category: 'PropTech / AI',
    icon: MessagesSquare,
    title: 'White Label Real Estate Bots',
    challenge:
      'Inadequate NLP engines resulting in misaligned chatbot responses and inference timeouts during high load.',
    solution:
      'Fused Dialogflow with OpenAI into a scalable NLP workflow engine with serverless webhooks — unlocking 100+ features and faster query resolution.',
    tags: ['OpenAI', 'Dialogflow', '.NET Core'],
  },
  {
    category: 'Enterprise Analytics',
    icon: LineChart,
    title: 'DataPulse: Reporting Engine',
    challenge:
      'No ad hoc reporting, slow data volumes, and a need for WhatsApp delivery for non-technical business users.',
    solution:
      'Custom reporting with Power BI and Power Automate, Dataverse, Azure Functions, and Twilio for real-time WhatsApp notifications.',
    tags: ['Power Platform', 'Azure Functions', 'Twilio'],
  },
  {
    category: 'Manufacturing',
    icon: Activity,
    title: 'Production Tracking Application',
    challenge:
      'Inefficient batch tracking, weak traceability for glass fiber bars, and decentralized multi-plant management.',
    solution:
      'Multi-plant PowerApps + Dataverse system with automated BoM, real-time quality checks, and QR printing for full traceability.',
    tags: ['PowerApps', 'Dataverse', 'IoT'],
  },
]

const archive: ArchiveCase[] = [
  {
    category: 'Healthcare IT',
    title: 'Healthcare Integration',
    description:
      'EMR workflows with lab, pharmacy, billing, insurance, and clinic integrations for a gastroenterology care network.',
    tags: ['EMR', 'HL7', 'EDI'],
  },
  {
    category: 'Healthcare IT',
    title: 'Health Therapy Services Platform',
    description:
      'Web and tablet apps connecting home health agencies, therapy staffing companies, and therapists in real time.',
    tags: ['HIPAA', 'iOS', 'Android'],
  },
  {
    category: 'Healthcare IT',
    title: 'EMR Integration Solutions',
    description:
      'Enhanced a cloud EMR with lab, insurance, drug database, billing, and iPad kiosk integrations.',
    tags: ['EHR', 'Labs', 'iPad'],
  },
  {
    category: 'Healthcare IT',
    title: 'EHR Product Validation',
    description:
      'Validated mobile EHR features and implemented e-prescription, lab, clinical observation, and certification-ready integrations.',
    tags: ['QA', 'RxNorm', 'LOINC'],
  },
  {
    category: 'Enterprise Application',
    title: 'Commercial Loan Processing',
    description:
      'Migrated a loan processing product to the cloud with reporting, document workflows, and data migration for 30+ customers.',
    tags: ['.NET', 'SSRS', 'Migration'],
  },
  {
    category: 'Enterprise Application',
    title: 'Trading Surveillance Platform',
    description:
      'High-volume trading surveillance SaaS with exception detection and performance tuning for large transaction sets.',
    tags: ['SaaS', 'FINRA', 'Performance'],
  },
  {
    category: 'Enterprise Application',
    title: 'Enterprise Integration With Analytics',
    description:
      'Integrated eligibility, prescription pricing, claim billing, and reversal workflows with external healthcare systems.',
    tags: ['Claims', 'EDI', 'Analytics'],
  },
  {
    category: 'Enterprise Mobility',
    title: 'Cloud First Mobile First Product',
    description:
      'Mobile-first service platform connecting customers and venue staff for menus, requests, promotions, and payments.',
    tags: ['Mobile', 'Cloud', 'Payments'],
  },
  {
    category: 'Enterprise Mobility',
    title: 'B2B Mobile Expense Management',
    description:
      'Roaming usage and package optimization product for corporate mobile fleets.',
    tags: ['B2B', 'Mobile', 'Alerts'],
  },
  {
    category: 'Enterprise Mobility',
    title: 'iPad EMR Experience',
    description:
      'Extended a web EMR into an iPad application for faster access to charts, reports, prescriptions, and patient records.',
    tags: ['iPad', 'EMR', 'UX'],
  },
  {
    category: 'Enterprise Mobility',
    title: 'B2B Therapy iPad Application',
    description:
      'Offline-capable iPad workflow for therapy visits, documentation, patient authorization, and progress tracking.',
    tags: ['iPad', 'Offline', 'Workflow'],
  },
  {
    category: 'Responsive Web',
    title: 'Construction Task Management',
    description:
      'Responsive job status, time card, and reporting workflows for a construction services client.',
    tags: ['Responsive', 'WCF', 'iOS'],
  },
  {
    category: 'Responsive Web',
    title: 'Mobile & Web Services Website',
    description:
      'Responsive service website using parallax and single-page design for mobile and web development offerings.',
    tags: ['WordPress', 'HTML5', 'CSS3'],
  },
  {
    category: 'Responsive Web',
    title: 'Fluid Performance Management',
    description:
      'Web and iPad tools to monitor industrial fluid condition, alerts, operational summaries, and compliance reports.',
    tags: ['Manufacturing', 'Bootstrap', 'Reports'],
  },
  {
    category: 'Responsive Web',
    title: 'Pharmacy & Insurance Interface',
    description:
      'Responsive healthcare claims platform for eligibility, prescription pricing, claim submission, and reversal workflows.',
    tags: ['NCPDP', 'Claims', 'WCF'],
  },
]

const rdItems: RdItem[] = [
  {
    icon: Car,
    title: 'Vehicle Number Plate Analytics',
    description: 'OCR, YOLO, and edge computing for automated vehicle logistics.',
  },
  {
    icon: Clapperboard,
    title: 'Cinema Audience Analytics',
    description: 'YOLO and IoT to deliver crowd metrics and optimize cinema operations.',
  },
  {
    icon: Mic2,
    title: 'AI-Assisted Multilingual Product Demo',
    description:
      'AI-assisted demo experience with multilingual voiceover for sales, onboarding, training, and support.',
  },
  {
    icon: MessagesSquare,
    title: 'Multilingual Accessibility Chatbots',
    description: 'Bhashini, Cohere LLMs, and intelligent scraping to break language barriers.',
  },
  {
    icon: FileSearch,
    title: 'CAD Drawing Analysis',
    description: 'Redline comment extraction and BoM reconciliation with OpenCV, Python, and Streamlit.',
  },
]

export function CaseStudiesPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Proven Impact"
          title="Real-World Enterprise"
          titleAccent="Success"
          description="Explore how zCon has transformed operations across industries using advanced AI, data engineering, and automation."
          primaryCta={{ label: 'Browse outcomes', href: '#featured' }}
          secondaryCta={{ label: 'Talk to us', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Delivery outcomes"
              subtitle="AI, data, and automation across healthcare, PropTech, and enterprise."
              nodes={[
                { icon: Building2, label: 'PropTech' },
                { icon: Pill, label: 'Healthcare', tone: 'accent' },
                { icon: LineChart, label: 'Analytics' },
                { icon: Activity, label: 'Manufacturing' },
              ]}
              footerLeft="Live portfolio"
              footerRight="case studies · 2026"
            />
          }
        />

        <Section id="featured">
          <SectionHeading
            eyebrow="Featured"
            title={<>Flagship delivery stories</>}
            description="Four engagements that show how AI and platform engineering change the operating model."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {featured.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={springSoft}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-7"
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center gap-2.5">
                    <motion.span
                      animate={{ rotate: [0, -4, 4, 0] }}
                      transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-heading text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <div className="relative mt-5 space-y-4">
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                        Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                        Solution
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <Section id="archive" className="bg-muted/40 dark:bg-transparent">
          <SectionHeading
            eyebrow="Success Stories Archive"
            title={<>Additional client success stories</>}
            description="Selected outcomes from healthcare, enterprise applications, mobility, and responsive web."
          />

          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {archive.map((item) => (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: 'color-mix(in srgb, var(--primary) 35%, transparent)' }}
                transition={springSoft}
                className="flex flex-col rounded-2xl border border-border bg-card/60 p-5"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.category}
                </p>
                <h3 className="mt-3 font-heading text-base font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-4">
                  {item.tags.map((tag, i) => (
                    <span key={tag} className="inline-flex items-center gap-2 text-xs text-muted-foreground/80">
                      {i > 0 ? <span className="text-border">·</span> : null}
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="rd">
          <Reveal>
            <Eyebrow>Innovation Lab</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Emerging AI R&amp;D &amp; POCs
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A glimpse into ongoing innovation labs and experimental frameworks.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {rdItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={index % 2 === 0 ? fadeUp : fadeScale}
                  whileHover={{ y: -4 }}
                  transition={springSoft}
                  className="flex gap-4 rounded-2xl border border-border bg-card/40 p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Speak with our team"
        />
      </div>
    </PageEnter>
  )
}
