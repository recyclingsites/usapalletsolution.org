import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Products | Wooden, Plastic, Metal, Custom and Export Options',
  description: 'Compare wooden, plastic, metal, custom, and export pallets plus accessories, then send a free quote request to partner suppliers in our network.',
  alternates: { canonical: '/products/' },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
