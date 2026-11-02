import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metal Pallets | Steel and Aluminum Pallets for Heavy-Duty Loads',
  description: 'Compare steel and aluminum pallets for heavy or high-temperature applications. Available through partner suppliers; pricing is by quote.',
  alternates: { canonical: '/products/metal-pallets/' },
}

export default function MetalPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
