"use client";

import Link from "next/link";
import { Hammer, Compass, Award, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface LegacySectionProps {
  isTeaser?: boolean;
}

export default function LegacySection({ isTeaser = false }: LegacySectionProps) {
  const timelineMilestones = [
    {
      step: "01",
      year: "1992",
      stage: "Genesis & Civil Pedigree",
      title: "The Beginning",
      badge: "Noor Engineering Co.",
      icon: Hammer,
      desc: "Founded on raw site precision and integrity, laying Mumbai's structural and civil foundations.",
      stats: "Civil Roots",
      highlight: "Foundation",
    },
    {
      step: "02",
      year: "2012",
      stage: "Architectural Evolution",
      title: "Design Meets Engineering",
      badge: "Architecture Studio",
      icon: Compass,
      desc: "Ar. Aakhir Choudhary bridges heavy civil engineering with refined spatial aesthetics.",
      stats: "Design Rigor",
      highlight: "Evolution",
    },
    {
      step: "03",
      year: "Today",
      stage: "Next-Gen Evolution",
      title: "Bombay Studio",
      badge: "Turnkey Architecture",
      icon: Award,
      desc: "Bespoke turnkey luxury for modern living, backed by 30+ years of construction pedigree.",
      stats: "Turnkey Mastery",
      highlight: "Modern Era",
    },
  ];

  return (
    <section id="legacy" className="py-12 sm:py-16 lg:py-24 bg-[#080808] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            From Humble Beginnings to <br />
            <span className="gold-gradient-text">Next-Generation Luxury Living</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Great design is built on real experience. Three decades of civil construction evolved into Bombay Studio.
          </p>
        </div>

        {/* The Emotional Origin Story Card with Founder Portrait */}
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-white/15 mb-8 sm:mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Story & History */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                &quot;He arrived in Bombay with empty pockets—and built a legacy on his word.&quot;
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm font-light leading-relaxed">
                <p className="text-[#A1A1AA]">
                  In 1992, <span className="text-white font-medium">Mr. Kalamuddin Choudhary</span> founded <strong className="text-white">Noor Engineering Company</strong> on uncompromising site precision and structural mastery across Mumbai.
                </p>
                <p className="text-[#A1A1AA]">
                  Today, <span className="text-white font-medium">Ar. Aakhir Choudhary</span> elevates that 30-year civil pedigree into <strong className="text-[#FCF6BA]">Bombay Studio</strong>—crafting refined, turnkey architectural residences.
                </p>
              </div>

              {/* Heritage Stats Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-white/10 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-lg sm:text-xl font-bold gold-gradient-text">1992</p>
                  <p className="text-[9px] sm:text-[10px] text-[#A1A1AA] uppercase tracking-wider">Est. In Mumbai</p>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-lg sm:text-xl font-bold text-white">200+</p>
                  <p className="text-[9px] sm:text-[10px] text-[#A1A1AA] uppercase tracking-wider">Turnkey Projects</p>
                </div>
                <div className="p-3 rounded-xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-lg sm:text-xl font-bold gold-gradient-text">30+ Yrs</p>
                  <p className="text-[9px] sm:text-[10px] text-[#A1A1AA] uppercase tracking-wider">Civil Pedigree</p>
                </div>
              </div>
            </div>

            {/* Mr. Kalamuddin Choudhary Portrait */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative aspect-[3/4] max-h-[36svh] sm:max-h-[40svh] w-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl gold-border-glow bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] flex items-center justify-center p-2">
                <img
                  src="/team/kalamuddin-choudhary.png"
                  alt="Mr. Kalamuddin Choudhary - Founder of Noor Engineering Company (Est. 1992)"
                  className="w-full h-full object-contain object-center filter contrast-105"
                />
              </div>
              <div className="w-full mt-2.5 p-2.5 rounded-xl bg-[#121212] border border-white/10 space-y-0.5 text-center">
                <p className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase">MR. KALAMUDDIN CHOUDHARY</p>
                <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Founder · Noor Engineering Company (1992)</p>
              </div>
            </div>
          </div>
        </div>

        {/* If Teaser: Display Direct Call to Action to Dedicated Legacy Page */}
        {isTeaser ? (
          <div className="text-center pt-2 pb-2">
            <Link
              href="/legacy"
              className="inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-7 py-3 rounded-full font-semibold shadow-md"
            >
              <span>Explore Full 30-Year Story &amp; Evolutionary Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Connected & Continued Evolutionary Timeline on Dedicated Page */
          <div className="mb-6 sm:mb-8">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5">
                Evolutionary Timeline
              </h3>
              <p className="text-xs text-[#A1A1AA] font-light">
                From heavy civil foundations in 1992 to the next-generation modern design studio today.
              </p>
            </div>

            {/* Timeline Container with Connected Line */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
                {timelineMilestones.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isLast = idx === timelineMilestones.length - 1;

                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${
                        isLast
                          ? "bg-[#121212] border-2 border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
                          : "bg-[#101010] border border-white/10 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      {/* Node Circle along the track */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-xs border-2 shadow-md transition-transform group-hover:scale-105 ${
                              isLast
                                ? "bg-[#D4AF37] text-[#050505] border-[#FCF6BA]"
                                : "bg-[#1C1C1C] text-[#D4AF37] border-[#D4AF37]/40"
                            }`}
                          >
                            {item.step}
                          </div>
                          <div>
                            <p className="font-serif text-lg font-bold text-white leading-tight">
                              {item.year}
                            </p>
                            <p className="text-[9px] text-[#A1A1AA] uppercase tracking-wider">
                              {item.highlight}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isLast
                              ? "bg-[#D4AF37]/20 text-[#FCF6BA]"
                              : "bg-[#1C1C1C] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505]"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2 mb-4">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                            isLast
                              ? "text-[#FCF6BA] bg-[#D4AF37]/20 border-[#D4AF37]/40"
                              : "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20"
                          }`}
                        >
                          {isLast && <Sparkles className="w-2.5 h-2.5 text-[#FCF6BA] animate-pulse" />}
                          <span>{item.badge}</span>
                        </span>

                        <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {item.title}
                        </h4>

                        <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer Lineage Link */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-medium">
                        <div className="flex items-center gap-1.5 text-white/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{item.stats}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
