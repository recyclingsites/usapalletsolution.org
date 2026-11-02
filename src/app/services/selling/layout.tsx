import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Selling | Buy New and Used Pallets From Partner Suppliers',
  description: 'Need pallets? Send a free, no-obligation quote request for new or used pallets and we pass it to partner suppliers. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/selling/' },
}

export default function SellingLayout({ children }: { children: React.ReactNode }) {
  return children
}
