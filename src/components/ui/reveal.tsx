import { motion, type HTMLMotionProps, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const motionEase = [0.21, 0.47, 0.32, 0.98] as const

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: motionEase },
  },
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'span' | 'li'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: motionEase, delay }}
    >
      {children}
    </MotionTag>
  )
}

type MotionSectionProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  className?: string
  delay?: number
}

/** Consistent scroll-in wrapper for homepage blocks */
export function MotionSection({ children, className, delay = 0, ...props }: MotionSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
