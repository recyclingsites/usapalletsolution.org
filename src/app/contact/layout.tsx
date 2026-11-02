import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact USA Pallet Solution | Free Pallet Quote Request',
  description: 'Send a free, no-obligation pallet quote request. It goes to partner suppliers in our network; availability depends on partner suppliers.',
  alternates: { canonical: '/contact/' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
