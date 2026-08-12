"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the typical cost of interior design and turnkey execution in Mumbai?",
    answer:
      "Turnkey interior design and build execution in Mumbai generally ranges between ₹1,350 to ₹3,500+ per sq.ft. of carpet area. Standard finishes start around ₹12L-15L for a 2BHK, while premium turnkey homes with Italian marble, custom joinery, and smart automation range from ₹18L to ₹35L+.",
  },
  {
    question: "How long does a full home interior project take to complete?",
    answer:
      "Our average handover timeline for a 2BHK apartment (1,000–1,200 sq.ft) is 60 to 75 working days from the date of final 3D design approval. Larger 3BHK and penthouse projects take 80 to 90 days. We back our timelines with contract penalty clauses.",
  },
  {
    question: "Do you handle civil work, electrical, plumbing, and structural alterations?",
    answer:
      "Yes. Bombay Studio is a complete turnkey design-build practice. We take 100% single-source responsibility covering civil demolition, waterproofing, concealed electrical rewiring, plumbing overhauls, false ceiling gypsum, custom modular cabinetry, and white-glove site cleaning.",
  },
  {
    question: "Are your layouts compliant with Vastu Shastra?",
    answer:
      "Yes. Our principal architectural directors integrate 5-element Vastu Shastra principles into initial floor plans, optimizing entrance alignments, kitchen orientation, and master bedroom headboards without compromising modern spatial aesthetics.",
  },
  {
    question: "What warranty and post-handover support do you provide?",
    answer:
      "We provide a 10-Year Structural & Hardware Warranty on all BWP marine plywood joinery, Blum/Hafele fittings, and false ceilings. Additionally, every project includes 1 year of complimentary post-handover maintenance visits.",
  },
  {
    question: "Will there be any unexpected price increases during site execution?",
    answer:
      "No. We operate on a fixed-price itemized BOQ (Bill of Quantities) contract. Once you approve the materials and design, the cost is locked. Zero surprise add-ons or hidden charges.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            Clear Answers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm font-light">
            Everything you need to know about timelines, budgets, material standards, and handover warranties in Mumbai.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#121212] border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-white text-base sm:text-lg pr-4">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 bg-[#D4AF37] text-[#050505]" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-white/5 font-light">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
