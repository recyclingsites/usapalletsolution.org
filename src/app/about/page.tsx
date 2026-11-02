'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">About USA Pallet Solution</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A referral service that matches pallet buyers and sellers across the US with partner suppliers. Availability depends on partner suppliers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="About Page Inquiry" />
          </div>
        </div>
      </section>

      {/* What the Service Does */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-600">What the Service Does</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  USA Pallet Solution matches people who need pallets, or have pallets to sell or clear out, with partner
                  suppliers in our network. You send one free, no-obligation quote request, and we pass it to partner
                  suppliers who may be able to help.
                </p>
                <p>
                  We are a referral service, not a pallet company. We do not own pallets, yards or trucks. Partner suppliers
                  quote your request and do the work, including buying, selling, recycling, repair, disposal, pickup and
                  delivery. Pricing, terms and timing come from the partner supplier, and you confirm them directly with
                  that supplier.
                </p>
                <p>
                  We take requests from across the US. Availability depends on partner suppliers, so what can be arranged
                  varies by location, pallet type and quantity.
                </p>
              </div>
            </motion.div>

            {/* How Quotes Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">How Quotes Work</h2>
              <div className="space-y-8">
                {[
                  {
                    step: '1',
                    title: 'Send Your Request',
                    description: 'Use the form to say whether you want to buy, sell, recycle or dispose of pallets. Include the type, size, quantity, condition and location. The more detail you give, the easier it is to quote.'
                  },
                  {
                    step: '2',
                    title: 'We Pass It to Partner Suppliers',
                    description: 'Your request goes to partner suppliers in our network. Which supplier can help depends on your location and on what you asked for.'
                  },
                  {
                    step: '3',
                    title: 'A Partner Supplier Follows Up',
                    description: 'A partner supplier follows up about pricing, availability and any questions. We do not publish prices, because pallet pricing depends on type, grade, quantity, location and the market at the time.'
                  },
                  {
                    step: '4',
                    title: 'You Decide',
                    description: 'The request is free and carries no obligation. If the quote suits you, you arrange the order, pickup or delivery directly with the partner supplier.'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg soft-shadow">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-xl soft-shadow">
                      <h3 className="text-xl font-bold text-primary-600 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What Grades Mean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">What Pallet Grades Mean</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Used pallet grades are common trade terms, not one formal standard, so exact definitions vary between
                suppliers. These are the usual meanings. Confirm what a grade means with your partner supplier before you order.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'New',
                    description: 'Built from new lumber and not used before. Dimensions and appearance are consistent, and it can be made to a set specification.',
                    icon: '🪵',
                  },
                  {
                    title: 'Grade A',
                    description: 'A used pallet in good condition, typically with few or no visible repairs and a fairly uniform appearance. Suits automated handling and customer-facing shipments better than lower grades.',
                    icon: '⭐',
                  },
                  {
                    title: 'Grade B',
                    description: 'A used pallet that is sound but has seen more use. It often has visible repairs, such as added support blocks or boards, and mixed coloring. A common choice for general warehouse use.',
                    icon: '🔧',
                  },
                  {
                    title: 'Heat Treated',
                    description: 'Not a grade, but a treatment. ISPM 15 heat treatment takes the wood to a core temperature of 56 °C for 30 minutes, and treated wood carries the IPPC mark. A used pallet of any grade may or may not have it.',
                    icon: '🌍',
                  },
                ].map((grade, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all"
                  >
                    <div className="text-4xl mb-3">{grade.icon}</div>
                    <h3 className="text-xl font-bold text-primary-600 mb-2">{grade.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{grade.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              What You Can Request
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: '/images/1.jpg',
                  alt: 'Stacks of wood, plastic and metal pallets outside a warehouse',
                  title: 'Pallets to Buy',
                  description: 'New or used pallets in wood, plastic or metal, quoted by partner suppliers',
                },
                {
                  image: '/images/4.jpg',
                  alt: 'Mixed wood, plastic and metal pallets in a yard',
                  title: 'Pallets to Sell',
                  description: 'Surplus or used pallets that partner suppliers may be able to buy or collect',
                },
                {
                  image: '/images/7.jpg',
                  alt: 'Used wood pallets stacked indoors near forklifts',
                  title: 'Repair and Recycling',
                  description: 'Reusing a pallet avoids building a new one; worn pallets can often be recycled',
                },
                {
                  image: '/images/5.jpg',
                  alt: 'Worker loading wood pallets into a truck',
                  title: 'Pickup and Delivery',
                  description: 'Partner suppliers can arrange transport where available',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl soft-shadow group"
                >
                  <div className="relative h-96">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
