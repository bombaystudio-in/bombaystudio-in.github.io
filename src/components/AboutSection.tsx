"use client";

import { Sparkles, ShieldCheck, DollarSign, Clock, Key, UserCheck } from "lucide-react";

export default function AboutSection() {
  const whyUsPillars = [
    {
      icon: Sparkles,
      title: "Design Driven",
      desc: "Every layout is custom-tailored with architectural proportion, light simulation, and bespoke joinery.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Materials",
      desc: "Authentic IS-710 marine plywood, imported Italian marble, Blum soft-close hardware & ICA paints.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Zero hidden costs. Itemized BOQ pricing locked before execution with guaranteed no budget overruns.",
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      desc: "Strict milestone tracking with penalty-backed handover dates written directly into our contracts.",
    },
    {
      icon: Key,
      title: "Complete Turnkey Solution",
      desc: "Single-source responsibility from civil demolition, plumbing & electrical to final furniture styling.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Founder Oversight",
      desc: "Direct oversight by Ar. Aakhir Choudhary on site with daily WhatsApp progress photo updates & quality reports.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            About Bombay Studio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose <span className="gold-gradient-text">Bombay Studio?</span>
          </h2>
          <p className="text-[#A1A1AA] text-base font-light">
            We don't just design interiors; we architect living experiences. Here is why Mumbai's most discerning homeowners trust us.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyUsPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder Feature Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Founder Image */}
            <div className="lg:col-span-5 relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/portfolio/akhir-chaudhary-founder-portrait.jpg"
                alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/80 backdrop-blur-md border border-white/10">
                <p className="text-white font-bold text-sm">AR. AAKHIR CHOUDHARY</p>
                <p className="text-[#D4AF37] text-xs font-medium">Principal Architect &amp; Founder</p>
              </div>
            </div>

            {/* Founder Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                Founder's Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                "A home should feel like an exhale—tactile, warm, and entirely your own."
              </h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                Founded by Ar. Aakhir Choudhary in Mumbai, Bombay Studio was born out of a desire to eliminate the chaos from interior execution. With over 12+ years of architectural experience across Mumbai's iconic high-rises and luxury residences, Ar. Aakhir Choudhary brings structured engineering rigor and single-point accountability to interior aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-sm">
                <div>
                  <p className="text-[#D4AF37] font-bold text-2xl font-serif">12+ Years</p>
                  <p className="text-[#A1A1AA] text-xs">Design Leadership</p>
                </div>
                <div>
                  <p className="text-[#D4AF37] font-bold text-2xl font-serif">100%</p>
                  <p className="text-[#A1A1AA] text-xs">Direct Founder Commitment</p>
                </div>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
              >
                <span>Read Full Story &amp; Philosophy</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
