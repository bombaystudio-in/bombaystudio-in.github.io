"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  DollarSign,
  Clock,
  Key,
  UserCheck,
  ArrowUpRight,
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
      slug: "spatial-flow",
      icon: Sparkles,
      title: "Spaces You'll Never Want to Leave",
      desc: "Custom-tailored spatial flow, natural light simulation, and bespoke joinery crafted for daily joy.",
    },
    {
      slug: "luxury-materials",
      icon: ShieldCheck,
      title: "Handpicked Luxury Materials",
      desc: "Authentic IS-710 marine plywood, imported Italian marble, and Blum precision hardware built to last.",
    },
    {
      slug: "price-transparency",
      icon: DollarSign,
      title: "Total Price Transparency",
      desc: "Locked itemized BOQ contracts with guaranteed fixed budgets and zero unexpected cost overruns.",
    },
    {
      slug: "on-time-handover",
      icon: Clock,
      title: "Move In On Schedule",
      desc: "Strict milestone tracking with penalty-backed handover dates written directly into your contract.",
    },
    {
      slug: "stress-free-turnkey",
      icon: Key,
      title: "Move In Without the Stress",
      desc: "Single-source turnkey accountability from initial civil demolition to final styling.",
    },
    {
      slug: "founder-oversight",
      icon: UserCheck,
      title: "Direct Founder Oversight",
      desc: "Ar. Aakhir Choudhary personally oversees on-site execution with transparent daily progress updates.",
    },
    {
      slug: "decade-long-warranty",
      icon: ShieldCheck,
      title: "Decade-Long Peace of Mind",
      desc: "Comprehensive 10-year structural warranty backed by complimentary periodic maintenance.",
    },
  ];

  // Double the pillars list for continuous infinite auto-scrolling
  const marqueePillars = [...whyUsPillars, ...whyUsPillars];

  return (
    <section id="about" className="py-10 sm:py-14 lg:py-16 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Why Choose <span className="gold-gradient-text">Bombay Studio?</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
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
              className="animate-marquee flex gap-5"
              style={{ animationPlayState: isPaused ? "paused" : undefined }}
            >
              {marqueePillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="w-[260px] sm:w-[290px] lg:w-[320px] shrink-0 p-5 sm:p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#181818] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5 mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/why-us/${pillar.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors"
                      >
                        <span>Read Standard</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                      <span className="text-[10px] text-[#A1A1AA] font-mono">
                        Pillar #{(idx % whyUsPillars.length) + 1}
                      </span>
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
          ctaText="Explore Our Standards"
          ctaHref="/about"
        />
      </div>
    </section>
  );
}
