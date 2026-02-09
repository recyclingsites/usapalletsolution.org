'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllStates } from '@/data/locations'

export default function LocationsPage() {
  const states = getAllStates()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Nationwide Pallet Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Coast-to-coast coverage with local expertise. We serve businesses across all 50 states with comprehensive pallet solutions, rapid delivery, and personalized service. From major metropolitan areas to rural locations, we are your trusted pallet partner wherever you operate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#state-selector" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Find Your State
              </a>
              <a href="#coverage-stats" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                View Coverage Map
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Statistics */}
      <section id="coverage-stats" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Our National Network at a Glance
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              With strategic distribution centers and carrier partnerships across the country, we provide unmatched coverage and service reliability.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: '50', label: 'States Served', icon: '🗺️' },
                { number: '12', label: 'Distribution Centers', icon: '🏭' },
                { number: '500+', label: 'Cities Covered', icon: '🌆' },
                { number: '24-48hr', label: 'Average Delivery', icon: '🚚' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow text-center border border-gray-200"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Same-Day Delivery Available in Major Metro Areas</h3>
              <p className="text-lg opacity-90">
                Orders placed before noon can be delivered the same day in cities with local distribution centers. Next-day delivery available in most other locations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Regional Coverage & Distribution Centers
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Our strategically located distribution centers ensure fast delivery and maintain large inventories to serve regional needs efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  region: 'Northeast Region',
                  icon: '🏙️',
                  states: ['New York', 'New Jersey', 'Pennsylvania', 'Massachusetts', 'Connecticut', 'Rhode Island', 'Vermont', 'New Hampshire', 'Maine'],
                  distributionCenters: ['Newark, NJ', 'Philadelphia, PA', 'Boston, MA'],
                  coverage: 'Complete coverage across the Northeast corridor with same-day delivery in major cities',
                  specialties: ['Export pallets for international shipping', 'High-volume retail distribution', 'ISPM 15 certified pallets'],
                },
                {
                  region: 'Southeast Region',
                  icon: '🌴',
                  states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina', 'Virginia', 'Tennessee', 'Alabama', 'Mississippi', 'Louisiana'],
                  distributionCenters: ['Atlanta, GA', 'Jacksonville, FL', 'Charlotte, NC'],
                  coverage: 'Full Southeast coverage with emphasis on port cities and manufacturing hubs',
                  specialties: ['Heat-treated export pallets', 'Food-grade pallets', 'Hurricane-ready emergency inventory'],
                },
                {
                  region: 'Midwest Region',
                  icon: '🌾',
                  states: ['Illinois', 'Indiana', 'Ohio', 'Michigan', 'Wisconsin', 'Minnesota', 'Iowa', 'Missouri', 'Kansas', 'Nebraska'],
                  distributionCenters: ['Chicago, IL', 'Columbus, OH', 'Minneapolis, MN'],
                  coverage: 'Comprehensive Midwest coverage serving manufacturing and agricultural sectors',
                  specialties: ['Automotive industry pallets', 'Heavy-duty industrial pallets', 'Agricultural product pallets'],
                },
                {
                  region: 'Southwest Region',
                  icon: '🌵',
                  states: ['Texas', 'Oklahoma', 'Arkansas', 'New Mexico', 'Arizona'],
                  distributionCenters: ['Dallas, TX', 'Houston, TX', 'Phoenix, AZ'],
                  coverage: 'Southwest network optimized for oil & gas, manufacturing, and cross-border trade',
                  specialties: ['Oil & gas industry pallets', 'Mexico export pallets', 'High-temperature resistant pallets'],
                },
                {
                  region: 'West Coast Region',
                  icon: '🌊',
                  states: ['California', 'Oregon', 'Washington', 'Nevada'],
                  distributionCenters: ['Los Angeles, CA', 'Oakland, CA', 'Seattle, WA'],
                  coverage: 'Full West Coast coverage with major port access for international shipping',
                  specialties: ['Asian export pallets', 'Tech industry specialized pallets', 'Wine & beverage pallets'],
                },
                {
                  region: 'Mountain Region',
                  icon: '⛰️',
                  states: ['Colorado', 'Utah', 'Idaho', 'Montana', 'Wyoming'],
                  distributionCenters: ['Denver, CO', 'Salt Lake City, UT'],
                  coverage: 'Mountain states coverage with logistics solutions for challenging terrain',
                  specialties: ['Heavy-duty pallets for mining', 'Cold-weather treated pallets', 'Recreational equipment pallets'],
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{region.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-600">{region.region}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">States Served:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.states.map((state, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                            {state}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Distribution Centers:</h4>
                      <ul className="space-y-1">
                        {region.distributionCenters.map((center, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <span className="text-primary-500 mr-2">📍</span>
                            {center}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Coverage Details:</h4>
                      <p className="text-gray-600 text-sm">{region.coverage}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-800 mb-2">Regional Specialties:</h4>
                      <ul className="space-y-1">
                        {region.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <span className="text-secondary-500 mr-2">✓</span>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Get a Quote for Your Location</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No matter where you're located in the United States, we can serve you with quality pallets and exceptional service. Get your free quote today.
              </p>
            </motion.div>
            <ContactForm productType="Location Inquiry" />
          </div>
        </div>
      </section>

      {/* All 50 States Overview */}
      <section id="state-selector" className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Complete 50-State Coverage</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl">
                Click on your state to view detailed information about our services, coverage areas, key industries we serve, and specific locations within that state. Every state has access to our full product line and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {states.map((state, index) => (
                <motion.div
                  key={state.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.01 }}
                >
                  <Link
                    href={`/locations/${state.slug}`}
                    className="block bg-white p-4 rounded-xl soft-shadow hover:soft-shadow-hover transition-all group hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-primary-600 group-hover:text-secondary-600 transition-colors">
                        {state.abbreviation}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{state.name}</h3>
                    <p className="text-xs text-gray-500">{state.cities.length} cities served</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What You'll Find on Each State Page:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Major Cities Served</div>
                      <div className="text-sm text-gray-600">Complete list of cities we service in your state</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Delivery Information</div>
                      <div className="text-sm text-gray-600">Estimated delivery times and shipping options</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Industry Focus</div>
                      <div className="text-sm text-gray-600">Key industries we serve in your region</div>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Local Regulations</div>
                      <div className="text-sm text-gray-600">State-specific pallet requirements and standards</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Success Stories</div>
                      <div className="text-sm text-gray-600">Case studies from businesses in your state</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Local Contact</div>
                      <div className="text-sm text-gray-600">Direct contact for your regional team</div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Why Local Expertise Matters
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              While we're a national company, we pride ourselves on local knowledge and personalized service. Our regional teams understand the unique challenges and opportunities in your area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Regional Industry Knowledge',
                  description: 'Each region has dominant industries with specific pallet needs. Our local teams understand whether you are in automotive (Midwest), tech (West Coast), agriculture (Plains), or manufacturing (Southeast).',
                  icon: '🏭',
                },
                {
                  title: 'Climate Considerations',
                  description: 'Pallet requirements vary by climate. We know that Florida needs mold-resistant treatments, while northern states require cold-weather tested materials.',
                  icon: '🌡️',
                },
                {
                  title: 'State Regulations',
                  description: 'Different states have varying regulations for wood treatment, pest control, and recycling. Our regional experts ensure full compliance with local laws.',
                  icon: '📋',
                },
                {
                  title: 'Faster Response Times',
                  description: 'Local inventory means faster delivery. Most orders ship same-day or next-day from our nearest distribution center to your location.',
                  icon: '⚡',
                },
                {
                  title: 'Regional Carrier Relationships',
                  description: 'We partner with trusted local carriers who know the roads, traffic patterns, and best routes to get pallets to you efficiently.',
                  icon: '🚚',
                },
                {
                  title: 'Community Investment',
                  description: 'We are invested in the communities we serve, supporting local jobs, sustainable practices, and economic development in every region.',
                  icon: '🤝',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow border border-gray-200"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-primary-600 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Details */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Detailed Service Area Coverage
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Understanding our service capabilities helps you plan better. Here's what you can expect based on your location.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Metro Area Service (Same/Next Day)</h3>
                <p className="text-gray-600 mb-4">
                  Major metropolitan areas receive priority service with local inventory and dedicated delivery routes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Same-Day Delivery</div>
                      <div className="text-sm text-gray-600">Orders before noon delivered same day</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Local Inventory</div>
                      <div className="text-sm text-gray-600">Full product line stocked locally</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">On-Site Consultations</div>
                      <div className="text-sm text-gray-600">Free facility visits available</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Emergency Service</div>
                      <div className="text-sm text-gray-600">24/7 urgent delivery available</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Includes:</span> New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, and 40+ other major metros
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Regional Service (2-3 Days)</h3>
                <p className="text-gray-600 mb-4">
                  Smaller cities and towns receive regular scheduled service with reliable delivery windows.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">2-3 Day Delivery</div>
                      <div className="text-sm text-gray-600">Predictable delivery schedules</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Regional Inventory</div>
                      <div className="text-sm text-gray-600">Stocked at nearby distribution center</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Phone Support</div>
                      <div className="text-sm text-gray-600">Direct line to regional specialists</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Scheduled Routes</div>
                      <div className="text-sm text-gray-600">Regular delivery routes for efficiency</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Includes:</span> All cities with 50,000+ population and surrounding areas within 50 miles of distribution centers
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Rural Service (3-5 Days)</h3>
                <p className="text-gray-600 mb-4">
                  Even rural and remote locations receive full service with slightly extended delivery times.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">3-5 Day Delivery</div>
                      <div className="text-sm text-gray-600">Via trusted carrier network</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Full Product Access</div>
                      <div className="text-sm text-gray-600">Same products as metro customers</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Flexible Scheduling</div>
                      <div className="text-sm text-gray-600">Work with your receiving schedule</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Bulk Discounts</div>
                      <div className="text-sm text-gray-600">Lower per-unit costs on larger orders</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Includes:</span> All locations not covered by metro or regional service, including agricultural and remote areas
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-secondary-600 mb-6">Alaska & Hawaii Service</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve our customers in Alaska and Hawaii with specialized shipping solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Container Shipping</div>
                      <div className="text-sm text-gray-600">Efficient ocean and air freight options</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">7-14 Day Delivery</div>
                      <div className="text-sm text-gray-600">Depending on destination and method</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Specialized Products</div>
                      <div className="text-sm text-gray-600">Climate-appropriate pallet options</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-secondary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Volume Discounts</div>
                      <div className="text-sm text-gray-600">Significant savings on container loads</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Note:</span> Contact us for detailed shipping quotes to Alaska and Hawaii. We can help optimize container loads to reduce costs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times by Region */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Average Response Times by Region
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Transparency in delivery expectations helps you plan better. Here are our average response and delivery times across different regions.
            </p>

            <div className="bg-white rounded-2xl soft-shadow overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Region</th>
                    <th className="px-6 py-4 text-left">Quote Response</th>
                    <th className="px-6 py-4 text-left">Order Processing</th>
                    <th className="px-6 py-4 text-left">Delivery Time</th>
                    <th className="px-6 py-4 text-left">Emergency Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { region: 'Major Metro Areas', quote: '< 1 hour', processing: 'Same day', delivery: 'Same/Next day', emergency: 'Available 24/7' },
                    { region: 'Regional Cities', quote: '1-2 hours', processing: 'Same day', delivery: '1-2 days', emergency: 'Next day' },
                    { region: 'Suburban Areas', quote: '2 hours', processing: 'Same day', delivery: '2-3 days', emergency: '2-3 days' },
                    { region: 'Rural Locations', quote: '2-4 hours', processing: 'Next day', delivery: '3-5 days', emergency: '3-5 days' },
                    { region: 'Alaska/Hawaii', quote: '4-6 hours', processing: '1-2 days', delivery: '7-14 days', emergency: '5-7 days (air)' },
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-primary-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{row.region}</td>
                      <td className="px-6 py-4 text-gray-700">{row.quote}</td>
                      <td className="px-6 py-4 text-gray-700">{row.processing}</td>
                      <td className="px-6 py-4 text-primary-600 font-medium">{row.delivery}</td>
                      <td className="px-6 py-4 text-secondary-600 font-medium">{row.emergency}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-secondary-50 border border-secondary-200 p-6 rounded-xl">
              <h3 className="font-bold text-secondary-700 mb-2">Response Time Guarantee:</h3>
              <p className="text-gray-700 text-sm">
                All quotes are guaranteed within the stated timeframes during business hours. After-hours quotes are processed by 9 AM the next business day. Emergency orders receive immediate attention 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Can't Find Your Location */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Can't Find Your Specific Location?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Even if your specific city or town isn't listed, we can still serve you! Our extensive carrier network reaches every zip code in the United States. Contact us to discuss delivery to your exact location.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
                >
                  Contact Us About Your Location
                </Link>
                <a
                  href="tel:1-800-725-5381"
                  className="px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border-2 border-primary-600"
                >
                  Call: 1-800-PALLET-1
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Local Service with National Strength?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Find your state, get a quote, and discover why businesses across America trust USA Pallet Solution for their pallet needs.
              </p>
              <a href="#state-selector" className="inline-block px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Select Your State
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
