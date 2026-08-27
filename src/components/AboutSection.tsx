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
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

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
    <section id="about" className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Horizontal Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2">
              About Bombay Studio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Choose <span className="gold-gradient-text">Bombay Studio?</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm font-light mt-2 max-w-xl">
              We don&apos;t just design interiors; we architect living experiences. Here is why Mumbai&apos;s most discerning homeowners trust us.
            </p>
          </div>

          {/* Desktop Arrow Controls & Pause Toggle */}
          <div className="flex items-center gap-2 shrink-0">
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
          </div>
        </div>

        {/* Automatic Horizontal Moving Pillars Track */}
        <div className="relative mb-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Subtle Edge Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar py-3 cursor-grab active:cursor-grabbing"
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
                    className="w-[280px] sm:w-[340px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                      <span>Pillar #{(idx % whyUsPillars.length) + 1}</span>
                      <span>Guaranteed Standard ✓</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Founder Feature Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Founder Image */}
            <div className="lg:col-span-5 relative h-80 sm:h-[440px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/team/akhir-chaudhary-founder-portrait.png"
                alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-white/10 text-center">
                <p className="text-white font-bold text-sm">AR. AAKHIR CHOUDHARY</p>
                <p className="text-[#D4AF37] text-xs font-medium">Principal Architect &amp; Founder</p>
              </div>
            </div>

            {/* Founder Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                Founder&apos;s Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                &quot;A home should feel like an exhale—tactile, warm, and entirely your own.&quot;
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                Led by Ar. Aakhir Choudhary and backed by a 30+ year family construction legacy established in 1992, Bombay Studio unites generational structural engineering rigor with contemporary luxury architecture and single-point turnkey accountability across Mumbai.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-sm">
                <div>
                  <p className="text-[#D4AF37] font-bold text-2xl font-serif">30+ Years</p>
                  <p className="text-[#A1A1AA] text-xs">Construction Heritage (1992)</p>
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold text-2xl font-serif">200+</p>
                  <p className="text-[#A1A1AA] text-xs">Turnkey Luxury Deliveries</p>
                </div>
              </div>
              <Link
                href="/#legacy"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>Read Our 30-Year Heritage Story</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
