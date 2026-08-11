import { cn } from '@/lib/utils'

const markSizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
} as const

const wordmarkSizeMap = {
  sm: 'h-9 w-[7.25rem]',
  md: 'h-11 w-[9.5rem]',
  lg: 'h-12 w-[11rem]',
  xl: 'h-14 w-[13rem]',
} as const

type LogoSize = keyof typeof markSizeMap

export function Logo({
  className,
  size = 'md',
  variant = 'wordmark',
  alt = 'zCon Solutions',
}: {
  className?: string
  size?: LogoSize
  /** wordmark = cropped wide navbar logo; mark = square icon */
  variant?: 'wordmark' | 'mark'
  alt?: string
}) {
  if (variant === 'mark') {
    return (
      <span
        className={cn(
          'relative inline-flex shrink-0 overflow-hidden rounded-[10px] bg-black ring-1 ring-border/60',
          markSizeMap[size],
          className,
        )}
      >
        <img
          src="/Logo/zcon.png"
          alt={alt}
          width={144}
          height={144}
          decoding="async"
          className="h-full w-full scale-[2.2] object-cover object-center"
        />
      </span>
    )
  }

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center overflow-hidden rounded-xl bg-black ring-1 ring-white/10',
        wordmarkSizeMap[size],
        className,
      )}
    >
      <img
        src="/Logo/zcon.png"
        alt={alt}
        width={220}
        height={80}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[2.45] object-cover object-center"
      />
    </span>
  )
}
