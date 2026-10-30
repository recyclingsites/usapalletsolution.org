'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqItems = [
  {
    question: 'What does ISPM 15 heat treatment require?',
    answer: 'Under ISPM 15, solid wood packaging can be heat-treated so that the wood reaches a core temperature of 56 °C for 30 minutes, and the pallet then carries the IPPC mark. Ask the partner supplier to confirm treatment and marking on your quote, and check current regulations for your destination.',
  },
  {
    question: 'What sizes of export pallets are available?',
    answer: 'Common sizes include 48x40 GMA, Euro 1200x800, and 1200x1000 mm. Partner suppliers that build to order can review custom dimensions for your container load plan. Availability depends on partner suppliers.',
  },
  {
    question: 'What documentation is available for overseas shipments?',
    answer: 'It depends on the supplier, so ask when a partner supplier follows up. Your freight forwarder can tell you what your shipment needs, and you should check current regulations for your destination.',
  },
  {
    question: 'Are plastic or presswood pallets an option for exports?',
    answer: 'They can be. ISPM 15 applies to solid wood packaging, so plastic pallets and manufactured wood pallets such as presswood generally fall outside it. Check current regulations for your destination, and ask partner suppliers what they can offer.',
  },
  {
    question: 'How long do export pallets take to arrive?',
    answer: 'Timing depends on the size, quantity, treatment, and supplier. Include your schedule in your quote request, and confirm it with the partner supplier who follows up.',
  },
]

export default function ExportPalletsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6 text-sm">
              <Link href="/products/" className="text-primary-400 hover:text-primary-300">
                Products
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-300">Export Pallets</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Export-Ready Pallets</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Heat-treated wood, plastic, and presswood pallets for international shipping, available through partner suppliers in our network.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="Export Pallets" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-400">Built For International Shipping</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ISPM 15 is the international standard for wood packaging. Heat treatment under ISPM 15 brings the wood to a
                core temperature of 56 °C for 30 minutes, and treated pallets carry the IPPC mark, which identifies the treatment
                and the producer. Plastic and presswood pallets are alternatives because the standard applies to solid wood
                packaging. Import rules vary and change, so check current regulations for your destination.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you are loading containers for ocean freight or air cargo, pallet size affects how well your load
                fits. Include your packaging dimensions and route in your quote request, and a partner supplier follows up.
                Requests come from across the US; availability depends on partner suppliers, and pricing is by quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-secondary-400">Popular Export Pallet Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: '48x40 HT GMA',
                    description: 'North American standard size, heat-treated under ISPM 15 for export.',
                    features: ['IPPC mark', '56 °C for 30 minutes core temperature', 'Common North American size', 'Ask about new or recycled'],
                  },
                  {
                    title: '1200x1000 Block',
                    description: 'Block pallet in a metric size used in many international markets.',
                    features: ['Four-way entry', 'Heat-treated wood', 'Top and bottom deck boards', 'Forklift and pallet jack access'],
                  },
                  {
                    title: 'Presswood Nestable',
                    description: 'Light molded pallets often used for one-way export shipments.',
                    features: ['Manufactured wood, not solid lumber', 'Nests to save space', 'Light weight', 'Consistent dimensions'],
                  },
                  {
                    title: 'HDPE Export Pallets',
                    description: 'Durable plastic pallets for reusable or closed-loop export applications.',
                    features: ['Non-porous surface', 'Easy to clean', 'Long service life', 'Rackable options'],
                  },
                ].map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 p-6 rounded-xl border border-primary-500/20"
                  >
                    <h3 className="text-xl font-bold text-primary-400 mb-2">{type.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="text-secondary-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-400">Export Options to Ask About</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Pallet sizes matched to your container',
                  'ISPM 15 heat treatment with the IPPC mark',
                  'Delivery to a port or consolidation site, where available',
                  'Moisture barrier wraps, edge protection, and strapping',
                  'Custom sizes for your packaging',
                  'Stenciling or branding, where a supplier offers it',
                ].map((item) => (
                  <div key={item} className="bg-dark-800 p-5 rounded-xl border border-secondary-500/20 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-primary-600"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white p-6 rounded-xl border border-primary-200 soft-shadow">
                <h3 className="text-lg font-semibold text-primary-600 mb-2">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
