import { motion } from 'motion/react'
import { ArrowRight, Bot, Building, Globe2, Scale, ShieldCheck, Zap, type LucideIcon } from 'lucide-react'
import { Section, Eyebrow, CtaButton } from '@/components/ui/section'
import { Reveal, staggerContainer, staggerItem } from '@/components/ui/reveal'

const features: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'AI Native Teams', desc: 'Pods that build with AI from day one.', icon: Bot },
  { title: 'Rapid Scaling', desc: 'Ramp capacity up or down on demand.', icon: Zap },
  { title: '100% IP Ownership', desc: 'Every asset and artifact stays yours.', icon: Scale },
  { title: 'Global Delivery', desc: 'Follow-the-sun across three regions.', icon: Globe2 },
  { title: 'Enterprise Governance', desc: 'Security, compliance & release controls.', icon: ShieldCheck },
]

export function MicroGcc() {
  return (
    <Section id="micro-gcc">
      <div className="relative overflow-hidden border border-foreground/15 bg-foreground text-background">
        <div aria-hidden className="pointer-events-none absolute inset-0 stripe-bg opacity-40" />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <Eyebrow className="text-background/55 [&_span]:bg-primary">Micro GCC as a Service</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Your dedicated innovation hub
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-background/65 md:text-lg">
                Stand up a fully-managed, AI-native engineering center — the speed and control of an
                in-house team, without the overhead. Full IP ownership, enterprise governance, and
                global delivery from day one.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="/engagement/micro-gcc" variant="primary">
                  Build your hub
                  <ArrowRight className="h-3.5 w-3.5" />
                </CtaButton>
                <CtaButton
                  href="/case-studies"
                  variant="outline"
                  className="border-background/30 text-background hover:border-background hover:bg-background hover:text-foreground"
                >
                  See it in action
                </CtaButton>
              </div>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-2"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="flex gap-3 bg-foreground p-4"
                >
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-background">{feature.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-background/55">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 bg-primary p-4 text-primary-foreground sm:col-span-2"
            >
              <Building className="h-4 w-4" />
              <p className="font-mono text-xs uppercase tracking-[0.14em]">
                Pune · Delaware delivery
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
