'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DisposalPage() {
  const detailFaqs = [
    {
      question: 'Is pallet disposal free?',
      answer: 'It depends on the pallets and the partner supplier. Pallets in good condition may have resale value, while broken or contaminated pallets usually cost more to deal with. Pricing is by quote from partner suppliers. The quote request itself is free and carries no obligation.',
    },
    {
      question: 'What happens to pallets after disposal?',
      answer: 'That varies by partner supplier and local outlets. Reusable pallets may go back into service, and clean wood is often ground into mulch or animal bedding or used as biomass fuel. Ask the partner supplier how it handles the material.',
    },
    {
      question: 'What about pallets that held hazardous material?',
      answer: 'Pallets exposed to hazardous material need specialist handling and are outside what this request form covers. Check current regulations and speak to a licensed hazardous waste handler.',
    },
    {
      question: 'When can a disposal pickup be scheduled?',
      answer: 'Timing depends on the partner supplier and on your location and quantity. Put your preferred dates in your request, and a partner supplier follows up to discuss what is possible.',
    },
    {
      question: 'Is there a minimum quantity for disposal pickup?',
      answer: 'Minimums are set by each partner supplier. Very small quantities can be harder to collect economically, so also check whether your local transfer station or recycling center accepts pallets.',
    },
    {
      question: 'Can you help with entire warehouse clearouts?',
      answer: 'You can send a request for a full clearout. Give the approximate quantity, the pallet condition, and your site access, and a partner supplier follows up to say whether it can take on the project.',
    },
    {
      question: 'How are pallets with nails or metal parts handled?',
      answer: 'Wood recycling commonly involves removing nails and other metal during grinding, and the metal can be recycled separately. Mention any banding, metal plates, or other attachments in your request.',
    },
  ]

  const faqItems = [
    {
      question: 'What pallet disposal methods are used?',
      answer: 'Reuse and recycling are the usual first choices. Pallets that can be used again may be repaired or resold, and other clean wood may be ground for mulch, biomass, or fuel. Methods vary by partner supplier.',
    },
    {
      question: 'Can I get paperwork for disposed pallets?',
      answer: 'Ask when you discuss your quote. If you need a receipt or a record of what was collected, say so in your request and the partner supplier can tell you what it provides.',
    },
    {
      question: 'Can contaminated or unsafe pallets be taken?',
      answer: 'Some partner suppliers may accept pallets with spills, mold, or other contamination, and others will not. Describe the condition honestly in your request so the partner supplier can decide.',
    },
    {
      question: 'Is on-site pallet removal available?',
      answer: 'Pickup from your site is available through partner suppliers where offered. Availability depends on your location and quantity.',
    },
    {
      question: 'What are the benefits of responsible pallet disposal?',
      answer: 'Clearing old pallets frees up space, removes a trip and fire hazard, and gives usable material a chance at reuse or recycling.',
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
            <p className="text-xl text-gray-700 max-w-3xl">Request removal of broken or unwanted pallets through partner suppliers, where offered. We take requests from across the US; availability depends on partner suppliers.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Professional Disposal Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                When pallets can no longer be repaired or reused, they still need somewhere to go. USA Pallet Solution is a referral service: you send one request and we pass it to partner suppliers in our network, who quote and handle removal where offered. We do not collect or process pallets ourselves.
              </p>
              <p className="mb-6 leading-relaxed">
                Leaving broken pallets to pile up has real costs. Stacks of dry wood are a fire hazard, loose nails and boards are a safety risk, and pests can settle in. Rules on dumping and burning vary by location, and treated wood can need particular care, so check current regulations before disposing of pallets yourself.
              </p>
              <p className="mb-6 leading-relaxed">
                Disposal does not have to mean landfill. Reusing a pallet avoids building a new one, and pallets beyond repair may still yield usable parts. Clean wood can often be ground into mulch or animal bedding or used as biomass fuel, depending on the outlets a partner supplier has available.
              </p>
              <p className="mb-6 leading-relaxed">
                A clear request helps. Tell the partner supplier how many pallets you have, what condition they are in, whether anything has been spilled on them, and how they can be reached and loaded. If you need a receipt or other paperwork for your records, ask when you discuss your quote.
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
            How Pallet Disposal Usually Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            A typical sequence once a partner supplier takes on the job. Exact steps vary by supplier.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: 'Collection',
                description: 'Pickup or drop-off of pallets, where offered',
                icon: '🚚',
                details: ['Scheduling set with the supplier', 'Quantity confirmed in the quote', 'Loading plan agreed'],
              },
              {
                step: 'Assessment',
                description: 'A check of what the pallets are made of and what condition they are in',
                icon: '🔍',
                details: ['Material identification', 'Contamination check', 'Reusable parts noted'],
              },
              {
                step: 'Sorting & Processing',
                description: 'Separation by material and the most suitable outlet',
                icon: '♻️',
                details: ['Materials separated', 'Usable parts salvaged', 'Metal removed'],
              },
              {
                step: 'Final Disposition',
                description: 'Reuse, recycling, or disposal, depending on the material',
                icon: '🌱',
                details: ['Reuse where possible', 'Recycling where available', 'Disposal for the remainder'],
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
                  description: 'Clean wood can be ground into mulch, animal bedding, or composite materials',
                  icon: '🪵',
                },
                {
                  method: 'Energy Recovery',
                  description: 'Suitable wood can be used as biomass fuel where outlets exist',
                  icon: '⚡',
                },
                {
                  method: 'Material Reuse',
                  description: 'Sound boards and blocks can be salvaged for pallet repairs',
                  icon: '🔧',
                },
              ].map((method, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <div className="text-5xl mb-3">{method.icon}</div>
                  <h4 className="font-bold text-primary-600 mb-2">{method.method}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-lg text-center">
              <p className="text-primary-600 font-bold">Reuse Comes First</p>
              <p className="text-sm text-gray-600 mt-1">Reusing a pallet avoids building a new one. Ask the partner supplier what outlets are available in your area.</p>
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
            Types of Pallets for Disposal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Broken/Damaged Pallets',
                description: 'Too damaged to be worth repairing',
                icon: '🔨',
                examples: ['Cracked stringers', 'Multiple broken boards', 'Warped frames', 'Split blocks'],
                handling: 'Parts may be salvaged before recycling',
              },
              {
                type: 'Contaminated Pallets',
                description: 'Exposed to spills, mold, pests, or food residue',
                icon: '⚠️',
                examples: ['Oil spills', 'Mold or mildew growth', 'Pest damage', 'Food residue'],
                handling: 'Describe the condition; acceptance varies by supplier',
              },
              {
                type: 'Non-Standard Sizes',
                description: 'Unusual dimensions with limited reuse potential',
                icon: '📏',
                examples: ['Custom one-off sizes', 'Oversized pallets', 'Odd configurations', 'Prototype designs'],
                handling: 'Parts may be salvaged or recycled',
              },
              {
                type: 'Treated Wood Pallets',
                description: 'Painted, coated, or chemically treated wood',
                icon: '🧪',
                examples: ['Painted pallets', 'Stained or coated wood', 'Chemically treated wood', 'Unknown treatments'],
                handling: 'Mention it in your request and check current regulations',
              },
              {
                type: 'Mixed Material Pallets',
                description: 'Combinations of materials that complicate recycling',
                icon: '🔀',
                examples: ['Wood and plastic', 'Wood and metal', 'Composite materials', 'Metal banding'],
                handling: 'Materials may need separating first',
              },
              {
                type: 'Bulk Clearance Lots',
                description: 'Large quantities from closures or cleanouts',
                icon: '📦',
                examples: ['Warehouse closings', 'Business relocations', 'Inventory purges', 'Site cleanups'],
                handling: 'Give the approximate quantity and site access',
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
            Rules and Paperwork to Check
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Rules Worth Checking</h3>
              <ul className="space-y-4">
                {[
                  { topic: 'State Waste Rules', description: 'States differ on how wood waste is handled, so check current regulations' },
                  { topic: 'Local Ordinances', description: 'Cities and counties may set their own rules on dumping and burning' },
                  { topic: 'Landfill Acceptance', description: 'Some local sites restrict or refuse pallets, so ask before you haul them' },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-primary-600 mb-1">{item.topic}</h4>
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
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Paperwork to Ask About</h3>
              <ul className="space-y-4">
                {[
                  { document: 'Pickup Receipt', description: 'A record of when pallets were collected and by whom' },
                  { document: 'Load Count or Weight', description: 'A record of how much material was removed' },
                  { document: 'Your Own Requirements', description: 'Tell the partner supplier what your records need; what is provided varies' },
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
            How Disposal Pricing Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tier: 'Small Quantity',
                description: 'One-time cleanouts or small businesses',
                factors: ['Pallet condition', 'Distance to your site', 'Whether a trip is practical'],
              },
              {
                tier: 'Regular Volume',
                description: 'Warehouses with a steady flow of unusable pallets',
                factors: ['Quantity each pickup', 'How often pickups are needed', 'Loading setup'],
              },
              {
                tier: 'Large Volume',
                description: 'Clearouts and larger one-off projects',
                factors: ['Total quantity', 'Mix of materials', 'Site access and time available'],
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
                <p className="text-gray-600 text-sm mb-6">{tier.description}</p>
                <div className="space-y-3">
                  {tier.factors.map((factor, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                      <span className="text-gray-600">{factor}</span>
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
            <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">Details to Mention in Your Request</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Weekend or holiday pickup',
                'Remote or hard-to-reach location',
                'Contaminated or treated pallets',
                'Removal from inside a building',
                'Upper floors or limited access',
                'A date you need the space cleared by',
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Pricing is by quote from partner suppliers and depends on your location, quantity, and pallet condition.
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
            <h2 className="text-4xl font-bold mb-6 text-white">Need Responsible Pallet Disposal?</h2>
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
