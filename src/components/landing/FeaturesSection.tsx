import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import collaborationIcon from "@/assets/icon-collaboration.jpg"
import automationIcon from "@/assets/icon-automation.jpg"
import analyticsIcon from "@/assets/icon-analytics.jpg"

const features = [
  {
    icon: collaborationIcon,
    title: "Smart Customer Management",
    description: "Transform every interaction into insights. Track customer behavior, predict preferences, and deliver personalized experiences that drive loyalty.",
    benefits: [
      "67% faster customer service resolution",
      "Automated loyalty program management",
      "Real-time customer journey tracking",
      "2.3x increase in customer retention"
    ]
  },
  {
    icon: automationIcon,
    title: "Intelligent Inventory",
    description: "Never run out of stock or overorder again. AI-powered forecasting and automated reordering keep your inventory optimized 24/7.",
    benefits: [
      "Predictive stock level alerts",
      "Supplier performance analytics",
      "Automated purchase order generation",
      "45% reduction in stockouts"
    ]
  },
  {
    icon: analyticsIcon,
    title: "Lightning-Fast POS",
    description: "Process transactions in seconds with our intuitive interface. Accept any payment method and watch your checkout lines disappear.",
    benefits: [
      "Sub-3 second transaction processing",
      "Apple Pay, Google Pay & contactless",
      "Real-time payment failure recovery",
      "89% checkout completion rate"
    ]
  }
]

const comparisonFeatures = [
  { feature: "Lightning-Fast POS", timber: true, competitor1: false, competitor2: true },
  { feature: "Smart Inventory Management", timber: true, competitor1: true, competitor2: false },
  { feature: "Customer Analytics", timber: true, competitor1: false, competitor2: false },
  { feature: "Multi-Payment Support", timber: true, competitor1: false, competitor2: true },
  { feature: "Real-time Reporting", timber: true, competitor1: true, competitor2: true },
  { feature: "24/7 Support", timber: true, competitor1: false, competitor2: false },
  { feature: "API Integrations", timber: true, competitor1: false, competitor2: false },
  { feature: "Mobile POS", timber: true, competitor1: false, competitor2: true }
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Industries We
            <span className="text-gradient"> Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solution is designed for multiple industries, providing specialized tools 
            for each sector's unique needs.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              {/* Icon */}
              <div className="relative mb-8 mx-auto w-24 h-24">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              See How We Compare to the Competition
            </h3>
            <p className="text-muted-foreground">
              Why leading businesses choose Timber POS over alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 font-semibold">Features</th>
                  <th className="text-center py-4 px-2">
                    <div className="font-bold text-primary">Timber</div>
                    <div className="text-sm text-muted-foreground">Our Platform</div>
                  </th>
                  <th className="text-center py-4 px-2">
                    <div className="font-semibold">Competitor A</div>
                    <div className="text-sm text-muted-foreground">Traditional Tool</div>
                  </th>
                  <th className="text-center py-4 px-2">
                    <div className="font-semibold">Competitor B</div>
                    <div className="text-sm text-muted-foreground">Legacy Platform</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-2 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-2">
                      {row.timber ? (
                        <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                      ) : (
                        <div className="w-6 h-6 bg-muted rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-2">
                      {row.competitor1 ? (
                        <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : (
                        <div className="w-6 h-6 bg-muted rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-2">
                      {row.competitor2 ? (
                        <CheckCircle className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : (
                        <div className="w-6 h-6 bg-muted rounded-full mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button variant="cta" size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}