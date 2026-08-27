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
    <div className={`relative inline-flex flex-col items-center sm:items-end ${className}`}>
      {/* Neon Glowing Gold Pill Card */}
      <a
        href="tel:+917070704181"
        className="group relative flex items-center gap-4 sm:gap-6 bg-[#080808]/90 backdrop-blur-xl px-6 sm:px-8 py-4 sm:py-5 rounded-[28px] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_55px_rgba(212,175,55,0.75)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        aria-label="Direct Studio Line: +91 707070 4181"
      >
        {/* Solid Gold Circular Call Icon */}
        <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FCF6BA] text-[#050505] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 fill-[#050505] text-[#050505]" />
        </div>

        {/* Text Details */}
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase">
            <span className="w-3 sm:w-4 h-px bg-[#D4AF37]/60" />
            <span>DIRECT STUDIO LINE</span>
            <span className="w-3 sm:w-4 h-px bg-[#D4AF37]/60" />
          </div>

          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors leading-tight">
            70 70 70 41 81
          </p>

          <p className="text-white/80 text-[9px] sm:text-[10px] tracking-[0.28em] font-medium uppercase">
            CLICK TO CALL
          </p>
        </div>
      </a>

      {/* Cursive Annotation & Directional Arrow */}
      {showAnnotation && (
        <div className="flex items-center gap-2 mt-2.5 mr-2 sm:mr-4 self-center sm:self-end">
          <svg
            className="w-5 h-5 text-[#D4AF37] -rotate-12 animate-pulse shrink-0"
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
