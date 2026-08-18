import { motion } from 'motion/react'
import { Section, SectionHeading } from '@/components/ui/section'
import { SolarSystem } from '@/components/ui/solar-system'
import { fadeUp } from '@/components/ui/reveal'

export function Technology() {
  return (
    <Section id="technology">
      <SectionHeading
        eyebrow="Technology Ecosystem"
        title="A modern, AI-native engineering stack"
        description="We build on proven, enterprise-grade technologies — pairing battle-tested infrastructure with the latest in applied AI."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mt-10 flex justify-center overflow-hidden border border-foreground/15 bg-card/60 py-6 sm:mt-12 sm:py-10"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <SolarSystem
          centerLogo="/Logo/zcon-mark.png"
          centerLogoAlt="zCon Solutions"
          className="relative z-10"
        />
      </motion.div>
    </Section>
  )
}
