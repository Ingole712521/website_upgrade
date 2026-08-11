import { motion } from 'motion/react'
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  type LucideIcon,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Section, SectionHeading } from '@/components/ui/section'
import { PageEnter, springSoft, staggerContainer, staggerItem, viewportOnce } from '@/components/ui/reveal'

type TechItem = {
  name: string
  /** Local asset under /public */
  logo?: string
  /** simpleicons.org slug fallback when no local logo */
  slug?: string
}

type TechGroup = {
  title: string
  items: TechItem[]
}

type TechCategory = {
  title: string
  icon: LucideIcon
  summary: string
  groups: TechGroup[]
}

const categories: TechCategory[] = [
  {
    title: 'Microsoft & Azure Stack',
    icon: Cloud,
    summary: 'Enterprise cloud, Power Platform, and modern .NET delivery.',
    groups: [
      {
        title: 'Cloud & Serverless',
        items: [
          { name: 'Azure App Services', logo: '/Logo/azure.png' },
          { name: 'Azure Functions', logo: '/Logo/azure.png' },
          { name: 'Service Bus', logo: '/Logo/azure.png' },
          { name: 'Storage Queues', logo: '/Logo/azure.png' },
          { name: 'Notification Hubs', logo: '/Logo/azure.png' },
        ],
      },
      {
        title: 'Power Platform',
        items: [
          { name: 'Power BI', slug: 'powerbi' },
          { name: 'Power Automate', slug: 'powerautomate' },
          { name: 'Power Apps', slug: 'powerapps' },
          { name: 'Power Virtual Agents', slug: 'microsoft' },
          { name: 'MS Dataverse', slug: 'microsoft' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Modern .NET', slug: 'dotnet' },
          { name: 'Entity Framework Core', slug: 'dotnet' },
          { name: 'REST APIs', slug: 'openapiinitiative' },
          { name: 'Microservices' },
        ],
      },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    summary: 'Generative models, retrieval systems, and applied vision / NLP.',
    groups: [
      {
        title: 'Generative AI',
        items: [
          { name: 'OpenAI APIs', slug: 'openai' },
          { name: 'Azure OpenAI', logo: '/Logo/azure.png' },
          { name: 'Claude', slug: 'anthropic' },
          { name: 'Codex', logo: '/Logo/codex.svg' },
          { name: 'Copilot', slug: 'githubcopilot' },
        ],
      },
      {
        title: 'Advanced RAG',
        items: [
          { name: 'Vector search' },
          { name: 'Hybrid retrieval' },
          { name: 'Evaluation harnesses' },
          { name: 'Guardrails' },
        ],
      },
      {
        title: 'Computer Vision & NLP',
        items: [
          { name: 'YOLO' },
          { name: 'OpenCV', slug: 'opencv' },
          { name: 'Document AI', slug: 'googledocs' },
          { name: 'Entity extraction' },
        ],
      },
    ],
  },
  {
    title: 'Web & Open Source',
    icon: Code2,
    summary: 'Product-grade frontends and flexible service backends.',
    groups: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', slug: 'react' },
          { name: 'React Native', slug: 'react' },
          { name: 'Next.js', slug: 'nextdotjs' },
          { name: 'Angular', slug: 'angular' },
          { name: 'Modern CSS', slug: 'css' },
        ],
      },
      {
        title: 'Alternative Backends',
        items: [
          { name: 'Node.js', slug: 'nodedotjs' },
          { name: 'Express', slug: 'express' },
          { name: 'Socket.IO', slug: 'socketdotio' },
          { name: 'Java / Spring Boot', slug: 'springboot' },
          { name: 'Python', slug: 'python' },
        ],
      },
    ],
  },
  {
    title: 'Data & DevOps',
    icon: Database,
    summary: 'Reliable data stores and automation for continuous delivery.',
    groups: [
      {
        title: 'Databases',
        items: [
          { name: 'MS SQL', slug: 'microsoftsqlserver' },
          { name: 'MySQL', slug: 'mysql' },
          { name: 'PostgreSQL', slug: 'postgresql' },
          { name: 'MongoDB', slug: 'mongodb' },
          { name: 'Cosmos DB', logo: '/Logo/azure.png' },
          { name: 'Neo4j', logo: '/Logo/neo4j.png' },
        ],
      },
      {
        title: 'DevOps & Automation',
        items: [
          { name: 'Azure DevOps', slug: 'azuredevops' },
          { name: 'Jenkins', slug: 'jenkins' },
          { name: 'Docker', slug: 'docker' },
          { name: 'CI/CD', slug: 'githubactions' },
          { name: 'Selenium', slug: 'selenium' },
          { name: 'Appium', slug: 'appium' },
        ],
      },
    ],
  },
]

/** Pinned Simple Icons build — includes Microsoft marks removed from newer CDN builds */
const SIMPLE_ICONS_CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons'

function TechLogo({ item }: { item: TechItem }) {
  if (item.logo) {
    return (
      <img
        src={item.logo}
        alt=""
        aria-hidden
        className="h-4 w-4 shrink-0 object-contain opacity-90 dark:opacity-85"
        loading="lazy"
        decoding="async"
      />
    )
  }

  if (item.slug) {
    return (
      <img
        src={`${SIMPLE_ICONS_CDN}/${item.slug}.svg`}
        alt=""
        aria-hidden
        className="h-4 w-4 shrink-0 object-contain opacity-90 dark:opacity-85"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <span
      aria-hidden
      className="grid h-4 w-4 shrink-0 place-items-center rounded-md border border-border bg-muted text-[0.5rem] font-bold uppercase tracking-tight text-muted-foreground"
    >
      {item.name.slice(0, 2)}
    </span>
  )
}

export function TechnologiesPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Our Stack"
          title="The Infrastructure That"
          titleAccent="Drives Us"
          description="From enterprise Microsoft ecosystems to cutting-edge generative AI, our technology capabilities are built for scale, security, and velocity."
          primaryCta={{ label: 'Browse the stack', href: '#stack' }}
          secondaryCta={{ label: 'Talk to engineering', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Engineering toolkit"
              subtitle="Azure, AI, open-source web, data, and DevOps — production ready."
              nodes={[
                { icon: Cloud, label: 'Azure' },
                { icon: BrainCircuit, label: 'AI / ML', tone: 'accent' },
                { icon: Code2, label: 'Web' },
                { icon: Database, label: 'Data' },
              ]}
              footerLeft="Enterprise ready"
              footerRight="stack · 2026"
            />
          }
        />

        <Section id="stack">
          <SectionHeading
            eyebrow="Technology Stack"
            title={<>Capabilities across cloud, AI, web, and data</>}
            description="A pragmatic toolkit chosen for enterprise delivery — not trend-chasing."
          />

          <div className="mt-14 flex flex-col gap-10 lg:gap-12">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative overflow-hidden rounded-3xl border border-border bg-card/40"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      background:
                        categoryIndex % 2 === 0
                          ? 'radial-gradient(ellipse 50% 60% at 0% 0%, color-mix(in srgb, var(--primary) 12%, transparent), transparent 70%)'
                          : 'radial-gradient(ellipse 50% 60% at 100% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)',
                    }}
                  />

                  <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-10 lg:p-10">
                    <motion.div variants={staggerItem} className="flex flex-col justify-between gap-6">
                      <div>
                        <motion.span
                          whileHover={{ rotate: -6, scale: 1.06 }}
                          transition={springSoft}
                          className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.span>
                        <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                          {category.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {category.summary}
                        </p>
                      </div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                        {String(categoryIndex + 1).padStart(2, '0')} /{' '}
                        {String(categories.length).padStart(2, '0')}
                      </p>
                    </motion.div>

                    <div className="grid gap-6 sm:gap-7">
                      {category.groups.map((group) => (
                        <motion.div key={group.title} variants={staggerItem}>
                          <h4 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                            {group.title}
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <motion.span
                                key={item.name}
                                whileHover={{ y: -2 }}
                                transition={springSoft}
                                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3 py-1.5 text-sm text-foreground/85 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-colors hover:border-primary/40 hover:text-foreground"
                              >
                                <TechLogo item={item} />
                                {item.name}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
