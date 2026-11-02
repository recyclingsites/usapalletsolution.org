'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CustomPalletsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/products" className="text-primary-400 hover:text-primary-300">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Custom Pallets</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Custom Pallets</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Pallets built to your specifications, available through partner suppliers in our network</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto"><ContactForm productType="Custom Pallets" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-400">Built to Your Specifications</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Standard sizes do not fit every load. Custom pallets can be built around unusual dimensions,
              specific materials, or particular features for your load and handling equipment.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Send your requirements in a free, no-obligation quote request. We pass it to partner suppliers in our
              network, and those that build to order can review your specifications. Availability depends on partner
              suppliers, and pricing is by quote.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-secondary-400">Customization Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Size & Dimensions',
                  options: ['Custom length', 'Custom width', 'Custom height', 'Special shapes', 'Non-standard formats'],
                },
                {
                  title: 'Materials',
                  options: ['Hardwood', 'Softwood', 'Plastic composites', 'Metal alloys', 'Mixed materials'],
                },
                {
                  title: 'Load Capacity',
                  options: ['Light duty', 'Medium duty', 'Heavy duty', 'Extra heavy', 'Matched to your load'],
                },
                {
                  title: 'Special Features',
                  options: ['Color coding', 'Custom branding', 'Special coatings', 'Unique entry points'],
                },
              ].map((category, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} className="bg-dark-800 p-6 rounded-xl border border-primary-500/20">
                  <h3 className="text-2xl font-bold text-primary-400 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.options.map((option, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {option}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-8 text-primary-400">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Request', description: 'You send your dimensions, load, and handling details through the quote form' },
                { step: '02', title: 'Follow-Up', description: 'We pass your request to partner suppliers, and a partner supplier follows up' },
                { step: '03', title: 'Design and Quote', description: 'The supplier works out the design with you and quotes it' },
                { step: '04', title: 'Sample', description: 'Ask the supplier whether a sample is available for testing' },
                { step: '05', title: 'Production and Delivery', description: 'The supplier builds your order and arranges delivery with you' },
              ].map((process, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} className="flex gap-6 items-start bg-dark-800 p-6 rounded-xl border border-secondary-500/20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text gradient-bg flex-shrink-0">{process.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-400 mb-2">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
