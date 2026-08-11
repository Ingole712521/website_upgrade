import { motion } from 'motion/react'
import { ArrowRight, GraduationCap, Laptop, Lightbulb, TrendingUp, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading, CtaButton } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const perks: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Innovation-Driven Culture', desc: 'Work on frontier AI problems with real enterprise impact.', icon: Lightbulb },
  { title: 'Learning Programs', desc: 'Continuous upskilling, certifications, and mentorship.', icon: GraduationCap },
  { title: 'Remote Friendly', desc: 'Flexible, distributed teams across three continents.', icon: Laptop },
  { title: 'Growth Opportunities', desc: 'Clear pathways from engineer to technical leadership.', icon: TrendingUp },
]

export function Careers() {
  return (
    <Section id="careers">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Careers"
          title="Build what enterprises run on"
          description="Join a team where AI-native engineering isn't a buzzword — it's how we work every day. We hire curious builders who care about craft."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {perks.map((perk) => {
            const Icon = perk.icon
            return (
              <motion.div
                key={perk.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {perk.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
              </motion.div>
            )
          })}
          <div className="sm:col-span-2">
            <CtaButton href="/careers" variant="outline" className="w-full sm:w-auto">
              View open roles
              <ArrowRight className="h-4 w-4" />
            </CtaButton>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
