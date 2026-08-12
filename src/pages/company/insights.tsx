import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, BookOpen, Check, FileText } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/templates/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'
import { Section } from '@/components/ui/section'
import { RollingTextLink } from '@/components/ui/rolling-text'
import {
  PageEnter,
  motionEase,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

type Insight = {
  category: string
  title: string
  description: string
  date: string
  readTime: string
  author: string
}

const insights: Insight[] = [
  {
    category: 'AI Delivery',
    title: 'AI-Native IT Services vs Traditional Outsourcing',
    description:
      'A practical comparison of headcount-led outsourcing and AI-native delivery models built around reusable skills, automation, governance, and faster outcomes.',
    date: 'Jun 29, 2026',
    readTime: '7 min',
    author: 'zCon Engineering',
  },
  {
    category: 'Engagement Models',
    title: 'Micro GCC vs Traditional GCC',
    description:
      'How Micro GCC compares with a traditional global capability center for dedicated AI-native capacity without a long setup cycle.',
    date: 'Jun 29, 2026',
    readTime: '6 min',
    author: 'zCon Engineering',
  },
  {
    category: 'AI Delivery',
    title: 'Reusable AI Delivery Skills for Faster Software Delivery',
    description:
      'How reusable delivery skills turn AI-assisted engineering from one-off prompting into a repeatable system across planning, build, review, and release.',
    date: 'Jun 29, 2026',
    readTime: '7 min',
    author: 'zCon Engineering',
  },
  {
    category: 'Knowledge Graphs',
    title: 'Knowledge Graphs vs RAG for Enterprise AI',
    description:
      'RAG-only systems versus knowledge-graph grounded AI for enterprises that need traceability, business rules, and reliable answers.',
    date: 'Jun 29, 2026',
    readTime: '8 min',
    author: 'zCon Engineering',
  },
  {
    category: 'Legacy Modernization',
    title: 'AI-Assisted Legacy Modernization Roadmap',
    description:
      'A phased roadmap for using AI to understand, document, stabilize, refactor, test, and modernize legacy systems with controlled risk.',
    date: 'Jun 29, 2026',
    readTime: '8 min',
    author: 'zCon Engineering',
  },
  {
    category: 'AI Engineering',
    title: 'Implementing RAG with Azure OpenAI for Enterprise Knowledge Management',
    description:
      'How we built a scalable RAG pipeline to unlock siloed document stores for a Fortune 500 financial institution.',
    date: 'Oct 24, 2023',
    readTime: '8 min',
    author: 'Chief AI Architect',
  },
  {
    category: 'Legacy Modernization',
    title: 'From Monolith to Microservices: The AI-Assisted Refactoring Playbook',
    description:
      'Using custom LLMs to accelerate reverse-engineering and refactoring of legacy monoliths into containerized microservices.',
    date: 'Nov 12, 2023',
    readTime: '12 min',
    author: 'Lead Enterprise Architect',
  },
  {
    category: 'Data Engineering',
    title: 'Building Real-Time Data Pipelines for Manufacturing Execution Systems',
    description:
      'Event-driven architecture for thousands of IoT sensor points per second using Kafka and Azure Databricks.',
    date: 'Dec 05, 2023',
    readTime: '6 min',
    author: 'VP of Data Engineering',
  },
  {
    category: 'Knowledge Graphs',
    title: 'The Role of Knowledge Graphs in Next-Gen Customer Support Bots',
    description:
      'Why vector search alone isn’t enough — combining semantic search with knowledge graphs to reduce hallucinations.',
    date: 'Jan 18, 2024',
    readTime: '10 min',
    author: 'AI Research Lead',
  },
]

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-foreground"
      >
        <Check className="h-4 w-4 text-primary" />
        You&apos;re on the list — talk soon.
      </motion.p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your work email"
        className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground"
      >
        Subscribe
      </motion.button>
    </form>
  )
}

export function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Insights"
          title="Engineering"
          titleAccent="Thought Leadership"
          description="Deep dives, architectural patterns, and real-world playbooks straight from the desks of zCon's senior engineers and architects."
          primaryCta={{ label: 'Browse insights', href: '#articles' }}
          secondaryCta={{ label: 'Subscribe', href: '#newsletter' }}
          visual={
            <ServiceHeroVisual
              title="Playbooks & patterns"
              subtitle="AI delivery, knowledge graphs, legacy modernization, and data engineering."
              nodes={[
                { icon: BookOpen, label: 'Deep dives' },
                { icon: FileText, label: 'Playbooks', tone: 'accent' },
                { icon: BookOpen, label: 'Architecture' },
                { icon: FileText, label: 'Delivery' },
              ]}
              footerLeft="Fresh notes"
              footerRight="company · insights"
            />
          }
        />

        <Section id="articles">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: motionEase }}
            className="group border-b border-border pb-12"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary">
              {featured.category}
            </span>
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>
                {featured.date} · {featured.readTime} · {featured.author}
              </span>
              <RollingTextLink
                to="/contact"
                label="Read insight"
                className="font-medium text-foreground transition-colors group-hover:text-primary"
              >
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </RollingTextLink>
            </div>
          </motion.article>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-4"
          >
            {rest.map((insight) => (
              <motion.article
                key={insight.title}
                variants={staggerItem}
                whileHover={{ x: 4 }}
                transition={springSoft}
                className="group grid gap-3 border-b border-border py-8 md:grid-cols-[8rem_1fr_auto] md:gap-8"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {insight.category}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-balance text-foreground sm:text-xl">
                    {insight.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {insight.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {insight.date} · {insight.readTime} · {insight.author}
                  </p>
                </div>
                <RollingTextLink
                  to="/contact"
                  label="Read insight"
                  className="self-start text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary md:justify-self-end"
                >
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </RollingTextLink>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="newsletter" className="bg-muted/30 dark:bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: motionEase }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Stay Ahead of the Curve
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Get our latest engineering playbooks and architectural tear-downs once a month.
              </p>
            </div>
            <NewsletterForm />
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your next project. We'll show you how AI-first engineering compresses the timeline."
        />
      </div>
    </PageEnter>
  )
}
