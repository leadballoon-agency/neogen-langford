import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | CO2 Laser Southampton - Rachael Katie Cosmetics',
  description: 'Privacy Policy for CO2 Laser Southampton by Rachael Katie Cosmetics. Learn how we collect, use and protect your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/80 mt-2">Last updated: November 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">1. Introduction</h2>
            <p className="text-neutral-600 mb-4">
              Rachael Katie Cosmetics ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website co2lasersouthampton.co.uk and use our services.
            </p>
            <p className="text-neutral-600">
              <strong>Business Details:</strong><br />
              Rachael Katie Cosmetics<br />
              63 London Road<br />
              Southampton, Hampshire SO15 2AB<br />
              United Kingdom<br />
              Phone: +44 7450 535007
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">2. Information We Collect</h2>
            <p className="text-neutral-600 mb-4">We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 text-neutral-600 mb-4">
              <li>Name and contact details (email, phone number)</li>
              <li>Information provided through consultation forms</li>
              <li>Skin assessment data</li>
              <li>Appointment and booking information</li>
              <li>Medical history relevant to treatments (collected during consultation)</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on site</li>
              <li>Referral source</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral-600 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li>Process and manage your consultation bookings</li>
              <li>Provide personalised treatment recommendations</li>
              <li>Communicate with you about appointments and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-neutral-600 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website:
            </p>

            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Essential Cookies</h3>
            <p className="text-neutral-600 mb-4">
              Required for the website to function properly. These cannot be disabled.
            </p>

            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Analytics Cookies</h3>
            <p className="text-neutral-600 mb-4">
              We use analytics tools to understand how visitors interact with our website, helping us improve our services.
            </p>

            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Marketing Cookies</h3>
            <p className="text-neutral-600">
              We use Facebook Pixel to measure advertising effectiveness and deliver relevant advertisements. You can opt out of personalised advertising through your browser settings or Facebook ad preferences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">5. Data Sharing</h2>
            <p className="text-neutral-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li><strong>Service Providers:</strong> Third parties who assist in operating our website and providing services (e.g., booking systems, email providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger or acquisition</li>
            </ul>
            <p className="text-neutral-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-neutral-600 mb-4">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 text-neutral-600">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object:</strong> Object to processing for marketing purposes</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-neutral-600 mt-4">
              To exercise any of these rights, please contact us at +44 7450 535007.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">7. Data Security</h2>
            <p className="text-neutral-600">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">8. Data Retention</h2>
            <p className="text-neutral-600">
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. Medical records related to treatments are retained in accordance with professional healthcare guidelines.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">9. Third-Party Links</h2>
            <p className="text-neutral-600">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">10. Changes to This Policy</h2>
            <p className="text-neutral-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">11. Contact Us</h2>
            <p className="text-neutral-600">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="text-neutral-600 mt-4">
              <strong>Rachael Katie Cosmetics</strong><br />
              63 London Road<br />
              Southampton, Hampshire SO15 2AB<br />
              United Kingdom<br />
              Phone: <a href="tel:+447450535007" className="text-primary-600 hover:text-primary-700">+44 7450 535007</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">12. Complaints</h2>
            <p className="text-neutral-600">
              If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <p className="text-neutral-600 mt-4">
              <strong>Information Commissioner's Office</strong><br />
              Wycliffe House, Water Lane<br />
              Wilmslow, Cheshire SK9 5AF<br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">ico.org.uk</a>
            </p>
          </section>

        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
