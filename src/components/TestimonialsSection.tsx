"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, Play, Pause, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Vikram & Neha Singhania",
      role: "3BHK Kalpataru Magnus, Bandra East",
      tag: "Handover in 82 Days · Zero Cost Overrun",
      text: "Bombay Studio executed our 1,550 sq.ft home with absolute military precision. They delivered in exactly 82 days with zero budget slippage. The fluted veneer paneling, concealed doors, and Italian marble joinery look extraordinary.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Rajesh & Sunita Agarwal",
      role: "Sea Face Penthouse, Worli",
      tag: "Turnkey Luxury · 3,200 Sq. Ft",
      text: "Their transparency on BOQ pricing blew us away. Every piece of Italian Statuario marble and Blum hardware was verified on site before installation. Ar. Aakhir and his site engineers are genuinely world-class.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Siddharth & Rhea Mehta",
      role: "Private Seaside Estate, Alibaug",
      tag: "Bespoke Architecture · 5,500 Sq. Ft Villa",
      text: "Building an estate from the ground up outside Mumbai can be stressful, but Bombay Studio's turnkey oversight made it seamless. Ar. Aakhir provided daily WhatsApp video audits and delivered a masterpiece on time.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Priya & Sameer Merchant",
      role: "4BHK Oberoi Sky City, Borivali East",
      tag: "Vastu Compliant · High-End Finishes",
      text: "We wanted full Vastu compliance without compromising on modern Italian aesthetics. Ar. Aakhir aligned the spatial flow perfectly, and the custom PU-lacquered wardrobes and false ceilings are flawless.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Anuj Kapadia",
      role: "Corporate HQ, Trade World BKC",
      tag: "Commercial Turnkey · 2,800 Sq. Ft",
      text: "Strict deadlines were critical for our office inauguration. Bombay Studio handled the complete civil, acoustic panelling, and HVAC integration 5 days ahead of schedule. Truly dependable professionals.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-cycle through testimonials every 6.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Play/Pause & Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified Homeowner Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              What Our <span className="gold-gradient-text">Clients Say</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-xl font-light mt-2">
              Unfiltered feedback from high-net-worth homeowners and enterprise clients across Mumbai.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className={`p-2.5 rounded-full border transition-all ${
                isPaused
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
                  : "bg-[#121212] text-[#A1A1AA] hover:text-white border-white/10"
              }`}
              title={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
              aria-label={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-black" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden sm:block px-4 py-2 rounded-full bg-[#121212] border border-white/10 text-xs font-semibold text-[#D4AF37]">
              ⭐ 200+ Delivered Handovers
            </div>
          </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="rounded-3xl glass-panel p-6 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Auto-cycle timer progress bar */}
          {!isPaused && (
            <div
              key={currentIndex}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] animate-timer-progress w-full opacity-60"
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Showcase */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 group shadow-xl">
              <img
                src={current.videoThumbnail}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/15 text-[#D4AF37] text-[11px] font-semibold">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs font-mono text-[#A1A1AA]">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
              </div>

              <Quote className="w-10 h-10 text-[#D4AF37]/30" />

              <p className="text-base sm:text-lg lg:text-xl text-white font-light leading-relaxed italic">
                &quot;{current.text}&quot;
              </p>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-white text-xl">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                    {current.role}
                  </p>
                </div>

                {/* Dot navigation indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx
                          ? "w-8 bg-[#D4AF37]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to review ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
