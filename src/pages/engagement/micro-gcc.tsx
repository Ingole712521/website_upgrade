import { motion } from 'motion/react'
import { Building2, Globe2, Layers, ShieldCheck, Zap } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ExpandableNotes } from '@/components/ui/expandable-notes'
import { ServiceCta } from '@/components/templates/service-cta'
import { CapabilityGrid, ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'
import { Section, SectionHeading } from '@/components/ui/section'
import {
  PageEnter,
  fadeUp,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

const benefits = [
  {
    icon: Zap,
    title: 'Zero CapEx Setup',
    desc: 'We provide the infrastructure, security, and office space. You start immediately without upfront capital expenditure.',
  },
  {
    icon: ShieldCheck,
    title: '100% IP & Cultural Control',
    desc: 'Your processes, your tools, your IP. The team operates as a true extension of your engineering organization.',
  },
  {
    icon: Layers,
    title: 'AI-Native Engineering Talent',
    desc: 'Access pre-vetted engineers trained extensively in modern AI workflows, Copilot, and agentic development tools.',
  },
]

const notes = [
  {
    id: 'vs-outsourcing',
    tag: 'Model',
    q: 'When is Micro GCC better than traditional outsourcing?',
    a: 'A Micro GCC is a dedicated engineering hub that gives companies AI-native delivery capacity, operational infrastructure, and team continuity without the setup time of a traditional GCC.',
  },
  {
    id: 'timeline',
    tag: 'Timeline',
    q: 'What determines the setup timeline?',
    a: 'A focused Micro GCC can typically start in weeks, depending on role mix, onboarding needs, tooling, compliance requirements, and customer availability.',
  },
  {
    id: 'control',
    tag: 'Control',
    q: 'How much control does the customer retain?',
    a: 'The customer retains IP ownership and process control. zCon provides the operating model, engineering talent, delivery governance, and support infrastructure.',
  },
  {
    id: 'knowledge',
    tag: 'Continuity',
    q: 'How does zCon keep knowledge inside the dedicated team?',
    a: 'A Micro GCC is built as a dedicated extension of the customer team with stronger continuity, cultural alignment, governance, and long-term knowledge retention.',
  },
]

const comparisonRows = [
  {
    capability: 'Setup Time',
    outsourcing: '1 – 3 Months',
    traditional: '9 – 18 Months',
    zcon: '2 – 4 Weeks',
  },
  {
    capability: 'Capital Expenditure (CapEx)',
    outsourcing: 'Zero',
    traditional: 'Massive',
    zcon: 'Zero (Lean OpEx)',
  },
  {
    capability: 'IP & Knowledge Ownership',
    outsourcing: 'High Risk (Vendor Owns)',
    traditional: 'Full Control',
    zcon: 'Full Control',
  },
  {
    capability: 'Talent Sourcing',
    outsourcing: 'Generic Pool',
    traditional: 'Difficult & Slow',
    zcon: 'AI-Native Experts',
  },
  {
    capability: 'Agility & Scaling',
    outsourcing: 'Medium',
    traditional: 'Low',
    zcon: 'High',
  },
]

export function MicroGccPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Micro GCC as a Service"
          title="Build Your Dedicated AI Innovation Hub in"
          titleAccent="Weeks, Not 12 Months."
          description="Bypass the massive CapEx and slow setup of traditional capability centers while maintaining full control over your IP."
          primaryCta={{ label: 'Build your hub', href: '/contact' }}
          secondaryCta={{ label: 'Compare models', href: '#compare' }}
          visual={
            <ServiceHeroVisual
              title="Dedicated innovation hub"
              subtitle="Infrastructure, talent, and governance — ready in weeks."
              nodes={[
                { icon: Globe2, label: 'Global delivery' },
                { icon: Zap, label: 'Zero CapEx', tone: 'accent' },
                { icon: ShieldCheck, label: 'Full IP control' },
                { icon: Building2, label: 'Dedicated hub' },
              ]}
              footerLeft="Hub ready"
              footerRight="micro-gcc · weeks"
            />
          }
        />

        <CapabilityGrid
          id="benefits"
          eyebrow="Why Micro GCC"
          title={<>Speed without surrendering control</>}
          description="A lean operating model that feels like an in-house team — without the capital and calendar of a traditional GCC."
          items={benefits}
        />

        <ExpandableNotes
          id="notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="Micro GCC Notes"
          title={<>Before launching a dedicated innovation hub</>}
          description="Clarify team shape, IP control, onboarding, governance, and operating rhythm. Tap a question to expand."
          notes={notes}
        />

        <Section id="compare">
          <SectionHeading
            eyebrow="Comparison"
            title={<>Why Micro GCC?</>}
            description="Comparing traditional models against the agile zCon Micro GCC approach."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/50"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:px-6">
                      Capability / Model
                    </th>
                    <th className="px-5 py-4 font-heading text-sm font-semibold text-foreground sm:px-6">
                      Traditional Outsourcing
                    </th>
                    <th className="px-5 py-4 font-heading text-sm font-semibold text-foreground sm:px-6">
                      Traditional GCC
                    </th>
                    <th className="relative px-5 py-4 font-heading text-sm font-semibold text-primary sm:px-6">
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.15 }}
                        className="absolute inset-0 -z-10 bg-primary/8"
                      />
                      zCon Micro GCC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <motion.tr
                      key={row.capability}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.06 * index, duration: 0.45 }}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-5 py-4 text-sm font-medium text-foreground sm:px-6">
                        {row.capability}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground sm:px-6">
                        {row.outsourcing}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground sm:px-6">
                        {row.traditional}
                      </td>
                      <td className="relative px-5 py-4 text-sm font-semibold text-foreground sm:px-6">
                        <span className="absolute inset-0 -z-10 bg-primary/8" />
                        {row.zcon}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 grid gap-3 sm:hidden"
          >
            {comparisonRows.map((row) => (
              <motion.div
                key={row.capability}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={springSoft}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {row.capability}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">{row.zcon}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  vs {row.outsourcing} · {row.traditional}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how a Micro GCC compresses setup without giving up control."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
