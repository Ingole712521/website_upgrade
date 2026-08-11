import { motion } from 'motion/react'
import {
  Boxes,
  BrainCircuit,
  GitFork,
  LayoutDashboard,
  Network,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

type Service = {
  title: string
  desc: string
  icon: LucideIcon
  className: string
  accent?: boolean
  points?: string[]
}

const services: Service[] = [
  {
    title: 'AI Product Engineering',
    desc: 'From concept to production-grade AI products — agentic systems, LLM pipelines, and evaluation harnesses engineered for enterprise scale.',
    icon: BrainCircuit,
    className: 'md:col-span-2 md:row-span-2',
    accent: true,
    points: ['Agentic architectures', 'RAG & knowledge retrieval', 'Model evaluation & guardrails'],
  },
  {
    title: 'AI Software PLM',
    desc: 'AI-augmented product lifecycle management across the full build, release, and iterate loop.',
    icon: GitFork,
    className: 'md:col-span-2',
  },
  {
    title: 'Legacy Modernization',
    desc: 'Re-platform monoliths into resilient, cloud-native services without disrupting the business.',
    icon: RefreshCw,
    className: 'md:col-span-1',
  },
  {
    title: 'Knowledge Graph Engineering',
    desc: 'Model complex enterprise domains into queryable, reasoning-ready knowledge graphs.',
    icon: Network,
    className: 'md:col-span-1',
  },
  {
    title: 'UI/UX Modernization',
    desc: 'Rebuild interfaces into fast, accessible, design-system-driven product experiences.',
    icon: LayoutDashboard,
    className: 'md:col-span-2',
  },
  {
    title: 'Micro GCC as a Service',
    desc: 'Spin up a dedicated, AI-native engineering hub with full IP ownership and governance.',
    icon: Boxes,
    className: 'md:col-span-2',
    accent: true,
  },
]

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Capabilities"
        title={<>Engineering services built for the AI era</>}
        description="A full-stack engineering partner spanning AI products, modernization, and dedicated innovation teams — delivered with enterprise governance."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-4"
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.title}
              variants={staggerItem}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_50px_-30px_rgba(244,63,94,0.4)]',
                service.className,
              )}
            >
              <div
                aria-hidden
                className={cn(
                  'pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100',
                  service.accent ? 'bg-[#e11d48]/20' : 'bg-primary/20',
                )}
              />
              <span
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-xl border',
                  service.accent
                    ? 'border-[#e11d48]/20 bg-[#e11d48]/10 text-[#e11d48]'
                    : 'border-primary/20 bg-primary/10 text-primary',
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>

              {service.points ? (
                <ul className="mt-auto flex flex-col gap-2 pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
