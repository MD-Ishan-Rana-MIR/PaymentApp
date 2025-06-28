import { CheckCircle, Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-800">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div>
            <p className="text-lg font-medium text-gray-900 mb-2">Your donation was successful!</p>
            <p className="text-gray-600">You will receive a confirmation email shortly with your donation receipt.</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Your Impact</span>
            </div>
            <p className="text-sm text-green-700">
              Your generosity will directly help provide clean water, education, and healthcare to communities in need.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Button variant="outline" className="w-full bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
              Share Your Impact
            </Button>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t">
            <p>Questions about your donation?</p>
            <p>Contact us at info@hopefoundation.org</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
