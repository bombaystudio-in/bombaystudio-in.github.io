import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LegacySection from "@/components/LegacySection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCategories from "@/components/ProjectCategories";
import PortfolioGallery from "@/components/PortfolioGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import FaqSection from "@/components/FaqSection";
import CostCalculatorSection from "@/components/CostCalculatorSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Projects Case Studies (Photography-led storytelling) */}
      <FeaturedProjects />

      {/* 3. Why Choose Bombay Studio */}
      <AboutSection />

      {/* 4. The 30-Year Legacy & Evolutionary Timeline (1992 - Today) */}
      <LegacySection />

      {/* 5. Our Turnkey Services */}
      <ServicesSection />

      {/* 6. Project Categories */}
      <ProjectCategories />

      {/* 7. Craftsmanship & Portfolio Gallery */}
      <PortfolioGallery />

      {/* 8. Testimonials & Google Reviews */}
      <TestimonialsSection />

      {/* 9. Interior Cost Calculator & Lead Capture */}
      <CostCalculatorSection />

      {/* 10. Studio Hierarchy & Team Preview */}
      <TeamPreviewSection />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Direct Contact Section */}
      <ContactSection />
    </div>
  );
}
