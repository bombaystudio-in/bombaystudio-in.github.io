import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import ProjectCategories from "@/components/ProjectCategories";
import AboutSection from "@/components/AboutSection";
import LegacySection from "@/components/LegacySection";
import PortfolioGallery from "@/components/PortfolioGallery";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import CostCalculatorSection from "@/components/CostCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Section - Brand Positioning & Consult CTAs */}
      <HeroSection />

      {/* 2. Featured Projects Teaser - Curated Residences (Links to /projects) */}
      <FeaturedProjects />

      {/* 3. Specialized Services Teaser - Turnkey Pillars (Links to /services) */}
      <ServicesSection />

      {/* 4. Project Typologies Teaser - Categories Carousel (Links to /projects) */}
      <ProjectCategories />

      {/* 5. Why Choose Bombay Studio - Core Studio Standards */}
      <AboutSection />

      {/* 6. 30-Year Origin Legacy Teaser (Links to /legacy) */}
      <LegacySection isTeaser={true} />

      {/* 7. Craftsmanship & Site Work Teaser (Links to /portfolio) */}
      <PortfolioGallery />

      {/* 8. Studio Team & Leadership Teaser (Links to /team) */}
      <TeamPreviewSection />

      {/* 9. Interior Cost Calculator - Interactive Budget Estimator */}
      <CostCalculatorSection />

      {/* 10. Direct Homeowner Stories Teaser (Links to /testimonials) */}
      <TestimonialsSection />

      {/* 11. FAQ Teaser - Top 3 Key Questions (Links to /faq) */}
      <FaqSection limit={3} showAllLink={true} />

      {/* 12. Direct Contact Section - Consultation & Studio Line */}
      <ContactSection />
    </div>
  );
}
