import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICES_DATA,
  getAllServiceIds,
  getServiceById,
} from "@/data/services";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Compass,
  KeyRound,
  Sun,
  Hammer,
  Home,
  Briefcase,
  Armchair,
  Eye,
  ClipboardCheck,
  BarChart3,
  Sparkles,
  Phone,
  ShieldCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return {
      title: "Service Not Found | Bombay Studio Mumbai",
    };
  }

  const title = `${service.title} Services in Mumbai | Bombay Studio`;
  const description = `${service.tagline} Delivered with architectural precision by Bombay Studio under Principal Architect Ar. Aakhir Choudhary.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: service.bgImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

const getServiceIcon = (name: string, className = "w-6 h-6") => {
  switch (name) {
    case "Building2":
      return <Building2 className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "KeyRound":
      return <KeyRound className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Hammer":
      return <Hammer className={className} />;
    case "Home":
      return <Home className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "Armchair":
      return <Armchair className={className} />;
    case "Eye":
      return <Eye className={className} />;
    case "ClipboardCheck":
      return <ClipboardCheck className={className} />;
    case "BarChart3":
      return <BarChart3 className={className} />;
    default:
      return <Compass className={className} />;
  }
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const allServices = SERVICES_DATA;
  const otherServices = allServices.filter((s) => s.id !== slug);

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
          <Link href="/services" className="hover:text-[#D4AF37] transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#D4AF37] font-semibold">{service.title}</span>
        </div>

        {/* Hero Banner with Cinematic Background */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black p-8 sm:p-14 mb-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-[0.22] contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold">
              {getServiceIcon(service.iconName, "w-4 h-4")}
              <span>Specialized Architectural Service</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-[#FCF6BA] font-light leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20 inline-flex items-center gap-2"
              >
                <span>Consult On This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918076295595"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/15 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+91 80762 95595</span>
              </a>
            </div>
          </div>
        </div>

        {/* Deliverables & Specifications Grid */}
        <section className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold">
              Scope of Work &amp; Deliverables
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-2">
              What We Deliver Under {service.title}
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-2">
              Strictly engineered specifications, zero hidden contractor shortcuts, and fully accountable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-white text-lg group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Systematic Delivery Process */}
        <section className="mb-20 rounded-3xl glass-panel p-8 sm:p-14 border border-white/10">
          <div className="max-w-2xl mb-12">
            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold">
              Execution Roadmap
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-2">
              How We Execute: Step-by-Step
            </h2>
            <p className="text-sm text-[#A1A1AA] mt-2">
              Our proven 4-stage methodology ensures complete transparency, on-time milestones, and zero cost overruns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#D4AF37]/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-[#D4AF37] block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-serif font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Included Quality Benchmarks */}
        <section className="mb-20">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F0F0F] border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Core Capabilities &amp; Standards
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/50 border border-white/5 flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-xs font-medium text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Link Other Services */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold">
                Explore More Disciplines
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Other Architectural Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold text-[#D4AF37] hover:text-[#FCF6BA] transition-colors inline-flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherServices.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="p-4 rounded-xl bg-[#0F0F0F] border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-[#181818] text-[#D4AF37] flex items-center justify-center mb-3 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  {getServiceIcon(item.iconName, "w-4 h-4")}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-[#A1A1AA] mt-1 inline-flex items-center gap-1 group-hover:text-[#FCF6BA]">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Direct Action Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-[#D4AF37]/40 text-center space-y-5 max-w-4xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] mx-auto flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Discuss Your {service.title} Project With Ar. Aakhir Choudhary
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
            Schedule a confidential consultation to explore blueprints, budget allocation, and turnkey timelines for your Mumbai residence or commercial space.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              Book Architect Consultation
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/15"
            >
              Explore Delivered Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
