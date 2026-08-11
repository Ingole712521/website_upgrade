import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Mail, MessageSquareText, Sparkles } from 'lucide-react'
import { Section, Eyebrow } from '@/components/ui/section'

gsap.registerPlugin(ScrollTrigger)

export function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    const glow = glowRef.current
    const content = contentRef.current
    const orb = orbRef.current
    if (!section || !card || !content) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      gsap.set(card, { y: 48, opacity: 0, scale: 0.96 })
      gsap.set(content.children, { y: 20, opacity: 0 })
      if (orb) gsap.set(orb, { scale: 0.7, opacity: 0 })

      if (reduceMotion) {
        gsap.set([card, ...Array.from(content.children), orb], { clearProps: 'all', opacity: 1, y: 0, scale: 1 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      })

      tl.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
      })
        .to(
          content.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.45',
        )
        .to(
          orb,
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.5',
        )

      if (glow) {
        gsap.to(glow, {
          xPercent: 18,
          yPercent: -10,
          duration: 6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }

      if (orb) {
        gsap.to(orb, {
          y: -12,
          duration: 3.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(card, {
          rotateX: y * -4,
          rotateY: x * 5,
          transformPerspective: 900,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const onLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)

      return () => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="contact" ref={sectionRef}>
      <Link
        ref={cardRef}
        to="/contact"
        className="group relative block overflow-hidden rounded-3xl border border-border bg-card will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.28),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,174,240,0.22),transparent_68%)] blur-2xl"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-25" />

        <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-12">
          <div ref={contentRef} className="flex flex-col items-start">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
              Ready to engineer what&apos;s next?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Tell us about your product, modernization goal, or Micro GCC need. We&apos;ll map a
              concrete AI-first delivery plan with you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" />
                hello@zcon.solutions
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Response within 1 business day
              </span>
            </div>

            <span className="mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_rgba(58,174,240,0.7)] transition-transform duration-300 group-hover:translate-x-1">
              Go to Contact Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>

          <div
            ref={orbRef}
            className="relative mx-auto flex h-44 w-full max-w-sm items-center justify-center lg:h-56"
          >
            <div className="absolute inset-6 rounded-[2rem] border border-border/80 bg-background/50 backdrop-blur" />
            <div className="absolute inset-0 rounded-[2rem] border border-dashed border-primary/25" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/25">
                <MessageSquareText className="h-7 w-7" />
              </span>
              <p className="font-heading text-lg font-semibold text-foreground">Contact form</p>
              <p className="max-w-[14rem] text-sm text-muted-foreground">
                Open the dedicated page to share project details securely.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Section>
  )
}
