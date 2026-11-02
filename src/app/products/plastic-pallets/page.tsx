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
            <p className="text-xl text-gray-300 max-w-3xl">Durable, weather-resistant plastic pallets, available through partner suppliers in our network</p>
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
              Plastic pallets suit wet, washdown, and reusable closed-loop environments. They resist moisture,
              are easy to clean, and keep consistent dimensions. They usually cost more up front than wood, and
              their suitability for your product is something to confirm with the supplier. Availability depends
              on partner suppliers, and pricing is by quote.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-secondary-400">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '💧', title: 'Moisture Resistant', description: 'Does not soak up water the way wood can' },
                { icon: '🧼', title: 'Easy to Clean', description: 'Can be washed down between uses' },
                { icon: '⚖️', title: 'Light Models', description: 'Nestable designs can lower freight weight and handling strain' },
                { icon: '♻️', title: 'Recyclable', description: 'Many plastic pallets can be recycled at the end of their service life' },
                { icon: '🔒', title: 'Consistent Weight', description: 'Molded pallets vary little from unit to unit' },
                { icon: '🦠', title: 'Smooth Surfaces', description: 'No nails or splinters, and non-porous decks on many models' },
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
                { name: 'Rackable', description: 'Designed for warehouse racking systems with reinforced structure', capacity: 'Rack-rated models' },
                { name: 'Nestable', description: 'Space-saving design that nests when empty', capacity: 'Lighter loads' },
                { name: 'Stackable', description: 'Stacks loaded or empty for efficient storage', capacity: 'Medium to heavy loads' },
                { name: 'Smooth Deck', description: 'Solid, smooth top surface that is easy to wash down', capacity: 'Varies by model' },
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
