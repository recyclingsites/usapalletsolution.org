'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const faqItems = [
  {
    question: 'Do your export pallets meet ISPM 15 heat-treatment requirements?',
    answer: 'Yes, every export pallet can be heat-treated and stamped to meet ISPM 15 so shipments clear international customs without delays.',
  },
  {
    question: 'What sizes of export pallets are available?',
    answer: 'We stock 48x40 GMA, Euro 1200x800, 1200x1000, and custom-built dimensions tailored to your container load plans.',
  },
  {
    question: 'Can you provide documentation for overseas shipments?',
    answer: 'We include heat-treatment certificates, load specs, and optional moisture content reports to simplify your export paperwork.',
  },
  {
    question: 'Do you offer plastic or presswood options for exports?',
    answer: 'Yes, alongside kiln-dried lumber pallets we supply plastic and molded presswood pallets that are pest-free and export ready.',
  },
  {
    question: 'How fast can export pallets be delivered?',
    answer: 'Standard sizes ship within 48 hours nationwide; custom builds typically ship in 3–5 business days depending on volume.',
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
              Heat-treated, compliant export pallets engineered for smooth international shipping and optimized container loading.
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
              <h2 className="text-4xl font-bold mb-6 text-primary-400">Built For International Compliance</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our export pallets are manufactured from kiln-dried lumber and heat-treated to satisfy ISPM 15 standards.
                Each pallet receives a visible certification stamp and comes with documentation to expedite customs clearance.
                We also offer plastic and presswood export options for industries that require pest-free, moisture-resistant
                solutions without additional treatment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you are loading containers for ocean freight or air cargo, we design export pallets that maximize
                cube utilization and prevent product damage. Talk with our engineers to align pallet dimensions with your
                packaging and routing requirements.
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
                    description: 'North American standard pallet heat-treated and certified for export.',
                    features: ['ISPM 15 stamp', 'Kiln-dried lumber', '3,000 lb static capacity', 'Available new or recycled'],
                  },
                  {
                    title: '1200x1000 Euro Block',
                    description: 'Heavy-duty block pallet sized for European distribution networks.',
                    features: ['Four-way entry', 'Heat-treated blocks', 'Top and bottom deck boards', 'Smooth forklift handling'],
                  },
                  {
                    title: 'Presswood Nestable',
                    description: 'Lightweight molded pallets ideal for one-way export shipments.',
                    features: ['Pest-free by design', 'Stackable to save space', 'Moisture resistant', 'Consistent dimensions'],
                  },
                  {
                    title: 'HDPE Export Pallets',
                    description: 'Durable plastic pallets for high-hygiene or closed-loop export applications.',
                    features: ['Non-porous surface', 'Easy sanitation', 'Long service life', 'Rackable options available'],
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
              <h2 className="text-4xl font-bold mb-6 text-primary-400">Value-Added Export Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Container load design to increase cubic efficiency',
                  'Heat-treatment certification and paperwork management',
                  'Just-in-time deliveries to port or consolidation centers',
                  'Moisture barrier wraps, edge protection, and strapping',
                  'Nationwide supply with staging near major ports',
                  'Custom branding or stenciling on request',
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
