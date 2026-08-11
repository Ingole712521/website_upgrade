import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from '@/components/providers'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (!el) return

      requestAnimationFrame(() => {
        if (lenis) {
          lenis.scrollTo(el, { offset: -80, duration: 1.1 })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      })
      return
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, lenis])

  return null
}
