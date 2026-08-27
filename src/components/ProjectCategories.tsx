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
  Sparkles,
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
      name: "Luxury Homes",
      icon: Home,
      count: "18+ Completed",
      desc: "Multi-storey duplexes and high-end penthouses across Worli & Bandra.",
    },
    {
      name: "Apartments",
      icon: Building,
      count: "24+ Completed",
      desc: "2BHK & 3BHK high-rise homes at Kalpataru, Lodha & Oberoi developments.",
    },
    {
      name: "Villas",
      icon: Home,
      count: "8+ Completed",
      desc: "Sprawling private seaside estates in Juhu, Alibaug, Lonavala & Goa.",
    },
    {
      name: "Corporate Offices",
      icon: Briefcase,
      count: "12+ Completed",
      desc: "Acoustic corporate HQs & tech hubs in BKC & Lower Parel.",
    },
    {
      name: "Retail Boutiques",
      icon: Store,
      count: "9+ Completed",
      desc: "Boutique fashion showrooms & flagship jewellery stores.",
    },
    {
      name: "Fine Dining & Bars",
      icon: Utensils,
      count: "7+ Completed",
      desc: "Fine dining bistros, speakeasy bars & artisanal cafes in Bandra & Colaba.",
    },
    {
      name: "Aesthetic Clinics",
      icon: Stethoscope,
      count: "6+ Completed",
      desc: "Biophilic dermatology & aesthetics centers in Khar & Santacruz.",
    },
    {
      name: "Luxury Salons & Spas",
      icon: Scissors,
      count: "5+ Completed",
      desc: "Luxury wellness spas & high-concept hair studios.",
    },
  ];

  // Double the list for seamless continuous infinite marquee
  const marqueeCategories = [...categories, ...categories];

  return (
    <section id="categories" className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section Header with Manual Scroll Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Multi-Sector Domain Expertise</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Project <span className="gold-gradient-text">Categories</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-xl font-light mt-2">
              Dedicated architectural teams tailored specifically for residential, commercial, hospitality, and healthcare sectors.
            </p>
          </div>

          {/* Desktop Arrow Controls & Play/Pause */}
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
              <span>Consult On Sector</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            {marqueeCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={`${cat.name}-${idx}`}
                  className="w-[280px] sm:w-[320px] shrink-0 p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#D4AF37] bg-[#1C1C1C] px-2.5 py-0.5 rounded-full border border-white/10">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[#A1A1AA] text-xs font-light leading-relaxed mb-4 line-clamp-3">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">
                      Sector #{(idx % categories.length) + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
