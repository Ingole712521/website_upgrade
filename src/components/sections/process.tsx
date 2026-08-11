import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Compass, PenTool, Hammer, ShieldCheck, Rocket, TrendingUp, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/section'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const steps: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Discover', desc: 'Align on outcomes, map the domain, and de-risk with rapid discovery.', icon: Compass },
  { title: 'Design', desc: 'Architect systems and experiences with AI-assisted design.', icon: PenTool },
  { title: 'Build', desc: 'Engineer production-grade software in AI-native delivery pods.', icon: Hammer },
  { title: 'Validate', desc: 'Test, evaluate, and harden with automated governance gates.', icon: ShieldCheck },
  { title: 'Deploy', desc: 'Ship with zero-downtime pipelines and release controls.', icon: Rocket },
  { title: 'Scale', desc: 'Optimize, observe, and grow with continuous improvement.', icon: TrendingUp },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const mobileFillRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    const fill = fillRef.current
    const head = headRef.current
    const mobileFill = mobileFillRef.current
    if (!section || !stage || !fill || !head) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const icons = iconRefs.current.filter(Boolean) as HTMLSpanElement[]
    const cards = stepRefs.current.filter(Boolean) as HTMLDivElement[]

    const ctx = gsap.context(() => {
      gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(head, { left: '0%', xPercent: -50, opacity: 0, scale: 0.6 })
      gsap.set(cards, { opacity: 0.28, y: 24 })
      gsap.set(icons, {
        borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
        boxShadow: 'none',
        color: 'var(--muted-foreground)',
        backgroundColor: 'var(--background)',
      })
      if (mobileFill) gsap.set(mobileFill, { scaleY: 0, transformOrigin: 'top center' })

      const activateStep = (index: number, force = false) => {
        const icon = icons[index]
        const card = cards[index]
        if (!icon || !card) return
        if (!force && card.dataset.active === 'true') return
        card.dataset.active = 'true'

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        })
        gsap.to(icon, {
          borderColor: 'color-mix(in srgb, var(--primary) 75%, transparent)',
          color: 'var(--primary)',
          backgroundColor: 'color-mix(in srgb, var(--primary) 10%, var(--background))',
          boxShadow:
            '0 0 0 4px color-mix(in srgb, var(--primary) 16%, transparent), 0 0 28px color-mix(in srgb, var(--primary) 28%, transparent)',
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto',
        })
        gsap.fromTo(
          icon,
          { scale: 1 },
          { scale: 1.12, duration: 0.22, yoyo: true, repeat: 1, ease: 'power1.out' },
        )
      }

      const resetSteps = () => {
        cards.forEach((card) => {
          card.dataset.active = 'false'
        })
        gsap.to(cards, { opacity: 0.28, y: 24, duration: 0.35, overwrite: true })
        gsap.to(icons, {
          borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
          boxShadow: 'none',
          color: 'var(--muted-foreground)',
          backgroundColor: 'var(--background)',
          scale: 1,
          duration: 0.35,
          overwrite: true,
        })
      }

      if (reduceMotion) {
        gsap.set(fill, { scaleX: 1 })
        gsap.set(head, { left: '100%', opacity: 1, scale: 1 })
        gsap.set(cards, { opacity: 1, y: 0 })
        icons.forEach((_, i) => activateStep(i, true))
        if (mobileFill) gsap.set(mobileFill, { scaleY: 1 })
        return
      }

      let lastActive = -1

      const syncProgress = (p: number) => {
        gsap.set(fill, { scaleX: p })
        gsap.set(head, { left: `${p * 100}%` })
        if (mobileFill) gsap.set(mobileFill, { scaleY: p })

        // Activate each step as the traveler reaches it (0 → 5)
        const active = Math.min(
          steps.length - 1,
          Math.max(-1, Math.floor(p * (steps.length - 0.001))),
        )

        if (active > lastActive) {
          for (let i = lastActive + 1; i <= active; i++) activateStep(i)
          lastActive = active
        } else if (active < lastActive) {
          // scrolling back: deactivate later steps
          for (let i = steps.length - 1; i > active; i--) {
            const icon = icons[i]
            const card = cards[i]
            if (!card || card.dataset.active !== 'true') continue
            card.dataset.active = 'false'
            gsap.to(card, { opacity: 0.28, y: 24, duration: 0.3, overwrite: 'auto' })
            gsap.to(icon, {
              borderColor: 'color-mix(in srgb, var(--foreground) 10%, transparent)',
              boxShadow: 'none',
              color: 'var(--muted-foreground)',
              backgroundColor: 'var(--background)',
              scale: 1,
              duration: 0.3,
              overwrite: 'auto',
            })
          }
          lastActive = active
        }
      }

      ScrollTrigger.create({
        trigger: stage,
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: 0.8,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(head, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' })
        },
        onEnterBack: () => {
          gsap.to(head, { opacity: 1, scale: 1, duration: 0.25 })
        },
        onUpdate: (self) => {
          syncProgress(self.progress)
        },
        onLeaveBack: () => {
          lastActive = -1
          resetSteps()
          gsap.to(head, { opacity: 0, scale: 0.6, duration: 0.2 })
          gsap.set(fill, { scaleX: 0 })
          gsap.set(head, { left: '0%' })
          if (mobileFill) gsap.set(mobileFill, { scaleY: 0 })
        },
      })

      // Ensure measurements refresh after fonts/layout settle
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="process" className="bg-card/30" ref={sectionRef}>
      <SectionHeading
        eyebrow="Delivery Process"
        title="A disciplined path from idea to scale"
        description="Every engagement follows a proven delivery journey — engineered for speed without compromising governance."
      />

      <div ref={stageRef} className="relative mt-14">
        {/* Desktop: line draws left → right through the steps */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-6 right-[calc((100%-3rem)/12)] left-6 hidden h-px lg:block"
        >
          <div className="absolute inset-0 bg-border/70" />
          <div
            ref={fillRef}
            className="absolute inset-y-0 left-0 w-full origin-left bg-linear-to-r from-primary via-primary to-accent will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
          <div
            ref={headRef}
            className="absolute top-1/2 z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-accent opacity-0 shadow-[0_0_0_4px_rgba(244,63,94,0.2),0_0_22px_rgba(244,63,94,0.85)] will-change-transform"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
          </div>
        </div>

        {/* Mobile: vertical line */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-2 bottom-2 left-[1.4rem] w-px overflow-hidden lg:hidden"
        >
          <div className="absolute inset-0 bg-border/70" />
          <div
            ref={mobileFillRef}
            className="absolute inset-x-0 top-0 h-full origin-top bg-linear-to-b from-primary to-accent will-change-transform"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el
                }}
                data-active="false"
                className="relative flex flex-col pl-12 lg:items-start lg:pl-0"
              >
                <div className="mb-4 flex items-center gap-3 lg:block">
                  <span
                    ref={(el) => {
                      iconRefs.current[i] = el
                    }}
                    className={cn(
                      'relative z-10 grid h-12 w-12 place-items-center rounded-xl border bg-background shadow-sm',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 font-heading text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
