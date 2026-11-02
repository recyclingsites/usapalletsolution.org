import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Export Pallets | ISPM 15 Heat-Treated Wood, Plastic and Presswood Options',
  description: 'Learn how ISPM 15 heat treatment and the IPPC mark work, then request a quote on export pallets from partner suppliers.',
  alternates: { canonical: '/products/export-pallets/' },
}

export default function ExportPalletsLayout({ children }: { children: React.ReactNode }) {
  return children
}
