import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Recycling | Request Recycling Through Partner Suppliers',
  description: 'Send a free, no-obligation request for pallet recycling and reuse. We pass it to partner suppliers. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/recycling/' },
}

export default function RecyclingLayout({ children }: { children: React.ReactNode }) {
  return children
}
