import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCategories from "@/components/ProjectCategories";
import PortfolioGallery from "@/components/PortfolioGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MeetFounderSection from "@/components/MeetFounderSection";
import FaqSection from "@/components/FaqSection";
import CostCalculatorSection from "@/components/CostCalculatorSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Bombay Studio */}
      <AboutSection />

      {/* 3. Our Services */}
      <ServicesSection />

      {/* 4. Featured Projects Case Studies */}
      <FeaturedProjects />

      {/* 5. Project Categories */}
      <ProjectCategories />

      {/* 6. Portfolio Gallery */}
      <PortfolioGallery />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Testimonials & Google Reviews */}
      <TestimonialsSection />

      {/* 9. Before After Interactive Slider */}
      <BeforeAfterSlider />

      {/* 10. Meet The Founder (Ar. Aakhir Choudhary) */}
      <MeetFounderSection />

      {/* 11. Interior Cost Calculator & Lead Capture */}
      <CostCalculatorSection />

      {/* 12. FAQ */}
      <FaqSection />

      {/* 13. Contact Section */}
      <ContactSection />
    </div>
  );
}
