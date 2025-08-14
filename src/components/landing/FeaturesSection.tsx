import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import collaborationIcon from "@/assets/icon-collaboration.jpg"
import automationIcon from "@/assets/icon-automation.jpg"
import analyticsIcon from "@/assets/icon-analytics.jpg"

const features = [
  {
    icon: collaborationIcon,
    title: "Smart Team Collaboration",
    description: "Seamlessly connect your entire team with real-time collaboration tools that adapt to your workflow. Share insights, track progress, and make decisions faster than ever.",
    benefits: [
      "Real-time document collaboration",
      "Intelligent task assignment",
      "Cross-team communication hub",
      "Mobile-first design"
    ]
  },
  {
    icon: automationIcon,
    title: "AI-Powered Automation",
    description: "Let our advanced AI handle repetitive tasks while you focus on what matters. Our machine learning algorithms continuously optimize your processes for maximum efficiency.",
    benefits: [
      "Zero-code workflow builder",
      "Smart process optimization",
      "Predictive task scheduling",
      "Custom automation templates"
    ]
  },
  {
    icon: analyticsIcon,
    title: "Advanced Analytics & Insights",
    description: "Turn your data into actionable insights with comprehensive analytics dashboards. Track performance, identify bottlenecks, and make data-driven decisions with confidence.",
    benefits: [
      "Real-time performance metrics",
      "Customizable reporting",
      "Predictive analytics",
      "ROI tracking & optimization"
    ]
  }
]

const comparisonFeatures = [
  { feature: "AI-Powered Automation", cloudflow: true, competitor1: false, competitor2: true },
  { feature: "Real-time Collaboration", cloudflow: true, competitor1: true, competitor2: false },
  { feature: "Advanced Analytics", cloudflow: true, competitor1: false, competitor2: false },
  { feature: "Zero-code Workflows", cloudflow: true, competitor1: false, competitor2: true },
  { feature: "Enterprise Security", cloudflow: true, competitor1: true, competitor2: true },
  { feature: "24/7 Support", cloudflow: true, competitor1: false, competitor2: false },
  { feature: "Custom Integrations", cloudflow: true, competitor1: false, competitor2: false },
  { feature: "Mobile-first Design", cloudflow: true, competitor1: false, competitor2: true }
]

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to 
            <span className="text-gradient"> Scale Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CloudFlow combines powerful automation, intelligent analytics, and seamless collaboration 
            in one unified platform designed for modern teams.
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
              Why leading companies choose CloudFlow over alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 font-semibold">Features</th>
                  <th className="text-center py-4 px-2">
                    <div className="font-bold text-primary">CloudFlow</div>
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
                      {row.cloudflow ? (
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