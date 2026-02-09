'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TransportationPage() {
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
            <p className="text-xl text-gray-700 max-w-3xl">Reliable nationwide pallet delivery and logistics solutions. Fast, efficient, and fully insured transportation across all 50 states.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Professional Pallet Transportation</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution operates one of the most comprehensive pallet transportation networks in the United States. With a modern fleet of trucks, trailers, and specialized equipment, we deliver pallets safely and efficiently to any location across all 50 states. Whether you need a single pallet delivered locally or full truckloads shipped cross-country, we have the capacity, experience, and resources to meet your needs.
              </p>
              <p className="mb-6 leading-relaxed">
                Our transportation services are built on three pillars: reliability, safety, and efficiency. We understand that timely pallet delivery is critical to your operations. Delayed shipments can disrupt production lines, leave warehouses understocked, and impact your ability to serve customers. That's why we maintain a 99.8% on-time delivery rate and offer multiple service tiers including same-day, next-day, and scheduled delivery options.
              </p>
              <p className="mb-6 leading-relaxed">
                Safety is paramount in everything we do. Our fleet undergoes rigorous maintenance schedules exceeding DOT requirements. Drivers are carefully vetted, professionally trained, and hold all necessary licenses and certifications. Every shipment is fully insured, providing peace of mind that your pallets are protected throughout transit. We use GPS tracking and real-time monitoring to ensure shipments stay on schedule and secure.
              </p>
              <p className="mb-6 leading-relaxed">
                Efficiency means competitive pricing without compromising service quality. Through optimized routing, strategic warehouse locations, and economies of scale, we offer some of the industry's most competitive transportation rates. Our logistics team works to consolidate shipments, utilize backhauls, and minimize empty miles - savings we pass directly to our customers. Large volume shippers benefit from contract rates and preferred service levels.
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
                title: 'Same-Day Express',
                icon: '⚡',
                description: 'Emergency delivery service for urgent pallet needs within local and regional areas',
                features: [
                  'Order by 10 AM delivery by 5 PM',
                  'Available in major metro areas',
                  'Priority scheduling',
                  'Real-time tracking',
                  'Direct routing'
                ],
                timeframe: '4-8 hours',
                coverage: 'Local (100 mile radius)'
              },
              {
                title: 'Next-Day Delivery',
                icon: '📅',
                description: 'Fast delivery service for time-sensitive shipments across most regions',
                features: [
                  'Order by 3 PM ships same day',
                  'Delivery next business day',
                  'Available in 80% of USA',
                  'GPS tracking included',
                  'Signature required'
                ],
                timeframe: '24 hours',
                coverage: 'Regional (300 mile radius)'
              },
              {
                title: 'Scheduled Transport',
                icon: '📆',
                description: 'Cost-effective option for planned deliveries with flexible timing',
                features: [
                  'Choose your delivery date',
                  '3-7 business day window',
                  'Lowest cost option',
                  'Nationwide coverage',
                  'Consolidation available'
                ],
                timeframe: '3-7 days',
                coverage: 'Nationwide'
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
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeframe:</span>
                    <span className="font-semibold text-secondary-500">{service.timeframe}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold text-secondary-500">{service.coverage}</span>
                  </div>
                </div>
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
            Our Fleet & Equipment
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                vehicle: 'Box Trucks',
                description: 'Local and regional deliveries',
                capacity: 'Up to 200 pallets',
                icon: '🚚',
                specs: ['20-26 foot capacity', 'Liftgate equipped', 'GPS tracked', 'Climate controlled available']
              },
              {
                vehicle: 'Flatbed Trailers',
                description: 'Open-deck transport for easy loading',
                capacity: 'Up to 400 pallets',
                icon: '🚛',
                specs: ['48-53 foot trailers', 'Side and rear loading', 'Tarping available', 'Oversized load capable']
              },
              {
                vehicle: 'Dry Van Trailers',
                description: 'Enclosed protection for all weather',
                capacity: 'Up to 500 pallets',
                icon: '🚚',
                specs: ['48-53 foot trailers', 'Weather protected', 'Security seals', 'Temperature controlled option']
              },
              {
                vehicle: 'Sprinter Vans',
                description: 'Small quantity fast delivery',
                capacity: 'Up to 50 pallets',
                icon: '🚐',
                specs: ['Urban delivery optimized', 'Quick loading/unloading', 'Same-day service', 'Low emissions']
              },
              {
                vehicle: 'Specialized Equipment',
                description: 'Custom solutions for unique needs',
                capacity: 'Variable',
                icon: '🏗️',
                specs: ['Crane trucks', 'Conestoga trailers', 'Double-drop trailers', 'Custom configurations']
              },
              {
                vehicle: 'Refrigerated Units',
                description: 'Temperature-controlled transport',
                capacity: 'Up to 400 pallets',
                icon: '❄️',
                specs: ['Multi-temp zones', 'Pharmaceutical grade', 'Continuous monitoring', 'Backup systems']
              },
            ].map((fleet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{fleet.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-2">{fleet.vehicle}</h3>
                <p className="text-gray-600 text-sm mb-3">{fleet.description}</p>
                <div className="text-secondary-500 font-bold mb-4">{fleet.capacity}</div>
                <ul className="space-y-2">
                  {fleet.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {spec}
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
            Why Choose Our Transportation Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: '99.8% On-Time Rate',
                description: 'Industry-leading delivery reliability with real-time tracking and proactive communication'
              },
              {
                icon: '🔒',
                title: 'Fully Insured',
                description: '$2M liability coverage on all shipments. Your pallets are protected from pickup to delivery'
              },
              {
                icon: '📱',
                title: 'Real-Time Tracking',
                description: 'GPS tracking with customer portal access. Know exactly where your shipment is at all times'
              },
              {
                icon: '💰',
                title: 'Competitive Rates',
                description: 'Transparent pricing with no hidden fees. Volume discounts and contract rates available'
              },
              {
                icon: '👨‍✈️',
                title: 'Professional Drivers',
                description: 'DOT certified, background checked, and trained in proper pallet handling procedures'
              },
              {
                icon: '🔧',
                title: 'Well-Maintained Fleet',
                description: 'Regular maintenance exceeding DOT standards. Modern vehicles with safety features'
              },
              {
                icon: '🌍',
                title: 'Nationwide Coverage',
                description: 'Service to all 50 states through our network of facilities and partner carriers'
              },
              {
                icon: '📞',
                title: '24/7 Dispatch',
                description: 'Round-the-clock support for urgent needs, tracking updates, and emergency services'
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
            Transportation Pricing Guide
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Local Delivery (0-100 miles)</h3>
              <div className="space-y-4">
                {[
                  { service: 'Same-Day Express', price: '$150-$300', time: '4-8 hours' },
                  { service: 'Next-Day Standard', price: '$100-$200', time: '24 hours' },
                  { service: 'Scheduled (3-5 days)', price: '$75-$150', time: '3-5 days' },
                  { service: 'Full Truckload (FTL)', price: '$300-$500', time: 'Flexible' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                    <div>
                      <div className="font-bold text-primary-600">{item.service}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                    </div>
                    <div className="text-secondary-500 font-bold">{item.price}</div>
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
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Long Distance (100+ miles)</h3>
              <div className="space-y-4">
                {[
                  { distance: '100-300 miles', ftl: '$500-$1,000', ltl: '$200-$400 per pallet' },
                  { distance: '300-600 miles', ftl: '$1,000-$1,800', ltl: '$300-$600 per pallet' },
                  { distance: '600-1,000 miles', ftl: '$1,800-$2,800', ltl: '$400-$800 per pallet' },
                  { distance: '1,000+ miles', ftl: 'Custom Quote', ltl: 'Custom Quote' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                    <div className="font-bold text-primary-600 mb-2">{item.distance}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-600">FTL: <span className="font-semibold text-secondary-500">{item.ftl}</span></div>
                      <div className="text-gray-600">LTL: <span className="font-semibold text-secondary-500">{item.ltl}</span></div>
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
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Additional Services & Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { service: 'Liftgate Service', price: '$50-$100' },
                { service: 'Inside Delivery', price: '$75-$150' },
                { service: 'Residential Delivery', price: '$50-$100' },
                { service: 'Appointment Scheduling', price: '$25-$50' },
                { service: 'Weekend/Holiday', price: '+25-50%' },
                { service: 'After-Hours Delivery', price: '+$100' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{item.service}</span>
                  <span className="font-semibold text-secondary-500">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Prices are estimates and vary based on exact distance, pallet quantity, weight, and special requirements. Contact us for exact quotes.
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
                question: 'How do I track my pallet shipment?',
                answer: 'All shipments include GPS tracking. You\'ll receive a tracking number and portal access after booking. Our system provides real-time location updates, estimated arrival times, and delivery confirmations. You can also call our 24/7 dispatch center for immediate status updates.'
              },
              {
                question: 'What information do you need for a transportation quote?',
                answer: 'We need: (1) Pickup location (city/zip), (2) Delivery location (city/zip), (3) Number of pallets, (4) Pallet sizes and weight, (5) Desired delivery timeframe. Providing complete information helps us give accurate quotes and avoid surprises.'
              },
              {
                question: 'Do you deliver to residential addresses?',
                answer: 'Yes, though residential delivery has additional considerations. Most of our equipment is designed for commercial loading docks. For residential delivery, we typically use smaller trucks with liftgates. There may be additional fees ($50-$100) and extended delivery timeframes.'
              },
              {
                question: 'What happens if pallets are damaged during transport?',
                answer: 'All shipments are fully insured. Inspect pallets upon delivery and note any damage on the delivery receipt. Take photos and contact us immediately. We file claims with our insurance carrier and replace damaged pallets at no cost to you. Most claims are resolved within 7-10 business days.'
              },
              {
                question: 'Can you deliver to locations without loading docks?',
                answer: 'Yes! We have liftgate-equipped trucks for locations without loading docks. Liftgates allow safe ground-level loading and unloading. There\'s typically a $50-$100 surcharge for liftgate service. Some locations may also require pallet jacks or hand unloading.'
              },
              {
                question: 'Do you offer expedited or emergency shipping?',
                answer: 'Absolutely. Our same-day express service handles emergency needs in major metro areas. For other locations, we can often arrange next-day delivery by expediting routing and using dedicated trucks. Contact our dispatch center 24/7 for emergency service requests.'
              },
              {
                question: 'What are your delivery hour restrictions?',
                answer: 'Standard delivery is Monday-Friday, 8 AM-5 PM. We offer after-hours delivery (5 PM-8 PM) and weekend delivery for additional fees. Some locations have specific requirements or restrictions - we coordinate directly with your receiving department to ensure smooth delivery.'
              },
              {
                question: 'Can I schedule recurring deliveries?',
                answer: 'Yes! Many customers establish scheduled delivery programs (weekly, bi-weekly, or monthly). Recurring deliveries benefit from preferred pricing, guaranteed capacity, and streamlined logistics. Contact our account management team to set up a customized delivery schedule.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Need Pallet Transportation?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get instant quotes, schedule pickups, and track shipments. Fast, reliable service across all 50 states.
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
                24/7 Dispatch: (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
