'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    title: 'Wooden Pallets',
    description: 'Traditional, durable wooden pallets in various sizes and grades',
    href: '/products/wooden-pallets',
    icon: '🪵',
    features: ['Standard sizes', 'Custom dimensions', 'New & used options', 'Heat-treated'],
  },
  {
    title: 'Plastic Pallets',
    description: 'Lightweight, weather-resistant plastic pallets for long-term use',
    href: '/products/plastic-pallets',
    icon: '🔷',
    features: ['Moisture resistant', 'Easy to clean', 'Lightweight', 'Recyclable'],
  },
  {
    title: 'Metal Pallets',
    description: 'Heavy-duty steel pallets for industrial applications',
    href: '/products/metal-pallets',
    icon: '⚙️',
    features: ['Maximum durability', 'Fire resistant', 'Heavy loads', 'Long lifespan'],
  },
  {
    title: 'Custom Pallets',
    description: 'Custom-designed pallets to meet your specific requirements',
    href: '/products/custom-pallets',
    icon: '🎨',
    features: ['Any size', 'Special materials', 'Unique designs', 'Industry specific'],
  },
  {
    title: 'Pallet Accessories',
    description: 'Complete range of pallet accessories and related products',
    href: '/products/accessories',
    icon: '🔧',
    features: ['Pallet collars', 'Corner protectors', 'Strapping', 'Covers'],
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive range of pallets and accessories for every industry need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="Products Page Inquiry" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="block bg-dark-800 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/50 transition-all group h-full"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-400 group-hover:text-secondary-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-primary-400 group-hover:text-secondary-400 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-glow-secondary"
          >
            Why Choose Our Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality Assured',
                description: 'Every pallet meets strict quality standards',
                icon: '✓',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for your investment',
                icon: '💰',
              },
              {
                title: 'Fast Availability',
                description: 'Large inventory ready to ship',
                icon: '⚡',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-dark-800 rounded-xl border border-secondary-500/20"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-secondary-400 mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
