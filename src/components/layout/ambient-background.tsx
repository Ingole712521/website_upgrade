import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function AmbientBackground() {
  const gridRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const tweens: gsap.core.Tween[] = []

    if (gridRef.current) {
      tweens.push(
        gsap.to(gridRef.current, {
          backgroundPosition: '48px 48px',
          duration: 40,
          ease: 'none',
          repeat: -1,
        }),
      )
    }

    if (lineRef.current) {
      tweens.push(
        gsap.fromTo(
          lineRef.current,
          { xPercent: -20, opacity: 0.15 },
          {
            xPercent: 120,
            opacity: 0.35,
            duration: 14,
            ease: 'none',
            repeat: -1,
          },
        ),
      )
    }

    return () => {
      tweens.forEach((t) => t.kill())
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--foreground) 9%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 9%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 30%, black 15%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 30%, black 15%, transparent 78%)',
        }}
      />

      {/* Diagonal hatching — archival blueprint feel */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            color-mix(in srgb, var(--foreground) 8%, transparent) 10px,
            color-mix(in srgb, var(--foreground) 8%, transparent) 11px
          )`,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
        }}
      />

      {/* Scanning horizontal rule */}
      <div
        ref={lineRef}
        className="absolute top-[28%] left-0 h-px w-1/3 bg-primary/50"
      />

      {/* Corner registration marks */}
      <div className="absolute left-4 top-20 h-4 w-4 border-l border-t border-foreground/20 sm:left-8 sm:top-24" />
      <div className="absolute right-4 top-20 h-4 w-4 border-r border-t border-foreground/20 sm:right-8 sm:top-24" />
      <div className="absolute bottom-8 left-4 h-4 w-4 border-b border-l border-foreground/20 sm:left-8" />
      <div className="absolute bottom-8 right-4 h-4 w-4 border-b border-r border-foreground/20 sm:right-8" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  )
}
