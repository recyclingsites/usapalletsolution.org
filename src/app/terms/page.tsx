import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | USA Pallet Solution',
  description: 'The terms for using USA Pallet Solution, a referral service that passes pallet quote requests to partner suppliers.',
  alternates: { canonical: '/terms/' },
}

const sections = [
  {
    title: 'Referral Service Only',
    body: 'USA Pallet Solution is a referral service. We pass your quote request to partner suppliers in our network. We do not sell, make, repair, store, or transport pallets, and we are not a party to any agreement between you and a supplier.',
  },
  {
    title: 'Partner Suppliers',
    body: 'Partner suppliers set their own prices, terms, delivery, warranties, and returns. Any order is between you and the supplier. Availability depends on your location and on partner suppliers, and a request does not guarantee a quote.',
  },
  {
    title: 'Site Content',
    body: 'Content on this site, including product and grade descriptions, is general information. Confirm specifications and any regulatory requirements with your supplier before you order.',
  },
  {
    title: 'No Warranty',
    body: 'This site and the referral service are provided as is, without warranties of any kind, to the fullest extent the law allows.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent the law allows, USA Pallet Solution is not liable for any indirect or consequential loss, or for any loss arising from a supplier’s goods or services or from your use of this site.',
  },
  {
    title: 'Your Use of the Site',
    body: 'Give accurate information when you send a request, and do not misuse the site or its form.',
  },
  {
    title: 'Changes',
    body: 'We may update these terms. The date at the top of this page shows when they last changed.',
  },
]

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: October 30, 2026</p>
          <div className="bg-white rounded-2xl p-8 border border-primary-200 soft-shadow space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-primary-600 mb-3">{section.title}</h2>
                <p className="text-gray-700">{section.body}</p>
              </div>
            ))}
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Contact</h2>
              <p className="text-gray-700">
                Reach us through the <a href="/contact/" className="text-primary-600 underline">contact form</a> or
                at <a href="mailto:info@usapalletsolution.org" className="text-primary-600 underline">info@usapalletsolution.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
