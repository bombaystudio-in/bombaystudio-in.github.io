import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Award, Compass, Hammer, Sparkles, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & 30-Year Architectural Legacy | Bombay Studio Mumbai",
  description:
    "Discover the origin story of Bombay Studio. Founded by Mr. Kalamuddin Choudhary in 1992 as Noor Engineering Company and evolved into a turnkey luxury architecture studio under Ar. Aakhir Choudhary.",
};

export default function AboutPage() {
  const timelineMilestones = [
    {
      step: "01",
      year: "1992",
      stage: "Genesis & Civil Pedigree",
      title: "The Beginning",
      badge: "Noor Engineering Co.",
      icon: Hammer,
      desc: "Founded by Mr. Kalamuddin Choudhary on raw site precision, structural integrity, and word-of-mouth reputation across Mumbai.",
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
      desc: "Principal Architect Ar. Aakhir Choudhary bridges heavy civil engineering with refined spatial aesthetics and high-end interiors.",
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
      desc: "Bespoke turnkey luxury for modern living, backed by 30+ years of construction pedigree and locked BOQ accountability.",
      stats: "Turnkey Mastery",
      highlight: "Modern Era",
    },
  ];

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

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
            About Bombay Studio · 30-Year Pedigree
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            From Humble Beginnings to <br />
            <span className="gold-gradient-text">Next-Generation Luxury Living</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Great architecture is never born on a computer screen alone. It is built on three decades of civil construction discipline, structural precision, and unwavering word-of-mouth trust.
          </p>
        </div>

        {/* The Emotional Origin Story Card with Founder Portrait */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/15 mb-16 relative overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#050505] to-[#121008] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story & History */}
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold inline-block">
                The Founder Story · 1992
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                &quot;He arrived in Bombay with empty pockets—and built a legacy on his word.&quot;
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm font-light leading-relaxed text-[#A1A1AA]">
                <p>
                  In 1992, <span className="text-white font-medium">Mr. Kalamuddin Choudhary</span> established <strong className="text-white">Noor Engineering Company</strong>. Armed with technical grit and uncompromising site ethics, he earned the trust of Mumbai&apos;s toughest developers and private homeowners. For over thirty years, his word was his contract: no shortcuts, no substandard concrete, no excuses.
                </p>
                <p>
                  Today, his son, <span className="text-white font-medium">Principal Architect Ar. Aakhir Choudhary</span>, elevates that hard-earned 30-year civil foundation into <strong className="text-[#FCF6BA]">Bombay Studio</strong>. We marry heavy civil rigor with contemporary interior architecture, crafting bespoke turnkey residences and commercial spaces that stand the test of time.
                </p>
              </div>

              {/* Heritage Stats Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                <div className="p-3 rounded-2xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">1992</p>
                  <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">Est. In Mumbai</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white">200+</p>
                  <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">Completed Sites</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#121212] border border-white/5">
                  <p className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">30+ Yrs</p>
                  <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">Civil Pedigree</p>
                </div>
              </div>
            </div>

            {/* Mr. Kalamuddin Choudhary Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative aspect-[3/4] h-[320px] sm:h-[380px] w-auto max-w-[280px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl gold-border-glow bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] flex items-center justify-center p-2">
                <Image
                  src="/team/kalamuddin-choudhary.png"
                  alt="Mr. Kalamuddin Choudhary - Founder of Noor Engineering Company (Est. 1992)"
                  fill
                  sizes="280px"
                  className="object-contain object-center filter contrast-105 p-2"
                />
              </div>
              <div className="w-full max-w-[280px] mt-3 p-3 rounded-xl bg-[#121212] border border-white/10 space-y-0.5 text-center shadow-lg">
                <p className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase">MR. KALAMUDDIN CHOUDHARY</p>
                <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-wider font-mono">Founder · Noor Engineering Co. (1992)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Evolutionary Timeline */}
        <div className="mb-20 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold">
              The Evolution
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Three Decades of Growth
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
              From heavy civil structural engineering in 1992 to turnkey luxury interior architecture today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {timelineMilestones.map((milestone, idx) => {
              const IconComp = milestone.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-4 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#D4AF37] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-mono uppercase tracking-wider">
                      {milestone.badge}
                    </p>
                    <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A1A1AA]">
                    <span>Stage {milestone.step}</span>
                    <span className="text-[#D4AF37] font-semibold">{milestone.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Links to Team & Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link
            href="/team"
            className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between space-y-4"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37]">
                Leadership &amp; Studio Team
              </span>
              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors mt-1">
                Meet the Architects
              </h3>
              <p className="text-xs text-[#A1A1AA] font-light mt-2 leading-relaxed">
                Discover our multidisciplinary team of licensed architects, interior designers, 3D visualizers, and project execution leads.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#D4AF37] inline-flex items-center gap-1">
              <span>View Team Profiles</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/why-us/stress-free-turnkey"
            className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between space-y-4"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37]">
                Quality Assurance
              </span>
              <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors mt-1">
                Our Architectural Standards
              </h3>
              <p className="text-xs text-[#A1A1AA] font-light mt-2 leading-relaxed">
                Learn about our strict BOQ price locks, penalty-backed handover dates, and 10-year structural warranty policies.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#D4AF37] inline-flex items-center gap-1">
              <span>Explore Studio Standards</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Consultation Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 max-w-4xl mx-auto">
          <Sparkles className="w-7 h-7 text-[#D4AF37] mx-auto animate-pulse" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Carry the Legacy Into Your Next Home
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto leading-relaxed">
            Schedule a site consultation with Ar. Aakhir Choudhary to experience stress-free turnkey execution backed by three decades of construction pedigree.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 font-bold"
            >
              <span>Schedule Free Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917070704181"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] text-white border border-white/15 text-xs font-semibold hover:border-[#D4AF37] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Direct Studio Line</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
