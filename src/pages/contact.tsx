import { motion } from 'motion/react'
import { Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/contact-form'
import { Eyebrow } from '@/components/ui/section'
import { motionEase, staggerContainer, staggerItem } from '@/components/ui/reveal'

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
  return (
    <main className="relative px-5 pt-28 pb-20 sm:px-8 sm:pt-32 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1 bg-primary sm:w-1.5"
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: motionEase }}
          className="overflow-hidden border border-foreground/15 bg-card"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-foreground/15 p-8 sm:p-10 lg:border-r lg:border-b-0">
              <div aria-hidden className="pointer-events-none absolute inset-0 stripe-bg opacity-20" />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative flex flex-col gap-5"
              >
                <motion.div variants={staggerItem}>
                  <Eyebrow>Contact Us</Eyebrow>
                </motion.div>
                <motion.h1
                  variants={staggerItem}
                  className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl"
                >
                  Let&apos;s build what&apos;s next
                </motion.h1>
                <motion.p
                  variants={staggerItem}
                  className="max-w-md text-base leading-relaxed text-muted-foreground"
                >
                  Share your challenge. We&apos;ll respond within one business day with a concrete
                  next step.
                </motion.p>

                <motion.a
                  variants={staggerItem}
                  href="mailto:hello@zcon.solutions"
                  className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  hello@zcon.solutions
                </motion.a>

                <motion.div variants={staggerItem} className="mt-6 grid gap-4 sm:grid-cols-2">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="border border-foreground/15 bg-background p-4"
                    >
                      <div className="flex items-center gap-2 text-primary">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]">
                          {office.detail}
                        </span>
                      </div>
                      <p className="mt-2 font-heading text-base font-semibold text-foreground">
                        {office.city}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{office.region}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
