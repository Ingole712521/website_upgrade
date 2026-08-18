import { motion } from 'motion/react'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const stats = [
  { value: '20+', label: 'Years' },
  { value: '130+', label: 'Clients' },
  { value: '100+', label: 'Engineers' },
  { value: 'ISO', label: '9001 · 27001' },
  { value: '3', label: 'Continents' },
]

export function Trust() {
  return (
    <section className="border-y border-foreground/15 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Two decades engineering enterprise-grade systems worldwide
        </p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/15 bg-foreground/15 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col gap-1 bg-background px-5 py-6"
            >
              <span className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
