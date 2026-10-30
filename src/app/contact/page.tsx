'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Contact USA Pallet Solution</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Send a free, no-obligation quote request and we will pass it to partner suppliers in our network. We take requests from across the US; availability depends on partner suppliers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Send Your Request</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us whether you want to buy, sell, recycle or dispose of pallets, along with the type, quantity and location.
              </p>
            </motion.div>
            <ContactForm productType="Contact Page Inquiry" />
          </div>
        </div>
      </section>

      {/* How a Request Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              How a Request Works
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              USA Pallet Solution is a referral service. Partner suppliers in our network quote your request and do the work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'You Send a Request',
                  description: 'Fill out the form above. It is free and carries no obligation.',
                  icon: '📝',
                },
                {
                  step: '2',
                  title: 'We Pass It On',
                  description: 'Your request goes to partner suppliers in our network.',
                  icon: '🤝',
                },
                {
                  step: '3',
                  title: 'A Partner Supplier Follows Up',
                  description: 'They contact you about pricing, availability and any questions.',
                  icon: '💬',
                },
                {
                  step: '4',
                  title: 'You Decide',
                  description: 'If the quote suits you, arrange the details directly with the supplier.',
                  icon: '✅',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl soft-shadow border border-primary-200"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Prefer Email?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                The form is the main way to send a quote request. For anything else, email us.
              </p>
              <p className="text-lg opacity-75">
                <a href="mailto:info@usapalletsolution.org" className="underline hover:opacity-100">info@usapalletsolution.org</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
