import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TYPOLOGIES_DATA,
  getAllTypologySlugs,
  getTypologyBySlug,
} from "@/data/typologies";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Building,
  Phone,
  Layers,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTypologySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getTypologyBySlug(slug);

  if (!item) {
    return {
      title: "Typology Not Found | Bombay Studio Mumbai",
    };
  }

  const title = `${item.name} | Architectural Design & Turnkey Build Mumbai | Bombay Studio`;
  const description = `${item.description} Turnkey execution by Bombay Studio under Principal Architect Ar. Aakhir Choudhary.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: item.heroImage,
          width: 1200,
          height: 630,
          alt: item.name,
        },
      ],
    },
  };
}

export default async function TypologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getTypologyBySlug(slug);

  if (!item) {
    notFound();
  }

  // Related delivered projects matching this typology
  const matchingProjects =
    item.matchingCategory === "All"
      ? PROJECTS_DATA.slice(0, 3)
      : PROJECTS_DATA.filter((p) => p.category === item.matchingCategory).slice(0, 3);

  const allSlugs = getAllTypologySlugs();
  const otherTypologies = allSlugs
    .filter((s) => s !== slug)
    .map((s) => TYPOLOGIES_DATA[s]);

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
          <Link href="/projects" className="hover:text-[#D4AF37] transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-[#D4AF37] font-semibold">{item.name}</span>
        </div>

        {/* Hero Banner with Cinematic Background */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black p-8 sm:p-14 mb-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={item.heroImage}
              alt={item.name}
              className="w-full h-full object-cover filter brightness-[0.28] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold inline-block">
              {item.heroBadge}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {item.name}
            </h1>

            <p className="font-serif text-lg sm:text-2xl text-[#FCF6BA] font-light italic">
              {item.subtitle}
            </p>

            <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed pt-2">
              {item.longDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="btn-gold-shiny text-xs uppercase tracking-wider px-7 py-3.5 rounded-full inline-flex items-center gap-2 font-bold"
              >
                <span>Book Site Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-full bg-[#121212] text-white border border-white/15 text-xs font-semibold hover:border-[#D4AF37] transition-colors inline-flex items-center gap-2"
              >
                <span>View Delivered Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scope of Execution & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Architectural Scope */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0F0F0F] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Design &amp; Execution Scope
                </h2>
                <p className="text-xs text-[#A1A1AA]">
                  Single-source turnkey accountability from concept to key handover
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#E4E4E7]">
              {item.scope.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certified Materials & Assurances */}
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0F0F0F] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Material Standards &amp; Warranties
                </h2>
                <p className="text-xs text-[#A1A1AA]">
                  Certified luxury specifications with zero compromise on durability
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                  Material Grades Specified
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#E4E4E7]">
                  {item.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                  Client Deliverables &amp; Guarantees
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#E4E4E7]">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FCF6BA]" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Delivered Projects Grid */}
        {matchingProjects.length > 0 && (
          <div className="mb-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold">
                  Executed Sites
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                  Recent Delivered {item.name}
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs font-semibold text-[#D4AF37] hover:text-[#FCF6BA] inline-flex items-center gap-1"
              >
                <span>View All 12 Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {matchingProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-3 right-3 text-[10px] font-mono text-[#D4AF37] bg-black/80 px-2 py-0.5 rounded-full border border-white/10">
                      {project.photoCount} Photos
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-[11px] font-mono text-[#D4AF37] uppercase">
                      {project.typology} · {project.location}
                    </p>
                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                      {project.name}
                    </h3>
                    <div className="pt-2 flex items-center justify-between text-xs text-[#A1A1AA] border-t border-white/5">
                      <span>Turnkey Completed</span>
                      <span className="text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other Project Typologies Switcher */}
        <div className="mb-16 p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-wider font-semibold">
              Explore Portfolio
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Other Architectural Typologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {otherTypologies.map((other) => (
              <Link
                key={other.slug}
                href={`/typologies/${other.slug}`}
                className="p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#181818] transition-all text-center group"
              >
                <Building className="w-5 h-5 text-[#D4AF37] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-serif font-bold text-xs text-white group-hover:text-[#D4AF37] transition-colors">
                  {other.name}
                </p>
                <p className="text-[10px] text-[#A1A1AA] mt-0.5">{other.heroBadge}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Consultation Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-5 max-w-4xl mx-auto">
          <Sparkles className="w-7 h-7 text-[#D4AF37] mx-auto animate-pulse" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Ready to Design Your <span className="gold-gradient-text">{item.name}?</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light max-w-xl mx-auto leading-relaxed">
            Schedule a confidential site consultation with Ar. Aakhir Choudhary to discuss your layout, materials, and turnkey estimation.
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
