import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { FloatingContactButton } from '@/components/FloatingContactButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://usapalletsolution.org'),
  title: 'USA Pallet Solution | Nationwide Pallet Supply, Recycling, Repair and Logistics Services',
  description: 'Comprehensive pallet buying, selling, recycling, repair, and transportation services for businesses across all 50 states.',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-warm-50 text-gray-800 antialiased">
        <script
          data-posthog="injected"
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Yi en init gn bn Qr mn wn fn capture calculateEventProperties In register register_once register_for_session unregister unregister_for_session Rn getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Pn identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty En kn createPersonProfile setInternalOrTestUser Mn dn Fn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing xn debug Kr Tn getPageViewId captureTraceFeedback captureTraceMetric ln".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_sGy8sX9cH4qvpx8pD6eTTwxjFi6wURjH9o054fa9hVL', {
    api_host: 'https://z.repackify.com',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-05-30',
    person_profiles: 'identified_only',
})`,
          }}
        />
        <Navigation />
        <div className="fixed inset-0 z-0">
          <img src="/images/back.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-50/80 via-light-50/70 to-primary-50/80"></div>
        </div>
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <FloatingContactButton />
        <footer className="bg-white border-t border-primary-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-4">USA Pallet Solution</h3>
                <p className="text-gray-600 text-sm">
                  Your trusted partner for all pallet needs. We specialize in buying, selling,
                  recycling, and transporting pallets across the United States.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-600 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about/" className="text-gray-600 hover:text-primary-500 transition-colors">About Us</a></li>
                  <li><a href="/products/" className="text-gray-600 hover:text-primary-500 transition-colors">Products</a></li>
                  <li><a href="/services/" className="text-gray-600 hover:text-primary-500 transition-colors">Services</a></li>
                  <li><a href="/contact/" className="text-gray-600 hover:text-primary-500 transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-600 mb-4">Contact Info</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL}</li>
                  <li>Address: {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}</li>
                  <li>Hours: {process.env.NEXT_PUBLIC_BUSINESS_HOURS}</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-100 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} USA Pallet Solution. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
