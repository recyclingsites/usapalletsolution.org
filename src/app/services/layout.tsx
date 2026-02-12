import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Services | Buying, Selling, Recycling, Repair and Nationwide Transportation Solutions Today',
  description: 'Full-service pallet partner for sourcing, recovery, repair, and logistics across all 50 states.',
  alternates: { canonical: '/services/' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
