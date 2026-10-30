"use client";

import Link from "next/link";
import { Globe, Share2 } from "lucide-react";
import { SEO_KEYWORD_PAGES } from "@/data/seoKeywords";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-[#A1A1AA] text-xs pt-10 sm:pt-14 pb-28 sm:pb-32 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="inline-block" aria-label="Bombay Studio Home">
              <img
                src="/logo.png"
                alt="Bombay Studio"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-light leading-relaxed max-w-sm text-[#A1A1AA]">
              Bombay Studio is a premier architectural and interior design firm in Mumbai, led by Principal Architect Ar. Aakhir Choudhary. Specialized in high-end residential apartments, villas, turnkey interiors &amp; boutique commercial spaces.
            </p>
            <p className="text-[10px] font-serif tracking-widest text-[#D4AF37] uppercase">
              &quot;Design. Detail. Delivered.&quot;
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/bombaystudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121212] hover:text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
                aria-label="Instagram"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/bombay-studio-in/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#121212] hover:text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
                aria-label="LinkedIn"
              >
                <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Studio</p>
            <ul className="space-y-2">
              <li><Link href="/#about" className="hover:text-white transition-colors">Why Bombay Studio</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">All Projects &amp; Case Studies</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#D4AF37] transition-colors font-medium">Site Work &amp; Gallery</Link></li>
              <li><Link href="/#calculator" className="hover:text-white transition-colors">Cost Calculator</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Studio Team &amp; Leadership</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* SEO Pages Column 1 */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Services in Mumbai</p>
            <ul className="space-y-2">
              {Object.values(SEO_KEYWORD_PAGES).slice(0, 6).map((page) => (
                <li key={page.slug}>
                  <Link href={`/seo/${page.slug}`} className="hover:text-white transition-colors">
                    {page.h1Heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Pages Column 2 */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">Specializations</p>
            <ul className="space-y-2">
              {Object.values(SEO_KEYWORD_PAGES).slice(6, 12).map((page) => (
                <li key={page.slug}>
                  <Link href={`/seo/${page.slug}`} className="hover:text-white transition-colors">
                    {page.h1Heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Full-Width Brand Logo */}
        <div className="py-10 sm:py-16 md:py-20 border-t border-white/10 flex justify-center items-center overflow-hidden">
          <Link href="/" className="w-full block group" aria-label="Bombay Studio Home">
            <img
              src="/logo.png"
              alt="Bombay Studio"
              className="w-full max-h-36 sm:max-h-52 md:max-h-64 lg:max-h-80 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 mx-auto drop-shadow-2xl"
            />
          </Link>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-3.5 text-center text-[11px]">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#A1A1AA]">
            <Link href="/#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20 hidden sm:inline">·</span>
            <Link href="/#contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/20 hidden sm:inline">·</span>
            <a
              href="https://nordible.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#FCF6BA] font-medium transition-colors"
            >
              Developed in Germany by Nordible ↗
            </a>
          </div>
          <p className="text-[#71717A]">© {currentYear} Bombay Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
