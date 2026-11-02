import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wooden Pallets | New, Used, Heat-Treated and Block Pallet Options',
  description: 'Compare new, used, heat-treated, and block wooden pallets and common sizes. Available through partner suppliers; pricing is by quote.',
  alternates: { canonical: '/products/wooden-pallets/' },
}

export default function WoodenPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
