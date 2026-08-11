import { cn } from '@/lib/utils'

const wordmarkSizeMap = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
} as const

const markSizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
} as const

type LogoSize = keyof typeof wordmarkSizeMap

export function Logo({
  className,
  size = 'md',
  variant = 'wordmark',
  alt = 'zCon Solutions',
}: {
  className?: string
  size?: LogoSize
  /** wordmark = horizontal navbar logo; mark = square icon */
  variant?: 'wordmark' | 'mark'
  alt?: string
}) {
  if (variant === 'mark') {
    return (
      <img
        src="/Logo/zcon-mark.png"
        alt={alt}
        width={172}
        height={172}
        decoding="async"
        className={cn(markSizeMap[size], 'shrink-0 object-contain', className)}
      />
    )
  }

  return (
    <img
      src="/Logo/zcon-wordmark.png"
      alt={alt}
      width={164}
      height={91}
      decoding="async"
      className={cn(wordmarkSizeMap[size], 'w-auto shrink-0 object-contain', className)}
    />
  )
}
