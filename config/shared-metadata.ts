import type { Metadata } from 'next'

import { siteConfig } from './site'

export const TITLE = siteConfig.name
export const DESCRIPTION = siteConfig.description

export const defaultMetadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  metadataBase: new URL(siteConfig.url),
}

export const twitterMetadata: Metadata['twitter'] = {
  title: TITLE,
  description: DESCRIPTION,
  card: 'summary_large_image',
  images: ['/api/og'],
}

export const ogMetadata: Metadata['openGraph'] = {
  title: TITLE,
  description: DESCRIPTION,
  type: 'website',
  images: ['/api/og'],
}
