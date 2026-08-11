import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Logo } from '@/components/layout/logo'
import { staggerContainer, staggerItem } from '@/components/ui/reveal'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'AI Product Engineering', to: '/capabilities/ai-product-engineering' },
      { label: 'AI Software PLM', to: '/services/ai-software-plm' },
      { label: 'Legacy Maintenance', to: '/services/legacy-maintenance' },
      { label: 'Knowledge Graphs', to: '/services/knowledge-graphs' },
      { label: 'UI/UX Modernization', to: '/services/ui-ux-modernization' },
    ],
  },
  {
    title: 'Engagement',
    links: [
      { label: 'Micro GCC', to: '/engagement/micro-gcc' },
      { label: 'Talent Pods', to: '/engagement/talent-pods' },
      { label: 'Case Studies', to: '/case-studies' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Real Estate', to: '/industries/real-estate' },
      { label: 'Healthcare', to: '/industries/healthcare' },
      { label: 'Pharma', to: '/industries/pharma' },
      { label: 'Manufacturing', to: '/industries/manufacturing' },
    ],
  },
]

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className="border-t border-border bg-card/40 px-5 py-14 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <motion.div variants={staggerItem}>
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
          </motion.div>

          {columns.map((column) => (
            <motion.div key={column.title} variants={staggerItem}>
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
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={staggerItem}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
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
        </motion.div>
      </div>
    </motion.footer>
  )
}
