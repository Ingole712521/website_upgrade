import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { CtaButton } from '@/components/ui/section'
import { HeroVisual } from '@/components/sections/hero-visual'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 md:pb-24"
    >
      {/* Full-bleed visual plane */}
      <HeroVisual />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="font-heading text-[clamp(3.5rem,14vw,9.5rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-foreground"
        >
          zCon
        </motion.p>

        <div className="mt-8 grid max-w-3xl gap-6 border-t border-foreground/20 pt-8 md:mt-10 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:pt-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
              className="font-heading text-2xl font-bold leading-[1.1] tracking-tight text-balance sm:text-3xl md:text-4xl"
            >
              Engineering Tomorrow&apos;s Enterprise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
              className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              AI-powered software. Human-led execution.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.22 }}
            className="flex flex-col justify-end gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <CtaButton href="#services" variant="primary">
                Explore Capabilities
                <ArrowRight className="h-3.5 w-3.5" />
              </CtaButton>
              <CtaButton href="/contact" variant="outline">
                Book Consultation
              </CtaButton>
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Est. 2006 · 130+ enterprises · Americas · EMEA · APAC
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
