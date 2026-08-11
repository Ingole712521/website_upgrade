import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { CtaButton, Eyebrow } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'
import { AiProductHeroVisual } from './hero-visual'

export function AiProductHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 12% 8%, rgba(58,174,240,0.14), transparent 60%), radial-gradient(ellipse 50% 35% at 90% 18%, rgba(244,63,94,0.1), transparent 55%)',
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={staggerItem}>
            <Eyebrow>Services</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-6 font-heading text-4xl font-black leading-[1.03] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            AI Product{' '}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Engineering
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We architect, build, and scale next-generation enterprise applications. By integrating
            foundational AI models directly into the product lifecycle, we accelerate feature delivery
            and ensure your software is intelligent from day one.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap items-center gap-3">
            <CtaButton href="#capabilities" variant="primary">
              Explore capabilities
              <ArrowRight className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="/contact" variant="outline">
              Schedule Architecture Review
            </CtaButton>
          </motion.div>
        </motion.div>

        <AiProductHeroVisual />
      </div>
    </section>
  )
}
