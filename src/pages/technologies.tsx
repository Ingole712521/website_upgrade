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

type TechGroup = {
  title: string
  items: string[]
}

type TechCategory = {
  title: string
  icon: LucideIcon
  groups: TechGroup[]
}

const categories: TechCategory[] = [
  {
    title: 'Microsoft & Azure Stack',
    icon: Cloud,
    groups: [
      {
        title: 'Cloud & Serverless',
        items: [
          'Azure App Services',
          'Azure Functions',
          'Service Bus',
          'Storage Queues',
          'Notification Hubs',
        ],
      },
      {
        title: 'Power Platform',
        items: [
          'Power BI',
          'Power Automate',
          'Power Apps',
          'Power Virtual Agents',
          'MS Dataverse',
        ],
      },
      {
        title: 'Backend',
        items: ['Modern .NET', 'Entity Framework Core', 'REST APIs', 'Microservices'],
      },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    groups: [
      {
        title: 'Generative AI',
        items: ['OpenAI APIs', 'Azure OpenAI', 'Claude', 'Codex', 'Copilot'],
      },
      {
        title: 'Advanced RAG',
        items: ['Vector search', 'Hybrid retrieval', 'Evaluation harnesses', 'Guardrails'],
      },
      {
        title: 'Computer Vision & NLP',
        items: ['YOLO', 'OpenCV', 'Document AI', 'Entity extraction'],
      },
    ],
  },
  {
    title: 'Web & Open Source',
    icon: Code2,
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'React Native', 'Next.js', 'Angular', 'Modern CSS'],
      },
      {
        title: 'Alternative Backends',
        items: ['Node.js', 'Express', 'Socket.IO', 'Java / Spring Boot', 'Python'],
      },
    ],
  },
  {
    title: 'Data & DevOps',
    icon: Database,
    groups: [
      {
        title: 'Databases',
        items: ['MS SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cosmos DB', 'Neo4j'],
      },
      {
        title: 'DevOps & Automation',
        items: ['Azure DevOps', 'Jenkins', 'Docker', 'CI/CD', 'Selenium', 'Appium'],
      },
    ],
  },
]

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

          <div className="mt-12 flex flex-col gap-14">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                >
                  <motion.div variants={staggerItem} className="mb-5 flex items-center gap-3">
                    <motion.span
                      whileHover={{ rotate: -6, scale: 1.06 }}
                      transition={springSoft}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {category.title}
                    </h3>
                  </motion.div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.groups.map((group) => (
                      <motion.article
                        key={group.title}
                        variants={staggerItem}
                        whileHover={{ y: -5 }}
                        transition={springSoft}
                        className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/35"
                      >
                        <h4 className="font-heading text-base font-semibold text-foreground">
                          {group.title}
                        </h4>
                        <ul className="mt-4 flex flex-col gap-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground/80"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.article>
                    ))}
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
