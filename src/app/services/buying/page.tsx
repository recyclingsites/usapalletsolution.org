'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BuyingPage() {
  const faqItems = [
    {
      question: 'What pallet conditions can I offer for sale?',
      answer: 'You can send a request for Grade A and B pallets, broken pallets for parts and mixed lots. Whether a partner supplier buys them depends on the pallets and your location.',
    },
    {
      question: 'How is pricing determined?',
      answer: 'Pricing is by quote from partner suppliers. It usually depends on pallet size, grade, quantity, location and local demand.',
    },
    {
      question: 'Can pallets be picked up on-site?',
      answer: 'Partner suppliers can arrange pickup where it is available. Pickup details and any charges are agreed with the partner supplier.',
    },
    {
      question: 'How and when would I get paid?',
      answer: 'USA Pallet Solution does not buy pallets or handle payment. If a partner supplier buys your pallets, payment is agreed directly with that supplier.',
    },
    {
      question: 'Can I sell pallets on a recurring basis?',
      answer: 'Mention it in your request. If you have a regular flow of surplus pallets, a partner supplier can tell you whether repeat pickups are possible.',
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
              <span className="text-gray-700">Pallet Buying</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Sell Your Used Pallets</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Have surplus pallets? Tell us what you have and we pass your request to partner suppliers, who may buy them. Requests are welcome from across the US; availability depends on partner suppliers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Find a Buyer for Surplus Pallets</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is a referral service, not a pallet buyer. Businesses often collect surplus pallets from incoming shipments, discontinued product lines or facility consolidations. Rather than let them take up floor space, you can send a free, no-obligation quote request. We pass it to partner suppliers in our network, and a partner supplier follows up if it may be able to buy them.
              </p>
              <p className="mb-6 leading-relaxed">
                Requests can cover pallets of many types, sizes and conditions, from clean Grade A pallets to damaged units suited only to parts or recycling. Partner suppliers decide what they can take, so the more detail you give about type, size, quantity and condition, the more useful the response is likely to be.
              </p>
              <p className="mb-6 leading-relaxed">
                Used pallet values change with supply, demand, material costs and region, so any price comes as a quote from a partner supplier. A standard size in good condition near a buyer is usually easier to place than a mixed lot of unusual sizes far from one.
              </p>
              <p className="mb-6 leading-relaxed">
                If pallets build up regularly at your site, say so in your request. A partner supplier can tell you whether repeat pickups are possible in your area. Selling used pallets also keeps them in use, and reusing a pallet avoids building a new one.
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
              Get Your Free Quote Today
            </motion.h2>
            <ContactForm productType="Sell Pallets to Us" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Types of Pallets You Can Offer</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Partner suppliers may buy a range of pallets depending on material, size and condition. Pricing is by quote from partner suppliers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Wooden Pallets - GMA Standard', description: 'Standard 48x40 GMA pallets, the size most often in demand', icon: '🪵' },
                { title: 'Wooden Pallets - Non-Standard', description: 'Custom sizes and configurations, which can be harder to place', icon: '📏' },
                { title: 'Plastic Pallets - Premium', description: 'Heavier-duty plastic pallets from various makers', icon: '♻️' },
                { title: 'Plastic Pallets - Standard', description: 'Standard duty plastic pallets', icon: '🔷' },
                { title: 'Metal Pallets', description: 'Steel and aluminum pallets', icon: '🔩' },
                { title: 'Heat-Treated Pallets', description: 'Pallets carrying the ISPM 15 IPPC mark', icon: '🔥' },
                { title: 'Damaged Pallets', description: 'Broken pallets for parts or recycling', icon: '🔨' },
                { title: 'Block Pallets', description: 'Four-way entry block pallets', icon: '⬛' },
                { title: 'Euro Pallets (EPAL)', description: 'European standard pallets', icon: '🇪🇺' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200"
            >
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-primary-600">Note:</strong> Whether a partner supplier buys a given lot, and at what price, depends on condition, quantity, location and local demand. Some lots may not have resale value. Send a request for a quote specific to your pallets.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary-600">How Selling Your Pallets Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: '1',
                  title: 'Send Your Details',
                  description: 'Use the online form to tell us about your pallets, including type, quantity, condition and location.',
                },
                {
                  step: '2',
                  title: 'We Pass Your Request On',
                  description: 'We pass your request to partner suppliers in our network, who decide whether they can take your pallets.',
                },
                {
                  step: '3',
                  title: 'A Partner Supplier Follows Up',
                  description: 'A partner supplier follows up about your request. Any offer is a quote from that supplier, based on your pallets and location.',
                },
                {
                  step: '4',
                  title: 'Arrange Pickup and Payment',
                  description: 'If you accept, you agree pickup and payment directly with the partner supplier.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center font-bold text-2xl text-white flex-shrink-0 soft-shadow">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-600 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Why Send Your Request Here</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              One request reaches partner suppliers in our network, so you do not have to contact buyers one at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '📋', title: 'One Form', description: 'Describe your pallets once and we pass your request to partner suppliers.' },
                { icon: '✓', title: 'No Obligation', description: 'The quote request is free, and you decide whether to accept any offer.' },
                { icon: '💬', title: 'Pricing by Quote', description: 'Any price comes as a quote from a partner supplier, based on your actual pallets.' },
                { icon: '🚚', title: 'Pickup Options', description: 'Partner suppliers can arrange pickup where it is available.' },
                { icon: '📦', title: 'Small or Large Lots', description: 'Send a request whatever the quantity. Minimums vary by partner supplier.' },
                { icon: '🌍', title: 'Requests From Across the US', description: 'We take requests from across the US. Availability depends on partner suppliers.' },
                { icon: '🔨', title: 'Mixed Conditions', description: 'Mention damaged or mixed lots. Some partner suppliers can use them for parts or recycling.' },
                { icon: '♻️', title: 'Keeps Pallets in Use', description: 'Reusing a pallet avoids building a new one.' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-primary-600 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
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
            Pricing Factors & Valuation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What Increases Pallet Value</h3>
              <ul className="space-y-4">
                {[
                  'Standard sizes (especially 48x40 GMA)',
                  'Good condition with minimal damage',
                  'Heat-treated pallets with the ISPM 15 mark',
                  'Larger quantities',
                  'Consistent quality across entire lot',
                  'Easy access for loading and pickup',
                  'Sturdy construction, such as hardwood',
                  'Four-way entry capability'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What Partner Suppliers May Still Consider</h3>
              <ul className="space-y-4">
                {[
                  'Non-standard or custom sizes',
                  'Pallets with minor damage or repairs',
                  'Mixed lots with varying conditions',
                  'Smaller quantities',
                  'Painted or branded pallets',
                  'Older pallets with wear and tear',
                  'Softwood or mixed wood species',
                  'Two-way entry pallets'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Understanding Pallet Grading</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { grade: 'Grade A', description: 'Like-new condition, minimal use', value: 'Highest' },
                { grade: 'Grade B', description: 'Good condition, may have repairs', value: 'High' },
                { grade: 'Grade C', description: 'Usable but shows wear', value: 'Medium' },
                { grade: 'Recyclable', description: 'Damaged, for parts only', value: 'Lower' }
              ].map((grade, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <div className="font-bold text-primary-600 mb-2">{grade.grade}</div>
                  <p className="text-sm text-gray-600 mb-2">{grade.description}</p>
                  <div className="text-xs font-semibold text-secondary-500">{grade.value} Value</div>
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
            Common Questions About Selling Pallets
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: 'How do I prepare pallets for pickup?',
                answer: 'Stack them safely in an accessible location, with like sizes together, and make sure a truck can reach the area. A partner supplier can tell you about anything else it needs.'
              },
              {
                question: 'What information should I include in my request?',
                answer: 'Include the pallet type (wood, plastic or metal), the size, the approximate quantity, the general condition and your location. The more detail you give, the more useful the response is likely to be.'
              },
              {
                question: 'Can I sell pallets that need repairs?',
                answer: 'You can send a request for them. Some partner suppliers may take damaged pallets for repair or recycling, usually at a lower value than intact pallets.'
              },
              {
                question: 'When would my pallets be picked up?',
                answer: 'Pickup timing is agreed with the partner supplier and depends on your location and its schedule.'
              },
              {
                question: 'Is there a minimum quantity?',
                answer: 'USA Pallet Solution sets no minimum for a request. Partner suppliers may have their own minimums, and small lots can be harder to place because of transport costs.'
              },
              {
                question: 'What payment methods are available?',
                answer: 'Payment is agreed directly with the partner supplier that buys your pallets, so ask about it when it follows up.'
              },
              {
                question: 'Can I sell pallets from a residential location?',
                answer: 'You can send a request. Whether a partner supplier can help depends on the quantity, the location and access for its vehicle.'
              },
              {
                question: 'What happens to the pallets after they are sold?',
                answer: 'It depends on the partner supplier. Pallets in good condition are commonly inspected, repaired if needed and resold. Damaged pallets are commonly broken down for parts or ground into products such as mulch or biomass fuel.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Have Pallets to Sell?</h2>
            <p className="text-xl text-white/90 mb-8">
              Send a free, no-obligation quote request and we will pass it to partner suppliers, who may buy your pallets.
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
                Get Free Quote
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
