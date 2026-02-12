import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact USA Pallet Solution | Request Pallet Quotes or Support Nationwide Today',
  description: 'Call or message our team for pallet sales, recycling, transport, repair, or emergency support anywhere in the US.',
  alternates: { canonical: '/contact/' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
