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

const reasons: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'AI-First Engineering',
    desc: 'AI is woven through every phase — from discovery to delivery — not bolted on at the end.',
    icon: BrainCircuit,
  },
  {
    title: 'Data Sovereignty',
    desc: 'Your data stays in your control with private, self-hostable model deployments.',
    icon: Lock,
  },
  {
    title: 'Reusable AI Skills',
    desc: 'A governed library of composable capabilities that compound value across projects.',
    icon: Layers3,
  },
  {
    title: 'Release Governance',
    desc: 'Automated gates, audit trails, and compliance built into every pipeline.',
    icon: GitPullRequestArrow,
  },
  {
    title: 'Dedicated Talent Pods',
    desc: 'Long-lived, cross-functional teams that own outcomes end to end.',
    icon: Users,
  },
  {
    title: 'Enterprise Architecture',
    desc: 'Systems designed for scale, resilience, and two decades of maintainability.',
    icon: Database,
  },
]

export function WhyZcon() {
  return (
    <Section id="why" className="bg-card/30">
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
        className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {reasons.map((reason) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="group flex flex-col bg-background p-7 transition-colors duration-300 hover:bg-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
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
