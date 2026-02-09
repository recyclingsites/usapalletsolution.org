'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Contact USA Pallet Solution</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Get in touch with our expert team for quotes, questions, or comprehensive pallet solutions. We're here to help your business succeed with prompt, professional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact-form" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Get a Free Quote
              </a>
              <a href="#office-locations" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                Find Our Offices
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Multiple Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Multiple Ways to Reach Us
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our dedicated team is ready to assist with all your pallet needs, from quick questions to complex logistics solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Email Support',
                  icon: '📧',
                  primary: 'info@usapalletsolution.org',
                  secondary: 'sales@usapalletsolution.org',
                  description: 'Email us anytime, day or night',
                  responseTime: 'Response within 2 hours during business hours',
                  color: 'primary',
                },
                {
                  title: 'Phone Support',
                  icon: '📞',
                  primary: '1-800-PALLET-1',
                  secondary: '(555) 123-4567',
                  description: 'Speak directly with our team',
                  responseTime: 'Immediate assistance during business hours',
                  color: 'secondary',
                },
                {
                  title: 'Live Chat',
                  icon: '💬',
                  primary: 'Available on website',
                  secondary: 'Mon-Fri: 8 AM - 8 PM ET',
                  description: 'Instant messaging support',
                  responseTime: 'Average response time: 2 minutes',
                  color: 'primary',
                },
                {
                  title: 'Emergency Hotline',
                  icon: '🚨',
                  primary: '1-800-URGENT-P',
                  secondary: '24/7 Emergency Service',
                  description: 'For urgent pallet needs',
                  responseTime: 'Immediate response guaranteed',
                  color: 'secondary',
                },
                {
                  title: 'Text Message',
                  icon: '📱',
                  primary: '(555) 987-6543',
                  secondary: 'SMS & WhatsApp',
                  description: 'Text for quick questions',
                  responseTime: 'Response within 15 minutes',
                  color: 'primary',
                },
                {
                  title: 'Fax',
                  icon: '📠',
                  primary: '(555) 123-4568',
                  secondary: 'For purchase orders',
                  description: 'Send detailed specifications',
                  responseTime: 'Processed same business day',
                  color: 'secondary',
                },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl soft-shadow hover:soft-shadow-hover transition-all border border-gray-100"
                >
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className={`text-2xl font-bold ${method.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'} mb-3`}>
                    {method.title}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-1">{method.primary}</p>
                  <p className="text-gray-600 text-sm mb-3">{method.secondary}</p>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium">{method.responseTime}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 2 hours during business hours. For immediate assistance, please call our hotline.
              </p>
            </motion.div>
            <ContactForm productType="Contact Page Inquiry" />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="office-locations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Our Office Locations
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Visit us at any of our strategically located offices across the United States. Each location is staffed with knowledgeable professionals ready to serve your pallet needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  name: 'Corporate Headquarters',
                  region: 'Northeast',
                  address: '1500 Pallet Boulevard',
                  city: 'Newark, NJ 07102',
                  phone: '(973) 555-0100',
                  fax: '(973) 555-0101',
                  email: 'northeast@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 7:00 AM - 7:00 PM ET',
                    saturday: 'Saturday: 8:00 AM - 4:00 PM ET',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Used Pallets', 'Custom Manufacturing', 'Recycling', 'Repair Services'],
                  manager: 'John Mitchell, Regional Director',
                },
                {
                  name: 'Southeast Distribution Center',
                  region: 'Southeast',
                  address: '2800 Logistics Parkway',
                  city: 'Atlanta, GA 30303',
                  phone: '(404) 555-0200',
                  fax: '(404) 555-0201',
                  email: 'southeast@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 7:00 AM - 7:00 PM ET',
                    saturday: 'Saturday: 8:00 AM - 4:00 PM ET',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Used Pallets', 'Heat Treatment', 'ISPM 15 Certification', 'Same-Day Delivery'],
                  manager: 'Sarah Johnson, Regional Director',
                },
                {
                  name: 'Midwest Operations Center',
                  region: 'Midwest',
                  address: '4200 Industrial Drive',
                  city: 'Chicago, IL 60601',
                  phone: '(312) 555-0300',
                  fax: '(312) 555-0301',
                  email: 'midwest@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 6:00 AM - 6:00 PM CT',
                    saturday: 'Saturday: 8:00 AM - 2:00 PM CT',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Plastic Pallets', 'Custom Solutions', 'Pallet Management', 'Recycling'],
                  manager: 'Michael Rodriguez, Regional Director',
                },
                {
                  name: 'Southwest Regional Hub',
                  region: 'Southwest',
                  address: '3600 Commerce Center',
                  city: 'Dallas, TX 75201',
                  phone: '(214) 555-0400',
                  fax: '(214) 555-0401',
                  email: 'southwest@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 7:00 AM - 7:00 PM CT',
                    saturday: 'Saturday: 8:00 AM - 3:00 PM CT',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Used Pallets', 'Export Pallets', 'Heat Treatment', 'Bulk Orders'],
                  manager: 'Maria Garcia, Regional Director',
                },
                {
                  name: 'West Coast Facility',
                  region: 'West',
                  address: '5100 Pacific Port Road',
                  city: 'Los Angeles, CA 90021',
                  phone: '(213) 555-0500',
                  fax: '(213) 555-0501',
                  email: 'westcoast@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 6:00 AM - 6:00 PM PT',
                    saturday: 'Saturday: 7:00 AM - 3:00 PM PT',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Export Solutions', 'ISPM 15 Certified', 'Container Loading', 'Recycling'],
                  manager: 'David Chen, Regional Director',
                },
                {
                  name: 'Pacific Northwest Center',
                  region: 'Northwest',
                  address: '1900 Harbor Avenue',
                  city: 'Seattle, WA 98101',
                  phone: '(206) 555-0600',
                  fax: '(206) 555-0601',
                  email: 'northwest@usapalletsolution.org',
                  hours: {
                    weekday: 'Monday - Friday: 7:00 AM - 6:00 PM PT',
                    saturday: 'Saturday: 8:00 AM - 2:00 PM PT',
                    sunday: 'Sunday: Closed',
                  },
                  services: ['New Pallets', 'Sustainable Options', 'Custom Manufacturing', 'Repair', 'Recycling'],
                  manager: 'Jennifer Thompson, Regional Director',
                },
              ].map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-8 rounded-2xl soft-shadow border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">{office.name}</h3>
                      <span className="inline-block px-3 py-1 bg-secondary-500 text-white rounded-full text-xs font-semibold">
                        {office.region} Region
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-primary-500 mr-3">📍</span>
                      <div>
                        <p className="text-gray-800 font-semibold">{office.address}</p>
                        <p className="text-gray-600">{office.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="text-primary-500 mr-3">📞</span>
                      <div>
                        <p className="text-gray-800">{office.phone}</p>
                        <p className="text-gray-500 text-sm">Fax: {office.fax}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="text-primary-500 mr-3">📧</span>
                      <a href={`mailto:${office.email}`} className="text-secondary-600 hover:text-secondary-700">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">Business Hours:</h4>
                    <p className="text-gray-600 text-sm">{office.hours.weekday}</p>
                    <p className="text-gray-600 text-sm">{office.hours.saturday}</p>
                    <p className="text-gray-600 text-sm">{office.hours.sunday}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Contact:</span> {office.manager}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
              <p className="text-lg mb-6 opacity-90">
                We serve all 50 states through our network of partners and carriers. Contact us to discuss service in your area.
              </p>
              <Link href="/locations" className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                View All Service Areas
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Meet Our Leadership Team
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in logistics, manufacturing, and customer service to ensure you receive the best pallet solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Robert Anderson',
                  role: 'Chief Executive Officer',
                  bio: '25+ years in logistics',
                  contact: 'randerson@usapalletsolution.org',
                },
                {
                  name: 'Emily Thompson',
                  role: 'VP of Operations',
                  bio: 'Expert in supply chain optimization',
                  contact: 'ethompson@usapalletsolution.org',
                },
                {
                  name: 'James Wilson',
                  role: 'VP of Sales',
                  bio: '15+ years in B2B sales',
                  contact: 'jwilson@usapalletsolution.org',
                },
                {
                  name: 'Lisa Martinez',
                  role: 'Customer Success Director',
                  bio: 'Dedicated to client satisfaction',
                  contact: 'lmartinez@usapalletsolution.org',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl soft-shadow text-center border border-gray-200"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-secondary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <a href={`mailto:${member.contact}`} className="text-primary-600 text-sm hover:text-primary-700">
                    {member.contact}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Our Response Time Guarantees
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              We understand that time is critical in logistics. That's why we guarantee specific response times for all inquiries, ensuring you're never left waiting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: 'Emergency Requests',
                  time: 'Immediate',
                  description: '24/7 emergency hotline with instant human response',
                  icon: '🚨',
                },
                {
                  type: 'Phone Inquiries',
                  time: 'Same Call',
                  description: 'Answered within 3 rings during business hours',
                  icon: '📞',
                },
                {
                  type: 'Email Messages',
                  time: '2 Hours',
                  description: 'Guaranteed response within 2 business hours',
                  icon: '📧',
                },
                {
                  type: 'Quote Requests',
                  time: '1 Hour',
                  description: 'Detailed quotes delivered within 60 minutes',
                  icon: '💼',
                },
                {
                  type: 'Live Chat',
                  time: '2 Minutes',
                  description: 'Average wait time under 2 minutes',
                  icon: '💬',
                },
                {
                  type: 'Text Messages',
                  time: '15 Minutes',
                  description: 'SMS responses within a quarter hour',
                  icon: '📱',
                },
                {
                  type: 'Callback Requests',
                  time: '30 Minutes',
                  description: 'Scheduled callbacks or sooner if available',
                  icon: '📲',
                },
                {
                  type: 'After Hours',
                  time: 'Next Day',
                  description: 'All after-hours messages answered by 9 AM next business day',
                  icon: '🌙',
                },
              ].map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl soft-shadow border border-primary-200"
                >
                  <div className="text-4xl mb-3">{guarantee.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{guarantee.type}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{guarantee.time}</div>
                  <p className="text-gray-600 text-sm">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              What to Expect When You Contact Us
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              We've streamlined our process to ensure you get the help you need quickly and efficiently. Here's what happens when you reach out.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">For Sales Inquiries:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Initial Contact</h4>
                      <p className="text-gray-600 text-sm">We acknowledge your inquiry immediately and assign a dedicated sales representative</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Needs Assessment</h4>
                      <p className="text-gray-600 text-sm">We discuss your specific requirements, volume needs, and delivery timeline</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Custom Quote</h4>
                      <p className="text-gray-600 text-sm">Receive a detailed quote within 1 hour, including pricing, specifications, and delivery options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Consultation</h4>
                      <p className="text-gray-600 text-sm">Optional call to review quote, discuss alternatives, and answer any questions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Order Processing</h4>
                      <p className="text-gray-600 text-sm">Once approved, we process your order and schedule delivery or pickup</p>
                    </div>
                  </li>
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">For Support Requests:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Immediate Acknowledgment</h4>
                      <p className="text-gray-600 text-sm">Automatic confirmation and ticket number assigned to track your request</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Issue Assessment</h4>
                      <p className="text-gray-600 text-sm">Support specialist reviews your issue and gathers necessary information</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Resolution Plan</h4>
                      <p className="text-gray-600 text-sm">We provide a clear timeline and steps to resolve your issue</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Implementation</h4>
                      <p className="text-gray-600 text-sm">Our team works to resolve your issue with regular status updates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Follow-Up</h4>
                      <p className="text-gray-600 text-sm">Confirmation call to ensure complete satisfaction and prevent future issues</p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours by Time Zone */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Business Hours by Time Zone
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              No matter where you're located in the United States, we have convenient hours to serve you. Our offices operate across all time zones to ensure you can reach us when you need us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  zone: 'Eastern Time',
                  weekday: '7:00 AM - 8:00 PM',
                  saturday: '8:00 AM - 4:00 PM',
                  sunday: 'Closed',
                  regions: 'NY, NJ, FL, GA, NC',
                },
                {
                  zone: 'Central Time',
                  weekday: '6:00 AM - 7:00 PM',
                  saturday: '8:00 AM - 3:00 PM',
                  sunday: 'Closed',
                  regions: 'TX, IL, MO, LA, MN',
                },
                {
                  zone: 'Mountain Time',
                  weekday: '7:00 AM - 6:00 PM',
                  saturday: '8:00 AM - 2:00 PM',
                  sunday: 'Closed',
                  regions: 'CO, AZ, UT, NM',
                },
                {
                  zone: 'Pacific Time',
                  weekday: '6:00 AM - 7:00 PM',
                  saturday: '7:00 AM - 3:00 PM',
                  sunday: 'Closed',
                  regions: 'CA, WA, OR, NV',
                },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl soft-shadow border border-primary-200"
                >
                  <h3 className="text-xl font-bold text-primary-600 mb-4">{zone.zone}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm font-semibold">Weekdays:</span>
                      <span className="text-gray-800 text-sm">{zone.weekday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm font-semibold">Saturday:</span>
                      <span className="text-gray-800 text-sm">{zone.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm font-semibold">Sunday:</span>
                      <span className="text-gray-800 text-sm">{zone.sunday}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-primary-200">
                    <p className="text-xs text-gray-500">Serving: {zone.regions}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-secondary-500 to-primary-500 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Need Help Outside Business Hours?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our 24/7 emergency hotline is always available for urgent pallet needs. Call 1-800-URGENT-P anytime, day or night.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Info */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Emergency & After-Hours Support
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Logistics doesn't stop at 5 PM, and neither do we. Our emergency support team is available 24/7/365 to handle urgent situations and time-sensitive requests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: '24/7 Emergency Hotline',
                  phone: '1-800-URGENT-P',
                  description: 'For immediate pallet needs, delivery issues, or critical situations',
                  features: ['Instant human response', 'No automated systems', 'Decision makers on call', 'Same-day solutions'],
                },
                {
                  title: 'Weekend Support',
                  phone: '(555) 123-4567',
                  description: 'Saturday and Sunday support for scheduled operations',
                  features: ['Saturday: 8 AM - 4 PM', 'Sunday: Emergency only', 'Advance scheduling available', 'Extended hours by request'],
                },
                {
                  title: 'Holiday Coverage',
                  phone: '1-800-URGENT-P',
                  description: 'We work when you work, including major holidays',
                  features: ['All major holidays covered', 'Premium holiday rates', '24-hour advance notice preferred', 'Emergency service guaranteed'],
                },
              ].map((emergency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl soft-shadow border border-secondary-200"
                >
                  <h3 className="text-2xl font-bold text-secondary-600 mb-3">{emergency.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">{emergency.phone}</div>
                  <p className="text-gray-600 mb-4">{emergency.description}</p>
                  <ul className="space-y-2">
                    {emergency.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="text-secondary-500 mr-2">✓</span>
                        {feature}
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
              className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What Qualifies as an Emergency?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary-600 mb-3">Emergency Situations:</h4>
                  <ul className="space-y-2">
                    {[
                      'Production line stopped due to pallet shortage',
                      'Urgent shipment needs immediate pallets',
                      'Damaged delivery requiring replacement',
                      'Last-minute export requirements',
                      'Safety hazard from defective pallets',
                      'Time-sensitive compliance issues',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-red-500 mr-2 mt-1">🚨</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-600 mb-3">Non-Emergency (Use Standard Channels):</h4>
                  <ul className="space-y-2">
                    {[
                      'General price inquiries',
                      'Future order planning',
                      'Product information requests',
                      'Routine reorders with flexible timing',
                      'Account management questions',
                      'Marketing and partnership inquiries',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-blue-500 mr-2 mt-1">ℹ️</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs About Contacting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Frequently Asked Questions About Contacting Us
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              Common questions about our communication processes, response times, and how to get the help you need.
            </p>

            <div className="space-y-6">
              {[
                {
                  question: 'What\'s the fastest way to get a quote?',
                  answer: 'Call our sales line at 1-800-PALLET-1 during business hours for immediate quote generation. You can also use our online form and receive a detailed quote within 1 hour. For standard requests, email works great with a 2-hour response guarantee.',
                },
                {
                  question: 'Can I email outside business hours?',
                  answer: 'Absolutely! Our email system accepts messages 24/7. All messages received after hours will be answered by 9 AM the next business day. For urgent needs outside business hours, please call our emergency hotline.',
                },
                {
                  question: 'Do you charge for consultations?',
                  answer: 'No, all consultations, quotes, and planning sessions are completely free. Whether you need help selecting the right pallet type, optimizing your supply chain, or designing custom solutions, our expert consultations are always complimentary.',
                },
                {
                  question: 'How do I track my order status?',
                  answer: 'Contact your dedicated sales representative directly via phone or email using the contact information provided in your order confirmation. You can also call our main line and reference your order number for immediate status updates.',
                },
                {
                  question: 'What if I need to speak with someone in person?',
                  answer: 'All of our offices welcome walk-in visits during business hours. However, we recommend calling ahead to schedule an appointment with a specialist to ensure they\'re available and prepared to address your specific needs.',
                },
                {
                  question: 'Can I request a specific sales representative?',
                  answer: 'Yes! If you\'ve worked with one of our team members before and would like to continue that relationship, simply mention their name when you contact us, and we\'ll route you to them or their team.',
                },
                {
                  question: 'How long does it take to get a response via live chat?',
                  answer: 'Our average live chat response time is under 2 minutes during business hours. The chat is handled by real people, not bots, ensuring you get accurate, helpful information immediately.',
                },
                {
                  question: 'Do you offer video consultations?',
                  answer: 'Yes! We offer video consultations via Zoom, Microsoft Teams, or Google Meet for customers who prefer face-to-face discussions. Schedule a video call by contacting any of our offices.',
                },
                {
                  question: 'What information should I have ready when I call?',
                  answer: 'Having the following information ready helps us serve you faster: desired pallet type and quantity, delivery location and timeline, any special requirements (ISPM 15, custom sizes, etc.), and your budget range if applicable.',
                },
                {
                  question: 'Can I get technical support for pallet-related issues?',
                  answer: 'Yes, our technical support team can help with issues like load optimization, pallet damage assessment, compliance questions, warehouse racking compatibility, and more. Call our main line and ask for technical support.',
                },
                {
                  question: 'Do you have multilingual support?',
                  answer: 'Yes, we offer support in Spanish, Mandarin, and French in addition to English. Let us know your language preference when you contact us, and we\'ll connect you with a fluent representative.',
                },
                {
                  question: 'How do I file a complaint or provide feedback?',
                  answer: 'We take all feedback seriously. Contact our Customer Success Director directly at lmartinez@usapalletsolution.org or call (555) 123-4570. All complaints are reviewed by management within 24 hours.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-primary-600 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Directions Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Visit Our Facilities
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              See our operations firsthand. We welcome customers to visit our facilities to inspect pallets, discuss custom solutions, and meet our team in person.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-4">Getting Directions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">By Car:</h4>
                    <p className="text-gray-600 text-sm mb-2">All our facilities are located near major highways with ample truck and car parking. Use our addresses with your GPS or mapping app for turn-by-turn directions.</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Free parking available at all locations</li>
                      <li>Truck-friendly access and turning radius</li>
                      <li>Clearly marked signage from main roads</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">By Public Transit:</h4>
                    <p className="text-gray-600 text-sm mb-2">Most of our urban locations are accessible via public transportation. Contact the specific office for detailed transit directions.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">For Deliveries:</h4>
                    <p className="text-gray-600 text-sm">Loading docks are available at all facilities. Please call ahead to schedule delivery appointments to ensure efficient unloading.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-4">Visitor Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">What to Bring:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Photo ID for facility access</li>
                      <li>Specific requirements or specifications</li>
                      <li>Sample products for fit testing (if applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Safety Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Closed-toe shoes required in warehouse areas</li>
                      <li>Safety vests provided for facility tours</li>
                      <li>Hard hats available if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Scheduling Your Visit:</h4>
                    <p className="text-gray-600 text-sm">While walk-ins are welcome, scheduling ensures we have the right specialist available. Call or email any location to schedule your visit.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl soft-shadow border border-gray-200 p-12"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🗺️</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Interactive Location Map</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Our facilities are strategically located across the United States to serve you better. View our complete network of distribution centers and offices.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/locations" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-bold transition-all transform hover:scale-105">
                    View All Locations
                  </Link>
                  <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-bold border-2 border-primary-600 transition-all hover:bg-primary-50">
                    Download Locations PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Contact us today for expert pallet solutions, competitive pricing, and exceptional service. Our team is standing by to help your business succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="#contact-form" className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                  Request a Quote
                </a>
                <a href="tel:1-800-725-5381" className="px-10 py-4 bg-transparent text-white rounded-xl font-bold text-lg border-2 border-white transition-all hover:bg-white/10">
                  Call Now: 1-800-PALLET-1
                </a>
              </div>
              <p className="text-lg opacity-75">
                Or email us at <a href="mailto:info@usapalletsolution.org" className="underline hover:opacity-100">info@usapalletsolution.org</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
