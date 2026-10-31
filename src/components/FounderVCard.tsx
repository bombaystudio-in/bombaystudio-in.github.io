"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Share2, Download, QrCode, MessageCircle, ExternalLink } from "lucide-react";

export default function FounderVCard() {
  const contactDetails = {
    name: "Ar. Aakhir Choudhary",
    role: "Founder & Principal Architect",
    firm: "Bombay Studio",
    tagline: "Design. Detail. Delivered. — Est. 1992",
    phones: [
      { label: "Studio Direct", number: "+91 707070 4181", href: "tel:+917070704181", isPrimary: true },
      { label: "Architect Personal", number: "+91 96643 84181", href: "tel:+919664384181" },
    ],
    emails: [
      { label: "Direct Email", address: "aakhir@bombaystudio.in", href: "mailto:aakhir@bombaystudio.in" },
      { label: "Studio Inquiries", address: "info@bombaystudio.in", href: "mailto:info@bombaystudio.in" },
    ],
    address: "111, Evershine Mall, Chincholi Bunder Mindspace, Malad West, Mumbai - 64",
    website: "https://bombaystudio.in",
    socials: [
      {
        name: "Instagram",
        handle: "@bombaystudio",
        href: "https://www.instagram.com/bombaystudio/",
        icon: Globe,
      },
      {
        name: "LinkedIn",
        handle: "bombay-studio-in",
        href: "https://www.linkedin.com/company/bombay-studio-in/about/?viewAsMember=true",
        icon: Share2,
      },
      {
        name: "WhatsApp",
        handle: "Direct Chat",
        href: "https://wa.me/917070704181?text=Hi%20Ar.%20Aakhir,%20I%20would%20like%20to%20discuss%20an%20interior%20architecture%20project.",
        icon: MessageCircle,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl glass-panel p-6 sm:p-8 md:p-10 border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505]">
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-t-0 border-x-0 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
            Official Digital Business Card (vCard)
          </span>
        </div>
        <a
          href="/founder-vcard.vcf"
          download="Ar-Aakhir-Choudhary-Bombay-Studio.vcf"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#FCF6BA] text-xs font-semibold border border-[#D4AF37]/40 transition-all hover:scale-105"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Save Contact to Phone (.vcf)</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Founder Portrait & Profile */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="relative w-44 h-56 sm:w-48 sm:h-60 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-black mb-4">
            <Image
              src="/team/akhir-chaudhary-founder-portrait.png"
              alt={contactDetails.name}
              fill
              sizes="(max-width: 640px) 176px, 192px"
              className="object-cover object-top filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center">
              <span className="text-[9px] font-mono tracking-widest uppercase bg-black/80 text-[#FCF6BA] px-2 py-0.5 rounded-full border border-white/10">
                Principal Architect
              </span>
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {contactDetails.name}
          </h3>
          <p className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase mt-0.5">
            {contactDetails.role}
          </p>
          <p className="text-[11px] text-[#A1A1AA] font-light mt-1">
            {contactDetails.firm} · {contactDetails.tagline}
          </p>
        </div>

        {/* Center: Contact Channels & Socials */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Action Phone Row */}
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA]">
              Direct Phone Lines
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {contactDetails.phones.map((p) => (
                <a
                  key={p.number}
                  href={p.href}
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-colors ${
                    p.isPrimary
                      ? "bg-[#181818] border-[#D4AF37]/40 text-white hover:border-[#D4AF37]"
                      : "bg-[#0F0F0F] border-white/10 text-[#E4E4E7] hover:border-white/30"
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[9px] text-[#A1A1AA] uppercase leading-none">{p.label}</p>
                    <p className="text-xs font-semibold whitespace-nowrap">{p.number}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Action Email Row */}
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA]">
              Official Email Channels
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {contactDetails.emails.map((e) => (
                <a
                  key={e.address}
                  href={e.href}
                  className="p-2.5 rounded-xl bg-[#0F0F0F] border border-white/10 hover:border-white/30 text-[#E4E4E7] flex items-center gap-2.5 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[9px] text-[#A1A1AA] uppercase leading-none">{e.label}</p>
                    <p className="text-xs font-semibold truncate">{e.address}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Office Address */}
          <div className="p-2.5 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[9px] text-[#A1A1AA] uppercase leading-none">Studio Headquarters</p>
              <p className="text-xs text-[#E4E4E7] mt-0.5 font-light leading-snug">
                {contactDetails.address}
              </p>
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-2 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
              Social Media &amp; Messaging
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {contactDetails.socials.map((s) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37]/50 text-xs text-[#E4E4E7] hover:text-white transition-colors"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{s.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#71717A]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Automatic vCard QR Code */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0A0A0A] border border-[#D4AF37]/30 text-center">
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 p-2 bg-white rounded-xl shadow-xl flex items-center justify-center mb-3">
            <Image
              src="/founder-vcard-qr.svg"
              alt="Scan to add Ar. Aakhir Choudhary to Contacts"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FCF6BA]">
              <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Scan with Phone Camera</span>
            </div>
            <p className="text-[10px] text-[#A1A1AA] leading-snug max-w-[200px]">
              Directly prompts your phone to save full business &amp; founder contact card.
            </p>
          </div>

          <a
            href="/founder-vcard.vcf"
            download="Ar-Aakhir-Choudhary-Bombay-Studio.vcf"
            className="w-full mt-3 py-2 px-3 rounded-lg btn-gold-shiny text-[10px] uppercase tracking-wider font-bold text-center block"
          >
            Download .vcf Card
          </a>
        </div>
      </div>
    </div>
  );
}
