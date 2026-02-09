'use client'

import { ContactForm } from '@/components/ContactForm'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getCityBySlug } from '@/data/locations'
import { useParams } from 'next/navigation'

export default function CityPage() {
  const params = useParams()
  const stateSlug = params.state as string
  const citySlug = params.city as string

  const result = getCityBySlug(stateSlug, citySlug)

  if (!result) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">City Not Found</h1>
          <Link href="/locations" className="text-primary-600 hover:text-primary-700">
            ← Back to Locations
          </Link>
        </div>
      </div>
    )
  }

  const { state, city } = result

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-warm-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-6 text-sm">
              <Link href="/locations" className="text-primary-600 hover:text-primary-700">Locations</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href={`/locations/${state.slug}`} className="text-primary-600 hover:text-primary-700">{state.name}</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">{city.name}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              Pallet Services in {city.name}, {state.abbreviation}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-4">
              {city.description}
            </p>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Population: {city.population}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Get a Quote in {city.name}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fast, local service with nationwide support. Contact us for same-day quotes.
            </p>
            <ContactForm productType={`${city.name}, ${state.abbreviation} Inquiry`} />
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Local Expertise in {city.name}
              </h2>
              <div className="bg-white p-8 rounded-2xl soft-shadow">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  USA Pallet Solution has been serving businesses in {city.name} for years, developing deep
                  expertise in the local market. We understand the unique logistics challenges, industry
                  requirements, and delivery patterns specific to the {city.name} metropolitan area.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our {city.name} operation is backed by our national network, giving you access to extensive
                  inventory, competitive pricing, and specialized services while benefiting from local
                  relationships and fast response times. Whether you need 10 pallets or 10,000, we have the
                  capacity and expertise to serve you efficiently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                    <div className="text-4xl font-bold text-primary-600 mb-2">2-4hrs</div>
                    <p className="text-gray-700 font-semibold">Average Response Time</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">Same Day</div>
                    <p className="text-gray-700 font-semibold">Delivery Available</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                    <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                    <p className="text-gray-700 font-semibold">Emergency Service</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Service Areas Around {city.name}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We provide comprehensive pallet services throughout the {city.name} metropolitan area
                and surrounding communities. Our delivery network covers:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {city.serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-4 rounded-xl soft-shadow text-center"
                  >
                    <svg className="w-6 h-6 text-secondary-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-semibold text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industries Served */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Industries We Serve in {city.name}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {city.name}'s diverse economy requires specialized pallet solutions across multiple sectors.
                We have extensive experience serving the following industries:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {city.industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                          {industry}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Specialized pallet solutions including custom sizing, load ratings, and compliance
                          certifications for {industry.toLowerCase()} operations.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Complete Pallet Services in {city.name}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl soft-shadow">
                  <h3 className="text-2xl font-bold text-primary-600 mb-6">Products Available</h3>
                  <ul className="space-y-4">
                    {[
                      'New wooden pallets - all standard sizes',
                      'Recycled and refurbished pallets - Grade A & B',
                      'Heat-treated pallets (ISPM-15 certified)',
                      'Plastic pallets - various configurations',
                      'Metal pallets for heavy-duty applications',
                      'Custom pallets - any size or specification',
                      'Pallet accessories and supplies'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl soft-shadow">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-6">Services Offered</h3>
                  <ul className="space-y-4">
                    {[
                      'Same-day delivery for in-stock items',
                      'Scheduled recurring deliveries',
                      'Pallet buyback and recycling programs',
                      'On-site pallet management',
                      'Emergency rush orders - 24/7 availability',
                      'Pallet repair and refurbishment',
                      'Custom pallet design and engineering',
                      'Inventory management solutions'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Why {city.name} Businesses Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '🚚', title: 'Fast Delivery', description: 'Same-day service available in {city.name} metro area' },
                  { icon: '💰', title: 'Competitive Pricing', description: 'Volume discounts and flexible payment terms' },
                  { icon: '📞', title: 'Local Support', description: 'Dedicated account managers familiar with your market' },
                  { icon: '♻️', title: 'Sustainability', description: 'Comprehensive recycling and buyback programs' }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl soft-shadow text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description.replace('{city.name}', city.name)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Started in {city.name}?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact our local {city.name} team today for personalized service and competitive quotes.
                We're here to help optimize your pallet operations and reduce costs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-white text-primary-600 hover:bg-gray-50 rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/products"
                  className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                >
                  View Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Local {city.name} Pallet Resources
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Looking for pallet services in {city.name}? You've come to the right place. USA Pallet Solution
                  provides comprehensive pallet solutions to businesses throughout the {city.name} area, including
                  {city.serviceAreas.slice(0, 3).join(', ')}, and surrounding communities.
                </p>
                <p>
                  Our {city.name} operation specializes in serving {city.industries.slice(0, 2).join(' and ').toLowerCase()}
                  {city.industries.length > 2 ? ', among other industries' : ''}. We understand the unique requirements
                  of local businesses and provide tailored solutions that meet your specific needs.
                </p>
                <p>
                  Whether you need a single pallet or thousands, standard sizes or custom configurations, new or
                  recycled options, we have the inventory, expertise, and local presence to serve you efficiently.
                  Our commitment to quality, sustainability, and customer service has made us the preferred pallet
                  provider for businesses throughout {city.name}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
