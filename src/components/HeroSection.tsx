"use client";

import Link from "next/link";
import { Star, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import DirectStudioLineCard from "./DirectStudioLineCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-between overflow-hidden bg-[#050505] py-4 sm:py-6 lg:py-8">
      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Three Decades of <br />
              <span className="gold-gradient-text italic font-normal">Building Spaces</span> That Last
            </h1>

            <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-2xl">
              Uniting 30+ years of civil pedigree with bespoke turnkey interior luxury across Mumbai. Guided by Principal Architect Ar. Aakhir Choudhary.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/#contact"
                className="group flex items-center gap-2 btn-gold-shiny text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 rounded-full"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center gap-2 bg-[#121212] hover:bg-[#1C1C1C] text-white text-xs sm:text-sm font-semibold tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-white/15 hover:border-[#D4AF37] transition-all transform hover:-translate-y-0.5 group"
              >
                <span>View Our Work</span>
                <span className="text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Direct Studio Line Feature Card */}
            <div className="pt-2 sm:pt-3">
              <DirectStudioLineCard />
            </div>
          </div>

          {/* Right Main Image Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative aspect-[3/4] max-h-[42svh] sm:max-h-[48svh] w-auto rounded-2xl sm:rounded-3xl overflow-hidden gold-border-glow group">
              <img
                src="/team/akhir-chaudhary-founder-portrait.png"
                alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90" />

              <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-[#050505]/85 backdrop-blur-md border border-white/15 space-y-0.5 text-center shadow-xl">
                <p className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase">AR. AAKHIR CHOUDHARY</p>
                <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Principal Architect &amp; Founder</p>
                <p className="text-[#A1A1AA] text-[10px] font-light hidden sm:block">
                  200+ Turnkey Luxury Projects Completed Across Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl glass-panel border border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1C1C1C] text-[#D4AF37] shrink-0">
              <Award className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">30+ Years</p>
              <p className="text-[#A1A1AA] text-[10px] sm:text-xs">Legacy Since 1992</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1C1C1C] text-[#D4AF37] shrink-0">
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">200+ Projects</p>
              <p className="text-[#A1A1AA] text-[10px] sm:text-xs">Delivered in Mumbai</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1C1C1C] text-[#D4AF37] shrink-0">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">On-Time Delivery</p>
              <p className="text-[#A1A1AA] text-[10px] sm:text-xs">Penalty-Backed Handover</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#1C1C1C] text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">Turnkey Master</p>
              <p className="text-[#A1A1AA] text-[10px] sm:text-xs">10-Year Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
