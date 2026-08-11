import { motion } from 'motion/react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import {
  Hero,
  Trust,
  TechStack,
  Services,
  Industries,
  Technology,
  Process,
  MicroGcc,
  WhyZcon,
  CaseStudies,
  Careers,
  ContactCta,
} from '@/components/sections'
import { motionEase } from '@/components/ui/reveal'

export function HomePage() {
  return (
    <motion.main
      className="relative isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: motionEase }}
    >
      <AmbientBackground />
      <div className="relative z-10">
        <Hero />
        <Trust />
        <TechStack />
        <Services />
        <Industries />
        <Technology />
        <Process />
        <MicroGcc />
        <WhyZcon />
        <CaseStudies />
        <Careers />
        <ContactCta />
      </div>
    </motion.main>
  )
}
