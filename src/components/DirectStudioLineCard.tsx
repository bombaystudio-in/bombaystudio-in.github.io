"use client";

import { Phone } from "lucide-react";

interface DirectStudioLineCardProps {
  showAnnotation?: boolean;
  className?: string;
}

export default function DirectStudioLineCard({
  showAnnotation = true,
  className = "",
}: DirectStudioLineCardProps) {
  return (
    <div className={`relative inline-flex flex-col items-center sm:items-start ${className}`}>
      {/* Neon Glowing Gold Pill Card */}
      <a
        href="tel:+917070704181"
        className="group relative flex items-center gap-3 sm:gap-4 bg-[#080808]/90 backdrop-blur-xl px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-[24px] border border-[#D4AF37]/80 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.65)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        aria-label="Direct Studio Line: +91 707070 4181"
      >
        {/* Solid Gold Circular Call Icon */}
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FCF6BA] text-[#050505] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-[#050505] text-[#050505]" />
        </div>

        {/* Text Details */}
        <div className="text-left space-y-0.5">
          <div className="flex items-center gap-1.5 text-[#D4AF37] text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
            <span className="w-2.5 h-px bg-[#D4AF37]/60" />
            <span>DIRECT STUDIO LINE</span>
            <span className="w-2.5 h-px bg-[#D4AF37]/60" />
          </div>

          <p className="font-serif text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wider text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors leading-tight">
            70 70 70 41 81
          </p>

          <p className="text-white/80 text-[8px] sm:text-[9px] tracking-[0.25em] font-medium uppercase">
            CLICK TO CALL
          </p>
        </div>
      </a>

      {/* Cursive Annotation & Directional Arrow */}
      {showAnnotation && (
        <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 self-center sm:self-start pl-2">
          <svg
            className="w-4 h-4 text-[#D4AF37] -rotate-12 animate-pulse shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span className="font-serif italic text-sm sm:text-base text-[#FCF6BA] font-light tracking-wide text-shadow-sm">
            Call For Exclusive Consultation
          </span>
        </div>
      )}
    </div>
  );
}
