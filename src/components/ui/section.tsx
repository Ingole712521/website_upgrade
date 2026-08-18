import {
  Children,
  forwardRef,
  isValidElement,
  useState,
  type ComponentProps,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'
import { RollingText } from '@/components/ui/rolling-text'

function extractLabel(children: ReactNode): { label: string; extras: ReactNode[] } {
  const extras: ReactNode[] = []
  const parts: string[] = []

  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      parts.push(String(child))
      return
    }
    if (isValidElement(child)) {
      extras.push(child)
    }
  })

  return { label: parts.join('').replace(/\s+/g, ' ').trim(), extras }
}

export function CtaButton({
  children,
  variant = 'primary',
  className,
  rolling,
  ...props
}: ComponentProps<'a'> & {
  variant?: 'primary' | 'outline' | 'ghost'
  /** Staggered rolling label. Defaults on for outline/ghost, off for primary. */
  rolling?: boolean
}) {
  const styles = {
    primary:
      'bg-primary text-primary-foreground hover:bg-foreground hover:text-background',
    outline:
      'border border-foreground/25 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
    ghost: 'text-foreground/70 hover:text-foreground',
  }

  const enableRolling = rolling ?? (variant === 'outline' || variant === 'ghost')
  const [hovered, setHovered] = useState(false)
  const { label, extras } = extractLabel(children)

  return (
    <a
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2 rounded-sm px-5 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        styles[variant],
        className,
      )}
      {...props}
      aria-label={enableRolling && label ? label : props['aria-label']}
      onMouseEnter={(e) => {
        if (enableRolling) setHovered(true)
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        if (enableRolling) setHovered(false)
        props.onMouseLeave?.(e)
      }}
      onFocus={(e) => {
        if (enableRolling) setHovered(true)
        props.onFocus?.(e)
      }}
      onBlur={(e) => {
        if (enableRolling) setHovered(false)
        props.onBlur?.(e)
      }}
    >
      {enableRolling && label ? (
        <>
          <RollingText text={label} active={hovered} />
          {extras}
        </>
      ) : (
        children
      )}
    </a>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      <span className="h-px w-6 bg-primary" aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <Reveal>
        <Eyebrow className={align === 'center' ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}

export const Section = forwardRef<
  HTMLElement,
  {
    id?: string
    children: ReactNode
    className?: string
  }
>(function Section({ id, children, className }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn('scroll-mt-24 px-5 py-20 sm:px-8 md:py-28', className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
})
