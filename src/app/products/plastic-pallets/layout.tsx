import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plastic Pallets | Rackable, Nestable and Stackable Pallet Options',
  description: 'Compare rackable, nestable, and stackable plastic pallets for washdown, closed-loop, and export use. Available through partner suppliers by quote.',
  alternates: { canonical: '/products/plastic-pallets/' },
}

export default function PlasticPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
