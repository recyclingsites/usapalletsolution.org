import type { Metadata } from 'next'

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export async function generateMetadata(
  { params }: { params: Promise<{ state: string; city: string }> }
): Promise<Metadata> {
  const { state, city } = await params
  const stateName = toTitleCase(state)
  const cityName = toTitleCase(city)

  return {
    title: `Pallet Services in ${cityName}, ${stateName} | Supply, Recycling and Transport`,
    description: `Get pallets delivered, recycled, or hauled in ${cityName}, ${stateName} with trusted local support.`,
    alternates: {
      canonical: `/locations/${state}/${city}/`,
    },
  }
}
