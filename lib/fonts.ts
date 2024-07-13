import { JetBrains_Mono as FontMono, Inter } from 'next/font/google'
import LocalFont from 'next/font/local'

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})
