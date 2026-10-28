"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Home,
  Store,
  Utensils,
  Stethoscope,
  Scissors,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

export default function ProjectCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const categories = [
    {
      name: "Luxury Residences",
      icon: Home,
      count: "Turnkey Execution",
      desc: "Bespoke high-end residences, duplexes and penthouses across Mumbai.",
    },
    {
      name: "Modern Apartments",
      icon: Building,
      count: "2BHK · 3BHK · 4BHK",
      desc: "Complete interior transformations tailored to high-rise urban living.",
    },
    {
      name: "Private Villas",
      icon: Home,
      count: "Architecture & Build",
      desc: "Expansive private seaside and countryside estates across Mumbai & Alibaug.",
    },
    {
      name: "Corporate Spaces",
      icon: Briefcase,
      count: "Commercial Fitouts",
      desc: "Acoustic corporate executive offices and modern workspace hubs.",
    },
    {
      name: "Retail Boutiques",
      icon: Store,
      count: "Experiential Design",
      desc: "High-end retail showrooms, flagship studios, and bespoke boutiques.",
    },
    {
      name: "Hospitality & Dining",
      icon: Utensils,
      count: "Atmospheric Interiors",
      desc: "Artisanal cafes, curated dining venues, and hospitality spaces.",
    },
  ];

  // Double the list for seamless continuous infinite marquee
  const marqueeCategories = [...categories, ...categories];

  return (
    <section id="categories" className="py-8 sm:py-10 lg:py-12 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Project <span className="gold-gradient-text">Typologies</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            Comprehensive architectural and turnkey design-build execution across diverse property categories.
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
            {marqueeCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={`${cat.name}-${idx}`}
                  className="w-[240px] sm:w-[280px] lg:w-[300px] shrink-0 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#1C1C1C] px-2 py-0.5 rounded-full border border-white/10">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[#A1A1AA] text-xs font-light leading-relaxed mb-3 line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[9px] text-[#A1A1AA] uppercase tracking-wider font-mono">
                      Typology #{(idx % categories.length) + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Carousel Controls Below Section */}
      <div className="flex items-center justify-center gap-2.5 mt-4 sm:mt-5 flex-wrap">
        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className={`p-2 rounded-full border transition-all ${
            isPaused
              ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
              : "bg-[#121212] text-[#A1A1AA] hover:text-white border-white/10"
          }`}
          title={isPaused ? "Resume Auto-Scroll" : "Pause Auto-Scroll"}
          aria-label={isPaused ? "Resume Auto-Scroll" : "Pause Auto-Scroll"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5 fill-black" /> : <Pause className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <Link
          href="/#contact"
          className="group inline-flex items-center gap-1.5 btn-gold-shiny text-xs uppercase tracking-wider px-4 py-2 rounded-full"
        >
          <span>Consult On Project</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
