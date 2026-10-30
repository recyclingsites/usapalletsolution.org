'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const faqItems = [
    {
      question: 'Can I request pallets anywhere in the US?',
      answer: 'We take requests from across the US. Availability depends on partner suppliers in our network and on your location, so a partner supplier will confirm what can be arranged for your area.',
    },
    {
      question: 'Can I request heat-treated pallets for export?',
      answer: 'Yes. Partner suppliers can quote ISPM 15 pallets where available. ISPM 15 heat treatment means a core temperature of 56 °C for 30 minutes, and treated wood carries the IPPC mark. Rules vary by destination, so check current regulations for the country you ship to.',
    },
    {
      question: 'Can I sell used or surplus pallets?',
      answer: 'Yes. Send the quantity, condition and location, and we pass your request to partner suppliers. Whether they can buy or collect the pallets, and at what price, depends on the supplier and the pallets.',
    },
    {
      question: 'What pallet sizes can I request?',
      answer: 'Common requests include the standard 48x40 GMA pallet, Euro pallets, 1200x1000 mm pallets, half pallets and custom dimensions. Availability depends on partner suppliers.',
    },
    {
      question: 'What happens after I send a request?',
      answer: 'We pass your request to partner suppliers in our network, and a partner supplier follows up with you about pricing, availability and next steps. The quote request is free and carries no obligation.',
    },
  ]

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'USA Pallet Solution',
    url: 'https://usapalletsolution.org',
    description: 'A referral service that passes pallet quote requests to partner suppliers.',
    areaServed: { '@type': 'Country', name: 'United States' },
  }

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
          <img src="/images/back.jpg" alt="Pallets stacked in a warehouse" className="w-full h-full object-cover opacity-50" />
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
              Quotes for Buying, Selling, Recycling, Repair, Pickup and Delivery of Pallets Through Partner Suppliers
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto leading-relaxed">
              USA Pallet Solution is a referral service. Tell us what you need, whether that is pallets to buy,
              pallets to sell or pallets to clear out, and we pass your request to partner suppliers in our network,
              who quote and fulfil the work. We take requests from across the US; availability depends on partner suppliers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/products" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 soft-shadow">
                View Products
              </Link>
              <Link href="/services" className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 soft-shadow-secondary">
                Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white border-2 border-primary-300 hover:border-primary-500 text-primary-600 rounded-xl font-semibold transition-all transform hover:scale-105">
                Request a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free, No-Obligation Quote Request</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Requests From Across the US</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pricing by Quote From Partner Suppliers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800"
          >
            How a Quote Request Works
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We do not stock pallets or run trucks ourselves. We connect your request with partner suppliers
            in our network, and they handle the quote and the work.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { number: '1', label: 'Send Your Request', description: 'Pallet type, quantity, condition and location', icon: '📝' },
              { number: '2', label: 'We Pass It On', description: 'Your request goes to partner suppliers in our network', icon: '🤝' },
              { number: '3', label: 'Get a Follow-Up', description: 'A partner supplier follows up with pricing and availability', icon: '💬' },
              { number: '4', label: 'Decide', description: 'No obligation; go ahead only if the quote suits you', icon: '✅' },
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
                Pallets at Every Stage
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From storage to the back of a truck, here is what the main pallet types and handling
                stages look like, and what to mention in your request.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: '/images/1.jpg',
                  title: 'Wood, Plastic and Metal Pallets',
                  description: 'Wood suits most general use, plastic is easy to wash, and metal suits heavy repeat use. Say which you need.',
                  badge: 'Materials',
                  alt: 'Stacks of wood, plastic and metal pallets outside a warehouse'
                },
                {
                  image: '/images/2.jpg',
                  title: 'Stacked Wood Pallets',
                  description: 'Stacked new or used wood pallets. Mention the size and grade you want so partner suppliers can quote the right ones.',
                  badge: 'Wood Pallets',
                  alt: 'Tall stacks of wood pallets in a warehouse'
                },
                {
                  image: '/images/3.jpg',
                  title: 'Pallets in Use',
                  description: 'Pallets carry goods through racking, forklifts and shipping. Your load and handling method help decide the right type.',
                  badge: 'Warehousing',
                  alt: 'Goods on pallets in a warehouse with racking and a forklift'
                },
                {
                  image: '/images/4.jpg',
                  title: 'Mixed Used Pallets',
                  description: 'Used and surplus pallets often come in mixed types and conditions. Photos and a rough count help with a quote.',
                  badge: 'Used Pallets',
                  alt: 'Mixed wood, plastic and metal pallets in a yard'
                },
                {
                  image: '/images/5.jpg',
                  title: 'Loading for Delivery',
                  description: 'Pallets are often moved by the truckload. Partner suppliers can arrange pickup or delivery where available.',
                  badge: 'Transportation',
                  alt: 'Worker loading wood pallets into a truck'
                },
                {
                  image: '/images/6.jpg',
                  title: 'Large-Volume Storage',
                  description: 'High-volume orders are usually planned ahead. Share your quantity and timing in your request.',
                  badge: 'Volume',
                  alt: 'Large warehouse filled with stacks of pallets'
                },
                {
                  image: '/images/7.jpg',
                  title: 'Sorting and Reuse',
                  description: 'Reusable pallets can be repaired and put back into service. Reusing a pallet avoids building a new one.',
                  badge: 'Reuse',
                  alt: 'Used wood pallets stacked indoors near forklifts'
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
                      alt={item.alt}
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
                Pallet Services Through Partner Suppliers
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From sourcing and delivery to recycling and disposal, one free request covers it. We pass
                what you need to partner suppliers in our network, who quote and carry out the work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Pallet Buying & Selling',
                  description: 'Request new or used pallets, or offer surplus pallets for sale. Partner suppliers quote on the type, quantity, condition and location.',
                  features: ['New and used pallets', 'Surplus pallets for sale', 'Standard and custom sizes', 'Pricing by quote'],
                  icon: '💰',
                  link: '/services/buying'
                },
                {
                  title: 'Custom Pallets',
                  description: 'Need a size or build that is not standard? Send your dimensions and load details and partner suppliers can quote where they are able to build it.',
                  features: ['Non-standard sizes', 'Wood, plastic or metal', 'Load details help', 'Availability varies'],
                  icon: '🏭',
                  link: '/products/custom-pallets'
                },
                {
                  title: 'Pallet Recycling',
                  description: 'Have pallets you no longer need? Partner suppliers can assess them for reuse, repair or recycling. Reusing a pallet avoids building a new one.',
                  features: ['Reuse where possible', 'Repair and refurbishment', 'Material recycling', 'Pickup where available'],
                  icon: '♻️',
                  link: '/services/recycling'
                },
                {
                  title: 'Export & Heat-Treated Pallets',
                  description: 'Shipping abroad? Ask for ISPM 15 heat-treated pallets, which carry the IPPC mark. Check current regulations for your destination country.',
                  features: ['ISPM 15 heat treatment', 'IPPC mark', 'Wood packaging rules vary', 'Confirm with your supplier'],
                  icon: '🌍',
                  link: '/products/export-pallets'
                },
                {
                  title: 'Transportation & Pickup',
                  description: 'Partner suppliers can arrange delivery or pickup. We take requests from across the US; availability depends on partner suppliers.',
                  features: ['Delivery where available', 'Pickup where available', 'Truckload or smaller lots', 'Timing set with your supplier'],
                  icon: '🚚',
                  link: '/services/transportation'
                },
                {
                  title: 'Pallet Repair & Disposal',
                  description: 'Damaged or unwanted pallets can be quoted for repair or disposal through partner suppliers, depending on condition and location.',
                  features: ['Repair of damaged pallets', 'Removal of unwanted pallets', 'Mixed lots considered', 'Pricing by quote'],
                  icon: '🔧',
                  link: '/services/repair'
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
                Pallet Options by Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Different industries ask for different pallets. Here is what buyers in each sector commonly
                ask about, so you can include the right details in your request.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  industry: 'Food & Beverage',
                  description: 'Many food and drink operations look at hygiene, moisture and fit. Tell partner suppliers your requirements and confirm any standards with them.',
                  solutions: ['Plastic pallets for easy washing', 'Heat-treated wood options', 'Custom sizing for products', 'Check your own food-safety rules'],
                  icon: '🍎'
                },
                {
                  industry: 'Automotive Manufacturing',
                  description: 'Parts and assemblies can be heavy or awkward, so durable builds and custom sizes are common requests.',
                  solutions: ['Heavier-duty builds', 'Custom configurations', 'Metal pallet options', 'Repeat-use designs'],
                  icon: '🚗'
                },
                {
                  industry: 'Retail & E-commerce',
                  description: 'Retail distribution often calls for standard GMA sizes and consistent quality in volume.',
                  solutions: ['Standard 48x40 GMA pallets', 'Consistent grades', 'Volume requests', 'Surplus pallet sales'],
                  icon: '🛒'
                },
                {
                  industry: 'Export & International',
                  description: 'Wood pallets shipped abroad generally need ISPM 15 treatment. Rules vary, so check current regulations for your destination.',
                  solutions: ['ISPM 15 heat treatment', 'IPPC mark', 'Plastic or metal alternatives', 'Destination rules vary'],
                  icon: '🌍'
                },
                {
                  industry: 'Agriculture & Produce',
                  description: 'Farm and produce loads often face moisture and outdoor handling, so airflow and durability matter.',
                  solutions: ['Open deck designs', 'Moisture-resistant materials', 'Common produce sizes', 'Seasonal requests'],
                  icon: '🌾'
                },
                {
                  industry: 'Construction & Building Materials',
                  description: 'Building materials are heavy and often stored outdoors, so sturdy builds and custom sizes are common requests.',
                  solutions: ['Heavier-duty builds', 'Outdoor handling', 'Custom dimensions', 'Irregular loads'],
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
                    <p className="text-sm font-semibold text-gray-700 mb-3">Common Requests:</p>
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
              Send a Free, No-Obligation Quote Request
            </h2>
            <p className="text-center text-gray-600 mb-4 text-lg">
              Fill out the form below and we will pass your request to partner suppliers in our network
            </p>
            <p className="text-center text-gray-500 mb-12">
              Whether you need a few pallets or a truckload, or have pallets to sell or clear out, include
              the type, quantity and location. A partner supplier follows up with pricing and availability.
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
              Pallet Types You Can Request
            </motion.h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
              From standard wood pallets to custom builds, these are the main types partner suppliers
              can quote. Availability depends on your location and the supplier.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Wooden Pallets',
                  description: 'Standard wood pallets, new or used. The usual choice for general shipping and storage, and they can be heat treated for export.',
                  specs: ['48x40 GMA and other sizes', '2-way and 4-way entry', 'New or used', 'Heat treatment on request'],
                  icon: '🪵'
                },
                {
                  title: 'Plastic Pallets',
                  description: 'Lighter handling and easy washing, with no moisture absorption. Often cost more up front than wood.',
                  specs: ['Rackable designs', 'Nestable options', 'Easy to clean', 'Good for closed-loop use'],
                  icon: '🔷'
                },
                {
                  title: 'Metal Pallets',
                  description: 'Steel and aluminum pallets for heavy loads and repeated use. Usually the most expensive option.',
                  specs: ['Heavier loads (confirm with supplier)', 'Does not absorb moisture', 'Suits repeated use', 'Steel or aluminum'],
                  icon: '⚙️'
                },
                {
                  title: 'Custom Pallets',
                  description: 'Pallets built to your dimensions where a partner supplier can make them. Share your load and handling details.',
                  specs: ['Non-standard dimensions', 'Choice of materials', 'Load details help', 'Availability varies'],
                  icon: '🎨'
                },
                {
                  title: 'Export Pallets',
                  description: 'ISPM 15 heat-treated wood pallets for international shipping, marked with the IPPC mark. Check current regulations for your destination.',
                  specs: ['ISPM 15 heat treatment', '56 °C core for 30 minutes', 'IPPC mark', 'Destination rules vary'],
                  icon: '📦'
                },
                {
                  title: 'Pallet Accessories',
                  description: 'Related items such as collars, corner protectors, strapping, covers and slip sheets, where partner suppliers carry them.',
                  specs: ['Pallet collars', 'Protection materials', 'Securing supplies', 'Availability varies'],
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
              Why Use USA Pallet Solution
            </motion.h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
              A single request saves you hunting for a pallet supplier yourself. Here is what you
              get, and what to expect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: 'One Request, Partner Suppliers',
                  description: 'Instead of searching for suppliers one by one, send one request. We pass it to partner suppliers in our network who may be able to help.',
                  benefits: [
                    'One form to fill out',
                    'Buying or selling',
                    'New, used or custom',
                    'Partner suppliers follow up',
                    'Free to ask'
                  ],
                  icon: '📦'
                },
                {
                  title: 'Requests From Across the US',
                  description: 'We take requests from across the US. Availability depends on partner suppliers and on your location.',
                  benefits: [
                    'Requests from any US state',
                    'Delivery where available',
                    'Pickup where available',
                    'Timing set with your supplier',
                    'Your location helps matching'
                  ],
                  icon: '🚚'
                },
                {
                  title: 'Pricing by Quote',
                  description: 'Pallet prices depend on type, grade, quantity, location and the market, so there is no price list here. Partner suppliers quote your actual request.',
                  benefits: [
                    'Quote from partner suppliers',
                    'Based on your request',
                    'Free, no-obligation request',
                    'Compare before you commit',
                    'Terms set by the supplier'
                  ],
                  icon: '💰'
                },
                {
                  title: 'Clear Pallet Information',
                  description: 'Our guides explain sizes, grades and materials in plain language, so you can ask for what you need. Confirm the details with your supplier.',
                  benefits: [
                    'Size guide',
                    'Common grade descriptions',
                    'Wood, plastic and metal compared',
                    'ISPM 15 basics',
                    'Plain language'
                  ],
                  icon: '✓'
                },
                {
                  title: 'Reuse and Recycling',
                  description: 'Reusing a pallet avoids building a new one, and a damaged pallet can often be repaired. Partner suppliers can advise on what can be reused.',
                  benefits: [
                    'Used pallets to reuse',
                    'Repair where practical',
                    'Recycling of worn pallets',
                    'Surplus pallet sales',
                    'Disposal when needed'
                  ],
                  icon: '♻️'
                },
                {
                  title: 'Simple to Reach',
                  description: 'The form is the main way to reach us. For anything else, email info@usapalletsolution.org.',
                  benefits: [
                    'Quote request form',
                    'Email for general questions',
                    'No account needed',
                    'No obligation',
                    'Partner suppliers follow up'
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
              Ready to Send Your Request?
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Send a free, no-obligation quote request for your pallet needs
            </p>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              Whether you run a small business or a large operation, the process is the same: tell us what
              you need, and we pass your request to partner suppliers in our network. A partner supplier
              follows up with pricing and availability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary-600 hover:text-primary-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-all"
              >
                How the Service Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  )
}
