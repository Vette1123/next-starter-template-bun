import type { Metadata } from 'next'

import '@/styles/globals.css'

import { ThemeProvider } from '@/providers/theme-provider'

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from '@/config/shared-metadata'
import { calSans, fontInter } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import Background from '@/components/background'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...twitterMetadata,
  },
  openGraph: {
    ...ogMetadata,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fontInter.className, calSans.variable, 'antialiased')}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Background>{children}</Background>
          <Toaster richColors />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
