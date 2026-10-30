import type { Metadata } from 'next'
import { getCityBySlug } from '@/data/locations'

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export async function generateMetadata(
  { params }: { params: Promise<{ state: string; city: string }> }
): Promise<Metadata> {
  const { state, city } = await params
  const result = getCityBySlug(state, city)
  const stateName = result?.state.name ?? toTitleCase(state)
  const cityName = result?.city.name ?? toTitleCase(city)

  return {
    title: `Pallet Services in ${cityName}, ${stateName} | Supply, Recycling and Pickup`,
    description: `Send a free pallet quote request from ${cityName}, ${stateName} for supply, recycling or pickup. It goes to partner suppliers; availability depends on partner suppliers.`,
    alternates: { canonical: `/locations/${state}/${city}/` },
  }
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return children
}
