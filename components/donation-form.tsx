"use client"

import type React from "react"

import { useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Heart, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stripe } from "@/components/stripe"

const PRESET_AMOUNTS = [25, 50, 100, 250, 500]

export function DonationForm() {
  /* ---------- Amount state ---------- */
  const [selectedAmount, setSelectedAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isCustom, setIsCustom] = useState(false)

  const finalAmount = isCustom ? Number.parseFloat(customAmount) || 0 : selectedAmount

  /* ---------- Handlers ---------- */
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount("")
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setIsCustom(true)
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setSelectedAmount(numValue)
    }
  }

  /* ---------- UI ---------- */
  return (
    <Card className="w-full border border-black mx-auto shadow-lg">
      <CardHeader className="text-center">
        <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Heart className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>Choose your donation amount and payment method</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* -------- Amount selection -------- */}
        <div>
          <Label className="text-base font-medium mb-4 block">Select Amount</Label>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {PRESET_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount && !isCustom ? "default" : "outline"}
                className={`h-12 ${selectedAmount === amount && !isCustom
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Custom Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => handleCustomAmount(e.target.value)}
                className="pl-8"
                min="1"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* -------- Total -------- */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">Total Donation:</span>
            <span className="text-2xl font-bold text-green-600">${finalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* -------- Stripe Elements provider -------- */}
        <Stripe
          options={{
            mode: "payment",
            amount: Math.round(finalAmount * 100), // cents
            currency: "usd",
            appearance: {
              theme: "stripe",
              variables: { colorPrimary: "#16a34a" },
            },
          }}
        >
          {/* ALL payment-related hooks live inside this component */}
          <PaymentSection finalAmount={finalAmount} />
        </Stripe>

        <div className="text-center text-sm text-gray-500">
          <p>🔒 Your payment is secure and encrypted</p>
          <p className="mt-1">Supports Apple Pay, Google Pay, and all major cards</p>
        </div>
      </CardContent>
    </Card>
  )
}

/* -------------------------------------------------------------------------- */
/*                            Payment inner section                           */
/* -------------------------------------------------------------------------- */
function PaymentSection({ finalAmount }: { finalAmount: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: `${window.location.origin}/success` },
      })
      if (error) console.error("Payment error:", error)
    } catch (err) {
      console.error("Payment exception:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full  ">
      <div>
        <Label className="text-base font-medium mb-4 block flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Payment Method
        </Label>
        <PaymentElement
          options={{
            layout: "tabs",
            paymentMethodOrder: ["card", "apple_pay", "google_pay"],
          }}
        />
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing || finalAmount <= 0}
        className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium"
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            Processing…
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Donate ${finalAmount.toFixed(2)}
          </div>
        )}
      </Button>
    </form>
  )
}
