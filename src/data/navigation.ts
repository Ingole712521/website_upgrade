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
        to: '/#services',
      },
      {
        label: 'AI Software PLM',
        description: 'Lifecycle, accelerated',
        to: '/#services',
      },
      {
        label: 'Legacy Maintenance',
        description: 'Modernize safely',
        to: '/#services',
      },
      {
        label: 'Knowledge Graphs',
        description: 'Deterministic data modeling',
        to: '/#services',
      },
      {
        label: 'UI/UX Modernization',
        description: 'Consumer-grade enterprise UX',
        to: '/#services',
      },
      {
        label: 'Technology Stack',
        description: 'Our engineering toolkit',
        to: '/#technology',
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
        to: '/#micro-gcc',
      },
      {
        label: 'On-Demand Talent Pods',
        description: 'AI-enhanced engineering pods',
        to: '/#careers',
      },
      {
        label: 'Case Studies',
        description: "Outcomes we've delivered",
        to: '/#work',
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
        to: '/#industries',
      },
      {
        label: 'Healthcare Technology',
        description: 'EHR, integrations & patient access',
        to: '/#industries',
      },
      {
        label: 'Pharma & Life Sciences',
        description: 'Pricing, GtN & Rx workflows',
        to: '/#industries',
      },
      {
        label: 'Manufacturing & Supply Chain',
        description: 'Digital twins & compliance',
        to: '/#industries',
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
