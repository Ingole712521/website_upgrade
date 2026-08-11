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
import {
  IndustryFeatureStack,
  ManufacturingConnected,
} from '@/components/ui/industry-page'
import { ServiceCta } from '@/components/ui/service-cta'
import { ServiceHero, ServiceHeroVisual } from '@/components/ui/service-page'
import { PageEnter } from '@/components/ui/reveal'

const features = [
  {
    icon: Cpu,
    title: 'Digital Twins',
    desc: 'Creating real-time virtual replicas of manufacturing environments. We integrate IoT telemetry and AI models to predict hardware failures, optimize throughput, and simulate production changes before physical implementation.',
  },
  {
    icon: FileCheck2,
    title: 'Industrial Compliance (PPAP & IATF)',
    desc: 'Developing specialized workflow and collaboration software mapped directly to strict automotive and industrial standards, including the Production Part Approval Process (PPAP) and IATF 16949. Ensure audit-readiness automatically.',
  },
  {
    icon: Truck,
    title: 'Supply Chain Automation',
    desc: 'End-to-end visibility and AI-driven assembly line scheduling. We build platforms that orchestrate complex logistics networks, adjusting dynamically to supplier delays and demand fluctuations.',
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
          title={
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligent Manufacturing & Supply Chain
            </span>
          }
          description="Bridging the gap between the factory floor and intelligent cloud architectures to create responsive, compliant, and highly efficient industrial systems."
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

        <IndustryFeatureStack items={features} />

        <ManufacturingConnected
          stats={stats}
          stages={stages}
          signals={signals}
          platformLabels={platformLabels}
        />

        <ServiceCta
          title="Let's build what's next."
          description="Tell us about your roadmap. We'll show you how AI-first engineering compresses the timeline."
          cta="Start a conversation"
        />
      </div>
    </PageEnter>
  )
}
