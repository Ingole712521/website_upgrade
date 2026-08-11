import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, BookOpen, Check, FileText } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Section } from '@/components/ui/section'
import {
  PageEnter,
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
      'A practical comparison of headcount-led outsourcing and AI-native delivery models built around reusable skills, automation, governance, and faster enterprise software outcomes.',
    date: 'Jun 29, 2026',
    readTime: '7 min read',
    author: 'By zCon Engineering',
  },
  {
    category: 'Engagement Models',
    title: 'Micro GCC vs Traditional GCC',
    description:
      'How Micro GCC compares with a traditional global capability center for enterprises that need dedicated AI-native engineering capacity without a long setup cycle.',
    date: 'Jun 29, 2026',
    readTime: '6 min read',
    author: 'By zCon Engineering',
  },
  {
    category: 'AI Delivery',
    title: 'Reusable AI Delivery Skills for Faster Software Delivery',
    description:
      'How reusable delivery skills turn AI-assisted engineering from one-off prompting into a repeatable system for faster planning, implementation, review, testing, and release.',
    date: 'Jun 29, 2026',
    readTime: '7 min read',
    author: 'By zCon Engineering',
  },
  {
    category: 'Knowledge Graphs',
    title: 'Knowledge Graphs vs RAG for Enterprise AI',
    description:
      'A practical comparison of RAG-only systems and knowledge graph grounded AI for enterprises that need traceability, business rules, context, and reliable answers.',
    date: 'Jun 29, 2026',
    readTime: '8 min read',
    author: 'By zCon Engineering',
  },
  {
    category: 'Legacy Modernization',
    title: 'AI-Assisted Legacy Modernization Roadmap',
    description:
      'A phased roadmap for using AI to understand, document, stabilize, refactor, test, and modernize legacy systems while controlling production risk.',
    date: 'Jun 29, 2026',
    readTime: '8 min read',
    author: 'By zCon Engineering',
  },
  {
    category: 'AI Engineering',
    title: 'Implementing RAG with Azure OpenAI for Enterprise Knowledge Management',
    description:
      'A deep dive into how we built a scalable Retrieval-Augmented Generation pipeline to unlock siloed document stores for a Fortune 500 financial institution.',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    author: 'By Chief AI Architect',
  },
  {
    category: 'Legacy Modernization',
    title: 'From Monolith to Microservices: The AI-Assisted Refactoring Playbook',
    description:
      'How we utilize custom LLMs to accelerate the reverse-engineering and refactoring of legacy monolithic applications into containerized microservices.',
    date: 'Nov 12, 2023',
    readTime: '12 min read',
    author: 'By Lead Enterprise Architect',
  },
  {
    category: 'Data Engineering',
    title: 'Building Real-Time Data Pipelines for Manufacturing Execution Systems',
    description:
      'Exploring the event-driven architecture required to process thousands of IoT sensor data points per second using Kafka and Azure Databricks.',
    date: 'Dec 05, 2023',
    readTime: '6 min read',
    author: 'By VP of Data Engineering',
  },
  {
    category: 'Knowledge Graphs',
    title: 'The Role of Knowledge Graphs in Next-Gen Customer Support Bots',
    description:
      "Why simple vector search isn't enough. We explore how combining semantic search with structural Knowledge Graphs eliminates hallucinations in enterprise chat.",
    date: 'Jan 18, 2024',
    readTime: '10 min read',
    author: 'By AI Research Lead',
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
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-3 text-sm text-foreground"
      >
        <Check className="h-4 w-4 text-primary" />
        You&apos;re on the list — talk soon.
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your work email"
        className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Subscribe
      </button>
    </form>
  )
}

export function InsightsPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Insights"
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Engineering Thought Leadership
            </span>
          }
          description="Deep dives, architectural patterns, and real-world playbooks straight from the desks of zCon's senior engineers and architects."
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-2"
          >
            {insights.map((insight) => (
              <motion.article
                key={insight.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={springSoft}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/35"
              >
                <span className="inline-flex w-fit rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {insight.category}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-balance text-foreground sm:text-xl">
                  {insight.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {insight.description}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {insight.date} · {insight.readTime} · {insight.author}
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                >
                  Read insight
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="newsletter" className="bg-muted/40 dark:bg-transparent">
          <div className="overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center sm:px-10">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Stay Ahead of the Curve
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Get our latest engineering playbooks and architectural tear-downs delivered straight to
              your inbox once a month.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your next project. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
