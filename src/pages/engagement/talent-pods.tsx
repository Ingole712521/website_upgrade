import { motion } from 'motion/react'
import {
  Bot,
  Check,
  Layers,
  Radar,
  RefreshCw,
  Users,
  X,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ExpandableNotes } from '@/components/ui/expandable-notes'
import { ServiceCta } from '@/components/templates/service-cta'
import { CapabilityGrid, ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'
import { Eyebrow, Section } from '@/components/ui/section'
import {
  PageEnter,
  Reveal,
  fadeUp,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

const features = [
  {
    icon: Users,
    title: 'Cross-Functional by Design',
    desc: 'Self-contained units including architects, frontend developers, backend engineers, and QA — ready to tackle complex vertical slices of your product.',
  },
  {
    icon: Bot,
    title: 'AI as a Force-Multiplier',
    desc: "Our pods don't just code. They leverage Copilot, Claude, and proprietary agents to accelerate boilerplate and focus on high-value business logic.",
  },
  {
    icon: Layers,
    title: 'Reusable AI Skills Library',
    desc: 'Each pod brings proven skills for frontend delivery, API patterns, QA, code review, UI preview, and release governance.',
  },
  {
    icon: Radar,
    title: 'Automated Impact Analysis',
    desc: 'Eliminate regression anxiety. Pods use AI-driven dependency mapping for rigorous impact analysis before every major pull request.',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Integration',
    desc: 'We adopt your rituals — planning boards, stand-ups, and CI/CD — so the pod operates as a frictionless extension of your core team.',
  },
]

const notes = [
  {
    id: 'when',
    tag: 'Fit',
    q: 'When should a team add a zCon talent pod?',
    a: 'A zCon talent pod is a cross-functional team with engineers, QA, architecture support, and delivery practices aligned to a specific product or workflow outcome.',
  },
  {
    id: 'integrate',
    tag: 'Rituals',
    q: 'How does a pod integrate into existing delivery rituals?',
    a: "Pods can integrate quickly by adopting the customer's rituals, repositories, architecture standards, CI/CD process, communication model, and delivery cadence.",
  },
  {
    id: 'roles',
    tag: 'Composition',
    q: 'What roles can be combined in one pod?',
    a: 'Pods can include frontend, backend, cloud, data, AI, QA, DevOps, mobile, architecture, and delivery leadership based on the workstream.',
  },
  {
    id: 'skills',
    tag: 'AI Skills',
    q: 'How do pods use reusable AI delivery skills?',
    a: 'Pods use reusable AI workflows for planning, code generation, refactoring, review, UI preview, test planning, impact analysis, and release checks.',
  },
]

const oldWay = [
  'Individual contributors thrown into chaos.',
  'Manual, error-prone coding practices.',
  'High onboarding overhead for your managers.',
  'Siloed knowledge and low accountability.',
]

const podWay = [
  'Pre-assembled, cohesive teams.',
  'AI-augmented development lifecycles.',
  'Reusable skills for planning, build, QA, review, and release.',
  'Self-managing with embedded leadership.',
  'Shared accountability and documented knowledge.',
]

export function TalentPodsPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Agile Engagement"
          title="On-Demand"
          titleAccent="Talent Pods"
          description="Deploy cross-functional engineering pods pre-equipped with advanced AI tools. Our engineers use AI as a force-multiplier to write cleaner code, conduct automated impact analysis, and integrate seamlessly into your agile workflows."
          primaryCta={{ label: 'Assemble a pod', href: '/contact' }}
          secondaryCta={{ label: 'See the difference', href: '#compare' }}
          visual={
            <ServiceHeroVisual
              title="Cross-functional pod"
              subtitle="Architects, engineers, QA — AI-augmented and delivery-ready."
              nodes={[
                { icon: Users, label: 'Cross-functional' },
                { icon: Bot, label: 'AI-augmented', tone: 'accent' },
                { icon: Radar, label: 'Impact analysis' },
                { icon: RefreshCw, label: 'Your rituals' },
              ]}
              footerLeft="Pod online"
              footerRight="talent · on-demand"
            />
          }
        />

        <CapabilityGrid
          id="features"
          eyebrow="Pod Capabilities"
          title={<>Built to ship, not just staff</>}
          description="Self-contained units that bring skills, rituals, and AI workflows — not just individual seats."
          items={features}
        />

        <ExpandableNotes
          id="notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="Pod Setup Notes"
          title={<>Before adding a dedicated talent pod</>}
          description="Clarify role mix, delivery rituals, repo access, and AI-assisted delivery standards. Tap a question to expand."
          notes={notes}
        />

        <Section id="compare">
          <Reveal>
            <Eyebrow>Comparison</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Why this isn&apos;t &ldquo;traditional augmentation&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Staffing individuals is not the same as shipping with a cohesive, AI-ready delivery unit.
            </p>
          </Reveal>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 lg:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55 }}
              className="border border-foreground/15 bg-card p-6 sm:p-8"
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                The Old Way
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {oldWay.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.08 * index }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-foreground/15 bg-muted text-muted-foreground">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: 0.08 }}
              whileHover={{ y: -3 }}
              className="relative overflow-hidden border border-foreground/15 bg-foreground p-6 text-background sm:p-8"
            >
              <p className="relative font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary">
                The zCon Pod Way
              </p>
              <ul className="relative mt-6 flex flex-col gap-4">
                {podWay.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.08 * index + 0.1 }}
                    className="flex items-start gap-3 text-sm leading-relaxed text-background/85"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 flex flex-wrap gap-2"
          >
            {['Architects', 'Frontend', 'Backend', 'QA', 'AI workflows'].map((tag) => (
              <motion.span
                key={tag}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={springSoft}
                className="border border-foreground/15 bg-background px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how an AI-ready talent pod compresses delivery without the staffing chaos."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
