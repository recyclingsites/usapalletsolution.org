'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SellingPage() {
  const faqItems = [
    {
      question: 'What pallet grades can I request?',
      answer: 'You can request Grade A, Grade B, new builds, heat-treated export pallets and specialty sizes. Availability depends on partner suppliers.',
    },
    {
      question: 'How do I get consistent specifications?',
      answer: 'State the size, grade and load you need in your request, then confirm the specification and any samples with the partner supplier before you order.',
    },
    {
      question: 'Can deliveries be scheduled around my operation?',
      answer: 'Tell us how often you need pallets in your request. Delivery schedules are agreed with the partner supplier that takes on your order.',
    },
    {
      question: 'How does pricing work for larger orders?',
      answer: 'Pricing is by quote from partner suppliers. Include your expected order size and how often you will reorder so the quote reflects your actual volume.',
    },
    {
      question: 'Can I request pallets for several locations?',
      answer: 'Yes. List each location in your request. Availability depends on partner suppliers near each site.',
    },
  ]

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
            <p className="text-xl text-gray-700 max-w-3xl">Need new or refurbished pallets? Tell us what you need and we pass your request to partner suppliers. Requests are welcome from across the US; availability depends on partner suppliers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Find a Pallet Supplier</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is a referral service, not a pallet stockist. You send a free, no-obligation quote request, we pass it to partner suppliers in our network, and a partner supplier follows up with a quote. Orders, from a small purchase to a repeat supply, are fulfilled by the partner supplier.
              </p>
              <p className="mb-6 leading-relaxed">
                You can request new wooden pallets, refurbished Grade A pallets, plastic pallets, metal pallets, custom-sized pallets and pallets for specific uses. Pallets carry your product through the supply chain, and an unsuitable pallet can lead to product damage, injuries and delays, so it pays to confirm the grade and specification with the supplier before ordering.
              </p>
              <p className="mb-6 leading-relaxed">
                The right pallet depends on your load weight, racking, warehouse space, shipping destination and budget. Include those details in your request so a partner supplier can respond with something suitable. If you are shipping overseas, say so, because wood packaging for many destinations must meet ISPM 15. Check current regulations for your destination.
              </p>
              <p className="mb-6 leading-relaxed">
                Delivery is arranged by the partner supplier and depends on your location, order size and the supplier. Larger orders usually move as a full truckload, and smaller orders can move as less-than-truckload freight. Confirm timing, unloading needs and any delivery charges when a partner supplier follows up.
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
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Pallet Types You Can Request</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From standard GMA pallets to custom builds, these are common pallet types to ask for. Availability and pricing come from partner suppliers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'New Wooden Pallets - GMA 48x40',
                  condition: 'New',
                  features: ['Standard 48x40 inch size', 'Widely used in US grocery and retail', 'Ask for heat treatment if exporting', 'Confirm load rating with the supplier'],
                  icon: '🆕'
                },
                {
                  category: 'Refurbished Grade A Pallets',
                  condition: 'Used, Repaired',
                  features: ['Inspected and repaired by the supplier', 'Often lower cost than new', 'Reuses an existing pallet', 'Confirm grade definition with the supplier'],
                  icon: '♻️'
                },
                {
                  category: 'Custom Size Wooden Pallets',
                  condition: 'New',
                  features: ['Built to your dimensions', 'Share your load requirements', 'Lead time set by the supplier', 'Pricing by quote'],
                  icon: '📏'
                },
                {
                  category: 'Plastic Pallets - Premium',
                  condition: 'New & Used',
                  features: ['Easy to clean', 'Long service life', 'Higher upfront cost than wood', 'Recyclable at end of life where facilities exist'],
                  icon: '🔷'
                },
                {
                  category: 'Block Pallets - 4-Way Entry',
                  condition: 'New & Used',
                  features: ['Four-way forklift access', 'Stable for pallet jacks and racking', 'Standard and custom sizes', 'Confirm load rating with the supplier'],
                  icon: '⬛'
                },
                {
                  category: 'Euro Pallets (EPAL)',
                  condition: 'European Standard',
                  features: ['1200 x 800 mm', 'Used in European supply chains', 'Carries the EPAL mark', 'US availability varies'],
                  icon: '🇪🇺'
                },
                {
                  category: 'Heavy-Duty Industrial Pallets',
                  condition: 'New',
                  features: ['Thicker deck boards', 'Reinforced construction', 'Suited to machinery and dense loads', 'Confirm load rating with the supplier'],
                  icon: '🏗️'
                },
                {
                  category: 'Export/Heat-Treated Pallets',
                  condition: 'ISPM 15 Heat Treated',
                  features: ['Core temperature of 56 °C for 30 minutes', 'Marked with the IPPC mark', 'Needed by many destination countries', 'Check current regulations'],
                  icon: '🌍'
                },
                {
                  category: 'Metal Pallets',
                  condition: 'New & Used',
                  features: ['Steel and aluminum options', 'Durable under heavy use', 'Higher upfront cost than wood', 'Confirm load rating with the supplier'],
                  icon: '🔩'
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
                      <div className="text-xs font-semibold text-secondary-500 mt-1">{item.condition}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{item.category}</h3>
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
            Why Request Pallets Through USA Pallet Solution
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'One Simple Request',
                description: 'Describe the pallets you need once. We pass your request to partner suppliers in our network, so you do not have to contact suppliers one at a time.'
              },
              {
                icon: '🚚',
                title: 'Delivery Through Partner Suppliers',
                description: 'Partner suppliers can arrange delivery. Timing depends on your location, the order and the supplier, and is agreed when you order.'
              },
              {
                icon: '💰',
                title: 'Pricing by Quote',
                description: 'Pricing comes from partner suppliers as a quote based on your request, so you can review it before deciding.'
              },
              {
                icon: '✓',
                title: 'Free, No Obligation',
                description: 'Sending a quote request is free, and you are not committed to anything until you agree terms with a partner supplier.'
              },
              {
                icon: '♻️',
                title: 'Used and Repaired Options',
                description: 'Ask for refurbished pallets if they suit your load. Reusing a pallet avoids building a new one.'
              },
              {
                icon: '📏',
                title: 'Custom Sizes',
                description: 'Include your dimensions and load requirements in your request. Custom builds depend on partner suppliers.'
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
            Bulk Orders & Repeat Needs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What Shapes a Bulk Quote</h3>
              <ul className="space-y-4">
                {[
                  'Pallet type, size and grade',
                  'Order quantity and how often you reorder',
                  'Current supply in your region',
                  'Delivery distance and freight type',
                  'Any custom build or heat treatment needs'
                ].map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What to Include in a Bulk Request</h3>
              <ul className="space-y-4">
                {[
                  'Pallet size, material and grade',
                  'Total quantity needed',
                  'Whether the need is one-off or repeating',
                  'Delivery location or locations',
                  'Your load type and approximate weight',
                  'Loading dock or forklift access at your site',
                  'Export destination, if any',
                  'Any target dates'
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
              Large orders, special requirements or repeat supply? Send the details through the form and we will pass your request to partner suppliers.
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
                title: 'Delivery by Partner Supplier',
                description: 'The usual option for most orders',
                features: ['Arranged by the partner supplier', 'Timing agreed when you order', 'Depends on your location', 'Delivery cost included in the quote or stated separately'],
                icon: '🚚'
              },
              {
                title: 'Customer Pickup',
                description: 'An option if you have your own transport',
                features: ['Ask the partner supplier if it is offered', 'Collection point set by the supplier', 'Confirm loading arrangements', 'Depends on the supplier'],
                icon: '🏷️'
              },
              {
                title: 'Repeat Deliveries',
                description: 'For operations with a regular pallet need',
                features: ['Mention it in your request', 'Agreed with the partner supplier', 'Share your expected quantities', 'Depends on the supplier'],
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
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Truckload or Less Than Truckload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-600 mb-4">Full Truckload (FTL)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Uses a whole trailer for your order</li>
                  <li>Common for large pallet orders</li>
                  <li>A loading dock or forklift usually helps</li>
                  <li>Cost depends on distance and quantity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 mb-4">Less Than Truckload (LTL)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Shares trailer space with other freight</li>
                  <li>Suited to smaller orders</li>
                  <li>Can cost more per pallet than a full truckload</li>
                  <li>Confirm unloading needs with the supplier</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Delivery costs come from partner suppliers as part of your quote.
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
                answer: 'USA Pallet Solution sets no minimum for a request. Partner suppliers may have their own minimums, and delivery can make very small orders cost more per pallet.'
              },
              {
                question: 'Can I collect pallets myself?',
                answer: 'Some partner suppliers may allow it. Mention it in your request and confirm the details when a partner supplier follows up.'
              },
              {
                question: 'What payment methods are accepted?',
                answer: 'USA Pallet Solution does not take payment. Payment methods are set by the partner supplier you order from.'
              },
              {
                question: 'Can I inspect pallets before purchasing?',
                answer: 'Ask the partner supplier that follows up. For larger orders, it is sensible to request samples or photos before committing.'
              },
              {
                question: 'What if pallets arrive damaged?',
                answer: 'Your order is with the partner supplier, so raise it with that supplier. Photograph the damage and note it with the carrier at delivery.'
              },
              {
                question: 'Are pallets available for international shipping?',
                answer: 'You can request heat-treated pallets with the ISPM 15 IPPC mark. Requirements vary by destination, so check current regulations and confirm the marking with the partner supplier.'
              },
              {
                question: 'What is the return policy?',
                answer: 'Returns are handled by the partner supplier you order from, so confirm its terms before ordering.'
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

      <section className="py-20 bg-white">
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
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100 soft-shadow"
              >
                <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
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
              Send a free, no-obligation quote request and we will pass it to partner suppliers in our network.
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
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
