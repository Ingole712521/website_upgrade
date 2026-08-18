import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton, Eyebrow, Section } from '@/components/ui/section'
import {
  motionEase,
  springSnappy,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

export function MetricStrip({
  items,
  className,
}: {
  items: { label: string; detail: string }[]
  className?: string
}) {
  return (
    <section className={cn('px-5 sm:px-8', className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-y border-border py-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0 sm:divide-x sm:divide-border"
      >
        {items.map((item) => (
          <motion.div
            key={item.label}
            variants={staggerItem}
            className="flex flex-1 flex-col px-0 sm:px-8 first:sm:pl-0 last:sm:pr-0"
          >
            <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export function CapabilityList({
  id = 'capabilities',
  eyebrow = 'Capabilities',
  title,
  description,
  items,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: string
  items: { title: string; desc: string; icon?: LucideIcon }[]
}) {
  return (
    <Section id={id}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 divide-y divide-border border-y border-border"
      >
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.li
              key={item.title}
              variants={staggerItem}
              whileHover={{ x: 6 }}
              transition={springSoft}
              className="group grid gap-4 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8 md:grid-cols-[5rem_auto_1fr]"
            >
              <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex items-start gap-3 md:contents">
                {Icon ? (
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center border border-foreground/15 text-primary md:mt-0">
                    <Icon className="h-4 w-4" />
                  </span>
                ) : null}
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.li>
          )
        })}
      </motion.ol>
    </Section>
  )
}

export function DeliverySplit({
  id = 'delivery',
  eyebrow = 'Client Context',
  title = 'Built from real delivery patterns.',
  patterns,
  outcomesTitle = 'What we help teams ship',
  outcomes,
  cta = { label: 'Discuss your industry roadmap', href: '/contact' },
}: {
  id?: string
  eyebrow?: string
  title?: ReactNode
  patterns: { title: string; desc: string }[]
  outcomesTitle?: string
  outcomes: string[]
  cta?: { label: string; href: string }
}) {
  return (
    <Section id={id} className="bg-muted/30 dark:bg-transparent">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 space-y-8"
          >
            {patterns.map((pattern, i) => (
              <motion.div key={pattern.title} variants={staggerItem} className="relative pl-5">
                <span
                  aria-hidden
                  className="absolute top-1.5 left-0 h-full w-px bg-border"
                  style={{ height: i === patterns.length - 1 ? '1.25rem' : undefined }}
                />
                <span
                  aria-hidden
                  className="absolute top-1.5 left-[-3px] h-2 w-2 rounded-full bg-primary"
                />
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {pattern.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pattern.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: motionEase }}
          className="flex flex-col justify-between lg:pt-12"
        >
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              {outcomesTitle}
            </h3>
            <ul className="mt-8 space-y-5">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={outcome}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.08 * index, duration: 0.5, ease: motionEase }}
                  className="border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-foreground/85 md:text-base"
                >
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={springSnappy}
            className="mt-10"
          >
            <CtaButton href={cta.href} variant="primary" className="group/btn">
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </CtaButton>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export function FactoryFlow({
  stats,
  stages,
  signals,
  platformLabels,
}: {
  stats: { label: string; detail: string }[]
  stages: { title: string; desc: string; icon: LucideIcon }[]
  signals: { label: string; tone: 'ok' | 'warn' }[]
  platformLabels: { icon: LucideIcon; label: string }[]
}) {
  const reduce = useReducedMotion()

  return (
    <Section id="connected">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>Connected Manufacturing</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Connect the factory floor to the cloud.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Turn line-level signals into real-time decisions with secure edge ingestion, cloud
            analytics, traceability, and AI-assisted operations.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-heading text-2xl font-bold text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: motionEase }}
          className="relative overflow-hidden border border-foreground/15 bg-card p-5"
        >
          <div className="relative grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 sm:grid-cols-2">
            {stages.map((stage, i) => {
              const Icon = stage.icon
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: motionEase }}
                  className="bg-background p-4"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{stage.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stage.desc}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="relative mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Live signals
              </p>
              <ul className="mt-3 space-y-2.5">
                {signals.map((s) => (
                  <li key={s.label} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <motion.span
                      className={cn(
                        'h-2 w-2 rounded-full',
                        s.tone === 'ok' ? 'bg-emerald-500' : 'bg-amber-400',
                      )}
                      animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Governed platform
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {platformLabels.map((item) => {
                  const Icon = item.icon
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      <Icon className="h-3 w-3 text-primary" />
                      {item.label}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export const IndustryHighlights = MetricStrip
export const IndustryDelivery = DeliverySplit
export const ManufacturingConnected = FactoryFlow
export type IndustryHighlight = { label: string; detail: string }
export type IndustryPattern = { title: string; desc: string }
