import type { Metadata } from 'next'

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params
  const stateName = toTitleCase(state)

  return {
    title: `Pallet Services in ${stateName} | Supply, Recycling, Repair and Transport Experts`,
    description: `Order pallets, recycling, and transport services anywhere in ${stateName} with rapid response.`,
    alternates: {
      canonical: `/locations/${state}/`,
    },
  }
}
