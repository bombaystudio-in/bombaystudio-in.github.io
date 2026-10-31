import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FounderVCard from "@/components/FounderVCard";

export const metadata: Metadata = {
  title: "Digital Business Card (vCard) — Ar. Aakhir Choudhary | Bombay Studio",
  description:
    "Official digital business card and contact vCard for Ar. Aakhir Choudhary, Founder & Principal Architect at Bombay Studio, Mumbai. Scan QR or save contact directly.",
};

export default function VCardPage() {
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

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
            Bombay Studio Leadership
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Founder <span className="gold-gradient-text">Digital vCard</span>
          </h1>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light leading-relaxed">
            Scan the QR code with your mobile camera or tap the button to automatically save Bombay Studio and Ar. Aakhir Choudhary directly into your phone contacts.
          </p>
        </div>

        {/* Founder vCard Component */}
        <FounderVCard />
      </div>
    </main>
  );
}
