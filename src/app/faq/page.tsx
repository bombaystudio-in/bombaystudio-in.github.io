import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Project Guide | Bombay Studio Mumbai",
  description:
    "Detailed answers to all your questions about Mumbai turnkey interior design, timelines, civil works, IS-710 material standards, BOQ pricing, and 10-year warranties.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
            Transparency First
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Comprehensive <br />
            <span className="gold-gradient-text">Questions &amp; Guides</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our turnkey execution model, timeline guarantees, fixed price contracts, and architectural workflows.
          </p>
        </div>

        {/* Complete FAQ Section without limit */}
        <FaqSection showAllLink={false} />

        {/* Direct Studio Line Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 mt-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Architectural Question?
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto">
            Speak directly with Ar. Aakhir Choudhary or our senior project partners for clear, honest technical advice.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold"
            >
              <span>Book Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917070704181"
              className="bg-[#181818] hover:bg-[#222] border border-white/15 text-white text-xs uppercase tracking-wider px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold transition-colors"
            >
              <span>Call: +91 707070 4181</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
