import { motion } from 'motion/react'
import {
  Award,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Eyebrow, Section, SectionHeading } from '@/components/ui/section'
import {
  PageEnter,
  Reveal,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: '20+', label: 'Years of Delivery', icon: Award },
  { value: '100+', label: 'Global Customers', icon: Globe2 },
  { value: '1000+', label: 'Partner Network Resources', icon: Network },
  { value: 'ISO 9001:2015', label: 'Quality Certified', icon: ShieldCheck },
]

const pyramid: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Client First',
    desc: 'We align every decision to the business outcome the client needs to achieve.',
    icon: Target,
  },
  {
    title: 'Functional Ownership',
    desc: 'We own the complete delivery path, from problem definition through measurable adoption.',
    icon: CheckCircle2,
  },
  {
    title: 'Responsiveness',
    desc: 'We move quickly, communicate clearly, and adapt when priorities or constraints change.',
    icon: Rocket,
  },
  {
    title: 'Transparency',
    desc: 'We keep decisions, progress, risks, and tradeoffs visible throughout the engagement.',
    icon: Lightbulb,
  },
  {
    title: 'Innovation',
    desc: 'We use modern engineering and AI practices where they create practical, durable advantage.',
    icon: Sparkles,
  },
]

const values: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Openness',
    desc: 'Direct communication, shared context, and a culture where useful ideas can surface early.',
    icon: Users,
  },
  {
    title: 'Customer First',
    desc: 'A long-term view of customer success, not just project completion.',
    icon: Handshake,
  },
  {
    title: 'Integrity',
    desc: 'Responsible commitments, honest reporting, and engineering choices that protect trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Teamwork',
    desc: 'Design, engineering, QA, and delivery leaders working as one accountable team.',
    icon: Users,
  },
  {
    title: 'Continuous Learning',
    desc: 'Consistent improvement in tools, skills, and practices so our clients benefit from current thinking.',
    icon: Sparkles,
  },
]

const partnership = [
  {
    title: 'Mutual Success',
    desc: "We define success around the client's business goals and keep delivery accountable to them.",
  },
  {
    title: 'Innovation Core',
    desc: 'We challenge stale approaches and apply modern engineering where it improves outcomes.',
  },
  {
    title: 'Cost Effective',
    desc: 'We optimize teams, tools, and architecture without compromising quality.',
  },
  {
    title: 'Agility',
    desc: 'We adapt quickly to new priorities, market shifts, and delivery constraints.',
  },
]

const bring: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Pune Delivery Hub',
    desc: 'A mature engineering center with the infrastructure, collaboration model, and support needed for sustained delivery.',
    icon: Building2,
  },
  {
    title: 'Deep Tech Expertise',
    desc: 'Enterprise-grade architecture, software engineering, data, cloud, and AI capability from teams that have shipped at scale.',
    icon: Sparkles,
  },
  {
    title: 'Partner Network Access',
    desc: 'A broad network that helps clients accelerate hiring, delivery, integration, and market reach.',
    icon: Network,
  },
  {
    title: 'AI-Native Development',
    desc: 'Practical AI-assisted delivery methods that reduce cycle time while preserving engineering quality.',
    icon: Rocket,
  },
  {
    title: 'Product & Launch Support',
    desc: 'Help with product framing, ICP clarity, launch planning, and operational readiness.',
    icon: Target,
  },
  {
    title: 'Founder-Led Guidance',
    desc: 'Direct access to leaders who have built and scaled products, teams, and long-term client partnerships.',
    icon: Handshake,
  },
]

export function AboutPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="The zCon Story"
          title="Crafting Quality"
          titleAccent="“Technovative” Solutions"
          description="zCon Solutions is an AI-first engineering partner for enterprises that need reliable delivery, practical innovation, and teams that own outcomes end to end."
          visual={
            <ServiceHeroVisual
              title="Global delivery footprint"
              subtitle="Pune engineering hub · Americas client success · follow-the-sun delivery."
              nodes={[
                { icon: Globe2, label: '100+ customers' },
                { icon: Award, label: '20+ years' },
                { icon: Building2, label: 'Pune hub', tone: 'accent' },
                { icon: ShieldCheck, label: 'ISO certified' },
              ]}
              footerLeft="Partner ready"
              footerRight="company · about"
            />
          }
        />

        <section className="px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <motion.article
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={springSoft}
                  className="rounded-2xl border border-border bg-card/70 p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </section>

        <Section id="mission">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Turn complex ideas into reliable business outcomes.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We partner with our global customers by Crafting Quality &ldquo;Technovative&rdquo;
              Solutions which add value and facilitate their success.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Measurable value', 'Modern operations', 'Team success'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>

        <Section id="pyramid" className="bg-muted/40 dark:bg-transparent">
          <SectionHeading
            align="center"
            eyebrow="Delivery Principles"
            title="zCon Success Pyramid"
            description="The delivery principles that shape how we plan, communicate, and execute client engagements."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {pyramid.map((item) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={springSoft}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <Section id="values">
          <SectionHeading
            align="center"
            eyebrow="Culture"
            title="Our Core Values"
            description="The cultural beliefs from our foundation that guide how zCon works with clients and teams."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {values.map((item) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={springSoft}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <Section id="partnership" className="bg-muted/40 dark:bg-transparent">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <Eyebrow>Engagement Model</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Our Partnership Approach
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  We work beyond a traditional vendor model. Our teams align around shared context,
                  practical execution, and outcomes both sides can measure.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every engagement is designed around clear ownership, frequent communication, and
                  disciplined delivery habits that keep momentum visible.
                </p>
              </Reveal>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-3 sm:grid-cols-2"
            >
              {partnership.map((item) => (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={springSoft}
                  className="rounded-2xl border border-border bg-card/70 p-5"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </Section>

        <Section id="capabilities">
          <SectionHeading
            align="center"
            eyebrow="Differentiators"
            title="What We Bring to the Table"
            description="Real delivery infrastructure, senior engineering judgment, and a network that helps clients move from idea to operating product."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {bring.map((item) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={springSoft}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-primary/35"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </Section>

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Book a consultation"
        />
      </div>
    </PageEnter>
  )
}
