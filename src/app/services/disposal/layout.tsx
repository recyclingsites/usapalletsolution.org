import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Disposal | Request Removal Through Partner Suppliers',
  description: 'Have broken or unwanted pallets to clear? Send a free, no-obligation disposal request and we pass it to partner suppliers. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/disposal/' },
}

export default function DisposalLayout({ children }: { children: React.ReactNode }) {
  return children
}
