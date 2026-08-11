import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CtaButton } from '@/components/ui/section'
import { HeroVisual } from '@/components/sections/hero-visual'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36 md:pb-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start">
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-First Enterprise Engineering since 2006
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
            className="font-heading text-4xl font-black leading-[1.03] tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Engineering Tomorrow&apos;s Enterprise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
            className="mt-5 font-heading text-xl font-semibold text-foreground/90 sm:text-2xl"
          >
            AI-Powered Software.{' '}
            <span className="bg-gradient-to-r from-primary to-[#e11d48] bg-clip-text text-transparent">
              Human-Led Execution.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            zCon transforms complex ideas into production-ready systems through AI-first engineering,
            enterprise software development, and dedicated innovation teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <CtaButton href="#services" variant="primary">
              Explore Capabilities
              <ArrowRight className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="#contact" variant="outline">
              Book Consultation
            </CtaButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Trusted by 130+ enterprises across Americas · EMEA · APAC
          </motion.p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
