import { Header } from "@/components/navigation/Header"
import { Footer } from "@/components/landing/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import { Link } from "react-router-dom"

interface BlogPostProps {
  title: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  excerpt: string
}

export const BlogPost = ({ title, content, author, date, readTime, category, excerpt }: BlogPostProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <Badge variant="secondary" className="mb-4">{category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{excerpt}</p>
          
          <div className="flex items-center justify-between border-t border-b border-border py-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime}
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/payment-processing-guide" className="group">
              <div className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
                <Badge variant="outline" className="mb-3">Guide</Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  The Complete Guide to Payment Processing
                </h3>
                <p className="text-sm text-muted-foreground">Everything you need to know about modern payment systems...</p>
              </div>
            </Link>
            <Link to="/blog/fraud-prevention" className="group">
              <div className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
                <Badge variant="outline" className="mb-3">Security</Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  Advanced Fraud Prevention Strategies
                </h3>
                <p className="text-sm text-muted-foreground">Essential security measures every business owner should implement...</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};