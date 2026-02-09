'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RecyclingPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Sustainable Pallet Recycling</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Leading the industry in eco-friendly pallet recycling and refurbishment. Diverting millions of pallets from landfills annually.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Our Environmental Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                At USA Pallet Solution, environmental responsibility isn't just a buzzword - it's a core value that drives everything we do. Our state-of-the-art recycling facility processes over 2 million pallets annually, implementing sustainable practices that minimize waste, reduce carbon emissions, and maximize resource utilization. We're proud to be industry leaders in pallet recycling, setting standards that others aspire to achieve.
              </p>
              <p className="mb-6 leading-relaxed">
                The environmental impact of pallet waste is staggering. Without proper recycling, millions of pallets end up in landfills each year, contributing to deforestation and greenhouse gas emissions. A single wooden pallet takes decades to decompose naturally, and during that time, it releases methane - a potent greenhouse gas. By recycling and refurbishing pallets, we prevent this waste, conserve forest resources, and reduce the carbon footprint of the logistics industry.
              </p>
              <p className="mb-6 leading-relaxed">
                Our comprehensive recycling program handles pallets at every stage of their lifecycle. Grade A pallets that still have years of service life are inspected, cleaned, and resold. Grade B pallets with minor damage undergo professional repair and refurbishment, extending their useful life by 5-10 years. Pallets beyond economical repair are carefully dismantled, with usable components salvaged for other repairs. Finally, wood that cannot be reused is ground into mulch, animal bedding, or biomass fuel - ensuring zero waste goes to landfills.
              </p>
              <p className="mb-6 leading-relaxed">
                Through our recycling initiatives, we've prevented over 10,000 tons of wood from entering landfills in the past year alone. This represents savings of thousands of trees and significant reductions in CO2 emissions. Many of our corporate clients choose our recycling services specifically to meet their own sustainability goals and ESG (Environmental, Social, and Governance) requirements. We provide detailed recycling reports that quantify environmental impact, helping businesses demonstrate their commitment to sustainability.
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
              Start Your Recycling Program Today
            </motion.h2>
            <ContactForm productType="Recycling Services" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-primary-600">Our Recycling Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our advanced 7-step recycling process ensures maximum material recovery and minimal environmental impact. Every pallet is handled with care and processed sustainably.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 'Collection & Transport',
                  description: 'We collect pallets from your facility using our efficient logistics network. Scheduled or on-demand pickups available.',
                  icon: '🚚',
                  details: ['Free pickup service', 'Flexible scheduling', 'Nationwide coverage', 'Bulk collection']
                },
                {
                  step: 'Inspection & Grading',
                  description: 'Every pallet is carefully inspected and graded based on condition, structural integrity, and potential for reuse.',
                  icon: '🔍',
                  details: ['Professional assessment', 'Detailed classification', 'Quality control', 'Digital tracking']
                },
                {
                  step: 'Sorting & Categorization',
                  description: 'Pallets are sorted by size, material type, and condition. This ensures optimal processing and maximum recovery.',
                  icon: '📋',
                  details: ['Material separation', 'Size categorization', 'Condition grouping', 'Inventory management']
                },
                {
                  step: 'Repair & Refurbishment',
                  description: 'Repairable pallets undergo professional restoration. Damaged boards replaced, structural issues fixed.',
                  icon: '🔧',
                  details: ['Skilled craftsmen', 'Quality materials', 'Structural repairs', 'Extended lifecycle']
                },
                {
                  step: 'Dismantling & Salvage',
                  description: 'Pallets beyond repair are carefully dismantled. Usable components saved for future repairs.',
                  icon: '⚙️',
                  details: ['Component recovery', 'Material salvage', 'Hardware extraction', 'Part inventory']
                },
                {
                  step: 'Wood Grinding & Processing',
                  description: 'Non-reusable wood is ground into valuable secondary products like mulch, animal bedding, or biomass fuel.',
                  icon: '♻️',
                  details: ['Industrial grinders', 'Multiple product streams', 'Zero landfill waste', 'Value recovery']
                },
                {
                  step: 'Resale & Distribution',
                  description: 'Refurbished pallets are cleaned, marked, and made available for resale at discounted prices.',
                  icon: '🏪',
                  details: ['Quality assurance', 'Competitive pricing', 'Fast delivery', 'Warranty included']
                },
                {
                  step: 'Reporting & Documentation',
                  description: 'Detailed reports provided showing environmental impact, weight diverted from landfills, and carbon savings.',
                  icon: '📊',
                  details: ['Impact metrics', 'Compliance docs', 'ESG reporting', 'Certification']
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
            Environmental Impact & Statistics
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { stat: '2M+', label: 'Pallets Recycled Annually', icon: '📊' },
              { stat: '95%', label: 'Landfill Diversion Rate', icon: '♻️' },
              { stat: '10,000+', label: 'Tons of Wood Saved', icon: '🌲' },
              { stat: '500', label: 'Tons CO2 Prevented', icon: '🌍' },
              { stat: '100%', label: 'Material Utilization', icon: '✓' },
              { stat: '50,000+', label: 'Trees Saved Equivalent', icon: '🌳' },
              { stat: '15+', label: 'Years of Operation', icon: '📅' },
              { stat: '1,000+', label: 'Recycling Partners', icon: '🤝' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border-2 border-primary-200 soft-shadow text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">What Your Recycling Achieves</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  benefit: 'Forest Conservation',
                  description: 'Every 1,000 pallets recycled saves approximately 25 mature trees from being harvested.',
                  icon: '🌲'
                },
                {
                  benefit: 'Carbon Reduction',
                  description: 'Recycling pallets prevents methane release and reduces CO2 emissions by up to 75% vs. landfilling.',
                  icon: '🌍'
                },
                {
                  benefit: 'Energy Savings',
                  description: 'Manufacturing pallets from recycled wood uses 65% less energy than creating new pallets.',
                  icon: '⚡'
                },
                {
                  benefit: 'Landfill Space',
                  description: 'Diverts valuable landfill space for non-recyclable waste, extending landfill lifespans.',
                  icon: '🗑️'
                },
                {
                  benefit: 'Economic Value',
                  description: 'Creates jobs in recycling sector and generates value from materials that would be waste.',
                  icon: '💰'
                },
                {
                  benefit: 'Circular Economy',
                  description: 'Supports sustainable business practices and reduces reliance on virgin materials.',
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
            Recycling Program Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'One-Time Recycling',
                price: 'Free Pickup',
                description: 'Perfect for facility cleanouts or one-time pallet disposal needs',
                features: [
                  'No minimum quantity',
                  'Free collection service',
                  'Same or next-day pickup',
                  'Immediate service',
                  'No contracts required',
                  'Environmental report'
                ],
                popular: false
              },
              {
                title: 'Monthly Recycling Program',
                price: 'Custom Pricing',
                description: 'Scheduled monthly pickups for businesses with ongoing recycling needs',
                features: [
                  'Scheduled collections',
                  'Dedicated account manager',
                  'Volume-based pricing',
                  'Quarterly impact reports',
                  'Priority service',
                  'Flexible scheduling'
                ],
                popular: true
              },
              {
                title: 'Enterprise Program',
                price: 'Contact Us',
                description: 'Comprehensive solution for large corporations with multiple locations',
                features: [
                  'Multi-location service',
                  'Custom logistics planning',
                  'Advanced analytics',
                  'ESG compliance reporting',
                  'Dedicated support team',
                  'Preferred pricing'
                ],
                popular: false
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl p-8 border-2 soft-shadow hover:shadow-lg transition-shadow ${
                  program.popular ? 'border-secondary-500 relative' : 'border-primary-200'
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-secondary-500 text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{program.title}</h3>
                <div className="text-3xl font-bold text-secondary-500 mb-4">{program.price}</div>
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
                  className={`block text-center px-6 py-3 rounded-lg font-bold transition-all ${
                    program.popular
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:from-primary-700 hover:to-secondary-600'
                      : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Get Started
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
            Industries We Serve
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Manufacturing', icon: '🏭', description: 'High-volume recycling for production facilities' },
              { name: 'Retail', icon: '🏬', description: 'Distribution center pallet management' },
              { name: 'Logistics', icon: '🚛', description: 'Reverse logistics and pallet recovery' },
              { name: 'Warehousing', icon: '📦', description: 'Regular collection and recycling services' },
              { name: 'Food & Beverage', icon: '🍎', description: 'Food-grade pallet recycling programs' },
              { name: 'Pharmaceutical', icon: '💊', description: 'Compliant disposal and recycling' },
              { name: 'Automotive', icon: '🚗', description: 'Industrial pallet recycling solutions' },
              { name: 'Construction', icon: '🏗️', description: 'Job site pallet removal and recycling' },
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
                question: 'What types of pallets do you recycle?',
                answer: 'We recycle all types of pallets including wooden pallets (hardwood and softwood), plastic pallets, metal pallets, and mixed materials. We handle standard sizes like GMA 48x40 as well as custom sizes. Pallets can be in any condition - we even recycle severely damaged pallets that other facilities might reject.'
              },
              {
                question: 'Is there a minimum quantity for recycling pickup?',
                answer: 'No minimum! We pick up anywhere from a single pallet to truckloads. However, for very small quantities (under 10 pallets), we may schedule pickup when our truck is already in your area to maximize efficiency. Large quantities (100+) can be scheduled at your convenience.'
              },
              {
                question: 'Do you charge for recycling pickup?',
                answer: 'Our recycling pickup service is FREE for most situations. In some cases, depending on pallet condition and market value, we may even pay you for your pallets. We only charge fees for contaminated pallets requiring special handling or for remote locations with significant transportation costs.'
              },
              {
                question: 'How do I prepare pallets for recycling pickup?',
                answer: 'Simply stack pallets in an accessible location where our truck can safely load them. Stack similar sizes together, up to 5-6 feet high. Ensure the pickup area is clear of obstacles. No special preparation needed - we handle everything else including loading and transportation.'
              },
              {
                question: 'What happens to pallets after you pick them up?',
                answer: 'Pallets go through our 7-step recycling process. Good condition pallets are inspected and resold. Repairable pallets are refurbished. Damaged pallets are dismantled for parts. Remaining wood is ground into secondary products like mulch or biomass fuel. Nothing goes to landfills - we achieve 95%+ diversion rate.'
              },
              {
                question: 'Do you provide environmental impact reports?',
                answer: 'Yes! We provide detailed reports showing the environmental impact of your recycling program. Reports include total weight diverted from landfills, estimated CO2 emissions prevented, trees saved equivalent, and more. These reports help meet sustainability goals and ESG reporting requirements.'
              },
              {
                question: 'Can I purchase recycled pallets from you?',
                answer: 'Absolutely! Our refurbished Grade A pallets are available for purchase at 40-50% less than new pallets. These pallets have been professionally inspected, repaired, and tested to ensure quality. They provide excellent value while supporting sustainability goals.'
              },
              {
                question: 'How quickly can you schedule a recycling pickup?',
                answer: 'For urgent needs, same-day or next-day pickup is often available. Standard scheduling is typically within 3-5 business days. For ongoing programs, we establish regular pickup schedules (weekly, monthly, quarterly) that work with your operations.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Recycling?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our recycling program today and make a positive environmental impact. Free pickup, detailed reporting, and expert service.
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
                Schedule Pickup
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
