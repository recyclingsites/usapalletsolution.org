'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Pallet Types and Materials',
    excerpt: 'Wood is the default for most loads: it is widely available and easy to repair. Plastic suits washable, closed-loop use and resists moisture. Metal is the choice for heavy-duty or high-temperature work, at a higher upfront cost.',
    category: 'Education',
    icon: '📚',
    href: '/products',
    linkText: 'Browse pallet types',
  },
  {
    title: 'ISPM 15 Basics for International Shipping',
    excerpt: 'ISPM 15 covers solid wood packaging in international trade. The usual treatment is heat, to a core temperature of 56 °C for 30 minutes, shown by the IPPC mark. Plastic and metal pallets fall outside it. Check current rules for your destination.',
    category: 'Compliance',
    icon: '🌍',
    href: '/products/export-pallets',
    linkText: 'See export pallets',
  },
  {
    title: 'How to Choose the Right Pallet Size',
    excerpt: 'Start with your product footprint, then check it against your trailers or containers, your racking, and what your customers will accept. 48" × 40" is the usual starting point in North America, with other sizes common in certain industries.',
    category: 'Best Practices',
    icon: '📏',
    href: '/sizes',
    linkText: 'Read the size guide',
  },
  {
    title: 'Pallet Recycling and Reuse',
    excerpt: 'Reusing a pallet avoids building a new one. Pallets that can be repaired go back into service, and wood that cannot be reused can often be ground into mulch or other products. Keeping pallets sorted and dry helps them stay reusable.',
    category: 'Sustainability',
    icon: '♻️',
    href: '/services/recycling',
    linkText: 'See recycling',
  },
  {
    title: 'Pallet Storage in the Warehouse',
    excerpt: 'Store empty pallets flat, in stable stacks, away from walls, heat sources and exits. Keep them dry to limit mold and rot. For racking, confirm that the pallet is rated for the job, as racked pallets are supported only at their edges.',
    category: 'Operations',
    icon: '🏭',
    href: '/products',
    linkText: 'Browse products',
  },
  {
    title: 'Pallet Safety: Loading and Handling',
    excerpt: 'Inspect pallets before use and take damaged ones out of service. Spread the load evenly, keep it inside the pallet edges, and do not exceed the rated capacity. Wear gloves for handling, and check current workplace safety regulations.',
    category: 'Safety',
    icon: '⚠️',
    href: '/contact',
    linkText: 'Request a quote',
  },
  {
    title: 'New, Used or Recycled Pallets',
    excerpt: 'New pallets give consistent dimensions and appearance, and suit product-sensitive or display uses. Used and recycled pallets are usually lower cost and work well for many closed-loop or one-way shipments, provided the grade suits the load.',
    category: 'Buying',
    icon: '💡',
    href: '/services/buying',
    linkText: 'See buying pallets',
  },
  {
    title: 'When to Consider a Custom Pallet',
    excerpt: 'Consider custom when your product overhangs standard sizes or automated equipment needs an exact fit. To get a useful quote, give the dimensions, load weight, entry type, quantity, and how the pallets will be stored and shipped.',
    category: 'Design',
    icon: '🎨',
    href: '/products/custom-pallets',
    linkText: 'See custom pallets',
  },
  {
    title: 'Understanding Pallet Grades',
    excerpt: 'Used pallets are commonly sold as Grade A (also called #1), with few or no repairs and a clean look, and Grade B (#2), with more repairs. Grades are trade terms rather than a formal standard, so ask each supplier what theirs means.',
    category: 'Quality',
    icon: '⭐',
    href: '/products/wooden-pallets',
    linkText: 'See wooden pallets',
  },
  {
    title: 'Plastic vs. Wood Pallets',
    excerpt: 'Plastic pallets are consistent, washable and moisture resistant, but they cost more upfront and are harder to repair. Wood is cheaper to buy and easy to repair, but it can absorb moisture and may need ISPM 15 treatment for export.',
    category: 'Comparison',
    icon: '⚖️',
    href: '/products/plastic-pallets',
    linkText: 'See plastic pallets',
  },
  {
    title: 'Inspecting and Repairing Pallets',
    excerpt: 'Check for cracked or missing boards, protruding nails, split stringers or blocks, and contamination. Damaged wood pallets can often be repaired by replacing boards or adding support to stringers, which extends their service life.',
    category: 'Maintenance',
    icon: '🔧',
    href: '/services/repair',
    linkText: 'See pallet repair',
  },
  {
    title: 'Stacking a Stable Pallet Load',
    excerpt: 'Column stacking lines boxes up corner over corner and makes the most of box strength. Interlocked patterns tie layers together for stability but lose some compression strength. Either way, keep edges flush and secure the load with stretch wrap.',
    category: 'Operations',
    icon: '📊',
    href: '/sizes',
    linkText: 'Read the size guide',
  },
]

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Resources & Knowledge Center</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Practical guidance on choosing, handling and reusing pallets, plus a glossary of common terms. Use it to plan your next order, then send a quote request to partner suppliers in our network.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#articles" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Browse Guides
              </a>
              <a href="#glossary" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                View Glossary
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Have a Pallet Requirement?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Send a free, no-obligation quote request. We pass it to partner suppliers in our network, and a partner supplier follows up.
              </p>
            </motion.div>
            <ContactForm productType="Resources Inquiry" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Pallet Guides & Best Practices</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Short guides covering basic concepts and everyday decisions, from materials and grades to export treatment and safe handling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-warm-50 to-white rounded-xl soft-shadow hover:soft-shadow-hover transition-all group overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{article.icon}</div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-secondary-500 text-white rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 group-hover:text-secondary-600 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link href={article.href} className="flex items-center text-secondary-600 group-hover:text-primary-600 transition-colors text-sm font-semibold">
                    <span>{article.linkText}</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section id="glossary" className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Pallet Industry Glossary
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Common terminology and acronyms used in pallet manufacturing and logistics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  term: 'Block Pallet',
                  definition: 'A pallet using blocks (solid pieces of wood) instead of stringers to support the deck boards, allowing 4-way entry for forklifts and pallet jacks.',
                },
                {
                  term: 'Stringer Pallet',
                  definition: 'A pallet using continuous boards (stringers) running the length of the pallet to support the deck boards, typically allowing 2-way or partial 4-way entry.',
                },
                {
                  term: 'Skid',
                  definition: 'A pallet-like platform with no bottom deck boards, typically moved by forklift rather than pallet jack.',
                },
                {
                  term: 'ISPM 15',
                  definition: 'International Standard for Phytosanitary Measures No. 15, which sets out treatment of solid wood packaging in international trade by heat or approved fumigation.',
                },
                {
                  term: 'IPPC Mark',
                  definition: 'The stamp on wood packaging showing it was treated to ISPM 15, including a country code, a producer code and the treatment used.',
                },
                {
                  term: 'GMA Pallet',
                  definition: 'A 48" × 40" pallet, named for the Grocery Manufacturers Association and the most common pallet size in North America.',
                },
                {
                  term: 'Deck Boards',
                  definition: 'The top and/or bottom boards on a pallet that create the surface for holding products.',
                },
                {
                  term: 'Static Load',
                  definition: 'Maximum weight a pallet can hold when stationary on a flat surface.',
                },
                {
                  term: 'Dynamic Load',
                  definition: 'Maximum weight a pallet can safely carry while being moved by a forklift or pallet jack.',
                },
                {
                  term: 'Racking Load',
                  definition: 'Maximum weight a pallet can hold when supported in warehouse racking, typically lower than static load.',
                },
                {
                  term: 'Heat Treatment (HT)',
                  definition: 'Heating wood to a core temperature of 56 °C (133 °F) for 30 minutes to kill pests, the usual treatment under ISPM 15.',
                },
                {
                  term: 'Pallet Pooling',
                  definition: 'A rental system where pallets are leased and returned for reuse rather than purchased outright.',
                },
                {
                  term: 'EUR/EPAL Pallet',
                  definition: 'The European standard pallet measuring 1200 mm × 800 mm (47.2" × 31.5"), with EPAL as the association behind the EPAL Euro pallet.',
                },
                {
                  term: 'Notched Stringer',
                  definition: 'Stringers with cutouts allowing partial 4-way forklift entry.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-2">{item.term}</h3>
                  <p className="text-gray-700 text-sm">{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Request Pallets?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Put this into action. Requests are welcome from across the US; availability depends on partner suppliers, and pricing is by quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                  Request a Quote
                </Link>
                <Link href="/products" className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border-2 border-primary-600">
                  Browse Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
