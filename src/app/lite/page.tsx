import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageSquare, Zap, ArrowLeft, ArrowUpRight, CheckCircle2, Shield } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export const metadata: Metadata = {
  title: "Fast Lite Mode (Slow Networks) | Bombay Studio Mumbai",
  description:
    "Ultra-lightweight, high-speed mobile version of Bombay Studio Mumbai for 2G, 3G, and low-bandwidth connections. Instant access to turnkey pricing, projects, and direct architect line.",
};

export default function LiteModePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-4 py-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Lite Mode Badge & Back Link */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Full Visual Experience</span>
          </Link>
          <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/30">
            <Zap className="w-3 h-3" />
            <span>Lite Mode · Instant Load</span>
          </div>
        </div>

        {/* Brand Header */}
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Bombay Studio <span className="text-[#D4AF37]">Mumbai</span>
          </h1>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            Architectural Design &amp; Turnkey Interiors · Led by Ar. Aakhir Choudhary.
          </p>
        </header>

        {/* Immediate Emergency / Direct Actions for Slow Connections */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+917070704181"
            className="flex flex-col items-center justify-center text-center p-3.5 rounded-xl bg-[#141414] border border-[#D4AF37]/50 text-white hover:bg-[#1E1E1E] transition-colors"
          >
            <Phone className="w-5 h-5 text-[#D4AF37] mb-1" />
            <span className="text-xs font-bold">Call Studio</span>
            <span className="text-[10px] text-[#A1A1AA]">+91 707070 4181</span>
          </a>
          <a
            href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20am%20using%20Lite%20Mode%20and%20want%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-3.5 rounded-xl bg-[#141414] border border-[#25D366]/50 text-white hover:bg-[#1E1E1E] transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366] mb-1" />
            <span className="text-xs font-bold text-[#25D366]">Chat WhatsApp</span>
            <span className="text-[10px] text-[#A1A1AA]">Instant Reply</span>
          </a>
        </div>

        {/* Rapid Budget & Typology Estimator */}
        <section className="p-4 sm:p-5 rounded-2xl bg-[#121212] border border-white/10 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Turnkey Cost &amp; Timeline Estimates</span>
          </h2>
          <div className="divide-y divide-white/10 text-xs">
            <div className="py-2.5 flex items-center justify-between">
              <div>
                <p className="font-bold text-white">2BHK Complete Interior</p>
                <p className="text-[11px] text-[#A1A1AA]">60–75 Days Handover</p>
              </div>
              <p className="font-mono text-[#FCF6BA] font-bold text-sm">₹18–25 Lakhs</p>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <div>
                <p className="font-bold text-white">3BHK Luxury Interior</p>
                <p className="text-[11px] text-[#A1A1AA]">90–120 Days Handover</p>
              </div>
              <p className="font-mono text-[#FCF6BA] font-bold text-sm">₹28–45 Lakhs</p>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <div>
                <p className="font-bold text-white">4BHK &amp; Penthouse Bespoke</p>
                <p className="text-[11px] text-[#A1A1AA]">120–150 Days Handover</p>
              </div>
              <p className="font-mono text-[#FCF6BA] font-bold text-sm">₹50 Lakhs+</p>
            </div>
          </div>
        </section>

        {/* Quick Project Directory */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Delivered Projects ({PROJECTS_DATA.length})
            </h2>
            <Link href="/projects" className="text-xs text-[#A1A1AA] hover:text-white flex items-center gap-1">
              <span>Full Photos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {PROJECTS_DATA.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="p-3 rounded-xl bg-[#141414] border border-white/5 hover:border-[#D4AF37]/50 flex items-center justify-between transition-colors"
              >
                <div>
                  <p className="font-bold text-white">{project.name}</p>
                  <p className="text-[10px] text-[#A1A1AA]">{project.typology} · {project.location}</p>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] px-2 py-0.5 rounded bg-white/5">
                  {project.photoCount}p
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Core Guarantees Strip */}
        <section className="p-4 rounded-xl bg-[#111111] border border-white/10 text-xs space-y-2">
          <p className="font-bold text-white flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>Studio Handover Standards</span>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#A1A1AA] text-[11px]">
            <li>10-Year Anti-Termite &amp; Joinery Warranty on IS 710 Marine Plywood.</li>
            <li>Zero hidden cost escalations — transparent itemized BOQ quotes.</li>
            <li>Direct on-site supervision by Principal Architect Ar. Aakhir Choudhary.</li>
          </ul>
        </section>

        {/* Quick Contact Form (Lightweight native POST or Direct WhatsApp) */}
        <section className="p-5 rounded-2xl bg-[#121212] border border-[#D4AF37]/30 space-y-3">
          <h3 className="font-serif font-bold text-base text-white">Book Free Site Walkthrough</h3>
          <p className="text-xs text-[#A1A1AA]">
            Fill out the form below and our team will reach out within 2 working hours.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20please%20contact%20me%20for%20a%20site%20consultation"
              className="w-full btn-gold-shiny text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 font-bold"
            >
              <span>Instant WhatsApp Booking ↗</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-4 border-t border-white/10 text-[11px] text-[#71717A] space-y-2">
          <p>
            Developed in Germany 🇩🇪 by{" "}
            <a href="https://nordible.co/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37]">
              Nordible ↗
            </a>
          </p>
          <div className="flex justify-center gap-4 text-xs text-[#A1A1AA]">
            <Link href="/" className="hover:text-white">Full Website</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
