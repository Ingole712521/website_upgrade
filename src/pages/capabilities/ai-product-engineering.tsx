import { AmbientBackground } from '@/components/layout/ambient-background'
import {
  AiProductHero,
  AiProductCapabilities,
  AiProductBuildNotes,
  AiProductCta,
} from '@/components/sections/ai-product-engineering'
import { PageEnter } from '@/components/ui/reveal'

export function AiProductEngineeringPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <AiProductHero />
        <AiProductCapabilities />
        <AiProductBuildNotes />
        <AiProductCta />
      </div>
    </PageEnter>
  )
}
