import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import {
  techStackRowOne,
  techStackRowTwo,
  type TechItem,
} from '@/data/tech-stack'

gsap.registerPlugin(ScrollTrigger)

function TechLogo({ item }: { item: TechItem }) {
  if (item.logo) {
    return (
      <img
        src={item.logo}
        alt=""
        aria-hidden
        className="h-5 w-5 shrink-0 object-contain opacity-90 dark:opacity-85"
        loading="lazy"
        decoding="async"
      />
    )
  }

  if (item.slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${item.slug}/94a3b8`}
        alt=""
        aria-hidden
        className="h-5 w-5 shrink-0 opacity-90 dark:opacity-80"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <span
      aria-hidden
      className="grid h-5 w-5 shrink-0 place-items-center rounded-md border border-border bg-muted text-[0.55rem] font-bold uppercase tracking-tight text-muted-foreground"
    >
      {item.name.slice(0, 2)}
    </span>
  )
}

function MarqueeHalf({
  items,
  className,
  'aria-hidden': ariaHidden,
}: {
  items: TechItem[]
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}) {
  // Repeat once so each half is wide enough on large screens
  const sequence = [...items, ...items]

  return (
    <div
      className={cn('flex items-center gap-10 sm:gap-14', className)}
      aria-hidden={ariaHidden}
    >
      {sequence.map((item, index) => (
        <div key={`${item.name}-${index}`} className="flex shrink-0 items-center gap-2.5">
          <TechLogo item={item} />
          <span className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-foreground/75 sm:text-xl">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackLeftRef = useRef<HTMLDivElement>(null)
  const trackRightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const leftTrack = trackLeftRef.current
    const rightTrack = trackRightRef.current
    if (!section || !leftTrack || !rightTrack) return

    const baseDuration = 50
    let settle: gsap.core.Tween | undefined

    const ctx = gsap.context(() => {
      const leftTween = gsap.to(leftTrack, {
        xPercent: -50,
        duration: baseDuration,
        ease: 'none',
        repeat: -1,
      })

      const rightTween = gsap.fromTo(
        rightTrack,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: baseDuration * 1.08,
          ease: 'none',
          repeat: -1,
        },
      )

      const tweens = [leftTween, rightTween]

      const boostFromVelocity = (velocity: number) => {
        const boost = gsap.utils.clamp(1, 4.5, 1 + Math.abs(velocity) / 900)
        settle?.kill()
        gsap.to(tweens, {
          timeScale: boost,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: true,
        })
        settle = gsap.to(tweens, {
          timeScale: 1,
          duration: 1.15,
          ease: 'power3.out',
          delay: 0.1,
          overwrite: 'auto',
        })
      }

      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          boostFromVelocity(self.getVelocity())
        },
      })

      const onScrollGesture = () => {
        const rect = section.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        if (!inView) return
        boostFromVelocity(1400)
      }

      window.addEventListener('wheel', onScrollGesture, { passive: true })
      window.addEventListener('touchmove', onScrollGesture, { passive: true })

      return () => {
        window.removeEventListener('wheel', onScrollGesture)
        window.removeEventListener('touchmove', onScrollGesture)
        settle?.kill()
      }
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative overflow-hidden border-y border-border bg-background px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground sm:mb-12 sm:text-xs">
          The modern engineering stack we build on
        </p>
      </div>

      <div className="relative space-y-6 sm:space-y-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-28"
        />

        <div className="overflow-hidden">
          <div ref={trackLeftRef} className="flex w-max will-change-transform">
            <MarqueeHalf items={techStackRowOne} className="pr-10 sm:pr-14" />
            <MarqueeHalf items={techStackRowOne} className="pr-10 sm:pr-14" aria-hidden />
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={trackRightRef} className="flex w-max will-change-transform">
            <MarqueeHalf items={techStackRowTwo} className="pr-10 sm:pr-14" />
            <MarqueeHalf items={techStackRowTwo} className="pr-10 sm:pr-14" aria-hidden />
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl px-4 text-center text-[0.7rem] leading-relaxed text-muted-foreground/80 sm:mt-12 sm:text-xs">
        Technology names are shown only to identify tools and platforms we work with for customer
        delivery. All trademarks belong to their respective owners.
      </p>
    </section>
  )
}
