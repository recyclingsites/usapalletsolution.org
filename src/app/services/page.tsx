'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Pallet Buying',
    description: 'We purchase used pallets in any quantity and condition',
    href: '/services/buying',
    icon: '💰',
  },
  {
    title: 'Pallet Selling',
    description: 'Wide selection of new and used pallets ready for delivery',
    href: '/services/selling',
    icon: '🏪',
  },
  {
    title: 'Pallet Recycling',
    description: 'Eco-friendly recycling and refurbishment services',
    href: '/services/recycling',
    icon: '♻️',
  },
  {
    title: 'Transportation',
    description: 'Reliable pallet delivery across the United States',
    href: '/services/transportation',
    icon: '🚚',
  },
  {
    title: 'Pallet Repair',
    description: 'Professional repair services to extend pallet lifespan',
    href: '/services/repair',
    icon: '🔧',
  },
  {
    title: 'Disposal Services',
    description: 'Safe and compliant pallet disposal and waste management',
    href: '/services/disposal',
    icon: '🗑️',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Comprehensive Pallet Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8">
              Complete pallet lifecycle management solutions from procurement to disposal, serving businesses nationwide with reliability, sustainability, and exceptional service quality.
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
            <h2 className="text-4xl font-bold mb-8 text-primary-600">Your Complete Pallet Partner</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 leading-relaxed">
                USA Pallet Solution is your trusted partner for all pallet-related services across the United States. With decades of combined experience in the pallet industry, we understand the critical role that pallets play in supply chain operations, warehouse management, and logistics efficiency. Our comprehensive service offerings are designed to meet every need of modern businesses, from small local operations to large-scale national distribution centers.
              </p>
              <p className="mb-6 leading-relaxed">
                The pallet industry is a cornerstone of global commerce, facilitating the movement of billions of dollars worth of goods every day. In the United States alone, over 2 billion pallets are in circulation, supporting industries ranging from manufacturing and retail to agriculture and pharmaceuticals. Understanding this critical infrastructure, we have built our services to ensure your operations never experience disruption due to pallet availability, quality, or disposal challenges.
              </p>
              <p className="mb-6 leading-relaxed">
                Our service philosophy is built on three core pillars: reliability, sustainability, and customer-centricity. We recognize that businesses need partners they can depend on for consistent quality and timely service delivery. Our state-of-the-art facilities, modern fleet of transportation vehicles, and experienced team members ensure that we meet and exceed expectations on every engagement. Whether you need to purchase thousands of pallets for a new warehouse, sell surplus inventory, repair damaged units, or responsibly dispose of end-of-life pallets, we provide seamless, professional service.
              </p>
              <p className="mb-6 leading-relaxed">
                Environmental responsibility is at the heart of everything we do. The pallet industry has made tremendous strides in sustainability, and we are proud to be leaders in this movement. Through our recycling and refurbishment programs, we divert millions of pounds of wood from landfills annually, reducing environmental impact while providing cost-effective solutions for our clients. Our circular economy approach ensures that pallets are kept in service as long as possible, maximizing resource utilization and minimizing waste.
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
            Our Service Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            From buying and selling to recycling and transportation, we provide end-to-end pallet solutions tailored to your business needs.
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
            Why Choose USA Pallet Solution
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '⚡', title: 'Lightning Fast Response', description: 'Same-day quotes and rapid service deployment. Our team responds to inquiries within 2 hours during business hours.' },
              { icon: '✓', title: 'Proven Reliability', description: 'Over 15 years serving businesses nationwide with 99.8% on-time delivery rate and consistent quality standards.' },
              { icon: '🌍', title: 'Nationwide Coverage', description: 'Complete service coverage across all 50 states with strategically located facilities and partner networks.' },
              { icon: '💯', title: '100% Satisfaction Guarantee', description: 'We stand behind our services with a complete satisfaction guarantee or your money back.' },
              { icon: '📊', title: 'Industry Expertise', description: 'Our team brings decades of pallet industry experience, understanding your unique needs and challenges.' },
              { icon: '🔒', title: 'Fully Licensed & Insured', description: 'Complete compliance with all regulations, fully insured operations for your peace of mind.' },
              { icon: '💰', title: 'Competitive Pricing', description: 'Best value in the industry with transparent pricing, volume discounts, and flexible payment terms.' },
              { icon: '🌱', title: 'Sustainability Focus', description: 'Committed to environmental responsibility with industry-leading recycling and waste reduction programs.' },
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
            Industries We Serve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: '🏭', name: 'Manufacturing', description: 'Production facilities and assembly plants' },
              { icon: '🏬', name: 'Retail & E-commerce', description: 'Distribution centers and fulfillment' },
              { icon: '🚛', name: 'Logistics & Freight', description: 'Transportation and warehousing' },
              { icon: '🌾', name: 'Agriculture & Food', description: 'Food processing and distribution' },
              { icon: '🏗️', name: 'Construction', description: 'Building materials and supplies' },
              { icon: '💊', name: 'Pharmaceutical', description: 'Medical supplies and equipment' },
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

      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary-600"
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '15+', label: 'Years in Business', icon: '📅' },
              { stat: '2M+', label: 'Pallets Processed Annually', icon: '📊' },
              { stat: '50', label: 'States Served', icon: '🗺️' },
              { stat: '5,000+', label: 'Satisfied Clients', icon: '😊' },
              { stat: '99.8%', label: 'On-Time Delivery Rate', icon: '⏰' },
              { stat: '24/7', label: 'Customer Support', icon: '📞' },
              { stat: '95%', label: 'Waste Diverted from Landfills', icon: '♻️' },
              { stat: '100%', label: 'Satisfaction Guarantee', icon: '✓' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl border-2 border-primary-200 soft-shadow"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm font-semibold">{item.label}</p>
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
              { step: '1', title: 'Contact Us', description: 'Reach out via phone, email, or our online form with your requirements. We respond within 2 hours during business hours.' },
              { step: '2', title: 'Get Your Quote', description: 'Receive a detailed, transparent quote based on your specific needs. No hidden fees, just honest pricing.' },
              { step: '3', title: 'Schedule Service', description: 'Choose a convenient time for delivery, pickup, or service. We work around your schedule, not ours.' },
              { step: '4', title: 'Quality Service', description: 'Experience professional service from our trained team. We ensure complete satisfaction on every job.' },
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
            {[
              {
                question: 'What types of pallets do you work with?',
                answer: 'We handle all types of pallets including wooden pallets (GMA, EUR, custom sizes), plastic pallets, metal pallets, and specialty pallets. Whether new, used, or damaged, we have services tailored to every pallet type and condition.'
              },
              {
                question: 'What is your service area?',
                answer: 'We provide comprehensive pallet services across all 50 United States. Our network of facilities and partner locations ensures prompt service delivery regardless of your location. We handle both local and nationwide shipments with the same level of professional service.'
              },
              {
                question: 'How quickly can you respond to service requests?',
                answer: 'We pride ourselves on rapid response times. Quote requests are typically answered within 2 hours during business hours. For urgent needs, we offer same-day and next-day service options in most locations. Emergency services are available 24/7 for critical situations.'
              },
              {
                question: 'Do you offer volume discounts?',
                answer: 'Yes, we offer competitive volume pricing for larger orders and ongoing service agreements. The more pallets you need or the longer the contract, the better the rates we can offer. Contact us for a custom quote based on your specific volume requirements.'
              },
              {
                question: 'Are your services environmentally friendly?',
                answer: 'Absolutely. Environmental responsibility is a core value. We divert over 95% of pallets from landfills through our recycling and refurbishment programs. Our sustainable practices include pallet repair to extend lifecycle, responsible disposal methods, and maximizing material recovery and reuse.'
              },
              {
                question: 'What payment options do you accept?',
                answer: 'We offer flexible payment options including credit cards, ACH transfers, checks, and net payment terms for qualified businesses. For regular clients, we provide various payment plans and billing options to match your procurement cycles and budget requirements.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
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
              Join thousands of satisfied businesses who trust USA Pallet Solution for their pallet needs. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all soft-shadow hover:shadow-lg"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all"
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
