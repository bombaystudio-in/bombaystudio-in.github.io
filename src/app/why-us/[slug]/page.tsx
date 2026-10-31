import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  WHY_US_DATA,
  getAllWhyUsSlugs,
  getWhyUsBySlug,
} from "@/data/whyUs";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Phone,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWhyUsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getWhyUsBySlug(slug);

  if (!pillar) {
    return {
      title: "Standard Not Found | Bombay Studio Mumbai",
    };
  }

  const title = `${pillar.title} | Bombay Studio Standards Mumbai`;
  const description = `${pillar.summary} Guaranteed by Bombay Studio under Principal Architect Ar. Aakhir Choudhary.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: pillar.bgImage,
          width: 1200,
          height: 630,
          alt: pillar.title,
        },
      ],
    },
  };
}

export default async function WhyUsDetailPage({ params }: Props) {
  const { slug } = await params;
  const pillar = getWhyUsBySlug(slug);

  if (!pillar) {
    notFound();
  }

  const allSlugs = getAllWhyUsSlugs();
  const otherPillars = allSlugs
    .filter((s) => s !== slug)
    .map((s) => WHY_US_DATA[s]);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 text-xs text-[#A1A1AA] mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
            About Bombay Studio
          </Link>
          <span>/</span>
          <span className="text-[#D4AF37] font-semibold">{pillar.badge}</span>
        </div>

        {/* Hero Banner with Cinematic Background */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black p-8 sm:p-14 mb-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={pillar.bgImage}
              alt={pillar.title}
              fill
              priority
              sizes="100vw"
              className="object-cover filter brightness-[0.25] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold inline-block">
              {pillar.badge}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {pillar.title}
            </h1>

            <p className="font-serif text-lg sm:text-2xl text-[#FCF6BA] font-light italic">
              {pillar.subtitle}
            </p>

            <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed pt-2">
              {pillar.detailedDescription}
            </p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10 max-w-lg">
              {pillar.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">
                    {m.stat}
                  </p>
                  <p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider mt-0.5 font-mono">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="btn-gold-shiny text-xs uppercase tracking-wider px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold"
              >
                <span>Schedule Studio Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Standards vs Client Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Engineering Standards */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0F0F0F] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Our Architectural Standards
                </h2>
                <p className="text-xs text-[#A1A1AA]">
                  Strict technical protocols executed on every site
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#E4E4E7]">
              {pillar.standards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Written Client Guarantees */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0F0F0F] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Contractual Guarantees
                </h2>
                <p className="text-xs text-[#A1A1AA]">
                  Written commitments embedded into your legal agreement
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#E4E4E7]">
              {pillar.clientGuarantees.map((cg, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FCF6BA] shrink-0 mt-0.5" />
                  <span>{cg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other Why Choose Us Pillars */}
        <div className="mb-16 p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold">
              The Bombay Studio Difference
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Explore Our Other Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherPillars.map((other) => (
              <Link
                key={other.slug}
                href={`/why-us/${other.slug}`}
                className="p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#181818] transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    {other.badge}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors mt-1">
                    {other.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] font-light mt-1.5 line-clamp-2">
                    {other.summary}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                  <span>Read Full Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Consultation Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 max-w-4xl mx-auto">
          <Sparkles className="w-7 h-7 text-[#D4AF37] mx-auto animate-pulse" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Experience the <span className="gold-gradient-text">Bombay Studio Standard</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto leading-relaxed">
            Schedule a site consultation with Ar. Aakhir Choudhary to discuss your layout, materials, and turnkey estimation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 font-bold"
            >
              <span>Book Site Consultation</span>
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
