import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Globe2, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { navGroups, type NavGroup } from '@/data/navigation'

function DesktopDropdown({
  group,
  open,
  onOpen,
  onClose,
}: {
  group: NavGroup
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const closeTimer = useRef<number | null>(null)

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => onClose(), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose()
        onOpen()
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? onClose() : onOpen())}
        className={cn(
          'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          open ? 'text-foreground' : 'text-foreground/75 hover:text-foreground',
        )}
      >
        {group.label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-0 top-full z-50 pt-3"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="min-w-[280px] overflow-hidden rounded-2xl border border-border bg-background/95 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:bg-card/95">
              <ul className="flex flex-col">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-muted"
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || mobileOpen
          ? 'border-b border-border/80 bg-background/85 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          to="/"
          aria-label="zCon Solutions home"
          onClick={() => {
            setActiveMenu(null)
            setMobileOpen(false)
          }}
          className="shrink-0"
        >
          <Logo variant="wordmark" size="lg" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navGroups.map((group) => (
            <DesktopDropdown
              key={group.id}
              group={group}
              open={activeMenu === group.id}
              onOpen={() => setActiveMenu(group.id)}
              onClose={() => setActiveMenu((current) => (current === group.id ? null : current))}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-2 text-sm text-muted-foreground xl:flex">
            <Globe2 className="h-4 w-4 text-primary" />
            <span>Serving clients worldwide</span>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v)
              setActiveMenu(null)
            }}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-h-[min(70vh,640px)] w-full max-w-6xl flex-col gap-1 overflow-y-auto px-5 py-4 sm:px-8">
              {navGroups.map((group) => {
                const expanded = mobileExpanded === group.id
                return (
                  <div key={group.id} className="rounded-2xl border border-border/70 bg-card/40">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((current) => (current === group.id ? null : group.id))
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground"
                    >
                      {group.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 text-muted-foreground transition-transform',
                          expanded && 'rotate-180',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <ul className="flex flex-col gap-0.5 px-2 pb-3">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-xl px-3 py-2.5 hover:bg-muted"
                                >
                                  <span className="block text-sm font-medium text-foreground">
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-muted-foreground">
                                    {item.description}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                )
              })}

              <div className="mt-3 flex items-center gap-2 px-1 text-sm text-muted-foreground">
                <Globe2 className="h-4 w-4 text-primary" />
                Serving clients worldwide
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
