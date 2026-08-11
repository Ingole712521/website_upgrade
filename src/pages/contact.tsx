import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { Eyebrow } from '@/components/ui/section'

const offices = [
  {
    city: 'Pune, India',
    region: 'Engineering & Delivery HQ',
    detail: 'APAC delivery center',
  },
  {
    city: 'Delaware, USA',
    region: 'North America Operations',
    detail: 'Americas client success',
  },
]

export function ContactPage() {
  const rootRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const officeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const root = rootRef.current
    const left = leftRef.current
    const right = rightRef.current
    if (!root || !left || !right) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const officesEl = officeRefs.current.filter(Boolean)

    const ctx = gsap.context(() => {
      if (reduceMotion) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(left.children, {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
      }).from(
        right,
        {
          y: 36,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.45',
      )

      if (officesEl.length) {
        tl.from(
          officesEl,
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          '-=0.35',
        )
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className="relative px-5 pt-28 pb-20 sm:px-8 sm:pt-32 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 15% 10%, rgba(244,63,94,0.12), transparent 60%), radial-gradient(ellipse 50% 35% at 85% 20%, rgba(58,174,240,0.1), transparent 55%)',
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-border p-8 sm:p-10 lg:border-r lg:border-b-0">
              <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
              <div ref={leftRef} className="relative flex flex-col gap-5">
                <Eyebrow>Contact Us</Eyebrow>
                <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                  Let&apos;s engineer what&apos;s next
                </h1>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Book a consultation with our engineering team. We&apos;ll map your goals to a
                  concrete, AI-first delivery plan.
                </p>

                <a
                  href="mailto:hello@zcon.solutions"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@zcon.solutions
                </a>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {offices.map((office, i) => (
                    <div
                      key={office.city}
                      ref={(el) => {
                        officeRefs.current[i] = el
                      }}
                      className="rounded-2xl border border-border bg-background/60 p-5 backdrop-blur"
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                      <p className="mt-3 font-heading text-base font-semibold text-foreground">
                        {office.city}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{office.region}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{office.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div ref={rightRef} className="p-8 sm:p-10">
              <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
