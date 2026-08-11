import { cn } from '@/lib/utils'

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
} as const

type LogoSize = keyof typeof sizeMap

export function Logo({
  className,
  size = 'md',
  alt = 'zCon Solutions',
}: {
  className?: string
  size?: LogoSize
  alt?: string
}) {
  return (
    <img
      src="/Logo/zcon.png"
      alt={alt}
      width={144}
      height={144}
      decoding="async"
      className={cn(
        sizeMap[size],
        'shrink-0 rounded-[10px] object-cover ring-1 ring-border/60',
        className,
      )}
    />
  )
}
