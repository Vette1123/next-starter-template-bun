import { SessionProvider } from 'next-auth/react'

import { MarketingFooter } from '@/components/marketing/marketing-footer'
import { MarketingHeader } from '@/components/marketing/marketing-header'

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 md:p-8">
        <MarketingHeader className="mx-auto w-full max-w-5xl" />
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center">
          {children}
        </div>
        <MarketingFooter className="mx-auto w-full max-w-5xl" />
      </main>
    </SessionProvider>
  )
}
