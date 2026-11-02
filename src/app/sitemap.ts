import type { MetadataRoute } from 'next'
import { statesData } from '@/data/locations'

export const dynamic = 'force-static'

const SITE_URL = 'https://usapalletsolution.org'

const STATIC_PATHS = [
  '/',
  '/about/',
  '/contact/',
  '/locations/',
  '/privacy-policy/',
  '/products/',
  '/products/accessories/',
  '/products/custom-pallets/',
  '/products/export-pallets/',
  '/products/metal-pallets/',
  '/products/plastic-pallets/',
  '/products/wooden-pallets/',
  '/resources/',
  '/services/',
  '/services/buying/',
  '/services/disposal/',
  '/services/recycling/',
  '/services/repair/',
  '/services/selling/',
  '/services/transportation/',
  '/sizes/',
  '/terms/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPaths = statesData.flatMap((state) => [
    `/locations/${state.slug}/`,
    ...state.cities.map((city) => `/locations/${state.slug}/${city.slug}/`),
  ])
  return [...STATIC_PATHS, ...locationPaths].map((path) => ({ url: `${SITE_URL}${path}` }))
}
