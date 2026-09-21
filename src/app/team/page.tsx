import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, Phone, MessageSquare } from "lucide-react";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Our Team & Studio Hierarchy | Bombay Studio Mumbai",
  description:
    "Meet the architectural and design leadership behind Bombay Studio. From 30+ years of structural pedigree under Mr. Kalamuddin Choudhary to Ar. Aakhir Choudhary and our 12-member multidisciplinary turnkey execution team.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
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
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Leadership &amp; <br />
            <span className="gold-gradient-text">Architectural Team</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Every turnkey residence, villa, and boutique commercial space we deliver is governed by direct founder pedigree, licensed architects, creative 3D visualizers, and rigorous on-site engineers.
          </p>
        </div>
      </div>

      {/* The Complete 6-Level Team Section */}
      <TeamSection />

      {/* Conversion Banner at Bottom of Team Page */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-6 relative overflow-hidden">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Work Directly With Bombay Studio&apos;s Senior Architects
            </h2>
            <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto">
              Schedule a personalized design consultation at our studio or arrange a site visit with Principal Architect Ar. Aakhir Choudhary.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-2"
            >
              <span>Book Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919930492191?text=Hello%20Bombay%20Studio%20Team%2C%20I%20would%20like%20to%20consult%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#121212] hover:bg-[#1c1c1c] text-white text-xs uppercase tracking-wider border border-white/15 inline-flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
