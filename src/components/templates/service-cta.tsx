import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/section'
import {
  fadeUp,
  springSnappy,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

export function ServiceCta({
  title,
  description,
  cta = 'Start a conversation',
  to = '/contact',
}: {
  title: string
  description: string
  cta?: string
  to?: string
}) {
  return (
    <Section id="cta">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp}>
          <Link
            to={to}
            className="group relative block overflow-hidden border border-foreground/15 bg-foreground text-background"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 stripe-bg opacity-30" />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-primary sm:w-1.5"
            />

            <div className="relative flex flex-col items-start px-8 py-12 sm:px-10 sm:py-14 lg:px-16">
              <motion.h2
                variants={staggerItem}
                className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.5rem] md:leading-[1.1]"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="mt-4 max-w-xl text-base leading-relaxed text-background/60 md:text-lg"
              >
                {description}
              </motion.p>
              <motion.span
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springSnappy}
                className="mt-8 inline-flex h-11 items-center gap-2 border border-background/25 bg-primary px-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors group-hover:bg-background group-hover:text-foreground"
              >
                {cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  )
}
