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
              A guide to standard and custom pallet dimensions. Compare common sizes by industry, understand international standards, and work out which footprint suits your loads.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#size-chart" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                View Size Chart
              </a>
              <a href="#size-selector" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                Size Selection Guide
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
              The pallet size you choose affects your whole supply chain, from warehouse storage to freight. Understanding standard sizes helps you plan loads and avoid problems at receiving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '💰',
                  title: 'Cost Efficiency',
                  description: 'Standard sizes make better use of trailer space. A footprint that suits the load avoids wasted space and helps keep per-unit transportation expenses down.',
                },
                {
                  icon: '🏭',
                  title: 'Warehouse Optimization',
                  description: 'Pallet dimensions that match your racking let you use bays and vertical storage as designed, without loads hanging over beams or into aisles.',
                },
                {
                  icon: '🚚',
                  title: 'Loading Efficiency',
                  description: 'Dock equipment, forklifts and conveyors are generally set up around standard sizes, so standard pallets tend to move through loading and unloading more easily.',
                },
                {
                  icon: '🌍',
                  title: 'Global Compatibility',
                  description: 'Pallet standards differ by region. Knowing what your destination uses helps you match the equipment and racking at the receiving end.',
                },
                {
                  icon: '📦',
                  title: 'Product Protection',
                  description: 'Properly sized pallets prevent overhang, reduce product damage, and support stable loads during transport and storage.',
                },
                {
                  icon: '♻️',
                  title: 'Sustainability',
                  description: 'Standard sizes are easier to reuse, repair and recycle, and reusing a pallet avoids building a new one.',
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
              North America uses several common pallet sizes, each associated with particular industries. The 48" × 40" is the size most buyers will encounter, but others are standard in their own sectors.
            </p>

            <div className="bg-white rounded-2xl soft-shadow overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Size Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Dimensions (L × W)</th>
                      <th className="px-6 py-4 text-left font-semibold">Metric (mm)</th>
                      <th className="px-6 py-4 text-left font-semibold">Primary Industry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { name: 'GMA Pallet', dimensions: '48" × 40"', metric: '1219 × 1016', industry: 'Grocery, Retail, Consumer Goods', description: 'The most common pallet size in North America' },
                      { name: 'Drum Pallet', dimensions: '48" × 48"', metric: '1219 × 1219', industry: 'Drums, Chemicals', description: 'Large square format that can seat four 55-gallon drums' },
                      { name: 'Telecom and Paint Pallet', dimensions: '42" × 42"', metric: '1067 × 1067', industry: 'Telecommunications, Paint', description: 'Square format and one of the ISO 6780 sizes' },
                      { name: 'Military and Cement Pallet', dimensions: '40" × 48"', metric: '1016 × 1219', industry: 'Military, Cement', description: 'Same footprint as the GMA, with 40" stringers and 48" deck boards' },
                      { name: 'Chemical and Beverage Pallet', dimensions: '48" × 42"', metric: '1219 × 1067', industry: 'Chemicals, Beverages', description: 'Slightly wider than the GMA footprint' },
                      { name: 'Automotive Pallet', dimensions: '48" × 45"', metric: '1219 × 1143', industry: 'Automotive Parts', description: 'Wider format associated with automotive parts' },
                      { name: 'Square Drum Pallet', dimensions: '44" × 44"', metric: '1118 × 1118', industry: 'Drums, Chemicals', description: 'Smaller square option for drum and chemical loads' },
                      { name: 'Dairy Pallet', dimensions: '40" × 40"', metric: '1016 × 1016', industry: 'Dairy Products', description: 'Square format associated with dairy distribution' },
                      { name: 'Beverage Pallet', dimensions: '36" × 36"', metric: '914 × 914', industry: 'Beverages', description: 'Compact square format' },
                      { name: 'Beverage and Paper Pallet', dimensions: '48" × 36"', metric: '1219 × 914', industry: 'Beverages, Shingles, Packaged Paper', description: 'Narrower format for dense loads' },
                      { name: 'Half Pallet', dimensions: '48" × 20"', metric: '1219 × 508', industry: 'Retail Display, Small Loads', description: 'Used for retail displays and smaller shipments' },
                      { name: 'Quarter Pallet', dimensions: '24" × 20"', metric: '610 × 508', industry: 'Retail, Small Products', description: 'Used for end-cap displays and promotional items' },
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
                        <td className="px-6 py-4 text-gray-600 text-sm font-mono">{size.metric}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{size.industry}</td>
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
              <h3 className="text-xl font-bold text-secondary-700 mb-3">Reading This Chart:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <span className="font-bold">Dimensions:</span> Nominal sizes, with the stringer length first. Actual pallets can vary slightly, so confirm exact measurements with the supplier.
                </div>
                <div>
                  <span className="font-bold">Industries:</span> Common associations, not rules. Check what your customers and receiving sites actually require before you order.
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
              Different regions have adopted different standard sizes based on local industry needs and historical practice. ISO 6780 recognizes six pallet sizes used around the world, and knowing them helps with international trade.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  region: 'North America',
                  flag: '🇺🇸',
                  standard: '48" × 40"',
                  metric: '1219 × 1016 mm',
                  usage: 'The most common pallet size in North America',
                  notes: 'Known as the GMA size, and one of the ISO 6780 sizes',
                  compatibility: 'A 48-foot trailer typically holds 24 on the floor, loaded straight',
                },
                {
                  region: 'Europe: EUR Pallet',
                  flag: '🇪🇺',
                  standard: '47.2" × 31.5"',
                  metric: '1200 × 800 mm',
                  usage: 'The standard EUR pallet, widely used across Europe',
                  notes: 'The EPAL Euro pallet size, and one of the ISO 6780 sizes',
                  compatibility: 'Common in European road transport and retail distribution',
                },
                {
                  region: 'Europe and Asia',
                  flag: '🌍',
                  standard: '47.2" × 39.4"',
                  metric: '1200 × 1000 mm',
                  usage: 'Used in Europe, Asia and for international shipments',
                  notes: 'An ISO 6780 size, sometimes called the industrial pallet',
                  compatibility: 'Close to the 48" × 40" footprint, but not interchangeable with it',
                },
                {
                  region: 'Australia',
                  flag: '🇦🇺',
                  standard: '45.9" × 45.9"',
                  metric: '1165 × 1165 mm',
                  usage: 'The standard Australian pallet',
                  notes: 'Square format, and an ISO 6780 size',
                  compatibility: 'Confirm fit if you are shipping into Australian supply chains',
                },
                {
                  region: 'Asia',
                  flag: '🌏',
                  standard: '43.3" × 43.3"',
                  metric: '1100 × 1100 mm',
                  usage: 'Common in Japan, Korea and other Asian countries',
                  notes: 'Known as the T11 pallet, and an ISO 6780 size',
                  compatibility: 'Check container and racking fit at the destination',
                },
                {
                  region: 'North America, Europe and Asia',
                  flag: '🌍',
                  standard: '42" × 42"',
                  metric: '1067 × 1067 mm',
                  usage: 'Used across regions, including telecom and paint in North America',
                  notes: 'Square format, and an ISO 6780 size',
                  compatibility: 'Check container and racking fit at the destination',
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
                Wood packaging in international trade generally has to meet ISPM 15. Tell us your destination and partner suppliers in our network can quote treated and marked pallets in the sizes they carry. Check current requirements for your destination.
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
                Send a free, no-obligation quote request with your load details. We pass it to partner suppliers in our network, and a partner supplier follows up. Requests are welcome from across the US; availability depends on partner suppliers.
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
                    'Leave a small margin inside the pallet edge for stability',
                  ],
                  tip: 'Products should not overhang the pallet edge to prevent damage during handling',
                },
                {
                  step: 2,
                  title: 'Consider Your Transport Method',
                  description: 'Different transportation modes favor different pallet sizes',
                  details: [
                    'Truck: A 48-foot trailer typically holds 24 pallets of 48" × 40" on the floor, loaded straight',
                    'Container: Interiors do not divide evenly by most pallet footprints, so plan the layout first',
                    'Rail: Standard sizes work best for intermodal shipping',
                    'Air freight: Weight counts, so lighter pallets are usually preferred',
                    'Calculate pallets per load to make full use of the trailer or container',
                  ],
                  tip: 'Unused trailer space adds cost, so check the load plan before you commit to a size',
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
                    'Account for any fire-code clearances that apply to your site',
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
                    'Stay under the capacity your supplier gives you, with a margin for safety',
                  ],
                  tip: 'Overloaded pallets are a major safety hazard and can collapse unexpectedly',
                },
                {
                  step: 5,
                  title: 'Review Industry Standards',
                  description: 'Some industries require specific pallet sizes',
                  details: [
                    'Grocery: 48" × 40" is the expected size in most grocery distribution',
                    'Automotive: 48" × 45" is a common size for parts',
                    'Drums and chemicals: 48" × 48", 44" × 44" and 48" × 42" are common',
                    'Export: Check destination requirements, including ISPM 15 for wood packaging',
                    'Check with major customers for any specific requirements',
                  ],
                  tip: 'Some retailers and distributors set pallet requirements, so ask before you ship',
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
              Load Capacity by Pallet Size
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Understanding load capacity helps prevent damage and supports safe handling. Capacity depends on how a pallet is built, not only on its size, so there is no single figure for any footprint. Ask the supplier for the rating of the specific pallet you are quoted.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Wooden Pallet Capacity</h3>
                <ul className="space-y-4">
                  {[
                    { factor: 'Wood Species', description: 'Hardwood and softwood pallets perform differently under load.' },
                    { factor: 'Board Thickness', description: 'Thicker deck boards and stringers generally carry more.' },
                    { factor: 'Construction', description: 'Block and stringer designs handle loads differently, and double-deck pallets spread weight better.' },
                    { factor: 'Condition', description: 'Used and repaired pallets vary, so confirm the rating for the grade you are buying.' },
                  ].map((item, idx) => (
                    <li key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="font-bold text-gray-800 mb-2">{item.factor}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
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
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Plastic Pallet Capacity</h3>
                <ul className="space-y-4">
                  {[
                    { factor: 'Design', description: 'Nestable, stackable and rackable designs are made for different jobs and carry different loads.' },
                    { factor: 'Reinforcement', description: 'Some rackable pallets use steel or other reinforcement to reduce deflection.' },
                    { factor: 'Rating Type', description: 'A high static rating does not mean a pallet can be racked at that weight.' },
                    { factor: 'Temperature and Time', description: 'Plastic can creep under sustained load and in heat, so ask about your storage conditions.' },
                  ].map((item, idx) => (
                    <li key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="font-bold text-gray-800 mb-2">{item.factor}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </li>
                  ))}
                </ul>
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
                  <p className="text-sm text-gray-700">Maximum weight when pallet is stationary on a flat, level surface. Usually the highest rating.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Dynamic Load Capacity</h4>
                  <p className="text-sm text-gray-700">Maximum weight when pallet is being moved by forklift or pallet jack. Lower than static due to stress during movement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Racking Load Capacity</h4>
                  <p className="text-sm text-gray-700">Maximum weight when pallet is stored on warehouse racking, supported only at its edges. Usually the lowest rating.</p>
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
              Different industries have settled on particular pallet sizes that suit their products and distribution networks. These are common associations, so confirm with your customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: 'Grocery & Retail',
                  icon: '🛒',
                  sizes: ['48" × 40" (GMA)', '48" × 20" (Half)', '24" × 20" (Quarter)'],
                  notes: 'The GMA size is the norm in grocery distribution',
                },
                {
                  industry: 'Automotive',
                  icon: '🚗',
                  sizes: ['48" × 45"'],
                  notes: 'A wider format associated with automotive parts',
                },
                {
                  industry: 'Telecommunications',
                  icon: '📡',
                  sizes: ['42" × 42"'],
                  notes: 'A square format commonly listed for telecom',
                },
                {
                  industry: 'Chemicals & Drums',
                  icon: '🛢️',
                  sizes: ['48" × 48"', '44" × 44"', '48" × 42"'],
                  notes: '48" × 48" can seat four 55-gallon drums',
                },
                {
                  industry: 'Beverage',
                  icon: '🥤',
                  sizes: ['48" × 42"', '48" × 36"', '36" × 36"'],
                  notes: 'Several sizes are used for bottles and cans',
                },
                {
                  industry: 'Dairy',
                  icon: '🥛',
                  sizes: ['40" × 40"'],
                  notes: 'A square format associated with dairy distribution',
                },
                {
                  industry: 'Paint & Coatings',
                  icon: '🎨',
                  sizes: ['42" × 42"'],
                  notes: 'Square pallets for pails and containers',
                },
                {
                  industry: 'Paper & Building Materials',
                  icon: '🧱',
                  sizes: ['48" × 36"', '40" × 48"'],
                  notes: '48" × 36" suits shingles and packaged paper; 40" × 48" is listed for cement',
                },
                {
                  industry: 'Military',
                  icon: '🎖️',
                  sizes: ['40" × 48"'],
                  notes: 'Commonly listed for military use; check the contract requirements',
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
                  <p className="text-gray-600 text-sm">{industry.notes}</p>
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
              Sometimes standard sizes don't meet your requirements. Partner suppliers in our network can quote custom pallets built to the dimensions you need.
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
                      description: 'A footprint matched to your product can make better use of container space for certain product types',
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
                    <h4 className="font-bold text-gray-800 mb-3">Customization Options:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Non-standard length and width
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
                        Board thickness built around your load
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-primary-500 mr-2">•</span>
                        Choice of wood species or grade
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 p-4 rounded-lg">
                    <div className="text-sm">
                      <div className="font-bold text-primary-700 mb-2">What to Include in Your Request:</div>
                      <div className="text-gray-700">Dimensions, load weight, entry type, quantity, and how the pallets will be stored and shipped. Options and lead times vary by partner supplier.</div>
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
                Send your specifications and we will pass them to partner suppliers in our network, who can quote on your requirements
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
                          <div className="text-sm text-gray-600">Measure end to end along the stringers or stringer boards</div>
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
                      <div className="text-gray-700">Keep the load inside the pallet edges, with a small margin for stability and safe handling. Overhanging loads are dangerous and may be rejected.</div>
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
              Cost Factors by Pallet Size
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Pallet size affects more than the purchase price. Pricing is by quote from partner suppliers, and the factors below help you compare options sensibly.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">What Shapes a Pallet Quote</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm mb-4">Pallet pricing moves with lumber costs and local supply, so ask for a current quote. These details affect it:</p>
                  {[
                    { size: 'Size', notes: 'High-volume sizes such as 48" × 40" tend to be easier to source than specialty sizes.' },
                    { size: 'Material', notes: 'Wood, plastic and metal differ in upfront cost and in how long they last.' },
                    { size: 'New or Used', notes: 'Used and recycled pallets are usually the lower-cost route where they suit the load.' },
                    { size: 'Construction', notes: 'Block pallets, heavier boards and double decks use more material.' },
                    { size: 'Custom Work', notes: 'Non-standard sizes generally cost more than stock sizes.' },
                    { size: 'Quantity and Location', notes: 'Order size and distance from the supplier both play a part.' },
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <div className="font-bold text-gray-800 mb-2">{item.size}</div>
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
                      description: 'Non-standard sizes can leave unused trailer space, which raises the shipping cost per unit',
                    },
                    {
                      factor: 'Warehouse Storage',
                      description: 'Odd sizes can waste rack and aisle space and reduce storage density',
                    },
                    {
                      factor: 'Handling Time',
                      description: 'Pallets that do not suit your equipment can slow loading and unloading',
                    },
                    {
                      factor: 'Resale Value',
                      description: 'Standard sizes have stronger secondary markets, while custom sizes may be hard to resell',
                    },
                    {
                      factor: 'Repair Availability',
                      description: 'Standard sizes are generally easier to repair, since replacement parts are more available',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-warm-50 p-4 rounded-lg">
                      <div className="font-bold text-gray-800 mb-2">{item.factor}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                      <span className="font-semibold">Best for:</span> Light loads, one-way shipments
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
                      <span className="font-semibold">Best for:</span> Small products, loose items
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
              Size Selection Tips
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📏',
                  title: 'Measure Your Products',
                  tip: 'Choose pallet size based on your product dimensions and stacking patterns. Keep the load inside the pallet edges.',
                },
                {
                  icon: '🚚',
                  title: 'Consider Transport',
                  tip: 'Standard sizes make better use of trailer space. Calculate pallets per load before deciding.',
                },
                {
                  icon: '🏭',
                  title: 'Check Your Racks',
                  tip: 'Ensure pallets fit your warehouse racking system dimensions with proper clearances for safe handling.',
                },
                {
                  icon: '⚖️',
                  title: 'Weight Capacity',
                  tip: 'Calculate total load weight including product and packaging, and stay under the capacity your supplier gives you.',
                },
                {
                  icon: '🌍',
                  title: 'Export Requirements',
                  tip: 'International shipments may call for specific pallet sizes and ISPM 15 treated wood. Check current requirements.',
                },
                {
                  icon: '♻️',
                  title: 'Reusability',
                  tip: 'Standard sizes are easier to repair, resell, or recycle, reducing total cost of ownership over time.',
                },
                {
                  icon: '👥',
                  title: 'Customer Requirements',
                  tip: 'Check with major customers about pallet requirements. Some retailers specify sizes.',
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
                  answer: 'The 48" × 40" pallet, often called the GMA size after the Grocery Manufacturers Association, is the most common in North America. It is the norm in grocery distribution and widely used across retail and consumer goods.',
                },
                {
                  question: 'Can I use different sized pallets in the same shipment?',
                  answer: 'While technically possible, mixing pallet sizes in a single shipment can create loading inefficiencies, increase shipping costs, and complicate warehouse receiving. It\'s generally best to use uniform sizes for each shipment.',
                },
                {
                  question: 'How many 48" × 40" pallets fit in a standard trailer?',
                  answer: 'Loaded straight, a 48-foot trailer typically holds 24 on the floor (12 rows of 2) and a 53-foot trailer typically holds 26. Double-stacking may be possible if height, weight and the load allow it. Your carrier can confirm the plan.',
                },
                {
                  question: 'What\'s the difference between 48" × 40" and 40" × 48"?',
                  answer: 'They share a footprint, but the first number is the stringer length. A 48" × 40" pallet has 48" stringers and 40" deck boards, while a 40" × 48" pallet has 40" stringers and 48" deck boards. That changes which sides take the forks, so check against your racking and equipment.',
                },
                {
                  question: 'Do I need ISPM 15 pallets for export?',
                  answer: 'Many countries require solid wood packaging to be treated and marked under ISPM 15. The usual treatment is heating to a core temperature of 56 °C for 30 minutes, shown by the IPPC mark. Plastic and metal pallets are outside its scope. Check current requirements for your destination.',
                },
                {
                  question: 'Are plastic pallets available in the same sizes as wood pallets?',
                  answer: 'Plastic pallets are widely made in common sizes such as 48" × 40". The range is narrower than wood because each size needs its own mold, so ask partner suppliers what they can quote.',
                },
                {
                  question: 'How do I know if my warehouse racks fit standard pallets?',
                  answer: 'Measure the inside width and depth of your rack bays, and compare them with the pallet and load dimensions, allowing for handling clearance. Consult your rack manufacturer specifications for exact requirements.',
                },
                {
                  question: 'What happens if my products overhang the pallet?',
                  answer: 'Overhanging loads are dangerous and often rejected. They can catch on equipment, fall during handling, and leave product edges unprotected. Products should stay within pallet edges.',
                },
                {
                  question: 'Can pallet size affect my shipping costs?',
                  answer: 'Yes. Freight is often planned around floor positions, so a footprint that fits poorly can leave unused trailer space and raise the shipping cost per unit. Work out pallets per load for each size you are considering.',
                },
                {
                  question: 'How long does it take to get custom-sized pallets?',
                  answer: 'Lead times vary by partner supplier, specification and quantity. Include your timeline in your quote request and a partner supplier follows up.',
                },
                {
                  question: 'What\'s the smallest pallet size available?',
                  answer: 'The most common small size is the quarter pallet at 24" × 20", used for retail displays and small product shipments. Smaller custom sizes can be requested through a quote.',
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
                Send a free, no-obligation quote request with your dimensions and load details, and a partner supplier in our network follows up.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                  Request a Quote
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
