'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WoodenPalletsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6 text-sm">
              <Link href="/products" className="text-primary-400 hover:text-primary-300">
                Products
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Wooden Pallets</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Wooden Pallets</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              The standard choice for most material handling, available through partner suppliers in our network
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="Wooden Pallets" />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-400">Product Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Wooden pallets are built to handle shipping, storage, and repeated forklift use, and they are
                easy to repair. Through partner suppliers you can request new or used pallets in common sizes
                and specifications. Availability depends on partner suppliers, and pricing is by quote.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                If your pallets will ship abroad, ask for ISPM 15 heat treatment, which means a core temperature
                of 56 °C for 30 minutes, with the IPPC mark on the pallet. Check current regulations for your destination.
              </p>
            </motion.div>

            {/* Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-secondary-400">Available Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'New Wooden Pallets',
                    description: 'Newly built pallets, including to your specifications',
                    features: ['New lumber', 'Custom sizes', 'Consistent dimensions', 'Heat treatment on request'],
                  },
                  {
                    title: 'Used Wooden Pallets',
                    description: 'Recycled and repaired pallets, usually lower in cost than new',
                    features: ['Grade A & B options', 'Cost-effective', 'Reuses an existing pallet', 'Various sizes'],
                  },
                  {
                    title: 'Heat-Treated Pallets',
                    description: 'ISPM 15 treated pallets for international shipping',
                    features: ['56 °C for 30 minutes core temperature', 'IPPC mark on the pallet', 'Used for export', 'Check current regulations'],
                  },
                  {
                    title: 'Block Pallets',
                    description: '4-way entry pallets for flexible handling',
                    features: ['All-side access', 'Heavy-duty', 'Stable stacking', 'Forklift & pallet jack'],
                  },
                ].map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 p-6 rounded-xl border border-primary-500/20"
                  >
                    <h3 className="text-xl font-bold text-primary-400 mb-2">{type.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="text-secondary-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-primary-400">Common Specifications</h2>
              <div className="bg-dark-800 rounded-xl border border-primary-500/20 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-primary-500/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-primary-400 font-semibold">Size</th>
                      <th className="px-6 py-4 text-left text-primary-400 font-semibold">Dimensions</th>
                      <th className="px-6 py-4 text-left text-primary-400 font-semibold">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500/10">
                    {[
                      { size: 'Standard GMA', dimensions: '48" × 40"', use: 'General shipping and grocery distribution' },
                      { size: 'Euro Pallet', dimensions: '1200 × 800 mm (47.2" × 31.5")', use: 'European distribution' },
                      { size: 'Half Pallet', dimensions: '48" × 20"', use: 'Smaller loads and retail displays' },
                      { size: 'Custom Size', dimensions: 'Made to order', use: 'Non-standard loads' },
                    ].map((spec, index) => (
                      <tr key={index} className="hover:bg-primary-500/5 transition-colors">
                        <td className="px-6 py-4 text-gray-300">{spec.size}</td>
                        <td className="px-6 py-4 text-gray-400">{spec.dimensions}</td>
                        <td className="px-6 py-4 text-secondary-400">{spec.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-secondary-400">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '💪', title: 'Durable', description: 'Stands up to repeated handling and can be repaired' },
                  { icon: '♻️', title: 'Sustainable', description: 'Reusing a pallet avoids building a new one' },
                  { icon: '💰', title: 'Cost-Effective', description: 'Usually the lowest purchase cost of the common materials' },
                  { icon: '🌍', title: 'Versatile', description: 'Suitable for various applications' },
                  { icon: '✓', title: 'Export Option', description: 'Can be heat-treated and marked under ISPM 15' },
                  { icon: '📦', title: 'Easy to Source', description: 'Common sizes are widely used; availability depends on partner suppliers' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-center p-6 bg-dark-800 rounded-xl border border-secondary-500/20"
                  >
                    <div className="text-4xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-secondary-400 mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
