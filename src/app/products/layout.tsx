import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Products | Wooden, Plastic, Metal, Custom and Export Solutions Nationwide Available',
  description: 'Browse wooden, plastic, metal, custom, accessories, and export-ready pallets with rapid nationwide delivery.',
  alternates: { canonical: '/products/' },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
