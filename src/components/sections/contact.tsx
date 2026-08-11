import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { Section, Eyebrow } from '@/components/ui/section'

gsap.registerPlugin(ScrollTrigger)

/** Full contact block used on /contact — kept for reuse */
export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const panel = panelRef.current
    if (!section || !panel) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      gsap.from(panel, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="contact" ref={sectionRef}>
      <div ref={panelRef} className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="relative border-b border-border p-8 sm:p-10 lg:border-r lg:border-b-0">
            <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
            <div className="relative">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Let&apos;s engineer what&apos;s next
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Book a consultation with our engineering leadership. We&apos;ll map your goals to a
                concrete, AI-first delivery plan.
              </p>
              <a
                href="mailto:hello@zcon.solutions"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                hello@zcon.solutions
              </a>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-heading text-base font-semibold">Pune, India</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Engineering & Delivery HQ</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-heading text-base font-semibold">Delaware, USA</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">North America Operations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}
