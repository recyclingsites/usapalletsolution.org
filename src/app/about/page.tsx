'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Leading the pallet industry with innovative solutions, sustainable practices, and unwavering commitment to customer success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm productType="About Page Inquiry" />
          </div>
        </div>
      </section>

      {/* Company Story - Extended */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-600">Our Story</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  USA Pallet Solution was founded in 2009 with a simple yet powerful vision: to revolutionize the pallet industry
                  by combining exceptional service, sustainable practices, and innovative solutions. What started as a small family-owned
                  operation with a single warehouse and three employees has grown into one of the nation's most trusted pallet service providers,
                  serving thousands of businesses across all 50 states.
                </p>
                <p>
                  Our founder, recognizing the inefficiencies and environmental impact of traditional pallet disposal practices, pioneered
                  a comprehensive recycling and refurbishment program that has since become an industry standard. This commitment to
                  sustainability wasn't just about doing what's right for the environment—it was about creating real value for our customers
                  by extending pallet lifecycles and reducing costs.
                </p>
                <p>
                  Over the years, we've invested heavily in state-of-the-art facilities, cutting-edge equipment, and most importantly,
                  our people. Today, our team of over 150 dedicated professionals brings together decades of combined experience in pallet
                  manufacturing, logistics, quality control, and customer service. We operate five regional distribution centers strategically
                  located to serve our customers efficiently, maintaining an inventory of over 100,000 pallets at any given time.
                </p>
                <p>
                  Our growth has been driven by one principle: putting customers first. We've never taken shortcuts or compromised on quality.
                  Every pallet we sell, every service we provide, and every interaction we have is guided by our commitment to excellence.
                  This philosophy has earned us the trust of companies ranging from small local businesses to Fortune 500 corporations,
                  and we're honored to play a role in their success.
                </p>
                <p>
                  Looking ahead, we're excited about the future of sustainable logistics and our role in shaping it. We continue to invest
                  in new technologies, expand our service offerings, and find innovative ways to serve our customers better while minimizing
                  our environmental footprint. The pallet industry is evolving, and we're proud to be at the forefront of that evolution.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Journey</h2>
              <div className="space-y-8">
                {[
                  {
                    year: '2009',
                    title: 'Foundation',
                    description: 'Started operations with a single 15,000 sq ft warehouse in the Midwest. Initial focus on buying and selling used pallets in the local market.'
                  },
                  {
                    year: '2011',
                    title: 'Recycling Program Launch',
                    description: 'Introduced our comprehensive pallet recycling and refurbishment program, becoming one of the first in our region to offer systematic remanufacturing services.'
                  },
                  {
                    year: '2013',
                    title: 'Regional Expansion',
                    description: 'Opened second facility on the East Coast. Began serving customers nationwide through strategic partnerships with transportation providers.'
                  },
                  {
                    year: '2015',
                    title: 'Custom Manufacturing',
                    description: 'Launched custom pallet design and manufacturing division to serve specialized industry needs, including pharmaceutical and food-grade applications.'
                  },
                  {
                    year: '2017',
                    title: 'Technology Integration',
                    description: 'Implemented advanced inventory management and tracking systems, enabling real-time visibility for customers and optimizing operations.'
                  },
                  {
                    year: '2019',
                    title: 'Sustainability Milestone',
                    description: 'Diverted our one-millionth pallet from landfills through recycling and refurbishment. Received regional environmental excellence award.'
                  },
                  {
                    year: '2021',
                    title: 'Fleet Modernization',
                    description: 'Invested $2M in fleet expansion and modernization, adding GPS tracking and eco-friendly vehicles to reduce environmental impact and improve delivery times.'
                  },
                  {
                    year: '2023',
                    title: 'National Footprint',
                    description: 'Opened fifth regional distribution center, establishing truly nationwide coverage. Now serving 2,500+ active customers across all industries.'
                  },
                  {
                    year: '2024',
                    title: 'Innovation Center',
                    description: 'Launched R&D facility focused on developing next-generation pallet solutions, including IoT-enabled pallets and advanced composite materials.'
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg soft-shadow">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-xl soft-shadow">
                      <h3 className="text-xl font-bold text-primary-600 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission - Extended */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-secondary-600">Our Mission</h2>
              <div className="bg-white p-8 rounded-2xl border-2 border-secondary-200 soft-shadow-secondary">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To provide exceptional pallet solutions that drive efficiency, sustainability, and value for our customers.
                  We are committed to being the most reliable, innovative, and environmentally responsible pallet service provider
                  in the industry, while fostering long-term partnerships built on trust, quality, and mutual success.
                </p>
                <p className="text-gray-600">
                  We believe that success in business goes hand-in-hand with responsibility to our community and environment.
                  Every decision we make, from sourcing materials to choosing partners, reflects our commitment to sustainable
                  practices and ethical business conduct.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-600">Our Vision</h2>
              <div className="bg-white p-8 rounded-2xl border-2 border-primary-200 soft-shadow">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  To be the industry leader in innovative, sustainable pallet solutions, setting new standards for quality,
                  service, and environmental stewardship. We envision a future where every pallet is tracked, optimized, and
                  recycled to its fullest potential, creating a circular economy that benefits businesses and the planet alike.
                </p>
                <p className="text-gray-600">
                  Through continued investment in technology, people, and infrastructure, we aim to expand our reach while
                  maintaining the personalized service and attention to detail that our customers have come to expect. We're
                  not just building a business—we're building a better way forward for the entire industry.
                </p>
              </div>
            </motion.div>

            {/* Values - Extended */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Quality Without Compromise',
                    description: 'We maintain the highest standards in every pallet we handle, from initial inspection to final delivery. Our multi-point quality control process ensures that you receive products that meet or exceed specifications every single time.',
                    icon: '⭐',
                  },
                  {
                    title: 'Environmental Stewardship',
                    description: 'Sustainability isn\'t a marketing buzzword for us—it\'s fundamental to how we operate. We\'ve diverted over 1.5 million pallets from landfills, saved countless trees through recycling, and continuously seek new ways to reduce our environmental impact.',
                    icon: '🌱',
                  },
                  {
                    title: 'Customer-Centric Approach',
                    description: 'Your success is our success. We take time to understand your unique challenges and requirements, then craft solutions that address your specific needs. Our account managers are empowered to make decisions that benefit you.',
                    icon: '🤝',
                  },
                  {
                    title: 'Reliability You Can Count On',
                    description: 'When we commit to a delivery date, we meet it. When we quote a price, we honor it. When we say we\'ll call back, we do. Our 99.8% on-time delivery rate and customer satisfaction scores speak to our commitment to reliability.',
                    icon: '🎯',
                  },
                  {
                    title: 'Continuous Innovation',
                    description: 'The pallet industry has evolved significantly, and we\'ve been at the forefront of that evolution. From implementing RFID tracking to developing proprietary recycling processes, we continuously seek better ways to serve our customers.',
                    icon: '💡',
                  },
                  {
                    title: 'Integrity in Everything',
                    description: 'Honest communication, fair pricing, ethical practices—these aren\'t optional for us. We conduct business with the highest integrity because it\'s not just the right thing to do, it\'s the foundation of lasting relationships.',
                    icon: '✓',
                  },
                  {
                    title: 'Safety First',
                    description: 'The safety of our team members, customers, and the communities we serve is paramount. We maintain rigorous safety protocols, provide comprehensive training, and never compromise safety for speed or profit.',
                    icon: '🛡️',
                  },
                  {
                    title: 'Community Engagement',
                    description: 'We\'re proud to be part of the communities where we operate. Through local employment, charitable giving, and environmental initiatives, we strive to be good neighbors and responsible corporate citizens.',
                    icon: '🏘️',
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all"
                  >
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="text-xl font-bold text-primary-600 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Extended */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-6 text-gray-800"
          >
            By The Numbers
          </motion.h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our commitment to excellence and sustainability is reflected in these impressive metrics that showcase
            our impact on the industry and the environment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '15+', label: 'Years Experience', description: 'Industry leadership since 2009' },
              { number: '100K+', label: 'Pallets Monthly', description: 'Processed through our facilities' },
              { number: '2,500+', label: 'Happy Clients', description: 'Businesses we serve nationwide' },
              { number: '99.8%', label: 'Satisfaction Rate', description: 'Based on customer surveys' },
              { number: '5', label: 'Distribution Centers', description: 'Coast-to-coast coverage' },
              { number: '150+', label: 'Team Members', description: 'Dedicated professionals' },
              { number: '1.5M', label: 'Recycled Pallets', description: 'Diverted from landfills' },
              { number: '95%', label: 'Waste Reduction', description: 'Through recycling programs' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl soft-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
      {/* Image Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              Our Facilities & Operations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl soft-shadow group"
              >
                <div className="relative h-96">
                  <img src="/images/1.jpg" alt="Warehouse Facility" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Modern Warehouse Facilities</h3>
                    <p className="text-gray-200 text-sm">Over 500,000 sq ft of warehouse space across 8 locations</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl soft-shadow group"
              >
                <div className="relative h-96">
                  <img src="/images/3.jpg" alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Manufacturing</h3>
                    <p className="text-gray-200 text-sm">State-of-the-art equipment for custom pallet production</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl soft-shadow group"
              >
                <div className="relative h-96">
                  <img src="/images/5.jpg" alt="Recycling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Eco-Friendly Recycling</h3>
                    <p className="text-gray-200 text-sm">Comprehensive recycling operations diverting waste from landfills</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl soft-shadow group"
              >
                <div className="relative h-96">
                  <img src="/images/6.jpg" alt="Fleet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Nationwide Fleet</h3>
                    <p className="text-gray-200 text-sm">Modern delivery vehicles ensuring timely service across America</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
              Certifications & Memberships
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Industry Certifications</h3>
                <ul className="space-y-4">
                  {[
                    'ISPM-15 Certified Heat Treatment Facility',
                    'FDA Approved for Food Contact',
                    'ISO 9001:2015 Quality Management',
                    'OSHA Safety Standards Compliant',
                    'EPA Environmental Compliance',
                    'Green Business Certification',
                  ].map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Professional Memberships</h3>
                <ul className="space-y-4">
                  {[
                    'National Wooden Pallet & Container Association (NWPCA)',
                    'Material Handling Industry (MHI)',
                    'Reusable Packaging Association (RPA)',
                    'Chamber of Commerce (Multiple Locations)',
                    'Sustainable Packaging Coalition',
                    'American Pallet Manufacturers Association',
                  ].map((member, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
