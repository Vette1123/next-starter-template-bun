import { ValidIcon } from '@/components/icons'

export type Page = {
  title: string
  subtitle?: string
  description: string
  href: string
  icon: ValidIcon
  disabled?: boolean
  segment: string
  children?: Page[]
}

export type MarketingPageType = Page
