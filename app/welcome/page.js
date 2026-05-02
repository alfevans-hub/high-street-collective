import { Suspense } from 'react'

async function WelcomeContent({ searchParams }) {
  const { shop, name } = await searchParams
  const shopName = shop ? decodeURIComponent(shop) : 'your shop'
  const firstName = name ? decodeURIComponent(name).split(' ')[0] : null

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Nav */}
      <nav className="border-b border-[#e8d5c4] px-6 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <a href="/" className="font-serif text-2xl font-bold text-dark">
            High Street Collective.
          </a>
        </div>
      </nav>

      {/* Page body */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg text-center">

          {/* Confetti-ish decorative dots */}
          <div className="flex justify-center gap-3 mb-8">
            {['#D94F3D','#FF6B35','#FFD166','#8DB87A','#4A90C4'].map((c, i) => (
              <span
                key={i}
                className="inline-block rounded-full"
                style={{ width: 12, height: 12, background: c, marginTop: i % 2 === 0 ? 0 : 8 }}
              />
            ))}
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-[#f0e0d0] shadow-warm-lg px-10 py-12">
            <div className="text-6xl mb-6">🎉</div>

            <h1 className="font-serif text-4xl md:text-5xl font-black text-dark mb-4 leading-tight">
              {firstName ? `${firstName}, you're in!` : "You're in!"}
            </h1>

            {/* Shop name callout */}
            <div className="inline-block bg-yellow/40 border border-[#e8d5c4] rounded-2xl px-6 py-3 mb-6">
              <p className="text-muted text-sm font-medium">Your shop</p>
              <p className="font-serif text-2xl font-bold text-dark">{shopName}</p>
            </div>

            <p className="text-muted text-lg leading-relaxed mb-8">
              {"We're setting up your shop now. Expect a call or email from the High Street Collective team within 48 hours."}
            </p>

            {/* What happens next */}
            <div className="text-left space-y-4 border-t border-[#f0e0d0] pt-8">
              <p className="font-semibold text-dark text-sm uppercase tracking-wide mb-4">What happens next</p>
              {[
                { num: '1', text: "We'll call or email you to confirm your shop details" },
                { num: '2', text: 'Your booking page goes live within 48 hours' },
                { num: '3', text: 'We send you the link — you share it, and you\'re booked up' },
              ].map(s => (
                <div key={s.num} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {s.num}
                  </span>
                  <p className="text-muted leading-snug pt-0.5">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted text-sm mt-8">
            Questions?{' '}
            <a href="mailto:hello@highstreetcollective.co.uk" className="text-primary underline">
              hello@highstreetcollective.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function WelcomePage({ searchParams }) {
  return (
    <Suspense>
      <WelcomeContent searchParams={searchParams} />
    </Suspense>
  )
}
