"use client";

import { Award, ShieldCheck } from "lucide-react";

export default function MeetFounderSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl gold-border-glow">
                <img
                  src="/team/akhir-chaudhary-founder-portrait.png"
                  alt="Ar. Aakhir Choudhary - Principal Architect & Founder of Bombay Studio"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#050505]/85 backdrop-blur-md border border-white/15 space-y-1 text-center shadow-xl">
                  <p className="text-white font-bold text-sm tracking-wide uppercase">AR. AAKHIR CHOUDHARY</p>
                  <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">Principal Architect &amp; Founder</p>
                  <p className="text-[#A1A1AA] text-[11px] font-light italic">&quot;Design. Detail. Delivered.&quot;</p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                  Leadership &amp; Founder
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                  Ar. Aakhir Choudhary
                </h2>
                <div className="mt-2 space-y-1">
                  <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wide">
                    Principal Architect &amp; Founder
                  </p>
                  <p className="text-white/90 text-xs font-medium uppercase tracking-wider">
                    BOMBAY STUDIO · Interior &amp; Architecture
                  </p>
                </div>
              </div>

              {/* Slogan Banner Badge */}
              <div className="p-4 rounded-xl bg-[#121212] border border-[#D4AF37]/30 space-y-1">
                <p className="text-[#D4AF37] font-serif font-bold text-xs uppercase tracking-wider">
                  Bespoke Interior Design &amp; Turnkey Execution
                </p>
                <p className="text-[#A1A1AA] text-xs font-light">
                  Residential | Commercial | Hospitality
                </p>
              </div>

              <div className="space-y-3 text-[#A1A1AA] text-sm leading-relaxed font-light">
                <p>
                  With <strong className="text-white">200+ completed turnkey luxury projects</strong> across Mumbai, Ar. Aakhir Choudhary leads Bombay Studio with a design philosophy rooted in architectural proportion, bespoke materiality, and timeless execution.
                </p>
                <p>
                  Growing up in a family with a construction pedigree dating back to 1992 (Noor Engineering Company), he developed a tactile understanding of engineering, materials, and joinery on active job sites from an early age.
                </p>
                <p>
                  His professional journey evolved through NEC Studio into Bombay Studio—uniting visionary interior aesthetics with three decades of civil construction rigor to deliver spaces that are enduring and deeply personal.
                </p>
              </div>

              <div className="space-y-3 text-xs text-white">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-white/10">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>200+ Turnkey Luxury Handovers across Bandra, Worli, Juhu, South Mumbai &amp; Alibaug</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>Backed by 30+ years of family construction mastery with single-point founder oversight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
