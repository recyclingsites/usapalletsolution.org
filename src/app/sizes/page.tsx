'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SizesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Complete Pallet Size Guide</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Comprehensive guide to standard and custom pallet dimensions. Find the perfect size for your industry, understand international standards, and learn how to optimize your supply chain with the right pallet dimensions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#size-chart" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                View Size Chart
              </a>
              <a href="#size-selector" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                Size Selection Tool
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Size Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Why Pallet Size Matters
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Selecting the correct pallet size impacts your entire supply chain, from warehouse efficiency to shipping costs. Understanding standard sizes helps you optimize operations and reduce expenses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '💰',
                  title: 'Cost Efficiency',
                  description: 'Standard sizes maximize trailer space, reducing shipping costs by up to 25%. Proper sizing eliminates wasted space and reduces per-unit transportation expenses.',
                },
                {
                  icon: '🏭',
                  title: 'Warehouse Optimization',
                  description: 'Correct pallet dimensions ensure perfect fit in racking systems, maximizing vertical storage and improving warehouse density by 15-30%.',
                },
                {
                  icon: '🚚',
                  title: 'Loading Efficiency',
                  description: 'Standard sizes enable faster loading and unloading, reducing dock time by 40% and improving overall supply chain velocity.',
                },
                {
                  icon: '🌍',
                  title: 'Global Compatibility',
                  description: 'Understanding international standards ensures smooth cross-border shipping and reduces delays at customs and distribution centers.',
                },
                {
                  icon: '📦',
                  title: 'Product Protection',
                  description: 'Properly sized pallets prevent overhang, reduce product damage, and ensure stable loads during transport and storage.',
                },
                {
                  icon: '♻️',
                  title: 'Sustainability',
                  description: 'Optimized pallet sizes reduce material waste, lower carbon footprint, and improve recyclability at end of life.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard North American Sizes - Detailed */}
      <section id="size-chart" className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Standard North American Pallet Sizes
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              North America uses several standard pallet sizes, each optimized for specific industries and applications. Understanding these standards helps you make informed decisions for your operations.
            </p>

            <div className="bg-white rounded-2xl soft-shadow overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Size Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Dimensions (L × W)</th>
                      <th className="px-6 py-4 text-left font-semibold">Primary Industry</th>
                      <th className="px-6 py-4 text-left font-semibold">Static Load</th>
                      <th className="px-6 py-4 text-left font-semibold">Dynamic Load</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { name: 'GMA Pallet', dimensions: '48" × 40"', industry: 'Grocery, Retail, Consumer Goods', static: '5,500 lbs', dynamic: '4,600 lbs', description: 'The most common pallet in North America, used by 30% of all businesses' },
                      { name: 'CHEP Pallet (Blue)', dimensions: '48" × 40"', industry: 'Pooling System, Retail', static: '4,400 lbs', dynamic: '2,800 lbs', description: 'Standardized rental pallet system used globally' },
                      { name: 'Euro Pallet (EPAL)', dimensions: '47.2" × 39.4"', industry: 'European Standard, Export', static: '5,500 lbs', dynamic: '4,400 lbs', description: 'Required for many European imports/exports' },
                      { name: 'Half Pallet', dimensions: '48" × 20"', industry: 'Retail Display, Small Loads', static: '3,000 lbs', dynamic: '2,000 lbs', description: 'Perfect for retail displays and smaller shipments' },
                      { name: 'Quarter Pallet', dimensions: '24" × 20"', industry: 'Retail, Small Products', static: '1,500 lbs', dynamic: '1,000 lbs', description: 'Ideal for end-cap displays and promotional items' },
                      { name: 'Drum Pallet', dimensions: '42" × 42"', industry: 'Chemical, Petroleum, Drums', static: '4,500 lbs', dynamic: '3,000 lbs', description: 'Square design accommodates four 55-gallon drums' },
                      { name: 'Automotive Pallet', dimensions: '48" × 45"', industry: 'Automotive Parts', static: '4,600 lbs', dynamic: '3,500 lbs', description: 'Wider design for automotive industry standards' },
                      { name: 'Beverage Pallet', dimensions: '36" × 36"', industry: 'Beverages, Bottling', static: '4,200 lbs', dynamic: '3,000 lbs', description: 'Square design perfect for beverage industry' },
                      { name: 'Pharmaceutical', dimensions: '40" × 48"', industry: 'Pharma, Medical Supplies', static: '3,800 lbs', dynamic: '2,500 lbs', description: 'Clean room compatible, strict quality standards' },
                      { name: 'Telecommunications', dimensions: '48" × 48"', industry: 'Telecom Equipment', static: '4,000 lbs', dynamic: '3,000 lbs', description: 'Large square format for heavy equipment' },
                      { name: 'Dairy Pallet', dimensions: '40" × 40"', industry: 'Dairy Products', static: '3,500 lbs', dynamic: '2,800 lbs', description: 'Standard in dairy industry for milk crates' },
                      { name: 'Cement Block', dimensions: '40" × 48"', industry: 'Construction Materials', static: '6,000 lbs', dynamic: '4,000 lbs', description: 'Heavy-duty for construction materials' },
                    ].map((size, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-primary-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-800">{size.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{size.description}</div>
                        </td>
                        <td className="px-6 py-4 text-secondary-600 font-mono font-bold">{size.dimensions}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{size.industry}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{size.static}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{size.dynamic}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-50 border border-secondary-200 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-secondary-700 mb-3">Understanding Load Capacities:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <span className="font-bold">Static Load:</span> Maximum weight when pallet is stationary on the ground or in storage
                </div>
                <div>
                  <span className="font-bold">Dynamic Load:</span> Maximum weight when pallet is being moved by forklift or pallet jack
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Size Standards Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              International Pallet Size Standards
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Different regions have adopted different standard sizes based on local industry needs, shipping containers, and historical practices. Understanding these variations is crucial for international trade.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  region: 'North America',
                  flag: '🇺🇸',
                  standard: '48" × 40"',
                  metric: '1219 × 1016 mm',
                  usage: 'Used by approximately 35% of all pallets in North America',
                  notes: 'GMA standard, optimized for North American trailer widths (96 inches)',
                  compatibility: 'Fits perfectly in 48-foot trailers (24 pallets per layer)',
                },
                {
                  region: 'Europe',
                  flag: '🇪🇺',
                  standard: '47.2" × 39.4"',
                  metric: '1200 × 1000 mm',
                  usage: 'EUR-pallet, most common in European Union',
                  notes: 'Required for EPAL certification, essential for EU shipping',
                  compatibility: 'Optimized for European trucks and rail cars',
                },
                {
                  region: 'Australia',
                  flag: '🇦🇺',
                  standard: '46" × 46"',
                  metric: '1165 × 1165 mm',
                  usage: 'Standard Australian pallet (SAP)',
                  notes: 'Square design popular in Asia-Pacific region',
                  compatibility: 'Works well in both truck and container shipping',
                },
                {
                  region: 'Asia',
                  flag: '🌏',
                  standard: '43.3" × 43.3"',
                  metric: '1100 × 1100 mm',
                  usage: 'Common in Japan, Korea, and other Asian countries',
                  notes: 'T11 pallet, ISO 6780 standard',
                  compatibility: 'Optimized for Asian shipping containers',
                },
                {
                  region: 'ISO Standard 1',
                  flag: '🌍',
                  standard: '47.2" × 39.4"',
                  metric: '1200 × 1000 mm',
                  usage: 'Globally recognized ISO 6780 standard',
                  notes: 'Same as EUR-pallet, widely accepted internationally',
                  compatibility: 'Universal acceptance in most countries',
                },
                {
                  region: 'ISO Standard 2',
                  flag: '🌍',
                  standard: '39.4" × 47.2"',
                  metric: '1000 × 1200 mm',
                  usage: 'Alternate orientation of ISO standard',
                  notes: 'Used when longer dimension is needed perpendicular to direction of travel',
                  compatibility: 'Same as ISO Standard 1, different orientation',
                },
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary-600">{standard.region}</h3>
                    <span className="text-4xl">{standard.flag}</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Standard Size:</div>
                      <div className="text-xl font-bold text-secondary-600">{standard.standard}</div>
                      <div className="text-sm text-gray-600 font-mono">{standard.metric}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Usage:</div>
                      <div className="text-gray-700">{standard.usage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Notes:</div>
                      <div className="text-gray-700 text-sm">{standard.notes}</div>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">Compatibility:</div>
                      <div className="text-gray-600 text-sm">{standard.compatibility}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Exporting Internationally?</h3>
              <p className="text-lg mb-6 opacity-90">
                We offer ISPM 15 certified pallets in all international standard sizes, ensuring your shipments meet global requirements and avoid costly delays at customs.
              </p>
              <Link href="/products/export-pallets" className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Learn About Export Pallets
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Need Help Choosing a Size?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our pallet experts can help you select the perfect size for your specific needs. Get a free consultation and quote today.
              </p>
            </motion.div>
            <ContactForm productType="Size Guide Inquiry" />
          </div>
        </div>
      </section>

      {/* Size Selection Guide */}
      <section id="size-selector" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              How to Select the Right Pallet Size
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Choosing the correct pallet size requires careful consideration of multiple factors. Follow this comprehensive guide to make the best decision for your operations.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Measure Your Products',
                  description: 'Start by measuring your actual products and packaging',
                  details: [
                    'Measure length, width, and height of individual products',
                    'Account for packaging materials and overhang',
                    'Consider how products will be stacked or arranged',
                    'Calculate total footprint needed per pallet',
                    'Allow 1-2 inches clearance on all sides for stability',
                  ],
                  tip: 'Products should not overhang the pallet edge to prevent damage during handling',
                },
                {
                  step: 2,
                  title: 'Consider Your Transport Method',
                  description: 'Different transportation modes favor different pallet sizes',
                  details: [
                    'Truck: 48" × 40" pallets fit perfectly in 48-foot trailers (24 per layer)',
                    'Container: 40" × 48" can fit more pallets in 20-foot containers',
                    'Rail: Standard sizes work best for intermodal shipping',
                    'Air freight: Smaller, lighter pallets reduce costs',
                    'Calculate pallets per load to maximize trailer/container utilization',
                  ],
                  tip: 'Wasted trailer space costs money - choose sizes that maximize capacity',
                },
                {
                  step: 3,
                  title: 'Check Your Warehouse Infrastructure',
                  description: 'Ensure pallets fit your existing storage systems',
                  details: [
                    'Measure rack bay widths and depths',
                    'Check forklift capacity and mast height',
                    'Verify aisle widths accommodate pallet dimensions',
                    'Consider how pallets will be accessed (front, side, or both)',
                    'Account for clearances required by fire codes',
                  ],
                  tip: 'Non-standard sizes may require expensive rack modifications',
                },
                {
                  step: 4,
                  title: 'Calculate Weight and Load Distribution',
                  description: 'Match pallet strength to your load requirements',
                  details: [
                    'Calculate total weight including product and packaging',
                    'Determine if load will be stored (static) or moved (dynamic)',
                    'Consider racking load if storing pallets on shelves',
                    'Account for load distribution - concentrated vs. evenly distributed',
                    'Add safety margin of 20-30% to maximum expected weight',
                  ],
                  tip: 'Overloaded pallets are a major safety hazard and can collapse unexpectedly',
                },
                {
                  step: 5,
                  title: 'Review Industry Standards',
                  description: 'Some industries require specific pallet sizes',
                  details: [
                    'Grocery (GMA): 48" × 40" is virtually mandatory',
                    'Automotive: 48" × 45" is industry standard',
                    'Pharmaceuticals: Strict cleanliness and size requirements',
                    'Export: Must comply with destination country standards',
                    'Check with major customers for any specific requirements',
                  ],
                  tip: 'Non-standard sizes may be rejected by retailers and distributors',
                },
                {
                  step: 6,
                  title: 'Evaluate Total Cost of Ownership',
                  description: 'Consider all costs, not just initial purchase price',
                  details: [
                    'Purchase price: Standard sizes are usually cheaper',
                    'Shipping costs: Maximize loads to reduce per-unit shipping',
                    'Storage costs: Higher density reduces warehouse needs',
                    'Handling costs: Standard sizes are faster to load/unload',
                    'Resale value: Standard pallets have better secondary markets',
                  ],
                  tip: 'A cheaper non-standard pallet can cost more in the long run',
                },
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-2xl soft-shadow border border-gray-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {guide.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <ul className="space-y-2 mb-4">
                        {guide.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-secondary-500 mr-2 mt-1">✓</span>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                        <div className="flex items-start">
                          <span className="text-xl mr-2">💡</span>
                          <div>
                            <div className="font-bold text-primary-700 text-sm mb-1">Pro Tip:</div>
                            <div className="text-gray-700 text-sm">{guide.tip}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Load Capacity by Size */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Load Capacity Charts by Size
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Understanding load capacities helps prevent damage and ensures safety. Capacity varies based on pallet construction, wood grade, and deck board thickness.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Wooden Pallet Capacities</h3>
                <div className="space-y-4">
                  {[
                    { size: '48" × 40" (GMA)', static: '5,500 lbs', dynamic: '4,600 lbs', racking: '2,500 lbs' },
                    { size: '48" × 48" (Telecom)', static: '4,000 lbs', dynamic: '3,000 lbs', racking: '2,200 lbs' },
                    { size: '42" × 42" (Drum)', static: '4,500 lbs', dynamic: '3,000 lbs', racking: '2,000 lbs' },
                    { size: '40" × 48" (Pharma)', static: '3,800 lbs', dynamic: '2,500 lbs', racking: '1,800 lbs' },
                    { size: '36" × 36" (Beverage)', static: '4,200 lbs', dynamic: '3,000 lbs', racking: '2,000 lbs' },
                  ].map((capacity, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="font-bold text-gray-800 mb-2">{capacity.size}</div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Static</div>
                          <div className="font-semibold text-primary-600">{capacity.static}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Dynamic</div>
                          <div className="font-semibold text-secondary-600">{capacity.dynamic}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Racking</div>
                          <div className="font-semibold text-gray-700">{capacity.racking}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Plastic Pallet Capacities</h3>
                <div className="space-y-4">
                  {[
                    { size: '48" × 40" (Standard)', static: '30,000 lbs', dynamic: '5,000 lbs', racking: '2,500 lbs' },
                    { size: '48" × 48" (Heavy Duty)', static: '35,000 lbs', dynamic: '6,000 lbs', racking: '3,000 lbs' },
                    { size: '45" × 45" (Export)', static: '25,000 lbs', dynamic: '4,500 lbs', racking: '2,200 lbs' },
                    { size: '40" × 48" (Nestable)', static: '15,000 lbs', dynamic: '3,000 lbs', racking: '1,500 lbs' },
                    { size: '48" × 40" (Rackable)', static: '20,000 lbs', dynamic: '4,000 lbs', racking: '2,800 lbs' },
                  ].map((capacity, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="font-bold text-gray-800 mb-2">{capacity.size}</div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Static</div>
                          <div className="font-semibold text-primary-600">{capacity.static}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Dynamic</div>
                          <div className="font-semibold text-secondary-600">{capacity.dynamic}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Racking</div>
                          <div className="font-semibold text-gray-700">{capacity.racking}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-50 border border-secondary-200 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-secondary-700 mb-4">Understanding Capacity Types:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Static Load Capacity</h4>
                  <p className="text-sm text-gray-700">Maximum weight when pallet is stationary on a flat, level surface. Highest capacity rating.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Dynamic Load Capacity</h4>
                  <p className="text-sm text-gray-700">Maximum weight when pallet is being moved by forklift or pallet jack. Lower than static due to stress during movement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Racking Load Capacity</h4>
                  <p className="text-sm text-gray-700">Maximum weight when pallet is stored on warehouse racking. Lowest capacity due to concentrated stress points.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Standard Sizes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Pallet Sizes by Industry
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Different industries have adopted specific pallet sizes that best suit their products and distribution networks. Using industry-standard sizes ensures compatibility with partners and customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: 'Grocery & Retail',
                  icon: '🛒',
                  sizes: ['48" × 40" (GMA)', '48" × 20" (Half)', '24" × 20" (Quarter)'],
                  notes: 'GMA standard is mandatory for most major retailers',
                  marketShare: '70% of industry',
                },
                {
                  industry: 'Automotive',
                  icon: '🚗',
                  sizes: ['48" × 45"', '48" × 40"'],
                  notes: 'Wider pallets accommodate automotive parts packaging',
                  marketShare: '80% use 48" × 45"',
                },
                {
                  industry: 'Pharmaceutical',
                  icon: '💊',
                  sizes: ['40" × 48"', '31.5" × 47.2"'],
                  notes: 'Strict cleanliness and tracking requirements',
                  marketShare: '65% use 40" × 48"',
                },
                {
                  industry: 'Telecommunications',
                  icon: '📡',
                  sizes: ['48" × 48"', '40" × 48"'],
                  notes: 'Square pallets for heavy equipment',
                  marketShare: '90% use 48" × 48"',
                },
                {
                  industry: 'Chemicals & Drums',
                  icon: '🛢️',
                  sizes: ['42" × 42"', '48" × 40"'],
                  notes: '42" × 42" fits four 55-gallon drums perfectly',
                  marketShare: '75% use 42" × 42"',
                },
                {
                  industry: 'Beverage',
                  icon: '🥤',
                  sizes: ['36" × 36"', '40" × 48"'],
                  notes: 'Square design for bottles and cans',
                  marketShare: '60% use 36" × 36"',
                },
                {
                  industry: 'Dairy',
                  icon: '🥛',
                  sizes: ['40" × 40"', '48" × 40"'],
                  notes: 'Optimized for milk crate dimensions',
                  marketShare: '85% use 40" × 40"',
                },
                {
                  industry: 'Paint & Coatings',
                  icon: '🎨',
                  sizes: ['42" × 42"', '48" × 40"'],
                  notes: 'Square pallets for buckets and containers',
                  marketShare: '55% use 42" × 42"',
                },
                {
                  industry: 'Consumer Electronics',
                  icon: '📱',
                  sizes: ['48" × 40"', '40" × 48"'],
                  notes: 'Standard sizes for retail distribution',
                  marketShare: '90% use 48" × 40"',
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{industry.industry}</h3>
                  <div className="space-y-2 mb-4">
                    {industry.sizes.map((size, idx) => (
                      <div key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded text-sm font-medium">
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{industry.notes}</p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold">{industry.marketShare}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Size Options */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Custom Pallet Sizes
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Sometimes standard sizes don't meet your unique requirements. We manufacture custom pallets in any dimension to perfectly match your specific needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">When to Choose Custom Sizes</h3>
                <ul className="space-y-4">
                  {[
                    {
                      reason: 'Unique Product Dimensions',
                      description: 'Your products don\'t fit efficiently on standard pallets, leading to wasted space or overhang',
                    },
                    {
                      reason: 'Maximize Container Space',
                      description: 'Custom sizes can increase container utilization by 15-25% for certain product types',
                    },
                    {
                      reason: 'Proprietary Racking Systems',
                      description: 'Your warehouse uses non-standard racking that requires specific pallet dimensions',
                    },
                    {
                      reason: 'Automated Systems',
                      description: 'Conveyor systems, automated storage, or robotic handling require exact specifications',
                    },
                    {
                      reason: 'Display Requirements',
                      description: 'Point-of-sale displays need specific sizes for optimal product presentation',
                    },
                    {
                      reason: 'Weight Distribution',
                      description: 'Heavy products need larger footprint to distribute weight safely',
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary-500 mr-3 mt-1">✓</span>
                      <div>
                        <div className="font-bold text-gray-800">{item.reason}</div>
                        <div className="text-gray-600 text-sm">{item.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Custom Pallet Specifications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Available Size Ranges:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Minimum Length:</span>
                        <span className="font-semibold text-gray-800">18 inches</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Maximum Length:</span>
                        <span className="font-semibold text-gray-800">120 inches</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Minimum Width:</span>
                        <span className="font-semibold text-gray-800">18 inches</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Maximum Width:</span>
                        <span className="font-semibold text-gray-800">60 inches</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Customization Options:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Any dimension to 1/8 inch precision
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        2-way or 4-way entry configuration
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Single or double deck construction
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Variable deck board spacing
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Custom weight capacities
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Special wood grades or treatments
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 p-4 rounded-lg">
                    <div className="text-sm">
                      <div className="font-bold text-primary-700 mb-2">Lead Time:</div>
                      <div className="text-gray-700">Custom pallets typically ship in 2-3 weeks. Rush orders available for premium pricing.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Need Custom Pallets?</h3>
              <p className="text-xl mb-6 opacity-90">
                Our engineering team will work with you to design the perfect pallet for your specific requirements
              </p>
              <Link href="/products/custom-pallets" className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Request Custom Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Measurement Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Pallet Measurement Guide
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Properly measuring pallets and loads ensures you order the right size and avoid costly mistakes. Follow these guidelines for accurate measurements.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">How to Measure a Pallet</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Dimensions are always given as Length × Width:</h4>
                    <div className="bg-primary-50 p-4 rounded-lg mb-4">
                      <div className="text-sm text-gray-700">
                        <div className="font-semibold mb-2">Standard Format: L × W</div>
                        <div>Example: 48" × 40" means:</div>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Length: 48 inches (direction of stringer boards)</li>
                          <li>Width: 40 inches (perpendicular to stringers)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Key Measurements:</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        <div>
                          <div className="font-semibold text-gray-800">Overall Length</div>
                          <div className="text-sm text-gray-600">Measure from the longest edge to the opposite edge</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        <div>
                          <div className="font-semibold text-gray-800">Overall Width</div>
                          <div className="text-sm text-gray-600">Measure perpendicular to the length</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        <div>
                          <div className="font-semibold text-gray-800">Overall Height</div>
                          <div className="text-sm text-gray-600">From floor to top deck surface</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                        <div>
                          <div className="font-semibold text-gray-800">Entry Opening</div>
                          <div className="text-sm text-gray-600">Clearance for forklift forks or pallet jack wheels</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">How to Measure Your Load</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Load Dimensions:</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        <div>
                          <div className="font-semibold text-gray-800">Measure Individual Units</div>
                          <div className="text-sm text-gray-600">Start with the dimensions of a single product including packaging</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        <div>
                          <div className="font-semibold text-gray-800">Calculate Pattern</div>
                          <div className="text-sm text-gray-600">Determine how many units fit in each layer</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        <div>
                          <div className="font-semibold text-gray-800">Account for Overhang</div>
                          <div className="text-sm text-gray-600">Products should not extend beyond pallet edges</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                        <div>
                          <div className="font-semibold text-gray-800">Calculate Total Height</div>
                          <div className="text-sm text-gray-600">Multiply layer height by number of layers, add pallet height</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                        <div>
                          <div className="font-semibold text-gray-800">Weigh Complete Load</div>
                          <div className="text-sm text-gray-600">Total weight including pallet, products, and wrapping</div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-secondary-50 border border-secondary-200 p-4 rounded-lg">
                    <div className="text-sm">
                      <div className="font-bold text-secondary-700 mb-2">Important:</div>
                      <div className="text-gray-700">Always leave 1-2 inches clearance on all sides for stability and safe handling. Overhanging loads are dangerous and may be rejected.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Common Measurement Mistakes to Avoid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: 'Confusing Length and Width',
                    solution: 'Always use the stringer direction as length. When in doubt, ask your supplier.',
                  },
                  {
                    mistake: 'Not Accounting for Packaging',
                    solution: 'Measure products with all packaging, shrink wrap, and corner protectors included.',
                  },
                  {
                    mistake: 'Ignoring Fork Entry Height',
                    solution: 'Ensure your forklifts can actually lift the pallet with the load weight.',
                  },
                  {
                    mistake: 'Measuring Only One Pallet',
                    solution: 'Pallets vary slightly. Measure multiple samples for accurate average dimensions.',
                  },
                  {
                    mistake: 'Forgetting About Overhang',
                    solution: 'Products extending beyond pallet edges create safety hazards and damage.',
                  },
                  {
                    mistake: 'Not Considering Height Restrictions',
                    solution: 'Check doorway, rack, and container height limits before finalizing dimensions.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-warm-50 rounded-lg">
                    <span className="text-2xl mr-3">⚠️</span>
                    <div>
                      <div className="font-bold text-gray-800 mb-1">{item.mistake}</div>
                      <div className="text-sm text-gray-600">{item.solution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Implications by Size */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Cost Implications by Pallet Size
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Pallet size directly impacts your total cost of ownership. Understanding these cost factors helps you make economically sound decisions for your supply chain.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Purchase Price by Size</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm mb-4">Approximate price ranges for new wooden pallets (prices vary by market conditions):</p>
                  {[
                    { size: '48" × 40" (GMA)', price: '$12-18', notes: 'Most economical due to high volume production' },
                    { size: '48" × 48"', price: '$15-22', notes: 'Larger size increases material costs' },
                    { size: '42" × 42"', price: '$14-20', notes: 'Specialty size, moderate pricing' },
                    { size: '40" × 48"', price: '$13-19', notes: 'Common size, competitive pricing' },
                    { size: 'Custom Size', price: '$20-35+', notes: 'Higher cost due to specialized manufacturing' },
                    { size: 'Half Pallet (48" × 20")', price: '$8-12', notes: 'Less material, lower price' },
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-gray-800">{item.size}</div>
                        <div className="text-xl font-bold text-primary-600">{item.price}</div>
                      </div>
                      <div className="text-sm text-gray-600">{item.notes}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Hidden Costs by Size</h3>
                <div className="space-y-4">
                  {[
                    {
                      factor: 'Shipping Efficiency',
                      impact: 'High',
                      description: 'Non-standard sizes waste trailer space, increasing shipping costs by 10-30%',
                    },
                    {
                      factor: 'Warehouse Storage',
                      impact: 'Medium',
                      description: 'Odd sizes create wasted aisle space and reduce storage density',
                    },
                    {
                      factor: 'Handling Time',
                      impact: 'Medium',
                      description: 'Non-standard pallets slow loading/unloading by 15-20%',
                    },
                    {
                      factor: 'Resale Value',
                      impact: 'High',
                      description: 'Standard sizes have strong secondary markets, custom sizes may have no resale value',
                    },
                    {
                      factor: 'Repair Availability',
                      impact: 'Medium',
                      description: 'Standard sizes are easier and cheaper to repair',
                    },
                    {
                      factor: 'Pooling Options',
                      impact: 'High',
                      description: 'Only standard sizes work with pallet pooling services like CHEP',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-warm-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-gray-800">{item.factor}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.impact} Impact
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Total Cost of Ownership Comparison</h3>
              <p className="text-gray-600 mb-6">5-year cost comparison for 1,000 pallets annually:</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Cost Factor</th>
                      <th className="px-4 py-3 text-right">Standard 48"×40"</th>
                      <th className="px-4 py-3 text-right">Custom Size</th>
                      <th className="px-4 py-3 text-right">Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { factor: 'Initial Purchase', standard: '$75,000', custom: '$125,000', diff: '+$50,000' },
                      { factor: 'Shipping Costs (5 yr)', standard: '$500,000', custom: '$625,000', diff: '+$125,000' },
                      { factor: 'Storage Costs (5 yr)', standard: '$200,000', custom: '$240,000', diff: '+$40,000' },
                      { factor: 'Handling Labor (5 yr)', standard: '$150,000', custom: '$180,000', diff: '+$30,000' },
                      { factor: 'Repairs (5 yr)', standard: '$25,000', custom: '$40,000', diff: '+$15,000' },
                      { factor: 'Resale Value', standard: '-$15,000', custom: '$0', diff: '+$15,000' },
                      { factor: 'Total 5-Year Cost', standard: '$935,000', custom: '$1,210,000', diff: '+$275,000', highlight: true },
                    ].map((row, idx) => (
                      <tr key={idx} className={row.highlight ? 'bg-primary-50 font-bold' : ''}>
                        <td className="px-4 py-3 text-gray-800">{row.factor}</td>
                        <td className="px-4 py-3 text-right text-gray-700">{row.standard}</td>
                        <td className="px-4 py-3 text-right text-gray-700">{row.custom}</td>
                        <td className="px-4 py-3 text-right text-red-600 font-semibold">{row.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-secondary-50 border border-secondary-200 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Note:</span> These are estimated costs for illustration. Actual costs vary by region, volume, and specific requirements. Custom sizes may be justified when they provide significant operational benefits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pallet Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Understanding Pallet Specifications
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Beyond just dimensions, pallets have many specifications that affect functionality and compatibility with your equipment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Entry Types</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">2-Way Entry</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Forklifts can enter from two opposite sides. Common in stringer pallets where solid stringers block perpendicular access.
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> One-direction handling, cost-sensitive applications
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">4-Way Entry</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Forklifts can enter from all four sides. Standard in block pallets where blocks create openings on all sides.
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> Flexibility in handling, automated systems
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Partial 4-Way Entry</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Notched stringers allow limited access from all sides, but only forklifts work (not pallet jacks).
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> Compromise between cost and flexibility
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Deck Styles</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Single-Deck (Skid)</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Deck boards only on top, no bottom deck. Lighter weight and lower cost option for one-way shipments.
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> Export shipments, light loads, cost savings
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Double-Deck</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Deck boards on both top and bottom. More durable, stable, and suitable for heavy loads and multiple trips.
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> Heavy loads, reusable pallets, racking
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Solid Deck</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      No gaps between deck boards, creating a continuous surface. Better for small items and prevents product from falling through.
                    </p>
                    <div className="text-xs text-gray-500">
                      <span className="font-semibold">Best for:</span> Small products, loose items, clean rooms
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Selection Tips */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
            >
              Expert Size Selection Tips
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📏',
                  title: 'Measure Your Products',
                  tip: 'Choose pallet size based on your product dimensions and stacking patterns. Allow 1-2 inches clearance on all sides.',
                },
                {
                  icon: '🚚',
                  title: 'Consider Transport',
                  tip: 'Standard sizes maximize trailer space and reduce shipping costs. Calculate pallets per load before deciding.',
                },
                {
                  icon: '🏭',
                  title: 'Check Your Racks',
                  tip: 'Ensure pallets fit your warehouse racking system dimensions with proper clearances for safe handling.',
                },
                {
                  icon: '⚖️',
                  title: 'Weight Capacity',
                  tip: 'Calculate total load weight including product and packaging. Add 20-30% safety margin to capacity requirements.',
                },
                {
                  icon: '🌍',
                  title: 'Export Requirements',
                  tip: 'International shipments may require specific pallet sizes and ISPM 15 heat treatment certification.',
                },
                {
                  icon: '♻️',
                  title: 'Reusability',
                  tip: 'Standard sizes are easier to repair, resell, or recycle, reducing total cost of ownership over time.',
                },
                {
                  icon: '👥',
                  title: 'Customer Requirements',
                  tip: 'Check with major customers about pallet requirements. Many retailers mandate specific sizes.',
                },
                {
                  icon: '💰',
                  title: 'Total Cost Analysis',
                  tip: 'Consider purchase price, shipping efficiency, storage costs, and resale value in your decision.',
                },
                {
                  icon: '🔧',
                  title: 'Equipment Compatibility',
                  tip: 'Verify your forklifts, conveyors, and automated systems can handle your chosen pallet size.',
                },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl soft-shadow border border-gray-200 text-center hover:soft-shadow-hover transition-all"
                >
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-primary-600 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs About Sizes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Frequently Asked Questions About Pallet Sizes
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              Common questions about pallet dimensions, standards, and selection.
            </p>

            <div className="space-y-6">
              {[
                {
                  question: 'What is the most common pallet size in North America?',
                  answer: 'The 48" × 40" GMA pallet is the most common in North America, representing approximately 35% of all pallets in use. It\'s the standard for grocery and retail industries and is required by most major retailers including Walmart, Target, and Costco.',
                },
                {
                  question: 'Can I use different sized pallets in the same shipment?',
                  answer: 'While technically possible, mixing pallet sizes in a single shipment can create loading inefficiencies, increase shipping costs, and complicate warehouse receiving. It\'s generally best to use uniform sizes for each shipment.',
                },
                {
                  question: 'How many 48" × 40" pallets fit in a standard trailer?',
                  answer: 'A standard 48-foot trailer can hold 24 pallets (12 per row, 2 rows) when loaded with 48" × 40" pallets. This assumes single-stacked pallets; you can double-stack if height and weight allow.',
                },
                {
                  question: 'What\'s the difference between 48" × 40" and 40" × 48"?',
                  answer: 'The dimensions are reversed - one is 8 inches longer than wide, the other is 8 inches wider than long. The choice depends on your product dimensions and how you want to arrange items on the pallet. Both have similar load capacities.',
                },
                {
                  question: 'Do I need ISPM 15 certified pallets for export?',
                  answer: 'Yes, most countries require ISPM 15 treatment and certification for wooden pallets to prevent pest introduction. This involves heat treatment or methyl bromide fumigation. Plastic pallets don\'t require ISPM 15 certification.',
                },
                {
                  question: 'Are plastic pallets available in the same sizes as wood pallets?',
                  answer: 'Yes, plastic pallets are manufactured in all standard sizes (48" × 40", 48" × 48", etc.) and can also be custom molded to any size needed. They often have higher load capacities than equivalent wooden pallets.',
                },
                {
                  question: 'How do I know if my warehouse racks fit standard pallets?',
                  answer: 'Measure the inside width and depth of your rack bays. For 48" × 40" pallets, you need at least 50" × 42" bay openings to allow for clearance. Consult your rack manufacturer specifications for exact requirements.',
                },
                {
                  question: 'What happens if my products overhang the pallet?',
                  answer: 'Overhanging loads are dangerous and often rejected. They can catch on equipment, fall during handling, and create liability issues. Products should stay within pallet edges or use appropriate extensions.',
                },
                {
                  question: 'Can pallet size affect my shipping costs?',
                  answer: 'Absolutely. Non-standard sizes can waste trailer space, requiring more shipments. For example, using 42" × 42" pallets instead of 48" × 40" can reduce trailer capacity by 20%, significantly increasing per-unit shipping costs.',
                },
                {
                  question: 'How long does it take to get custom-sized pallets?',
                  answer: 'Custom pallets typically take 2-3 weeks for production after design approval. Rush orders can be accommodated in 7-10 days with premium pricing. Standard sizes are usually available for immediate or next-day delivery.',
                },
                {
                  question: 'What\'s the smallest pallet size you offer?',
                  answer: 'We can manufacture pallets as small as 18" × 18", though the most common small size is the quarter pallet at 24" × 20". Smaller pallets are popular for retail displays and small product shipments.',
                },
                {
                  question: 'Do pallet sizes need to match for stacking?',
                  answer: 'Yes, for safe and stable stacking, pallets should be the same size. Stacking different sizes creates unstable loads and can damage products. If you must mix sizes, always put larger pallets on bottom.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Not Sure Which Size is Right?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Our pallet experts are ready to help you select the perfect size for your specific needs. Get a free consultation and custom recommendation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                  Get Expert Advice
                </Link>
                <Link href="/products" className="px-10 py-4 bg-transparent text-white rounded-xl font-bold text-lg border-2 border-white transition-all hover:bg-white/10">
                  Browse All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
