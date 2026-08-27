"use client";

import Link from "next/link";
import { Globe, Video, Share2 } from "lucide-react";
import { SEO_KEYWORD_PAGES } from "@/data/seoKeywords";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-[#A1A1AA] text-xs pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Bombay Studio Home">
              <img
                src="/logo.png"
                alt="Bombay Studio"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-light leading-relaxed max-w-sm text-[#A1A1AA]">
              Bombay Studio is a premier architectural and interior design firm in Mumbai, led by Principal Architect Ar. Aakhir Choudhary. Specialized in high-end residential apartments, villas, turnkey interiors &amp; boutique commercial spaces.
            </p>
            <p className="text-[11px] font-serif tracking-widest text-[#D4AF37] uppercase">
              &quot;Design. Detail. Delivered.&quot;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/bombaystudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#121212] hover:text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
                aria-label="Instagram"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#121212] hover:text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
                aria-label="YouTube"
              >
                <Video className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/company/bombay-studio-in/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#121212] hover:text-[#D4AF37] border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
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

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} Bombay Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://nordible.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
              Developed in Germany by Nordible ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
