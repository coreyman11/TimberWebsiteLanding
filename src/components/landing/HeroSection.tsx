import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/timber-hero-dashboard.png"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-24">
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
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
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
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Timber POS Dashboard Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-border animate-scale-in animate-float-gentle" 
                style={{ animationDelay: '0.6s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}