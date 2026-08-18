import { motion } from 'motion/react'
import { ArrowRight, GraduationCap, Laptop, Lightbulb, TrendingUp, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading, CtaButton } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const perks: { title: string; desc: string; icon: LucideIcon; index: string }[] = [
  { title: 'Innovation-Driven Culture', desc: 'Work on frontier AI problems with real enterprise impact.', icon: Lightbulb, index: '01' },
  { title: 'Learning Programs', desc: 'Continuous upskilling, certifications, and mentorship.', icon: GraduationCap, index: '02' },
  { title: 'Remote Friendly', desc: 'Flexible, distributed teams across three continents.', icon: Laptop, index: '03' },
  { title: 'Growth Opportunities', desc: 'Clear pathways from engineer to technical leadership.', icon: TrendingUp, index: '04' },
]

export function Careers() {
  return (
    <Section id="careers">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Careers"
            title="Build what enterprises run on"
            description="Join a team where AI-native engineering isn't a buzzword — it's how we work every day. We hire curious builders who care about craft."
          />
          <div className="mt-8">
            <CtaButton href="/careers" variant="primary">
              View open roles
              <ArrowRight className="h-3.5 w-3.5" />
            </CtaButton>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-foreground/15"
        >
          {perks.map((perk) => {
            const Icon = perk.icon
            return (
              <motion.div
                key={perk.title}
                variants={staggerItem}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-foreground/15 py-5 sm:grid-cols-[3rem_auto_1fr] sm:gap-5"
              >
                <span className="hidden font-mono text-xs text-primary sm:block">{perk.index}</span>
                <Icon className="mt-0.5 h-4 w-4 text-foreground" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
