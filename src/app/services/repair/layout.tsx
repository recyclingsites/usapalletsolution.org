import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Repair | Request Repairs Through Partner Suppliers',
  description: 'Have damaged pallets worth fixing? Send a free, no-obligation request for pallet repair and we pass it to partner suppliers. Availability depends on partner suppliers.',
  alternates: { canonical: '/services/repair/' },
}

export default function RepairLayout({ children }: { children: React.ReactNode }) {
  return children
}
