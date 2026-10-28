"use client";

import Link from "next/link";
import { Star, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-between overflow-hidden bg-[#050505] py-8 sm:py-12 lg:py-16">
      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Three Decades of <br />
              <span className="gold-gradient-text italic font-normal">Designing Homes</span> Families Love
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed max-w-xl">
              Bespoke turnkey luxury interiors and civil mastery across Mumbai, led by Ar. Aakhir Choudhary.
            </p>

            {/* Exactly Two High-Impact CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="group flex items-center gap-2 btn-gold-shiny text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold shadow-lg shadow-[#D4AF37]/15"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="flex items-center gap-2 bg-[#121212]/90 hover:bg-[#1C1C1C] text-white text-xs sm:text-sm font-semibold tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/15 hover:border-[#D4AF37]/60 transition-all backdrop-blur-sm group"
              >
                <span>Explore Projects</span>
                <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Main Image Showcase - Photography Dominance */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative aspect-[3/4] max-h-[46svh] sm:max-h-[52svh] w-auto rounded-3xl overflow-hidden gold-border-glow group shadow-2xl">
              <img
                src="/team/akhir-chaudhary-founder-portrait.png"
                alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-85" />

              {/* Minimal Clean Label */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#050505]/80 backdrop-blur-md border border-white/10 text-center shadow-lg">
                <p className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase">Ar. Aakhir Choudhary</p>
                <p className="text-[#D4AF37] text-[11px] font-medium tracking-wider">Principal Architect &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thin Premium Trust Strip */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 sm:py-3.5 px-6 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">30+ Years Legacy</span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">200+ Residences</span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">On-Time Handover</span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">10-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
