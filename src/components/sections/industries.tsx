import { Link } from 'react-router-dom'
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

const industries: { name: string; icon: LucideIcon; blurb: string; to?: string }[] = [
  { name: 'Healthcare', icon: HeartPulse, blurb: 'HIPAA-ready platforms & clinical AI', to: '/industries/healthcare' },
  { name: 'Pharma', icon: Pill, blurb: 'R&D data & compliance systems', to: '/industries/pharma' },
  { name: 'Manufacturing', icon: Factory, blurb: 'Smart factory & IoT telemetry', to: '/industries/manufacturing' },
  { name: 'Supply Chain', icon: Truck, blurb: 'Predictive logistics & visibility', to: '/industries/manufacturing' },
  { name: 'Real Estate', icon: Building2, blurb: 'PropTech & portfolio intelligence', to: '/industries/real-estate' },
  { name: 'Finance', icon: Landmark, blurb: 'Risk, fraud & regulated workloads' },
  { name: 'Education', icon: GraduationCap, blurb: 'Adaptive learning platforms' },
]

export function Industries() {
  return (
    <Section id="industries">
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
        className="mt-12 grid grid-cols-1 gap-0 border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-4"
      >
        {industries.map((industry) => {
          const Icon = industry.icon
          const inner = (
            <>
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {industry.to ? 'Open →' : 'Soon'}
                </span>
              </div>
              <h3 className="mt-8 font-heading text-lg font-semibold text-foreground">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{industry.blurb}</p>
            </>
          )

          const className =
            'group block border-b border-r border-foreground/15 p-6 transition-colors hover:bg-foreground/[0.03] sm:min-h-[180px]'

          return (
            <motion.article key={industry.name} variants={staggerItem}>
              {industry.to ? (
                <Link to={industry.to} className={className}>
                  {inner}
                </Link>
              ) : (
                <div className={className}>{inner}</div>
              )}
            </motion.article>
          )
        })}

        <motion.div
          variants={staggerItem}
          className="flex flex-col justify-end border-b border-r border-foreground/15 bg-foreground p-6 text-background sm:min-h-[180px]"
        >
          <p className="font-heading text-4xl font-bold text-primary">7+</p>
          <p className="mt-2 text-sm text-background/65">
            regulated industries served across three continents.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
