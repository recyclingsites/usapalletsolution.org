import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { FloatingContactButton } from '@/components/FloatingContactButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'USA Pallet Solution - Professional Pallet Services',
  description: 'Leading provider of new and used pallets, pallet recycling, transportation, and related services across the United States.',
  keywords: 'pallets, used pallets, pallet recycling, pallet transportation, industrial pallets, warehouse pallets',
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-warm-50 text-gray-800 antialiased">
        <Navigation />
        <div className="fixed inset-0 z-0">
          <img src="/images/back.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-50/80 via-light-50/70 to-primary-50/80"></div>
        </div>
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <FloatingContactButton />
        <footer className="bg-white border-t border-primary-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">USA Pallet Solution</h3>
                <p className="text-gray-600 text-sm">
                  Your trusted partner for all pallet needs. We specialize in buying, selling,
                  recycling, and transporting pallets across the United States.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-600 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-gray-600 hover:text-primary-500 transition-colors">About Us</a></li>
                  <li><a href="/products" className="text-gray-600 hover:text-primary-500 transition-colors">Products</a></li>
                  <li><a href="/services" className="text-gray-600 hover:text-primary-500 transition-colors">Services</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-600 mb-4">Contact Info</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
                  <li>Address: {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}</li>
                  <li>Hours: {process.env.NEXT_PUBLIC_BUSINESS_HOURS}</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-100 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} USA Pallet Solution. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
