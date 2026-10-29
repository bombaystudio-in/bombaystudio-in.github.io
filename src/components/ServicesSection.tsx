"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import {
  Building2,
  Compass,
  KeyRound,
  Hammer,
  Home,
  Briefcase,
  Armchair,
  Eye,
  ClipboardCheck,
  BarChart3,
  Sun,
  ArrowUpRight,
} from "lucide-react";
import CarouselControls from "./CarouselControls";

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "KeyRound":
        return <KeyRound className="w-5 h-5" />;
      case "Sun":
        return <Sun className="w-5 h-5" />;
      case "Hammer":
        return <Hammer className="w-5 h-5" />;
      case "Home":
        return <Home className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      case "Armchair":
        return <Armchair className="w-5 h-5" />;
      case "Eye":
        return <Eye className="w-5 h-5" />;
      case "ClipboardCheck":
        return <ClipboardCheck className="w-5 h-5" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  // Double the dataset for smooth, infinite marquee motion
  const marqueeServices = [...SERVICES_DATA, ...SERVICES_DATA];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our Specialized <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            From Vastu-compliant architectural planning to full turnkey interior master builds across Mumbai and Alibaug.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Moving Track */}
      <div className="relative w-full">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar py-2 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
        >
          <div
            className="animate-marquee flex gap-4"
            style={{ animationPlayState: isPaused ? "paused" : undefined }}
          >
            {marqueeServices.map((service, index) => (
              <Link
                key={`${service.id}-${index}`}
                href={`/services/${service.id}`}
                className="w-[200px] sm:w-[220px] lg:w-[240px] shrink-0 p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#181818] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5 mb-3.5">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors">
                    Explore Service
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-[#FCF6BA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Controls Below Section */}
      <CarouselControls
        isPaused={isPaused}
        onTogglePause={() => setIsPaused((prev) => !prev)}
        onPrev={() => scroll("left")}
        onNext={() => scroll("right")}
        prevLabel="Scroll Left"
        nextLabel="Scroll Right"
        ctaText="View All Specialized Services"
        ctaHref="/services"
      />
    </section>
  );
}
