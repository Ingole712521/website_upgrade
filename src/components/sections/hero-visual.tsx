import { motion } from 'motion/react'
import { Boxes, Cpu, Database, GitBranch, ShieldCheck, Workflow } from 'lucide-react'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

const nodes = [
  { icon: Cpu, label: 'AI Reasoning', tone: 'primary' },
  { icon: Workflow, label: 'Agentic Pipeline', tone: 'primary' },
  { icon: Database, label: 'Knowledge Graph', tone: 'accent' },
  { icon: Boxes, label: 'Microservices', tone: 'primary' },
  { icon: ShieldCheck, label: 'Release Governance', tone: 'accent' },
  { icon: GitBranch, label: 'CI / CD', tone: 'primary' },
]

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur">
        <div className="flex items-center gap-2 rounded-t-xl bg-background/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#0096e6]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">zcon-platform / delivery.ts</span>
        </div>

        <div className="border-y border-border bg-background/40 px-4 py-3 font-mono text-[11px] leading-relaxed sm:text-xs">
          <p className="text-muted-foreground">
            <span className="text-[#e11d48]">const</span>{' '}
            <span className="text-foreground">system</span> ={' '}
            <span className="text-primary">zcon.engineer</span>({'{'}
          </p>
          <p className="pl-4 text-muted-foreground">
            mode: <span className="text-primary">&apos;ai-first&apos;</span>, ownership:{' '}
            <span className="text-primary">&apos;100%&apos;</span>,
          </p>
          <p className="pl-4 text-muted-foreground">
            governance: <span className="text-primary">true</span>
          </p>
          <p className="text-muted-foreground">{'})'}</p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 p-1.5">
          {nodes.map((node, i) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.4 + i * 0.08 }}
                className="group flex flex-col gap-2 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:border-primary/40"
              >
                <span
                  className={`grid h-8 w-8 place-items-center rounded-md ${
                    node.tone === 'accent'
                      ? 'bg-[#e11d48]/10 text-[#e11d48]'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-medium leading-tight text-foreground/80">
                  {node.label}
                </span>
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
            Production ready
          </span>
          <span className="font-mono text-xs text-muted-foreground">uptime 99.99%</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur sm:flex"
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
          <Cpu className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">100+ Engineers</p>
          <p className="text-xs text-muted-foreground">AI-native delivery pods</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
