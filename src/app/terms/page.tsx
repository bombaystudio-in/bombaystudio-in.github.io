import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Bombay Studio Mumbai",
  description:
    "Terms of Service governing architectural design, interior consultation, and turnkey project execution contracts with Bombay Studio Mumbai.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 30, 2026";

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Agreement &amp; Governance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Terms of <span className="gold-gradient-text">Service</span>
          </h1>
          <p className="text-xs text-[#A1A1AA] font-mono">
            Last Updated: {lastUpdated} · Effective Date: October 2026
          </p>
        </div>

        {/* Legal Terms Content */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 space-y-8 text-[#D4D4D8] text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing bombaystudio.in or submitting an inquiry for architectural design, interior design, or turnkey contracting services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any portion of these terms, please refrain from using this website or engaging our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">2. Scope of Services &amp; Turnkey Execution</h2>
            <p>
              Bombay Studio provides specialized architectural planning, interior styling, modular joinery fabrication, 3D visualization, and complete turnkey civil execution in Mumbai and surrounding areas under the direction of Principal Architect Ar. Aakhir Choudhary.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>All design contracts, scope specifications, material selections, and payment schedules are governed by dedicated project agreements signed prior to site execution.</li>
              <li>Estimated timelines and budgets provided via website calculators or preliminary site visits are advisory estimates subject to detailed site measurement and final material specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              All content on bombaystudio.in—including architectural renderings, high-resolution photography, project case studies, drawings, logos, and written copy—is the exclusive intellectual property of Bombay Studio and protected under copyright laws. No photographs or designs may be reproduced, scraped, or republished without express written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">4. Client Consultations &amp; Site Audits</h2>
            <p>
              Initial site consultations and walkthroughs arranged via the website booking form are provided to understand client design requirements. While our team makes every effort to respond within 2 working hours, consultation availability depends on current project schedules across Mumbai sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">5. Warranty &amp; Handover Standards</h2>
            <p>
              Work executed under our Turnkey Project Agreement includes our studio quality warranties (e.g., against termite infiltration, joinery hardware defects, and waterproof marine ply specifications) as formally documented in the handover certificate delivered upon completion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to website usage or service agreements shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">7. Inquiries &amp; Legal Notices</h2>
            <p>For questions regarding these Terms or our contract agreements, contact:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="mailto:info@bombaystudio.in"
                className="p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#D4AF37] transition-colors flex items-center gap-3 text-xs"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">info@bombaystudio.in</span>
              </a>
              <a
                href="tel:+917070704181"
                className="p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#D4AF37] transition-colors flex items-center gap-3 text-xs"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>+91 707070 4181</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
