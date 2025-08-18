import { Header } from "@/components/navigation/Header"
import { Footer } from "@/components/landing/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Users, Target, Zap } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make starts with how it benefits our customers and their success."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: Zap,
      title: "Reliability",
      description: "Your business depends on us, and we take that responsibility seriously with 99.9% uptime."
    }
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      description: "15+ years in retail technology, former VP at Square"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO",
      description: "Former lead engineer at Shopify, expert in scalable systems"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      description: "Product leader with deep understanding of retail operations"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're building the future of{" "}
              <span className="text-gradient">retail technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020, Timber has grown from a small startup to powering over 10,000 
              businesses worldwide. Our mission is to make powerful retail technology accessible 
              to businesses of all sizes.
            </p>
            <Button variant="cta" size="lg" className="group">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  It all started when our founder, Sarah Chen, was helping her family's restaurant 
                  modernize their operations. Frustrated with clunky, expensive POS systems, she 
                  envisioned a better way.
                </p>
                <p>
                  Today, Timber serves thousands of businesses across retail, hospitality, and 
                  service industries. From corner cafes to enterprise chains, we've built a 
                  platform that scales with ambition.
                </p>
                <p>
                  Our commitment remains unchanged: powerful technology that's intuitive to use, 
                  priced fairly, and backed by exceptional support.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 text-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Businesses</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Transactions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced leaders driving Timber's vision forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-background border border-border">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-semibold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;