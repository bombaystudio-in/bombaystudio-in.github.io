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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";

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
    <section id="services" className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section Header with Manual Scroll Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Comprehensive Architectural Capabilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Specialized <span className="gold-gradient-text">Services</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-xl font-light mt-2">
              From Vastu-compliant architectural planning to full turnkey interior master builds across Mumbai and Alibaug.
            </p>
          </div>

          {/* Desktop Arrow Controls & CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className={`p-2.5 rounded-full border transition-all ${
                isPaused
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
                  : "bg-[#121212] text-[#A1A1AA] hover:text-white border-white/10"
              }`}
              title={isPaused ? "Resume Auto-Scroll" : "Pause Auto-Scroll"}
              aria-label={isPaused ? "Resume Auto-Scroll" : "Pause Auto-Scroll"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-black" /> : <Pause className="w-4 h-4" />}
            </button>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-5 py-3 rounded-full"
            >
              <span>Consult On Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Moving Track */}
      <div className="relative w-full">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar py-3 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
        >
          <div
            className="animate-marquee flex gap-5"
            style={{ animationPlayState: isPaused ? "paused" : undefined }}
          >
            {marqueeServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="w-[280px] sm:w-[320px] shrink-0 p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#A1A1AA] bg-white/5 px-2 py-0.5 rounded">
                      0{(index % SERVICES_DATA.length) + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#A1A1AA] text-xs leading-relaxed font-light mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="pt-3.5 border-t border-white/10 flex flex-wrap gap-1.5 mb-3.5">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C1C] text-[#A1A1AA] border border-white/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
