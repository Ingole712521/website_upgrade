import { motion } from 'motion/react'
import { Compass, PenTool, Hammer, ShieldCheck, Rocket, TrendingUp, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'

const steps: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Discover', desc: 'Align on outcomes, map the domain, and de-risk with rapid discovery.', icon: Compass },
  { title: 'Design', desc: 'Architect systems and experiences with AI-assisted design.', icon: PenTool },
  { title: 'Build', desc: 'Engineer production-grade software in AI-native delivery pods.', icon: Hammer },
  { title: 'Validate', desc: 'Test, evaluate, and harden with automated governance gates.', icon: ShieldCheck },
  { title: 'Deploy', desc: 'Ship with zero-downtime pipelines and release controls.', icon: Rocket },
  { title: 'Scale', desc: 'Optimize, observe, and grow with continuous improvement.', icon: TrendingUp },
]

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

export function Process() {
  return (
    <Section id="process" className="bg-card/30">
      <SectionHeading
        eyebrow="Delivery Process"
        title="A disciplined path from idea to scale"
        description="Every engagement follows a proven delivery journey — engineered for speed without compromising governance."
      />

      <div className="relative mt-14">
        {/* connecting line */}
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: easeOut }}
          className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-primary via-primary/40 to-[#e11d48] lg:block"
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                <div className="mb-4 flex items-center gap-3 lg:block">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border border-border bg-background text-primary shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
