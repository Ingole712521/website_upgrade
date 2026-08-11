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

export function HomePage() {
  return (
    <main className="relative isolate">
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
    </main>
  )
}
