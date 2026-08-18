import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import {
  Boxes,
  BrainCircuit,
  GitFork,
  LayoutDashboard,
  Network,
  RefreshCw,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section, SectionHeading } from '@/components/ui/section'
import { RollingText } from '@/components/ui/rolling-text'
import {
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

type Service = {
  title: string
  desc: string
  icon: LucideIcon
  to: string
  index: string
}

const services: Service[] = [
  {
    title: 'AI Product Engineering',
    desc: 'From concept to production-grade AI products — agentic systems, LLM pipelines, and evaluation harnesses engineered for enterprise scale.',
    icon: BrainCircuit,
    to: '/capabilities/ai-product-engineering',
    index: '01',
  },
  {
    title: 'AI Software PLM',
    desc: 'AI-augmented product lifecycle management across the full build, release, and iterate loop.',
    icon: GitFork,
    to: '/services/ai-software-plm',
    index: '02',
  },
  {
    title: 'Legacy Modernization',
    desc: 'Re-platform monoliths into resilient, cloud-native services without disrupting the business.',
    icon: RefreshCw,
    to: '/services/legacy-maintenance',
    index: '03',
  },
  {
    title: 'Knowledge Graph Engineering',
    desc: 'Model complex enterprise domains into queryable, reasoning-ready knowledge graphs.',
    icon: Network,
    to: '/services/knowledge-graphs',
    index: '04',
  },
  {
    title: 'UI/UX Modernization',
    desc: 'Rebuild interfaces into fast, accessible, design-system-driven product experiences.',
    icon: LayoutDashboard,
    to: '/services/ui-ux-modernization',
    index: '05',
  },
  {
    title: 'Micro GCC as a Service',
    desc: 'Spin up a dedicated, AI-native engineering hub with full IP ownership and governance.',
    icon: Boxes,
    to: '/engagement/micro-gcc',
    index: '06',
  },
]

function ServiceRow({ service }: { service: Service }) {
  const Icon = service.icon
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to={service.to}
        className={cn(
          'group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-foreground/15 py-7 outline-none transition-colors sm:gap-6 sm:py-8 md:grid-cols-[4rem_3rem_1fr_auto]',
          'hover:bg-foreground/[0.03] focus-visible:bg-foreground/[0.03]',
        )}
      >
        <span className="hidden font-mono text-xs text-primary md:block">{service.index}</span>

        <motion.span
          className="mt-0.5 grid h-10 w-10 place-items-center border border-foreground/15 text-foreground"
          animate={reduce ? undefined : { borderColor: hovered ? 'var(--primary)' : undefined }}
          transition={springSoft}
        >
          <Icon className="h-4 w-4" />
        </motion.span>

        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {service.desc}
          </p>
        </div>

        <span className="mt-1 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground">
          <span className="hidden sm:inline">
            <RollingText text="Explore" active={hovered} />
          </span>
          <ArrowUpRight
            className={cn(
              'h-4 w-4 transition-transform duration-300',
              hovered && 'translate-x-0.5 -translate-y-0.5 text-primary',
            )}
          />
        </span>
      </Link>
    </motion.article>
  )
}

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
        viewport={viewportOnce}
        className="mt-10 border-t border-foreground/15"
      >
        {services.map((service) => (
          <ServiceRow key={service.title} service={service} />
        ))}
      </motion.div>
    </Section>
  )
}
