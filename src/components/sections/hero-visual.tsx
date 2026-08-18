import { motion } from 'motion/react'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

const specs = [
  { code: '01', label: 'AI Reasoning' },
  { code: '02', label: 'Agentic Pipeline' },
  { code: '03', label: 'Knowledge Graph' },
  { code: '04', label: 'Microservices' },
  { code: '05', label: 'Governance' },
  { code: '06', label: 'CI / CD' },
]

export function HeroVisual() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: easeOut }}
      className="pointer-events-none absolute inset-0 -z-0"
    >
      {/* Dominant edge-to-edge plane */}
      <div className="absolute inset-0 bg-foreground/[0.03] dark:bg-foreground/[0.04]" />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Large archival type watermark */}
      <div className="absolute inset-x-0 top-[18%] flex justify-center overflow-hidden select-none">
        <motion.span
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.15 }}
          className="font-heading text-[clamp(6rem,28vw,22rem)] font-extrabold leading-none tracking-[-0.06em] text-foreground/[0.04] dark:text-foreground/[0.06]"
        >
          SYS
        </motion.span>
      </div>

      {/* Orange accent bar — architectural signal */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
        className="absolute right-0 top-0 h-full w-1 origin-top bg-primary sm:w-1.5"
      />

      {/* Spec index strip along the right (desktop) */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.code}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: easeOut, delay: 0.45 + i * 0.06 }}
            className="flex items-baseline gap-3 text-right"
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              {spec.label}
            </span>
            <span className="font-mono text-[0.6rem] text-primary">{spec.code}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  )
}
