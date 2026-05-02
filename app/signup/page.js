'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SignupForm() {
  const searchParams = useSearchParams()
  const cancelled = searchParams.get('cancelled')

  const [form, setForm] = useState({
    fullName: '',
    shopName: '',
    email: '',
    password: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      // Redirect to Stripe checkout
      window.location.href = data.url
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `
    w-full bg-white border-2 border-[#e8d5c4] rounded-xl px-4 py-3 text-dark
    placeholder-[#c4a48c] focus:outline-none focus:border-primary transition-colors
    font-sans text-base
  `
  const labelClass = "block text-sm font-semibold text-muted mb-1.5"

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Nav */}
      <nav className="border-b border-[#e8d5c4] px-6 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="font-serif text-2xl font-bold text-dark">
            High Street Collective.
          </a>
          <a href="/" className="text-muted hover:text-dark text-sm font-medium transition-colors">
            ← Back to home
          </a>
        </div>
      </nav>

      {/* Page body */}
      <div className="flex-1 flex items-start justify-center px-6 py-14">
        <div className="w-full max-w-md">

          {/* Cancelled banner */}
          {cancelled && (
            <div className="mb-6 bg-yellow/30 border border-[#e8d5c4] rounded-2xl px-5 py-4 text-dark text-sm">
              No worries — you can complete payment whenever you're ready.
            </div>
          )}

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block bg-yellow/50 text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Get started
            </span>
            <h1 className="font-serif text-4xl font-black text-dark leading-tight mb-3">
              Create your account
            </h1>
            <p className="text-muted">
              Fill in your details and we'll take you to payment. Your booking page will be live within 48 hours.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl border border-[#f0e0d0] shadow-warm p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>Your full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="James Miller"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="shopName" className={labelClass}>Shop name</label>
                <input
                  id="shopName"
                  name="shopName"
                  type="text"
                  required
                  value={form.shopName}
                  onChange={handleChange}
                  placeholder="Miller's Barbershop"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="james@millersbarbershop.co.uk"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="password" className={labelClass}>
                  Choose a password
                  <span className="ml-2 text-xs text-[#c4a48c] font-normal">for your admin dashboard</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                  <span className="ml-2 text-xs text-[#c4a48c] font-normal">so we can call to set you up</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+44 7700 900000"
                  className={inputClass}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-[#f0e0d0] pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-[#c0392b] disabled:opacity-50 text-white font-bold text-lg py-4 rounded-2xl transition-colors shadow-warm"
                >
                  {loading ? 'Preparing checkout…' : 'Create Account & Continue to Payment'}
                </button>
                <p className="text-center text-muted text-xs mt-4 leading-relaxed">
                  £49/month. Cancel any time. Secure payment via Stripe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// Wrap in Suspense because useSearchParams() needs it in Next.js 14
export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  )
}
