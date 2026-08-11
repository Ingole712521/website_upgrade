import { useEffect, useId, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import {
  motionEase,
  springLayout,
  springSnappy,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

export type ExpandableNote = {
  id: string
  q: string
  a: string
  tag: string
}

export function ExpandableNotes({
  id,
  eyebrow,
  title,
  description,
  notes,
  className,
}: {
  id?: string
  eyebrow: string
  title: ReactNode
  description: string
  notes: ExpandableNote[]
  className?: string
}) {
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
    <Section id={id} className={className}>
      <SectionHeading align="center" eyebrow={eyebrow} title={title} description={description} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
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
              whileHover={{ y: -5, borderColor: 'color-mix(in srgb, var(--primary) 40%, transparent)' }}
              whileTap={{ scale: 0.985 }}
              transition={springLayout}
              className="group relative flex min-h-38 flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-left sm:min-h-42 sm:p-7"
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-12 h-36 w-36 rounded-full bg-primary/15 blur-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <div className="relative flex items-start justify-between gap-3">
                <motion.span
                  layoutId={isActive ? undefined : `${layoutNamespace}-tag-${note.id}`}
                  className="inline-flex rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {note.tag}
                </motion.span>
                <motion.span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                  whileHover={{ rotate: 90 }}
                  transition={springSnappy}
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
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
              transition={{ duration: 0.22 }}
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
                transition={springLayout}
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
                  <motion.button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.06, rotate: 90 }}
                    whileTap={{ scale: 0.94 }}
                    transition={springSnappy}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                    aria-label="Close note"
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>

                <motion.h3
                  layoutId={`${layoutNamespace}-title-${selected.id}`}
                  id={`${layoutNamespace}-dialog-title`}
                  className="relative mt-5 font-heading text-xl font-bold tracking-tight text-balance text-foreground sm:text-2xl"
                >
                  {selected.q}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.38, ease: motionEase, delay: 0.1 }}
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
