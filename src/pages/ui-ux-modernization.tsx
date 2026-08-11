import { motion } from 'motion/react'
import {
  Accessibility,
  ArrowDown,
  CheckCircle2,
  Gauge,
  LayoutDashboard,
  Palette,
  Shield,
  Sparkles,
  Waves,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ExpandableNotes } from '@/components/ui/expandable-notes'
import { ServiceCta } from '@/components/ui/service-cta'
import {
  CapabilityGrid,
  ServiceHero,
  ServiceHeroVisual,
} from '@/components/ui/service-page'
import { Section, SectionHeading } from '@/components/ui/section'
import { fadeUp, motionEase, PageEnter, springSnappy, springSoft, staggerContainer, staggerItem, viewportOnce } from '@/components/ui/reveal'

const capabilities = [
  {
    title: 'UX Auditing & Heuristic Evaluation',
    desc: 'We analyze legacy interfaces to identify friction points, accessibility violations, and workflow bottlenecks — then deliver actionable modernization roadmaps.',
    icon: Accessibility,
  },
  {
    title: 'Unified Design Systems',
    desc: 'Establish a single source of truth for your UI. We build token-based design systems that ensure consistency across complex, multi-tenant applications.',
    icon: Palette,
  },
  {
    title: 'Modern Frontend Architectures',
    desc: 'Migrate from rigid monoliths to component-driven architectures (React, Next.js, Vue). We deploy performant frontends that scale seamlessly.',
    icon: LayoutDashboard,
  },
]

const notes = [
  {
    id: 'without-replace',
    tag: 'Scope',
    q: 'Can we modernize UX without replacing core systems?',
    a: 'UI/UX modernization improves legacy interfaces by redesigning workflows, accessibility, responsiveness, visual systems, and frontend architecture for better adoption — without ripping out core backends.',
  },
  {
    id: 'priority',
    tag: 'Prioritization',
    q: 'How do you decide which workflows to redesign first?',
    a: 'zCon prioritizes workflows by user friction, operational impact, technical feasibility, accessibility gaps, and the value of improving the experience without disrupting existing systems.',
  },
  {
    id: 'ai-speed',
    tag: 'Delivery',
    q: 'How does AI speed frontend delivery?',
    a: 'AI helps generate UI variations, preview components, validate responsive layouts, cross-check accessibility, and accelerate repetitive frontend implementation.',
  },
  {
    id: 'design-system',
    tag: 'Systems',
    q: 'Can zCon build a reusable enterprise design system?',
    a: 'Yes. zCon can create reusable component libraries, design tokens, interaction patterns, and governance practices for consistent enterprise products.',
  },
]

const modernMetrics = [
  { label: 'Task clarity', value: '94%', icon: CheckCircle2 },
  { label: 'Cycle health', value: 'Live', icon: Waves },
  { label: 'Risk guardrails', value: 'On', icon: Shield },
  { label: 'Response speed', value: '2.4s', icon: Gauge },
]

export function UiUxModernizationPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="UI/UX Modernization"
          title="Consumer-Grade Experiences for"
          titleAccent="Enterprise Tools"
          description="Transform clunky, outdated interfaces into sleek, high-performance applications that boost user adoption and operational efficiency."
          primaryCta={{ label: 'Explore services', href: '#capabilities' }}
          secondaryCta={{ label: 'Start a conversation', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Experience command center"
              subtitle="From rigid screens to guided, responsive enterprise workflows."
              nodes={[
                { icon: Accessibility, label: 'UX audit' },
                { icon: Palette, label: 'Design system', tone: 'accent' },
                { icon: LayoutDashboard, label: 'Modern UI' },
                { icon: Sparkles, label: 'AI assist' },
              ]}
              footerLeft="Adoption-first"
              footerRight="ux · v2"
            />
          }
        />

        <CapabilityGrid
          title={<>Modernization that users actually feel</>}
          description="Audit friction, systemize design, and ship performant frontends — without disrupting the systems of record underneath."
          items={capabilities}
        />

        <ExpandableNotes
          id="ui-notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="UI Modernization Notes"
          title={<>Before redesigning enterprise workflows</>}
          description="Clarify workflow pain, backend constraints, accessibility, and reusable frontend patterns. Tap a question to expand."
          notes={notes}
        />

        <Section id="transformation">
          <SectionHeading
            align="center"
            eyebrow="The zCon Transformation"
            title={<>From rigid legacy screens to guided workflows</>}
            description="A clear before → after path: audit, systemize, and ship consumer-grade enterprise UX."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-6"
          >
            <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease: motionEase }}
                className="rounded-2xl border border-border bg-muted/40 p-5 dark:bg-background/50"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Legacy interface
                </p>
                <div className="mt-4 space-y-2">
                  {[88, 64, 76, 52, 70].map((w, i) => (
                    <motion.div
                      key={w}
                      initial={{ width: 0, opacity: 0.4 }}
                      whileInView={{ width: `${w}%`, opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.55, delay: 0.08 * i, ease: motionEase }}
                      className="h-8 rounded-lg bg-border/80"
                    />
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                    Manual checks
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                    Hidden status
                  </span>
                </div>
              </motion.div>

              <div className="flex flex-row items-center justify-center gap-3 py-2 lg:flex-col lg:px-2">
                {[
                  { label: 'Audit', icon: ArrowDown },
                  { label: 'Systemize', icon: Sparkles },
                  { label: 'Ship', icon: ArrowDown },
                ].map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ ...springSnappy, delay: 0.12 * i }}
                      whileHover={{ scale: 1.08 }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {step.label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease: motionEase, delay: 0.08 }}
                className="rounded-2xl border border-primary/25 bg-linear-to-br from-primary/10 via-card to-accent/10 p-5"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                  zCon modernized UI
                </p>
                <p className="mt-2 font-heading text-sm font-semibold text-foreground">
                  Experience command center
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Plan', 'Build', 'Ship', 'Learn'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-4 grid grid-cols-2 gap-2"
                >
                  {modernMetrics.map((metric) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={metric.label}
                        variants={staggerItem}
                        whileHover={{ y: -2 }}
                        transition={springSoft}
                        className="rounded-xl border border-border bg-background/80 p-3"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <p className="mt-2 text-sm font-semibold text-foreground">{metric.value}</p>
                        <p className="text-[11px] text-muted-foreground">{metric.label}</p>
                      </motion.div>
                    )
                  })}
                </motion.div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-muted-foreground">Guided workflow</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Eligibility review', 'Approval path', 'Release notes'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
