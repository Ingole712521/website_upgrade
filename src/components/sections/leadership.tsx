import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const leaders = [
  { name: 'Rajesh Kulkarni', role: 'Founder & CEO', initials: 'RK', focus: 'Enterprise strategy' },
  { name: 'Anita Deshmukh', role: 'Chief Technology Officer', initials: 'AD', focus: 'AI architecture' },
  { name: 'Michael Reyes', role: 'VP, Global Delivery', initials: 'MR', focus: 'Delivery excellence' },
  { name: 'Priya Nair', role: 'Head of AI Engineering', initials: 'PN', focus: 'Applied AI & agents' },
]

export function Leadership() {
  return (
    <Section id="leadership" className="bg-card/30">
      <SectionHeading
        eyebrow="Leadership"
        title="Seasoned operators, hands-on engineers"
        description="A leadership team with decades of combined experience shipping mission-critical systems for global enterprises."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {leaders.map((leader) => (
          <motion.article
            key={leader.name}
            variants={staggerItem}
            className="group flex flex-col rounded-2xl border border-border bg-background p-6"
          >
            <div className="relative mb-5 grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 to-[#e11d48]/15 font-heading text-xl font-bold text-primary ring-1 ring-inset ring-border">
              {leader.initials}
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground">{leader.name}</h3>
            <p className="mt-0.5 text-sm text-primary">{leader.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">{leader.focus}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
              Connect
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
