import { motion } from 'motion/react'
import { Award, Globe2, Users } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '130+', label: 'Global Clients' },
  { value: '100+', label: 'Engineers' },
  { value: 'ISO', label: '9001 & 27001 Certified', icon: Award },
  { value: 'Global', label: 'Delivery Network', icon: Globe2 },
]

export function Trust() {
  return (
    <section className="border-y border-border bg-card/40 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Two decades engineering enterprise-grade systems worldwide
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon ?? Users
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <span className="mb-1 grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
