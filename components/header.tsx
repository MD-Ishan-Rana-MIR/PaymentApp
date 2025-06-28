import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Hope Foundation</h1>
              <p className="text-sm text-gray-600">Building better futures</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Impact
            </a>
            <Button variant="outline" className="bg-white text-green-600 border-green-600 hover:bg-green-50">
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
