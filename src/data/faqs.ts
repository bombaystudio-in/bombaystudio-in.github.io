export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Cost & Payment" | "Process & Timeline" | "Materials";
}

export const FAQS_DATA: FaqItem[] = [
  {
    category: "Cost & Payment",
    question: "How does Bombay Studio charge for design & execution?",
    answer: "We offer transparent, fixed-price contracts. For design-only packages, we charge per sq.ft. For Turnkey projects, we provide an itemized BOQ (Bill of Quantities) with guaranteed zero hidden costs.",
  },
  {
    category: "Process & Timeline",
    question: "What is the typical project execution timeline?",
    answer: "A typical 2BHK takes 60 to 90 days from site approval, while 3BHKs and Luxury Villas take 90 to 150 days. We commit to a penalty-backed on-time handover policy.",
  },
  {
    category: "Cost & Payment",
    question: "What is the payment schedule for Turnkey Interior projects?",
    answer: "Payments are divided into milestone stages: 10% Booking & 3D Design, 30% Factory Material Order, 30% Site Masonry/Electrical completion, 25% Modular Cabinet Assembly, and 5% Final Quality Audit Handover.",
  },
  {
    category: "General",
    question: "Do you offer a post-completion warranty?",
    answer: "Yes! We provide a 10-Year Structural & Modular Warranty alongside complimentary 12-month routine maintenance checkups.",
  },
  {
    category: "Materials",
    question: "Which wood and hardware brands do you use?",
    answer: "We exclusively use Greenlam / Century 710 BWP Marine Plywood, Hafele / Blum soft-close German hardware, and Asian Paints PU / ICA Italian lacquer finishes.",
  },
  {
    category: "General",
    question: "Can Bombay Studio handle partial or full home renovation?",
    answer: "Absolutely. We specialize in gut renovations—demolishing old layouts, updating plumbing & electrical, soundproofing, and delivering brand-new luxury interiors.",
  },
  {
    category: "General",
    question: "Do you take on projects outside Mumbai?",
    answer: "Yes, we handle select luxury residential and hospitality projects across Thane, Navi Mumbai, Alibaug, Pune, Goa, and major Indian metro cities.",
  },
];
