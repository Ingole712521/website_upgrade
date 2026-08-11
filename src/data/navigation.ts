export type NavItem = {
  label: string
  description: string
  to: string
}

export type NavGroup = {
  id: string
  label: string
  items: NavItem[]
}

export const navGroups: NavGroup[] = [
  {
    id: 'capabilities',
    label: 'Capabilities',
    items: [
      {
        label: 'AI Product Engineering',
        description: 'Intelligent SaaS, built fast',
        to: '/capabilities/ai-product-engineering',
      },
      {
        label: 'AI Software PLM',
        description: 'Lifecycle, accelerated',
        to: '/services/ai-software-plm',
      },
      {
        label: 'Legacy Maintenance',
        description: 'Modernize safely',
        to: '/services/legacy-maintenance',
      },
      {
        label: 'Knowledge Graphs',
        description: 'Deterministic data modeling',
        to: '/services/knowledge-graphs',
      },
      {
        label: 'UI/UX Modernization',
        description: 'Consumer-grade enterprise UX',
        to: '/services/ui-ux-modernization',
      },
      {
        label: 'Technology Stack',
        description: 'Our engineering toolkit',
        to: '/technologies',
      },
    ],
  },
  {
    id: 'engagement',
    label: 'Engagement',
    items: [
      {
        label: 'Micro GCC as a Service',
        description: 'Your innovation hub in weeks',
        to: '/engagement/micro-gcc',
      },
      {
        label: 'On-Demand Talent Pods',
        description: 'AI-enhanced engineering pods',
        to: '/engagement/talent-pods',
      },
      {
        label: 'Case Studies',
        description: "Outcomes we've delivered",
        to: '/case-studies',
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    items: [
      {
        label: 'Real Estate & PropTech',
        description: 'AI listings, bots & insights',
        to: '/industries/real-estate',
      },
      {
        label: 'Healthcare Technology',
        description: 'EHR, integrations & patient access',
        to: '/industries/healthcare',
      },
      {
        label: 'Pharma & Life Sciences',
        description: 'Pricing, GtN & Rx workflows',
        to: '/industries/pharma',
      },
      {
        label: 'Manufacturing & Supply Chain',
        description: 'Digital twins & compliance',
        to: '/industries/manufacturing',
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    items: [
      {
        label: 'About Us',
        description: 'Engineering discipline since 2006',
        to: '/#why',
      },
      {
        label: 'Careers',
        description: 'Build with us',
        to: '/#careers',
      },
      {
        label: 'Insights',
        description: 'Ideas & engineering notes',
        to: '/contact',
      },
      {
        label: 'Blogs',
        description: 'Latest from zCon',
        to: '/contact',
      },
    ],
  },
]
