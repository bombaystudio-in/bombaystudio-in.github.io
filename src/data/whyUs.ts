export interface WhyUsPillarData {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  summary: string;
  detailedDescription: string;
  bgImage: string;
  standards: string[];
  clientGuarantees: string[];
  metrics: {
    stat: string;
    label: string;
  }[];
}

export const WHY_US_DATA: Record<string, WhyUsPillarData> = {
  "spatial-flow": {
    slug: "spatial-flow",
    title: "Spaces You'll Never Want to Leave",
    badge: "Architectural Ergonomics",
    subtitle: "Custom-Tailored Spatial Flow, Sunlight Pathways & Daily Joy",
    summary:
      "Every square inch of your home is simulated for natural daylight, air cross-ventilation, and effortless movement.",
    detailedDescription:
      "At Bombay Studio, spatial design begins with behavioral psychology. How your morning routine unfolds, how sound travels between private study rooms and living spaces, and how natural light floods your kitchen at sunrise dictate our architectural floor plan. We don't just decorate rooms; we eliminate visual and physical friction, creating serene spaces that enhance emotional well-being and daily relaxation.",
    bgImage: "/projects/ashwini-dingare-4bhk-sewri/photo-02.jpg",
    standards: [
      "Dynamic Daylight & Solar Orientation Modeling",
      "Ergonomic Sightline & Sightway Planning",
      "Concealed Storage Architecture to Eliminate Clutter",
      "Acoustic Separation Between Social & Private Resting Zones",
      "Bespoke High-Ceiling Optical Spatial Enlargement",
    ],
    clientGuarantees: [
      "Custom 3D Spatial Walkthrough Before Civil Demolition",
      "Zero Unused or Dead Corners in Final Layout",
      "Optimized Furniture Scale Tailored to Room Volume",
    ],
    metrics: [
      { stat: "100%", label: "Custom Architecture" },
      { stat: "0", label: "Wasted Square Feet" },
      { stat: "3D", label: "Pre-Build Virtual Walkthrough" },
    ],
  },
  "luxury-materials": {
    slug: "luxury-materials",
    title: "Handpicked Luxury Materials",
    badge: "Certified Specification",
    subtitle: "Authentic IS:710 Marine Plywood, Italian Marble & Blum Hardware",
    summary:
      "We source only authentic, lab-certified materials built to withstand Mumbai's humid coastal climate.",
    detailedDescription:
      "The true luxury of a home lies beneath the surface finishes. Cheap commercial plywood, uncalibrated substrates, and counterfeit hardware cause cabinetry sagging, moisture warping, and termite infestation within 36 months. Bombay Studio strictly enforces IS-710 boiling-water-proof (BWP) calibrated marine plywood, certified imported Italian marble with crack-prevention mesh backing, and authentic German Blum and Hafele hardware backed by manufacturer warranties.",
    bgImage: "/projects/ajinkya-kamble-4bhk-kandivali/photo-03.jpg",
    standards: [
      "100% Calibrated BWP Marine Plywood IS:710 Grade",
      "Authentic Austrian Blum Tandembox Drawer Systems",
      "Handpicked Italian Marble Slabs with Fiber-Mesh Reinforcement",
      "Zero-VOC Low-Reflectance PU Polyurethane Finishes",
      "Marine-Grade Stainless Steel Screws & Fasteners",
    ],
    clientGuarantees: [
      "Material Lab Certifications & Invoices Handed Over to Client",
      "Pre-Installation Material Verification on Site with Client",
      "100% Replacement Warranty Against Manufacturing Flaws",
    ],
    metrics: [
      { stat: "IS:710", label: "Marine Plywood Standard" },
      { stat: "100%", label: "Authentic Hardware" },
      { stat: "0-VOC", label: "Healthy Low-Emission Finishes" },
    ],
  },
  "price-transparency": {
    slug: "price-transparency",
    title: "Total Price Transparency",
    badge: "Fixed BOQ Contract",
    subtitle: "Itemized Contracts with Zero Surprises or Cost Escalations",
    summary:
      "Locked itemized Bill of Quantities (BOQ) with guaranteed fixed budgets and zero unexpected cost creep.",
    detailedDescription:
      "The biggest nightmare in Mumbai interior design is the budget overrun—contractors quoting low upfront, then hitting clients with 40% in 'unforeseen extras' midway through construction. Bombay Studio operates on radical transparency: before hammering a single nail, you receive a line-by-line, itemized BOQ detailing brand specifications, quantities, and fixed rates. Our contract locks your price with zero post-signing price escalations.",
    bgImage: "/projects/gautam-trivedi-3bhk-bandra/photo-03.jpg",
    standards: [
      "Line-by-Line Itemized Bill of Quantities (BOQ)",
      "Brand-Specified Material Commitments in Writing",
      "Fixed Rate Guarantee with Zero Mid-Project Escalations",
      "Transparent Milestone-Linked Staged Payment Structure",
      "Clear Digital Accounting Ledgers Accessible Anytime",
    ],
    clientGuarantees: [
      "Zero Surprise Bills Policy Written Into Contract",
      "Any Scope Additions Require Written Pre-Approval",
      "100% Refundable Deposit on Transparent Terms",
    ],
    metrics: [
      { stat: "100%", label: "Itemized Transparency" },
      { stat: "0%", label: "Hidden Cost Escalations" },
      { stat: "Fixed", label: "Budget Contract Lock" },
    ],
  },
  "on-time-handover": {
    slug: "on-time-handover",
    title: "Move In On Schedule",
    badge: "Handover Guarantee",
    subtitle: "Milestone-Backed Schedules with Written Penalty Commitments",
    summary:
      "Strict milestone schedules with financial penalty-backed handover dates written directly into your agreement.",
    detailedDescription:
      "Delayed handovers cost homeowners money in rent, double EMIs, and immense emotional stress. Bombay Studio treats handover dates as sacred contractual commitments. We deploy proprietary Gantt milestone tracking, dedicated full-time site engineers, and parallel off-site modular factory fabrication to compress site timelines and guarantee move-in day precision.",
    bgImage: "/projects/dr-sunil-mhatre-3bhk-wadala/photo-05.jpg",
    standards: [
      "Detailed Day-by-Day Critical Path Project Schedule",
      "Parallel Factory Fabrication to Reduce Site Noise & Time",
      "Weekly Milestone Audits with Progress Photographic Proof",
      "Dedicated On-Site Project Head Coordinating All Trades",
      "Pre-Handover 14-Day Snag-List Resolution Buffer",
    ],
    clientGuarantees: [
      "Penalty-Backed Handover Clause Written into Legal Contract",
      "Guaranteed Move-In Date Provided Before Civil Kickoff",
      "Comprehensive Deep Clean Complete Before Handover",
    ],
    metrics: [
      { stat: "98.4%", label: "On-Time Handover Rate" },
      { stat: "Daily", label: "Site Progress Audits" },
      { stat: "14 Days", label: "Pre-Move Snag Elimination Buffer" },
    ],
  },
  "stress-free-turnkey": {
    slug: "stress-free-turnkey",
    title: "Move In Without the Stress",
    badge: "Single-Source Turnkey",
    subtitle: "One Team, One Point of Contact, Zero Contractor Coordination",
    summary:
      "From initial civil demolition to final styling and key handover, we manage every trade under one accountable roof.",
    detailedDescription:
      "Managing separate carpenters, electricians, plumbers, marble polishers, and painters leads to blame-shifting and endless headaches. With Bombay Studio's turnkey model, you deal with exactly one accountable team. We take full legal, architectural, and financial responsibility for the entire execution chain—delivering your finished home ready for you to turn the key and unpack.",
    bgImage: "/projects/jayant-joshi-2bhk-vileparle/photo-02.jpg",
    standards: [
      "Single-Source Complete Legal & Architectural Accountability",
      "In-House Master Carpenters, Electricians, Plumbers & Polishers",
      "Strict Quality Checklists Across 120 Inspection Checkpoints",
      "Daily WhatsApp Progress Summaries with High-Res Photos",
      "Key Handover with Complete As-Built Electrical & Plumbing Schematics",
    ],
    clientGuarantees: [
      "Zero Running Around Sourcing Materials or Managing Workers",
      "Single Dedicated Project Lead for All Inquiries",
      "Turnkey Complete: Light Bulbs to Curtains Installed",
    ],
    metrics: [
      { stat: "1", label: "Accountable Point of Contact" },
      { stat: "120+", label: "Rigorous Quality Checkpoints" },
      { stat: "0", label: "Client Site Running Around" },
    ],
  },
  "founder-oversight": {
    slug: "founder-oversight",
    title: "Direct Founder Oversight",
    badge: "Principal Architect",
    subtitle: "Ar. Aakhir Choudhary Personally Inspects Every Project Site",
    summary:
      "Unlike corporate agencies that hand you to junior interns, your project is personally guided by our principal architect.",
    detailedDescription:
      "Big corporate design aggregator firms win clients with charismatic sales pitches, then immediately hand off the actual site execution to inexperienced interns or unvetted freelance contractors. At Bombay Studio, Principal Architect Ar. Aakhir Choudhary personally leads design conceptualization, reviews structural junctions, and conducts periodic on-site quality inspections at every critical milestone.",
    bgImage: "/projects/vaibhav-beriwal-2bhk-malad/photo-04.jpg",
    standards: [
      "Direct Design Conceptualization by Ar. Aakhir Choudhary",
      "Personal Milestone Site Audits by the Principal Architect",
      "Direct Architectural Consultation at Every Design Review",
      "Architectural Vastu & Ergonomic Verification by the Founder",
      "Direct WhatsApp Hotline to Studio Leadership",
    ],
    clientGuarantees: [
      "Your Home is Never Outsourced to Third-Party Contractors",
      "Founder Signs Off Personally on Final Handover Snag-Sheet",
      "Immediate Escalation Resolution Directly with the Founder",
    ],
    metrics: [
      { stat: "100%", label: "Founder-Led Architecture" },
      { stat: "30+ Yrs", label: "Civil Pedigree Backing" },
      { stat: "COA", label: "Registered Licensed Architect" },
    ],
  },
  "decade-long-warranty": {
    slug: "decade-long-warranty",
    title: "Decade-Long Peace of Mind",
    badge: "10-Year Warranty",
    subtitle: "Comprehensive 10-Year Structural & Waterproofing Guarantee",
    summary:
      "Our relationship does not end at handover. We back our craftsmanship with a legal 10-year structural warranty.",
    detailedDescription:
      "Interior work must endure monsoon humidity, daily usage, and time. We are so confident in our structural carpentry, marine core substrates, and waterproofing methodologies that we provide a written 10-year warranty against structural defects, termite infestation, and joinery delamination, alongside complimentary post-handover periodic maintenance checkups.",
    bgImage: "/projects/yash-jain-3bhk-charni-road/photo-03.jpg",
    standards: [
      "10-Year Written Structural Warranty Certificate",
      "Complimentary 6-Month & 12-Month Post-Move Tune-Up Inspections",
      "Priority 48-Hour Studio Maintenance Response Protocol",
      "Annual Health Check for Hinges, Channels & Marble Polish",
      "Comprehensive As-Built Service Schematics Provided on Handover",
    ],
    clientGuarantees: [
      "Official Stamped Warranty Document Issued on Key Handover",
      "Free Replacement of Defective Hardware Under Warranty Period",
      "Studio Support Helpline for Any Maintenance Query",
    ],
    metrics: [
      { stat: "10 Yrs", label: "Structural Warranty" },
      { stat: "48 Hrs", label: "Priority Service Response" },
      { stat: "Free", label: "Annual Post-Move Tune-Up" },
    ],
  },
};

export function getAllWhyUsSlugs(): string[] {
  return Object.keys(WHY_US_DATA);
}

export function getWhyUsBySlug(slug: string): WhyUsPillarData | undefined {
  return WHY_US_DATA[slug];
}
