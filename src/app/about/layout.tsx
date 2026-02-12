import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About USA Pallet Solution | Nationwide Pallet Expertise and Reliability Since 2009',
  description: 'Learn our history, leadership, and commitment to sustainable pallet solutions across the United States.',
  alternates: { canonical: '/about/' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
