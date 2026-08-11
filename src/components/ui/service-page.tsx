import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton, Eyebrow, Section, SectionHeading } from '@/components/ui/section'
import {
  fadeScale,
  motionEase,
  springSnappy,
  springSoft,
  staggerContainer,
  staggerFast,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

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
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: motionEase }}
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
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <CtaButton href={primaryCta.href} variant="primary" className="group/btn">
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </CtaButton>
                </motion.div>
              ) : null}
              {secondaryCta ? (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <CtaButton href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </CtaButton>
                </motion.div>
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
        viewport={viewportOnce}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {items.map((item, index) => {
          const Icon = item.icon
          const isOddLast = items.length % 2 === 1 && index === items.length - 1
          return (
            <motion.article
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={springSoft}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/35 hover:shadow-[0_20px_50px_-30px_rgba(58,174,240,0.45)]',
                isOddLast && 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.5rem)]',
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <motion.span
                className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              >
                <Icon className="h-5 w-5" />
              </motion.span>
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
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.15 }}
      className="relative"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-6 h-36 w-36 rounded-full bg-accent/15 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      <motion.div
        whileHover={{ y: -4 }}
        transition={springSoft}
        className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur"
      >
        <div className="flex items-center gap-2 rounded-t-xl bg-background/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0096e6]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">zcon / service.app</span>
        </div>

        <div className="border-y border-border bg-background/40 px-4 py-4">
          <div className="flex items-start gap-3">
            {LeadIcon ? (
              <motion.span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"
                animate={reduce ? undefined : { rotate: [0, -4, 4, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LeadIcon className="h-5 w-5" />
              </motion.span>
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{subtitle}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.15, ease: motionEase, delay: 0.45 }}
                  className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-1.5 p-1.5"
        >
          {nodes.slice(0, 4).map((node) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                variants={staggerItem}
                whileHover={{ y: -2, borderColor: 'color-mix(in srgb, var(--primary) 45%, transparent)' }}
                transition={springSnappy}
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
        </motion.div>

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
      </motion.div>
    </motion.div>
  )
}
