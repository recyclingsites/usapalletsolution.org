'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AccessoriesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/products" className="text-primary-400 hover:text-primary-300">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Accessories</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Pallet Accessories</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Complete your pallet solution with our range of accessories</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto"><ContactForm productType="Pallet Accessories" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Pallet Collars',
                description: 'Foldable wooden or plastic collars to increase pallet height',
                features: ['Stackable design', 'Easy assembly', 'Various heights', 'Reusable'],
                icon: '📦',
              },
              {
                title: 'Corner Protectors',
                description: 'Protect edges and corners during shipping and storage',
                features: ['Cardboard or plastic', 'Various sizes', 'Bulk quantities', 'Cost-effective'],
                icon: '🛡️',
              },
              {
                title: 'Strapping & Bands',
                description: 'Secure loads with high-quality strapping materials',
                features: ['Steel strapping', 'Polyester strapping', 'Tools & seals', 'All grades'],
                icon: '🔗',
              },
              {
                title: 'Pallet Covers',
                description: 'Weather-resistant covers and shrink wrap',
                features: ['UV protection', 'Waterproof', 'Custom sizes', 'Disposable/reusable'],
                icon: '🎪',
              },
              {
                title: 'Slip Sheets',
                description: 'Alternative to pallets for push-pull operations',
                features: ['Plastic or paperboard', 'Space saving', 'Lightweight', 'Eco-friendly'],
                icon: '📄',
              },
              {
                title: 'Anti-Slip Mats',
                description: 'Prevent load shifting during transport',
                features: ['Rubber or foam', 'Easy to apply', 'Reusable', 'Various sizes'],
                icon: '⚠️',
              },
              {
                title: 'Pallet Inverters',
                description: 'Equipment for rotating palletized loads',
                features: ['Manual & electric', 'Safety features', 'Various capacities', 'Durable'],
                icon: '🔄',
              },
              {
                title: 'Load Bars',
                description: 'Secure loads inside containers and trailers',
                features: ['Adjustable length', 'High strength', 'Easy installation', 'Rust resistant'],
                icon: '━',
              },
              {
                title: 'Pallet Labels',
                description: 'Identification and tracking labels',
                features: ['Barcode labels', 'Custom printing', 'Weather resistant', 'Strong adhesive'],
                icon: '🏷️',
              },
            ].map((accessory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-dark-800 p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/50 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{accessory.icon}</div>
                <h3 className="text-xl font-bold text-primary-400 mb-2 group-hover:text-secondary-400 transition-colors">
                  {accessory.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{accessory.description}</p>
                <ul className="space-y-1">
                  {accessory.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-secondary-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
