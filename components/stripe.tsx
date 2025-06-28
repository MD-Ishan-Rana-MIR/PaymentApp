"use client"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import type { ReactNode } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

interface StripeProps {
  children: ReactNode
  options: any
  className?: string
}

export function Stripe({ children, options, className }: StripeProps) {
  return (
    <Elements stripe={stripePromise} options={options} className={className}>
      {children}
    </Elements>
  )
}
