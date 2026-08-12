"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Building, Home, Store, Utensils, Stethoscope, Scissors, Briefcase } from "lucide-react";

export default function ProjectCategories() {
  const categories = [
    { name: "Luxury Homes", icon: Home, count: "18+ Completed", desc: "Multi-storey duplexes and high-end penthouses across Worli & Bandra." },
    { name: "Apartments", icon: Building, count: "24+ Completed", desc: "2BHK & 3BHK high-rise homes at Kalpataru, Lodha & Oberoi developments." },
    { name: "Villas", icon: Home, count: "8+ Completed", desc: "Sprawling private seaside estates in Juhu, Alibaug, Lonavala & Goa." },
    { name: "Office", icon: Briefcase, count: "12+ Completed", desc: "Acoustic corporate HQs & tech hubs in BKC & Lower Parel." },
    { name: "Retail", icon: Store, count: "9+ Completed", desc: "Boutique fashion showrooms & flagship jewellery stores." },
    { name: "Restaurants", icon: Utensils, count: "7+ Completed", desc: "Fine dining bistros, speakeasy bars & artisanal cafes in Bandra & Colaba." },
    { name: "Clinic", icon: Stethoscope, count: "6+ Completed", desc: "Biophilic dermatology & aesthetics centers in Khar & Santacruz." },
    { name: "Salon", icon: Scissors, count: "5+ Completed", desc: "Luxury wellness spas & high-concept hair studios." },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            Domain Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Project <span className="gold-gradient-text">Categories</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light">
            Dedicated design teams tailored specifically for residential, commercial, hospitality, and healthcare sectors.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#D4AF37] bg-[#1C1C1C] px-2.5 py-1 rounded-full border border-white/10">
                    {cat.count}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[#A1A1AA] text-xs font-light leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] group-hover:text-white transition-colors"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
