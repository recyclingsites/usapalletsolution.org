import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Accessories | Collars, Covers, Strapping and Load Securing Supplies',
  description: 'Request quotes on pallet collars, slip sheets, corner protectors, strapping, and covers, available through partner suppliers.',
  alternates: { canonical: '/products/accessories/' },
}

export default function AccessoriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
