import { Header } from "@/components/navigation/Header"
import { Footer } from "@/components/landing/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Link } from "react-router-dom"

const Blog = () => {
  const featuredPost = {
    title: "The Future of Retail: 5 Trends Shaping 2024",
    excerpt: "Discover the key trends transforming retail operations and how forward-thinking businesses are adapting to meet modern customer expectations.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/placeholder.svg"
  }

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Inventory Management",
      excerpt: "Learn how artificial intelligence is helping retailers optimize stock levels, reduce waste, and improve customer satisfaction.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg"
    },
    {
      title: "Building Customer Loyalty in the Digital Age",
      excerpt: "Strategies for creating meaningful connections with customers through personalized experiences and data-driven insights.",
      author: "Emily Watson",
      date: "March 10, 2024", 
      readTime: "5 min read",
      category: "Customer Experience",
      image: "/placeholder.svg"
    },
    {
      title: "POS Security Best Practices for Small Business",
      excerpt: "Essential security measures every business owner should implement to protect customer data and prevent fraud.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read", 
      category: "Security",
      image: "/placeholder.svg"
    },
    {
      title: "Omnichannel Commerce: Connecting Online and Offline",
      excerpt: "How successful retailers are creating seamless experiences across all customer touchpoints.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Strategy",
      image: "/placeholder.svg"
    },
    {
      title: "The Complete Guide to Payment Processing",
      excerpt: "Everything you need to know about accepting payments in 2024, from mobile wallets to crypto.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Payments",
      image: "/placeholder.svg"
    },
    {
      title: "Scaling Your Business with Cloud-Based POS",
      excerpt: "Why cloud-based point of sale systems are essential for growing businesses and multi-location operations.",
      author: "Jennifer Liu",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Growth",
      image: "/placeholder.svg"
    }
  ]

  const categories = ["All", "Industry Insights", "Technology", "Customer Experience", "Security", "Strategy", "Payments", "Growth"]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Timber <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and industry news to help you grow your business and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button variant="default" className="w-fit group">
                  <Link to="/blog/digital-wallet-trends" className="flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"} 
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/blog/payment-processing-guide" className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <article>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">Payments</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    The Complete Guide to Payment Processing
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Everything you need to know about accepting payments in 2024, from mobile wallets to crypto.</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      Alex Thompson
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      March 3, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      9 min read
                    </div>
                  </div>
                </div>
              </article>
            </Link>
            
            <Link to="/blog/fraud-prevention" className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <article>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">Security</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    Advanced Fraud Prevention Strategies
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Comprehensive strategies to protect your business from payment fraud while maintaining excellent customer experience.</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      Sarah Chen
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      March 18, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      12 min read
                    </div>
                  </div>
                </div>
              </article>
            </Link>
            
            <Link to="/blog/digital-wallet-trends" className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <article>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">Technology</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    Digital Wallet Trends: The Future of Payments
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Explore the latest trends in digital wallet technology and how businesses can leverage mobile payments.</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      Emily Watson
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      March 15, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      10 min read
                    </div>
                  </div>
                </div>
              </article>
            </Link>
            
            {blogPosts.slice(3).map((post, index) => (
              <article key={index} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest insights and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button variant="cta">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;