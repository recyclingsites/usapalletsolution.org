import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Size Guide | Standard and Custom Pallet Dimensions, Weights and Clearances',
  description: 'Compare common pallet dimensions and choose the right footprint, height, and clearance for your loads.',
  alternates: { canonical: '/sizes/' },
}

export default function SizesLayout({ children }: { children: React.ReactNode }) {
  return children
}
