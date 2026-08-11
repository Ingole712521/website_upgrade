import {
  BarChart3,
  DollarSign,
  FileSpreadsheet,
  Pill,
  Receipt,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { IndustryDelivery, IndustryHighlights } from '@/components/ui/industry-page'
import { ServiceCta } from '@/components/ui/service-cta'
import { CapabilityGrid, ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { PageEnter } from '@/components/ui/reveal'

const highlights = [
  { label: 'GtN', detail: 'pricing and net sales intelligence' },
  { label: 'NCPDP', detail: 'pharmacy claim workflows' },
  { label: 'SaaS', detail: 'scenario modeling and operations' },
]

const capabilities = [
  {
    icon: DollarSign,
    title: 'Pricing & Gross-to-Net Platforms',
    desc: 'Build pricing, forecast, accrual, liability, and scenario modeling tools for life-sciences manufacturers.',
  },
  {
    icon: Receipt,
    title: 'Rx Billing & Claims Integration',
    desc: 'Engineer eligibility, prescription pricing, claim submission, claim reversal, audit logs, and clearinghouse integrations.',
  },
  {
    icon: BarChart3,
    title: 'Commercial Analytics',
    desc: 'Turn channel, payer, government-pricing, pharmacy, and operational data into reliable analytics for faster decisions.',
  },
]

const patterns = [
  {
    title: 'Life-sciences pricing patterns',
    desc: 'Pricing and GtN workflows including SaaS modeling, net sales forecasting, and commercial analytics.',
  },
  {
    title: 'Pharmacies & insurance interface',
    desc: 'Responsive healthcare application for eligibility, Rx billing, prescription pricing, claim status, and reversals.',
  },
  {
    title: 'Enterprise integration with analytics',
    desc: 'Prescription pricing and claim workflows integrated with drug databases, EMRs, and clearinghouses.',
  },
]

const outcomes = [
  'Pricing and GtN systems that reduce spreadsheet-heavy planning and monthly-close friction.',
  'Standards-aligned pharmacy workflows for eligibility checks, claim billing, reversals, and response review.',
  'Reliable analytics across pricing, payor, channel, drug, and liability data.',
]

export function PharmaPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Industry Focus"
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Pharma & Life Sciences
            </span>
          }
          description="Data-rich platforms for life-sciences manufacturers, pharmacy networks, and healthcare teams managing pricing, claims, market access, and commercial operations."
          visual={
            <ServiceHeroVisual
              title="Commercial ops platform"
              subtitle="GtN pricing, NCPDP claims, and analytics for life sciences."
              nodes={[
                { icon: Pill, label: 'Life sciences' },
                { icon: DollarSign, label: 'GtN pricing' },
                { icon: FileSpreadsheet, label: 'Claims', tone: 'accent' },
                { icon: BarChart3, label: 'Analytics' },
              ]}
              footerLeft="Models synced"
              footerRight="industry · pharma"
            />
          }
        />

        <IndustryHighlights items={highlights} className="-mt-4 md:-mt-8" />

        <CapabilityGrid
          id="capabilities"
          eyebrow="Core Capabilities"
          title={<>Pricing, claims, and commercial clarity</>}
          description="Platforms that connect life-sciences pricing, pharmacy workflows, and decision-ready analytics."
          items={capabilities}
        />

        <IndustryDelivery patterns={patterns} outcomes={outcomes} />

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
