import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import LegacySection from "@/components/LegacySection";

export const metadata: Metadata = {
  title: "Our 30-Year Architectural Legacy (1992 - Today) | Bombay Studio Mumbai",
  description:
    "Explore the origin story of Bombay Studio. Founded by Mr. Kalamuddin Choudhary in 1992 as Noor Engineering Company and evolved into a luxury turnkey architecture studio by Ar. Aakhir Choudhary.",
};

export default function LegacyPage() {
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
            Heritage &amp; Civil Pedigree Since 1992
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            The 30-Year <br />
            <span className="gold-gradient-text">Architectural Evolution</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From raw civil site precision across Mumbai in 1992 to bespoke turnkey residences and luxury interior architecture today.
          </p>
        </div>

        {/* Full Legacy Section with Timeline */}
        <LegacySection isTeaser={false} />

        {/* Bottom Navigation to Team Page */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 mt-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Meet the Architects Carrying the Legacy Forward
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto">
            Discover the multidisciplinary team of licensed architects, interior designers, and project heads executing our projects.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/team"
              className="btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold"
            >
              <span>Explore Studio Team Hierarchy</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="bg-[#181818] hover:bg-[#222] border border-white/15 text-white text-xs uppercase tracking-wider px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold transition-colors"
            >
              <span>Book Site Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
