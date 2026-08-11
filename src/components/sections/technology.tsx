import { motion } from 'motion/react'
import { Boxes, Brain, Cloud, Database, Layers, Server, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const groups: { title: string; icon: LucideIcon; accent?: boolean; items: string[] }[] = [
  { title: 'Frontend', icon: Layers, items: ['React', 'Next.js', 'TypeScript'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Java', '.NET'] },
  { title: 'Cloud', icon: Cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
  {
    title: 'AI',
    icon: Brain,
    accent: true,
    items: ['OpenAI', 'Claude', 'Codex', 'Ollama', 'vLLM', 'Agentic AI'],
  },
  { title: 'Data', icon: Database, items: ['Neo4j', 'PostgreSQL', 'MySQL'] },
]

export function Technology() {
  return (
    <Section id="technology">
      <SectionHeading
        eyebrow="Technology Ecosystem"
        title="A modern, AI-native engineering stack"
        description="We build on proven, enterprise-grade technologies — pairing battle-tested infrastructure with the latest in applied AI."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {groups.map((group) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              variants={staggerItem}
              className={`relative flex flex-col rounded-2xl border border-border bg-card p-6 ${
                group.accent ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    group.accent ? 'bg-[#e11d48]/10 text-[#e11d48]' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}

        <motion.div
          variants={staggerItem}
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6"
        >
          <Boxes className="h-6 w-6 text-primary" />
          <div className="mt-6">
            <p className="font-heading text-lg font-semibold text-foreground">Reusable AI Skills</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A growing library of governed, composable AI capabilities deployed across engagements.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
