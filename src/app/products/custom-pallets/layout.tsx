import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Pallets | Non-Standard Sizes, Materials and Features by Quote',
  description: 'Send your dimensions, load, and material needs in a free quote request. Partner suppliers that build to order can review your specifications.',
  alternates: { canonical: '/products/custom-pallets/' },
}

export default function CustomPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
