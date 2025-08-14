import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=64&h=64&fit=crop&crop=face",
    content: "CloudFlow reduced our manual processes by 80%. The ROI was evident within the first month. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "Innovation Labs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "The AI automation capabilities are game-changing. We've seen a 300% increase in productivity while maintaining 99.9% accuracy. Best investment we've made this year.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Head of Operations",
    company: "ScaleUp Dynamics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    content: "Implementation was seamless. The platform integrates perfectly with our existing tools. Customer support is exceptional - they truly care about our success.",
    rating: 5
  }
]

const companies = [
  { name: "TechFlow", logo: "TF" },
  { name: "Innovation Labs", logo: "IL" },
  { name: "ScaleUp", logo: "SU" },
  { name: "DataCore", logo: "DC" },
  { name: "FlowTech", logo: "FT" },
  { name: "AutoCorp", logo: "AC" }
]

export function SocialProofSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of companies already transforming their workflows
          </p>
          
          {/* Company Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-12 h-12 bg-subtle rounded-lg flex items-center justify-center border border-border">
                  <span className="font-bold text-sm text-muted-foreground">{company.logo}</span>
                </div>
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

        {/* Security & Compliance Badges */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Enterprise-Grade Security & Compliance
          </h3>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">I</span>
              </div>
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">256</span>
              </div>
              <span className="text-sm font-medium">256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}