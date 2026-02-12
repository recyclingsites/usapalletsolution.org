import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metal Pallets | Steel and Aluminum Heavy-Duty Pallets for Demanding Loads Nationwide',
  description: 'Order durable steel and aluminum pallets for heavy, high-heat, or closed-loop applications across the country.',
  alternates: { canonical: '/products/metal-pallets/' },
}

export default function MetalPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
