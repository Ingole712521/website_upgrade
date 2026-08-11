import { useState, type ComponentProps, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const rollEase = [0.22, 1, 0.36, 1] as const
const STAGGER = 0.022
const DURATION = 0.42

function CharLine({
  text,
  active,
  role,
}: {
  text: string
  active: boolean
  /** outgoing starts at 0 and rolls down; incoming starts above and settles */
  role: 'out' | 'in'
}) {
  const chars = Array.from(text)

  return (
    <span className={cn('flex whitespace-pre', role === 'in' && 'absolute inset-0')} aria-hidden>
      {chars.map((char, i) => {
        const delay = i * STAGGER
        const y =
          role === 'out' ? (active ? '100%' : '0%') : active ? '0%' : '-100%'

        return (
          <motion.span
            key={`${role}-${i}-${char}`}
            className="inline-block"
            initial={false}
            animate={{ y }}
            transition={{ duration: DURATION, ease: rollEase, delay }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </span>
  )
}

/**
 * Staggered rolling text for hover/focus labels.
 * Use on secondary / outline buttons — not primary CTAs or form submits.
 */
export function RollingText({
  text,
  className,
  active: controlledActive,
}: {
  text: string
  className?: string
  /** Optional controlled hover (when parent owns hover state) */
  active?: boolean
}) {
  const reduce = useReducedMotion()
  const [localActive, setLocalActive] = useState(false)
  const active = controlledActive ?? localActive

  if (reduce) {
    return <span className={className}>{text}</span>
  }

  const interactive = controlledActive === undefined

  return (
    <span
      className={cn('relative inline-flex overflow-hidden leading-none', className)}
      onMouseEnter={interactive ? () => setLocalActive(true) : undefined}
      onMouseLeave={interactive ? () => setLocalActive(false) : undefined}
      onFocus={interactive ? () => setLocalActive(true) : undefined}
      onBlur={interactive ? () => setLocalActive(false) : undefined}
    >
      <span className="invisible whitespace-pre" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0 overflow-hidden">
        <CharLine text={text} active={active} role="out" />
        <CharLine text={text} active={active} role="in" />
      </span>
    </span>
  )
}

/** Text-style button with rolling label (not for primary / form submits). */
export function RollingTextButton({
  label,
  className,
  children,
  ...props
}: Omit<ComponentProps<'button'>, 'children'> & {
  label: string
  children?: ReactNode
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      className={cn('inline-flex items-center gap-1.5', className)}
      aria-label={label}
      {...props}
      onMouseEnter={(e) => {
        setHovered(true)
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        props.onMouseLeave?.(e)
      }}
      onFocus={(e) => {
        setHovered(true)
        props.onFocus?.(e)
      }}
      onBlur={(e) => {
        setHovered(false)
        props.onBlur?.(e)
      }}
    >
      <RollingText key={label} text={label} active={hovered} />
      {children}
    </button>
  )
}

/** Router link with rolling label. */
export function RollingTextLink({
  label,
  className,
  children,
  ...props
}: Omit<LinkProps, 'children'> & {
  label: string
  children?: ReactNode
  className?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      className={cn('inline-flex items-center gap-1.5', className)}
      aria-label={label}
      {...props}
      onMouseEnter={(e) => {
        setHovered(true)
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        props.onMouseLeave?.(e)
      }}
      onFocus={(e) => {
        setHovered(true)
        props.onFocus?.(e)
      }}
      onBlur={(e) => {
        setHovered(false)
        props.onBlur?.(e)
      }}
    >
      <RollingText key={label} text={label} active={hovered} />
      {children}
    </Link>
  )
}
