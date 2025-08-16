import { Header } from "@/components/navigation/Header"
import { HeroSection } from "@/components/landing/HeroSection"
import { SocialProofSection } from "@/components/landing/SocialProofSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { PricingSection } from "@/components/landing/PricingSection"
import { CTASection } from "@/components/landing/CTASection"
import { ContactForm } from "@/components/landing/ContactForm"
import { Footer } from "@/components/landing/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;