import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Check, Laptop, Rocket, Send, Trophy, Upload } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/templates/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/templates/service-page'
import { Eyebrow, Section } from '@/components/ui/section'
import {
  PageEnter,
  Reveal,
  motionEase,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

const life = [
  {
    icon: Rocket,
    title: 'Radical Innovation',
    desc: 'Work directly with the latest LLMs, Computer Vision models, and cloud infrastructure. We sponsor hackathons and dedicated R&D time.',
  },
  {
    icon: Laptop,
    title: 'Remote-First Flexibility',
    desc: "Whether you're in our SF HQ, our Pune Delivery Center, or working from home, our async-first culture supports your lifestyle.",
  },
  {
    icon: Trophy,
    title: 'Enterprise Impact',
    desc: 'Your code will power Fortune 500 manufacturing floors, real-estate platforms, and enterprise financial systems.',
  },
]

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
        className="h-11 rounded-xl border border-border bg-background/80 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
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
        className="flex min-h-[240px] flex-col items-center justify-center gap-4 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-semibold">Profile received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for sharing. Our talent team will reach out when a matching opportunity opens up.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Full name" required />
        <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
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
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-4 py-3">
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
          <span className="text-xs text-muted-foreground">{fileName ?? 'PDF, DOC, or DOCX'}</span>
        </div>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Focus areas, preferred roles, location…"
          className="resize-none rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground"
      >
        Submit Application
        <Send className="h-4 w-4" />
      </motion.button>
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
          title="Build the"
          titleAccent="AI-Driven Future"
          description="Join an elite team of engineers, architects, and AI researchers solving complex enterprise problems. At zCon, we don't just write code; we pioneer new workflows."
          primaryCta={{ label: 'Share your profile', href: '#apply' }}
          secondaryCta={{ label: 'Life at zCon', href: '#life' }}
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
          <Reveal>
            <Eyebrow>Culture</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Life at zCon
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              The environment, tools, and autonomy you need to do the best work of your career.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 divide-y divide-border border-y border-border"
          >
            {life.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  transition={springSoft}
                  className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-4">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <Section id="apply" className="bg-muted/30 dark:bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: motionEase }}
            className={cn('grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14')}
          >
            <div>
              <Eyebrow>Open Pipeline</Eyebrow>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Share Your Profile
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are not listing active positions right now. Send your details with a PDF, DOC, or
                DOCX profile for future opportunities.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
              <CareersForm />
            </div>
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
        />
      </div>
    </PageEnter>
  )
}
