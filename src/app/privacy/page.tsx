import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Bombay Studio Mumbai",
  description:
    "Privacy Policy for Bombay Studio Mumbai. Learn how we handle, process, and protect your personal information during architectural and interior consultations.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal &amp; Data Protection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>
          <p className="text-xs text-[#A1A1AA] font-mono">
            Last Updated: {lastUpdated} · Effective Date: October 2026
          </p>
        </div>

        {/* Legal Policy Content */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 space-y-8 text-[#D4D4D8] text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">1. Introduction &amp; Scope</h2>
            <p>
              Bombay Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), led by Principal Architect Ar. Aakhir Choudhary, operates this website (bombaystudio.in) to showcase our architectural, interior design, and turnkey handover portfolio in Mumbai. This Privacy Policy outlines our principles regarding the collection, use, and protection of information obtained through your engagement with our site and consultation forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">2. Information We Collect</h2>
            <p>We collect only the minimal data required to deliver bespoke architectural services:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li><strong className="text-white">Contact &amp; Consultation Data:</strong> Full name, phone number, email address, project typology (e.g., 2BHK, 3BHK, 4BHK, Villa), and site location submitted via our booking forms.</li>
              <li><strong className="text-white">Lead Magnet Data:</strong> Email address provided to receive our Interior Budget Guide or Portfolio PDF.</li>
              <li><strong className="text-white">Technical Analytics:</strong> Anonymized metrics including browser type, referring pages, device configuration, and time spent on page via Google Analytics 4 to optimize performance and usability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">3. How We Use Your Data</h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#A1A1AA]">
              <li>Schedule, coordinate, and conduct architectural design and site walkthrough consultations.</li>
              <li>Deliver requested architectural brochures, material catalogs, and estimated budgets.</li>
              <li>Respond directly to phone, WhatsApp, or email inquiries regarding active projects.</li>
              <li>Ensure website security, detect bot traffic, and maintain high-performance rendering.</li>
            </ul>
            <p className="text-xs italic text-[#D4AF37]">
              We never sell, lease, or rent your personal information to third-party marketing firms or external commercial entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">4. Cookies &amp; Tracking Technologies</h2>
            <p>
              We employ essential operational cookies and anonymized Google Analytics (GA4) measurement tags. You can manage cookie preferences via your web browser settings. Disabling cookies will not affect your ability to browse our project galleries or submit consultation forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">5. Data Retention &amp; Security</h2>
            <p>
              We implement industry-standard encryption, SSL protocols, and restricted server access to protect your personal details against unauthorized access, alteration, or disclosure. Client project inquiries are retained solely for the duration required to deliver services or comply with applicable legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">6. Your Rights</h2>
            <p>
              Under applicable data protection frameworks (including India&apos;s Digital Personal Data Protection Act and international GDPR principles), you have the right to request access to your personal data, request corrections, or request deletion of your consultation contact records by writing directly to our studio.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">7. Contact the Studio</h2>
            <p>For any privacy inquiries, data deletion requests, or formal communications, contact our team:</p>
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
