import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    businessType: "",
    phone: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
    setFormData({
      name: "",
      email: "",
      company: "",
      businessType: "",
      phone: "",
      description: ""
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact-form" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your business and we'll get back to you within 24 hours
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type *</Label>
                <Select onValueChange={(value) => handleChange("businessType", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="retail">Retail Store</SelectItem>
                    <SelectItem value="cafe">Cafe/Coffee Shop</SelectItem>
                    <SelectItem value="bar">Bar/Nightclub</SelectItem>
                    <SelectItem value="beauty">Beauty/Salon</SelectItem>
                    <SelectItem value="fitness">Fitness/Gym</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Tell us about your business *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe your business needs, number of locations, current challenges, etc."
                rows={4}
                required
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit Request
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}