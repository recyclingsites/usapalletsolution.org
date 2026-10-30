import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Size Guide | Standard North American and International Pallet Dimensions',
  description: 'Compare common pallet dimensions by industry and region, learn how load capacity works, and send a free quote request to partner suppliers.',
  alternates: { canonical: '/sizes/' },
}

export default function SizesLayout({ children }: { children: React.ReactNode }) {
  return children
}
