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
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Comprehensive range of high-quality pallets and accessories designed to meet every industry need.
              From standard wooden pallets to specialized custom solutions, we provide the products that keep
              America's supply chains moving efficiently.
            </p>
          </motion.div>
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
                  Pallets are the unsung heroes of global commerce, quietly supporting trillions of dollars worth of goods
                  as they move through supply chains every day. At USA Pallet Solution, we understand that choosing the right
                  pallet isn't just about finding a platform to stack boxes on – it's about optimizing your entire operation
                  for efficiency, safety, and cost-effectiveness.
                </p>
                <p>
                  Our comprehensive product line has been carefully developed over 15+ years of serving diverse industries
                  across all 50 states. We've learned that every business has unique requirements based on their products,
                  handling methods, storage systems, and distribution networks. That's why we offer an extensive selection
                  of pallet types, materials, sizes, and configurations to ensure you get exactly what you need.
                </p>
                <p>
                  Whether you're shipping delicate electronics that require cushioning and moisture protection, heavy automotive
                  parts that demand maximum load capacity, or food products that need FDA-compliant materials, we have the perfect
                  pallet solution. Our products are sourced from top manufacturers and undergo rigorous quality inspections to
                  ensure they meet or exceed industry standards.
                </p>
                <p>
                  Beyond just selling pallets, we're committed to helping you make informed decisions. Our experienced team can
                  assess your operations, analyze your product specifications, evaluate your handling equipment, and recommend
                  the optimal pallet solution that balances performance and cost. We've helped thousands of businesses reduce
                  damage rates, improve warehouse efficiency, lower transportation costs, and enhance worker safety through
                  better pallet selection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get a Custom Quote</h2>
            <p className="text-center text-gray-600 mb-8">
              Tell us about your requirements and receive a personalized quote within 2 hours
            </p>
            <ContactForm productType="Products Page Inquiry" />
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
            Explore Our Product Categories
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
              Comprehensive Material Comparison Guide
            </motion.h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Understanding the differences between pallet materials is crucial for making the right choice for your operation.
              Each material type offers distinct advantages depending on your specific application, environment, and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  material: 'Wood',
                  pros: [
                    'Most cost-effective option',
                    'Excellent load capacity',
                    'Easy to repair and customize',
                    'Widely available globally',
                    'Natural and biodegradable',
                    'Can be heat-treated for export',
                    'High friction prevents load shifting'
                  ],
                  cons: [
                    'Susceptible to moisture damage',
                    'Can harbor pests and bacteria',
                    'Heavier than plastic alternatives',
                    'Variable quality between units',
                    'Shorter lifespan than plastic/metal'
                  ],
                  bestFor: 'General warehousing, one-way shipping, heavy loads, export (when heat-treated), industries where cost is primary concern',
                  icon: '🪵'
                },
                {
                  material: 'Plastic',
                  pros: [
                    'Moisture and chemical resistant',
                    'Easy to sanitize and clean',
                    'Lightweight reduces shipping costs',
                    'Consistent quality and dimensions',
                    'Long lifespan (10+ years)',
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
                  bestFor: 'Food & beverage, pharmaceuticals, clean rooms, closed-loop systems, cold storage, industries requiring sanitation',
                  icon: '🔷'
                },
                {
                  material: 'Metal',
                  pros: [
                    'Maximum durability and strength',
                    'Fire resistant and spark-proof',
                    'Handles extreme temperatures',
                    'Very long lifespan (20+ years)',
                    'Easy to clean and sterilize',
                    'Handles very heavy loads',
                    'Immune to pests and rot'
                  ],
                  cons: [
                    'Highest initial cost',
                    'Heavy weight increases handling costs',
                    'Can corrode in certain environments',
                    'Requires specialized equipment',
                    'Limited repair options'
                  ],
                  bestFor: 'Automotive manufacturing, military applications, extreme environments, high-temperature processes, long-term capital investment',
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
              the load is distributed. We provide detailed specifications for every pallet we sell to ensure you select the
              right product for your application.
            </p>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 soft-shadow mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary-700">Load Capacity Types Explained</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    type: 'Static Load',
                    capacity: 'Up to 10,000 lbs',
                    description: 'Maximum weight when pallet is stationary on level ground with evenly distributed load. This is the highest capacity rating.',
                    icon: '⬇️'
                  },
                  {
                    type: 'Dynamic Load',
                    capacity: 'Up to 4,600 lbs',
                    description: 'Maximum weight during movement by forklift, pallet jack, or conveyor. Typically 50-60% of static capacity due to stress from handling.',
                    icon: '🚜'
                  },
                  {
                    type: 'Racking Load',
                    capacity: 'Up to 2,500 lbs',
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
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Weight</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Static Capacity</th>
                        <th className="px-6 py-4 text-left text-primary-700 font-semibold">Dynamic Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        ['48" × 40" GMA', 'Wood', '35-50 lbs', '10,000 lbs', '4,600 lbs'],
                        ['48" × 40" GMA', 'Plastic', '45-65 lbs', '8,000 lbs', '3,500 lbs'],
                        ['48" × 48"', 'Wood', '40-55 lbs', '10,000 lbs', '4,600 lbs'],
                        ['42" × 42"', 'Plastic', '35-50 lbs', '7,500 lbs', '3,000 lbs'],
                        ['48" × 40"', 'Steel', '70-110 lbs', '15,000+ lbs', '8,000+ lbs'],
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
              regulatory requirements, and operational environments. Our industry expertise ensures you get the right
              solution for your specific sector.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: 'Food & Beverage Production',
                  requirements: 'FDA compliance, sanitation, moisture resistance, no chemical contamination',
                  recommended: 'Plastic pallets or heat-treated wood',
                  features: ['FDA-approved materials', 'Easy to clean and sanitize', 'Moisture resistant', 'No bacterial harboring', 'HACCP compliant'],
                  challenges: 'Cold storage environments, frequent washdown procedures, strict hygiene standards',
                  icon: '🍎'
                },
                {
                  industry: 'Pharmaceutical & Healthcare',
                  requirements: 'GMP compliance, clean room compatible, sterilization capable, traceability',
                  recommended: 'Plastic or stainless steel pallets',
                  features: ['Clean room certified', 'Autoclave capable', 'Non-porous surfaces', 'Lot tracking available', 'Chemical resistant'],
                  challenges: 'Contamination prevention, regulatory compliance, temperature control',
                  icon: '💊'
                },
                {
                  industry: 'Automotive Manufacturing',
                  requirements: 'Heavy load capacity, precision dimensions, durability, custom configurations',
                  recommended: 'Steel or heavy-duty wood pallets',
                  features: ['10,000+ lb capacity', 'Custom sizes for parts', 'Durable construction', 'Returnable/reusable', 'Stackable when empty'],
                  challenges: 'Heavy component weights, oil/grease exposure, automated handling systems',
                  icon: '🚗'
                },
                {
                  industry: 'Retail & E-commerce',
                  requirements: 'Standard GMA sizes, display-ready, high turnover, cost-effective',
                  recommended: 'Standard wooden GMA pallets',
                  features: ['48" × 40" standard', 'Compatible with all forklifts', 'Easy to source', 'Cost-effective', 'Recyclable'],
                  challenges: 'High volume throughput, multiple handling points, display considerations',
                  icon: '🛒'
                },
                {
                  industry: 'Export & International Trade',
                  requirements: 'ISPM-15 certified, proper documentation, durability for long transit, customs compliance',
                  recommended: 'Heat-treated wood or plastic',
                  features: ['ISPM-15 stamp', 'Heat treatment certification', 'Proper documentation', 'Meets global standards', 'Durable construction'],
                  challenges: 'International regulations, long shipping times, customs inspections',
                  icon: '🌍'
                },
                {
                  industry: 'Chemical & Petrochemical',
                  requirements: 'Chemical resistance, spill containment, heavy loads, safety compliance',
                  recommended: 'Steel or chemical-resistant plastic',
                  features: ['Chemical resistant', 'Spill containment options', 'Non-sparking materials', 'Heavy duty rated', 'Safety compliant'],
                  challenges: 'Hazardous materials, corrosive substances, safety regulations',
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

      {/* Why Choose Our Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Why Businesses Trust Our Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Rigorous Quality Control',
                description: 'Every pallet undergoes multi-point inspection including visual assessment, dimension verification, load testing, and quality grading. We reject any product that doesn't meet our strict standards.',
                icon: '✓',
                stats: '99.8% pass rate'
              },
              {
                title: 'Competitive Market Pricing',
                description: 'Our high-volume operations and efficient processes enable us to offer competitive pricing without compromising quality. Volume discounts available for large orders.',
                icon: '💰',
                stats: 'Save up to 30%'
              },
              {
                title: 'Immediate Availability',
                description: 'With over 100,000 pallets in stock across 8 distribution centers, we can fulfill orders of any size immediately. No waiting weeks for manufacture or delivery.',
                icon: '⚡',
                stats: 'Same-day shipping'
              },
              {
                title: 'Industry Certifications',
                description: 'Our products meet or exceed all relevant industry standards including ISPM-15, FDA, GMA, and OSHA requirements. Full documentation provided with every order.',
                icon: '📋',
                stats: 'Fully compliant'
              },
              {
                title: 'Custom Solutions',
                description: 'Need something unique? Our engineering team can design custom pallets to your exact specifications, from special dimensions to unique features for automated systems.',
                icon: '🎨',
                stats: '2-week turnaround'
              },
              {
                title: 'Warranty Protection',
                description: 'We stand behind our products with comprehensive warranty coverage. If a pallet fails due to manufacturing defects or doesn't meet specifications, we'll replace it at no charge.',
                icon: '🛡️',
                stats: '1-year warranty'
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
              Selecting the optimal pallet involves evaluating multiple factors. Follow this comprehensive guide to
              make an informed decision that balances performance, safety, and cost.
            </p>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Assess Your Load Requirements',
                  questions: ['What is the maximum weight of your loaded pallet?', 'How is the weight distributed?', 'What are the dimensions of your product?', 'Is the load stable or does it shift?'],
                  considerations: 'Overloading pallets is the leading cause of failures. Always calculate total weight including packaging and account for uneven distribution.'
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
                  questions: ['Will pallets be exposed to moisture or weather?', 'What is the operating temperature range?', 'Are there chemicals or contaminants present?', 'Do you need clean room compatibility?'],
                  considerations: 'Environmental conditions significantly impact pallet performance and lifespan. Choose materials appropriate for your conditions.'
                },
                {
                  step: 5,
                  title: 'Check Regulatory Requirements',
                  questions: ['Do you ship internationally (ISPM-15)?', 'Are there industry-specific regulations (FDA, GMP)?', 'Do you need specific certifications?', 'Are there customer requirements?'],
                  considerations: 'Non-compliance can result in rejected shipments, fines, or product contamination. Verify all applicable regulations.'
                },
                {
                  step: 6,
                  title: 'Calculate Total Cost of Ownership',
                  questions: ['What is your expected pallet lifespan?', 'How many trips will each pallet make?', 'What are repair and replacement costs?', 'Are pallets returnable or one-way?'],
                  considerations: 'The cheapest pallet isn't always the most economical. Factor in durability, repair costs, and operational efficiency.'
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
              <h3 className="text-2xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="text-lg mb-6">
                Our pallet specialists have decades of combined experience and can help you navigate these decisions.
                We'll analyze your requirements and recommend the optimal solution – no obligation, no pressure.
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Consult with an Expert
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
              Ready to Find Your Perfect Pallet Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              With over 100,000 pallets in stock and same-day delivery available, we're ready to serve your needs immediately.
              Get a free quote today and experience the USA Pallet Solution difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary-600 hover:text-primary-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
              >
                Get Free Quote
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
