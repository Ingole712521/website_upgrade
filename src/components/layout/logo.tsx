import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] bg-[#0096e6] shadow-[0_2px_12px_rgba(0,150,230,0.45)]">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M9 9h14L9 23h14"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-[#e11d48]" />
      </span>
      <span className="font-heading text-[1.35rem] font-bold leading-none tracking-tight text-foreground">
        zCon
        <span className="text-[#0096e6]">.</span>
      </span>
    </span>
  )
}
