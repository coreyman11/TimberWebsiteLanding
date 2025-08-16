import { ArrowRight, CheckCircle, Users, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 10,000+ businesses who have already streamlined their operations with Timber POS. 
            Start your free trial today and experience lightning-fast transactions.
          </p>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="whitespace-nowrap">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              No credit card required • 14-day free trial • Setup in 2 minutes
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Businesses</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold">67%</div>
                <div className="text-sm text-muted-foreground">Faster Checkout</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold">3s</div>
                <div className="text-sm text-muted-foreground">Transaction Speed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Demo CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">See Timber POS in Action</h3>
            <p className="text-muted-foreground mb-6">
              Watch a personalized demo and discover how Timber POS can streamline your business operations.
            </p>
            <Button variant="outline" size="lg" className="w-full">
              Schedule Live Demo
            </Button>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-1" />
                <span>15-minute demo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-1" />
                <span>Personalized walkthrough</span>
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Custom implementation, dedicated support, and enterprise-grade security for large organizations.
            </p>
            <Button variant="social" size="lg" className="w-full">
              Contact Sales Team
            </Button>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-1" />
                <span>Custom pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-accent mr-1" />
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Trust Signal */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <CheckCircle className="w-5 h-5 text-accent mr-2" />
            <span className="text-sm font-medium">
              Risk-free trial • Cancel anytime • No setup fees
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}