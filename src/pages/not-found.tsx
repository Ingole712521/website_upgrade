import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/logo'

export function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <img
        src="/Logo/404notFound.png"
        alt="Page not found"
        className="mb-8 h-auto w-full max-w-md object-contain"
        loading="eager"
        decoding="async"
      />
      <Logo size="lg" className="mb-6" />
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to home
      </Link>
    </main>
  )
}
