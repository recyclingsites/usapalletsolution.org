import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About USA Pallet Solution | How Our Pallet Referral Service Works',
  description: 'USA Pallet Solution passes pallet requests from across the US to partner suppliers. See how quotes work and what pallet grades mean.',
  alternates: { canonical: '/about/' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
