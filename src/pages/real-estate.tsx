import {
  Bot,
  Building2,
  LayoutDashboard,
  MessageSquare,
  ScanSearch,
  Workflow,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { IndustryDelivery, IndustryHighlights } from '@/components/ui/industry-page'
import { ServiceCta } from '@/components/ui/service-cta'
import { CapabilityGrid, ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { PageEnter } from '@/components/ui/reveal'

const highlights = [
  { label: '24/7', detail: 'buyer and tenant engagement' },
  { label: 'Agents', detail: 'autonomous real estate workflows' },
  { label: 'CRM', detail: 'agency and franchise intelligence' },
]

const capabilities = [
  {
    icon: Workflow,
    title: 'Agentic Real Estate Workflows',
    desc: 'Turn enquiries, listing updates, buyer qualification, follow-ups, and handoffs into supervised AI-agent workflows that work across CRM, websites, and messaging channels.',
  },
  {
    icon: MessageSquare,
    title: 'Conversational Property Journeys',
    desc: 'Design sales, leasing, property management, and project marketing journeys that respond instantly across channels.',
  },
  {
    icon: ScanSearch,
    title: 'Listing & Media Intelligence',
    desc: 'Use vision AI, floorplan understanding, and generative workflows to improve property narratives and buyer context.',
  },
  {
    icon: LayoutDashboard,
    title: 'Agency Operating Intelligence',
    desc: 'Unify lead, franchise, campaign, and customer data into dashboards and AI-assisted workflows for real estate teams.',
  },
]

const patterns = [
  {
    title: 'Real estate AI platform patterns',
    desc: '24/7 multilingual customer engagement, listing augmentation, and corporate insights for modern agencies.',
  },
  {
    title: 'Agentic system design',
    desc: 'AI agents can qualify enquiries, enrich listings, route leads, draft responses, trigger CRM updates, and escalate to human agents when needed.',
  },
  {
    title: 'Vision AI-enhanced real estate',
    desc: 'Computer vision and RAG workflows for richer property descriptions and floorplan interpretation.',
  },
  {
    title: 'White-label real estate bots',
    desc: 'Conversational workflows combining NLP, OpenAI, and scalable webhook architectures.',
  },
]

const outcomes = [
  'Always-on enquiry handling for buyers, tenants, vendors, and property managers.',
  'Agentic workflows that move from chat response to lead qualification, CRM action, follow-up, and human handoff.',
  'Higher-quality listing content generated from property data, images, and floorplans.',
  'Operational visibility across branches, campaigns, conversations, and lead pipelines.',
]

export function RealEstatePage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Industry Focus"
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Estate & PropTech
            </span>
          }
          description="Agentic real estate platforms for teams that need faster buyer engagement, richer listings, automated lead workflows, and better operational visibility across sales, leasing, and property management."
          visual={
            <ServiceHeroVisual
              title="PropTech operating layer"
              subtitle="Enquiry → qualify → CRM → handoff, with vision-enhanced listings."
              nodes={[
                { icon: Building2, label: 'Listings' },
                { icon: Bot, label: 'AI agents', tone: 'accent' },
                { icon: MessageSquare, label: 'Journeys' },
                { icon: LayoutDashboard, label: 'CRM intel' },
              ]}
              footerLeft="Agents online"
              footerRight="industry · proptech"
            />
          }
        />

        <IndustryHighlights items={highlights} className="-mt-4 md:-mt-8" />

        <CapabilityGrid
          id="capabilities"
          eyebrow="Core Capabilities"
          title={<>Built for agencies, franchises, and PropTech teams</>}
          description="From conversational journeys to operating intelligence — workflows that keep buyers engaged and teams aligned."
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
