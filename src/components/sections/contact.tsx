import { motion } from 'motion/react'
import { ArrowRight, Check, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Section, Eyebrow } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'

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

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section id="contact">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          {/* left: info */}
          <div className="relative border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
            <div className="relative">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Let&apos;s engineer what&apos;s next
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Book a consultation with our engineering leadership. We&apos;ll map your goals to a
                  concrete, AI-first delivery plan.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="mailto:hello@zcon.solutions"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@zcon.solutions
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {offices.map((office) => (
                  <div
                    key={office.city}
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

          {/* right: form */}
          <div className="p-8 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-4 text-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">Thanks — message received</h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Our team will reach out within one business day to schedule your consultation.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company" name="company" placeholder="Acme Corp" />
                  <Field label="Industry" name="industry" placeholder="Healthcare" />
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-foreground">How can we help?</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project or challenge…"
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-10px_rgba(244,63,94,0.5)] transition-colors hover:bg-primary/90"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  ISO 9001 &amp; ISO 27001 certified · Your data stays confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  )
}
