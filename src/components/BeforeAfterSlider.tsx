"use client";

import { useState } from "react";
import { MoveHorizontal, Sparkles } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            Interactive Visual Proof
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Before &amp; After <span className="gold-gradient-text">Transformation</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light">
            Drag the center slider left and right to compare raw builder brickwork against our finished luxury interior handover.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-5xl mx-auto h-[350px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl select-none">
          {/* AFTER Image (Background Base) */}
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
            alt="Completed Luxury Living Room Handover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-[#050505]/90 backdrop-blur-md text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-white/15">
            After Handover
          </span>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85"
              alt="Raw Builder Condition Before Demolition"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: "100%", height: "100%" }}
            />
            <span className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-[#050505]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/15">
              Before Renovation
            </span>
          </div>

          {/* Vertical Split Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D4AF37] text-[#050505] flex items-center justify-center shadow-2xl border-2 border-white">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Range Slider Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderMove}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            aria-label="Before and after comparison slider"
          />
        </div>
      </div>
    </section>
  );
}
