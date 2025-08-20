import { ArrowRight, CheckCircle, Zap, Brain, Target, Shield, BarChart3, Cpu } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"

const features = [
  {
    icon: Brain,
    title: "Smart Customer Management",
    description: "Transform every interaction into insights. Track customer behavior, predict preferences, and deliver personalized experiences that drive loyalty.",
    benefits: [
      "67% faster customer service resolution",
      "Automated loyalty program management", 
      "Real-time customer journey tracking",
      "2.3x increase in customer retention"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "blue"
  },
  {
    icon: Target,
    title: "Intelligent Inventory",
    description: "Never run out of stock or overorder again. AI-powered forecasting and automated reordering keep your inventory optimized 24/7.",
    benefits: [
      "Predictive stock level alerts",
      "Supplier performance analytics",
      "Automated purchase order generation", 
      "45% reduction in stockouts"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    glowColor: "purple"
  },
  {
    icon: Zap,
    title: "Lightning-Fast POS",
    description: "Process transactions in seconds with our intuitive interface. Accept any payment method and watch your checkout lines disappear.",
    benefits: [
      "Sub-3 second transaction processing",
      "Apple Pay, Google Pay & contactless",
      "Real-time payment failure recovery",
      "89% checkout completion rate"
    ],
    gradient: "from-green-500/20 to-emerald-500/20", 
    glowColor: "green"
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
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-POWERED TECHNOLOGY</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">SUPERCHARGE YOUR POS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One platform that replaces all your business software with cutting-edge AI technology
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Tech Icon */}
                  <div className="relative mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-primary/20`}>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className={`absolute inset-0 rounded-2xl bg-${feature.glowColor}-500/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Tech Benefits */}
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/30 group-hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stats Bar */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Performance</span>
                      <span>{95 + index * 2}% Optimized</span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-primary to-primary-foreground rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-primary/30`}
                        style={{ width: `${95 + index * 2}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Enterprise-grade security & 99.9% uptime guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}