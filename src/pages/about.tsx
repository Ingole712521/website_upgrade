import { motion, useReducedMotion } from 'motion/react'
import {
  Award,
  Building2,
  Globe2,
  Handshake,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
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

const stats = [
  { value: '20+', label: 'Years of Delivery' },
  { value: '100+', label: 'Global Customers' },
  { value: '1000+', label: 'Partner Network Resources' },
  { value: 'ISO', label: '9001:2015 Quality Certified' },
]

const pyramid = [
  {
    title: 'Client First',
    desc: 'Align every decision to the business outcome the client needs to achieve.',
  },
  {
    title: 'Functional Ownership',
    desc: 'Own the complete delivery path — from problem definition through measurable adoption.',
  },
  {
    title: 'Responsiveness',
    desc: 'Move quickly, communicate clearly, and adapt when priorities change.',
  },
  {
    title: 'Transparency',
    desc: 'Keep decisions, progress, risks, and tradeoffs visible throughout the engagement.',
  },
  {
    title: 'Innovation',
    desc: 'Use modern engineering and AI where they create practical, durable advantage.',
  },
]

const values = ['Openness', 'Customer First', 'Integrity', 'Teamwork', 'Continuous Learning']

const partnership = [
  {
    title: 'Mutual Success',
    desc: "Define success around the client's business goals and keep delivery accountable to them.",
  },
  {
    title: 'Innovation Core',
    desc: 'Challenge stale approaches and apply modern engineering where it improves outcomes.',
  },
  {
    title: 'Cost Effective',
    desc: 'Optimize teams, tools, and architecture without compromising quality.',
  },
  {
    title: 'Agility',
    desc: 'Adapt quickly to new priorities, market shifts, and delivery constraints.',
  },
]

const bring = [
  {
    icon: Building2,
    title: 'Pune Delivery Hub',
    desc: 'Mature engineering center with infrastructure and collaboration for sustained delivery.',
  },
  {
    icon: Sparkles,
    title: 'Deep Tech Expertise',
    desc: 'Architecture, software, data, cloud, and AI from teams that have shipped at scale.',
  },
  {
    icon: Network,
    title: 'Partner Network Access',
    desc: 'Accelerate hiring, delivery, integration, and market reach through a broad network.',
  },
  {
    icon: Rocket,
    title: 'AI-Native Development',
    desc: 'AI-assisted delivery methods that reduce cycle time while preserving engineering quality.',
  },
  {
    icon: Target,
    title: 'Product & Launch Support',
    desc: 'Product framing, ICP clarity, launch planning, and operational readiness.',
  },
  {
    icon: Handshake,
    title: 'Founder-Led Guidance',
    desc: 'Direct access to leaders who built and scaled products, teams, and partnerships.',
  },
]

export function AboutPage() {
  const reduce = useReducedMotion()

  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="The zCon Story"
          title="Crafting Quality"
          titleAccent="Technovative Solutions"
          description="zCon Solutions is an AI-first engineering partner for enterprises that need reliable delivery, practical innovation, and teams that own outcomes end to end."
          primaryCta={{ label: 'Meet leadership', href: '/leadership' }}
          secondaryCta={{ label: 'Our principles', href: '#pyramid' }}
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

        {/* Big numbers — typographic, not cards */}
        <section className="px-5 sm:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-10 border-y border-border py-12 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className={
                  i === 0
                    ? 'px-0 lg:pr-6'
                    : 'px-0 lg:border-l lg:border-border lg:px-6 lg:last:pr-0'
                }
              >
                <motion.p
                  className="font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, ease: motionEase }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Mission — editorial split */}
        <Section id="mission">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>Our Mission</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 max-w-xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.08]">
                  Turn complex ideas into reliable business outcomes.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                We partner with global customers by crafting quality &ldquo;Technovative&rdquo;
                solutions that add value and facilitate their success — measurable value, modern
                operations, and team success.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* Success pyramid — numbered rail */}
        <Section id="pyramid" className="bg-muted/30 dark:bg-transparent">
          <Reveal>
            <Eyebrow>Delivery Principles</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              zCon Success Pyramid
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Principles that shape how we plan, communicate, and execute client engagements.
            </p>
          </Reveal>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 divide-y divide-border border-y border-border"
          >
            {pyramid.map((item, i) => (
              <motion.li
                key={item.title}
                variants={staggerItem}
                whileHover={{ x: 6 }}
                transition={springSoft}
                className="grid gap-3 py-6 sm:grid-cols-[5rem_12rem_1fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-sm text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </Section>

        {/* Values — chip rail with hover */}
        <Section id="values">
          <Reveal>
            <Eyebrow>Culture</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 flex flex-wrap gap-3"
          >
            {values.map((value) => (
              <motion.span
                key={value}
                variants={staggerItem}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={springSoft}
                className="rounded-full border border-border bg-card px-5 py-2.5 font-heading text-sm font-semibold text-foreground"
              >
                {value}
              </motion.span>
            ))}
          </motion.div>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Cultural beliefs from our foundation that guide how zCon works with clients and teams —
              openness, long-term customer success, integrity, teamwork, and continuous learning.
            </p>
          </Reveal>
        </Section>

        {/* Partnership */}
        <Section id="partnership" className="bg-muted/30 dark:bg-transparent">
          <div className="grid gap-12 lg:grid-cols-2">
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
                  Beyond a traditional vendor model. Shared context, practical execution, and outcomes
                  both sides can measure — with clear ownership and visible momentum.
                </p>
              </Reveal>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-6"
            >
              {partnership.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="border-l-2 border-primary/50 pl-5"
                >
                  <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* What we bring — 2-col with icon hover */}
        <Section id="bring">
          <Reveal>
            <Eyebrow>Differentiators</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              What We Bring to the Table
            </h2>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2"
          >
            {bring.map((item) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={springSoft}
                  className="group flex gap-4"
                >
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
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
