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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 15% 10%, rgba(244,63,94,0.12), transparent 60%), radial-gradient(ellipse 50% 35% at 85% 20%, rgba(58,174,240,0.1), transparent 55%)',
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: motionEase }}
          className="overflow-hidden rounded-3xl border border-border bg-card"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-border p-8 sm:p-10 lg:border-r lg:border-b-0">
              <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
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
                  className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.08]"
                >
                  Let&apos;s engineer what&apos;s next
                </motion.h1>
                <motion.p
                  variants={staggerItem}
                  className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  Book a consultation with our engineering team. We&apos;ll map your goals to a
                  concrete, AI-first delivery plan.
                </motion.p>

                <motion.a
                  variants={staggerItem}
                  href="mailto:hello@zcon.solutions"
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  hello@zcon.solutions
                </motion.a>

                <motion.div variants={staggerItem} className="mt-4 grid gap-4 sm:grid-cols-2">
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
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: motionEase }}
              className="p-8 sm:p-10"
            >
              <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">
                Send a message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
