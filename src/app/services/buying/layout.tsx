import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Buying | Sell Used Pallets to Partner Suppliers',
  description: 'Have used or surplus pallets? Send a free, no-obligation quote request and partner suppliers may buy them. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/buying/' },
}

export default function BuyingLayout({ children }: { children: React.ReactNode }) {
  return children
}
