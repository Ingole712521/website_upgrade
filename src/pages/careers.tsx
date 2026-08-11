import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import {
  Check,
  Laptop,
  Rocket,
  Send,
  Trophy,
  Upload,
  type LucideIcon,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section'
import {
  PageEnter,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

const life: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Radical Innovation',
    desc: 'Work directly with the latest LLMs, Computer Vision models, and cloud infrastructure. We sponsor hackathons and dedicated R&D time.',
    icon: Rocket,
  },
  {
    title: 'Remote-First Flexibility',
    desc: "Whether you're in our SF HQ, our Pune Delivery Center, or working from home, our async-first culture supports your lifestyle.",
    icon: Laptop,
  },
  {
    title: 'Enterprise Impact',
    desc: 'Your code will power Fortune 500 manufacturing floors, real-estate platforms, and enterprise financial systems.',
    icon: Trophy,
  },
]

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  className,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={cn('flex flex-col gap-1.5', className)}>
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

function CareersForm() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[280px] flex-col items-center justify-center gap-4 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">Profile received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for sharing your details. Our talent team will reach out when a matching opportunity
          opens up.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Jane Doe" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
        <Field
          label="LinkedIn / Portfolio"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/…"
        />
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">Profile Attachment</span>
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-border bg-background px-4 py-3">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15">
            <Upload className="h-4 w-4" />
            Choose File
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
          <span className="text-xs text-muted-foreground">
            {fileName ?? 'PDF, DOC, or DOCX'}
          </span>
        </div>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your focus areas, preferred roles, and location…"
          className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-10px_rgba(58,174,240,0.5)] transition-colors hover:bg-primary/90"
      >
        Submit Application
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

export function CareersPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Careers"
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Build the AI-Driven Future
            </span>
          }
          description="Join an elite team of engineers, architects, and AI researchers solving complex enterprise problems. At zCon, we don't just write code; we pioneer new workflows."
          visual={
            <ServiceHeroVisual
              title="Life at zCon"
              subtitle="Innovation culture, remote-first flexibility, and Fortune 500 impact."
              nodes={[
                { icon: Rocket, label: 'Innovation' },
                { icon: Laptop, label: 'Remote-first', tone: 'accent' },
                { icon: Trophy, label: 'Enterprise' },
                { icon: Send, label: 'Apply' },
              ]}
              footerLeft="Hiring pipeline"
              footerRight="company · careers"
            />
          }
        />

        <Section id="life">
          <SectionHeading
            align="center"
            eyebrow="Culture"
            title="Life at zCon"
            description="We provide the environment, tools, and autonomy you need to do the best work of your career."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {life.map((item) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={springSoft}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <Section id="apply" className="bg-muted/40 dark:bg-transparent">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Eyebrow>Open Pipeline</Eyebrow>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Share Your Profile
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  We are not listing active positions right now. Send your details with a PDF, DOC,
                  or DOCX profile for future opportunities.
                </p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Upload className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-8">
              <CareersForm />
            </div>
          </div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
