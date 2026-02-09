import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import { getStateBySlug, statesData } from '@/data/locations'

export async function generateStaticParams() {
  return statesData.map((state) => ({
    state: state.slug,
  }))
}

interface Props {
  params: { state: string }
}

export default function StatePage({ params }: Props) {
  const state = getStateBySlug(params.state)

  if (!state) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">State Not Found</h1>
          <Link href="/locations" className="text-primary-600 hover:text-primary-700">
            ← Back to Locations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 relative z-10">
          <div>
            <nav className="mb-6 text-sm">
              <Link href="/locations" className="text-primary-600 hover:text-primary-700">
                Locations
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-700">{state.name}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              Pallet Services in {state.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {state.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Request a Quote in {state.name}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Get customized pallet solutions for your {state.name} business
            </p>
            <ContactForm productType={`${state.name} Service Inquiry`} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl soft-shadow text-center">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-3xl font-bold text-primary-600 mb-2">{state.population}</h3>
                <p className="text-gray-600">Population</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-3xl font-bold text-secondary-600 mb-2">{state.warehouseLocations}</h3>
                <p className="text-gray-600">Distribution Centers</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-3xl font-bold text-primary-600 mb-2">{state.cities.length}</h3>
                <p className="text-gray-600">Cities Served</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Industries We Serve in {state.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.keyIndustries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl soft-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-semibold">{industry}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Why Choose Us in {state.name}
              </h2>
              <div className="bg-white p-8 rounded-2xl soft-shadow">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Our presence in {state.name} ensures that you receive personalized service backed by local
                    expertise and national resources. We understand the unique requirements of {state.name} industries
                    and have established relationships with regional carriers to ensure fast,
                    reliable delivery throughout the state.
                  </p>
                  <p>
                    Whether you are in a major metropolitan area or a more remote location, our distribution
                    network is designed to serve you efficiently. We maintain substantial inventory levels
                    to meet demand spikes and offer flexible delivery schedules to accommodate your operational
                    needs.
                  </p>
                  <p>
                    For businesses in {state.name}, we offer comprehensive services including:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      'Same-day delivery in major cities',
                      'Custom pallet manufacturing',
                      'Heat treatment and certification',
                      'Pallet recycling and buyback programs',
                      'Emergency rush orders',
                      'Volume discounts for regular customers',
                      'Dedicated account management',
                      'Industry-specific solutions'
                    ].map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Cities We Serve in {state.name}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Select a city to view detailed information about our services, local industries, coverage areas,
                and specific solutions available in that market.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.cities.map((city) => (
                  <div key={city.slug}>
                    <Link
                      href={`/locations/${state.slug}/${city.slug}`}
                      className="block bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all group hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                          {city.name}
                        </h3>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Population: {city.population}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{city.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 font-semibold mb-2">Key Industries:</p>
                        <div className="flex flex-wrap gap-2">
                          {city.industries.slice(0, 3).map((industry, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                            >
                              {industry}
                            </span>
                          ))}
                          {city.industries.length > 3 && (
                            <span className="text-xs text-gray-500">+{city.industries.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Ready to Get Started in {state.name}?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our {state.name} team today for a free quote and discover how we can help
                optimize your pallet operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="px-10 py-4 bg-white border-2 border-primary-300 text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
