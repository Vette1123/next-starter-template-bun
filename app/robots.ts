import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // replace this with your actual URL
    sitemap: 'https://www.openstatus.dev/sitemap.xml',
  }
}
