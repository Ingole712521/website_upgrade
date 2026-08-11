import { motion } from 'motion/react'
import {
  Bot,
  Code2,
  Database,
  Eye,
  Layers,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

type Capability = {
  title: string
  desc: string
  icon: LucideIcon
}

const capabilities: Capability[] = [
  {
    title: 'Full-Stack Modernization',
    desc: 'From monolithic breaking to containerized microservices. We build resilient backends using .NET/Azure and hyper-fast frontends using React and Next.js.',
    icon: Layers,
  },
  {
    title: 'AI-Assisted Prototyping',
    desc: 'We convert complex concepts into working prototypes in weeks, not months, by leveraging generative UI tools and AI code copilots during the inception phase.',
    icon: Zap,
  },
  {
    title: 'Spec-to-Application Workflow',
    desc: 'Requirements become structured build plans, generated React/API slices, automated checks, and senior engineering review before release.',
    icon: Bot,
  },
  {
    title: 'AI Code Preview',
    desc: 'Rapid UI previews help teams validate screens, components, responsive behavior, and user flows before full implementation is locked.',
    icon: Eye,
  },
  {
    title: 'Data-Intensive Architectures',
    desc: "Building applications that don't just store data, but understand it. We integrate vector databases and RAG pipelines seamlessly alongside traditional SQL/NoSQL stores.",
    icon: Database,
  },
  {
    title: 'Enterprise Mobility',
    desc: 'Cross-platform mobile applications that tie into your core AI infrastructure, providing intelligent on-the-go access for your workforce and customers.',
    icon: Code2,
  },
]

export function AiProductCapabilities() {
  return (
    <Section id="capabilities">
      <SectionHeading
        eyebrow="Capabilities"
        title={<>What we engineer into every product build</>}
        description="A focused set of delivery practices that compress time-to-value while keeping architecture, review, and release under senior engineering control."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {capabilities.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_50px_-30px_rgba(58,174,240,0.45)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
