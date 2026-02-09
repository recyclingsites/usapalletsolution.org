'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlasticPalletsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="mb-6 text-sm">
              <Link href="/products" className="text-primary-400 hover:text-primary-300">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Plastic Pallets</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Plastic Pallets</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Lightweight, durable, and weather-resistant plastic pallets for modern logistics</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="Plastic Pallets" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-400">Why Choose Plastic Pallets?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Plastic pallets offer superior performance in demanding environments. They're moisture-resistant,
              easy to clean, and perfect for industries requiring strict hygiene standards like food, pharmaceutical,
              and chemical sectors.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-secondary-400">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '💧', title: 'Moisture Resistant', description: 'Won\'t absorb water or harbor bacteria' },
                { icon: '🧼', title: 'Easy to Clean', description: 'Simple washing and sanitization' },
                { icon: '⚖️', title: 'Lightweight', description: 'Reduces shipping costs and handling strain' },
                { icon: '♻️', title: '100% Recyclable', description: 'Environmentally sustainable choice' },
                { icon: '🔒', title: 'Consistent Weight', description: 'Precise weight for accurate shipping calculations' },
                { icon: '🦠', title: 'Hygienic', description: 'FDA approved for food contact' },
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} className="text-center p-6 bg-dark-800 rounded-xl border border-primary-500/20">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-primary-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 text-primary-400">Available Configurations</h2>
            <div className="space-y-4">
              {[
                { name: 'Rackable', description: 'Designed for warehouse racking systems with reinforced structure', capacity: 'Up to 5,000 lbs static' },
                { name: 'Nestable', description: 'Space-saving design that nests when empty', capacity: 'Up to 2,500 lbs dynamic' },
                { name: 'Stackable', description: 'High-density stacking for maximum storage efficiency', capacity: 'Up to 3,000 lbs' },
                { name: 'Hygienic', description: 'Smooth surface design for food and pharma industries', capacity: 'Varies by model' },
              ].map((config, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} className="bg-dark-800 p-6 rounded-xl border border-secondary-500/20 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-400 mb-1">{config.name}</h3>
                    <p className="text-gray-400 text-sm">{config.description}</p>
                  </div>
                  <div className="text-primary-400 font-semibold text-sm whitespace-nowrap ml-4">{config.capacity}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
