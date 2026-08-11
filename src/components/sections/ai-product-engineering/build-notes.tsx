import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { motionEase, staggerContainer, staggerItem } from '@/components/ui/reveal'

type Note = {
  id: string
  q: string
  a: string
  tag: string
}

const notes: Note[] = [
  {
    id: 'when',
    tag: 'Timing',
    q: 'When should a product team use AI-assisted engineering?',
    a: 'AI-assisted engineering is useful when teams need to move from concept to working product faster while keeping architecture, review, testing, and release decisions under senior engineering control.',
  },
  {
    id: 'start',
    tag: 'Kickoff',
    q: 'Can zCon start before requirements are fully finalized?',
    a: 'Yes. zCon can help with product framing, architecture, prototypes, frontend and backend delivery, integrations, testing, deployment, and production readiness.',
  },
  {
    id: 'compress',
    tag: 'Acceleration',
    q: 'Where does AI compress the product build cycle?',
    a: 'AI helps convert requirements into build plans, generate repeatable code patterns, create UI previews, cross-check acceptance criteria, and speed up review and QA while senior engineers retain control.',
  },
  {
    id: 'stack',
    tag: 'Stack fit',
    q: 'Can this fit into our existing cloud and engineering stack?',
    a: 'Typical stacks include React, Next.js, .NET, Node.js, Python, Azure, SQL and NoSQL databases, vector databases, RAG pipelines, and API integrations.',
  },
]

export function AiProductBuildNotes() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const layoutNamespace = useId()
  const selected = notes.find((n) => n.id === selectedId) ?? null

  useEffect(() => {
    if (!selectedId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [selectedId])

  return (
    <Section id="build-notes" className="bg-muted/40 dark:bg-transparent">
      <SectionHeading
        align="center"
        eyebrow="Product Build Notes"
        title={<>Before starting AI product engineering</>}
        description="Clarify product scope, stack fit, delivery controls, and the first release path. Tap a question to expand."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {notes.map((note) => {
          const isActive = selectedId === note.id
          return (
            <motion.button
              key={note.id}
              type="button"
              variants={staggerItem}
              layoutId={isActive ? undefined : `${layoutNamespace}-card-${note.id}`}
              onClick={() => setSelectedId(note.id)}
              aria-expanded={isActive}
              style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? 'none' : 'auto' }}
              className="group relative flex min-h-38 flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/40 sm:min-h-42 sm:p-7"
              transition={{ type: 'spring', stiffness: 380, damping: 34 }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-12 h-36 w-36 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex items-start justify-between gap-3">
                <motion.span
                  layoutId={isActive ? undefined : `${layoutNamespace}-tag-${note.id}`}
                  className="inline-flex rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {note.tag}
                </motion.span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
              <motion.h3
                layoutId={isActive ? undefined : `${layoutNamespace}-title-${note.id}`}
                className="relative mt-4 font-heading text-base font-semibold tracking-tight text-balance text-foreground sm:text-lg"
              >
                {note.q}
              </motion.h3>
              <p className="relative mt-auto pt-4 text-xs text-muted-foreground opacity-70 transition-opacity group-hover:opacity-100">
                Click to read
              </p>
            </motion.button>
          )
        })}
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <>
            <motion.button
              type="button"
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />
            <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.article
                layoutId={`${layoutNamespace}-card-${selected.id}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${layoutNamespace}-dialog-title`}
                className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.65)] sm:p-8"
                transition={{ type: 'spring', stiffness: 380, damping: 34 }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -bottom-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <motion.span
                    layoutId={`${layoutNamespace}-tag-${selected.id}`}
                    className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary"
                  >
                    {selected.tag}
                  </motion.span>
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                    aria-label="Close note"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <motion.h3
                  layoutId={`${layoutNamespace}-title-${selected.id}`}
                  id={`${layoutNamespace}-dialog-title`}
                  className="relative mt-5 font-heading text-xl font-bold tracking-tight text-balance text-foreground sm:text-2xl"
                >
                  {selected.q}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, ease: motionEase, delay: 0.08 }}
                  className="relative mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {selected.a}
                </motion.p>
              </motion.article>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
