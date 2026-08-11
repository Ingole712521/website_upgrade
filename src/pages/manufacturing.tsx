import {
  Box,
  Cloud,
  Cpu,
  Factory,
  FileCheck2,
  Gauge,
  LineChart,
  Radio,
  Shield,
  Truck,
} from 'lucide-react'
import { AmbientBackground } from '@/components/layout/ambient-background'
import { CapabilityList, FactoryFlow } from '@/components/ui/industry-page'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { PageEnter } from '@/components/ui/reveal'

const features = [
  {
    icon: Cpu,
    title: 'Digital Twins',
    desc: 'Real-time virtual replicas of manufacturing environments. IoT telemetry and AI models predict failures, optimize throughput, and simulate production changes before physical implementation.',
  },
  {
    icon: FileCheck2,
    title: 'Industrial Compliance (PPAP & IATF)',
    desc: 'Workflow and collaboration software mapped to automotive and industrial standards including PPAP and IATF 16949 — audit-ready by design.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Automation',
    desc: 'End-to-end visibility and AI-driven assembly line scheduling. Platforms that orchestrate logistics and adjust dynamically to supplier delays and demand shifts.',
  },
]

const stats = [
  { label: '24/7', detail: 'line visibility' },
  { label: '< 5 min', detail: 'issue alerts' },
  { label: '100%', detail: 'audit trail' },
]

const stages = [
  {
    icon: Factory,
    title: 'Machines & PLCs',
    desc: 'Capture production, quality, downtime, and sensor events.',
  },
  {
    icon: Radio,
    title: 'Edge Gateway',
    desc: 'Normalize OPC-UA, MQTT, and device telemetry close to the line.',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Layer',
    desc: 'Stream clean operational data into secure analytics stores.',
  },
  {
    icon: Gauge,
    title: 'Operations Cockpit',
    desc: 'Drive alerts, dashboards, traceability, and AI recommendations.',
  },
]

const signals = [
  { label: 'Line speed stable', tone: 'ok' as const },
  { label: 'Quality drift detected', tone: 'warn' as const },
  { label: 'Maintenance window due', tone: 'ok' as const },
]

const platformLabels = [
  { icon: Box, label: 'Traceability' },
  { icon: Shield, label: 'Compliance' },
  { icon: LineChart, label: 'Prediction' },
]

export function ManufacturingPage() {
  return (
    <PageEnter>
      <AmbientBackground />
      <div className="relative z-10">
        <ServiceHero
          eyebrow="Industry Focus"
          title="Intelligent Manufacturing"
          titleAccent="& Supply Chain"
          description="Bridging the gap between the factory floor and intelligent cloud architectures to create responsive, compliant, and highly efficient industrial systems."
          primaryCta={{ label: 'Connect the floor', href: '/contact' }}
          secondaryCta={{ label: 'See the flow', href: '#connected' }}
          visual={
            <ServiceHeroVisual
              title="Factory-to-cloud stack"
              subtitle="Digital twins, compliance workflows, and supply chain orchestration."
              nodes={[
                { icon: Factory, label: 'Shop floor' },
                { icon: Cpu, label: 'Digital twins', tone: 'accent' },
                { icon: FileCheck2, label: 'PPAP / IATF' },
                { icon: Truck, label: 'Supply chain' },
              ]}
              footerLeft="Lines connected"
              footerRight="industry · mfg"
            />
          }
        />

        <CapabilityList
          title={<>From twin to truck — industrial systems that decide faster</>}
          description="Digital twins, compliance workflows, and supply chain automation built for regulated manufacturing."
          items={features}
        />

        <FactoryFlow
          stats={stats}
          stages={stages}
          signals={signals}
          platformLabels={platformLabels}
        />

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
        />
      </div>
    </PageEnter>
  )
}
