import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/timber-hero-dashboard.png"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-subtle border border-border mb-8">
              <div className="w-2 h-2 bg-accent rounded-full mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by Industry Leaders
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Modern
              <span className="text-gradient"> POS</span> 
              <br />
              One Platform That Replaces
              <span className="text-gradient"> All Your Business Software</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Experience unified business management. From customer relationships to inventory control, everything works together seamlessly. Lightning-fast POS, smart analytics, and automated operations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">67%</div>
                <div className="text-sm text-muted-foreground">Faster Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Active Businesses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3s</div>
                <div className="text-sm text-muted-foreground">Transaction Speed</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-hero" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Timber POS Dashboard Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-sm font-medium">Live Updates</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-medium text-primary">+23.4%</div>
              <div className="text-xs text-muted-foreground">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}