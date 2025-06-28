import { DonationForm } from "@/components/donation-form"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 border border-black ">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your donation helps us provide clean water, education, and healthcare to communities in need around the
                world.
              </p>
            </div>
            <div className=" w-full overflow-y-auto ">
              <DonationForm />
              <ImpactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
