import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { CtaButton, Eyebrow, Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

export function ServiceHero({
  eyebrow,
  title,
  titleAccent,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: {
  eyebrow: string
  title: ReactNode
  titleAccent?: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  visual: ReactNode
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 12% 8%, rgba(58,174,240,0.14), transparent 60%), radial-gradient(ellipse 50% 35% at 90% 18%, rgba(244,63,94,0.1), transparent 55%)',
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={staggerItem}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-6 font-heading text-4xl font-black leading-[1.03] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {title}
            {titleAccent ? (
              <>
                {' '}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  {titleAccent}
                </span>
              </>
            ) : null}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>

          {(primaryCta || secondaryCta) && (
            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta ? (
                <CtaButton href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              ) : null}
              {secondaryCta ? (
                <CtaButton href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </CtaButton>
              ) : null}
            </motion.div>
          )}
        </motion.div>

        {visual}
      </div>
    </section>
  )
}

export type CapabilityItem = {
  title: string
  desc: string
  icon: LucideIcon
}

export function CapabilityGrid({
  id = 'capabilities',
  eyebrow = 'Capabilities',
  title,
  description,
  items,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  description: string
  items: CapabilityItem[]
}) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {items.map((item) => {
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

export function ServiceHeroVisual({
  title,
  subtitle,
  nodes,
  footerLeft = 'Pipeline active',
  footerRight = 'zcon · ai-first',
}: {
  title: string
  subtitle: string
  nodes: { icon: LucideIcon; label: string; tone?: 'primary' | 'accent' }[]
  footerLeft?: string
  footerRight?: string
}) {
  const LeadIcon = nodes[0]?.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-6 h-36 w-36 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur">
        <div className="flex items-center gap-2 rounded-t-xl bg-background/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0096e6]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">zcon / service.app</span>
        </div>

        <div className="border-y border-border bg-background/40 px-4 py-4">
          <div className="flex items-start gap-3">
            {LeadIcon ? (
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <LeadIcon className="h-5 w-5" />
              </span>
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 p-1.5">
          {nodes.slice(0, 4).map((node, i) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-background/50 p-3"
              >
                <span
                  className={
                    node.tone === 'accent'
                      ? 'grid h-8 w-8 place-items-center rounded-md bg-[#e11d48]/10 text-[#e11d48]'
                      : 'grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary'
                  }
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-foreground/85">{node.label}</span>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center justify-between rounded-b-xl border-t border-border bg-background/40 px-4 py-3">
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {footerLeft}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{footerRight}</span>
        </div>
      </div>
    </motion.div>
  )
}
