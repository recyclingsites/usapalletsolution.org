'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BuyingPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">We Buy Used Pallets</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Turn your surplus pallets into immediate cash. We purchase pallets in any quantity, any condition, anywhere in the United States.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Your Trusted Pallet Buyer</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is one of the largest and most reliable pallet buyers in the United States. We understand that businesses often accumulate surplus pallets from incoming shipments, discontinued operations, or facility consolidations. Rather than letting these valuable assets take up warehouse space or become a disposal expense, we offer a simple solution: sell them to us for immediate cash.
              </p>
              <p className="mb-6 leading-relaxed">
                Our pallet buying program is designed with your convenience in mind. We purchase pallets of all types, sizes, and conditions - from pristine Grade A pallets to damaged units suitable only for parts or recycling. Whether you have 50 pallets or 50,000, we have the capacity and resources to handle your volume. Our nationwide network of facilities and partners ensures we can service your location quickly and efficiently.
              </p>
              <p className="mb-6 leading-relaxed">
                The pallet market is dynamic, with prices fluctuating based on supply, demand, material costs, and regional factors. Our experienced team stays current with market conditions to offer you competitive, fair pricing that reflects the true value of your pallets. We provide transparent quotes with no hidden fees or surprise deductions. What we quote is what you receive.
              </p>
              <p className="mb-6 leading-relaxed">
                When you choose USA Pallet Solution as your pallet buyer, you gain more than just a transaction - you gain a long-term partner. Many of our clients establish ongoing relationships, selling us pallets regularly as part of their reverse logistics strategy. We make the process seamless with scheduled pickups, dedicated account managers, and prompt payment processing.
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
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Types of Pallets We Buy</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We purchase all types of pallets regardless of material, size, or condition. Our diverse buying program ensures you get paid for pallets other buyers might reject.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Wooden Pallets - GMA Standard', description: 'Standard 48x40 GMA pallets in any condition', price: '$5-$12 per pallet', icon: '🪵' },
                { title: 'Wooden Pallets - Non-Standard', description: 'All custom sizes and configurations', price: '$3-$10 per pallet', icon: '📏' },
                { title: 'Plastic Pallets - Premium', description: 'High-quality plastic pallets, any brand', price: '$15-$35 per pallet', icon: '♻️' },
                { title: 'Plastic Pallets - Standard', description: 'Standard duty plastic pallets', price: '$10-$20 per pallet', icon: '🔷' },
                { title: 'Metal Pallets', description: 'Steel and aluminum pallets', price: '$20-$50 per pallet', icon: '🔩' },
                { title: 'Heat-Treated Pallets', description: 'ISPM 15 certified pallets', price: '$8-$15 per pallet', icon: '🔥' },
                { title: 'Damaged Pallets', description: 'Broken pallets for parts/recycling', price: '$1-$5 per pallet', icon: '🔨' },
                { title: 'Block Pallets', description: 'Four-way entry block pallets', price: '$6-$14 per pallet', icon: '⬛' },
                { title: 'Euro Pallets (EPAL)', description: 'European standard pallets', price: '$10-$18 per pallet', icon: '🇪🇺' },
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
                  <div className="text-secondary-500 font-bold text-lg">{item.price}</div>
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
                <strong className="text-primary-600">Note:</strong> Prices shown are general ranges and may vary based on condition, quantity, location, and current market rates. Contact us for an accurate quote specific to your pallets. Volume discounts available for large quantities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary-600">How Our Buying Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: '1',
                  title: 'Contact Us With Details',
                  description: 'Reach out via phone, email, or our online form. Provide information about your pallets including type, quantity, condition, and location. Photos are helpful but not required.',
                  time: '2 hours response'
                },
                {
                  step: '2',
                  title: 'Receive Competitive Quote',
                  description: 'Our team evaluates your pallets and provides a detailed quote. We consider type, condition, quantity, location, and current market rates. Quotes are valid for 7 days.',
                  time: 'Same day'
                },
                {
                  step: '3',
                  title: 'Schedule Convenient Pickup',
                  description: 'Once you accept our quote, we schedule a pickup time that works for your operations. We offer flexible scheduling including evenings and weekends in many locations.',
                  time: '1-3 business days'
                },
                {
                  step: '4',
                  title: 'Receive Immediate Payment',
                  description: 'Our team arrives at the scheduled time, verifies the pallets, loads them, and provides immediate payment. Payment options include check, ACH transfer, or cash for smaller quantities.',
                  time: 'On pickup'
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
                    <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold">
                      {step.time}
                    </div>
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
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Why Sell Your Pallets To Us</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We make selling pallets easy, profitable, and hassle-free. Here's what sets us apart from other pallet buyers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '💵', title: 'Top Dollar Paid', description: 'Competitive market rates that reflect true pallet value. We regularly match or beat competitor quotes.' },
                { icon: '🚚', title: 'Free Pickup Service', description: 'We handle all logistics and transportation. No hidden fees or surprise charges - pickup is always included.' },
                { icon: '📋', title: 'No Quantity Minimums', description: 'We buy from 1 pallet to 10,000+. Small warehouse clearing out? Large facility consolidation? We handle it all.' },
                { icon: '⚡', title: 'Fast Response Time', description: 'Quote requests answered within 2 hours during business hours. Emergency pickups available for urgent situations.' },
                { icon: '💳', title: 'Flexible Payment Options', description: 'Choose from cash, check, ACH transfer, or net terms for qualified businesses. Payment processing on your schedule.' },
                { icon: '🌍', title: 'Nationwide Coverage', description: 'Service locations in all 50 states. Whether urban or rural, we can reach you.' },
                { icon: '📞', title: 'Dedicated Support', description: 'Personal account manager for regular sellers. Direct phone line, no automated systems or long wait times.' },
                { icon: '♻️', title: 'Environmental Responsibility', description: 'All purchased pallets are recycled or refurbished. Your sale contributes to sustainability goals.' },
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
                  'Heat-treated and ISPM 15 certified',
                  'Larger quantities (100+ pallets)',
                  'Consistent quality across entire lot',
                  'Easy access for loading and pickup',
                  'Popular wood types (hardwood preferred)',
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
              <h3 className="text-2xl font-bold text-primary-600 mb-6">What We Still Buy</h3>
              <ul className="space-y-4">
                {[
                  'Non-standard or custom sizes',
                  'Pallets with minor damage or repairs',
                  'Mixed lots with varying conditions',
                  'Smaller quantities (even single pallets)',
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
                answer: 'Simply stack them in an accessible location. We prefer pallets stacked 4-6 high with like sizes together. Ensure our truck can reach the location. No special preparation needed - we handle everything from there.'
              },
              {
                question: 'What information do you need for a quote?',
                answer: 'We need: (1) Type of pallets (wood, plastic, metal), (2) Size dimensions, (3) Approximate quantity, (4) General condition, (5) Your location. Photos help but aren\'t required. The more details you provide, the more accurate your quote.'
              },
              {
                question: 'Do you buy pallets that need repairs?',
                answer: 'Yes! We buy damaged pallets for repair or recycling. While the price is lower than intact pallets, we still offer fair compensation based on salvageable materials and repair potential.'
              },
              {
                question: 'How quickly can you pick up my pallets?',
                answer: 'Typically within 1-3 business days of accepting our quote. For urgent situations, same-day or next-day pickup may be available depending on your location and our route schedule.'
              },
              {
                question: 'Is there a minimum quantity you will purchase?',
                answer: 'No minimum! We buy single pallets or truckloads. However, for very small quantities (under 10 pallets), pickup may be scheduled when we\'re already in your area to ensure cost-effectiveness.'
              },
              {
                question: 'What payment methods do you offer?',
                answer: 'We offer multiple payment options: immediate check on pickup, same-day ACH transfer, cash for smaller quantities, or net-30 terms for established business relationships. You choose what works best.'
              },
              {
                question: 'Do you buy pallets from residential locations?',
                answer: 'Yes, though most of our business is commercial. If you have pallets at a residential location from a business activity, we\'re happy to purchase them. Minimum quantity considerations may apply.'
              },
              {
                question: 'What happens to the pallets after you buy them?',
                answer: 'Good condition pallets are inspected, repaired if needed, and resold. Damaged pallets are either refurbished, broken down for parts, or recycled into other products like mulch or biomass fuel. We maximize reuse and minimize waste.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Turn Your Pallets Into Cash?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get your free, no-obligation quote today. Fast response, competitive rates, and hassle-free pickup.
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
              <a
                href="tel:+1234567890"
                className="inline-block px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
