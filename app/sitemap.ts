import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

const addPathToBaseURL = (path: string) => `${siteConfig.baseURL}${path}`

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    // add the rest of your routes here
  ].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }))

  return [...routes]
}
