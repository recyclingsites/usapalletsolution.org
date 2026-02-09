'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SellingPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Pallet Selling</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Buy Quality Pallets</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Extensive inventory of new and refurbished pallets. Premium quality, competitive prices, and fast nationwide delivery.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Your Trusted Pallet Supplier</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is one of America's premier pallet suppliers, providing businesses across all industries with high-quality pallets at competitive prices. With over 15 years of experience and an inventory exceeding 2 million pallets, we have the capacity and expertise to meet any pallet requirement - from single pallet purchases to ongoing supply agreements for major distribution centers.
              </p>
              <p className="mb-6 leading-relaxed">
                Our comprehensive inventory includes new wooden pallets, refurbished Grade A pallets, plastic pallets, metal pallets, custom-sized pallets, and specialty pallets for unique applications. Every pallet in our inventory undergoes rigorous inspection to ensure it meets or exceeds industry standards. We understand that pallets are the foundation of your supply chain, and substandard pallets can lead to product damage, injuries, and operational disruptions. That's why quality is our top priority.
              </p>
              <p className="mb-6 leading-relaxed">
                Beyond just selling pallets, we provide complete pallet solutions. Our team works with you to understand your specific needs - load capacity requirements, warehouse space constraints, shipping destinations, budget considerations, and sustainability goals. Based on this understanding, we recommend the optimal pallet solutions that balance cost-effectiveness with performance. Whether you need heat-treated pallets for international shipping, food-grade pallets for consumables, or heavy-duty pallets for industrial equipment, we have the right solution.
              </p>
              <p className="mb-6 leading-relaxed">
                Our logistics network ensures fast delivery anywhere in the United States. With strategically located distribution centers and partnerships with major carriers, we offer same-day, next-day, and scheduled delivery options. Large orders? We provide full truckload shipping at competitive rates. Small orders? LTL shipping ensures cost-effective delivery. Our delivery team is trained in proper pallet handling and will work with your receiving department to ensure smooth, efficient unloading.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-8 text-primary-600"
            >
              Request Your Quote Today
            </motion.h2>
            <ContactForm productType="Purchase Pallets" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Our Pallet Inventory</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From standard GMA pallets to specialized custom solutions, our vast inventory ensures we have the perfect pallets for your operation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'New Wooden Pallets - GMA 48x40',
                  stock: '500,000+ in stock',
                  condition: 'Brand New',
                  price: '$12-$18 each',
                  features: ['Standard 48x40 dimensions', 'ISPM 15 heat treated', 'Hardwood construction', 'Load capacity: 2,800 lbs'],
                  icon: '🆕'
                },
                {
                  category: 'Refurbished Grade A Pallets',
                  stock: '1,000,000+ available',
                  condition: 'Like New',
                  price: '$6-$10 each',
                  features: ['Professionally inspected', 'Repaired and reconditioned', 'Minimum 3 trip guarantee', 'Significant cost savings'],
                  icon: '♻️'
                },
                {
                  category: 'Custom Size Wooden Pallets',
                  stock: 'Made to order',
                  condition: 'New',
                  price: '$15-$35 each',
                  features: ['Any size specification', '2-3 week lead time', 'Custom load requirements', 'Bulk pricing available'],
                  icon: '📏'
                },
                {
                  category: 'Plastic Pallets - Premium',
                  stock: '50,000+ ready to ship',
                  condition: 'New & Used',
                  price: '$35-$120 each',
                  features: ['Hygienic and easy to clean', 'Long service life', 'Various colors available', 'Recyclable material'],
                  icon: '🔷'
                },
                {
                  category: 'Block Pallets - 4-Way Entry',
                  stock: '200,000+ in stock',
                  condition: 'New & Grade A',
                  price: '$14-$22 each',
                  features: ['Four-way forklift access', 'Higher load capacity', 'Better stability', 'Standard and custom sizes'],
                  icon: '⬛'
                },
                {
                  category: 'Euro Pallets (EPAL)',
                  stock: '100,000+ available',
                  condition: 'Certified',
                  price: '$18-$28 each',
                  features: ['EPAL certified', 'International standard', 'Heat treated', '800mm x 1200mm'],
                  icon: '🇪🇺'
                },
                {
                  category: 'Heavy-Duty Industrial Pallets',
                  stock: '75,000+ in stock',
                  condition: 'New',
                  price: '$20-$40 each',
                  features: ['Extra thick deck boards', 'Load capacity: 5,000+ lbs', 'Reinforced construction', 'Ideal for machinery'],
                  icon: '🏗️'
                },
                {
                  category: 'Export/Heat-Treated Pallets',
                  stock: '300,000+ ready',
                  condition: 'ISPM 15 Compliant',
                  price: '$10-$16 each',
                  features: ['ISPM 15 certified', 'Proper documentation', 'International shipping ready', 'Pest-free guarantee'],
                  icon: '🌍'
                },
                {
                  category: 'Specialty Food-Grade Pallets',
                  stock: '50,000+ available',
                  condition: 'Premium Quality',
                  price: '$16-$25 each',
                  features: ['FDA compliant', 'Clean and sanitized', 'No chemical treatment', 'Food industry approved'],
                  icon: '🍎'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{item.stock}</div>
                      <div className="text-xs font-semibold text-secondary-500 mt-1">{item.condition}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{item.category}</h3>
                  <div className="text-2xl font-bold text-secondary-500 mb-4">{item.price}</div>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            Why Buy From USA Pallet Solution
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Quality Guaranteed',
                description: 'Every pallet undergoes rigorous inspection. We stand behind our products with a satisfaction guarantee. Defective pallets replaced at no charge.'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Same-day delivery available in major metros. Next-day service in most regions. Scheduled deliveries to match your operations. Real-time tracking available.'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                description: 'Best value in the industry. Volume discounts on large orders. Contract pricing for ongoing needs. No hidden fees or surprise charges.'
              },
              {
                icon: '📞',
                title: 'Expert Support',
                description: 'Dedicated account managers for business clients. Technical support for pallet selection. 24/7 customer service availability. Industry expertise at your service.'
              },
              {
                icon: '📦',
                title: 'Massive Inventory',
                description: 'Over 2 million pallets in stock. Never experience supply shortages. Multiple warehouses nationwide. Emergency orders fulfilled quickly.'
              },
              {
                icon: '♻️',
                title: 'Eco-Friendly Options',
                description: 'Refurbished pallets reduce environmental impact. Sustainable sourcing practices. Recycling programs available. Carbon-neutral shipping options.'
              },
              {
                icon: '🔒',
                title: 'Reliable & Licensed',
                description: 'Fully licensed and insured. 15+ years in business. Proven track record. Thousands of satisfied clients.'
              },
              {
                icon: '📊',
                title: 'Custom Solutions',
                description: 'Custom sizes and specifications. Pallet management programs. Inventory management services. Consignment options available.'
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            Bulk Order Pricing & Volume Discounts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Standard Volume Pricing</h3>
              <div className="space-y-4">
                {[
                  { quantity: '1-99 pallets', discount: 'Standard Rate', price: '$12-$18 each' },
                  { quantity: '100-499 pallets', discount: '10% Off', price: '$10.80-$16.20 each' },
                  { quantity: '500-999 pallets', discount: '15% Off', price: '$10.20-$15.30 each' },
                  { quantity: '1,000-4,999 pallets', discount: '20% Off', price: '$9.60-$14.40 each' },
                  { quantity: '5,000+ pallets', discount: '25% Off', price: 'Custom Pricing' },
                ].map((tier, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-primary-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-primary-600">{tier.quantity}</span>
                      <span className="text-sm font-semibold text-secondary-500">{tier.discount}</span>
                    </div>
                    <div className="text-gray-700">{tier.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Contract Pricing Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Lock in rates for 12+ months',
                  'Additional 5-10% discount on all orders',
                  'Priority inventory allocation',
                  'Flexible payment terms (Net 30/60)',
                  'Dedicated account management',
                  'Free quarterly pallet audits',
                  'Customized reporting and analytics',
                  'Emergency order guarantees'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow text-center"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Need a Custom Quote?</h3>
            <p className="text-gray-600 mb-6">
              Large volume orders, special requirements, or long-term contracts? Contact our sales team for personalized pricing and solutions.
            </p>
            <Link
              href="#contact-form"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all soft-shadow"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            Delivery & Shipping Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Same-Day Delivery',
                description: 'Available in major metropolitan areas',
                features: ['Order by 10 AM', 'Delivery by 5 PM', 'Limited to local area', '$50 rush fee'],
                icon: '⚡'
              },
              {
                title: 'Next-Day Delivery',
                description: 'Most common option for urgent needs',
                features: ['Order by 3 PM', 'Delivery next business day', 'Available in most regions', 'Standard shipping rates'],
                icon: '📅'
              },
              {
                title: 'Scheduled Delivery',
                description: 'Plan ahead for best rates',
                features: ['Choose your date', '3-7 business days', 'Lowest cost option', 'Flexible scheduling'],
                icon: '📆'
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
              >
                <div className="text-6xl mb-4 text-center">{option.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-2 text-center">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Shipping Costs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-600 mb-4">Full Truckload (FTL)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Within 100 miles:</span>
                    <span className="font-semibold">$300-$500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>100-300 miles:</span>
                    <span className="font-semibold">$500-$1,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>300-600 miles:</span>
                    <span className="font-semibold">$1,000-$1,800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>600+ miles:</span>
                    <span className="font-semibold">Custom Quote</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 mb-4">Less Than Truckload (LTL)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>1-10 pallets:</span>
                    <span className="font-semibold">$150-$300</span>
                  </li>
                  <li className="flex justify-between">
                    <span>11-20 pallets:</span>
                    <span className="font-semibold">$200-$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>21+ pallets:</span>
                    <span className="font-semibold">FTL Recommended</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Distance surcharge:</span>
                    <span className="font-semibold">Varies</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Free delivery on orders over $2,500 within 50 miles. Actual shipping costs calculated at checkout based on distance and volume.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: 'What is the minimum order quantity?',
                answer: 'We have no minimum! You can order as few as 1 pallet or as many as 100,000+. However, for very small orders (under 10 pallets), shipping costs may be proportionally higher. We always provide transparent pricing so you can make informed decisions.'
              },
              {
                question: 'Do you offer pallet pick-up services?',
                answer: 'Yes, we offer customer pickup from our warehouses if you prefer to handle your own transportation. This can reduce costs for local customers with their own trucks. Contact us to schedule a pickup time at our nearest facility.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept credit cards (Visa, MasterCard, AmEx), ACH bank transfers, checks, wire transfers, and offer net terms (Net 30/60) for qualified business customers with established credit. First-time customers typically start with prepayment or COD.'
              },
              {
                question: 'Can I inspect pallets before purchasing?',
                answer: 'Absolutely! We welcome facility visits for customers who want to inspect pallets before committing to large orders. Schedule an appointment with our team, and we\'ll give you a full tour and let you examine our inventory firsthand.'
              },
              {
                question: 'What if pallets arrive damaged?',
                answer: 'We guarantee all pallets arrive in the condition described. If pallets are damaged during shipping, document the damage with the carrier, take photos, and contact us immediately. We will replace damaged pallets at no charge or provide a full refund.'
              },
              {
                question: 'Do you provide pallet management services?',
                answer: 'Yes! For customers with ongoing needs, we offer comprehensive pallet management programs including inventory tracking, scheduled deliveries, pallet retrieval, repair services, and analytics. These programs are customized to your specific requirements and can significantly reduce your total cost of pallet ownership.'
              },
              {
                question: 'Are your pallets suitable for international shipping?',
                answer: 'Yes, we carry extensive inventory of ISPM 15 certified heat-treated pallets required for international shipping. All export pallets come with proper certification and marking. We can also arrange for fumigation if required by specific destination countries.'
              },
              {
                question: 'What is your return policy?',
                answer: 'We accept returns within 30 days of purchase for unused pallets in original condition. Customer is responsible for return shipping unless the return is due to our error. A 15% restocking fee applies to all returns. Refunds are processed within 10 business days of receiving returned pallets.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border-2 border-primary-200 soft-shadow"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Order Pallets?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get instant pricing, check inventory availability, and place your order today. Fast delivery nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-form"
                className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all soft-shadow hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Quote Now
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
              >
                Call: (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
