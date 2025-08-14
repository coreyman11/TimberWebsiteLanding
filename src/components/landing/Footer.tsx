import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Security", href: "#security" }
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Contact", href: "#contact" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Webinars", href: "#webinars" },
    { name: "Case Studies", href: "#cases" },
    { name: "Templates", href: "#templates" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Security", href: "#security" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates on new features, best practices, and industry insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gradient">CloudFlow</h2>
                <p className="text-muted-foreground mt-2">
                  Revolutionizing how teams work with AI-powered automation and intelligent workflows.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>hello@cloudflow.dev</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-10 h-10 bg-subtle rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 CloudFlow Inc. All rights reserved.
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">256</span>
                </div>
                <span>256-bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}