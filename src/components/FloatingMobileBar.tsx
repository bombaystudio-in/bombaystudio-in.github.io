"use client";

import Link from "next/link";
import { MessageSquare, Phone, Calendar, Mail } from "lucide-react";

export default function FloatingMobileBar() {
  return (
    <aside
      aria-label="Quick Action Controls"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3 bg-[#080808]/92 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-[#D4AF37]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.25)]"
    >
      {/* 1. WhatsApp */}
      <a
        href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20want%20to%20book%20a%20free%20interior%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#181818] hover:bg-[#222222] border border-white/10 hover:border-[#25D366]/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group shadow-md"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>

      {/* 2. Direct Call Line */}
      <a
        href="tel:+917070704181"
        className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#D4AF37]/50 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group shadow-md"
        title="Direct Line: +91 707070 4181"
        aria-label="Call Direct Studio Line (+91 707070 4181)"
      >
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <Phone className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      </a>

      {/* 3. Email Inquiry */}
      <a
        href="mailto:info@bombaystudio.in?subject=Interior%20Design%20Consultation%20Inquiry%20-%20Bombay%20Studio"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#181818] hover:bg-[#222222] border border-white/10 hover:border-[#D4AF37]/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group shadow-md"
        title="Email: info@bombaystudio.in"
        aria-label="Email Bombay Studio (info@bombaystudio.in)"
      >
        <Mail className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      </a>

      {/* 4. Book Free Consultation */}
      <Link
        href="/#contact"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full btn-gold-shiny flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-[#D4AF37]/25"
        title="Book Free Site Consultation"
        aria-label="Book Free Site Consultation"
      >
        <Calendar className="w-5 h-5 text-[#050505]" />
      </Link>
    </aside>
  );
}
