import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Selling Service | Buy Quality Pallets Delivered Nationwide with Reliability Today',
  description: 'Order graded pallets in bulk with consistent specs, competitive pricing, and on-time delivery across the US.',
  alternates: { canonical: '/services/selling/' },
}

export default function SellingLayout({ children }: { children: React.ReactNode }) {
  return children
}
