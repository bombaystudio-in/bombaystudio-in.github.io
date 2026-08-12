export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "architecture",
    title: "Architecture",
    shortDesc: "Structural design, elevation, and spatial planning.",
    fullDesc: "Comprehensive architectural blueprints, facade designs, and structural planning crafted for modern Mumbai living.",
    iconName: "Building2",
    features: ["Conceptual Schematics", "Building Approvals", "Structural Engineering", "Facade Design"],
  },
  {
    id: "interior-design",
    title: "Interior Design",
    shortDesc: "Bespoke spatial aesthetics & moodboard creation.",
    fullDesc: "Bespoke spatial design tailoring color schemes, custom lighting, furniture layouts, and tactile material combinations.",
    iconName: "Compass",
    features: ["Space Planning", "Lighting Design", "Color & Texture Curation", "Custom Joinery"],
  },
  {
    id: "turnkey-interior",
    title: "Turnkey Interior",
    shortDesc: "End-to-end execution from design to final key handover.",
    fullDesc: "One single point of accountability covering procurement, craftsmanship, installation, quality audit, and handover.",
    iconName: "KeyRound",
    features: ["Single Point Contact", "Guaranteed Timeline", "Fixed Price Contract", "Post-Handover Warranty"],
  },
  {
    id: "vastu-design",
    title: "Vastu Architecture",
    shortDesc: "Holistic Vastu Shastra compliant spatial layouts.",
    fullDesc: "Integrating ancient Vastu principles for positive energy flow, directional entrance alignment, and bedroom orientation with modern aesthetics.",
    iconName: "Sun",
    features: ["Entrance Alignment", "Kitchen & Pooja Orientation", "5 Elements Balance", "Non-Demolition Remedies"],
  },
  {
    id: "renovation",
    title: "Renovation",
    shortDesc: "Transforming old spaces into ultra-modern havens.",
    fullDesc: "Gut renovations, structural alterations, electrical/plumbing overhauls, and contemporary visual upgrades.",
    iconName: "Hammer",
    features: ["Structural Retrofitting", "Plumbing & Electrical Overhaul", "Soundproofing", "Space Optimization"],
  },
  {
    id: "residential",
    title: "Residential",
    shortDesc: "Luxury apartments, penthouses & family homes.",
    fullDesc: "Designing warm, functional, and deeply personal living spaces crafted around your daily lifestyle and rituals.",
    iconName: "Home",
    features: ["2BHK / 3BHK / Penthouses", "Smart Home Integration", "Custom Storage", "Child & Pet Friendly"],
  },
  {
    id: "commercial",
    title: "Commercial",
    shortDesc: "High-impact office spaces, retail & corporate hubs.",
    fullDesc: "Designing high-productivity office hubs and striking commercial spaces that reflect brand identity.",
    iconName: "Briefcase",
    features: ["Ergonomic Workstations", "Acoustics & Lighting", "Brand Integration", "Compliance & Safety"],
  },
  {
    id: "furniture-design",
    title: "Furniture Design",
    shortDesc: "Custom handcrafted furniture, wardrobes & sofas.",
    fullDesc: "Bespoke handcrafted loose and fixed furniture manufactured in high-grade marine ply, solid teak, and brass.",
    iconName: "Armchair",
    features: ["Custom Modular Kitchens", "Walk-in Wardrobes", "Accent Chairs & Tables", "Premium Upholstery"],
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    shortDesc: "Hyper-realistic 8K renders before site execution.",
    fullDesc: "Photorealistic 3D renders and 360-degree virtual walkthroughs so you experience every detail before site work starts.",
    iconName: "Eye",
    features: ["8K Photorealistic Renderings", "360° VR Walkthrough", "Lighting Simulation", "Material Preview"],
  },
  {
    id: "site-supervision",
    title: "Site Supervision",
    shortDesc: "Daily quality checks and precision site control.",
    fullDesc: "Dedicated site engineers conducting daily millimetric checks, material verifications, and safety audits.",
    iconName: "ClipboardCheck",
    features: ["Daily Quality Reports", "Vendor Coordination", "Material Verification", "Milestone Tracking"],
  },
  {
    id: "pmc",
    title: "PMC (Project Management)",
    shortDesc: "Professional cost control, timeline & quality PMC.",
    fullDesc: "Project Management Consultancy for large-scale residences and commercial builds to ensure zero cost overruns.",
    iconName: "BarChart3",
    features: ["Budget Oversight", "Vendor Selection & Bidding", "Quality Assurance", "Timeline Guarantee"],
  },
];
