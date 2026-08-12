"use client";

import Link from "next/link";
import { Star, ShieldCheck, Clock, Award, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#050505] pt-10 pb-16">
      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] backdrop-blur-md border border-white/15 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              Mumbai's Premier Architectural &amp; Interior Design Practice
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Luxury Architecture &amp; <br />
              <span className="gold-gradient-text italic font-normal">Interior Design</span> for Modern Living
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed max-w-2xl">
              Designing Timeless Spaces Across Mumbai. Led by Principal Architect Akhir Chaudhary, we craft bespoke residential and commercial spaces from concept to turnkey handover.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="group flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#050505] text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-1"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#projects"
                className="flex items-center gap-3 bg-[#121212] hover:bg-[#1C1C1C] text-white text-sm font-semibold tracking-wider px-7 py-4 rounded-full border border-white/20 transition-all transform hover:-translate-y-1"
              >
                <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Right Main Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="/portfolio/akhir-chaudhary-founder-portrait.jpg"
                alt="Akhir Chaudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/15 space-y-1">
                <p className="text-white font-bold text-base">Akhir Chaudhary</p>
                <p className="text-[#D4AF37] text-xs font-semibold">Founder &amp; Principal Designer</p>
                <p className="text-[#A1A1AA] text-[11px] font-light">
                  50+ Turnkey Luxury Projects Completed Across Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <Star className="w-5 h-5 fill-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">⭐⭐⭐⭐⭐ 4.9/5</p>
              <p className="text-[#A1A1AA] text-xs">Rated by 50+ Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">50+ Projects</p>
              <p className="text-[#A1A1AA] text-xs">Completed in Mumbai</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">On-Time Delivery</p>
              <p className="text-[#A1A1AA] text-xs">Penalty-Backed Handover</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Quality Assured</p>
              <p className="text-[#A1A1AA] text-xs">10-Year Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
