"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";

export default function PortfolioGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Double the list for seamless continuous infinite marquee
  const marqueeItems = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section className="py-16 sm:py-20 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Section Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Live Proof of Craftsmanship</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Site <span className="gold-gradient-text">Work &amp; Handovers</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm font-light mt-2 max-w-2xl">
              Authentic on-site moments: Ar. Aakhir Choudhary conducting material consultations, structural audits, and quality handovers across Mumbai.
            </p>
          </div>

          {/* Action & Manual Controls */}
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
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-5 py-3 rounded-full"
            >
              <span>View Full Gallery ({GALLERY_ITEMS.length}+)</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Marquee / Swipe Track */}
      <div className="relative w-full">
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar py-4 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
        >
          <div
            className="animate-marquee flex gap-6"
            style={{ animationPlayState: isPaused ? "paused" : undefined }}
          >
            {marqueeItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href="/portfolio"
                className="group relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden border border-white/15 bg-[#121212] shrink-0 block hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                    {item.tag || item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#FCF6BA] font-medium bg-[#050505]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    {item.location}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-base font-serif font-bold text-white mb-1 line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Sub-CTA */}
      <div className="text-center mt-6 sm:hidden px-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-2 w-full btn-gold-shiny text-xs uppercase py-3 rounded-xl"
        >
          <span>Explore All Site Photos &amp; Handovers ↗</span>
        </Link>
      </div>
    </section>
  );
}
