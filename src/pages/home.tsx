import {
  Hero,
  Trust,
  Services,
  Industries,
  Technology,
  Process,
  MicroGcc,
  WhyZcon,
  CaseStudies,
  Leadership,
  Careers,
  Contact,
} from '@/components/sections'

export function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Trust />
      <Services />
      <Industries />
      <Technology />
      <Process />
      <MicroGcc />
      <WhyZcon />
      <CaseStudies />
      <Leadership />
      <Careers />
      <Contact />
    </main>
  )
}
