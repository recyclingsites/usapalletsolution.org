'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    title: 'Wooden Pallets',
    description: 'Traditional wooden pallets in various sizes and grades',
    href: '/products/wooden-pallets',
    icon: '🪵',
    features: ['Standard sizes', 'Custom dimensions', 'New & used options', 'Heat-treated options'],
  },
  {
    title: 'Plastic Pallets',
    description: 'Weather-resistant plastic pallets for long-term, reusable use',
    href: '/products/plastic-pallets',
    icon: '🔷',
    features: ['Moisture resistant', 'Easy to clean', 'Light nestable models', 'Recyclable'],
  },
  {
    title: 'Metal Pallets',
    description: 'Heavy-duty steel pallets for industrial applications',
    href: '/products/metal-pallets',
    icon: '⚙️',
    features: ['High durability', 'Does not burn', 'Heavy loads', 'Long service life'],
  },
  {
    title: 'Custom Pallets',
    description: 'Pallets built to order for non-standard loads',
    href: '/products/custom-pallets',
    icon: '🎨',
    features: ['Non-standard sizes', 'Material choices', 'Special features', 'Built to order'],
  },
  {
    title: 'Pallet Accessories',
    description: 'Common pallet accessories and related products',
    href: '/products/accessories',
    icon: '🔧',
    features: ['Pallet collars', 'Corner protectors', 'Strapping', 'Covers'],
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">Pallet Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Wooden, plastic, metal, custom, and export pallets plus accessories, all available through partner
              suppliers in our network. Requests come from across the US; availability depends on partner suppliers,
              and pricing is by quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Request a Quote</h2>
            <p className="text-center text-gray-600 mb-8">
              Tell us what you need. It is a free, no-obligation quote request, and a partner supplier follows up
            </p>
            <ContactForm productType="Products Page Inquiry" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-600">The Foundation of Modern Logistics</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Pallets carry goods through almost every supply chain. Choosing the right one is not just about finding a
                  platform to stack boxes on: it affects how safely your load travels, how well it fits your racking and
                  handling equipment, and what you spend over time.
                </p>
                <p>
                  USA Pallet Solution is a referral service. We do not make or stock pallets. When you send a quote request,
                  we pass it to partner suppliers in our network, and they quote and fulfil the order. What is available
                  depends on the partner suppliers serving your location.
                </p>
                <p>
                  Requirements differ by load. Delicate electronics may need cushioning and moisture protection, while heavy
                  automotive parts call for higher load capacity. Your products, handling methods, storage systems, and
                  distribution routes all shape which pallet type, material, and size makes sense.
                </p>
                <p>
                  The guides on this page cover the main trade-offs so you can make an informed choice. The more detail you
                  include in your request, such as load weight, dimensions, and handling equipment, the easier it is for a
                  partner supplier to suggest a suitable pallet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Explore Pallet Product Categories
          </motion.h2>
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
                  className="block bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 soft-shadow hover:soft-shadow-hover transition-all group h-full"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-600 group-hover:text-secondary-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
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
                  <div className="mt-6 flex items-center text-primary-600 group-hover:text-secondary-600 transition-colors">
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

      {/* Material Comparison */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-6 text-gray-800"
            >
              Pallet Material Comparison Guide
            </motion.h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Each pallet material has its own strengths depending on your application, environment, and budget.
              These are general trade-offs; individual pallets vary, so confirm details with the supplier.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  material: 'Wood',
                  pros: [
                    'Usually the lowest purchase cost',
                    'Good load capacity',
                    'Easy to repair and customize',
                    'Widely available',
                    'Natural, repairable material',
                    'Can be heat-treated for export',
                    'Surface friction helps hold loads in place'
                  ],
                  cons: [
                    'Susceptible to moisture damage',
                    'Can harbor pests if untreated',
                    'Heavier than light nestable plastic',
                    'Variable quality between units',
                    'Shorter service life than plastic or metal'
                  ],
                  bestFor: 'General warehousing, one-way shipping, heavy loads, export (when heat-treated), industries where cost is primary concern',
                  icon: '🪵'
                },
                {
                  material: 'Plastic',
                  pros: [
                    'Moisture and chemical resistant',
                    'Easy to wash and clean',
                    'Light nestable models can lower freight weight',
                    'Consistent quality and dimensions',
                    'Long service life in reusable systems',
                    'Nest or stack when empty',
                    'No splinters or protruding nails'
                  ],
                  cons: [
                    'Higher initial purchase cost',
                    'Can become brittle in extreme cold',
                    'More expensive to repair',
                    'Limited heat resistance',
                    'Can be slippery when wet'
                  ],
                  bestFor: 'Closed-loop systems, washdown areas, cold storage, operations that need pallets that are easy to clean',
                  icon: '🔷'
                },
                {
                  material: 'Metal',
                  pros: [
                    'Very durable and strong',
                    'Does not burn',
                    'Handles high temperatures well',
                    'Very long service life',
                    'Easy to clean',
                    'Handles very heavy loads',
                    'Not affected by pests or rot'
                  ],
                  cons: [
                    'Usually the highest initial cost',
                    'Steel weight can raise freight and handling costs',
                    'Can corrode in certain environments',
                    'Handling equipment must suit the added weight',
                    'Limited repair options'
                  ],
                  bestFor: 'Automotive manufacturing, heavy industry, high-temperature processes, long-term reuse',
                  icon: '⚙️'
                }
              ].map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 soft-shadow"
                >
                  <div className="text-6xl mb-4">{comparison.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-600">{comparison.material} Pallets</h3>

                  <div className="mb-6">
                    <h4 className="font-bold text-secondary-600 mb-3">Advantages:</h4>
                    <ul className="space-y-2">
                      {comparison.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-secondary-500 mt-1">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary-600 mb-3">Considerations:</h4>
                    <ul className="space-y-2">
                      {comparison.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-bold text-primary-700 mb-2 text-sm">Ideal Applications:</h4>
                    <p className="text-sm text-gray-700">{comparison.bestFor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gray-800"
            >
              Technical Specifications & Load Capacities
            </motion.h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Understanding load capacities is critical for safe and efficient pallet usage. Load capacity depends on multiple
              factors including material type, construction method, deck board thickness, stringer/block configuration, and how
              the load is distributed. Ratings vary by design, so the comparisons below are general. Ask the partner supplier
              for the rating of the specific pallet quoted and confirm it before you load.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 soft-shadow mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary-700">Load Capacity Types Explained</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    type: 'Static Load',
                    capacity: 'Usually the highest rating',
                    description: 'Maximum weight when pallet is stationary on level ground with evenly distributed load. This is the highest capacity rating.',
                    icon: '⬇️'
                  },
                  {
                    type: 'Dynamic Load',
                    capacity: 'Lower than static',
                    description: 'Maximum weight during movement by forklift, pallet jack, or conveyor. Lower than the static rating because of the stress of handling.',
                    icon: '🚜'
                  },
                  {
                    type: 'Racking Load',
                    capacity: 'Usually the lowest rating',
                    description: 'Maximum weight when supported only at edges in racking systems. Most conservative rating due to concentrated stress points.',
                    icon: '📊'
                  }
                ].map((loadType, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <div className="text-4xl mb-3">{loadType.icon}</div>
                    <h4 className="font-bold text-primary-600 mb-2">{loadType.type}</h4>
                    <p className="text-secondary-600 font-bold mb-3">{loadType.capacity}</p>
                    <p className="text-sm text-gray-700">{loadType.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Standard Pallet Specifications</h3>
                <div className="overflow-x-auto bg-white rounded-xl soft-shadow">
                  <table className="w-full">
                    <thead className="bg-primary-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Size</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Material</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Common Use</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Relative Weight</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Relative Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        ['48" × 40" GMA', 'Wood', 'General shipping and grocery distribution', 'Medium', 'Medium to high'],
                        ['48" × 40" GMA', 'Plastic', 'Closed-loop and washdown areas', 'Light to medium', 'Varies by design'],
                        ['48" × 48"', 'Wood', 'Drums and totes', 'Medium', 'Medium to high'],
                        ['42" × 42"', 'Plastic', 'Paint and telecommunications products', 'Light to medium', 'Varies by design'],
                        ['48" × 40"', 'Steel', 'Heavy or high-temperature loads', 'Heavy', 'High'],
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-6 py-4 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-6 text-gray-800"
            >
              Industry-Specific Solutions
            </motion.h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Different industries have unique pallet requirements based on product characteristics, handling methods,
              regulatory requirements, and operational environments. These notes are a starting point; your own quality
              and compliance requirements come first, so check current regulations for your sector.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: 'Food & Beverage Production',
                  requirements: 'Cleanability, moisture resistance, and your own hygiene requirements',
                  recommended: 'Plastic pallets or heat-treated wood',
                  features: ['Easy to clean', 'Moisture resistant', 'Smooth deck options', 'Confirm suitability with your quality team'],
                  challenges: 'Cold storage environments, frequent washdown procedures, hygiene standards',
                  icon: '🍎'
                },
                {
                  industry: 'Automotive Manufacturing',
                  requirements: 'Heavy load capacity, precision dimensions, durability, custom configurations',
                  recommended: 'Steel or heavy-duty wood pallets',
                  features: ['Higher capacity options', 'Custom sizes for parts', 'Durable construction', 'Returnable/reusable', 'Stackable when empty'],
                  challenges: 'Heavy component weights, oil/grease exposure, automated handling systems',
                  icon: '🚗'
                },
                {
                  industry: 'Retail & E-commerce',
                  requirements: 'Standard GMA sizes, display-ready, high turnover, cost-effective',
                  recommended: 'Standard wooden GMA pallets',
                  features: ['48" × 40" standard', 'Works with common forklifts and pallet jacks', 'Easy to source', 'Cost-effective', 'Recyclable'],
                  challenges: 'High volume throughput, multiple handling points, display considerations',
                  icon: '🛒'
                },
                {
                  industry: 'Export & International Trade',
                  requirements: 'ISPM 15 heat treatment and IPPC mark on solid wood, durability for long transit',
                  recommended: 'Heat-treated wood or plastic',
                  features: ['IPPC mark on treated wood', '56 °C for 30 minutes core temperature', 'Durable construction', 'Check current regulations'],
                  challenges: 'International regulations, long shipping times, customs inspections',
                  icon: '🌍'
                },
                {
                  industry: 'Chemical & Petrochemical',
                  requirements: 'Chemical compatibility, drum and tote handling, heavy loads',
                  recommended: 'Steel or chemical-resistant plastic',
                  features: ['Chemical-resistant plastic options', 'Suited to drums and totes', 'Heavy-duty options', 'Confirm compatibility with supplier'],
                  challenges: 'Corrosive substances, heavy concentrated loads, safety regulations',
                  icon: '⚗️'
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 soft-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{industry.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{industry.industry}</h3>
                      <p className="text-gray-600 text-sm italic">{industry.requirements}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-secondary-50 rounded-lg">
                    <h4 className="font-bold text-secondary-700 mb-1 text-sm">Recommended Products:</h4>
                    <p className="text-gray-700 text-sm">{industry.recommended}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-secondary-500 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-bold text-primary-700 mb-1 text-sm">Industry Challenges:</h4>
                    <p className="text-gray-700 text-sm">{industry.challenges}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            What to Expect From a Quote Request
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'One Request',
                description: 'Describe the pallets you need once, using the quote form. We pass your request to partner suppliers in our network, and a partner supplier follows up.',
                icon: '✓',
                stats: 'One form'
              },
              {
                title: 'Pricing by Quote',
                description: 'Pallet pricing depends on size, grade, quantity, and location, so partner suppliers price each request individually. There are no list prices on this site.',
                icon: '💰',
                stats: 'By quote'
              },
              {
                title: 'Availability',
                description: 'Requests come from across the US; availability depends on partner suppliers. Include your location and quantity so the request reaches a suitable supplier.',
                icon: '⚡',
                stats: 'Varies by area'
              },
              {
                title: 'Export Requirements',
                description: 'If your pallets will ship abroad, say so in your request and ask for ISPM 15 heat-treated pallets with the IPPC mark. Check current regulations for your destination.',
                icon: '📋',
                stats: 'Ask for ISPM 15'
              },
              {
                title: 'Custom Builds',
                description: 'Need something non-standard? Include your dimensions, load, and handling details so partner suppliers that build to order can review them.',
                icon: '🎨',
                stats: 'Build to order'
              },
              {
                title: 'No Obligation',
                description: 'Sending a quote request is free and does not commit you to anything. Review what a partner supplier offers and decide from there.',
                icon: '🛡️',
                stats: 'Free request'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl soft-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-2">{benefit.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-block px-4 py-2 bg-secondary-200 rounded-lg">
                  <span className="text-secondary-700 font-bold text-sm">{benefit.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gray-800"
            >
              How to Choose the Right Pallet: Step-by-Step Guide
            </motion.h2>
            <p className="text-gray-600 mb-12 text-lg">
              Selecting a pallet involves several factors. Work through these steps to balance performance,
              safety, and cost.
            </p>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Assess Your Load Requirements',
                  questions: ['What is the maximum weight of your loaded pallet?', 'How is the weight distributed?', 'What are the dimensions of your product?', 'Is the load stable or does it shift?'],
                  considerations: 'Overloading can cause a pallet to fail. Always calculate total weight including packaging and account for uneven distribution.'
                },
                {
                  step: 2,
                  title: 'Evaluate Your Handling Methods',
                  questions: ['Will you use forklifts, pallet jacks, or conveyors?', 'Do you need 2-way or 4-way entry?', 'Will pallets be lifted from the bottom or top?', 'Do you use automated handling systems?'],
                  considerations: 'Your material handling equipment determines required pallet entry configuration and minimum bottom deck board clearance.'
                },
                {
                  step: 3,
                  title: 'Consider Storage Systems',
                  questions: ['Will pallets be stored in racks or on the floor?', 'What type of racking system do you use?', 'What is the maximum stack height?', 'How long will pallets be in storage?'],
                  considerations: 'Racked storage requires higher quality pallets with good bottom deck boards to prevent sagging and failure.'
                },
                {
                  step: 4,
                  title: 'Review Environmental Factors',
                  questions: ['Will pallets be exposed to moisture or weather?', 'What is the operating temperature range?', 'Are there chemicals or contaminants present?', 'Will pallets need regular washing?'],
                  considerations: 'Environmental conditions significantly impact pallet performance and lifespan. Choose materials appropriate for your conditions.'
                },
                {
                  step: 5,
                  title: 'Check Regulatory Requirements',
                  questions: ['Do you ship internationally (ISPM 15)?', 'Do industry-specific rules apply to your products?', 'Do you need specific documentation?', 'Are there customer requirements?'],
                  considerations: 'Packaging that does not meet the rules can lead to rejected shipments. Check current regulations for your product and destination.'
                },
                {
                  step: 6,
                  title: 'Consider Total Cost of Ownership',
                  questions: ['What is your expected pallet lifespan?', 'How many trips will each pallet make?', 'What are repair and replacement costs?', 'Are pallets returnable or one-way?'],
                  considerations: 'The cheapest pallet is not always the most economical. Factor in durability, repair costs, and operational efficiency.'
                }
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 soft-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {guide.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-600 mb-4">{guide.title}</h3>
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">Key Questions:</h4>
                        <ul className="space-y-2">
                          {guide.questions.map((question, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-secondary-500 mt-1">?</span>
                              <span>{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-secondary-50 rounded-lg">
                        <p className="text-gray-700 italic"><strong>Important:</strong> {guide.considerations}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary-600 text-white rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-lg mb-6">
                Send what you know about your load, handling, and storage in a free, no-obligation quote request.
                We pass it to partner suppliers in our network, and a partner supplier follows up with options.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Request a Pallet Quote?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Send a free, no-obligation quote request and a partner supplier follows up.
              Requests come from across the US; availability depends on partner suppliers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary-600 hover:text-primary-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/sizes"
                className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-all"
              >
                View Size Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
