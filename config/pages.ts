import { MarketingPageType, Page } from '@/types/page'

export const marketingProductPagesConfig = [
  {
    href: '/features/monitoring',
    title: 'Monitoring',
    subtitle:
      'Get insights of the latency of your API and website from all over the world.',
    description: 'Monitor your API and website globally.',
    segment: 'features',
    icon: 'activity',
  },
  {
    href: '/features/status-page',
    title: 'Status Page',
    subtitle:
      'Easily report to your users with our public or private status page.',
    description: 'Create beautiful status pages within seconds.',
    segment: 'features',
    icon: 'panel-top',
  },
] as const satisfies MarketingPageType[]

export const marketingResourcePagesConfig = [
  {
    href: '/blog',
    title: 'Blog',
    description: 'All the latest articles and news from OpenStatus.',
    segment: 'blog',
    icon: 'book',
  },
  {
    href: '/changelog',
    title: 'Changelog',
    description: 'All the latest features, fixes and work to OpenStatus.',
    segment: 'changelog',
    icon: 'newspaper',
  },
  {
    href: '/play/checker',
    title: 'Speed Checker',
    description: 'Check your endpoints latency right away.',
    segment: 'checker',
    icon: 'gauge',
  },
  {
    href: '/play',
    title: 'Playground',
    description: 'All the latest tools build by OpenStatus.',
    segment: 'play',
    icon: 'toy-brick',
  },
] as const satisfies Page[]

export const marketingPagesConfig = [
  {
    href: '/product',
    title: 'Product',
    description: 'All product features for OpenStatus',
    segment: '',
    icon: 'package',
    children: marketingProductPagesConfig,
  },
  {
    href: '/resources',
    description: 'All resources for OpenStatus',
    title: 'Resources',
    segment: '',
    icon: 'library',
    children: marketingResourcePagesConfig,
  },
  {
    href: '/pricing',
    title: 'Pricing',
    description: 'The pricing for OpenStatus.',
    segment: 'pricing',
    icon: 'credit-card',
  },
  {
    href: '/',
    description: 'The documentation for OpenStatus.',
    title: 'Docs',
    segment: 'docs',
    icon: 'book',
  },
] satisfies Page[]
