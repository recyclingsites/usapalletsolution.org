'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MetalPalletsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/products" className="text-primary-400 hover:text-primary-300">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Metal Pallets</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Metal Pallets</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Industrial-grade steel pallets for heavy-duty applications</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto"><ContactForm productType="Metal Pallets" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-400">Unmatched Durability</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Metal pallets are the ultimate choice for extreme conditions and heavy loads. Built from high-grade steel,
              they offer unparalleled strength, fire resistance, and longevity. Perfect for automotive, chemical,
              and heavy manufacturing industries.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-secondary-400">Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Maximum Load Capacity', description: 'Handle loads up to 10,000+ lbs', icon: '💪' },
                { title: 'Fire Resistant', description: 'Safe for high-temperature environments', icon: '🔥' },
                { title: 'Long Lifespan', description: '10+ years of reliable service', icon: '⏳' },
                { title: 'Pest Proof', description: 'No risk of infestation or contamination', icon: '🛡️' },
                { title: 'Stackable', description: 'Efficient storage and transport', icon: '📚' },
                { title: 'Weatherproof', description: 'Rust-resistant coatings available', icon: '☔' },
              ].map((adv, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} className="bg-dark-800 p-6 rounded-xl border border-primary-500/20">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{adv.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-400 mb-2">{adv.title}</h3>
                      <p className="text-gray-400">{adv.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 text-primary-400">Ideal Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Automotive Manufacturing', 'Chemical Storage', 'Heavy Industry', 'Outdoor Storage', 'Export Shipping', 'Aerospace'].map((app, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-6 rounded-xl border border-secondary-500/30 text-center">
                  <p className="text-secondary-400 font-semibold">{app}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
