export const metadata = {
  title: 'Contact — High Street Collective',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="border-b border-[#e8d5c4] px-6 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="font-serif text-2xl font-bold text-dark">High Street Collective.</a>
          <a href="/" className="text-muted hover:text-dark text-sm font-medium transition-colors">← Back to home</a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="mb-10">
          <span className="inline-block bg-yellow/50 text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Get in touch
          </span>
          <h1 className="font-serif text-4xl font-black text-dark mb-3">Say hello</h1>
          <p className="text-muted text-lg leading-relaxed">
            Got a question? Want to see a demo? Just drop us a message — we&#39;re a small team and we actually pick up the phone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {/* Phone */}
          <a
            href="tel:07787620982"
            className="bg-white rounded-3xl border border-[#f0e0d0] shadow-warm p-6 hover:shadow-warm-lg transition-shadow group"
          >
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Phone</p>
            <p className="font-serif text-xl font-bold text-dark group-hover:text-primary transition-colors">
              07787 620982
            </p>
            <p className="text-muted text-sm mt-1">Mon – Sat, 9am – 6pm</p>
          </a>

          {/* Email */}
          <a
            href="mailto:alf.evans@icloud.com"
            className="bg-white rounded-3xl border border-[#f0e0d0] shadow-warm p-6 hover:shadow-warm-lg transition-shadow group"
          >
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Email</p>
            <p className="font-serif text-xl font-bold text-dark group-hover:text-primary transition-colors break-all">
              alf.evans@icloud.com
            </p>
            <p className="text-muted text-sm mt-1">Usually reply same day</p>
          </a>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-3xl border border-[#f0e0d0] shadow-warm p-8">
          <h2 className="font-serif text-2xl font-bold text-dark mb-6">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How quickly can I get set up?',
                a: 'We aim to have your booking page live within 48 hours of you signing up. We\'ll call or email you to confirm your shop details first.',
              },
              {
                q: 'Can I see an example before signing up?',
                a: 'Yes — call or email us and we\'ll walk you through a live demo over the phone.',
              },
              {
                q: 'What if I want to cancel?',
                a: 'No problem. Email or call us any time. There\'s no contract and we\'ll cancel your subscription that same day.',
              },
              {
                q: 'Do my customers need to download an app?',
                a: 'No. Everything works in a web browser — no app download needed for you or your customers.',
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#f0e0d0] pb-6 last:border-0 last:pb-0">
                <p className="font-semibold text-dark mb-1">{item.q}</p>
                <p className="text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
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
