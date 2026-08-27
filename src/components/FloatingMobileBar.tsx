"use client";

import Link from "next/link";
import { MessageSquare, Phone, Calendar } from "lucide-react";

export default function FloatingMobileBar() {
  return (
    <aside
      aria-label="Quick Action Controls"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-xl border-t border-white/15 p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20want%20to%20book%20a%20free%20interior%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl bg-[#1C1C1C] text-white border border-white/10 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        <a
          href="tel:+917070704181"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl bg-[#121212] text-white border border-[#D4AF37]/50 active:scale-95 transition-transform relative"
        >
          <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] font-bold tracking-tight text-[#FCF6BA]">Direct Line</span>
        </a>

        <Link
          href="/#contact"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1.5 rounded-xl btn-gold-shiny active:scale-95 transition-transform text-center"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">Book Free</span>
        </Link>
      </div>
    </aside>
  );
}
