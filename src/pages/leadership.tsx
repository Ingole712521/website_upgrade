import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Network, Users } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { Section } from '@/components/ui/section'
import {
  PageEnter,
  motionEase,
  springSoft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/components/ui/reveal'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type Leader = {
  name: string
  role: string
  summary: string
  bio: string
  initials: string
  linkedin?: string
}

const leaders: Leader[] = [
  {
    name: 'Vikas Bapat',
    role: 'Director & CEO',
    initials: 'VB',
    summary:
      'Two decades as an IT consultant spanning civil organizations, Big Four accounting, and enterprise software delivery.',
    bio: 'In two decades as an IT consultant, Vikas Bapat has worked with U.S. business interests ranging from civil organizations, like the Chicago Police Department, to major corporations including Big Four accounting firm Ernst & Young, and software giant Oracle. He spent many years stateside in Denver, Minneapolis, and Chicago. Experienced across B2B marketplace, manufacturing (ERP) and utilities — especially Oracle/SQL Server — from project lead to technical architect.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Rahul Khinvasara',
    role: 'Director & CTO',
    initials: 'RK',
    summary:
      'IT consulting and product development with top-tier clients — and co-founder of zCon Solutions.',
    bio: 'Rahul has worked with clients including Merck, Eli Lilly, Media One, General Motors, Kraft Foods, Nationwide Acceptance Corporation, and Bristol Myers Squibb, including a management stint with Ernst and Young, LLP. After six years in the U.S., he returned to India and co-founded zCon Solutions.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Pritesh Ostwal',
    role: 'Director of Cloud Engineering',
    initials: 'PO',
    summary:
      '20+ years at zCon leading client delivery, enterprise programs, and AI-first engineering teams.',
    bio: "Pritesh leads cloud engineering with work spanning OpenAI and Azure AI delivery, RAG and RAFT patterns, and production-grade modernization. He helps teams apply reusable AI delivery skills, code review, QA planning, and release governance so products move faster without losing control.",
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Ajay Ajnadkar',
    role: 'Delivery Manager',
    initials: 'AA',
    summary:
      '26+ years in IT including 18+ at IBM — account management across large zCon engagements.',
    bio: "Ajay manages delivery for large zCon accounts across client management, operations, and special projects. Clients have included American Express, General Motors, Hertz, NiSource, and Duke Energy. Master's in Computer Science from Pune University; PMI certified since 2003.",
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Ameya Gadre',
    role: 'Delivery Manager',
    initials: 'AG',
    summary:
      'Owns delivery from presales and solutioning through stakeholder alignment and project completion.',
    bio: 'Ameya drives project and product delivery end to end — techno-functional leadership backed by Systems Management certification and a post-graduate degree in Information Technology, plus 19 years delivering large-scale IT programs before zCon.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Chitra Markale',
    role: 'HR Head',
    initials: 'CM',
    summary:
      'Blends analytical engineering judgment with empathy — building thriving, fast-growing teams.',
    bio: 'Chitra combines the analytical ability of a computer science engineer with the empathy of a counselor. A graduate of Maharashtra Institute of Technology, she is the ideal people leader for a thriving, fast-growing IT company.',
    linkedin: 'https://www.linkedin.com/',
  },
]

function LeaderRow({ leader, index }: { leader: Leader; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      variants={staggerItem}
      className="group border-b border-border py-8 first:border-t"
    >
      <div className="grid gap-6 md:grid-cols-[5.5rem_1fr_auto] md:items-start md:gap-8">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={springSoft}
          className="grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br from-primary/25 to-accent/20 font-heading text-lg font-bold text-foreground"
        >
          {leader.initials}
        </motion.div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {leader.name}
            </h3>
            <span className="text-sm font-medium text-primary">{leader.role}</span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {leader.summary}
          </p>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: motionEase }}
                className="overflow-hidden"
              >
                <span className="mt-4 block max-w-2xl text-sm leading-relaxed text-foreground/80">
                  {leader.bio}
                </span>
              </motion.p>
            ) : null}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            aria-expanded={open}
          >
            {open ? 'Show less' : 'Read more'}
            <motion.span
              className="ml-1 inline-block"
              animate={{ rotate: open ? 90 : 0 }}
              transition={springSoft}
            >
              →
            </motion.span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
          {leader.linkedin ? (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${leader.name} LinkedIn`}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export function LeadershipPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Leadership"
          title="The Architects of"
          titleAccent="Innovation"
          description="Our executive team brings decades of combined experience in enterprise software engineering, artificial intelligence, and global delivery management."
          primaryCta={{ label: 'Work with us', href: '/contact' }}
          secondaryCta={{ label: 'Join the team', href: '/careers' }}
          visual={
            <ServiceHeroVisual
              title="Executive network"
              subtitle="Founders, cloud engineering, delivery, and people leadership."
              nodes={[
                { icon: Users, label: 'Founders' },
                { icon: Network, label: 'Cloud & AI', tone: 'accent' },
                { icon: Users, label: 'Delivery' },
                { icon: Users, label: 'People' },
              ]}
              footerLeft="Team online"
              footerRight="company · leadership"
            />
          }
        />

        <Section id="team">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {leaders.map((leader, index) => (
              <LeaderRow key={leader.name} leader={leader} index={index} />
            ))}
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
