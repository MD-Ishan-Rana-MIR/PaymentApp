import { Users, Globe, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Together We Can Change Lives</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of donors making a real impact in communities worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50K+</h3>
              <p className="opacity-90">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25</h3>
              <p className="opacity-90">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">$2M+</h3>
              <p className="opacity-90">Donated This Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
