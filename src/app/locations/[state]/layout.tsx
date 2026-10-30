import type { Metadata } from 'next'
import { getStateBySlug } from '@/data/locations'

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params
  const stateName = getStateBySlug(state)?.name ?? toTitleCase(state)

  return {
    title: `Pallet Services in ${stateName} | Supply, Recycling and Repair Through Partner Suppliers`,
    description: `Request pallets, recycling, repair or pickup from ${stateName}. Your free, no-obligation request goes to partner suppliers; availability depends on partner suppliers.`,
    alternates: { canonical: `/locations/${state}/` },
  }
}

export default function StateLayout({ children }: { children: React.ReactNode }) {
  return children
}
