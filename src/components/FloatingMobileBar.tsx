"use client";

import Link from "next/link";
import { MessageSquare, Phone, Mail, Calendar } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FloatingMobileBar() {
  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-xl p-1.5 sm:p-2 rounded-full border border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.2)]"
    >
      {/* 1. WhatsApp */}
      <a
        href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20want%20to%20book%20a%20free%20interior%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", "lead_action", "floating_bar")}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141414] hover:bg-[#1E1E1E] border border-white/10 hover:border-[#25D366]/60 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group shadow-sm"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>

      {/* 2. Direct Call Line */}
      <a
        href="tel:+917070704181"
        onClick={() => trackEvent("click_call", "lead_action", "floating_bar")}
        className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141414] hover:bg-[#1E1E1E] border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group shadow-sm"
        title="Direct Line: +91 707070 4181"
        aria-label="Call Direct Studio Line (+91 707070 4181)"
      >
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      </a>

      {/* 3. Direct Email Action */}
      <a
        href="mailto:info@bombaystudio.in?subject=Interior%20Design%20Consultation%20Inquiry%20-%20Bombay%20Studio"
        onClick={() => trackEvent("click_email", "lead_action", "floating_bar")}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141414] hover:bg-[#1E1E1E] border border-white/10 hover:border-[#D4AF37]/60 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group shadow-sm"
        title="Email: info@bombaystudio.in"
        aria-label="Email Bombay Studio (info@bombaystudio.in)"
      >
        <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      </a>

      {/* 4. Book Free Consultation */}
      <Link
        href="/#contact"
        onClick={() => trackEvent("click_consultation", "lead_action", "floating_bar")}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full btn-gold-shiny flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-[#D4AF37]/20"
        title="Book Free Consultation"
        aria-label="Book Free Consultation"
      >
        <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#050505]" />
      </Link>
    </aside>
  );
}
