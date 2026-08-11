import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

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

export function ContactForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'flex min-h-[320px] flex-col items-center justify-center gap-4 text-center',
          className,
        )}
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Thanks — message received
        </h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Our team will reach out within one business day to schedule your consultation.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn('flex flex-col gap-4', className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Full name" required />
        <Field label="Work email" name="email" type="email" placeholder="email@company.com" required />
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
        className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-10px_rgba(244,63,94,0.5)] transition-colors hover:bg-primary/90"
      >
        Book Consultation
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        ISO 9001 &amp; ISO 27001 certified · Your data stays confidential
      </p>
    </form>
  )
}
