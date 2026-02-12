import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Recycling | Sustainable Recovery, Grinding and Reuse Programs Nationwide For Businesses',
  description: 'Divert pallet waste from landfills with repair, recycling, grinding, and sustainable reuse programs nationwide.',
  alternates: { canonical: '/services/recycling/' },
}

export default function RecyclingLayout({ children }: { children: React.ReactNode }) {
  return children
}
