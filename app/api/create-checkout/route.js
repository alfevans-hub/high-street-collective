import Stripe from 'stripe'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY)
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req) {
  try {
    const { fullName, shopName, email, password, phone } = await req.json()

    if (!fullName || !shopName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stripe = getStripe()
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'

    // Create a Stripe customer so their details are attached in the dashboard
    const customer = await stripe.customers.create({
      name: fullName,
      email,
      phone: phone || undefined,
      metadata: {
        shop_name: shopName,
        // password stored in Stripe metadata so the setup team can create their account
        initial_password: password,
      },
    })

    // Create a checkout session for £49/month recurring
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            recurring: { interval: 'month' },
            product_data: {
              name: 'High Street Collective',
              description: 'Your barbershop booking page, live queue, and admin dashboard.',
            },
            unit_amount: 4900, // £49.00
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/welcome?shop=${encodeURIComponent(shopName)}&name=${encodeURIComponent(fullName)}`,
      cancel_url: `${appUrl}/signup?cancelled=1`,
      customer_email: undefined, // already set via customer object
      metadata: {
        shop_name: shopName,
        full_name: fullName,
        phone: phone || '',
      },
    })

    // Send notification email — non-blocking, don't fail the checkout if email fails
    getResend().emails.send({
      from: 'High Street Collective <onboarding@resend.dev>',
      to: 'hello@highstreetcollective.co.uk',
      subject: `New signup: ${shopName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; background: #FFF8F0; padding: 32px; border-radius: 12px; border: 1px solid #e8d5c4;">
          <h2 style="color: #2C1810; margin-top: 0;">New signup 🎉</h2>
          <p style="color: #6B4C3B;">Someone just signed up and is heading to Stripe checkout.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #6B4C3B; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #2C1810;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B4C3B;"><strong>Shop name</strong></td><td style="padding: 8px 0; color: #2C1810;">${shopName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B4C3B;"><strong>Email</strong></td><td style="padding: 8px 0; color: #2C1810;"><a href="mailto:${email}" style="color: #D94F3D;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6B4C3B;"><strong>Phone</strong></td><td style="padding: 8px 0; color: #2C1810;">${phone || '—'}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #6B4C3B; font-size: 14px;">
            View in Stripe: <a href="https://dashboard.stripe.com/test/customers/${customer.id}" style="color: #D94F3D;">Customer ${customer.id}</a>
          </p>
        </div>
      `,
    }).catch(err => console.error('Notification email failed:', err))

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: err.message || 'Something went wrong' }, { status: 500 })
  }
}
