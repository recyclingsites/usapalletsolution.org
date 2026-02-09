'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DisposalPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Disposal Services</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Responsible Pallet Disposal</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Safe, compliant, and environmentally responsible pallet disposal and waste management services.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Professional Disposal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                When pallets reach the end of their useful life and are no longer suitable for repair or reuse, proper disposal is critical. USA Pallet Solution provides comprehensive, environmentally responsible disposal services that ensure regulatory compliance while minimizing environmental impact. We handle everything from collection to final processing, giving you peace of mind that your pallet waste is managed responsibly.
              </p>
              <p className="mb-6 leading-relaxed">
                Improper pallet disposal can have serious consequences. Dumping pallets in landfills wastes valuable resources and contributes to methane emissions. Illegal dumping carries substantial fines and legal liability. Burning treated wood releases toxic chemicals. Stockpiling broken pallets creates fire hazards, pest habitats, and safety risks. Our professional disposal services eliminate these concerns while maximizing material recovery and environmental benefit.
              </p>
              <p className="mb-6 leading-relaxed">
                Our disposal process prioritizes sustainability. Even pallets deemed non-repairable have value. We employ a comprehensive assessment protocol that identifies salvageable components, recyclable materials, and appropriate end-use applications. Through partnerships with wood recycling facilities, biomass energy plants, and material recovery centers, we ensure that 95% of disposed pallets are diverted from landfills and converted into valuable secondary products.
              </p>
              <p className="mb-6 leading-relaxed">
                Documentation and compliance are integral to our service. We provide detailed disposal certificates showing quantities, materials, processing methods, and final disposition. These documents support your environmental reporting requirements, sustainability goals, and regulatory compliance. For businesses subject to environmental audits, waste management regulations, or ESG reporting standards, our comprehensive documentation provides the evidence needed to demonstrate responsible waste management practices.
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
              Request Disposal Service
            </motion.h2>
            <ContactForm productType="Disposal Services" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4 text-primary-600"
          >
            Our Disposal Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            A systematic approach ensuring maximum material recovery, regulatory compliance, and environmental responsibility.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: 'Collection',
                description: 'Scheduled pickup or drop-off of pallets requiring disposal',
                icon: '🚚',
                details: ['Free collection service', 'Flexible scheduling', 'Nationwide coverage', 'All quantities accepted']
              },
              {
                step: 'Assessment',
                description: 'Detailed evaluation of material composition and contamination',
                icon: '🔍',
                details: ['Material identification', 'Contamination check', 'Component assessment', 'Processing determination']
              },
              {
                step: 'Sorting & Processing',
                description: 'Separation by material type and appropriate disposal method',
                icon: '♻️',
                details: ['Material segregation', 'Component salvage', 'Contaminated handling', 'Processing routing']
              },
              {
                step: 'Final Disposition',
                description: 'Conversion to secondary products or responsible disposal',
                icon: '🌱',
                details: ['Material recycling', 'Energy recovery', 'Landfill diversion', 'Impact tracking']
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
                      <svg className="w-4 h-4 text-secondary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
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
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Material Recovery & Disposition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  method: 'Wood Recycling',
                  percentage: '60-70%',
                  description: 'Ground into mulch, animal bedding, or composite materials',
                  icon: '🪵'
                },
                {
                  method: 'Energy Recovery',
                  percentage: '20-25%',
                  description: 'Converted to biomass fuel for energy generation facilities',
                  icon: '⚡'
                },
                {
                  method: 'Material Reuse',
                  percentage: '5-10%',
                  description: 'Components salvaged for pallet repairs or other applications',
                  icon: '🔧'
                },
              ].map((method, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <div className="text-5xl mb-3">{method.icon}</div>
                  <h4 className="font-bold text-primary-600 mb-2">{method.method}</h4>
                  <div className="text-3xl font-bold text-secondary-500 mb-2">{method.percentage}</div>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-lg text-center">
              <p className="text-primary-600 font-bold">95%+ Landfill Diversion Rate</p>
              <p className="text-sm text-gray-600 mt-1">Only 5% goes to landfills (contaminated materials requiring special handling)</p>
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
            Types of Pallets We Dispose
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Broken/Damaged Pallets',
                description: 'Structurally compromised beyond economical repair',
                icon: '🔨',
                examples: ['Cracked stringers', 'Multiple broken boards', 'Warped frames', 'Split blocks'],
                handling: 'Dismantled for parts, then processed'
              },
              {
                type: 'Contaminated Pallets',
                description: 'Chemical, biological, or hazardous material exposure',
                icon: '☣️',
                examples: ['Oil/chemical spills', 'Mold/mildew growth', 'Pest infestation', 'Food contamination'],
                handling: 'Specialized treatment, proper disposal'
              },
              {
                type: 'Non-Standard Sizes',
                description: 'Unusual dimensions with limited reuse potential',
                icon: '📏',
                examples: ['Custom one-off sizes', 'Oversized pallets', 'Odd configurations', 'Prototype designs'],
                handling: 'Component salvage or recycling'
              },
              {
                type: 'Treated Wood Pallets',
                description: 'Chemically treated wood requiring special handling',
                icon: '🧪',
                examples: ['CCA treated wood', 'Creosote treated', 'PCP treated', 'Unknown treatments'],
                handling: 'EPA compliant disposal methods'
              },
              {
                type: 'Mixed Material Pallets',
                description: 'Combination materials complicating recycling',
                icon: '🔀',
                examples: ['Wood and plastic', 'Wood and metal', 'Composite materials', 'Multiple fasteners'],
                handling: 'Material separation, appropriate processing'
              },
              {
                type: 'Bulk Clearance Lots',
                description: 'Large quantities from facility closures or cleanouts',
                icon: '📦',
                examples: ['Warehouse closings', 'Business relocations', 'Inventory purges', 'Estate liquidations'],
                handling: 'Volume pickup, efficient processing'
              },
            ].map((pallet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{pallet.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{pallet.type}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pallet.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-500 mb-2">Common Examples:</h4>
                  <ul className="space-y-1">
                    {pallet.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-secondary-500">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <p className="text-xs font-semibold text-primary-600">{pallet.handling}</p>
                </div>
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
            Compliance & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Regulatory Compliance</h3>
              <ul className="space-y-4">
                {[
                  { regulation: 'EPA Regulations', description: 'Full compliance with Environmental Protection Agency guidelines for wood waste disposal' },
                  { regulation: 'State Waste Laws', description: 'Adherence to state-specific waste management and disposal regulations' },
                  { regulation: 'DOT Requirements', description: 'Transportation of waste materials following Department of Transportation standards' },
                  { regulation: 'OSHA Standards', description: 'Worker safety protocols for handling and processing waste materials' },
                  { regulation: 'Local Ordinances', description: 'Compliance with municipal waste management ordinances and permits' },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-primary-600 mb-1">{item.regulation}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
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
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Documentation Provided</h3>
              <ul className="space-y-4">
                {[
                  { document: 'Disposal Certificates', description: 'Official documentation of quantities and methods used for disposal' },
                  { document: 'Weight Tickets', description: 'Certified scales showing exact weight of materials processed' },
                  { document: 'Manifest Records', description: 'Complete chain of custody from collection to final disposition' },
                  { document: 'Environmental Impact Reports', description: 'Detailed metrics on landfill diversion and carbon savings' },
                  { document: 'Compliance Certifications', description: 'Proof of adherence to all applicable regulations and standards' },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-primary-600 mb-1">{item.document}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
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
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Fully Licensed & Insured</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              We maintain all necessary permits, licenses, and insurance coverage for waste handling and disposal operations. Our facilities undergo regular inspections and audits to ensure ongoing compliance with all regulatory requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Waste Handler License', icon: '📋' },
                { label: '$5M Liability Coverage', icon: '🔒' },
                { label: 'EPA Certified Facility', icon: '✓' },
                { label: 'DOT Authorized', icon: '🚛' },
              ].map((cert, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <p className="text-sm font-semibold text-primary-600">{cert.label}</p>
                </div>
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
            Disposal Service Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tier: 'Small Quantity',
                quantity: '1-100 pallets',
                description: 'Ideal for one-time cleanouts or small businesses',
                pricing: [
                  { service: 'Standard wooden pallets', cost: 'Free - $2/pallet' },
                  { service: 'Contaminated pallets', cost: '$5-$10/pallet' },
                  { service: 'Treated wood disposal', cost: '$8-$15/pallet' },
                  { service: 'Pickup service', cost: '$50-$150' },
                ]
              },
              {
                tier: 'Medium Volume',
                quantity: '100-500 pallets',
                description: 'Regular disposal needs for warehouses',
                pricing: [
                  { service: 'Standard wooden pallets', cost: 'Free' },
                  { service: 'Contaminated pallets', cost: '$3-$8/pallet' },
                  { service: 'Treated wood disposal', cost: '$6-$12/pallet' },
                  { service: 'Pickup service', cost: 'Free within 50 miles' },
                ]
              },
              {
                tier: 'Large Volume',
                quantity: '500+ pallets',
                description: 'Enterprise disposal programs',
                pricing: [
                  { service: 'Standard wooden pallets', cost: 'Free + possible credit' },
                  { service: 'Contaminated pallets', cost: '$2-$6/pallet' },
                  { service: 'Treated wood disposal', cost: '$5-$10/pallet' },
                  { service: 'Pickup service', cost: 'Free nationwide' },
                ]
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{tier.tier}</h3>
                <div className="text-secondary-500 font-bold mb-4">{tier.quantity}</div>
                <p className="text-gray-600 text-sm mb-6">{tier.description}</p>
                <div className="space-y-3">
                  {tier.pricing.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                      <span className="text-gray-600">{item.service}</span>
                      <span className="font-semibold text-secondary-500 text-right ml-2">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">Special Circumstances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { situation: 'Emergency/Rush Service', pricing: '+$100-$300 depending on timeline' },
                { situation: 'Weekend/Holiday Pickup', pricing: '+$50-$150 premium' },
                { situation: 'Remote Locations (100+ miles)', pricing: 'Mileage fees may apply' },
                { situation: 'Hazardous Material Handling', pricing: 'Custom quote based on material type' },
                { situation: 'Inside Building Removal', pricing: '+$50-$200 depending on difficulty' },
                { situation: 'Multi-Story Locations', pricing: '+$100-$300 for upper floor access' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <span className="text-gray-700 text-sm">{item.situation}</span>
                  <span className="font-semibold text-secondary-500 text-sm text-right ml-4">{item.pricing}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Prices vary based on location, quantity, pallet condition, and disposal requirements. Contact us for exact quotes.
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
                question: 'Is pallet disposal free?',
                answer: 'For standard wooden pallets in good to fair condition, disposal is typically free. We may even pay for higher quality pallets. Fees apply for contaminated pallets, treated wood requiring special handling, or small quantities requiring dedicated pickup trips. Contact us for a quote specific to your situation.'
              },
              {
                question: 'What happens to pallets after disposal?',
                answer: 'We maximize material recovery through our 95% landfill diversion program. Clean pallets are ground into mulch or animal bedding. Some become composite materials or fiberboard. Biomass-quality wood goes to energy facilities. Only contaminated materials requiring special treatment end up in approved disposal facilities.'
              },
              {
                question: 'Can you dispose of contaminated or treated pallets?',
                answer: 'Yes, we handle contaminated and chemically treated pallets following EPA regulations. These require special processing and typically incur disposal fees ($5-$15 per pallet depending on contamination type). We provide proper documentation and ensure compliant disposal at certified facilities.'
              },
              {
                question: 'How quickly can you schedule disposal pickup?',
                answer: 'Standard pickup is typically scheduled within 3-5 business days. For urgent situations, same-day or next-day service may be available for additional fees. Large volume pickups (500+ pallets) may require additional scheduling time to arrange appropriate equipment.'
              },
              {
                question: 'Do you provide documentation for disposed pallets?',
                answer: 'Absolutely. We provide comprehensive disposal documentation including certificates of disposal, weight tickets, environmental impact reports, and compliance certifications. This documentation supports your sustainability reporting, regulatory compliance, and audit requirements.'
              },
              {
                question: 'What is your minimum quantity for disposal pickup?',
                answer: 'We have no strict minimum, but pickups under 50 pallets may incur transportation fees ($50-$150) unless we can schedule collection during existing routes in your area. For very small quantities (under 10 pallets), we recommend drop-off at our facility when possible.'
              },
              {
                question: 'Can you help with entire warehouse clearouts?',
                answer: 'Yes! We handle complete facility clearances including thousands of pallets. We provide multiple trucks, crews, and coordination to complete large projects efficiently. Our team works around your schedule to minimize operational disruption. Contact us for custom clearance project quotes.'
              },
              {
                question: 'How do you handle pallets with nails or metal parts?',
                answer: 'Metal components like nails, bands, and fasteners are removed during our processing operation and recycled separately. This is standard procedure and included in our service. Metal recycling provides additional value recovery that helps offset disposal costs.'
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
            <h2 className="text-4xl font-bold mb-6 text-white">Need Responsible Pallet Disposal?</h2>
            <p className="text-xl text-white/90 mb-8">
              Free pickup for most situations. Compliant, documented, and environmentally responsible disposal services.
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
                Schedule Disposal
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
