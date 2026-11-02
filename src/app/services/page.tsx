'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Pallet Buying',
    description: 'Have used pallets to sell? Partner suppliers may buy them, depending on type, condition and location',
    href: '/services/buying',
    icon: '💰',
  },
  {
    title: 'Pallet Selling',
    description: 'Need pallets? Request new or used pallets from partner suppliers in our network',
    href: '/services/selling',
    icon: '🏪',
  },
  {
    title: 'Pallet Recycling',
    description: 'Request recycling and refurbishment through partner suppliers',
    href: '/services/recycling',
    icon: '♻️',
  },
  {
    title: 'Transportation',
    description: 'Request pallet delivery or pickup through partner suppliers',
    href: '/services/transportation',
    icon: '🚚',
  },
  {
    title: 'Pallet Repair',
    description: 'Request repair of damaged pallets through partner suppliers',
    href: '/services/repair',
    icon: '🔧',
  },
  {
    title: 'Disposal Services',
    description: 'Request removal and disposal of unwanted pallets through partner suppliers',
    href: '/services/disposal',
    icon: '🗑️',
  },
]

export default function ServicesPage() {
  const faqItems = [
    {
      question: 'What types of pallets can I request?',
      answer: 'You can send a request for wooden, plastic, metal, block and custom pallets, in new or used grades, including heat-treated pallets for export. Availability depends on partner suppliers.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We take requests from across the US. Availability depends on partner suppliers near your location.',
    },
    {
      question: 'What happens after I send a request?',
      answer: 'We pass your request to partner suppliers in our network. A partner supplier follows up with you about your request.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is by quote from partner suppliers. It depends on factors such as pallet type, condition, quantity and location. The quote request itself is free and carries no obligation.',
    },
    {
      question: 'Are recycling and reuse options available?',
      answer: 'Yes, through partner suppliers. Reusing or repairing a pallet avoids building a new one, and wood that cannot be reused can often be ground into other products.',
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
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Services Through Our Network</h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              USA Pallet Solution is a referral service. Tell us what you need, from buying pallets to disposing of old ones, and we pass your request to partner suppliers. Requests are welcome from across the US; availability depends on partner suppliers.
            </p>
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
              Get Started Today
            </motion.h2>
            <ContactForm productType="Services Inquiry" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-primary-600">One Request for Your Pallet Needs</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution connects businesses with partner suppliers for pallet services across the United States. We do not own a yard, trucks or a plant. You send a free, no-obligation quote request, we pass it to partner suppliers in our network, and a partner supplier follows up to quote and fulfil the work.
              </p>
              <p className="mb-6 leading-relaxed">
                Pallets are a basic part of manufacturing, warehousing and distribution, and most operations need several things from them over time: a supply of pallets that fit the load, somewhere for surplus pallets to go, repairs for the damaged ones and removal for those at the end of their life. Finding a separate supplier for each of those takes time, so a single request form covers all of them.
              </p>
              <p className="mb-6 leading-relaxed">
                A good request makes for a useful quote. Say what you need, the pallet type and size, the approximate quantity, the condition if you are selling or recycling, and where the pallets are or need to go. Whether you need pallets for a new warehouse, want to sell surplus stock, have damaged units to repair or need old pallets removed, the same details help a partner supplier respond to your request.
              </p>
              <p className="mb-6 leading-relaxed">
                Reuse is often a practical option. Reusing a pallet avoids building a new one, repairing a damaged pallet can keep it in service, and wood that cannot be reused can often be ground into products such as mulch. If reuse or recycling matters to you, say so in your request and a partner supplier can tell you what is available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-primary-600"
          >
            Services You Can Request
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            From buying and selling to recycling and transportation, send one request and we pass it to partner suppliers in our network.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-2xl p-8 border-2 border-primary-200 hover:border-primary-600 transition-all group h-full soft-shadow hover:shadow-lg"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-600 group-hover:text-secondary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-secondary-500 group-hover:text-primary-600 transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
            How USA Pallet Solution Works for You
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '📋', title: 'One Simple Request', description: 'Describe what you need once using the quote request form, instead of contacting suppliers one at a time.' },
              { icon: '🤝', title: 'Partner Suppliers', description: 'We pass your request to partner suppliers in our network, who quote and fulfil the work.' },
              { icon: '🌍', title: 'Requests From Across the US', description: 'We take requests from across the US. Availability depends on partner suppliers.' },
              { icon: '✓', title: 'Free, No Obligation', description: 'Sending a quote request is free, and you are not committed to anything until you agree terms with a partner supplier.' },
              { icon: '📦', title: 'Wood, Plastic and Metal', description: 'Requests can cover common pallet materials and sizes, plus custom builds where a partner supplier offers them.' },
              { icon: '💬', title: 'Pricing by Quote', description: 'Pricing comes from partner suppliers as a quote based on your request, so you can review it before deciding.' },
              { icon: '🔄', title: 'Buy, Sell or Clear Out', description: 'The same form works whether you need pallets, have pallets to sell or want old pallets taken away.' },
              { icon: '🌱', title: 'Reuse Options', description: 'Ask about used, repaired or recycled options. Reusing a pallet avoids building a new one.' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
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
            Industries That Rely on Pallets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '🏭', name: 'Manufacturing', description: 'Production facilities and assembly plants' },
              { icon: '🏬', name: 'Retail & E-commerce', description: 'Distribution centers and fulfillment' },
              { icon: '🚛', name: 'Logistics & Freight', description: 'Transportation and warehousing' },
              { icon: '🌾', name: 'Agriculture & Food', description: 'Crops and packaged goods distribution' },
              { icon: '🏗️', name: 'Construction', description: 'Building materials and supplies' },
              { icon: '🚗', name: 'Automotive', description: 'Parts and components' },
              { icon: '📦', name: '3PL Providers', description: 'Third-party logistics operations' },
              { icon: '🏪', name: 'Wholesale', description: 'Wholesale distribution centers' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-primary-600 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
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
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Send a Request', description: 'Use the online form to tell us what you need. It is a free, no-obligation quote request.' },
              { step: '2', title: 'We Pass It On', description: 'We pass your request to partner suppliers in our network.' },
              { step: '3', title: 'Get a Follow-Up', description: 'A partner supplier follows up with you about your request, including pricing by quote.' },
              { step: '4', title: 'Decide and Arrange', description: 'If the quote suits you, you arrange delivery, pickup or service directly with the partner supplier.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border-2 border-primary-200 h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center font-bold text-3xl text-white mb-6 soft-shadow">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary-600">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Send a free, no-obligation quote request and we will pass it to partner suppliers in our network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all soft-shadow hover:shadow-lg"
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
