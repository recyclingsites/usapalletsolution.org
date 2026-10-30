'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RepairPage() {
  const detailFaqs = [
    {
      question: 'How do I know if my pallets are worth repairing?',
      answer: 'Generally, if the frame (stringers or blocks) is intact and only deck boards need replacing, repair is worth pricing. Describe the damage in your request and a partner supplier can advise whether repair or replacement makes more sense.',
    },
    {
      question: 'Who stands behind the repair work?',
      answer: 'The partner supplier doing the work. Ask about its quality standards and terms when you discuss your quote.',
    },
    {
      question: 'What about ISPM 15 pallets that need repair?',
      answer: 'ISPM 15 is the international standard for wood packaging. Its heat treatment reaches a core temperature of 56 °C for 30 minutes, and treated pallets carry the IPPC mark. A repair can change a pallet\'s export status, so check current regulations and tell the partner supplier if the pallets will be exported.',
    },
    {
      question: 'Can plastic or metal pallets be repaired?',
      answer: 'Wood pallets are the most commonly repaired because individual boards and blocks can be replaced. Plastic and metal pallets are harder to repair in general. Describe yours in your request and a partner supplier can tell you whether it is practical.',
    },
    {
      question: 'Is there a minimum quantity for pickup?',
      answer: 'Minimums are set by each partner supplier. Include your quantity and location in your request and the partner supplier that follows up can tell you what applies.',
    },
    {
      question: 'How long do repaired pallets last?',
      answer: 'It depends on the repair, the load weights, handling, and storage conditions. Careful forklift handling and dry storage make a real difference to any pallet, repaired or new.',
    },
    {
      question: 'Can repairs match my existing pallet specifications?',
      answer: 'Ask for it in your request. Give the size, style, and board details of your pallets so a partner supplier can tell you whether it can match them, which helps keep pallets compatible with your equipment.',
    },
    {
      question: 'Can repairs be set up on a repeating schedule?',
      answer: 'You can ask. Describe how many pallets need repair and how often, and a partner supplier will say whether a repeating schedule is something it can offer.',
    },
  ]

  const faqItems = [
    {
      question: 'What pallet types can be repaired?',
      answer: 'Stringer and block pallets are both commonly repaired by replacing boards, stringers, or blocks. What is available depends on the partner supplier.',
    },
    {
      question: 'Does USA Pallet Solution do the repairs?',
      answer: 'No. We are a referral service. We pass your request to partner suppliers in our network, and repair is available through them where offered.',
    },
    {
      question: 'How is quality checked after repairs?',
      answer: 'Repaired pallets are normally inspected and sorted by grade. Ask the partner supplier how it checks its work and which grade you can expect.',
    },
    {
      question: 'Can repaired pallets be heat-treated?',
      answer: 'Some partner suppliers may be able to arrange it through an authorized treatment provider. If you need pallets for export, say so in your request.',
    },
    {
      question: 'Is there a minimum volume for repairs?',
      answer: 'That varies by partner supplier. Small batches and larger volumes are both welcome as requests, and the partner supplier that follows up can tell you what it can take on.',
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="mb-6 text-sm">
              <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">Pallet Repair</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Professional Pallet Repair</h1>
            <p className="text-xl text-gray-700 max-w-3xl">Request pallet repair through partner suppliers, where offered. Repairing a sound pallet can keep it in use and avoid building a new one.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Why Repair Instead of Replace?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                Plenty of pallets are taken out of service over minor damage, such as a single cracked deck board. If the frame is still sound, replacing the damaged parts can put that pallet back to work. USA Pallet Solution is a referral service: we pass your repair request to partner suppliers in our network, who quote and carry out the work where offered.
              </p>
              <p className="mb-6 leading-relaxed">
                Cost is the usual reason to look at repair. Whether it beats buying replacements depends on the damage, the pallet type, and your quantity, so it is worth comparing both. Pricing is by quote from partner suppliers, and you can ask for repair and replacement options in the same request.
              </p>
              <p className="mb-6 leading-relaxed">
                There is a resource benefit too. Reusing a pallet avoids building a new one, and repair keeps usable lumber in service for longer. Damaged boards that come off a pallet may be recyclable where a partner supplier offers it.
              </p>
              <p className="mb-6 leading-relaxed">
                A good repair request tells the partner supplier what they are dealing with: pallet size and style, the kind of damage, how many pallets you have, and where they are. Photos can help when a partner supplier follows up, and they make it easier to judge whether repair is the right call.
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
              Request Repair Service Quote
            </motion.h2>
            <ContactForm productType="Pallet Repair" />
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
            Types of Pallet Repair
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Common repair work, from simple board replacement to fuller rebuilds. What is available depends on the partner supplier, and pricing is by quote.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                service: 'Deck Board Replacement',
                description: 'Replacing broken, cracked, or split deck boards with sound lumber',
                icon: '🪵',
                details: [
                  'Top and bottom deck boards',
                  'Boards matched to the pallet',
                  'Careful nail placement',
                ],
              },
              {
                service: 'Stringer Repair & Replacement',
                description: 'Repairing or replacing damaged stringers, the pallet\'s support beams',
                icon: '🔨',
                details: [
                  'Damage assessment',
                  'Reinforcement or replacement',
                  'Fork entry kept clear',
                ],
              },
              {
                service: 'Block Replacement',
                description: 'Replacing damaged blocks on block-style pallets',
                icon: '⬛',
                details: [
                  'Corner and center blocks',
                  'Suitable fastening hardware',
                  'Four-way entry kept clear',
                ],
              },
              {
                service: 'Fastener Replacement',
                description: 'Re-nailing loose boards or replacing nails with stronger fasteners',
                icon: '🔩',
                details: [
                  'Spiral or ring-shank nails',
                  'Screws for heavier use',
                  'Loose or protruding nails addressed',
                ],
              },
              {
                service: 'Heat Treatment (ISPM 15)',
                description: 'The standard treatment for wood pallets used in international shipping',
                icon: '🔥',
                details: [
                  'Core temperature of 56 °C',
                  'Held for 30 minutes',
                  'IPPC mark on treated pallets',
                  'Ask if it is available',
                ],
              },
              {
                service: 'Full Restoration',
                description: 'Taking apart badly damaged pallets and rebuilding them',
                icon: '🏗️',
                details: [
                  'Usable parts salvaged',
                  'Damaged parts replaced',
                  'Rebuilt to the pallet\'s size',
                ],
              },
              {
                service: 'Custom Modifications',
                description: 'Changing pallets to suit a specific requirement',
                icon: '⚙️',
                details: [
                  'Size adjustments',
                  'Additional supports',
                  'Your own specifications',
                ],
              },
              {
                service: 'Cleaning',
                description: 'Removing dirt and surface debris from used pallets',
                icon: '🧼',
                details: [
                  'Pressure washing',
                  'Debris removal',
                  'Ask about mold or staining',
                ],
              },
              {
                service: 'Reinforcement',
                description: 'Adding support for heavier loads',
                icon: '💪',
                details: [
                  'Additional stringers or blocks',
                  'Thicker deck boards',
                  'Confirm load needs with the supplier',
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
                <h3 className="text-xl font-bold text-primary-600 mb-3">{service.service}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
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
            Repair Process & Turnaround
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: 'Inspection',
                description: 'Each pallet is checked for damage and repair needs',
                icon: '🔍',
              },
              {
                step: 'Sorting',
                description: 'Pallets are grouped by damage type and the repair required',
                icon: '📋',
              },
              {
                step: 'Repair Work',
                description: 'Damaged parts are replaced or reinforced to the agreed specification',
                icon: '🔧',
              },
              {
                step: 'Quality Check',
                description: 'A final check confirms the pallet is ready to go back into use',
                icon: '✓',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow text-center"
              >
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{step.step}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border-2 border-primary-200 soft-shadow"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Planning Around Turnaround</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  option: 'Have a Deadline',
                  description: 'Put the date in your request so a partner supplier can say whether it works',
                },
                {
                  option: 'Flexible Timing',
                  description: 'Let the partner supplier know if your dates can move',
                },
                {
                  option: 'Large Volume',
                  description: 'Give your total quantity so the work can be planned in batches if needed',
                },
              ].map((option, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <h4 className="font-bold text-primary-600 mb-2">{option.option}</h4>
                  <p className="text-sm text-gray-600 mb-2">{option.description}</p>
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
            Repair vs. Replace: What to Compare
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-2 border-primary-200 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6">Buying Pallets</h3>
              <div className="space-y-4">
                {[
                  'Makes sense when frames are badly damaged',
                  'Gives you a consistent size and style',
                  'Can be new or used, by quote from partner suppliers',
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-xl border-2 border-secondary-500 soft-shadow"
            >
              <h3 className="text-2xl font-bold text-secondary-600 mb-6">Repairing Pallets</h3>
              <div className="space-y-4">
                {[
                  'Makes sense when frames are still sound',
                  'Keeps your existing pallets in use',
                  'Avoids building a new pallet, by quote from partner suppliers',
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-secondary-500 to-primary-600 p-8 rounded-xl text-white text-center soft-shadow"
          >
            <h3 className="text-3xl font-bold mb-4">Not Sure Which Is Better?</h3>
            <p className="text-white/90">Ask for both in your request. The answer depends on the damage, your quantity, and how the pallets are used.</p>
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
            Repair Service Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: 'Drop-Off',
                description: 'Take your pallets to a partner supplier, where offered',
                icon: '🚗',
                features: [
                  'Useful for smaller quantities',
                  'Location shared by the supplier',
                  'Pick up when work is done',
                ],
              },
              {
                plan: 'Pickup & Delivery',
                description: 'A partner supplier collects, repairs, and returns your pallets, where offered',
                icon: '🚚',
                features: [
                  'Useful for larger quantities',
                  'Scheduling agreed with the supplier',
                  'Tell us your loading setup',
                ],
              },
              {
                plan: 'Repair or Replace Advice',
                description: 'Not sure yet? Describe your pallets and ask what makes sense',
                icon: '💬',
                features: [
                  'Describe the damage',
                  'Have photos ready',
                  'Compare both options',
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-2 border-primary-200 soft-shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3 text-center">{plan.plan}</h3>
                <p className="text-gray-600 mb-6 text-center">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-secondary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center p-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                  <div className="text-sm font-semibold text-secondary-500">Pricing by quote</div>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Have Pallets That Need Repair?</h2>
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
