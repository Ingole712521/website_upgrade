import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/layout/theme-toggle'

const links = [
  { label: 'Services', to: '/#services' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Technology', to: '/#technology' },
  { label: 'Process', to: '/#process' },
  { label: 'Work', to: '/#work' },
  { label: 'Company', to: '/#leadership' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <div
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4',
          scrolled
            ? 'border-border bg-background/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link to="/" aria-label="zCon Solutions home" className="pl-0.5 sm:pl-1">
          <Logo variant="wordmark" size="md" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/#contact"
            className="hidden h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-10px_rgba(244,63,94,0.45)] transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Book Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[72px] rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-medium text-primary-foreground"
              >
                Book Consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
