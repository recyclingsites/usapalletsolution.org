'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TransportationPage() {
  const detailFaqs = [
    {
      question: 'What information helps with a transportation quote?',
      answer: 'Include the pickup location (city and ZIP), the delivery location (city and ZIP), the number of pallets, pallet sizes and approximate weight, and your preferred timing. Complete details help a partner supplier give you an accurate quote.',
    },
    {
      question: 'Can pallets be delivered to residential addresses?',
      answer: 'Sometimes. Most freight trucks are set up for commercial loading docks, so a residential stop may need a smaller truck or a liftgate. Mention it in your request and a partner supplier can tell you what is possible and how it affects the quote.',
    },
    {
      question: 'What happens if pallets are damaged during transport?',
      answer: 'Inspect pallets on delivery, note any damage on the delivery receipt, take photos, and raise it with the supplier handling your order. Claims follow that supplier or carrier\'s terms, so ask about them before you book.',
    },
    {
      question: 'Can pallets be delivered to locations without loading docks?',
      answer: 'Often, yes. Liftgates allow ground-level loading and unloading, and some sites use a forklift or pallet jack. Tell us what equipment you have on site so a partner supplier can plan for it.',
    },
    {
      question: 'Can I ask for a specific delivery date?',
      answer: 'Yes. Put your target date in the request. A partner supplier follows up and tells you whether it can be met.',
    },
    {
      question: 'What are the delivery hours?',
      answer: 'Hours are set by the supplier or carrier handling your order. Include your receiving hours and any site restrictions so they can be taken into account.',
    },
    {
      question: 'Can I schedule recurring deliveries?',
      answer: 'You can ask. Describe the quantity and how often you need pallets moved, and a partner supplier will say whether a repeating schedule is something it can offer.',
    },
  ]

  const faqItems = [
    {
      question: 'Do you offer nationwide pallet pickup and delivery?',
      answer: 'We take requests from across the US and pass them to partner suppliers in our network. Pickup and delivery are available where partner suppliers offer them, so availability depends on your area.',
    },
    {
      question: 'Can you handle time-sensitive shipments?',
      answer: 'USA Pallet Solution does not move freight itself. Note your deadline in the request and a partner supplier follows up to tell you what is possible.',
    },
    {
      question: 'Are loading equipment or trailers available?',
      answer: 'That depends on the partner supplier. Some may be able to arrange a liftgate or a particular trailer type, so list what your site needs in your request.',
    },
    {
      question: 'What freight modes are common for pallets?',
      answer: 'Smaller loads usually move as less-than-truckload (LTL), and larger loads as full truckload (FTL). A partner supplier can suggest what suits your quantity and destination.',
    },
    {
      question: 'Who handles the shipment after I send a request?',
      answer: 'We pass your request to partner suppliers in our network. The partner supplier that takes it on quotes the job and arranges the move with you directly.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...detailFaqs, ...faqItems].map((item) => ({
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
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Transportation</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Transportation Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Request pallet pickup or delivery through partner suppliers, where offered. We take requests from across the US; availability depends on partner suppliers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Professional Pallet Transportation</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is a referral service. We do not own trucks or employ drivers. When you need pallets moved, you send one quote request and we pass it to partner suppliers in our network. Transportation is available through those partner suppliers where offered, whether you need a small quantity moved locally or a larger load moved further.
              </p>
              <p className="mb-6 leading-relaxed">
                Good pallet transport starts with planning. Running out of pallets can hold up a production line or leave a warehouse short, so it helps to send your request with some lead time and to say when the pallets are needed. A partner supplier follows up to discuss what is possible for your route and dates.
              </p>
              <p className="mb-6 leading-relaxed">
                Site details matter as much as distance. A dock-high facility, a ground-level yard, and a residential address each call for a different truck and unloading plan. Telling the partner supplier what you have on site, such as a dock, forklift, or pallet jack, makes for a more accurate quote and fewer surprises on the day.
              </p>
              <p className="mb-6 leading-relaxed">
                Pricing is by quote from partner suppliers, because it depends on distance, quantity, weight, and site requirements. Combining pallets with a purchase or a pickup can sometimes make a move more practical, so mention everything you need in one request.
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
              Request Transportation Quote
            </motion.h2>
            <ContactForm productType="Transportation Services" />
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
            Transportation Service Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Pallet Delivery',
                icon: '📦',
                description: 'Pallets you buy through a partner supplier brought to your site, where offered',
                features: [
                  'New or used pallets',
                  'Local or longer-distance requests',
                  'Dock or liftgate unloading',
                  'Timing agreed with the supplier',
                ],
              },
              {
                title: 'Pallet Pickup',
                icon: '🚚',
                description: 'Used, surplus, or unwanted pallets collected from your site, where offered',
                features: [
                  'Used or surplus pallets',
                  'Damaged pallets for repair',
                  'Pallets for recycling or disposal',
                  'Loading plan agreed in advance',
                ],
              },
              {
                title: 'Planned Moves',
                icon: '📆',
                description: 'Moves with a known date or a repeating need, arranged ahead of time',
                features: [
                  'Choose a target date',
                  'Larger planned loads',
                  'Ask about repeat schedules',
                  'Quoted by a partner supplier',
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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
            Common Truck Types for Pallets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                vehicle: 'Box Trucks',
                description: 'Often used for smaller loads and shorter trips',
                icon: '🚚',
                notes: ['Suits smaller quantities', 'May have a liftgate', 'Easier on tighter sites'],
              },
              {
                vehicle: 'Dry Van Trailers',
                description: 'Enclosed trailers that keep loads out of the weather',
                icon: '🚛',
                notes: ['Suits larger quantities', 'Usually needs a loading dock', 'Rear loading'],
              },
              {
                vehicle: 'Flatbed Trailers',
                description: 'Open-deck trailers that can be loaded from the side or rear',
                icon: '🏗️',
                notes: ['Useful without a dock', 'Forklift access helps', 'Load is open to the weather'],
              },
            ].map((truck, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{truck.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-2">{truck.vehicle}</h3>
                <p className="text-gray-600 text-sm mb-3">{truck.description}</p>
                <ul className="space-y-2">
                  {truck.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {note}
                    </li>
                  ))}
                </ul>
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
            Why Request Transportation Here
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📝',
                title: 'One Request',
                description: 'Describe the move once and we pass it to partner suppliers in our network',
              },
              {
                icon: '🤝',
                title: 'Free, No Obligation',
                description: 'A quote request is free and does not commit you to anything',
              },
              {
                icon: '💬',
                title: 'Direct Follow-Up',
                description: 'A partner supplier follows up with you to discuss the job and the quote',
              },
              {
                icon: '🌍',
                title: 'Requests From Across the US',
                description: 'Send a request from anywhere in the US; availability depends on partner suppliers',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-primary-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
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
            How Transportation Pricing Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What Shapes a Quote</h3>
              <div className="space-y-4">
                {[
                  { factor: 'Distance', detail: 'How far the pallets need to travel' },
                  { factor: 'Quantity', detail: 'How many pallets are moving' },
                  { factor: 'Size and Weight', detail: 'Pallet dimensions and how heavy the load is' },
                  { factor: 'Timing', detail: 'How much notice the supplier has' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                    <div className="font-bold text-primary-600">{item.factor}</div>
                    <div className="text-sm text-gray-600">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">LTL or FTL</h3>
              <div className="space-y-4">
                {[
                  { mode: 'Less Than Truckload (LTL)', detail: 'Your pallets share trailer space with other freight, which can suit smaller loads' },
                  { mode: 'Full Truckload (FTL)', detail: 'The trailer carries only your load, which can suit larger quantities' },
                  { mode: 'Not Sure Which Fits', detail: 'Give your quantity and destination and a partner supplier can advise' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                    <div className="font-bold text-primary-600 mb-2">{item.mode}</div>
                    <div className="text-sm text-gray-600">{item.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Details to Mention in Your Request</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Liftgate needed',
                'Inside delivery',
                'Residential address',
                'Delivery appointment',
                'Weekend or holiday timing',
                'After-hours receiving',
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Pricing is by quote from partner suppliers and depends on your route, quantity, weight, and site requirements.
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
            {detailFaqs.map((faq, index) => (
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
            <h2 className="text-4xl font-bold mb-6 text-white">Need Pallet Transportation?</h2>
            <p className="text-xl text-white/90 mb-8">
              Send a free, no-obligation quote request and a partner supplier follows up. Availability depends on partner suppliers.
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
                Use the Quote Form
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
