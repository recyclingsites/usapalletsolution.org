import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Transportation | Nationwide Pickup, Backhaul and Delivery Logistics You Trust Services',
  description: 'Schedule reliable pallet transport, backhauls, and LTL or FTL deliveries with tracking across the US.',
  alternates: { canonical: '/services/transportation/' },
}

export default function TransportationLayout({ children }: { children: React.ReactNode }) {
  return children
}
