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

      {/* 2. Direct Client Feedback & Verified Homeowner Stories (Links to /testimonials) */}
      <TestimonialsSection />

      {/* 3. Featured Projects Teaser - Curated Portfolio (Links to /projects) */}
      <FeaturedProjects />

      {/* 4. Specialized Services Teaser - Turnkey Pillars (Links to /services) */}
      <ServicesSection />

      {/* 5. Project Typologies Teaser - Categories Carousel (Links to /projects) */}
      <ProjectCategories />

      {/* 6. Why Choose Bombay Studio - Core Studio Standards */}
      <AboutSection />

      {/* 7. 30-Year Origin Legacy Teaser (Links to /legacy) */}
      <LegacySection isTeaser={true} />

      {/* 8. Craftsmanship & Site Work Teaser (Links to /portfolio) */}
      <PortfolioGallery />

      {/* 9. Studio Team & Leadership Teaser (Links to /team) */}
      <TeamPreviewSection />

      {/* 10. Interior Cost Calculator - Interactive Budget Estimator */}
      <CostCalculatorSection />

      {/* 11. FAQ Teaser - Top 3 Key Questions (Links to /faq) */}
      <FaqSection limit={3} showAllLink={true} />

      {/* 12. Direct Contact Section - Consultation & Studio Line */}
      <ContactSection />
    </div>
  );
}
