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
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,150,230,0.22),transparent_65%)] blur-2xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>Micro GCC as a Service</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Your dedicated innovation hub
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Stand up a fully-managed, AI-native engineering center — the speed and control of an
                in-house team, without the overhead. Full IP ownership, enterprise governance, and
                global delivery from day one.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="#contact" variant="primary">
                  Build your hub
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
                <CtaButton href="#work" variant="outline">
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
            className="grid gap-3 sm:grid-cols-2"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="flex gap-3 rounded-xl border border-border bg-background/70 p-4 backdrop-blur"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4"
            >
              <Building className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Pune · Delaware delivery</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
