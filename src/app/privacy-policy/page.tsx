import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | USA Pallet Solution',
  description: 'What USA Pallet Solution collects through its quote form, who receives it, and how long it is kept.',
  alternates: { canonical: '/privacy-policy/' },
}

const sections = [
  {
    title: 'Who We Are',
    body: [
      'USA Pallet Solution is a referral service. We pass pallet quote requests to partner suppliers in our network. Those suppliers, not this site, provide the pallets and services.',
    ],
  },
  {
    title: 'What the Form Collects',
    body: [
      'The quote form asks for your name, email address, phone number, and ZIP or postal code, plus what you need: product, service, and quantity. You can also add your company, street address, city, state, pallet grade, timeframe, and any details you choose to share.',
      'The form also records technical details that help us handle your request, such as the page you sent it from, the campaign or referring site that brought you here, your IP address, and your browser type.',
    ],
  },
  {
    title: 'How Your Request Is Used',
    body: [
      'Your request goes to the 1DB lead platform and then to partner suppliers so they can prepare a quote and follow up with you. We use it only for that purpose and to keep the service working.',
    ],
  },
  {
    title: 'Text Messages',
    body: [
      'The form has an optional, unticked box for text messages about your request. If you tick it, a partner supplier may text you about that request. Message and data rates may apply. Reply STOP to opt out. You do not have to agree to texts to request a quote.',
    ],
  },
  {
    title: 'Analytics and Cookies',
    body: [
      'This site uses PostHog analytics, loaded through this site’s own domain, to count visits and see which pages are useful. Visitors in Europe, and visitors whose browser sends a privacy signal, are counted without cookies. Other visitors may receive a first-party analytics cookie. The site sets no advertising cookies.',
    ],
  },
  {
    title: 'How Long We Keep It',
    body: [
      'Quote requests are kept for as long as they are needed to handle the request and meet record-keeping needs, then deleted. Partner suppliers who receive your request keep their own records under their own policies.',
    ],
  },
  {
    title: 'Your Choices',
    body: [
      'You can ask to see, correct, or delete the information you sent us. Depending on where you live, you may have further rights under local privacy law.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: October 30, 2026</p>
          <div className="bg-white rounded-2xl p-8 border border-primary-200 soft-shadow space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-primary-600 mb-3">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-gray-700 mb-3">{paragraph}</p>
                ))}
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
