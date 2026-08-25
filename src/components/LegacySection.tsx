"use client";

import { History, Hammer, Compass, Award, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LegacySection() {
  const timelineMilestones = [
    {
      step: "01",
      year: "1992",
      stage: "Genesis & Civil Pedigree",
      title: "The Foundation of Grit",
      badge: "Noor Engineering Company (NEC)",
      icon: Hammer,
      desc: "Arriving in Bombay with empty pockets and unmatched resolve, Mr. Kalamuddin Choudhary founded Noor Engineering Company. Through relentless site work, integrity, and raw precision, he established a trusted powerhouse in civil construction.",
      stats: "Civil & Structural Roots",
      highlight: "The Bedrock",
    },
    {
      step: "02",
      year: "2012",
      stage: "Architectural Evolution",
      title: "Design Meets Structural Rigor",
      badge: "NEC Studio",
      icon: Compass,
      desc: "Having grown up on dusty construction sites learning structural mechanics firsthand, Ar. Aakhir Choudhary expanded the family legacy into architecture and interiors—bridging heavy civil engineering with refined spatial aesthetics.",
      stats: "Architecture & Interiors",
      highlight: "The Expansion",
    },
    {
      step: "03",
      year: "Today",
      stage: "Next-Gen Evolution",
      title: "Modern Spin-Off for the Next Generation",
      badge: "Bombay Studio (Turnkey & Architecture)",
      icon: Award,
      desc: "Bombay Studio is the contemporary, design-forward spin-off tailored to the lifestyle, smart technology, and aesthetic demands of the next generation—merging 30+ years of civil construction heritage with bespoke turnkey luxury.",
      stats: "200+ Next-Gen Projects",
      highlight: "The Modern Era",
    },
  ];

  const legacyPillars = [
    {
      title: "30+ Years of Field Mastery",
      desc: "Three decades of deep construction knowledge—understanding how buildings are conceived, engineered, and built to last generations.",
    },
    {
      title: "Next-Gen Modern Aesthetics",
      desc: "Contemporary, minimalist, and smart-living spatial planning designed specifically for today's modern homeowners and tastemakers.",
    },
    {
      title: "Foundation to Finish Accountability",
      desc: "Unlike studios that only draw blueprints, we execute every masonry, plumbing, electrical, and bespoke joinery detail under one roof.",
    },
    {
      title: "Zero Execution Guesswork",
      desc: "Our architectural designs are backed by practical civil engineering, eliminating costly site mistakes and structural compromises.",
    },
  ];

  return (
    <section id="legacy" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <History className="w-3.5 h-3.5" />
            <span>Our 30-Year Heritage · Building Trust Since 1992</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            From Humble Beginnings to <br />
            <span className="gold-gradient-text">Next-Generation Luxury Living</span>
          </h2>
          <p className="text-[#A1A1AA] text-base font-light leading-relaxed">
            Great design is built on real experience. Discover how three decades of civil construction evolved into Bombay Studio—the modern architectural spin-off for the next generation.
          </p>
        </div>

        {/* The Emotional Origin Story Card with Founder Portrait */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story & History */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                The Heritage Story
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                &quot;He arrived in Bombay with empty pockets—and built a legacy on his word.&quot;
              </h3>
              <div className="space-y-4 text-sm font-light leading-relaxed">
                <p className="text-[#A1A1AA]">
                  In 1992, <span className="text-white font-medium">Mr. Kalamuddin Choudhary</span> stepped into the relentless city of Bombay with nothing except sheer grit and an unyielding commitment to honest work. On dusty job sites, learning every grain of sand, brick, and beam with his own hands, he founded <strong className="text-white">Noor Engineering Company (NEC)</strong>.
                </p>
                <p className="text-[#A1A1AA]">
                  Decades of delivering honest civil construction earned NEC a revered reputation for precision and reliability across Mumbai. Growing up beside his father on active project sites, <span className="text-white font-medium">Ar. Aakhir Choudhary</span> absorbed the unvarnished reality of construction before studying formal architecture.
                </p>
                <p className="text-[#A1A1AA]">
                  In 2012, this pedigree evolved into <strong className="text-white">NEC Studio</strong>, introducing architectural space planning and turnkey interior design. Today, <strong className="text-[#FCF6BA]">Bombay Studio</strong> stands as the modern spin-off crafted for the next generation—uniting three decades of structural mastery with contemporary, bespoke luxury living.
                </p>
              </div>

              {/* Heritage Stats Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">1992</p>
                  <p className="text-[10px] sm:text-xs text-[#A1A1AA] uppercase tracking-wider">Est. In Mumbai</p>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white">200+</p>
                  <p className="text-[10px] sm:text-xs text-[#A1A1AA] uppercase tracking-wider">Turnkey Projects</p>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">30+ Yrs</p>
                  <p className="text-[10px] sm:text-xs text-[#A1A1AA] uppercase tracking-wider">Civil Pedigree</p>
                </div>
              </div>
            </div>

            {/* Mr. Kalamuddin Choudhary Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl gold-border-glow">
                <img
                  src="/kalamuddin-choudhary.png"
                  alt="Mr. Kalamuddin Choudhary - Founder of Noor Engineering Company (Est. 1992)"
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050505]/90 backdrop-blur-md border border-white/15 space-y-1">
                  <p className="text-white font-bold text-sm tracking-wide uppercase">MR. KALAMUDDIN CHOUDHARY</p>
                  <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">Founder · Noor Engineering Company (1992)</p>
                  <p className="text-[#A1A1AA] text-[11px] font-light italic">&quot;Built on Integrity, Grit &amp; Structural Mastery&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connected & Continued Evolutionary Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              Continuous Lineage &amp; Evolution
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3">
              A Connected Legacy Built Over Three Decades
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
              From heavy civil foundations in 1992 to the next-generation modern design studio today.
            </p>
          </div>

          {/* Timeline Container with Connected Line */}
          <div className="relative">
            {/* Horizontal Connection Track (Desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#FCF6BA] z-0 shadow-[0_0_12px_rgba(212,175,55,0.4)]" />

            {/* Vertical Connection Track (Mobile) */}
            <div className="md:hidden absolute top-10 bottom-10 left-6 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-[#FCF6BA] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 relative z-10">
              {timelineMilestones.map((item, idx) => {
                const IconComponent = item.icon;
                const isLast = idx === timelineMilestones.length - 1;

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-2 ${
                      isLast
                        ? "bg-[#121212] border-2 border-[#D4AF37]/60 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                        : "bg-[#101010] border border-white/10 hover:border-[#D4AF37]/40"
                    }`}
                  >
                    {/* Node Circle along the track */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center font-serif font-bold text-sm border-2 shadow-lg transition-transform group-hover:scale-110 ${
                            isLast
                              ? "bg-[#D4AF37] text-[#050505] border-[#FCF6BA]"
                              : "bg-[#1C1C1C] text-[#D4AF37] border-[#D4AF37]/40"
                          }`}
                        >
                          {item.step}
                        </div>
                        <div>
                          <p className="font-serif text-2xl font-bold text-white">
                            {item.year}
                          </p>
                          <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                            {item.highlight}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isLast
                            ? "bg-[#D4AF37]/20 text-[#FCF6BA]"
                            : "bg-[#1C1C1C] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 mb-6">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          isLast
                            ? "text-[#FCF6BA] bg-[#D4AF37]/20 border-[#D4AF37]/40"
                            : "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20"
                        }`}
                      >
                        {isLast && <Sparkles className="w-3 h-3 text-[#FCF6BA] animate-pulse" />}
                        <span>{item.badge}</span>
                      </span>

                      <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>

                    {/* Card Footer Lineage Link */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                      <div className="flex items-center gap-2 text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>{item.stats}</span>
                      </div>
                      {!isLast && (
                        <div className="hidden md:flex items-center text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Our Legacy Matters Section */}
        <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
              The Bombay Studio Difference
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              Why Our Construction Legacy Matters To You
            </h3>
            <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
              Unlike interior firms that solely produce 3D visual renders, Bombay Studio is the modern spin-off anchored by 30+ years of civil and structural construction knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {legacyPillars.map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#080808] border border-white/10 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm">{pillar.title}</h4>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A1A1AA] font-light">
              30+ Years of Legacy · 200+ Turnkey Projects · Crafted For The Next Generation
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-6 py-3 rounded-full font-semibold"
            >
              <span>Discuss Your Project With Ar. Aakhir</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
