import {
  Bot,
  Code2,
  Database,
  Eye,
  Layers,
  Zap,
} from 'lucide-react'
import { CapabilityGrid } from '@/components/templates/service-page'

const capabilities = [
  {
    title: 'Full-Stack Modernization',
    desc: 'From monolithic breaking to containerized microservices. We build resilient backends using .NET/Azure and hyper-fast frontends using React and Next.js.',
    icon: Layers,
  },
  {
    title: 'AI-Assisted Prototyping',
    desc: 'We convert complex concepts into working prototypes in weeks, not months, by leveraging generative UI tools and AI code copilots during the inception phase.',
    icon: Zap,
  },
  {
    title: 'Spec-to-Application Workflow',
    desc: 'Requirements become structured build plans, generated React/API slices, automated checks, and senior engineering review before release.',
    icon: Bot,
  },
  {
    title: 'AI Code Preview',
    desc: 'Rapid UI previews help teams validate screens, components, responsive behavior, and user flows before full implementation is locked.',
    icon: Eye,
  },
  {
    title: 'Data-Intensive Architectures',
    desc: "Building applications that don't just store data, but understand it. We integrate vector databases and RAG pipelines seamlessly alongside traditional SQL/NoSQL stores.",
    icon: Database,
  },
  {
    title: 'Enterprise Mobility',
    desc: 'Cross-platform mobile applications that tie into your core AI infrastructure, providing intelligent on-the-go access for your workforce and customers.',
    icon: Code2,
  },
]

export function AiProductCapabilities() {
  return (
    <CapabilityGrid
      title={<>What we engineer into every product build</>}
      description="A focused set of delivery practices that compress time-to-value while keeping architecture, review, and release under senior engineering control."
      items={capabilities}
    />
  )
}
