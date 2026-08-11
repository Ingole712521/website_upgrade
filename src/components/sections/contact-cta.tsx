import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MessageSquareText, Sparkles } from 'lucide-react'
import { Section, Eyebrow } from '@/components/ui/section'

export function ContactCta() {
  return (
    <Section id="contact">
      <Link
        to="/contact"
        className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/35"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.22),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,174,240,0.18),transparent_68%)] blur-2xl"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-25" />

        <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-12">
          <div className="flex flex-col items-start">
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

            <span className="mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_rgba(58,174,240,0.7)]">
              Go to Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="relative mx-auto flex h-44 w-full max-w-sm items-center justify-center lg:h-56">
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
