import { Card, CardContent } from "@/components/ui/card"
import { Droplets, GraduationCap, Stethoscope, Home } from "lucide-react"

export function ImpactSection() {
  const impacts = [
    {
      icon: Droplets,
      title: "Clean Water",
      description: "$25 provides clean water for one person for a month",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "$50 sponsors school supplies for one child for a semester",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "$100 provides medical care for a family of four",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Home,
      title: "Shelter",
      description: "$250 helps build emergency shelter for displaced families",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Impact</h3>
        <p className="text-gray-600 mb-6">See how your donation directly helps communities in need</p>
      </div>

      <div className="space-y-4">
        {impacts.map((impact, index) => {
          const Icon = impact.icon
          return (
            <Card key={index} className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className={`${impact.bgColor} p-2 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${impact.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{impact.title}</h4>
                    <p className="text-sm text-gray-600">{impact.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <h4 className="font-bold text-green-800 mb-2">100% of your donation goes to programs</h4>
          <p className="text-sm text-green-700">
            Administrative costs are covered by separate funding, ensuring maximum impact from your generosity.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
