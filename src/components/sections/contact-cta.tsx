import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Section, Eyebrow } from '@/components/ui/section'
import { fadeUp, staggerContainer, staggerItem } from '@/components/ui/reveal'

export function ContactCta() {
  return (
    <Section id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeUp}>
          <Link
            to="/contact"
            className="group relative block overflow-hidden border border-foreground/15 bg-foreground text-background transition-colors"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 stripe-bg opacity-30" />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-primary sm:w-1.5"
            />

            <div className="relative grid items-end gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
              <motion.div variants={staggerContainer} className="flex flex-col items-start">
                <motion.div variants={staggerItem}>
                  <Eyebrow className="text-background/50 [&_span]:bg-primary">Contact</Eyebrow>
                </motion.div>
                <motion.h2
                  variants={staggerItem}
                  className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.08]"
                >
                  Ready to engineer what&apos;s next?
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="mt-4 max-w-xl text-base leading-relaxed text-background/60 md:text-lg"
                >
                  Tell us about your product, modernization goal, or Micro GCC need. We&apos;ll map a
                  concrete AI-first delivery plan with you.
                </motion.p>

                <motion.div
                  variants={staggerItem}
                  className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-background/55"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  hello@zcon.solutions
                </motion.div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex flex-col items-start lg:items-end">
                <span className="inline-flex h-12 items-center gap-2 border border-background/25 bg-primary px-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors group-hover:bg-background group-hover:text-foreground">
                  Go to Contact
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-background/40">
                  Response within 1 business day
                </p>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  )
}
