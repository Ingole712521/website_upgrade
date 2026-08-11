import { motion } from 'motion/react'
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Pill,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const industries: { name: string; icon: LucideIcon; blurb: string }[] = [
  { name: 'Healthcare', icon: HeartPulse, blurb: 'HIPAA-ready platforms & clinical AI' },
  { name: 'Pharma', icon: Pill, blurb: 'R&D data & compliance systems' },
  { name: 'Manufacturing', icon: Factory, blurb: 'Smart factory & IoT telemetry' },
  { name: 'Supply Chain', icon: Truck, blurb: 'Predictive logistics & visibility' },
  { name: 'Real Estate', icon: Building2, blurb: 'PropTech & portfolio intelligence' },
  { name: 'Finance', icon: Landmark, blurb: 'Risk, fraud & regulated workloads' },
  { name: 'Education', icon: GraduationCap, blurb: 'Adaptive learning platforms' },
]

export function Industries() {
  return (
    <Section id="industries" className="bg-card/30">
      <SectionHeading
        eyebrow="Industries"
        title="Domain depth across regulated enterprises"
        description="We bring engineering rigor and industry context to sectors where reliability, security, and compliance are non-negotiable."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <motion.article
              key={industry.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {industry.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{industry.blurb}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-[#e11d48] transition-all duration-300 group-hover:w-full"
              />
            </motion.article>
          )
        })}

        <motion.div
          variants={staggerItem}
          className="flex flex-col justify-center rounded-2xl border border-dashed border-border bg-primary/5 p-6"
        >
          <p className="font-heading text-3xl font-bold text-primary">7+</p>
          <p className="mt-1 text-sm text-muted-foreground">
            regulated industries served across three continents.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
