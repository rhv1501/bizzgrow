import { MetadataRoute } from 'next'
import { siteConfig } from './utils/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/', '/_next/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}