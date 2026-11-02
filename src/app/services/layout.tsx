import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Services | Buying, Selling, Recycling and Repair Through Partner Suppliers',
  description: 'Request pallet buying, selling, recycling, repair, delivery or disposal through partner suppliers. Requests from across the US; availability depends on partner suppliers.',
  alternates: { canonical: '/services/' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
