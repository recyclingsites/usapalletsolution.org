'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RecyclingPage() {
  const faqItems = [
    {
      question: 'What happens to pallets sent for recycling?',
      answer: 'It depends on the partner supplier. Reusable pallets are commonly repaired, components are salvaged, and wood that cannot be reused is commonly ground into mulch or biomass fuel.',
    },
    {
      question: 'What should I include in a recycling request?',
      answer: 'Include the pallet type, approximate quantity, condition and location, plus whether this is a one-off clearance or a repeat need.',
    },
    {
      question: 'Can I arrange repeat pallet pickups?',
      answer: 'Mention it in your request. A partner supplier can tell you whether repeat pickups are possible at your location.',
    },
    {
      question: 'Can I send a request for mixed sizes and conditions?',
      answer: 'Yes. Describe the mix in your request. Whether a partner supplier can take the whole lot depends on the supplier.',
    },
    {
      question: 'Can I buy heat-treated pallets for export?',
      answer: 'You can request pallets with the ISPM 15 IPPC mark on the pallet selling page. Check current regulations for your destination and confirm the marking with the partner supplier.',
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Pallet Recycling</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Recycling and Reuse</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Send a recycling request and we pass it to partner suppliers. Requests are welcome from across the US; availability depends on partner suppliers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Why Recycle Pallets</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is a referral service and does not run a recycling plant. If your business has pallets it no longer needs, send a free, no-obligation quote request. We pass it to partner suppliers in our network, and a partner supplier follows up about what it can do with them.
              </p>
              <p className="mb-6 leading-relaxed">
                Most pallets are made of wood, a material that can often be used again. Reusing a pallet avoids building a new one, and a pallet that is repaired can stay in service rather than becoming waste. Pallets stacked behind a building also take up space and can create a safety hazard, so clearing them has practical benefits too.
              </p>
              <p className="mb-6 leading-relaxed">
                What happens to a pallet depends on its condition. Pallets in good condition can be inspected and resold. Pallets with minor damage can be repaired. Those beyond economical repair can be dismantled so usable boards and blocks go into other repairs. Wood that cannot be reused can be ground into products such as mulch, animal bedding or biomass fuel.
              </p>
              <p className="mb-6 leading-relaxed">
                Many businesses look at pallet recycling as part of their wider waste plans. If you have particular goals or need particular paperwork, say so in your request and ask the partner supplier what it can provide.
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
              Request Pallet Recycling
            </motion.h2>
            <ContactForm productType="Recycling Services" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">How Pallet Recycling Typically Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              These are the usual stages at a pallet recycler. The exact process depends on the partner supplier that handles your request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 'Collection & Transport',
                  description: 'Partner suppliers can arrange pickup from your site where it is available.',
                  icon: '🚚',
                  details: ['Timing agreed with the supplier', 'One-off or repeat', 'Depends on location', 'Stacked pallets load more easily']
                },
                {
                  step: 'Inspection & Grading',
                  description: 'Pallets are checked and graded based on condition, structure and potential for reuse.',
                  icon: '🔍',
                  details: ['Condition assessed', 'Structure checked', 'Grade assigned', 'Reuse potential judged']
                },
                {
                  step: 'Sorting & Categorization',
                  description: 'Pallets are sorted by size, material and condition so each can go to the right next step.',
                  icon: '📋',
                  details: ['Material separation', 'Size sorting', 'Condition grouping', 'Damaged units set aside']
                },
                {
                  step: 'Repair & Refurbishment',
                  description: 'Repairable pallets have damaged boards replaced and structural issues fixed.',
                  icon: '🔧',
                  details: ['Broken boards replaced', 'Loose fasteners fixed', 'Blocks or stringers repaired', 'Pallet returns to use']
                },
                {
                  step: 'Dismantling & Salvage',
                  description: 'Pallets beyond repair can be taken apart, with usable components saved for future repairs.',
                  icon: '⚙️',
                  details: ['Board recovery', 'Block recovery', 'Fastener removal', 'Parts kept for repairs']
                },
                {
                  step: 'Wood Grinding & Processing',
                  description: 'Wood that cannot be reused can be ground into products like mulch, animal bedding or biomass fuel.',
                  icon: '♻️',
                  details: ['Wood ground down', 'Metal fasteners removed', 'Mulch or bedding', 'Biomass fuel']
                },
                {
                  step: 'Resale & Distribution',
                  description: 'Refurbished pallets are made available for resale, often as a lower cost option than new.',
                  icon: '🏪',
                  details: ['Graded for resale', 'Sold by the supplier', 'Available by quote', 'Pallet stays in use']
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="text-6xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3 text-center">{step.step}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
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
            Why Pallet Reuse Matters
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">What Recycling Can Achieve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  benefit: 'Fewer New Pallets',
                  description: 'Reusing a pallet avoids building a new one.',
                  icon: '🌲'
                },
                {
                  benefit: 'Longer Pallet Life',
                  description: 'Repairing a damaged pallet can keep it in service for longer.',
                  icon: '🔧'
                },
                {
                  benefit: 'Recovered Components',
                  description: 'Boards and blocks salvaged from broken pallets can go into repairs.',
                  icon: '⚙️'
                },
                {
                  benefit: 'Less Wood Waste',
                  description: 'Wood that is reused or ground into other products is not sent to landfill.',
                  icon: '🗑️'
                },
                {
                  benefit: 'Clearer Sites',
                  description: 'Removing unwanted pallets frees up floor space and yard space.',
                  icon: '📦'
                },
                {
                  benefit: 'Material Reuse',
                  description: 'Keeping pallets in use can reduce the demand for new lumber.',
                  icon: '♻️'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary-600 mb-2">{item.benefit}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
            Recycling Request Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'One-Time Cleanout',
                description: 'For facility cleanouts or a single batch of unwanted pallets',
                features: [
                  'Send a single request',
                  'Describe the pallets and quantity',
                  'Pickup agreed with the supplier',
                  'Pricing by quote',
                  'No obligation to proceed'
                ]
              },
              {
                title: 'Repeat Pickups',
                description: 'For sites where pallets build up regularly',
                features: [
                  'Mention it in your request',
                  'Share your expected quantities',
                  'Schedule agreed with the supplier',
                  'Pricing by quote',
                  'Depends on your location'
                ]
              },
              {
                title: 'Multiple Locations',
                description: 'For businesses with pallets at more than one site',
                features: [
                  'List each location in your request',
                  'Availability varies by site',
                  'May involve more than one supplier',
                  'Pricing by quote',
                  'Depends on partner suppliers'
                ]
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 soft-shadow hover:shadow-lg transition-shadow border-primary-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-secondary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact-form"
                  className="block text-center px-6 py-3 rounded-lg font-bold transition-all bg-primary-100 text-primary-600 hover:bg-primary-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Request a Quote
                </Link>
              </motion.div>
            ))}
          </div>
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
            Businesses With Pallets to Recycle
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Manufacturing', icon: '🏭', description: 'Production facilities with incoming pallets' },
              { name: 'Retail', icon: '🏬', description: 'Stores and distribution centers' },
              { name: 'Logistics', icon: '🚛', description: 'Carriers and freight terminals' },
              { name: 'Warehousing', icon: '📦', description: 'Sites where surplus pallets build up' },
              { name: 'Food & Beverage', icon: '🍎', description: 'Distribution and warehouse sites' },
              { name: 'Wholesale', icon: '🏪', description: 'Wholesale distribution centers' },
              { name: 'Automotive', icon: '🚗', description: 'Parts and assembly sites' },
              { name: 'Construction', icon: '🏗️', description: 'Pallets left from materials deliveries' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border-2 border-primary-200 soft-shadow text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-primary-600 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{industry.description}</p>
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
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: 'What types of pallets can be recycled?',
                answer: 'You can send a request for wooden pallets (hardwood and softwood), plastic pallets, metal pallets and mixed lots, in standard sizes like GMA 48x40 or custom sizes. What a partner supplier can accept depends on the supplier.'
              },
              {
                question: 'Is there a minimum quantity for recycling pickup?',
                answer: 'USA Pallet Solution sets no minimum for a request. Partner suppliers may have their own minimums, and small quantities can be harder to arrange because of transport costs.'
              },
              {
                question: 'Is there a charge for recycling pickup?',
                answer: 'It depends on the pallets and the location. Pricing is by quote from partner suppliers, and the quote request itself is free.'
              },
              {
                question: 'How do I prepare pallets for recycling pickup?',
                answer: 'Stack pallets safely in an accessible location where a truck can load them, with similar sizes together, and keep the area clear of obstacles. A partner supplier can tell you about anything else it needs.'
              },
              {
                question: 'What happens to pallets after pickup?',
                answer: 'It depends on the partner supplier. Pallets in good condition are commonly resold, repairable pallets refurbished and damaged pallets dismantled for parts. Remaining wood is commonly ground into products such as mulch or biomass fuel.'
              },
              {
                question: 'Can I get documentation for my records?',
                answer: 'Ask the partner supplier that follows up. Any paperwork is provided by that supplier, so check what it can offer before you proceed.'
              },
              {
                question: 'Can I purchase recycled pallets?',
                answer: 'Yes, you can request refurbished pallets through the pallet selling page. They are often a lower cost option than new pallets. Pricing is by quote from partner suppliers.'
              },
              {
                question: 'When can a recycling pickup happen?',
                answer: 'Pickup timing is agreed with the partner supplier and depends on your location, the quantity and its schedule.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Recycling?</h2>
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
                Request Pickup
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
