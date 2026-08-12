import {
  Activity,
  BriefcaseBusiness,
  FileCheck2,
  GitBranch,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { ExpandableNotes } from '@/components/ui/expandable-notes'
import { ServiceCta } from '@/components/templates/service-cta'
import {
  CapabilityGrid,
  ServiceHero,
  ServiceHeroVisual,
} from '@/components/templates/service-page'
import { PageEnter } from '@/components/ui/reveal'

const capabilities = [
  {
    title: 'Autonomous Automation Testing',
    desc: 'Move beyond brittle scripts. We implement AI agents that automatically generate, execute, and heal end-to-end testing suites as your application UI evolves.',
    icon: ShieldCheck,
  },
  {
    title: 'Intelligent Observability',
    desc: 'Proactive monitoring systems that predict infrastructure failures and application bottlenecks before they impact end-users, using predictive anomaly detection.',
    icon: Activity,
  },
  {
    title: 'Smart CI/CD Pipelines',
    desc: 'Streamline your deployment pipelines with automated security scanning, AI-assisted code reviews, and zero-downtime deployment strategies via Azure DevOps.',
    icon: GitBranch,
  },
  {
    title: 'AI Review Governance',
    desc: 'Code and design review workflows cross-check changed files, acceptance criteria, test coverage, and release risk before production handoff.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Reusable QA Skills',
    desc: 'Shared functional, regression, accessibility, API, and UI validation prompts keep delivery quality consistent across applications.',
    icon: FileCheck2,
  },
  {
    title: 'Continuous Governance',
    desc: 'Automated compliance and technical debt management. Our PLM workflows ensure every release adheres to standards and architectural best practices automatically.',
    icon: RefreshCw,
  },
]

const notes = [
  {
    id: 'improve',
    tag: 'Impact',
    q: 'Where does AI improve the software lifecycle most?',
    a: 'AI Software PLM applies AI-assisted planning, development, testing, release governance, monitoring, and modernization practices across the software product lifecycle.',
  },
  {
    id: 'regression',
    tag: 'Quality',
    q: 'How do AI workflows reduce regression risk?',
    a: 'AI helps generate test cases, identify regression risks, review changed files, support automation coverage, analyze logs, and support accessibility and API validation.',
  },
  {
    id: 'control',
    tag: 'Governance',
    q: 'What stays under senior engineering control?',
    a: 'AI accelerates discovery, review, and validation, but senior engineers still own architecture decisions, release readiness, and production risk.',
  },
  {
    id: 'cicd',
    tag: 'Integration',
    q: 'Can this work with our existing CI/CD process?',
    a: 'Yes. zCon adapts AI reviews, QA, observability, and release checks to existing Azure DevOps, GitHub, Jenkins, or other delivery pipelines.',
  },
]

export function AiSoftwarePlmPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Services"
          title="AI Software"
          titleAccent="PLM"
          description="Transform your Software Product Lifecycle Management. We integrate AI-driven testing, automated governance, and intelligent CI/CD pipelines to drastically reduce technical debt and release cycles."
          primaryCta={{ label: 'Explore capabilities', href: '#capabilities' }}
          secondaryCta={{ label: 'Audit Your Pipeline', href: '/contact' }}
          visual={
            <ServiceHeroVisual
              title="Lifecycle command center"
              subtitle="AI testing, review gates, and release controls in one governed loop."
              nodes={[
                { icon: ShieldCheck, label: 'AI testing' },
                { icon: Activity, label: 'Observability', tone: 'accent' },
                { icon: GitBranch, label: 'Smart CI/CD' },
                { icon: RefreshCw, label: 'Governance' },
              ]}
              footerLeft="Release gate ready"
              footerRight="plm · v3"
            />
          }
        />

        <CapabilityGrid
          title={<>AI across the full product lifecycle</>}
          description="Testing, observability, CI/CD, review, and continuous governance — engineered so automation supports senior delivery control."
          items={capabilities}
        />

        <ExpandableNotes
          id="lifecycle-notes"
          className="bg-muted/40 dark:bg-transparent"
          eyebrow="Lifecycle Notes"
          title={<>Before adding AI to software PLM</>}
          description="Clarify QA, CI/CD, release governance, and where automation should support engineers. Tap a question to expand."
          notes={notes}
        />

        <ServiceCta
          title="Accelerate your release velocity"
          description="Learn how our AI PLM frameworks can eliminate testing bottlenecks and tighten release governance."
          cta="Audit Your Pipeline"
        />
      </div>
    </PageEnter>
  )
}
