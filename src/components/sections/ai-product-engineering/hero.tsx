import { Code2, Layers, Sparkles, Workflow } from 'lucide-react'
import { ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'

export function AiProductHero() {
  return (
    <ServiceHero
      eyebrow="Services"
      title="AI Product"
      titleAccent="Engineering"
      description="We architect, build, and scale next-generation enterprise applications. By integrating foundational AI models directly into the product lifecycle, we accelerate feature delivery and ensure your software is intelligent from day one."
      primaryCta={{ label: 'Explore capabilities', href: '#capabilities' }}
      secondaryCta={{ label: 'Schedule Architecture Review', href: '/contact' }}
      visual={
        <ServiceHeroVisual
          title="Enterprise product workspace"
          subtitle="Spec → prototype → governed release, with AI in every loop."
          nodes={[
            { icon: Layers, label: 'Full-stack' },
            { icon: Sparkles, label: 'AI prototype', tone: 'accent' },
            { icon: Workflow, label: 'Spec → app' },
            { icon: Code2, label: 'Code preview' },
          ]}
          footerLeft="Build pipeline active"
          footerRight="v2 · ai-first"
        />
      }
    />
  )
}
