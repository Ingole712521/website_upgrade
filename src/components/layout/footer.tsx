import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/logo'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'AI Product Engineering', to: '/#services' },
      { label: 'Legacy Modernization', to: '/#services' },
      { label: 'Knowledge Graph Engineering', to: '/#services' },
      { label: 'Micro GCC as a Service', to: '/#micro-gcc' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', to: '/#industries' },
      { label: 'Case Studies', to: '/#work' },
      { label: 'Careers', to: '/#careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Technology', to: '/#technology' },
      { label: 'Delivery Process', to: '/#process' },
      { label: 'Why zCon', to: '/#why' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="zCon Solutions home">
              <Logo variant="wordmark" size="lg" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-first enterprise engineering and innovation partner. Engineering tomorrow&apos;s
              enterprise since 2006.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Pune, India · Delaware, USA
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} zCon Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 font-mono text-xs text-muted-foreground">
            <span>ISO 9001</span>
            <span>ISO 27001</span>
            <Link to="/" className="transition-colors hover:text-foreground">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
