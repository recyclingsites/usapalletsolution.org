import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pallet Resources and Glossary | Guides on Sizes, ISPM 15, Safety and Recycling',
  description: 'Practical guidance on pallet materials, grades, export treatment, safe handling and recycling, plus a glossary of common pallet terms.',
  alternates: { canonical: '/resources/' },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
