export interface ServiceItem {
  id: string;
  title: string;
  shortDesc?: string;
  tagline: string;
  fullDesc: string;
  iconName: string;
  bgImage: string;
  features: string[];
  deliverables: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "architecture",
    title: "Architecture",
    tagline: "Structural design, elevation, and spatial master planning.",
    fullDesc: "Comprehensive architectural blueprints, facade designs, and structural planning crafted for modern Mumbai living. We fuse engineering precision with aesthetic grandeur to build lasting structures.",
    iconName: "Building2",
    bgImage: "/projects/ajinkya-kamble-4bhk-kandivali/photo-01.jpg",
    features: ["Conceptual Schematics", "Building Approvals", "Structural Engineering", "Facade Design"],
    deliverables: [
      { title: "Architectural Blueprints", desc: "CAD/BIM millimetric floor layouts, elevations, and structural cross-sections." },
      { title: "Statutory Approvals Support", desc: "Documentation coordination for MCGM, societies, and regulatory clearances." },
      { title: "Facade & Elevation Engineering", desc: "Contemporary exterior cladding, louvers, and weather-proof facade engineering." },
      { title: "Spatial Circulation Planning", desc: "Optimal movement flow maximizing natural ventilation, daylight, and usable carpet area." }
    ],
    processSteps: [
      { step: "01", title: "Site & Brief Analysis", desc: "Initial site inspection, solar orientation study, and homeowner spatial briefing." },
      { step: "02", title: "Concept & Schematics", desc: "Drafting 2D master floor plans, structural feasibility, and aesthetic volumes." },
      { step: "03", title: "Detailed Engineering", desc: "Complete MEP, structural loads, electrical conduit mapping, and civil execution sheets." },
      { step: "04", title: "Site Verification", desc: "Continuous on-site architectural audits during civil execution to ensure zero deviation." }
    ]
  },
  {
    id: "interior-design",
    title: "Interior Design",
    tagline: "Bespoke spatial aesthetics, custom palettes & moodboards.",
    fullDesc: "Bespoke spatial design tailoring color schemes, custom lighting, furniture layouts, and tactile material combinations. We create harmonious environments that balance timeless elegance with ergonomic everyday comfort.",
    iconName: "Compass",
    bgImage: "/projects/ashwini-dingare-4bhk-sewri/photo-01.jpg",
    features: ["Space Planning", "Lighting Design", "Color & Texture Curation", "Custom Joinery"],
    deliverables: [
      { title: "Concept Moodboards", desc: "Curated tactile material palettes, fabric swatches, stone samples, and veneer selections." },
      { title: "Custom Furniture Schematics", desc: "Bespoke millwork detailing for custom credenzas, consoles, and upholstered headboards." },
      { title: "Layered Lighting Architecture", desc: "Ambient, task, and accent lighting diagrams with specialized 2700K warm CCT mapping." },
      { title: "Styling & Art Procurement", desc: "Selection of curated artwork, bespoke brass hardware, rugs, and statement decor." }
    ],
    processSteps: [
      { step: "01", title: "Aesthetic Profiling", desc: "Understanding the client's design sensibilities, daily habits, and lifestyle preferences." },
      { step: "02", title: "Material & Mood Discovery", desc: "Reviewing physical samples of natural marble, fluted glass, metals, and designer veneers." },
      { step: "03", title: "Detailed Working Drawings", desc: "Producing precise carpentry, ceiling, wall paneling, and electrical drawings." },
      { step: "04", title: "Installation & Styling", desc: "Final placement of furnishings, curtains, lighting fixtures, and decor accents." }
    ]
  },
  {
    id: "turnkey-interior",
    title: "Turnkey Interior",
    tagline: "Single-source end-to-end execution from bare shell to key handover.",
    fullDesc: "One single point of accountability covering procurement, civil masonry, custom carpentry, plumbing, electricals, and final handover. With fixed budgets and guaranteed 45-day milestones, we eliminate contractor chaos.",
    iconName: "KeyRound",
    bgImage: "/projects/dr-sunil-mhatre-3bhk-wadala/photo-01.jpg",
    features: ["Single Point Contact", "Guaranteed Timeline", "Fixed Price Contract", "Post-Handover Warranty"],
    deliverables: [
      { title: "Fixed Price BoQ", desc: "Itemized Bill of Quantities with zero hidden fees and locked material grades." },
      { title: "Civil & Plumbing Execution", desc: "Masonry alterations, waterproofing, false ceiling, and concealed plumbing." },
      { title: "Factory-Finished Joinery", desc: "Bespoke modular kitchens and wardrobes assembled with premium European fittings." },
      { title: "Turnkey Key Handover", desc: "Deep cleaning, snag list resolution, and ready-to-move-in key handover." }
    ],
    processSteps: [
      { step: "01", title: "Fixed Price Proposal", desc: "Comprehensive site measurement and transparent itemized turnkey quote." },
      { step: "02", title: "Demolition & Civil Core", desc: "Structural adjustments, electrical piping, and waterproofing certified by engineers." },
      { step: "03", title: "Joinery & Surface Finishing", desc: "In-house carpentry, PU painting, wallpapering, Italian marble layment, and polish." },
      { step: "04", title: "100-Point Snag Audit", desc: "Rigorous quality check before final key handover and warranty issuance." }
    ]
  },
  {
    id: "vastu-design",
    title: "Vastu Architecture",
    tagline: "Holistic Vastu Shastra compliant spatial layouts.",
    fullDesc: "Integrating ancient Vedic Vastu Shastra principles for positive energy flow, directional entrance alignment, and bedroom orientation with modern luxury aesthetics. We provide remedies without unnecessary structural demolition.",
    iconName: "Sun",
    bgImage: "/projects/arunima-panchal-4bhk-mulund/photo-01.jpg",
    features: ["Entrance Alignment", "Kitchen & Pooja Orientation", "5 Elements Balance", "Non-Demolition Remedies"],
    deliverables: [
      { title: "Vastu Energy Grid Analysis", desc: "16-zone spatial chakra analysis assessing earth energies and directional alignment." },
      { title: "Pooja & Sanctuary Design", desc: "Traditional or contemporary sacred spaces aligned with North-East (Ishanya) vibrations." },
      { title: "Kitchen (Agni) Alignment", desc: "Fire element positioning in the South-East quadrant with optimal cooktop orientation." },
      { title: "Subtle Energy Remedies", desc: "Color therapy, copper wiring, and elemental balancing without tearing down load-bearing walls." }
    ],
    processSteps: [
      { step: "01", title: "Compass & Grid Audit", desc: "Precise digital compass audit to determine true magnetic north and zone coordinates." },
      { step: "02", title: "Zonal Allocation", desc: "Assigning master bedroom (South-West), kitchen (South-East), and living zones." },
      { step: "03", title: "Design Harmonization", desc: "Blending Vastu recommendations seamlessly into luxury minimalist aesthetics." },
      { step: "04", title: "Prana & Energy Verification", desc: "Final orientation verification prior to occupancy and griha pravesh." }
    ]
  },
  {
    id: "renovation",
    title: "Renovation",
    tagline: "Transforming aged residences into ultra-modern havens.",
    fullDesc: "Complete gut renovations, structural alterations, electrical/plumbing overhauls, and contemporary visual upgrades for older Mumbai apartments. We restore structural integrity while elevating spatial luxury.",
    iconName: "Hammer",
    bgImage: "/projects/nitin-pendbhaje-3bhk-goregaon/photo-01.jpg",
    features: ["Structural Retrofitting", "Plumbing & Electrical Overhaul", "Soundproofing", "Space Optimization"],
    deliverables: [
      { title: "Structural Assessment", desc: "Core-drilling and beam inspection to verify load capabilities before partition removal." },
      { title: "Complete Re-Piping & Re-Wiring", desc: "Replacement of corroded GI pipes with multi-layer CPVC and fire-retardant electrical wiring." },
      { title: "Acoustic & Thermal Insulation", desc: "Double-glazed acoustic windows and wall insulation reducing city noise by up to 80%." },
      { title: "Modern Spatial Reconfiguration", desc: "Breaking cramped layouts to create open-plan living, dining, and show kitchens." }
    ],
    processSteps: [
      { step: "01", title: "Integrity Inspection", desc: "Assessing dampness, seepage, old wiring, and society renovation bylaws." },
      { step: "02", title: "Dust-Free Demolition", desc: "Systematic dismantling with floor protection and scheduled debris removal." },
      { step: "03", title: "Concealed Infrastructure", desc: "Fresh plumbing, electrical circuits, drain slopes, and waterproofing warranties." },
      { step: "04", title: "Modern Surface Finishes", desc: "Large format vitrified tiles, marble cladding, and sleek false ceilings." }
    ]
  },
  {
    id: "residential",
    title: "Residential",
    tagline: "Turnkey luxury residential interiors for apartments, penthouses & villas.",
    fullDesc: "Designing warm, functional, and deeply personal living spaces crafted around your daily lifestyle and rituals. From sprawling South Mumbai sea-facing penthouses to modern suburban family homes.",
    iconName: "Home",
    bgImage: "/projects/gautam-trivedi-3bhk-bandra/photo-01.jpg",
    features: ["2BHK / 3BHK / Penthouses", "Smart Home Integration", "Custom Storage", "Child & Pet Friendly"],
    deliverables: [
      { title: "Custom Master Suites", desc: "Walk-in closets, upholstered accent walls, integrated reading lights, and private balconies." },
      { title: "Gourmet Modular Kitchens", desc: "German tandem hardware, quartz stone countertops, anti-scratch acrylics, and pantry units." },
      { title: "Entertaining Living Spaces", desc: "Acoustically treated TV feature walls, hidden bar units, and open-plan dining." },
      { title: "Smart Home Automation", desc: "App and voice-controlled mood lighting, motorized drapes, and smart security sensors." }
    ],
    processSteps: [
      { step: "01", title: "Family Lifestyle Discovery", desc: "Understanding the routines of every family member, storage needs, and guest entertaining habits." },
      { step: "02", title: "3D Visual Immersion", desc: "Realistic walk-through of the home before a single nail is hammered." },
      { step: "03", title: "Precision Turnkey Build", desc: "Carpentry, stone polishing, false ceiling, and electrical works supervised daily." },
      { step: "04", title: "Clean Handover", desc: "Deep cleaning, furniture polish, and handover of all equipment warranties." }
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    tagline: "High-impact corporate headquarters, retail stores & executive hubs.",
    fullDesc: "Designing high-productivity office hubs and striking commercial spaces that reflect brand identity, improve employee collaboration, and leave an indelible impression on clients and partners.",
    iconName: "Briefcase",
    bgImage: "/projects/amey-chavan-3bhk-andheri/photo-01.jpg",
    features: ["Ergonomic Workstations", "Acoustics & Lighting", "Brand Integration", "Compliance & Safety"],
    deliverables: [
      { title: "Executive Boardrooms", desc: "Smart video conferencing integration, acoustic wall paneling, and motorized presentation screens." },
      { title: "Ergonomic Open Desking", desc: "Cable-managed modular workstations with ergonomic task seating and green breakout zones." },
      { title: "Reception & Experience Center", desc: "Backlit brand logos, stone reception counters, and visitor lounges." },
      { title: "HVAC & Fire Safety Compliance", desc: "Smoke detection, sprinkler layout, and balanced CFM airflow distribution." }
    ],
    processSteps: [
      { step: "01", title: "Capacity & Density Study", desc: "Evaluating headcount growth, meeting room ratios, and privacy requirements." },
      { step: "02", title: "Bespoke Branding & Layout", desc: "Integrating corporate identity into physical architectural spaces." },
      { step: "03", title: "Rapid Turnaround Execution", desc: "Shift-based site execution to minimize commercial rent downtime." },
      { step: "04", title: "Compliance Sign-Off", desc: "Handover with certified fire, electrical, and HVAC safety documentation." }
    ]
  },
  {
    id: "furniture-design",
    title: "Furniture Design",
    tagline: "Custom handcrafted furniture, walk-in wardrobes & bespoke millwork.",
    fullDesc: "Bespoke handcrafted loose and fixed furniture manufactured in high-grade marine ply, solid teak, brass accents, and fine upholstery. Built to exact millimetric dimensions for maximum functional utility.",
    iconName: "Armchair",
    bgImage: "/projects/jayant-joshi-2bhk-vileparle/photo-01.jpg",
    features: ["Custom Modular Kitchens", "Walk-in Wardrobes", "Accent Chairs & Tables", "Premium Upholstery"],
    deliverables: [
      { title: "Custom Walk-in Closets", desc: "Glass-fronted display wardrobes with integrated warm LED profiles and jewelry organizers." },
      { title: "Bespoke Dining Sets", desc: "Italian marble or solid teak tabletops supported by custom-cast metal bases." },
      { title: "Concealed Storage Joinery", desc: "Flush push-to-open cabinets blending seamlessly into wall paneling." },
      { title: "Designer Accent Seating", desc: "Custom armchairs, ottomans, and daybeds upholstered in Belgian velvets or leather." }
    ],
    processSteps: [
      { step: "01", title: "Dimension & Ergonomics Mapping", desc: "Millimetric measurement of available alcoves and ergonomic human-scale profiling." },
      { step: "02", title: "Material & Hardware Selection", desc: "Selecting Blum/Hettich hinges, solid brass handles, and certified BWR marine ply." },
      { step: "03", title: "Factory Craftsmanship", desc: "Precision CNC cutting, edge banding, veneer pressing, and PU finishing in dust-free booths." },
      { step: "04", title: "Seamless Site Installation", desc: "Professional installation with zero gaps and smooth soft-closing alignments." }
    ]
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    tagline: "Hyper-realistic 8K architectural renders and virtual walkthroughs.",
    fullDesc: "Photorealistic 3D renders and 360-degree virtual walkthroughs so you experience every detail—lighting, textures, clearances, and shadows—before site work starts. Eliminates rework and guesswork entirely.",
    iconName: "Eye",
    bgImage: "/projects/ujesh-shetty-3bhk-hiranandani-powai/photo-01.jpg",
    features: ["8K Photorealistic Renderings", "360° VR Walkthrough", "Lighting Simulation", "Material Preview"],
    deliverables: [
      { title: "8K Still Renders", desc: "High-resolution renders capturing daytime natural sunlight and evening artificial lighting moods." },
      { title: "360° Interactive VR Tour", desc: "Immersive panoramic views allowing clients to virtually stand in their future living room." },
      { title: "Material Variant Testing", desc: "Side-by-side comparison of different marble shades, veneer tones, and paint swatches." },
      { title: "Video Walkthrough Animations", desc: "Cinematic camera path animations showcasing architectural spatial flow." }
    ],
    processSteps: [
      { step: "01", title: "3D CAD Modeling", desc: "Converting 2D floor plans into precise 3D spatial geometry." },
      { step: "02", title: "Texture & PBR Mapping", desc: "Applying physically accurate surface reflections, grain textures, and translucency." },
      { step: "03", title: "Sun & Artificial Lighting Simulation", desc: "Calibrating lumen output, color temperature (Kelvin), and Mumbai sun path." },
      { step: "04", title: "Client Approval & Sign-Off", desc: "Fine-tuning details until the client is 100% satisfied before ordering materials." }
    ]
  },
  {
    id: "site-supervision",
    title: "Site Supervision",
    tagline: "Daily millimetric quality checks, safety audits & engineering supervision.",
    fullDesc: "Dedicated site engineers conducting daily millimetric checks, material verifications, and safety audits. We ensure contractor execution adheres strictly to architectural drawings with zero compromises on quality.",
    iconName: "ClipboardCheck",
    bgImage: "/projects/vaibhav-beriwal-2bhk-malad/photo-01.jpg",
    features: ["Daily Quality Reports", "Vendor Coordination", "Material Verification", "Milestone Tracking"],
    deliverables: [
      { title: "Daily Site Progress Logs", desc: "Time-stamped photo logs and checklist updates shared directly via client dashboard." },
      { title: "Material Inward Inspection", desc: "Verifying brand authenticity, ISI certifications, and batch consistency upon delivery." },
      { title: "Laser Level Alignments", desc: "Laser checks for wall plumb lines, tile leveling, and ceiling horizontal planes." },
      { title: "Society & Vendor Coordination", desc: "Strict adherence to building association working hours, lift usage, and safety protocols." }
    ],
    processSteps: [
      { step: "01", title: "Daily Morning Briefing", desc: "Assigning daily work targets to carpenters, electricians, and painters." },
      { step: "02", title: "Mid-Day In-Progress Inspection", desc: "Checking concealed wiring, conduit joints, and glue curing." },
      { step: "03", title: "End-of-Day Snag Audit", desc: "Immediate correction of any deviation from architectural working drawings." },
      { step: "04", title: "Milestone Certification", desc: "Quality sign-off before releasing vendor stage payments." }
    ]
  },
  {
    id: "pmc",
    title: "PMC (Project Management)",
    tagline: "Professional cost control, timeline guarantees & vendor governance.",
    fullDesc: "Project Management Consultancy for large-scale residences and commercial builds to ensure zero cost overruns, strict vendor milestone tracking, and rigorous quality assurance from start to finish.",
    iconName: "BarChart3",
    bgImage: "/projects/amit-ranka-3bhk-vileparle/photo-01.jpg",
    features: ["Budget Oversight", "Vendor Selection & Bidding", "Quality Assurance", "Timeline Guarantee"],
    deliverables: [
      { title: "Master Gantt Timeline", desc: "Day-by-day critical path method (CPM) schedule tracking all overlapping trades." },
      { title: "Competitive Tender Bidding", desc: "Independent vendor comparative statements to negotiate best market prices." },
      { title: "Cash Flow & Payment Audits", desc: "Verifying actual on-site progress before approving contractor billings." },
      { title: "Contractual Snag & Closeout", desc: "Comprehensive defect liability tracking and final closeout documentation." }
    ],
    processSteps: [
      { step: "01", title: "Project Scope & Budget Baseline", desc: "Freezing scope of work, procurement limits, and critical handover dates." },
      { step: "02", title: "Vendor Onboarding & Contracts", desc: "Binding vendors to performance penalties, warranties, and quality benchmarks." },
      { step: "03", title: "Real-Time Tracking & Risk Mitigation", desc: "Weekly risk reviews to prevent material supply bottlenecks and delays." },
      { step: "04", title: "Project Handover & Closeout Audit", desc: "Delivering as-built drawings, warranty cards, and final settlement reports." }
    ]
  }
];

export function getServiceById(id: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.id === id);
}

export function getAllServiceIds(): string[] {
  return SERVICES_DATA.map((s) => s.id);
}
