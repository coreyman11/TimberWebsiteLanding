import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses getting started with POS",
    features: [
      "Up to 3 terminals",
      "Basic inventory tracking",
      "Sales reporting",
      "Email support",
      "Mobile POS app",
      "Standard payment processing"
    ],
    limitations: [
      "Limited to 1,000 transactions/month",
      "Basic reports only"
    ],
    cta: "Contact Sales",
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses that need advanced POS features",
    features: [
      "Up to 10 terminals",
      "Advanced inventory management",
      "Customer loyalty programs",
      "Priority support",
      "Mobile POS & tablet support",
      "All payment integrations",
      "Custom reporting templates",
      "Staff management tools",
      "API access"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: true
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions for enterprise retail chains and franchises",
    features: [
      "Unlimited terminals",
      "Custom POS development",
      "Enterprise analytics suite",
      "24/7 dedicated support",
      "All platform features",
      "Custom integrations",
      "Multi-location management",
      "SLA guarantees",
      "Dedicated success manager",
      "On-premise deployment options"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent 
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business size and needs. All plans include a 14-day free trial with no credit card required.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-card border border-border rounded-lg p-1">
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground">
              Annual
            </button>
            <div className="ml-2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              Save 20%
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105 ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold">Custom</div>
                  )}
                </div>
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Limitations
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-sm text-muted-foreground">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing adjustments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What happens after the free trial?</h4>
              <p className="text-muted-foreground text-sm">
                Your free trial lasts 14 days with full access to Professional features. 
                No credit card required to start.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you offer discounts for nonprofits?</h4>
              <p className="text-muted-foreground text-sm">
                Yes! We offer special pricing for qualified nonprofits and educational institutions. 
                Contact our sales team for details.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and can arrange annual invoicing 
                for Enterprise customers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-card border border-border rounded-2xl">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-primary mr-2" />
            <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Join thousands of businesses already streamlining operations with Timber POS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}