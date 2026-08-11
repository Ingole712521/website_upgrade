import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
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
import { RollingText } from '@/components/ui/rolling-text'
import {
  motionEase,
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
  className: string
  tone: 'primary' | 'accent'
  points?: string[]
}

const services: Service[] = [
  {
    title: 'AI Product Engineering',
    desc: 'From concept to production-grade AI products — agentic systems, LLM pipelines, and evaluation harnesses engineered for enterprise scale.',
    icon: BrainCircuit,
    to: '/capabilities/ai-product-engineering',
    className: 'md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0',
    tone: 'accent',
    points: ['Agentic architectures', 'RAG & knowledge retrieval', 'Model evaluation & guardrails'],
  },
  {
    title: 'AI Software PLM',
    desc: 'AI-augmented product lifecycle management across the full build, release, and iterate loop.',
    icon: GitFork,
    to: '/services/ai-software-plm',
    className: 'md:col-span-2',
    tone: 'primary',
  },
  {
    title: 'Legacy Modernization',
    desc: 'Re-platform monoliths into resilient, cloud-native services without disrupting the business.',
    icon: RefreshCw,
    to: '/services/legacy-maintenance',
    className: 'md:col-span-1',
    tone: 'primary',
  },
  {
    title: 'Knowledge Graph Engineering',
    desc: 'Model complex enterprise domains into queryable, reasoning-ready knowledge graphs.',
    icon: Network,
    to: '/services/knowledge-graphs',
    className: 'md:col-span-1',
    tone: 'primary',
  },
  {
    title: 'UI/UX Modernization',
    desc: 'Rebuild interfaces into fast, accessible, design-system-driven product experiences.',
    icon: LayoutDashboard,
    to: '/services/ui-ux-modernization',
    className: 'md:col-span-2',
    tone: 'primary',
  },
  {
    title: 'Micro GCC as a Service',
    desc: 'Spin up a dedicated, AI-native engineering hub with full IP ownership and governance.',
    icon: Boxes,
    to: '/engagement/micro-gcc',
    className: 'md:col-span-2',
    tone: 'accent',
  },
]

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const isFeatured = Boolean(service.points)
  const accent = service.tone === 'accent'

  return (
    <motion.article
      variants={staggerItem}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={springSoft}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn('group relative', service.className)}
    >
      <Link
        to={service.to}
        className={cn(
          'relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6 outline-none transition-[border-color,box-shadow] duration-300 sm:p-7',
          'hover:border-primary/40 hover:shadow-[0_24px_60px_-36px_rgba(58,174,240,0.55)]',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          accent && 'hover:border-[#e11d48]/35 hover:shadow-[0_24px_60px_-36px_rgba(225,29,72,0.45)]',
          isFeatured && 'md:p-8',
        )}
      >
        <motion.div
          aria-hidden
          className={cn(
            'pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full blur-3xl',
            accent ? 'bg-[#e11d48]/18' : 'bg-primary/16',
          )}
          animate={
            reduce
              ? undefined
              : { opacity: hovered ? 0.9 : 0.35, scale: hovered ? 1.1 : 0.92 }
          }
          transition={{ duration: 0.55, ease: motionEase }}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 0% 100%, color-mix(in srgb, var(--primary) 10%, transparent), transparent 70%)',
          }}
        />

        <div className="relative flex items-start justify-between gap-4">
          <motion.span
            className={cn(
              'grid h-11 w-11 place-items-center rounded-2xl border',
              accent
                ? 'border-[#e11d48]/25 bg-[#e11d48]/12 text-[#e11d48]'
                : 'border-primary/25 bg-primary/12 text-primary',
            )}
            animate={reduce ? undefined : { rotate: hovered ? -8 : 0, scale: hovered ? 1.08 : 1 }}
            transition={springSoft}
          >
            <Icon className="h-5 w-5" />
          </motion.span>

          <span
            className={cn(
              'grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300',
              hovered &&
                'translate-x-0.5 -translate-y-0.5 border-foreground/20 bg-foreground/5 text-foreground',
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <h3
          className={cn(
            'relative mt-5 font-heading font-semibold tracking-tight text-foreground',
            isFeatured ? 'text-xl sm:text-2xl' : 'text-lg',
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            'relative mt-2 leading-relaxed text-muted-foreground',
            isFeatured ? 'max-w-md text-sm md:text-base' : 'text-sm',
          )}
        >
          {service.desc}
        </p>

        {service.points ? (
          <ul className="relative mt-auto flex flex-col gap-2.5 pt-8">
            {service.points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.08 * i, duration: 0.45, ease: motionEase }}
                className="flex items-center gap-2.5 text-sm text-foreground/85"
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full',
                    accent ? 'bg-[#e11d48]' : 'bg-primary',
                  )}
                />
                {point}
              </motion.li>
            ))}
          </ul>
        ) : (
          <div
            className={cn(
              'relative mt-auto pt-6 transition-opacity duration-300',
              hovered ? 'opacity-100' : 'opacity-0',
            )}
          >
            <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground">
              <RollingText text="Explore" active={hovered} />
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        )}

        {isFeatured ? (
          <div className="relative mt-6 border-t border-border/70 pt-4 md:mt-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              <RollingText text="Explore capability" active={hovered} />
              <ArrowUpRight
                className={cn(
                  'h-3 w-3 transition-transform duration-300',
                  hovered && 'translate-x-0.5 -translate-y-0.5',
                )}
              />
            </span>
          </div>
        ) : null}
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
        className="mt-12 grid auto-rows-[minmax(168px,auto)] grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[minmax(190px,auto)]"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </Section>
  )
}
