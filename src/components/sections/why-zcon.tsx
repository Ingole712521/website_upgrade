import { motion } from 'motion/react'
import {
  BrainCircuit,
  Database,
  GitPullRequestArrow,
  Layers3,
  Lock,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const reasons: { title: string; desc: string; icon: LucideIcon; index: string }[] = [
  {
    title: 'AI-First Engineering',
    desc: 'AI is woven through every phase — from discovery to delivery — not bolted on at the end.',
    icon: BrainCircuit,
    index: '01',
  },
  {
    title: 'Data Sovereignty',
    desc: 'Your data stays in your control with private, self-hostable model deployments.',
    icon: Lock,
    index: '02',
  },
  {
    title: 'Reusable AI Skills',
    desc: 'A governed library of composable capabilities that compound value across projects.',
    icon: Layers3,
    index: '03',
  },
  {
    title: 'Release Governance',
    desc: 'Automated gates, audit trails, and compliance built into every pipeline.',
    icon: GitPullRequestArrow,
    index: '04',
  },
  {
    title: 'Dedicated Talent Pods',
    desc: 'Long-lived, cross-functional teams that own outcomes end to end.',
    icon: Users,
    index: '05',
  },
  {
    title: 'Enterprise Architecture',
    desc: 'Systems designed for scale, resilience, and two decades of maintainability.',
    icon: Database,
    index: '06',
  },
]

export function WhyZcon() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why zCon"
        title="Engineered to earn enterprise trust"
        description="What separates zCon from a typical services vendor: AI-native delivery, real governance, and teams that own the outcome."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-foreground/15 bg-foreground/15 sm:grid-cols-2 lg:grid-cols-3"
      >
        {reasons.map((reason) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="group flex flex-col bg-background p-7 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[0.65rem] text-muted-foreground">{reason.index}</span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
