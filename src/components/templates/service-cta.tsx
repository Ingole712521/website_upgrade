import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/section'
import {
  fadeUp,
  springSnappy,
  springSoft,
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
          <motion.div whileHover={{ y: -4 }} transition={springSoft}>
            <Link
              to={to}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/35"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.22),transparent_68%)] blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,174,240,0.2),transparent_68%)] blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-25" />

              <div className="relative flex flex-col items-center px-8 py-12 text-center sm:px-10 sm:py-14 lg:px-16">
                <motion.h2
                  variants={staggerItem}
                  className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.5rem] md:leading-[1.1]"
                >
                  {title}
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {description}
                </motion.p>
                <motion.span
                  variants={staggerItem}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springSnappy}
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_rgba(58,174,240,0.7)]"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
