import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Linkedin, Network, Users } from 'lucide-react'
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

type Leader = {
  name: string
  role: string
  summary: string
  bio: string
  linkedin?: string
  initials: string
}

const leaders: Leader[] = [
  {
    name: 'Vikas Bapat',
    role: 'Director & CEO',
    initials: 'VB',
    summary:
      'Two decades as an IT consultant spanning civil organizations, Big Four accounting, and enterprise software delivery.',
    bio: 'In two decades as an IT consultant, Vikas Bapat has worked with U.S. business interests ranging from civil organizations, like the Chicago Police Department, to major corporations including Big Four accounting firm Ernst & Young, and software giant Oracle. He spent many years stateside, working in the competitive, big-city environments of Denver, Minneapolis, and Chicago. A multi-dimensional IT professional, Vikas is experienced in various industry segments including B2B marketplace, manufacturing (ERP) and utilities, especially using Oracle/SQL Server databases. In every role, from project lead to technical architect, he continually expanded and refined his skill in delivering information technology solutions.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Rahul Khinvasara',
    role: 'Director & CTO',
    initials: 'RK',
    summary:
      'Career in IT consulting and product development with top-tier clients, and co-founder of zCon Solutions.',
    bio: 'Over the course of his career in IT consulting and product development, Rahul Khinvasara has worked with top-tier clients around the world including Merck, Eli Lilly, Media One, General Motors, Kraft Foods, Nationwide Acceptance Corporation, and Bristol Myers Squibb. His achievements include a management stint with Ernst and Young, LLP. After living and working six years in the U.S., Rahul returned to India and joined forces with another experienced IT professional to launch zCon Solutions, leveraging collective knowledge and business experience.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Pritesh Ostwal',
    role: 'Director of Cloud Engineering',
    initials: 'PO',
    summary:
      '20+ years at zCon leading client delivery, enterprise application programs, and AI-first engineering teams.',
    bio: 'Pritesh Ostwal is Director of Cloud Engineering at zCon Solutions, with 20+ years at zCon leading client delivery, enterprise application programs, and cross-functional engineering teams. His work spans cloud engineering, OpenAI and Azure AI solution delivery, RAG and RAFT patterns, and production-grade application modernization. Pritesh works closely with customers to translate business priorities into clear delivery plans and keep execution visible from discovery through release. In zCon\'s AI-first delivery model, he helps teams apply reusable AI delivery skills, code review practices, QA planning, and release governance.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Ajay Ajnadkar',
    role: 'Delivery Manager',
    initials: 'AA',
    summary:
      'Account management expertise across large zCon accounts, with 26+ years in IT including 18+ years at IBM.',
    bio: 'Ajay Ajnadkar brings account management expertise and manages delivery for large zCon accounts, with responsibility across client management, operations, and special projects. Ajay has 26+ years of experience in the IT industry, including 18+ years with IBM, and has worked with clients including American Express, General Motors, Hertz Car Rentals, NiSource, and Duke Energy. His background also includes a three-year risk management stint with IBM Canada. He holds a Master\'s degree in Computer Science from Pune University and earned PMI certification in 2003.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Ameya Gadre',
    role: 'Delivery Manager',
    initials: 'AG',
    summary:
      'Owns project and product delivery from presales and solutioning through stakeholder alignment and completion.',
    bio: 'Being a delivery manager at zCon, Ameya plays a significant part in project and product delivery management — from presales and solutioning, initiation of the project, relationships with major stakeholders, uninterrupted headway of the project, and accomplishment. His knowledge of Information Technology and Systems management helps him drive projects techno-functionally. A graduate in Business Administration, Ameya is also certified in Systems Management and is a post-graduate in Information Technology. Prior to joining zCon, Ameya has 19 years of experience delivering large-scale programs in IT Software.',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Chitra Markale',
    role: 'HR Head',
    initials: 'CM',
    summary:
      'Blends analytical engineering judgment with empathy — ideal for building thriving, fast-growing teams.',
    bio: 'Chitra possesses an exceptional blend of left-brain and right-brain skillsets typically located at opposite ends of the professional spectrum. She combines the keen intelligence and analytical ability of a computer science engineer with the empathy, compassion, and understanding of a counselor or social worker. It is this unique combination of character traits that make Chitra the ideal human resources manager for a thriving, fast-growing IT company. Earning a bachelor degree in computer science from Maharashtra Institute of Technology, Chitra laid a solid foundation for a career in the IT industry.',
    linkedin: 'https://www.linkedin.com/',
  },
]

function LeaderCard({ leader }: { leader: Leader }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -5 }}
      transition={springSoft}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-primary/20 bg-primary/10 font-heading text-lg font-bold text-primary">
          {leader.initials}
        </div>
        {leader.linkedin ? (
          <a
            href={leader.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${leader.name} LinkedIn profile`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
        {leader.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{leader.role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{leader.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 self-start text-sm font-medium text-foreground transition-colors hover:text-primary"
        aria-expanded={open}
      >
        {open ? 'Show less' : 'Read more'} →
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: motionEase }}
            className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-3 block border-t border-border pt-3">{leader.bio}</span>
          </motion.p>
        ) : null}
      </AnimatePresence>
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
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              The Architects of Innovation
            </span>
          }
          description="Our executive team brings decades of combined experience in enterprise software engineering, artificial intelligence, and global delivery management."
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
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {leaders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </motion.div>
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
