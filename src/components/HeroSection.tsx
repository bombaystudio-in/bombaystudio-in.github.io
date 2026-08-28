"use client";

import Link from "next/link";
import { Star, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import DirectStudioLineCard from "./DirectStudioLineCard";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#050505] pt-2 sm:pt-4 pb-12 sm:pb-16">
      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] backdrop-blur-md border border-white/15 text-[#FCF6BA] text-xs font-semibold uppercase tracking-widest gold-border-glow">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              30+ YEARS OF ARCHITECTURE, INTERIORS & CONSTRUCTION · Building Trust Since 1992
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Three Decades of <br />
              <span className="gold-gradient-text italic font-normal">Building Spaces</span> That Last
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed max-w-2xl">
              From a construction foundation established in 1992 to a premier architecture and turnkey interior design practice, Bombay Studio unites generational craftsmanship with modern luxury across Mumbai. Led by Ar. Aakhir Choudhary.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="group flex items-center gap-3 btn-gold-shiny text-sm uppercase tracking-wider px-8 py-4 rounded-full"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center gap-2 bg-[#121212] hover:bg-[#1C1C1C] text-white text-sm font-semibold tracking-wider px-7 py-4 rounded-full border border-white/15 hover:border-[#D4AF37] transition-all transform hover:-translate-y-1 group"
              >
                <span>View Our Work</span>
                <span className="text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            {/* Direct Studio Line Feature Card (Replicated from Reference Design) */}
            <div className="pt-4 sm:pt-6">
              <DirectStudioLineCard />
            </div>
          </div>

          {/* Right Main Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden gold-border-glow group">
              <img
                src="/team/akhir-chaudhary-founder-portrait.png"
                alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-90" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/15 space-y-1 text-center shadow-2xl">
                <p className="text-white font-bold text-base tracking-wide uppercase">AR. AAKHIR CHOUDHARY</p>
                <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">Principal Architect &amp; Founder</p>
                <p className="text-[#A1A1AA] text-xs font-light">
                  200+ Turnkey Luxury Projects Completed Across Mumbai
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
              <Award className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">30+ Years</p>
              <p className="text-[#A1A1AA] text-xs">Legacy Since 1992</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <Star className="w-5 h-5 fill-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">200+ Projects</p>
              <p className="text-[#A1A1AA] text-xs">Delivered in Mumbai</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">On-Time Delivery</p>
              <p className="text-[#A1A1AA] text-xs">Penalty-Backed Handover</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1C1C1C] text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Turnkey Master</p>
              <p className="text-[#A1A1AA] text-xs">10-Year Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
