"use client";

import { useState } from "react";
import { Star, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Vikram &amp; Neha Singhania",
      role: "3BHK Kalpataru Magnus, Bandra East",
      text: "Bombay Studio executed our 1550 sq.ft home with absolute military precision. They delivered in exactly 82 days with zero budget slippage. The fluted veneer paneling and concealed doors look extraordinary.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Rajesh &amp; Sunita Agarwal",
      role: "Sea Face Penthouse, Worli",
      text: "Their transparency on BOQ pricing blew us away. Every piece of Italian marble and Hafele hardware was verified on site before installation. Ananya and her project managers are world-class.",
      rating: 5,
      videoThumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
              Client Feedback &amp; Video Reviews
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              What Our <span className="gold-gradient-text">Clients Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-[#121212] border border-white/10 text-xs font-bold text-[#D4AF37]">
              ⭐ 4.9/5 on Google Reviews (50+ Verified Ratings)
            </div>
          </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video / Image Showcase */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/15 group">
              <img
                src={testimonials[currentIndex].videoThumbnail}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#050505] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-[#050505] ml-1" />
                </div>
              </div>
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#050505]/80 backdrop-blur-md text-[#D4AF37] text-xs font-semibold">
                Watch Video Walkthrough
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>

              <Quote className="w-10 h-10 text-[#D4AF37]/30" />

              <p className="text-base sm:text-lg text-white font-light leading-relaxed italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              <div>
                <h3 className="font-serif font-bold text-white text-xl">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light mt-0.5">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (prev) => (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="p-3 rounded-full bg-[#121212] text-white hover:bg-[#1C1C1C] hover:text-[#D4AF37] border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                  }
                  className="p-3 rounded-full bg-[#121212] text-white hover:bg-[#1C1C1C] hover:text-[#D4AF37] border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
