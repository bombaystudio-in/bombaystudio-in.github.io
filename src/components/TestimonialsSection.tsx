"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Quote, ArrowUpRight } from "lucide-react";
import CarouselControls from "./CarouselControls";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function TestimonialsSection() {
  const testimonials = TESTIMONIALS_DATA;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

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
      className="py-12 sm:py-16 lg:py-24 bg-[#050505] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Client <span className="gold-gradient-text">Feedback</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm max-w-xl font-light mt-1.5 mx-auto">
            Direct, authentic feedback from homeowners and clients across Mumbai.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {!isPaused && (
            <div
              key={currentIndex}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#D4AF37] animate-timer-progress w-full opacity-85 z-20 shadow-[0_0_8px_#D4AF37]"
            />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Client Portrait */}
            <div className="lg:col-span-4 relative aspect-[3/4] max-h-[30svh] sm:max-h-[35svh] w-auto mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 group shadow-xl bg-black flex items-center justify-center">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                  Verified Homeowner Story
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                  <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                  <span className="w-6 h-[1px] bg-[#D4AF37]/40" />
                  <span className="text-[#A1A1AA]">{String(testimonials.length).padStart(2, "0")}</span>
                </div>
              </div>

              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37]/30" />

              <p className="text-sm sm:text-base lg:text-lg text-white font-light leading-relaxed italic line-clamp-3">
                &quot;{current.text}&quot;
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                      {current.name}
                    </h3>
                    {current.occupation && (
                      <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                        {current.occupation}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A1A1AA]">Completed Residence · Mumbai</p>
                </div>

                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20 font-semibold">
                    Turnkey Handover ✓
                  </span>
                  {current.projectId && (
                    <Link
                      href={`/projects/${current.projectId}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FCF6BA] hover:text-[#D4AF37] transition-colors group/link"
                    >
                      <span>View Delivered Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls Below Section */}
        <CarouselControls
          isPaused={isPaused}
          onTogglePause={() => setIsPaused((prev) => !prev)}
          onPrev={prevTestimonial}
          onNext={nextTestimonial}
          prevLabel="Previous Story"
          nextLabel="Next Story"
          ctaText={`Read All Stories (${testimonials.length})`}
          ctaHref="/testimonials"
        />
      </div>
    </section>
  );
}
