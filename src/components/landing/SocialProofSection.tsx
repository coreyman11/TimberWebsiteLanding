import { Star, Store, UtensilsCrossed, Scissors, Coffee, ShirtIcon, Cookie, Zap, TrendingUp, Shield } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Store Manager",
    company: "Urban Retail Co.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=64&h=64&fit=crop&crop=face",
    content: "Timber POS reduced our checkout times by 67%. The integrated inventory management has eliminated stockouts completely. Our customers love the seamless payment experience.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Restaurant Owner",
    company: "Bistro Verde",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "The speed is incredible - 3-second transactions even during peak hours. Real-time inventory tracking has revolutionized our kitchen operations. Best investment we've made.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Salon Owner",
    company: "Luxe Beauty Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "Implementation was effortless. The appointment booking integrates perfectly with payments. Our staff loves how intuitive it is and customers appreciate the contactless options.",
    rating: 5
  }
]

const industries = [
  { 
    name: "Retail Stores", 
    icon: Store, 
    gradient: "from-blue-500/20 to-cyan-500/20",
    stats: "98% faster checkout",
    color: "text-blue-500"
  },
  { 
    name: "Restaurants", 
    icon: UtensilsCrossed, 
    gradient: "from-orange-500/20 to-red-500/20",
    stats: "45% order accuracy boost",
    color: "text-orange-500"
  },
  { 
    name: "Salons & Spas", 
    icon: Scissors, 
    gradient: "from-pink-500/20 to-purple-500/20",
    stats: "67% booking efficiency",
    color: "text-pink-500"
  },
  { 
    name: "Coffee Shops", 
    icon: Coffee, 
    gradient: "from-amber-500/20 to-yellow-500/20",
    stats: "3s average transaction",
    color: "text-amber-500"
  },
  { 
    name: "Boutiques", 
    icon: ShirtIcon, 
    gradient: "from-emerald-500/20 to-green-500/20",
    stats: "89% inventory optimization",
    color: "text-emerald-500"
  },
  { 
    name: "Bakeries", 
    icon: Cookie, 
    gradient: "from-violet-500/20 to-indigo-500/20",
    stats: "24/7 automated operations",
    color: "text-violet-500"
  }
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industries We Serve */}
        <div className="relative text-center mb-20">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-POWERED FOR EVERY INDUSTRY</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Industries We Serve</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Lightning-fast POS, smart analytics, and automated operations tailored for your business
            </p>
            
            {/* Industry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 text-center">
                      {/* Icon Container */}
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.gradient} border border-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${industry.color}`} />
                      </div>
                      
                      {/* Industry Name */}
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                        {industry.name}
                      </h3>
                      
                      {/* Performance Stats */}
                      <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {industry.stats}
                      </div>

                      {/* Tech Indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 border border-border/20">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-500">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Businesses</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 border border-border/20">
                <Zap className="w-6 h-6 text-yellow-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-yellow-500">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 border border-border/20">
                <Shield className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-blue-500">Bank-grade</div>
                  <div className="text-sm text-muted-foreground">Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}