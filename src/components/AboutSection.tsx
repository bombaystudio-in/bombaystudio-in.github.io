"use client";

import { useState, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  DollarSign,
  Clock,
  Key,
  UserCheck,
} from "lucide-react";
import CarouselControls from "./CarouselControls";

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const whyUsPillars = [
    {
      icon: Sparkles,
      title: "Design Driven",
      tag: "Proportion & Light",
      desc: "Every layout is custom-tailored with architectural proportion, natural light simulation, and bespoke joinery.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Materials",
      tag: "Certified IS-710",
      desc: "Authentic IS-710 marine plywood, imported Italian marble, Blum soft-close hardware & ICA paints.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      tag: "Zero Cost Overruns",
      desc: "Zero hidden costs. Itemized BOQ pricing locked before execution with guaranteed fixed budgets.",
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      tag: "Penalty-Backed",
      desc: "Strict milestone tracking with penalty-backed handover dates written directly into our contracts.",
    },
    {
      icon: Key,
      title: "Complete Turnkey Solution",
      tag: "Single Point Contact",
      desc: "Single-source responsibility from civil demolition, plumbing & electrical to final furniture styling.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Founder Oversight",
      tag: "Ar. Aakhir Choudhary",
      desc: "Direct oversight on site with daily WhatsApp progress photo updates & architectural quality reports.",
    },
    {
      icon: ShieldCheck,
      title: "10-Year Warranty",
      tag: "Post-Handover Care",
      desc: "Comprehensive 10-year structural warranty and complimentary 1-year periodic maintenance support.",
    },
  ];

  // Double the pillars list for continuous infinite auto-scrolling
  const marqueePillars = [...whyUsPillars, ...whyUsPillars];

  return (
    <section id="about" className="py-8 sm:py-10 lg:py-12 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Why Choose <span className="gold-gradient-text">Bombay Studio?</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light mt-1.5 max-w-xl mx-auto">
            Architectural rigor, certified materials, and fixed BOQ budgets for Mumbai&apos;s most discerning homeowners.
          </p>
        </div>

        {/* Automatic Horizontal Moving Pillars Track */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Subtle Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar py-2 cursor-grab active:cursor-grabbing"
          >
            <div
              className="animate-marquee flex gap-4"
              style={{ animationPlayState: isPaused ? "paused" : undefined }}
            >
              {marqueePillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="w-[240px] sm:w-[280px] lg:w-[300px] shrink-0 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#D4AF37] font-semibold">
                      <span>Pillar #{(idx % whyUsPillars.length) + 1}</span>
                      <span>Guaranteed Standard ✓</span>
                    </div>
                  </div>
                );
              })}
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
        />
      </div>
    </section>
  );
}
