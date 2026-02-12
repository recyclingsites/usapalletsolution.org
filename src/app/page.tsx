'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const faqItems = [
    {
      question: 'Do you deliver pallets nationwide?',
      answer: 'Yes, we serve all 50 states with regional yards and carrier partners to provide fast pallet delivery or pickup wherever you operate.',
    },
    {
      question: 'Can you supply heat-treated pallets for export?',
      answer: 'We provide ISPM 15 heat-treated pallets, proper stamping, and documentation so your international shipments clear customs smoothly.',
    },
    {
      question: 'Do you buy back used or surplus pallets?',
      answer: 'Absolutely. We pay competitive rates for surplus pallets, schedule pickups, and recycle or repair them to extend their life cycle.',
    },
    {
      question: 'What pallet sizes are available?',
      answer: 'Standard 48x40 GMA, Euro sizes, 1200x1000, half pallets, and custom dimensions engineered to your load plan are available.',
    },
    {
      question: 'How quickly can I get a quote?',
      answer: 'During business hours we respond within two hours with transparent pricing and timelines tailored to your volume and location.',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0">
          <img src="/images/back.jpg" alt="Warehouse" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-50/70 via-light-50/60 to-primary-50/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gray-800">USA Pallet</span>
              <span className="block text-primary-600">Solution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
              America's Leading Provider of Comprehensive Pallet Solutions - Buying, Selling, Recycling, Manufacturing & Nationwide Transportation Services
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto leading-relaxed">
              Since 2009, USA Pallet Solution has been the trusted partner for businesses across all 50 states,
              providing exceptional pallet services backed by industry expertise, sustainable practices, and an
              unwavering commitment to customer success. With 8 strategically located distribution centers,
              over 150 dedicated team members, and an inventory exceeding 100,000 pallets, we have the capacity
              and expertise to handle projects of any scale - from small local businesses to Fortune 500 corporations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/products" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 soft-shadow">
                View Products
              </Link>
              <Link href="/services" className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 soft-shadow-secondary">
                Our Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white border-2 border-primary-300 hover:border-primary-500 text-primary-600 rounded-xl font-semibold transition-all transform hover:scale-105">
                Get Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Same-Day Delivery Available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>All 50 States Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-500 text-sm mb-8">Trusted by Leading Companies Across America</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {['Fortune 500 Companies', 'Small Businesses', 'Manufacturing', 'Distribution Centers', 'Retail Chains'].map((trust, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-400 font-semibold text-sm">{trust}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
          >
            Proven Excellence in Pallet Solutions
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Our track record speaks for itself. These numbers represent years of dedication to providing
            exceptional pallet services, sustainable practices, and unwavering customer commitment across
            the entire United States.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { number: '15+', label: 'Years in Business', description: 'Industry leadership since 2009', icon: '📅' },
              { number: '100K+', label: 'Pallets Monthly', description: 'Processed through our facilities', icon: '📦' },
              { number: '2,500+', label: 'Business Partners', description: 'Companies we serve nationwide', icon: '🤝' },
              { number: '99.8%', label: 'Satisfaction Rate', description: 'Based on customer surveys', icon: '⭐' },
              { number: '8', label: 'Distribution Centers', description: 'Coast-to-coast coverage', icon: '🏭' },
              { number: '150+', label: 'Team Members', description: 'Dedicated professionals', icon: '👥' },
              { number: '1.5M', label: 'Recycled Pallets', description: 'Diverted from landfills', icon: '♻️' },
              { number: '95%', label: 'Waste Reduction', description: 'Through recycling programs', icon: '🌱' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl soft-shadow text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                See Our Operations in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Take a look at our state-of-the-art facilities, extensive inventory, and professional operations.
                From warehouse to delivery, we maintain the highest standards at every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: '/images/1.jpg',
                  title: 'Extensive Warehouse Inventory',
                  description: 'Our warehouses stock over 100,000 pallets in various sizes and materials, ensuring immediate availability for your needs.',
                  badge: 'Facilities'
                },
                {
                  image: '/images/2.jpg',
                  title: 'Quality Inspection Process',
                  description: 'Every pallet undergoes rigorous multi-point inspection to ensure it meets our strict quality standards and your specifications.',
                  badge: 'Quality Control'
                },
                {
                  image: '/images/3.jpg',
                  title: 'Custom Manufacturing',
                  description: 'State-of-the-art manufacturing equipment allows us to produce custom pallets to your exact specifications with precision.',
                  badge: 'Manufacturing'
                },
                {
                  image: '/images/4.jpg',
                  title: 'Professional Team',
                  description: 'Our experienced team of over 150 professionals brings decades of combined expertise to serve you better.',
                  badge: 'Our Team'
                },
                {
                  image: '/images/5.jpg',
                  title: 'Recycling Operations',
                  description: 'Advanced recycling facility where we process and refurbish thousands of pallets, keeping them out of landfills.',
                  badge: 'Sustainability'
                },
                {
                  image: '/images/6.jpg',
                  title: 'Nationwide Delivery Fleet',
                  description: 'Modern fleet and logistics network ensure fast, reliable delivery to any location across all 50 states.',
                  badge: 'Transportation'
                },
                {
                  image: '/images/7.jpg',
                  title: 'Ready for Shipment',
                  description: 'Pallets organized and ready for immediate dispatch. We pride ourselves on fast turnaround times and on-time delivery.',
                  badge: 'Distribution'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl soft-shadow hover:soft-shadow-hover transition-all"
                >
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-primary-600 soft-shadow">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Complete Pallet Lifecycle Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From sourcing and manufacturing to delivery, recycling, and disposal, we handle every aspect
                of your pallet needs. Our comprehensive approach saves you time, reduces costs, and simplifies
                your supply chain operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Pallet Buying & Selling',
                  description: 'We purchase used pallets in any condition and sell a vast inventory of new and refurbished pallets. Our competitive pricing and flexible terms make us the preferred choice for businesses of all sizes.',
                  features: ['Fair market pricing', 'Immediate payment', 'No minimum quantities', 'Free pickup service'],
                  icon: '💰',
                  link: '/services/buying'
                },
                {
                  title: 'Custom Manufacturing',
                  description: 'Our state-of-the-art manufacturing facilities produce custom pallets to your exact specifications. From standard sizes with special features to completely unique designs, we bring your vision to life.',
                  features: ['Any size or configuration', 'Multiple materials', 'Engineering support', 'Prototyping available'],
                  icon: '🏭',
                  link: '/products/custom-pallets'
                },
                {
                  title: 'Pallet Recycling',
                  description: 'Our comprehensive recycling program has diverted over 1.5 million pallets from landfills. We assess, sort, repair, and refurbish pallets to maximize their useful life and minimize environmental impact.',
                  features: ['Eco-friendly disposal', 'Repair & refurbishment', 'Material recovery', 'Sustainability reporting'],
                  icon: '♻️',
                  link: '/services/recycling'
                },
                {
                  title: 'Heat Treatment & Certification',
                  description: 'ISPM-15 compliant heat treatment for international shipping. Our certified facilities ensure your pallets meet all regulatory requirements for export to over 100 countries worldwide.',
                  features: ['ISPM-15 certified', 'Fast turnaround', 'Proper documentation', 'Global compliance'],
                  icon: '🌍',
                  link: '/services'
                },
                {
                  title: 'Transportation & Logistics',
                  description: 'Our extensive carrier network and 8 regional distribution centers enable fast, reliable delivery anywhere in the United States. Same-day service available in major metro areas.',
                  features: ['Nationwide coverage', 'Same-day delivery', 'GPS tracking', 'Scheduled deliveries'],
                  icon: '🚚',
                  link: '/services/transportation'
                },
                {
                  title: 'Pallet Management Programs',
                  description: 'Comprehensive pallet management solutions including inventory tracking, automated reordering, on-site storage, and regular maintenance schedules tailored to your operational needs.',
                  features: ['Inventory management', 'Automated ordering', 'Cost tracking', 'Performance analytics'],
                  icon: '📊',
                  link: '/services'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl soft-shadow hover:soft-shadow-hover transition-all"
                >
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served - Detailed */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Industry-Specific Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We understand that different industries have unique pallet requirements. Our specialized
                solutions are tailored to meet the specific needs, regulations, and standards of your sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: 'Food & Beverage',
                  description: 'FDA-approved materials, heat-treated options, and food-grade pallets meeting all safety standards for the food industry.',
                  solutions: ['Food-grade materials', 'Heat treatment (ISPM-15)', 'Plastic pallets for hygiene', 'Custom sizing for products', 'Fast turnaround times'],
                  icon: '🍎'
                },
                {
                  industry: 'Pharmaceutical & Healthcare',
                  description: 'Clean room compatible pallets, sanitizable materials, and compliance with strict pharmaceutical industry regulations.',
                  solutions: ['Clean room certified', 'Plastic & metal options', 'Sterilization capable', 'Lot tracking available', 'GMP compliant facilities'],
                  icon: '💊'
                },
                {
                  industry: 'Automotive Manufacturing',
                  description: 'Heavy-duty pallets rated for multi-ton loads, custom designs for parts and assemblies, and just-in-time delivery.',
                  solutions: ['Heavy load capacity', 'Custom configurations', 'Steel pallet options', 'JIT delivery', 'Durable construction'],
                  icon: '🚗'
                },
                {
                  industry: 'Retail & E-commerce',
                  description: 'Display-ready pallets, standard GMA sizes for retail distribution, and high-volume fulfillment center solutions.',
                  solutions: ['Standard GMA pallets', 'Display-ready options', 'High volume capacity', 'Fast delivery', 'Buyback programs'],
                  icon: '🛒'
                },
                {
                  industry: 'Export & International',
                  description: 'ISPM-15 certified heat-treated pallets for international shipping, documentation support, and global compliance expertise.',
                  solutions: ['ISPM-15 certified', 'Heat treatment', 'Proper documentation', 'Global compliance', 'Multiple countries served'],
                  icon: '🌍'
                },
                {
                  industry: 'Chemical & Petrochemical',
                  description: 'Chemical-resistant materials, spill containment options, and pallets designed for hazardous material transport.',
                  solutions: ['Chemical resistance', 'Spill containment', 'Heavy-duty construction', 'Safety compliance', 'Specialty materials'],
                  icon: '⚗️'
                },
                {
                  industry: 'Agriculture & Produce',
                  description: 'Ventilated designs for fresh produce, moisture-resistant materials, and sizes optimized for agricultural products.',
                  solutions: ['Ventilated designs', 'Moisture resistant', 'Standard produce sizes', 'Fast turnaround', 'Volume discounts'],
                  icon: '🌾'
                },
                {
                  industry: 'Construction & Building Materials',
                  description: 'Extra-heavy duty pallets for building materials, weather-resistant options, and custom sizes for irregular loads.',
                  solutions: ['Maximum durability', 'Weather resistant', 'Custom dimensions', 'High load capacity', 'Rough handling rated'],
                  icon: '🏗️'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl soft-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{item.industry}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Specialized Solutions:</p>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              Get Your Free Quote Today
            </h2>
            <p className="text-center text-gray-600 mb-4 text-lg">
              Fill out the form below and our team will contact you within 2 hours during business hours
            </p>
            <p className="text-center text-gray-500 mb-12">
              Whether you need 10 pallets or 10,000, have questions about our services, or want to discuss
              a custom solution, we're here to help. Our experienced team will work with you to find the
              perfect pallet solution for your specific needs and budget.
            </p>
            <ContactForm productType="General Inquiry" />
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Extensive Product Selection
            </motion.h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
              From standard wooden pallets to specialized custom solutions, we maintain one of the
              largest and most diverse pallet inventories in the United States.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Wooden Pallets',
                  description: 'Traditional wooden pallets in all standard sizes. Available new or refurbished, heat-treated for export, and built to withstand rigorous handling.',
                  specs: ['GMA standard sizes', '2-way & 4-way entry', 'Load capacity: up to 4,600 lbs', 'Heat treatment available'],
                  icon: '🪵'
                },
                {
                  title: 'Plastic Pallets',
                  description: 'Lightweight, moisture-resistant plastic pallets perfect for clean environments. Ideal for food, pharmaceutical, and chemical industries.',
                  specs: ['Rackable designs', 'Nestable options', 'Easy to sanitize', 'Long service life'],
                  icon: '🔷'
                },
                {
                  title: 'Metal Pallets',
                  description: 'Industrial-strength steel and aluminum pallets for heavy-duty applications. Fire-resistant, pest-proof, and built for extreme conditions.',
                  specs: ['Load capacity: 10,000+ lbs', 'Fire resistant', 'Weather proof', '10+ year lifespan'],
                  icon: '⚙️'
                },
                {
                  title: 'Custom Pallets',
                  description: 'Pallets designed and manufactured to your exact specifications. Any size, material, or feature combination to meet unique requirements.',
                  specs: ['Any dimensions', 'Multiple materials', 'Special features', 'Engineering support'],
                  icon: '🎨'
                },
                {
                  title: 'Export Pallets',
                  description: 'ISPM-15 compliant heat-treated pallets for international shipping. Properly stamped, documented, and ready for global distribution.',
                  specs: ['ISPM-15 certified', 'Proper stamping', 'Documentation included', '100+ countries'],
                  icon: '📦'
                },
                {
                  title: 'Pallet Accessories',
                  description: 'Complete range of pallet-related products including collars, corner protectors, strapping, covers, and slip sheets.',
                  specs: ['Pallet collars', 'Protection materials', 'Securing supplies', 'Custom solutions'],
                  icon: '🔧'
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl soft-shadow hover:soft-shadow-hover transition-all group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-600 group-hover:text-secondary-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-secondary-500 mt-1">•</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Comprehensive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Why Businesses Choose USA Pallet Solution
            </motion.h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
              Our combination of extensive inventory, nationwide reach, local expertise, and customer-first
              approach makes us the preferred pallet partner for thousands of businesses across America.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: 'Unmatched Inventory & Availability',
                  description: 'With over 100,000 pallets in stock across 8 distribution centers, we can fulfill orders of any size immediately. Our sophisticated inventory management system ensures product availability when you need it.',
                  benefits: [
                    '100,000+ pallets always in stock',
                    'All standard sizes readily available',
                    'Custom orders - fast turnaround',
                    'Emergency rush service available',
                    'No minimum order quantities'
                  ],
                  icon: '📦'
                },
                {
                  title: 'Nationwide Delivery Network',
                  description: 'Our strategically located distribution centers and partnerships with regional carriers enable fast, reliable delivery to all 50 states. Same-day service in major metros, next-day for most locations.',
                  benefits: [
                    'Same-day delivery in major cities',
                    'Next-day service in most areas',
                    '2-5 day shipping nationwide',
                    'GPS tracking on all shipments',
                    'Flexible delivery scheduling'
                  ],
                  icon: '🚚'
                },
                {
                  title: 'Competitive Pricing & Value',
                  description: 'Our high-volume operations and efficient processes allow us to offer competitive pricing without compromising on quality. Volume discounts, flexible payment terms, and transparent pricing.',
                  benefits: [
                    'Competitive market pricing',
                    'Volume discount programs',
                    'No hidden fees',
                    'Flexible payment terms',
                    'Price matching available'
                  ],
                  icon: '💰'
                },
                {
                  title: 'Quality Assurance & Standards',
                  description: 'Every pallet undergoes rigorous inspection and quality control. We stand behind our products with warranties and ensure all items meet or exceed industry standards.',
                  benefits: [
                    'Multi-point inspection process',
                    'Load testing & certification',
                    'Quality grading system',
                    'Warranty coverage',
                    'Compliance guaranteed'
                  ],
                  icon: '✓'
                },
                {
                  title: 'Sustainability Leadership',
                  description: 'Environmental responsibility is core to our operations. We\'ve recycled over 1.5 million pallets, maintaining a 95% landfill diversion rate through repair and refurbishment.',
                  benefits: [
                    '1.5M+ pallets recycled',
                    '95% landfill diversion rate',
                    'Comprehensive buyback programs',
                    'Repair & refurbishment services',
                    'Sustainability reporting'
                  ],
                  icon: '♻️'
                },
                {
                  title: 'Expert Customer Support',
                  description: 'Our experienced team averages 8+ years in the pallet industry. Dedicated account managers, 24/7 emergency service, and personalized solutions for your unique needs.',
                  benefits: [
                    'Dedicated account managers',
                    '24/7 emergency service',
                    'Industry expertise',
                    'Personalized solutions',
                    'Fast response times (2-4 hours)'
                  ],
                  icon: '👥'
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl soft-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {reason.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
            {faqItems.map((item) => (
              <div key={item.question} className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-100 soft-shadow">
                <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Experience the USA Pallet Solution Difference?
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Contact us today for a free, no-obligation quote on your pallet needs
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              Join thousands of satisfied customers who trust USA Pallet Solution for their material handling needs.
              Whether you're a small business just starting out or a Fortune 500 company with complex requirements,
              we have the expertise, inventory, and dedication to help you succeed. Let's discuss how we can
              optimize your pallet operations, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary-600 hover:text-primary-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
              >
                Get Free Quote
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-all"
              >
                Learn More About Us
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
