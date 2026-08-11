import { motion } from 'motion/react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import {
  AiProductHero,
  AiProductCapabilities,
  AiProductBuildNotes,
  AiProductCta,
} from '@/components/sections/ai-product-engineering'
import { motionEase } from '@/components/ui/reveal'

export function AiProductEngineeringPage() {
  return (
    <motion.main
      className="relative isolate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: motionEase }}
    >
      <AmbientBackground />
      <div className="relative z-10">
        <AiProductHero />
        <AiProductCapabilities />
        <AiProductBuildNotes />
        <AiProductCta />
      </div>
    </motion.main>
  )
}
