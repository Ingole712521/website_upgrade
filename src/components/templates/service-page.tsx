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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1 bg-primary sm:w-1.5"
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
            className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {title}
            {titleAccent ? (
              <>
                {' '}
                <span className="text-primary">{titleAccent}</span>
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
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
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
        className="mt-12 grid gap-px overflow-hidden border border-foreground/15 bg-foreground/15 sm:grid-cols-2"
      >
        {items.map((item, index) => {
          const Icon = item.icon
          const isOddLast = items.length % 2 === 1 && index === items.length - 1
          return (
            <motion.article
              key={item.title}
              variants={staggerItem}
              transition={springSoft}
              className={cn(
                'group relative bg-background p-6 transition-colors hover:bg-card',
                isOddLast && 'sm:col-span-2',
              )}
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[0.65rem] text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
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
        whileHover={{ y: -2 }}
        transition={springSoft}
        className="relative overflow-hidden border border-foreground/15 bg-card"
      >
        <div className="flex items-center gap-3 border-b border-foreground/15 bg-background px-4 py-3">
          <span className="h-2 w-2 bg-primary" />
          <span className="h-2 w-2 bg-foreground/25" />
          <span className="h-2 w-2 bg-foreground/15" />
          <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            zcon / service.app
          </span>
        </div>

        <div className="border-b border-foreground/15 bg-background/60 px-4 py-4">
          <div className="flex items-start gap-3">
            {LeadIcon ? (
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-foreground/15 text-primary">
                <LeadIcon className="h-5 w-5" />
              </span>
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{subtitle}</p>
              <div className="mt-3 h-1 overflow-hidden bg-foreground/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.15, ease: motionEase, delay: 0.45 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-px bg-foreground/10 p-px"
        >
          {nodes.slice(0, 4).map((node) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                variants={staggerItem}
                whileHover={reduce ? undefined : { backgroundColor: 'var(--card)' }}
                transition={springSnappy}
                className="flex items-center gap-2.5 bg-background p-3"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-foreground/85">{node.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="flex items-center justify-between border-t border-foreground/15 bg-background px-4 py-3">
          <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span className="h-1.5 w-1.5 bg-primary" />
            {footerLeft}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
            {footerRight}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
