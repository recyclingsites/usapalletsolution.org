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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-600">Pallet Quotes Across the United States</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl">
              Send a free, no-obligation pallet quote request from wherever you operate. Requests from across the US go to partner suppliers in our network; availability depends on partner suppliers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#state-selector" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover">
                Find Your State
              </a>
              <a href="#how-it-works" className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow border border-primary-200">
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
            >
              How Requests Work Across the US
            </motion.h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              USA Pallet Solution is a referral service. We do not stock or deliver pallets ourselves; partner suppliers in our network quote and fulfill the work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Send a Request', label: 'Tell us what you need and where you are', icon: '📝' },
                { title: 'We Pass It On', label: 'Your request goes to partner suppliers in our network', icon: '📨' },
                { title: 'A Supplier Follows Up', label: 'A partner supplier follows up with a quote if available', icon: '🤝' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-warm-50 to-white p-6 rounded-xl soft-shadow text-center border border-gray-200"
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{step.title}</div>
                  <div className="text-gray-600 text-sm font-medium">{step.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Availability Depends on Partner Suppliers</h3>
              <p className="text-lg opacity-90">
                What is possible varies by location, product and quantity. Pricing and delivery details come from partner suppliers by quote.
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
              Pallet Needs by Region
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Each region&apos;s economy shapes what a pallet request might include. These are general notes, not a list of what is in stock.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  region: 'Northeast Region',
                  icon: '🏙️',
                  states: ['New York', 'New Jersey', 'Pennsylvania', 'Massachusetts', 'Connecticut', 'Rhode Island', 'Vermont', 'New Hampshire', 'Maine'],
                  overview: 'A dense corridor of ports, warehouses and urban delivery points, where dock access and tight streets are worth mentioning in a request',
                  considerations: ['Export pallets for international shipping', 'Standard pallets for retail distribution', 'ISPM 15 heat-treated pallets'],
                },
                {
                  region: 'Southeast Region',
                  icon: '🌴',
                  states: ['Florida', 'Georgia', 'North Carolina', 'South Carolina', 'Virginia', 'Tennessee', 'Alabama', 'Mississippi', 'Louisiana'],
                  overview: 'Port cities and manufacturing centers, with warm, humid weather that makes storage conditions worth considering',
                  considerations: ['Heat-treated export pallets', 'Moisture and storage planning for wood', 'Pallets for manufacturing plants'],
                },
                {
                  region: 'Midwest Region',
                  icon: '🌾',
                  states: ['Illinois', 'Indiana', 'Ohio', 'Michigan', 'Wisconsin', 'Minnesota', 'Iowa', 'Missouri', 'Kansas', 'Nebraska'],
                  overview: 'Manufacturing, freight rail and farm economies, with cold winters in the northern states',
                  considerations: ['Pallets for automotive parts', 'Heavy-duty pallets for industrial loads', 'Pallets for agricultural products'],
                },
                {
                  region: 'Southwest Region',
                  icon: '🌵',
                  states: ['Texas', 'Oklahoma', 'Arkansas', 'New Mexico', 'Arizona'],
                  overview: 'Energy, manufacturing and long-distance freight, with hot, dry conditions in much of the region',
                  considerations: ['Heavy-duty pallets for energy equipment', 'Export pallets', 'Outdoor storage in high heat'],
                },
                {
                  region: 'West Coast Region',
                  icon: '🌊',
                  states: ['California', 'Oregon', 'Washington', 'Nevada'],
                  overview: 'Pacific ports, technology and agriculture, with trade moving through major container terminals',
                  considerations: ['Export pallets for Pacific trade', 'Custom sizes for technology equipment', 'Pallets for wine and beverages'],
                },
                {
                  region: 'Mountain Region',
                  icon: '⛰️',
                  states: ['Colorado', 'Utah', 'Idaho', 'Montana', 'Wyoming'],
                  overview: 'Mining, energy and agriculture spread across long distances and mountain terrain',
                  considerations: ['Heavy-duty pallets for mining loads', 'Cold-weather outdoor storage', 'Freight distance between towns'],
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
                      <h4 className="font-bold text-gray-800 mb-2">States:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.states.map((state, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                            {state}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Regional Overview:</h4>
                      <p className="text-gray-600 text-sm">{region.overview}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-800 mb-2">Worth Considering:</h4>
                      <ul className="space-y-1">
                        {region.considerations.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <span className="text-secondary-500 mr-2">✓</span>
                            {item}
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
                Send a free, no-obligation quote request and we pass it to partner suppliers. Availability depends on partner suppliers.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Find Your State</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl">
                Click on your state to see its key industries, listed cities and how to send a quote request from there.
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
                    <p className="text-xs text-gray-500">{state.cities.length === 1 ? '1 city listed' : `${state.cities.length} cities listed`}</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What You&apos;ll Find on Each State Page:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Listed Cities</div>
                      <div className="text-sm text-gray-600">Cities with their own page, including nearby areas</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Industry Focus</div>
                      <div className="text-sm text-gray-600">Key industries in the state</div>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Available Requests</div>
                      <div className="text-sm text-gray-600">What you can ask partner suppliers for</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-800">Quote Request Form</div>
                      <div className="text-sm text-gray-600">Send your request from the page</div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Why Location Matters for Pallets
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Where you operate affects what you need and what is practical. These points are worth thinking through before you send a request.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Regional Industries',
                  description: 'Local industries shape pallet needs. Automotive parts, farm products and electronics each put different demands on a pallet, so describe your load in your request.',
                  icon: '🏭',
                },
                {
                  title: 'Climate Considerations',
                  description: 'Wood pallets kept in damp, humid conditions can pick up moisture and mold, and outdoor storage in hard winters brings its own issues. Mention how pallets will be stored.',
                  icon: '🌡️',
                },
                {
                  title: 'State Regulations',
                  description: 'Rules on moving untreated wood, pest control and waste wood can differ by place. Check current regulations for your area and your destination.',
                  icon: '📋',
                },
                {
                  title: 'Freight Distance',
                  description: 'Pallets are bulky for what they weigh, so distance matters. Giving your exact location helps a partner supplier work out what is practical.',
                  icon: '🚚',
                },
                {
                  title: 'Used Pallet Supply',
                  description: 'Recycled pallets come from pallets already in circulation, so what is on hand varies by area. Reusing a pallet avoids building a new one.',
                  icon: '♻️',
                },
                {
                  title: 'Site Access',
                  description: 'Dock height, forklift access and truck turning room all affect pickup and delivery. Include these details if your site has limits.',
                  icon: '🏗️',
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

      {/* What Affects Availability */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              What to Expect by Area Type
            </motion.h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl">
              Availability depends on partner suppliers, and it can vary with the kind of area you are in. Here is what to keep in mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Metro Areas',
                  color: 'primary',
                  intro: 'Metro areas tend to have plenty of warehouse and distribution activity, and access can be the main constraint.',
                  items: [
                    { name: 'Delivery Access', detail: 'Note dock hours and truck limits' },
                    { name: 'Standard Sizes', detail: 'Say if you need the common 48x40 GMA size' },
                    { name: 'Used Pallets', detail: 'Ask about recycled pallets as well as new' },
                    { name: 'Pickup of Surplus', detail: 'Mention used pallets you want removed' },
                  ],
                },
                {
                  title: 'Smaller Cities',
                  color: 'secondary',
                  intro: 'In smaller cities, a request may go to partner suppliers some distance away, so planning ahead helps.',
                  items: [
                    { name: 'Lead Time', detail: 'Tell us when you need pallets' },
                    { name: 'Quantity', detail: 'Larger loads can change what is practical' },
                    { name: 'Nearest Major City', detail: 'Name it in your request if it helps' },
                    { name: 'Repeat Needs', detail: 'Mention whether this is one order or ongoing' },
                  ],
                },
                {
                  title: 'Rural Areas',
                  color: 'primary',
                  intro: 'Rural and remote sites are welcome to send a request, though options depend on partner suppliers and freight distance.',
                  items: [
                    { name: 'Exact Location', detail: 'Give the nearest town and highway' },
                    { name: 'Site Access', detail: 'Note road conditions and unloading equipment' },
                    { name: 'Flexible Timing', detail: 'Say if your dates can move' },
                    { name: 'Full Truckloads', detail: 'Say if your order would fill a truck' },
                  ],
                },
                {
                  title: 'Alaska & Hawaii',
                  color: 'secondary',
                  intro: 'Requests from Alaska and Hawaii are welcome. Ocean or air freight usually plays a part, so availability depends on partner suppliers.',
                  items: [
                    { name: 'Freight Mode', detail: 'Goods usually move by ship or air' },
                    { name: 'Climate', detail: 'Mention cold, humid or salty conditions' },
                    { name: 'Island or Remote Sites', detail: 'Name the exact island or community' },
                    { name: 'Container Loads', detail: 'Say if you are working with a container' },
                  ],
                },
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl soft-shadow border border-gray-200"
                >
                  <h3 className={`text-2xl font-bold mb-6 ${area.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'}`}>{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.intro}</p>
                  <div className="space-y-3">
                    {area.items.map((item) => (
                      <div key={item.name} className="flex items-start">
                        <span className={`mr-3 mt-1 ${area.color === 'primary' ? 'text-primary-500' : 'text-secondary-500'}`}>✓</span>
                        <div>
                          <div className="font-semibold text-gray-800">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can't Find Your Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Can&apos;t Find Your Specific Location?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If your city or town isn&apos;t listed, you can still send a request. Tell us where you are and we pass it to partner suppliers. Availability depends on partner suppliers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
                >
                  Request a Quote
                </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Send Your Request?</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Find your state and send a free, no-obligation quote request. A partner supplier follows up.
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
