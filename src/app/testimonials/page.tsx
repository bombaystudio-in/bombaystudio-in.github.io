import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Quote, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Stories & Direct Homeowner Feedback | Bombay Studio Mumbai",
  description:
    "Read genuine, unfiltered experiences from homeowners across Mumbai who transformed their residences with Bombay Studio and Principal Architect Ar. Aakhir Choudhary.",
};

export default function TestimonialsPage() {
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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
            Authentic Homeowner Testimonials
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Direct Client Stories &amp; <br />
            <span className="gold-gradient-text">Unfiltered Feedback</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Real words directly from Mumbai homeowners, celebrities, and professionals who entrusted us with their turnkey interiors and architectural projects.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 font-semibold">
                    Turnkey Handover ✓
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed italic">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black shrink-0 border border-white/15">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-serif font-bold text-white text-sm sm:text-base group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </h2>
                    {item.occupation && (
                      <span className="text-[10px] font-mono text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2 py-0.5 rounded-full">
                        {item.occupation}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#A1A1AA]">Completed Residence · Mumbai</p>
                  {item.projectId && (
                    <Link
                      href={`/projects/${item.projectId}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FCF6BA] hover:text-[#D4AF37] transition-colors mt-1.5"
                    >
                      <span>View Delivered Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 mt-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Ready to Build a Home You&apos;ll Love?
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto">
            Book a site consultation with Ar. Aakhir Choudhary to experience the same stress-free turnkey execution.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center gap-2 font-semibold"
            >
              <span>Schedule Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
