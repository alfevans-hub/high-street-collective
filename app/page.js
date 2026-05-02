import HighStreetIllustration from './HighStreetIllustration'

// ── NAV ──────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-[#e8d5c4]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-bold text-dark tracking-tight">
          High Street Collective.
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted hover:text-dark text-sm font-medium transition-colors">Features</a>
          <a href="#pricing" className="text-muted hover:text-dark text-sm font-medium transition-colors">Pricing</a>
          <a href="/contact" className="text-muted hover:text-dark text-sm font-medium transition-colors">Contact</a>
          <a
            href="/signup"
            className="bg-primary hover:bg-[#c0392b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>
        <button className="md:hidden text-muted p-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

// ── HERO ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-cream pt-16 pb-0 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block bg-yellow/50 text-dark text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Built for independent barbershops
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-dark leading-[1.05] mb-6">
          Your Barbershop.<br />
          <span className="text-primary italic">Online.</span>{' '}
          Booked Up.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Give your shop a beautiful booking page, a live walk-in queue, and an admin dashboard — all in one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="bg-primary hover:bg-[#c0392b] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors shadow-warm"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg px-8 py-4 rounded-2xl transition-colors"
          >
            See a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FEATURES ─────────────────────────────────────────────────────────
function Features() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <rect x="8" y="10" width="40" height="36" rx="6" fill="#FFD166" />
          <rect x="8" y="10" width="40" height="12" rx="6" fill="#D94F3D" />
          <rect x="8" y="16" width="40" height="6" fill="#D94F3D" />
          <rect x="14" y="28" width="10" height="10" rx="2" fill="#FFF8F0" />
          <rect x="32" y="28" width="10" height="10" rx="2" fill="#FFF8F0" />
          <circle cx="19" cy="33" r="3" fill="#2C1810" />
          <circle cx="37" cy="33" r="3" fill="#2C1810" />
        </svg>
      ),
      title: 'Online Bookings',
      desc: 'Customers book 24/7 from their phone. No calls, no back-and-forth — just a clean booking page with your name on it.',
    },
    {
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="28" cy="28" r="20" fill="#FF6B35" opacity="0.2" />
          <circle cx="28" cy="28" r="14" fill="#FF6B35" />
          <path d="M28 16 L28 28 L36 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="42" cy="14" r="6" fill="#D94F3D" />
          <path d="M39.5 14 L41.5 16 L45 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Live Walk-In Queue',
      desc: "Customers join the queue from outside. See live wait times, get called when it's their turn — no more awkward waiting.",
    },
    {
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <rect x="10" y="14" width="36" height="28" rx="7" fill="#2C1810" />
          <rect x="12" y="16" width="32" height="24" rx="6" fill="#FFF8F0" />
          <path d="M12 23 L28 31 L44 23" stroke="#2C1810" strokeWidth="2" fill="none" />
          <circle cx="42" cy="16" r="6" fill="#D94F3D" />
          <path d="M39 16 L41.5 18.5 L45.5 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'SMS Reminders',
      desc: 'Automatic texts so customers never forget their appointment. Fewer no-shows, more revenue in your pocket.',
    },
  ]

  return (
    <section id="features" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
            Everything your shop needs
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            One subscription. No hidden fees. All the tools a modern barbershop actually uses.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-3xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow border border-[#f0e0d0]"
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-dark mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── HOW IT WORKS ─────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Sign up and pay monthly',
      desc: 'No contracts, no setup fees. £49/month, cancel any time.',
    },
    {
      num: '02',
      title: "We build your shop's page",
      desc: 'We set everything up — your name, services, and booking link, ready within 48 hours.',
    },
    {
      num: '03',
      title: 'Share your link and take bookings',
      desc: 'Post it on Instagram, your Google listing, wherever. Bookings start rolling in.',
    },
  ]

  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Up and running in 48 hours
          </h2>
          <p className="text-[#c4a48c] text-lg max-w-xl mx-auto">
            We do the heavy lifting. You just show up and cut hair.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.num}>
              <div className="font-serif text-8xl font-black text-primary/25 leading-none mb-4 select-none">
                {s.num}
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-3">{s.title}</h3>
              <p className="text-[#c4a48c] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PRICING ───────────────────────────────────────────────────────────
function Pricing() {
  const features = [
    'Your own booking page',
    'Live queue system',
    'SMS & email reminders',
    'Admin dashboard',
    'Unlimited bookings',
    'We set it up for you',
  ]

  return (
    <section id="pricing" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">Simple pricing</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            One plan. Everything included. No surprises.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-warm-lg border border-[#f0e0d0] text-center">
            <div className="inline-block bg-yellow/40 text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Monthly plan
            </div>
            <div className="mb-2">
              <span className="font-serif text-7xl font-black text-dark">£49</span>
              <span className="text-muted text-xl font-medium">/month</span>
            </div>
            <p className="text-muted text-sm mb-8">Cancel any time. No contract.</p>

            <ul className="space-y-4 mb-10 text-left">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  <span className="text-dark font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="/signup"
              className="block bg-primary hover:bg-[#c0392b] text-white font-bold text-lg py-4 rounded-2xl transition-colors shadow-warm"
            >
              Get Started
            </a>
            <p className="text-muted text-xs mt-4">
              Questions? Call{' '}
              <a href="tel:07787620982" className="text-primary underline">07787 620982</a>
              {' '}or email{' '}
              <a href="mailto:alf.evans@icloud.com" className="text-primary underline">alf.evans@icloud.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-dark py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <p className="font-serif text-2xl font-bold text-cream mb-1">High Street Collective.</p>
            <p className="text-[#c4a48c] text-sm">Built for independent barbershops</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-[#c4a48c]">
            <div>
              <p className="text-cream font-semibold mb-2">Contact</p>
              <a href="tel:07787620982" className="block hover:text-cream transition-colors mb-1">07787 620982</a>
              <a href="mailto:alf.evans@icloud.com" className="block hover:text-cream transition-colors">alf.evans@icloud.com</a>
            </div>
            <div>
              <p className="text-cream font-semibold mb-2">Legal</p>
              <a href="/privacy" className="block hover:text-cream transition-colors mb-1">Privacy Policy</a>
              <a href="/terms" className="block hover:text-cream transition-colors">Terms of Service</a>
            </div>
            <div>
              <p className="text-cream font-semibold mb-2">Company</p>
              <a href="/contact" className="block hover:text-cream transition-colors mb-1">Contact us</a>
              <a href="/signup" className="block hover:text-cream transition-colors">Get Started</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#3d2518] pt-6 text-[#c4a48c] text-xs">
          © {new Date().getFullYear()} High Street Collective. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ── DEMO SECTION ─────────────────────────────────────────────────────
function Demo() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
            See it in action
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Here&#39;s what your customers would see when they visit your booking page.
          </p>
        </div>

        {/* Mock browser window */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#2C1810] rounded-t-2xl px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D94F3D]" />
            <span className="w-3 h-3 rounded-full bg-[#FFD166]" />
            <span className="w-3 h-3 rounded-full bg-[#8DB87A]" />
            <div className="flex-1 bg-[#3d2518] rounded-lg px-3 py-1 ml-2">
              <p className="text-[#c4a48c] text-xs font-mono">trimbook.co.uk/your-shop-name</p>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-b-2xl overflow-hidden shadow-warm-lg border border-[#2C1810]">
            {/* Fake booking page inside */}
            <div className="px-6 py-5 border-b border-[#2a2a2a] flex items-center justify-between">
              <p className="text-white font-semibold text-sm">← Your Shop Name</p>
              <p className="text-gray-400 text-xs">Book an Appointment</p>
            </div>
            <div className="p-6">
              <p className="text-white font-bold text-lg mb-1">Pick a Service</p>
              <p className="text-gray-400 text-sm mb-4">Choose what you&#39;d like today</p>
              <div className="space-y-3">
                {[
                  { name: 'Haircut', price: '£18', time: '30 min' },
                  { name: 'Beard Trim', price: '£12', time: '20 min' },
                  { name: 'Full Groom', price: '£25', time: '45 min' },
                ].map(s => (
                  <div key={s.name} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-sm">{s.name}</p>
                      <p className="text-gray-500 text-xs">{s.time}</p>
                    </div>
                    <p className="text-[#c9a84c] font-bold">{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-muted mb-4">Want to see a live example? Give us a call.</p>
          <a
            href="tel:07787620982"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#e8d5c4] hover:border-primary text-dark font-semibold px-6 py-3 rounded-2xl transition-colors shadow-warm"
          >
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07787 620982
          </a>
        </div>
      </div>
    </section>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HighStreetIllustration />
        <Features />
        <Demo />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
