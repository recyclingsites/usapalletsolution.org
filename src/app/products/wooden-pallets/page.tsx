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
              Premium quality wooden pallets - the industry standard for reliable material handling
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
                Our wooden pallets are crafted from high-quality lumber, designed to withstand the rigors
                of shipping, storage, and handling. Available in both new and refurbished conditions, we
                offer a wide range of sizes and specifications to meet your specific needs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                All our wooden pallets undergo thorough inspection and can be heat-treated to meet
                international shipping standards (ISPM 15 compliant).
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
                    description: 'Brand new pallets built to your specifications',
                    features: ['Premium lumber', 'Custom sizes', 'ISPM 15 certified', 'Maximum durability'],
                  },
                  {
                    title: 'Used Wooden Pallets',
                    description: 'Quality inspected recycled pallets at competitive prices',
                    features: ['Grade A & B options', 'Cost-effective', 'Environmentally friendly', 'Various sizes'],
                  },
                  {
                    title: 'Heat-Treated Pallets',
                    description: 'ISPM 15 compliant pallets for international shipping',
                    features: ['Export ready', 'Pest-free certification', 'Meets regulations', 'Stamped & certified'],
                  },
                  {
                    title: 'Block Pallets',
                    description: '4-way entry pallets for maximum versatility',
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
                      <th className="px-6 py-4 text-left text-primary-400 font-semibold">Load Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500/10">
                    {[
                      { size: 'Standard GMA', dimensions: '48" × 40"', capacity: 'Up to 4,600 lbs' },
                      { size: 'Euro Pallet', dimensions: '47.2" × 39.4"', capacity: 'Up to 4,400 lbs' },
                      { size: 'Half Pallet', dimensions: '48" × 20"', capacity: 'Up to 2,000 lbs' },
                      { size: 'Custom Size', dimensions: 'Made to order', capacity: 'Varies' },
                    ].map((spec, index) => (
                      <tr key={index} className="hover:bg-primary-500/5 transition-colors">
                        <td className="px-6 py-4 text-gray-300">{spec.size}</td>
                        <td className="px-6 py-4 text-gray-400">{spec.dimensions}</td>
                        <td className="px-6 py-4 text-secondary-400">{spec.capacity}</td>
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
                  { icon: '💪', title: 'Durable', description: 'Built to last with quality lumber' },
                  { icon: '♻️', title: 'Sustainable', description: 'Recyclable and repairable' },
                  { icon: '💰', title: 'Cost-Effective', description: 'Great value for your budget' },
                  { icon: '🌍', title: 'Versatile', description: 'Suitable for various applications' },
                  { icon: '✓', title: 'Compliant', description: 'Meets industry standards' },
                  { icon: '📦', title: 'Available', description: 'Large inventory in stock' },
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
