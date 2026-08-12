"use client";

import { useState } from "react";
import { Filter, Eye, Sparkles } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Living" | "Bedroom" | "Kitchen" | "Bathroom" | "Wardrobe" | "Site Execution" | "Consultation";
  image: string;
  location: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Client Material Selection Lounge",
    category: "Consultation",
    location: "Studio HQ",
    image: "/portfolio/client-consultation-material-selection.jpg",
    caption: "Akhir Chaudhary guiding clients through stone, veneer & wood shade samples.",
  },
  {
    id: "2",
    title: "Plastering Crew Site Handover",
    category: "Site Execution",
    location: "Bandra Residence",
    image: "/portfolio/plastering-crew-trust-photo.jpg",
    caption: "On-site plastering & civil crew after completing smooth POP wall finishes.",
  },
  {
    id: "3",
    title: "Carved Relief Wall Panel Inspection",
    category: "Living",
    location: "Worli Penthouse",
    image: "/portfolio/carved-wall-panel-inspection.jpg",
    caption: "Millimetric quality audit of custom carved teal relief feature wall.",
  },
  {
    id: "4",
    title: "Carpentry & Joinery Master Crew",
    category: "Site Execution",
    location: "Juhu Villa",
    image: "/portfolio/carpentry-crew-site-execution.jpg",
    caption: "Dedicated site carpentry team installing BWP marine plywood carcasses.",
  },
  {
    id: "5",
    title: "Glass Wardrobe Shutter Fitting",
    category: "Wardrobe",
    location: "Lower Parel Suite",
    image: "/portfolio/glass-wardrobe-shutter-inspection.jpg",
    caption: "Checking alignment on tinted glass wardrobes with sensor LED strips.",
  },
  {
    id: "6",
    title: "High-Rise Balcony Grid Panel Audit",
    category: "Living",
    location: "Prabhadevi High-Rise",
    image: "/portfolio/highrise-balcony-wood-panel-inspection.jpg",
    caption: "Inspecting dark walnut grid wall panelling overlooking Mumbai skyline.",
  },
  {
    id: "7",
    title: "Veneer Showroom Family Consultation",
    category: "Consultation",
    location: "Material Showroom",
    image: "/portfolio/veneer-showroom-family-consultation.jpg",
    caption: "Reviewing full-height natural wood veneers directly with clients.",
  },
  {
    id: "8",
    title: "Commercial Backlit Mirror Inspection",
    category: "Site Execution",
    location: "BKC Commercial Fitout",
    image: "/portfolio/commercial-fitout-mirror-inspection.jpg",
    caption: "Testing custom circular illuminated mirror fixtures in commercial corridor.",
  },
  {
    id: "9",
    title: "Vanity Mirror Light Testing",
    category: "Bathroom",
    location: "Khar Residence",
    image: "/portfolio/vanity-mirror-light-testing.jpg",
    caption: "Checking 2700K warm LED perimeter lighting on vanity mirrors.",
  },
  {
    id: "10",
    title: "Drawing Review With Site Contractors",
    category: "Site Execution",
    location: "Thane Duplex",
    image: "/portfolio/drawing-review-with-contractors.jpg",
    caption: "Explaining 2D working blueprints to site engineers before civil work.",
  },
  {
    id: "11",
    title: "Paint Shade Card Site Walkthrough",
    category: "Site Execution",
    location: "Colaba Apartment",
    image: "/portfolio/site-paint-shade-card-review.jpg",
    caption: "Finalizing ICA paint codes directly on site with lead painter.",
  },
  {
    id: "12",
    title: "Painting & Finishing Crew Handoff",
    category: "Site Execution",
    location: "Santacruz Home",
    image: "/portfolio/painting-crew-site-handover.jpg",
    caption: "Akhir with the site finishing team after white-glove cleaning.",
  },
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Site Execution",
    "Consultation",
    "Living",
    "Wardrobe",
    "Bathroom",
  ];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            Real Site Execution &amp; Proof of Trust
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Site <span className="gold-gradient-text">Work &amp; Handovers</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light">
            Authentic photographs of Akhir Chaudhary, our craftsmen, material consultations, and live site executions across Mumbai.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#D4AF37] text-[#050505] shadow-lg scale-105 font-bold"
                  : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Real Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-96 rounded-2xl overflow-hidden border border-white/15 bg-[#121212]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#D4AF37] text-[#050505] text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-[#D4AF37] font-mono">{item.location}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
