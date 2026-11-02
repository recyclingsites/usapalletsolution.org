import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Pallet Quote Requests From Across the United States',
  description: 'Find your state and send a free, no-obligation pallet quote request. Requests from across the US go to partner suppliers; availability depends on partner suppliers.',
  alternates: { canonical: '/locations/' },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
