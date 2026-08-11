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
  Contact,
} from '@/components/sections'

export function HomePage() {
  return (
    <main className="relative">
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
      <Contact />
    </main>
  )
}
