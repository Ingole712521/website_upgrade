import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
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
          'inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-colors',
          open ? 'text-foreground' : 'text-foreground/65 hover:text-foreground',
        )}
      >
        {group.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3 w-3" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: easeOut }}
            className="absolute left-0 top-full z-50 pt-2"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="min-w-[260px] border border-foreground/15 bg-background p-1">
              <ul className="flex flex-col">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2, ease: easeOut }}
                  >
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block border-l-2 border-transparent px-3.5 py-2.5 transition-colors hover:border-primary hover:bg-foreground/[0.04]"
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
    setScrolled(value > 8)
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
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300',
        scrolled || mobileOpen
          ? 'border-foreground/15 bg-background/95 backdrop-blur-sm'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="pointer-events-auto mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:h-16 sm:px-8">
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden border border-foreground/20 px-3 py-1.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v)
              setActiveMenu(null)
            }}
            className="grid h-9 w-9 place-items-center border border-foreground/20 text-foreground lg:hidden"
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
            transition={{ duration: 0.22, ease: easeOut }}
            className="pointer-events-auto border-t border-foreground/15 bg-background lg:hidden"
          >
            <nav className="mx-auto flex max-h-[min(70vh,640px)] max-w-6xl flex-col gap-0 overflow-y-auto px-5 py-3 sm:px-8">
              {navGroups.map((group) => {
                const expanded = mobileExpanded === group.id
                return (
                  <div key={group.id} className="border-b border-foreground/10 last:border-0">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((current) => (current === group.id ? null : group.id))
                      }
                      className="flex w-full items-center justify-between py-3.5 text-left font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground"
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
                          <ul className="flex flex-col gap-0.5 pb-3 pl-1">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={item.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block border-l-2 border-transparent py-2.5 pl-3 hover:border-primary"
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
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
