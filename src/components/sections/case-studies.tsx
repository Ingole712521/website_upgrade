import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
        className="mt-12 grid grid-cols-1 gap-0 border border-foreground/15 md:grid-cols-2"
      >
        {cases.map((item, i) => (
          <motion.article
            key={item.title}
            variants={staggerItem}
            className={`group relative flex flex-col border-foreground/15 ${
              i % 2 === 0 ? 'md:border-r' : ''
            } ${i < 2 ? 'border-b' : ''}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-foreground/15">
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                className="h-full w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">
                {item.category}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-foreground text-balance">
                {item.title}
              </h3>
              <div className="mt-auto flex items-end gap-8 pt-6">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-heading text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
                <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
        >
          All case studies
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  )
}
