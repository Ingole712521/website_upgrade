import { motion } from 'motion/react'
import {
  BookOpenCheck,
  Compass,
  FileSearch,
  Hammer,
  ShieldCheck,
  Wrench,
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
import { motionEase, staggerContainer, staggerItem } from '@/components/ui/reveal'

const phases = [
  {
    title: 'Thorough Setup',
    desc: 'Establish clear goals, team alignment, and tool integration.',
    icon: Compass,
  },
  {
    title: 'AI-Assisted System Understanding',
    desc: 'Analyze codebase and map dependencies with AI-assisted discovery.',
    icon: FileSearch,
  },
  {
    title: 'Precise Framework Documentation',
    desc: 'Automatically generate comprehensive and up-to-date documentation.',
    icon: BookOpenCheck,
  },
  {
    title: 'Modernization',
    desc: 'Execute the planned conversion and migration tasks safely.',
    icon: Hammer,
  },
  {
    title: 'POS Verification',
    desc: 'In-depth verification against expected outcomes and performance metrics.',
    icon: ShieldCheck,
  },
  {
    title: 'Ongoing Maintenance',
    desc: 'Continuous support, hardening, and incremental improvements.',
    icon: Wrench,
  },
]

const notes = [
  {
    id: 'disruption',
    tag: 'Delivery',
    q: 'How can we ensure minimal disruption during modernization?',
    a: 'We utilize side-by-side deployment and gradual phase-outs to keep systems available while modernizing critical paths.',
  },
  {
    id: 'risk',
    tag: 'Risk',
    q: 'What are the risks of staying on legacy systems?',
    a: 'Increased maintenance costs, security vulnerabilities, and difficulty scaling or integrating with modern platforms and AI capabilities.',
  },
  {
    id: 'roi',
    tag: 'Business',
    q: 'How do we determine the ROI of a modernization?',
    a: 'By calculating savings on maintenance, improvements in performance, reduced incident load, and faster time-to-market for new features.',
  },
  {
    id: 'docs',
    tag: 'Discovery',
    q: "Can you help even if we don't have current documentation?",
    a: 'Yes. Our AI-assisted tools help reverse-engineer behavior and generate living documentation from existing source code and runtime signals.',
  },
]

export function LegacyMaintenancePage() {
  return (
    <motion.main
      className="relative isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: motionEase }}
    >
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Services"
          title="Breathe New Life into"
          titleAccent="Legacy Systems"
          description="Faster, safer modernization with lower long-term maintenance costs. AI is an accelerator — not a replacement for human engineering."
          primaryCta={{ label: 'See the approach', href: '#approach' }}
          secondaryCta={{ label: 'Schedule a consultation', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Legacy → modern bridge"
              subtitle="Discover, document, modernize, and maintain with governed AI assist."
              nodes={[
                { icon: FileSearch, label: 'Understand' },
                { icon: BookOpenCheck, label: 'Document', tone: 'accent' },
                { icon: Hammer, label: 'Modernize' },
                { icon: Wrench, label: 'Maintain' },
              ]}
              footerLeft="Zero-downtime path"
              footerRight="legacy · safe"
            />
          }
        />

        <Section id="approach">
          <SectionHeading
            eyebrow="6-Phase Approach"
            title={<>A disciplined path from legacy to modern</>}
            description="Each phase is AI-assisted and senior-led — so discovery is faster without sacrificing architectural judgment."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative mt-12"
          >
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-[1.35rem] w-px bg-border md:left-1/2 md:-translate-x-px"
            />
            <div className="flex flex-col gap-6">
              {phases.map((phase, i) => {
                const Icon = phase.icon
                const right = i % 2 === 1
                return (
                  <motion.article
                    key={phase.title}
                    variants={staggerItem}
                    className={`relative grid items-start gap-4 md:grid-cols-2 ${right ? 'md:text-left' : ''}`}
                  >
                    <div className={`md:pr-12 ${right ? 'md:order-2 md:pl-12 md:pr-0' : 'md:text-right'}`}>
                      <div
                        className={`rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/35 ${right ? '' : 'md:ml-auto'} max-w-md`}
                      >
                        <div className={`flex items-center gap-3 ${right ? '' : 'md:flex-row-reverse'}`}>
                          <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                              Phase {i + 1}
                            </p>
                            <h3 className="font-heading text-base font-semibold text-foreground">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
                      </div>
                    </div>
                    <div className="absolute top-5 left-3 grid h-7 w-7 place-items-center rounded-full border border-primary/40 bg-background text-xs font-semibold text-primary md:left-1/2 md:-translate-x-1/2">
                      {i + 1}
                    </div>
                    <div className={right ? 'md:order-1' : 'hidden md:block'} />
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        </Section>

        <ExpandableNotes
          id="legacy-notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="Modernization Notes"
          title={<>Before changing legacy systems</>}
          description="Clarify disruption risk, ROI, and how far AI-assisted discovery can take undocumented systems. Tap a question to expand."
          notes={notes}
        />

        <CapabilityGrid
          id="ai-power"
          eyebrow="Powered by Advanced AI"
          title={<>Modern tools. Human judgment.</>}
          description="We use modern AI tooling to accelerate understanding and migration — while senior engineers own architecture, risk, and release decisions."
          items={[
            {
              title: 'Codebase intelligence',
              desc: 'Map dependencies, dead paths, and high-risk modules before modernization begins.',
              icon: FileSearch,
            },
            {
              title: 'Living documentation',
              desc: 'Generate and refresh architecture notes so teams stop relying on tribal knowledge.',
              icon: BookOpenCheck,
            },
            {
              title: 'Safe cutover patterns',
              desc: 'Side-by-side deployment, strangler patterns, and verification gates reduce downtime risk.',
              icon: ShieldCheck,
            },
            {
              title: 'Long-term care',
              desc: 'Keep modernized systems healthy with continuous maintenance and improvement loops.',
              icon: Wrench,
            },
          ]}
        />

        <ServiceCta
          title="Let's build what's next."
          description="Talk to our team to see how we can accelerate modernization without disrupting the business."
          cta="Schedule a consultation"
        />
      </div>
    </motion.main>
  )
}
