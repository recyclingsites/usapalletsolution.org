import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import { getCityBySlug, statesData } from '@/data/locations'

export async function generateStaticParams() {
  const paths: { state: string; city: string }[] = []

  statesData.forEach((state) => {
    state.cities.forEach((city) => {
      paths.push({
        state: state.slug,
        city: city.slug,
      })
    })
  })

  return paths
}

interface Props {
  params: Promise<{ state: string; city: string }>
}

export default async function CityPage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params
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
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-warm-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div>
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
            <div className="flex flex-wrap gap-4 items-center text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{city.name}, {state.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Request a Quote in {city.name}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              A free, no-obligation quote request for your {city.name} business
            </p>
            <ContactForm productType={`${city.name}, ${state.abbreviation} Service Inquiry`} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-warm-50 to-light-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Service Areas in {city.name}
              </h2>
              <div className="bg-white p-8 rounded-2xl soft-shadow">
                <p className="text-gray-700 mb-6">
                  Requests are welcome from {city.name} and nearby communities, including the areas below. Each request
                  goes to partner suppliers in our network, and availability depends on partner suppliers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {city.serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Key Industries in {city.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {city.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl soft-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-800 font-semibold">{industry}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                How Requests From {city.name} Work
              </h2>
              <div className="bg-white p-8 rounded-2xl soft-shadow">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    USA Pallet Solution is a referral service. We do not stock or deliver pallets ourselves. When you
                    send a request from {city.name}, we pass it to partner suppliers in our network, who quote and
                    fulfill the work directly.
                  </p>
                  <p>
                    Whether you need standard pallets for everyday operations or something built to a specific size,
                    the more detail you give, the easier it is for a partner supplier to follow up. Availability in
                    {' '}{state.name} depends on partner suppliers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      { title: 'Free to Ask', desc: 'Sending a quote request is free and carries no obligation' },
                      { title: 'One Request', desc: `Describe your ${city.name} need once and we pass it on` },
                      { title: 'Pallet Details', desc: 'Include size, quantity, material and condition' },
                      { title: 'Load Details', desc: 'Include load weight and how pallets will be handled' },
                      { title: 'Location Details', desc: `Tell us where in the ${city.name} area you are` },
                      { title: 'Pricing by Quote', desc: 'Pricing comes from partner suppliers by quote' }
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg">
                        <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Services Through Partner Suppliers in {city.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Pallet Sales', desc: 'New and recycled pallets in standard sizes, through partner suppliers', icon: '📦' },
                  { title: 'Custom Pallets', desc: 'Custom-sized pallets built to your specifications by partner suppliers', icon: '🔧' },
                  { title: 'Pallet Recycling', desc: 'Partner suppliers can buy or recycle used pallets; reusing a pallet avoids building a new one', icon: '♻️' },
                  { title: 'Pickup and Delivery', desc: `Partner suppliers can arrange pickup or delivery in the ${city.name} area`, icon: '🚚' },
                  { title: 'Heat-Treated Pallets', desc: 'ISPM 15 heat-treated pallets for export, from partner suppliers', icon: '🔥' },
                  { title: 'Pallet Repair', desc: 'Partner suppliers can repair damaged pallets so they stay in use', icon: '🔨' }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl soft-shadow hover:soft-shadow-hover transition-all"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
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
                Ready to Get Started in {city.name}?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Send a free, no-obligation quote request from {city.name} and a partner supplier follows up.
                Availability depends on partner suppliers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 soft-shadow-hover"
                >
                  Request a Quote
                </Link>
                <Link
                  href={`/locations/${state.slug}`}
                  className="px-10 py-4 bg-white border-2 border-primary-300 text-primary-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
                >
                  View All {state.name} Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
