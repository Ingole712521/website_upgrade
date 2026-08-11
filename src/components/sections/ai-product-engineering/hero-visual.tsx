import { motion } from 'motion/react'
import { BrainCircuit, Code2, Layers, Sparkles, Workflow } from 'lucide-react'
import { motionEase } from '@/components/ui/reveal'

const nodes = [
  { icon: Layers, label: 'Full-stack', tone: 'primary' as const },
  { icon: Sparkles, label: 'AI prototype', tone: 'accent' as const },
  { icon: Workflow, label: 'Spec → app', tone: 'primary' as const },
  { icon: Code2, label: 'Code preview', tone: 'primary' as const },
]

export function AiProductHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: motionEase, delay: 0.2 }}
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-6 h-36 w-36 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur">
        <div className="flex items-center gap-2 rounded-t-xl bg-background/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0096e6]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            product / ai-engineering.app
          </span>
        </div>

        <div className="border-y border-border bg-background/40 px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <BrainCircuit className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-sm font-semibold text-foreground">
                Enterprise product workspace
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Spec → prototype → governed release, with AI in every loop.
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.2, ease: motionEase, delay: 0.5 }}
                  className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 p-1.5">
          {nodes.map((node, i) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: motionEase, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:border-primary/40"
              >
                <span
                  className={
                    node.tone === 'accent'
                      ? 'grid h-8 w-8 place-items-center rounded-md bg-[#e11d48]/10 text-[#e11d48]'
                      : 'grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary'
                  }
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-foreground/85">{node.label}</span>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center justify-between rounded-b-xl border-t border-border bg-background/40 px-4 py-3">
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Build pipeline active
          </span>
          <span className="font-mono text-xs text-muted-foreground">v2 · ai-first</span>
        </div>
      </div>
    </motion.div>
  )
}
