"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Phone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";

const CATEGORIES = [
  "All",
  "Site Execution",
  "Consultation",
  "Living",
  "Wardrobe",
  "Bathroom",
] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const navigateLightbox = (dir: number) => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + dir + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems]);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Link */}
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
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Unfiltered Architectural Proof</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Site Work &amp; <span className="gold-gradient-text">Completed Handovers</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed">
            Every home we design is backed by rigorous on-site supervision. Explore real, unedited photographs of our craftsmen, material showroom audits, joinery installations, and final handovers across Mumbai.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === category).length;

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#D4AF37] text-[#050505] shadow-lg shadow-[#D4AF37]/20 scale-105 font-bold"
                    : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/25"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-black/20 text-[#050505]" : "bg-white/10 text-[#A1A1AA]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Immersive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/15 bg-[#121212] cursor-pointer hover:border-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/15"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/15 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                  {item.tag || item.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#FCF6BA] font-medium bg-[#050505]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  {item.location}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-serif font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                  {item.caption}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to inspect high-res photo ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA Card */}
        <div className="mt-20 rounded-3xl glass-panel p-8 sm:p-12 gold-border-glow text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            Turnkey Execution With Zero Subcontracting
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Ready For A Transparent, Flawless Interior Handover?
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light max-w-2xl mx-auto">
            Book a complimentary architectural consultation with Ar. Aakhir Choudhary to review materials, timeline guarantees, and itemized cost estimates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-8 py-3.5 rounded-full"
            >
              <span>Schedule Free Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917070704181"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] text-xs font-semibold transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Studio Line: <strong className="text-[#FCF6BA] font-mono">+91 707070 4181</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#1C1C1C] text-[#A1A1AA] hover:text-white hover:border-[#D4AF37] border border-white/10 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next Buttons */}
          <button
            onClick={() => navigateLightbox(-1)}
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1C1C1C]/80 hover:bg-[#1C1C1C] text-white border border-white/15 hover:border-[#D4AF37] transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigateLightbox(1)}
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1C1C1C]/80 hover:bg-[#1C1C1C] text-white border border-white/15 hover:border-[#D4AF37] transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-4xl w-full rounded-3xl glass-panel border border-[#D4AF37]/40 overflow-hidden shadow-2xl bg-[#0A0A0A]">
            <div className="relative max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#121212] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#D4AF37] text-[#050505] text-[10px] font-bold uppercase tracking-wider">
                    {selectedItem.tag || selectedItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#FCF6BA]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {selectedItem.location}
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedItem.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light max-w-xl">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="shrink-0 flex sm:flex-col gap-2">
                <Link
                  href="/#contact"
                  onClick={() => setSelectedItem(null)}
                  className="w-full text-center btn-gold-shiny text-xs uppercase tracking-wider px-6 py-3 rounded-xl"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20saw%20your%20site%20execution%20portfolio%20and%20want%20to%20inquire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2.5 rounded-xl bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold hover:bg-[#D4AF37]/10 transition-colors"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
