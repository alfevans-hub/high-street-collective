export const metadata = {
  title: 'Terms of Service — High Street Collective',
}

const CONTACT_EMAIL = 'alf.evans@icloud.com'
const LAST_UPDATED = '2 May 2025'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-[#e8d5c4] px-6 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="font-serif text-2xl font-bold text-dark">High Street Collective.</a>
          <a href="/" className="text-muted hover:text-dark text-sm font-medium transition-colors">← Back to home</a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-serif text-4xl font-black text-dark mb-2">Terms of Service</h1>
        <p className="text-muted text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <div className="space-y-8 text-dark">

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">1. The service</h2>
            <p className="text-muted leading-relaxed">
              High Street Collective provides a barbershop booking system including an online booking page, live walk-in queue, SMS and email reminders, and an admin dashboard. The service is provided on a monthly subscription basis at £49/month.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">2. Setup and delivery</h2>
            <p className="text-muted leading-relaxed">
              After successful payment we will contact you within 48 hours to set up your shop. Your booking page will be live within 48 hours of us receiving your shop details. We will contact you by phone or email using the details you provided at signup.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">3. Payment and billing</h2>
            <p className="text-muted leading-relaxed">
              Subscription payments are charged monthly via Stripe. Your first payment is taken at signup. Subsequent payments are taken on the same date each month. All prices are in GBP and inclusive of any applicable VAT.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">4. Cancellation</h2>
            <p className="text-muted leading-relaxed">
              You can cancel your subscription at any time by emailing <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>. Cancellations take effect at the end of the current billing period. We do not offer partial refunds for unused time within a billing period.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">5. Your responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1 text-muted">
              <li>You are responsible for the accuracy of your shop information</li>
              <li>You must not use the service for any unlawful purpose</li>
              <li>You are responsible for keeping your login credentials secure</li>
              <li>You must ensure you have appropriate permission to contact your customers via SMS and email</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">6. Availability</h2>
            <p className="text-muted leading-relaxed">
              We aim to keep the service available at all times but cannot guarantee uninterrupted access. We will notify you of any planned maintenance. We are not liable for losses caused by downtime outside our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">7. Limitation of liability</h2>
            <p className="text-muted leading-relaxed">
              Our total liability to you in any month shall not exceed the subscription fee paid in that month. We are not liable for indirect losses including lost profits or lost bookings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">8. Changes to the service</h2>
            <p className="text-muted leading-relaxed">
              We may update features of the service from time to time. We will give you at least 30 days notice of any price changes or significant changes to the service by email.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">9. Governing law</h2>
            <p className="text-muted leading-relaxed">
              These terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">10. Contact</h2>
            <p className="text-muted leading-relaxed">
              Questions about these terms — email <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a> or call <a href="tel:07787620982" className="text-primary underline">07787 620982</a>.
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
