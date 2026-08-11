import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const cases = [
  {
    category: 'Healthcare Platform',
    title: 'Unified clinical data platform serving 4M+ patient records',
    image: '/images/case-healthcare.png',
    metrics: [
      { value: '4M+', label: 'Records unified' },
      { value: '99.99%', label: 'Uptime' },
    ],
  },
  {
    category: 'Legacy Modernization',
    title: 'Re-platformed a 15-year monolith into cloud-native services',
    image: '/images/case-legacy.png',
    metrics: [
      { value: '−62%', label: 'Infra cost' },
      { value: '8x', label: 'Deploy speed' },
    ],
  },
  {
    category: 'AI Automation',
    title: 'Agentic workflow automation across back-office operations',
    image: '/images/case-ai.png',
    metrics: [
      { value: '70%', label: 'Manual work cut' },
      { value: '24/7', label: 'Autonomous ops' },
    ],
  },
  {
    category: 'Knowledge Graph System',
    title: 'Enterprise knowledge graph powering contextual search',
    image: '/images/case-graph.png',
    metrics: [
      { value: '12M', label: 'Entities modeled' },
      { value: '3x', label: 'Search relevance' },
    ],
  },
]

export function CaseStudies() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Case Studies"
        title="Outcomes that move the enterprise"
        description="A selection of engagements where AI-first engineering delivered measurable business impact."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {cases.map((item) => (
          <motion.article
            key={item.title}
            variants={staggerItem}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-40px_rgba(244,63,94,0.45)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-white backdrop-blur">
                {item.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground text-balance">
                {item.title}
              </h3>
              <div className="mt-auto flex items-center gap-8 pt-6">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-heading text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
                <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
