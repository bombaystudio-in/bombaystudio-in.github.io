"use client";

import Link from "next/link";
import { Play, Pause, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export interface CarouselControlsProps {
  isPaused: boolean;
  onTogglePause: () => void;
  onPrev: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
  pauseLabel?: string;
  playLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function CarouselControls({
  isPaused,
  onTogglePause,
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
  pauseLabel = "Pause Auto-Scroll",
  playLabel = "Resume Auto-Scroll",
  ctaText,
  ctaHref,
  className = "",
}: CarouselControlsProps) {
  return (
    <div className={`flex items-center justify-center gap-2.5 mt-4 sm:mt-5 flex-wrap ${className}`}>
      {/* Play/Pause Toggle */}
      <button
        onClick={onTogglePause}
        className={`p-2 rounded-full border transition-all cursor-pointer ${
          isPaused
            ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
            : "bg-[#121212] text-[#A1A1AA] hover:text-white border-white/10"
        }`}
        title={isPaused ? playLabel : pauseLabel}
        aria-label={isPaused ? playLabel : pauseLabel}
      >
        {isPaused ? <Play className="w-3.5 h-3.5 fill-black" /> : <Pause className="w-3.5 h-3.5" />}
      </button>

      {/* Prev / Next Arrows */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors cursor-pointer"
          title={prevLabel}
          aria-label={prevLabel}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-[#121212] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors cursor-pointer"
          title={nextLabel}
          aria-label={nextLabel}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Optional Integrated CTA Button */}
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-1.5 btn-gold-shiny text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all hover:scale-105"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      )}
    </div>
  );
}
