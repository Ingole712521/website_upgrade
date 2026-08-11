import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { fadeUp, staggerContainer, staggerItem } from '@/components/ui/reveal'

export function AiProductCta() {
  return (
    <Section id="cta">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeUp}>
          <Link
            to="/contact"
            className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/35"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.2),transparent_68%)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,174,240,0.18),transparent_68%)] blur-2xl"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-25" />

            <div className="relative flex flex-col items-center px-8 py-12 text-center sm:px-10 sm:py-14 lg:px-16">
              <motion.h2
                variants={staggerItem}
                className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.5rem] md:leading-[1.1]"
              >
                Ready to build your next flagship product?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Talk to our Chief Architects to map out your product strategy.
              </motion.p>
              <motion.span
                variants={staggerItem}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_rgba(58,174,240,0.7)]"
              >
                Schedule Architecture Review
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  )
}
