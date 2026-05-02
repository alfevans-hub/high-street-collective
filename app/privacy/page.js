export const metadata = {
  title: 'Privacy Policy — High Street Collective',
}

const CONTACT_EMAIL = 'alf.evans@icloud.com'
const LAST_UPDATED = '2 May 2025'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-[#e8d5c4] px-6 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="font-serif text-2xl font-bold text-dark">High Street Collective.</a>
          <a href="/" className="text-muted hover:text-dark text-sm font-medium transition-colors">← Back to home</a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-black text-dark mb-2">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-stone max-w-none space-y-8 text-dark">

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Who we are</h2>
            <p className="text-muted leading-relaxed">
              High Street Collective provides a barbershop booking and management platform for independent barbershops in the UK. When we refer to "we", "us", or "our", we mean High Street Collective. Our contact email is <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">What information we collect</h2>
            <p className="text-muted leading-relaxed mb-3">When you sign up, we collect:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted">
              <li>Your full name and shop name</li>
              <li>Your email address and phone number</li>
              <li>Payment information — processed securely by Stripe. We never see or store your card details.</li>
              <li>A password for your admin dashboard</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              When your customers use your booking page, we collect their name, email, and phone number to manage their bookings and send reminders.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">How we use your information</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted">
              <li>To set up and manage your barbershop booking system</li>
              <li>To process your subscription payment via Stripe</li>
              <li>To contact you about your account or our service</li>
              <li>To send your customers booking confirmations and SMS reminders</li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              We do not sell your data to third parties. We do not use your data for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Third-party services</h2>
            <p className="text-muted leading-relaxed mb-3">We use the following third parties to run our service:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted">
              <li><strong className="text-dark">Stripe</strong> — payment processing. See <a href="https://stripe.com/gb/privacy" className="text-primary underline" target="_blank" rel="noopener noreferrer">Stripe's privacy policy</a>.</li>
              <li><strong className="text-dark">Supabase</strong> — database and user authentication.</li>
              <li><strong className="text-dark">Vercel</strong> — website hosting.</li>
              <li><strong className="text-dark">Resend / Twilio</strong> — email and SMS delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Your rights</h2>
            <p className="text-muted leading-relaxed">
              Under UK GDPR you have the right to access, correct, or delete your personal data at any time. To make a request, email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a> and we will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Cookies</h2>
            <p className="text-muted leading-relaxed">
              We use only essential cookies required for the site to function (such as keeping you logged in). We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Changes to this policy</h2>
            <p className="text-muted leading-relaxed">
              We may update this policy from time to time. We will notify existing customers by email of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Contact</h2>
            <p className="text-muted leading-relaxed">
              Any questions about this policy — email <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

        </div>
      </div>

      <footer className="border-t border-[#e8d5c4] py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif font-bold text-dark">High Street Collective.</p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="/privacy" className="hover:text-dark transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-dark transition-colors">Terms</a>
            <a href="/contact" className="hover:text-dark transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
