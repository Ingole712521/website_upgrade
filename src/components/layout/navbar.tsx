import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ChevronDown, Globe2, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { navGroups, type NavGroup } from '@/data/navigation'

const easeOut = [0.21, 0.47, 0.32, 0.98] as const

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
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="absolute left-0 top-full z-50 pt-3"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="min-w-[280px] overflow-hidden rounded-2xl border border-border bg-background/95 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:bg-card/95">
              <ul className="flex flex-col">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.22, ease: easeOut }}
                  >
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
                  </motion.li>
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
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 12)
  })

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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <motion.div
        layout
        className={cn(
          'pointer-events-auto relative flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:px-4',
          scrolled || mobileOpen
            ? 'border-border/80 bg-background/80 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl'
            : 'border-border/40 bg-background/45 backdrop-blur-md',
        )}
      >
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

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.22, ease: easeOut }}
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-xl backdrop-blur-xl lg:hidden"
            >
              <nav className="flex max-h-[min(70vh,640px)] flex-col gap-1 overflow-y-auto p-3">
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
                        <motion.span
                          animate={{ rotate: expanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </motion.span>
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

                <div className="mt-2 flex items-center gap-2 px-2 pb-1 text-sm text-muted-foreground">
                  <Globe2 className="h-4 w-4 text-primary" />
                  Serving clients worldwide
                </div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
