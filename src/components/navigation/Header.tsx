import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import wolfLogo from "@/assets/wolf-logo.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/m5B5P3Kc/wolf-logo.png" 
              alt="Wolf Logo" 
              className="h-8 w-8"
            />
            <span className="text-sm text-muted-foreground font-medium">
              Powered by Timber
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact-form')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('contact-form')}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => scrollToSection('contact-form')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
