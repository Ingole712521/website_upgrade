import { motion } from 'motion/react'
import { Database, GitBranch, Network, Search, ShieldCheck, Workflow } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ExpandableNotes } from '@/components/ui/expandable-notes'
import { ServiceCta } from '@/components/templates/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'
import { Eyebrow, Section } from '@/components/ui/section'
import { fadeUp, PageEnter, Reveal, springSoft, staggerContainer, staggerItem, viewportOnce } from '@/components/ui/reveal'

const notes = [
  {
    id: 'vs-rag',
    tag: 'Architecture',
    q: 'When is a knowledge graph better than a simple RAG pipeline?',
    a: 'Knowledge graphs add structured relationships and verified business rules, helping AI systems answer with more control, consistency, and traceability.',
  },
  {
    id: 'grounded',
    tag: 'Trust',
    q: 'How do you keep AI answers grounded?',
    a: 'Responses can be grounded in verified graph relationships, constraints, and source material instead of relying only on probabilistic language generation.',
  },
  {
    id: 'sources',
    tag: 'Data',
    q: 'What enterprise data can be modeled first?',
    a: 'Common sources include product catalogs, ERP rules, policies, documents, workflows, customer records, support knowledge, compliance logic, and operational data.',
  },
  {
    id: 'hybrid',
    tag: 'Retrieval',
    q: 'Can graph and vector search work together?',
    a: 'Yes. zCon combines knowledge graphs, vector search, RAG pipelines, and citations so enterprise AI systems can retrieve and reason over trusted data.',
  },
]

export function KnowledgeGraphsPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Advanced Data"
          title="Deterministic AI via"
          titleAccent="Knowledge Graphs"
          description="We eliminate AI hallucinations by mapping complex business logic into deterministic graph databases, ensuring mathematically verifiable outputs for enterprise applications."
          primaryCta={{ label: 'See how it works', href: '#bridge' }}
          secondaryCta={{ label: 'Start a conversation', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Graph-grounded intelligence"
              subtitle="Neo4j + vectors + citations for answers you can trust."
              nodes={[
                { icon: Network, label: 'Graph model' },
                { icon: Database, label: 'Verified data', tone: 'accent' },
                { icon: Search, label: 'Hybrid retrieve' },
                { icon: ShieldCheck, label: 'Traceable' },
              ]}
              footerLeft="Grounded responses"
              footerRight="kg · neo4j"
            />
          }
        />

        <Section id="bridge">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <Eyebrow>Architecture</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Bridging LLMs and ground truth
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Probabilistic LLMs are powerful — and risky — in regulated environments. zCon builds an
                  architectural bridge with Neo4j and vector databases so answers follow verified
                  relationships, constraints, and source citations.
                </p>
              </Reveal>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                { icon: Network, title: 'Deterministic graphs', desc: 'Model entities, rules, and relationships explicitly.' },
                { icon: Database, title: 'Trusted sources', desc: 'Connect ERP, policy, and operational systems of record.' },
                { icon: Workflow, title: 'Hybrid retrieval', desc: 'Combine graph traversal with vector RAG pipelines.' },
                { icon: GitBranch, title: 'Answer lineage', desc: 'Return citations and decision paths with every response.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    transition={springSoft}
                    className="border border-foreground/15 bg-card p-5 hover:border-primary/35"
                  >
                    <span className="grid h-10 w-10 place-items-center border border-foreground/15 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </Section>

        <ExpandableNotes
          id="ai-data-notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="AI Data Notes"
          title={<>Before building grounded AI systems</>}
          description="Clarify source data, graph relationships, retrieval design, and answer traceability. Tap a question to expand."
          notes={notes}
        />

        <Section id="use-case">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -3 }}
            transition={springSoft}
            className="overflow-hidden border border-foreground/15 bg-card"
          >
            <div className="border-b border-foreground/15 px-6 py-6 sm:px-8">
              <Eyebrow>Use Case</Eyebrow>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                SAP Implementation AI Advisor
              </h2>
            </div>
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-b border-foreground/15 p-6 sm:p-8 lg:border-r lg:border-b-0">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">The challenge</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Consultants struggle with thousands of pages of SAP documentation — slowing onboarding
                  and increasing configuration error rates across complex implementations.
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">The zCon solution</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  We ingest documentation into a Neo4j knowledge graph and deliver an AI advisor that
                  answers in natural language with rule-compliant steps and citations — grounded in
                  verified relationships, not guesswork.
                </p>
              </div>
            </div>
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how grounded, graph-backed AI compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
