import { ClipboardList, Database, Link2, ShieldCheck, Stethoscope } from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { CapabilityList, DeliverySplit, MetricStrip } from '@/components/ui/industry-page'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { PageEnter } from '@/components/ui/reveal'

const metrics = [
  { label: 'EHR', detail: 'product and workflow engineering' },
  { label: 'HL7', detail: 'labs, pharmacy, and clinical integration' },
  { label: 'HIPAA', detail: 'security and compliance patterns' },
]

const capabilities = [
  {
    icon: Database,
    title: 'EHR/EMR Product Engineering',
    desc: 'Build and modernize scheduling, patient charting, vitals, billing, clinical analytics, kiosk, and portal workflows.',
  },
  {
    icon: Link2,
    title: 'Healthcare Interoperability',
    desc: 'Integrate labs, insurance, pharmacy, billing, e-prescription, and clearinghouse workflows using healthcare data standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Patient Access',
    desc: 'Create role-based, audit-ready web and mobile experiences for providers, patients, and care operations teams.',
  },
]

const patterns = [
  {
    title: 'Cloud EHR platform patterns',
    desc: 'Clinical notes, billing, kiosk intake, portal access, and patient communication for care teams.',
  },
  {
    title: 'Healthcare integration',
    desc: 'EMR products with patient-care workflows, lab integrations, pharmacy connections, and insurance billing.',
  },
  {
    title: 'Health therapy services',
    desc: 'Real-time web and tablet workflows for agencies, therapy staffing, therapists, referrals, and visit tracking.',
  },
]

const outcomes = [
  'Modern EHR/EMR modules aligned to the way providers actually work.',
  'Cleaner interoperability across labs, drug databases, insurance, billing, and external clinical systems.',
  'Mobile and portal experiences that reduce paperwork and improve patient/provider access.',
]

export function HealthcarePage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Industry Focus"
          title="Healthcare"
          titleAccent="Technology"
          description="Secure healthcare platforms for clinical teams, practice operators, and healthtech companies that need compliant workflows, integrations, and patient-ready digital experiences."
          primaryCta={{ label: 'Discuss compliance', href: '/contact' }}
          secondaryCta={{ label: 'See capabilities', href: '#capabilities' }}
          visual={
            <ServiceHeroVisual
              title="Clinical platform stack"
              subtitle="EHR modules, HL7 integrations, and HIPAA-ready patient access."
              nodes={[
                { icon: Stethoscope, label: 'Clinical' },
                { icon: Database, label: 'EHR/EMR' },
                { icon: ClipboardList, label: 'Workflows', tone: 'accent' },
                { icon: ShieldCheck, label: 'Compliance' },
              ]}
              footerLeft="Audit ready"
              footerRight="industry · healthcare"
            />
          }
        />

        <MetricStrip items={metrics} className="-mt-2 md:-mt-6" />

        <CapabilityList
          title={<>Compliant products for care delivery</>}
          description="Engineering patterns for EHR modernization, clinical interoperability, and secure patient experiences."
          items={capabilities}
        />

        <DeliverySplit patterns={patterns} outcomes={outcomes} />

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
        />
      </div>
    </PageEnter>
  )
}
