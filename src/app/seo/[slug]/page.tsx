import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { SEO_KEYWORD_PAGES } from "@/data/seoKeywords";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import CostCalculatorSection from "@/components/CostCalculatorSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SEO_KEYWORD_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageData = SEO_KEYWORD_PAGES[slug];
  if (!pageData) return {};

  return {
    title: pageData.metaTitle,
    description: pageData.metaDesc,
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDesc,
      url: `https://bombaystudio.in/seo/${slug}`,
    },
    alternates: {
      canonical: `https://bombaystudio.in/seo/${slug}`,
    },
  };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const pageData = SEO_KEYWORD_PAGES[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-10">
      {/* Hero Header */}
      <section className="py-20 bg-[#050505] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3 block">
              Bombay Studio · Mumbai Location Services
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {pageData.h1Heading}
            </h1>
            <p className="text-lg text-[#A1A1AA] font-light leading-relaxed mb-8">
              {pageData.subheading}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#050505] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-lg"
              >
                Book Free Consultation ↗
              </Link>
              <a
                href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20want%20to%20book%20a%20free%20interior%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121212] hover:bg-[#1C1C1C] text-white font-semibold text-xs px-6 py-3.5 rounded-full border border-white/15 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                <span>WhatsApp Architectural Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="p-8 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Overview &amp; Design Philosophy
                </h2>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                  {pageData.overviewText}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-6">
                  Why Work With Bombay Studio?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pageData.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[#121212] border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs text-white font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Case Study Projects */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-6">
                  Recent Handovers in This Category
                </h2>
                <div className="flex flex-wrap gap-3">
                  {pageData.keyProjects.map((proj, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-[#121212] border border-white/10 text-xs font-semibold text-[#D4AF37]"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {pageData.faq && pageData.faq.length > 0 && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {pageData.faq.map((f, idx) => (
                      <div key={idx} className="p-6 rounded-xl bg-[#121212] border border-white/10 space-y-2">
                        <h3 className="font-bold text-white text-base">{f.q}</h3>
                        <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/15 space-y-4 sticky top-28 shadow-2xl">
                <h3 className="font-serif text-xl font-bold text-white">
                  Schedule Site Visit
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light">
                  Get a comprehensive BOQ estimate and sample material catalog delivered to your site.
                </p>

                <Link
                  href="/#contact"
                  className="w-full text-center block bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#050505] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all"
                >
                  Request Call Back
                </Link>

                <a
                  href="tel:+917070704181"
                  className="w-full text-center block bg-[#1C1C1C] text-white font-semibold text-xs py-3.5 rounded-xl border border-[#D4AF37]/40 hover:bg-[#262626]"
                >
                  Direct Studio Line: <span className="text-[#FCF6BA] font-mono font-bold">+91 707070 4181</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <CostCalculatorSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
