import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Nationwide Pallet Service Coverage Across All 50 States and Cities',
  description: 'Find pallet supply, recycling, and transport near you with service available in every state.',
  alternates: { canonical: '/locations/' },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
