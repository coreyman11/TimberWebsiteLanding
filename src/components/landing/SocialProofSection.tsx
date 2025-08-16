import { Star } from "lucide-react"

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
  { name: "Retail Stores", icon: "🏪" },
  { name: "Restaurants", icon: "🍽️" },
  { name: "Salons & Spas", icon: "💇" },
  { name: "Coffee Shops", icon: "☕" },
  { name: "Boutiques", icon: "👗" },
  { name: "Bakeries", icon: "🧁" }
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industries We Serve */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Lightning-fast POS, smart analytics, and automated operations.
          </p>
          
          {/* Industry Icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-3 border border-border/50">
                  <span className="text-2xl">{industry.icon}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground text-center">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}