import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building2, Compass, KeyRound, Sun, Hammer, Home, Briefcase, Armchair, Eye, ClipboardCheck, BarChart3 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "Specialized Interior & Architectural Services | Bombay Studio Mumbai",
  description:
    "Explore our complete turnkey architectural and luxury interior design services across Mumbai. From Vastu architecture to bespoke residential execution and project management.",
};

const getServiceIcon = (name: string) => {
  switch (name) {
    case "Building2":
      return <Building2 className="w-6 h-6" />;
    case "Compass":
      return <Compass className="w-6 h-6" />;
    case "KeyRound":
      return <KeyRound className="w-6 h-6" />;
    case "Sun":
      return <Sun className="w-6 h-6" />;
    case "Hammer":
      return <Hammer className="w-6 h-6" />;
    case "Home":
      return <Home className="w-6 h-6" />;
    case "Briefcase":
      return <Briefcase className="w-6 h-6" />;
    case "Armchair":
      return <Armchair className="w-6 h-6" />;
    case "Eye":
      return <Eye className="w-6 h-6" />;
    case "ClipboardCheck":
      return <ClipboardCheck className="w-6 h-6" />;
    case "BarChart3":
      return <BarChart3 className="w-6 h-6" />;
    default:
      return <Compass className="w-6 h-6" />;
  }
};

export default function ServicesPage() {
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
            Comprehensive Architectural Capabilities
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our Specialized <br />
            <span className="gold-gradient-text">Design &amp; Build Services</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From single-source turnkey civil execution to bespoke spatial planning, we ensure every square foot of your home is engineered to perfection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#181818] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors border border-white/5">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA] bg-white/5 px-2.5 py-1 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-serif font-bold text-white mb-2.5 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/#contact"
                  className="w-full text-center py-2.5 rounded-xl bg-[#181818] hover:bg-[#D4AF37] text-white hover:text-[#050505] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Consult On This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 mt-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Need a Custom Architecture or Turnkey Package?
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto">
            Book a private session with Ar. Aakhir Choudhary to discuss site mechanics, fixed itemized BOQ, and custom materials.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-block font-semibold"
            >
              Book Studio Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
