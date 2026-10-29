export interface FaqItem {
  question: string;
  answer: string;
  category: "Pricing & BOQ" | "Process & Timeline" | "Materials & Warranty" | "Civil & Approvals";
}

export const FAQS_DATA: FaqItem[] = [
  {
    category: "Pricing & BOQ",
    question: "What is the typical per-sq.ft. cost of turnkey interior design and execution in Mumbai?",
    answer:
      "Turnkey interior design and build execution in Mumbai typically ranges from ₹1,400 to ₹3,500+ per sq.ft. of carpet area depending on material specifications. Standard premium 2BHKs range from ₹14L to ₹18L, while luxury 3BHKs and 4BHKs featuring Italian marble, fluted veneer joinery, and smart automation range from ₹22L to ₹45L+. All projects receive an itemized, line-by-line quote before site work begins.",
  },
  {
    category: "Pricing & BOQ",
    question: "How does your itemized BOQ prevent mid-project price escalations?",
    answer:
      "The most common pain point in Mumbai interior execution is cost overrun. Bombay Studio eliminates this through our locked Bill of Quantities (BOQ). Every material grade, hardware brand, square footage, and rate is documented and contractually frozen before civil demolition begins. We adhere to a strict Zero Unforeseen Escalation commitment: the price you sign is the price you pay.",
  },
  {
    category: "Process & Timeline",
    question: "How long does a complete interior project take, and what is your penalty policy?",
    answer:
      "Average execution timelines are 60–75 working days for a 2BHK and 75–90 working days for a 3BHK or 4BHK apartment from 3D design freeze. Because delays cost you rent and double EMIs, our contracts include milestone penalty clauses: if we delay handover without client-approved scope changes, we compensate you contractually for each day of delay.",
  },
  {
    category: "Process & Timeline",
    question: "How can busy homeowners or NRI clients monitor daily site progress remotely?",
    answer:
      "You never have to run to the site. We establish a dedicated studio WhatsApp group and digital dashboard for your residence. Your dedicated project head uploads high-resolution 360° photos and milestone video walkthroughs daily, alongside weekly Gantt chart progress reports. Senior architectural decisions and material selections can be signed off digitally from anywhere in the world.",
  },
  {
    category: "Materials & Warranty",
    question: "How do you protect modular carpentry from Mumbai's humidity, monsoon moisture, and termites?",
    answer:
      "Mumbai's coastal air and heavy monsoons cause inferior commercial plywood to warp and rot within 24 months. We strictly mandate IS-710 certified Boiling Water Proof (BWP) calibrated marine plywood for all carcass cabinetry, anti-termite chemical soil & wall barriers, and water-resistant synthetic edge banding. Kitchen base units and vanity cabinets receive marine-grade stone or composite pedestals to guard against floor wash moisture.",
  },
  {
    category: "Materials & Warranty",
    question: "Which specific wood, hardware, and paint brands do you specify in your agreements?",
    answer:
      "We partner only with globally certified Tier-1 manufacturers: Greenlam / CenturyPly IS-710 BWP Marine Plywood, Austrian Blum (Tandembox & Aventos) and German Hafele soft-close architectural hardware, Saint-Gobain extra-clear glass, and Asian Paints Royale Aspira or Italian ICA zero-VOC polyurethane finishes. All manufacturer invoices and authenticity certificates are handed over to you on key handover.",
  },
  {
    category: "Civil & Approvals",
    question: "Do you handle civil demolition, plumbing, electrical, and society NOC approvals?",
    answer:
      "Yes. As a full-service design-build architecture studio, we handle complete single-source civil execution: layout reconfigurations, non-loadbearing wall demolitions, concealed copper wiring (Polycab/Finolex), PPR/CPVC plumbing overhaul, tile waterproofing, and gypsum false ceilings. We also assist you with housing society documentation, architectural drawings for society NOCs, and municipal compliance.",
  },
  {
    category: "Civil & Approvals",
    question: "Are your architectural layouts compliant with 5-element Vastu Shastra principles?",
    answer:
      "Yes. Principal Architect Ar. Aakhir Choudhary integrates scientific 5-element Vastu principles (Brahmasthan clearance, kitchen fire element placement in the South-East, master bed alignment, and natural daylight flow) directly into the preliminary architectural CAD space planning, harmonizing traditional energy balance with contemporary luxury aesthetics.",
  },
  {
    category: "Materials & Warranty",
    question: "What exactly is covered under your 10-Year Structural Warranty?",
    answer:
      "We provide a 10-Year Comprehensive Structural Warranty covering marine plywood delamination, core bonding failures, termite damage, and structural false ceiling integrity, alongside manufacturer warranties on all Blum/Hafele hardware. Every project also includes complimentary 6-month and 12-month post-handover routine maintenance checkups.",
  },
  {
    category: "Process & Timeline",
    question: "Do you execute commercial workspaces and private villas outside Mumbai?",
    answer:
      "Yes. While Mumbai is our primary operational base, we frequently execute private countryside villas in Alibaug and Lonavala, high-end residential duplexes in Thane and Navi Mumbai, and corporate executive headquarters across Western India with dedicated on-site project management squads.",
  },
];
