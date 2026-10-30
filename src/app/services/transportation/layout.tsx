import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Transportation | Pickup and Delivery Through Partner Suppliers',
  description: 'Need pallets moved? Send a free, no-obligation quote request for pickup or delivery and we pass it to partner suppliers. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/transportation/' },
}

export default function TransportationLayout({ children }: { children: React.ReactNode }) {
  return children
}
