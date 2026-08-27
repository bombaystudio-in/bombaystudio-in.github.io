"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight, Sparkles, FileText } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#121212] text-[#D4AF37] text-xs py-2 px-4 text-center font-medium tracking-wide border-b border-white/10 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0 text-[#FCF6BA]" />
        <span className="truncate">Now booking select luxury projects for 2026–27 · Mumbai &amp; Alibaug</span>
        <Link href="/#contact" className="underline hover:text-white transition-colors ml-1 shrink-0 font-semibold">
          Enquire Now ↗
        </Link>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-[#050505]/50 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group shrink-0 flex items-center py-1" aria-label="Bombay Studio Home">
            <img
              src="/logo.png"
              alt="Bombay Studio"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 text-xs font-medium tracking-wide text-[#A1A1AA]">
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">
              Site Work
            </Link>
            <Link href="/#calculator" className="hover:text-white transition-colors">
              Cost Calculator
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <a
              href="/bombay-studio-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Brochure PDF</span>
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#contact"
              className="group flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-6 py-2.5 rounded-full"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-white hover:bg-[#1C1C1C] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-4 font-medium text-base text-white">
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                About
              </Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                Services
              </Link>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                Projects &amp; Case Studies
              </Link>
              <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                Site Work &amp; Gallery
              </Link>
              <Link href="/#calculator" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                Cost Calculator
              </Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 border-b border-white/5 hover:text-[#D4AF37]">
                FAQ
              </Link>
              <a href="/bombay-studio-portfolio.pdf" target="_blank" rel="noopener noreferrer" className="py-1 border-b border-white/5 text-[#D4AF37] flex items-center gap-1.5 font-semibold">
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>Presentation E-Brochure PDF ↗</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center btn-gold-shiny text-sm uppercase py-3 rounded-full"
              >
                Contact Us
              </Link>
              <a
                href="tel:+917070704181"
                className="w-full text-center flex items-center justify-center gap-2 bg-[#121212] text-white font-semibold text-sm py-3 rounded-full border border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Studio Line: +91 707070 4181</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
