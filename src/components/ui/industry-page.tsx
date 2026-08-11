import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton, Eyebrow, Section } from '@/components/ui/section'
import {
  fadeUp,
  springSnappy,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

export type IndustryHighlight = {
  label: string
  detail: string
}

export function IndustryHighlights({
  items,
  className,
}: {
  items: IndustryHighlight[]
  className?: string
}) {
  return (
    <section className={cn('px-5 sm:px-8', className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-3"
      >
        {items.map((item) => (
          <motion.article
            key={item.label}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={springSoft}
            className="rounded-2xl border border-border bg-card/70 px-6 py-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)]"
          >
            <p className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-[1.75rem]">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export type IndustryPattern = {
  title: string
  desc: string
}

export function IndustryDelivery({
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
  patterns: IndustryPattern[]
  outcomesTitle?: string
  outcomes: string[]
  cta?: { label: string; href: string }
}) {
  return (
    <Section id={id} className="bg-muted/40 dark:bg-transparent">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
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
            className="mt-8 flex flex-col gap-3"
          >
            {patterns.map((pattern) => (
              <motion.article
                key={pattern.title}
                variants={staggerItem}
                whileHover={{ y: -2, borderColor: 'color-mix(in srgb, var(--primary) 35%, transparent)' }}
                transition={springSoft}
                className="rounded-2xl border border-border bg-background/70 p-5 sm:p-6"
              >
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                  {pattern.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pattern.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col rounded-3xl border border-border bg-card/70 p-6 sm:p-8"
        >
          <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {outcomesTitle}
          </h3>
          <ul className="mt-6 flex flex-1 flex-col gap-4">
            {outcomes.map((outcome, index) => (
              <motion.li
                key={outcome}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: 0.06 * index }}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/85">{outcome}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={springSnappy} className="mt-8">
            <CtaButton href={cta.href} variant="primary" className="group/btn w-full sm:w-auto">
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </CtaButton>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

export type FactorySignal = {
  label: string
  tone: 'ok' | 'warn'
}

export type FactoryStage = {
  title: string
  desc: string
  icon: LucideIcon
}

export function ManufacturingConnected({
  eyebrow = 'Connected Manufacturing',
  title = 'Connect the factory floor to the cloud.',
  description = 'Turn line-level signals into real-time decisions with secure edge ingestion, cloud analytics, traceability, and AI-assisted operations.',
  stats,
  stages,
  signals,
  platformLabels,
}: {
  eyebrow?: string
  title?: string
  description?: string
  stats: IndustryHighlight[]
  stages: FactoryStage[]
  signals: FactorySignal[]
  platformLabels: { icon: LucideIcon; label: string }[]
}) {
  return (
    <Section id="connected" className="bg-muted/40 dark:bg-transparent">
      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card/60 px-4 py-4"
              >
                <p className="font-heading text-xl font-bold text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-3xl border border-border bg-card/70 p-4 sm:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => {
              const Icon = stage.icon
              return (
                <div
                  key={stage.title}
                  className="rounded-2xl border border-border bg-background/60 p-4"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 font-heading text-sm font-semibold text-foreground">{stage.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stage.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/60 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Live Production Signals
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {signals.map((signal) => (
                  <li key={signal.label} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full',
                        signal.tone === 'ok' ? 'bg-emerald-500' : 'bg-amber-400',
                      )}
                    />
                    {signal.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                Governed Data Platform
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {platformLabels.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card/50 px-2 py-3 text-center"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[0.7rem] font-medium text-muted-foreground">{item.label}</span>
                    </div>
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

export function IndustryFeatureStack({
  id = 'capabilities',
  items,
}: {
  id?: string
  items: { title: string; desc: string; icon: LucideIcon }[]
}) {
  return (
    <Section id={id}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col gap-4"
      >
        {items.map((item) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={springSoft}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/35 sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
