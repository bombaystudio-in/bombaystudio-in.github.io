"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";

interface FaqSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

const CATEGORIES = [
  "All",
  "Pricing & BOQ",
  "Process & Timeline",
  "Materials & Warranty",
  "Civil & Approvals",
] as const;

export default function FaqSection({ limit, showAllLink = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === selectedCategory);

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest font-semibold block mb-2">
            Clear Answers · Zero Ambiguity
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-[#A1A1AA] text-xs sm:text-sm font-light">
            Everything you need to know about timelines, budgets, material standards, and handover warranties in Mumbai.
          </p>
        </div>

        {/* Category Filter Pills (Shown only when viewing full list without limit) */}
        {!limit && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All"
                  ? FAQS_DATA.length
                  : FAQS_DATA.filter((f) => f.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#D4AF37] text-[#050505] shadow-md shadow-[#D4AF37]/20 font-bold"
                      : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10"
                  }`}
                >
                  <span>{cat}</span>
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
        )}

        {/* Accordion List */}
        <div className="space-y-3">
          {displayedFaqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
              >
                <div className="space-y-1 pr-3">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-semibold block">
                    {item.category}
                  </span>
                  <span className="font-serif font-bold text-white text-sm sm:text-base leading-snug block">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-[#181818] text-[#D4AF37] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 bg-[#D4AF37] text-[#050505]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-white/5 font-light">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link to Full Dedicated FAQ Page (When shown on homepage teaser) */}
        {showAllLink && (
          <div className="text-center pt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider px-7 py-3 rounded-full font-semibold shadow-md"
            >
              <span>View All Questions &amp; Answers ({FAQS_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
