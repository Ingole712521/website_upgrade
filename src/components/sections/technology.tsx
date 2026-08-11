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
        className="relative mt-10 flex justify-center overflow-hidden rounded-3xl border border-border bg-card/40 py-6 sm:mt-12 sm:py-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 50% 45%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%), radial-gradient(ellipse 40% 35% at 70% 30%, color-mix(in srgb, var(--primary) 10%, transparent), transparent 65%)',
          }}
        />
        <SolarSystem
          centerLogo="/Logo/zcon-mark.png"
          centerLogoAlt="zCon Solutions"
          className="relative z-10"
        />
      </motion.div>
    </Section>
  )
}
