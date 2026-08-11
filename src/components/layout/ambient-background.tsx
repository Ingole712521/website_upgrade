import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbARef = useRef<HTMLDivElement>(null)
  const orbBRef = useRef<HTMLDivElement>(null)
  const orbCRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let raf = 0
    let running = true

    const accent = { r: 244, g: 63, b: 94 }
    const primary = { r: 58, g: 174, b: 240 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(54, Math.floor((width * height) / 28000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains('dark')
      const linkDist = Math.min(160, width * 0.14)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist > linkDist) continue
          const alpha = (1 - dist / linkDist) * (isDark ? 0.16 : 0.12)
          const tone = i % 2 === 0 ? primary : accent
          ctx.strokeStyle = `rgba(${tone.r},${tone.g},${tone.b},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }

        const tone = i % 3 === 0 ? accent : primary
        ctx.fillStyle = `rgba(${tone.r},${tone.g},${tone.b},${isDark ? 0.55 : 0.4})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    const orbTween = gsap.timeline({ repeat: -1, yoyo: true })
    if (orbARef.current) {
      orbTween.to(
        orbARef.current,
        { x: 80, y: 40, scale: 1.08, duration: 10, ease: 'sine.inOut' },
        0,
      )
    }
    if (orbBRef.current) {
      orbTween.to(
        orbBRef.current,
        { x: -60, y: -50, scale: 1.12, duration: 12, ease: 'sine.inOut' },
        0,
      )
    }
    if (orbCRef.current) {
      orbTween.to(
        orbCRef.current,
        { x: 40, y: -70, scale: 1.06, duration: 14, ease: 'sine.inOut' },
        0,
      )
    }
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPosition: '56px 56px',
        duration: 28,
        ease: 'none',
        repeat: -1,
      })
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        raf = requestAnimationFrame(draw)
        orbTween.play()
      } else {
        cancelAnimationFrame(raf)
        orbTween.pause()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      orbTween.kill()
      gsap.killTweensOf([orbARef.current, orbBRef.current, orbCRef.current, gridRef.current])
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--foreground) 7%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 7%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 75%)',
        }}
      />

      <div
        ref={orbARef}
        className="absolute top-[-8%] left-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.18),transparent_68%)] blur-3xl will-change-transform dark:bg-[radial-gradient(circle,rgba(244,63,94,0.2),transparent_68%)]"
      />
      <div
        ref={orbBRef}
        className="absolute top-[18%] right-[-6%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(58,174,240,0.14),transparent_68%)] blur-3xl will-change-transform dark:bg-[radial-gradient(circle,rgba(58,174,240,0.16),transparent_68%)]"
      />
      <div
        ref={orbCRef}
        className="absolute bottom-[8%] left-[35%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.08),transparent_70%)] blur-3xl will-change-transform"
      />

      <canvas ref={canvasRef} className="absolute inset-0 opacity-80 dark:opacity-90" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
    </div>
  )
}
