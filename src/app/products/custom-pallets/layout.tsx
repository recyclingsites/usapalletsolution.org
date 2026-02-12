import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Pallets | Engineered Dimensions, Materials and Printing for Unique Loads Nationwide',
  description: 'Design custom-sized pallets with tailored materials, branding, and compliance to match specialized loads.',
  alternates: { canonical: '/products/custom-pallets/' },
}

export default function CustomPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
