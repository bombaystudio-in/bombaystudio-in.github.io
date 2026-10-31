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
              className="p-6 sm:p-7 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              {/* Client Face & Profile Header */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  {/* High-visibility Customer Portrait */}
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-black border border-white/15 group-hover:border-[#D4AF37]/60 shadow-md transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 font-semibold truncate">
                        Turnkey Handover ✓
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-white text-base sm:text-lg group-hover:text-[#D4AF37] transition-colors leading-tight">
                      {item.name}
                    </h2>

                    {item.occupation && (
                      <p className="text-[11px] font-mono text-[#D4AF37] mt-1">
                        {item.occupation}
                      </p>
                    )}

                    <p className="text-[11px] text-[#A1A1AA] mt-1">Completed Residence · Mumbai</p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <Quote className="w-5 h-5 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                  <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed italic">
                    &quot;{item.text}&quot;
                  </p>
                </div>
              </div>

              {/* Optional Project CTA */}
              {item.projectId && (
                <div className="pt-4 mt-4 border-t border-white/5">
                  <Link
                    href={`/projects/${item.projectId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FCF6BA] hover:text-[#D4AF37] transition-colors group/link"
                  >
                    <span>View Delivered Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              )}
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
