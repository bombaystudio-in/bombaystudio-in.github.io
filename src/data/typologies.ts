export interface TypologyData {
  slug: string;
  name: string;
  subtitle: string;
  heroBadge: string;
  description: string;
  longDescription: string;
  heroImage: string;
  scope: string[];
  materials: string[];
  deliverables: string[];
  matchingCategory?: "4BHK" | "3BHK" | "2BHK" | "All";
}

export const TYPOLOGIES_DATA: Record<string, TypologyData> = {
  "luxury-residences": {
    slug: "luxury-residences",
    name: "Luxury Residences",
    subtitle: "Bespoke Penthouses, Duplexes & Ultra-Prime Estates",
    heroBadge: "Turnkey Architecture & Build",
    description:
      "Full-scale bespoke architectural transformations for ultra-prime residences, penthouses, and expansive luxury duplexes across Mumbai.",
    longDescription:
      "Bombay Studio crafts distinguished, one-of-a-kind residences for discerning homeowners across South Mumbai, Bandra, and Juhu. From initial structural layout reconfigurations to custom Italian marble cladding, architectural lighting design, and imported joinery, our turnkey execution ensures complete peace of mind with guaranteed handover dates and locked BOQ pricing.",
    heroImage: "/projects/ashwini-dingare-4bhk-sewri/photo-01.jpg",
    scope: [
      "Custom Spatial Layout & Civil Restructuring",
      "Book-Matched Italian Marble & Hardwood Flooring",
      "Bespoke High-Gloss Veneer & Fluted Joinery",
      "Integrated Smart Home Automation & Concealed HVAC",
      "Luxury Master Suites with Walk-in Dressing Wardrobes",
      "Designer Chef Kitchens with German Blum Hardware",
    ],
    materials: [
      "BWP Marine Plywood IS:710 Grade",
      "Imported Italian Statuario & Michelangelo Marble",
      "Blum Tandembox & Aventos Lift Mechanisms",
      "Zero-VOC Low-Reflectance PU Coatings",
    ],
    deliverables: [
      "Comprehensive 3D Photorealistic Architectural Renders",
      "100% Itemized Fixed-Price BOQ Contract",
      "Dedicated Site Supervisor with Daily Photo Updates",
      "10-Year Comprehensive Structural Warranty",
    ],
    matchingCategory: "4BHK",
  },
  "modern-apartments": {
    slug: "modern-apartments",
    name: "Modern Apartments",
    subtitle: "2BHK, 3BHK & 4BHK Turnkey High-Rise Transformations",
    heroBadge: "High-Rise Urban Living",
    description:
      "Intelligent, space-optimized interior architecture tailored to modern high-rise living across Mumbai's prestigious residential towers.",
    longDescription:
      "Urban apartments require surgical spatial discipline. We eliminate dead zones, optimize natural daylight pathways, and engineer multi-functional storage solutions that feel light, airy, and uncluttered. From sea-facing apartments in Worli to modern towers in Powai, Andheri, and Kandivali, our turnkey process delivers fully finished homes ready for immediate handover.",
    heroImage: "/projects/ajinkya-kamble-4bhk-kandivali/photo-01.jpg",
    scope: [
      "Ergonomic Space Planning & Living-Dining Flow",
      "Modular Acoustic Partitioning & Concealed Storage",
      "Anti-Bacterial Quartz Countertop Kitchens",
      "Warm Layered Ambient & Task Lighting Layouts",
      "Children's Study Suites & Multi-Purpose Home Offices",
      "Precision Sliding Wardrobe Systems",
    ],
    materials: [
      "Termite-Resistant Calibrated Marine Core Boards",
      "Saint-Gobain Acoustic Double-Glazed Partitions",
      "Hafele Precision Soft-Close Hardware",
      "Durable Matte Acrylic Laminates",
    ],
    deliverables: [
      "Detailed Layout CAD Drawings & Section Elevations",
      "Milestone-Linked Handover Timeline with Penalty Clause",
      "Deep Clean Handover with Quality Audit Checklist",
      "5-Year Service & Joinery Warranty",
    ],
    matchingCategory: "3BHK",
  },
  "private-villas": {
    slug: "private-villas",
    name: "Private Villas",
    subtitle: "Exclusive Seaside Mansions & Countryside Retreats",
    heroBadge: "Architecture & Landscape Build",
    description:
      "Holistic architecture, interior design, and landscape integration for private estates across Mumbai, Alibaug, and Lonavala.",
    longDescription:
      "Building a private villa demands a seamless dialogue between indoor luxury and outdoor landscapes. Bombay Studio provides single-source design-build execution, coordinating everything from structural RCC foundations to infinity pool deck integration, tropical courtyard landscaping, and climate-resistant luxury finishes tailored to coastal humidity and monsoon resilience.",
    heroImage: "/projects/gautam-trivedi-3bhk-bandra/photo-01.jpg",
    scope: [
      "Ground-Up Architectural Master Planning",
      "Indoor-Outdoor Seamless Glass Pivot Transitions",
      "Monsoon-Resilient Exterior Cladding & Decking",
      "Central Courtyard & Private Swimming Pool Integration",
      "Bespoke High-Ceiling Lighting Installations",
      "Acoustic Private Cinema Rooms & Wine Lounges",
    ],
    materials: [
      "Weather-Resistant Teakwood & Composite Decking",
      "Thermal-Insulated Aluminum Glass Facades",
      "Natural Kota, Travertine, and Sandstone Paving",
      "Marine-Grade Anti-Corrosion Stainless Steel Fixings",
    ],
    deliverables: [
      "Civil & Structural Engineering Drawings",
      "Landscape & Irrigation Coordination",
      "Full Project Management & Turnkey Material Procurement",
      "10-Year Structural & Waterproofing Guarantee",
    ],
    matchingCategory: "All",
  },
  "corporate-spaces": {
    slug: "corporate-spaces",
    name: "Corporate Spaces",
    subtitle: "Acoustic Executive Suites & Forward-Thinking Workspaces",
    heroBadge: "Commercial Fitouts",
    description:
      "High-performance commercial workspaces, executive boardrooms, and flagship corporate headquarters engineered for productivity.",
    longDescription:
      "A well-designed workspace is a strategic asset. Bombay Studio delivers commercial fitouts that reinforce company culture, optimize employee ergonomics, and impress institutional clients. We specialize in soundproof executive cabins, acoustic meeting pods, integrated audiovisual conferencing infrastructure, and rapid overnight site execution to meet commercial occupancy deadlines.",
    heroImage: "/projects/dr-sunil-mhatre-3bhk-wadala/photo-01.jpg",
    scope: [
      "Acoustic Zoning & Sound-Dampening Wall Panels",
      "High-Tech Executive Boardrooms & VC Setup",
      "Ergonomic Workstation Clusters with Cable Management",
      "Reception Feature Walls with Backlit Brand Identity",
      "Breakout Cafeterias & Collaborative Open Lounges",
      "Fire-Rated Partitions & Emergency Compliance",
    ],
    materials: [
      "NRC 0.85+ Certified Acoustic Fabric Panels",
      "Commercial-Grade Anti-Static Carpet Tiles",
      "Scratch-Resistant Compact Laminate Tabletops",
      "Toughened Clear Glass Demountable Partitions",
    ],
    deliverables: [
      "Fire Safety & Municipal Compliance Sign-Offs",
      "Rapid-Track Execution Schedule to Minimize Rent Burn",
      "Comprehensive MEP (Electrical, HVAC, Networking) Documentation",
      "Post-Handover Annual Maintenance Support",
    ],
    matchingCategory: "All",
  },
  "retail-boutiques": {
    slug: "retail-boutiques",
    name: "Retail Boutiques",
    subtitle: "High-Impact Flagship Stores & Experiential Showrooms",
    heroBadge: "Experiential Retail Design",
    description:
      "Immersive customer journeys, dramatic architectural lighting, and bespoke display fixtures for premium retail brands.",
    longDescription:
      "In modern retail, physical spaces must deliver unforgettable brand experiences. Bombay Studio designs and builds flagship boutiques with precision-engineered customer pathways, high-CRI museum-grade lighting that showcases merchandise with authentic color rendering, and durable high-traffic finishes that retain their luxury sheen under heavy footfall.",
    heroImage: "/projects/vaibhav-beriwal-2bhk-malad/photo-01.jpg",
    scope: [
      "High-CRI 95+ Directional Accent Track Lighting",
      "Custom Brass, Fluted Glass & Stone Display Podiums",
      "Immersive Window Display Theatrics",
      "Secure Concealed Inventory Storage & POS Counters",
      "Luxury Fitting Rooms with Flattering Ambient Mirrors",
      "Durable High-Traffic Terrazzo & Microcement Flooring",
    ],
    materials: [
      "PVD-Coated Brass & Titanium Edge Trims",
      "Seamless Microcement & Terrazzo Flooring",
      "Opti-White Extra-Clear Display Glass",
      "Commercial LED Architectural Track Luminaires",
    ],
    deliverables: [
      "Visual Merchandising Sightline Blueprints",
      "Turnkey Shopfitting & Millwork Manufacture",
      "Strict Mall & High-Street Fitout Guideline Compliance",
      "Pre-Opening Snag Elimination & Deep Cleaning",
    ],
    matchingCategory: "All",
  },
  "hospitality-dining": {
    slug: "hospitality-dining",
    name: "Hospitality & Dining",
    subtitle: "Atmospheric Restaurants, Artisanal Cafes & Lounges",
    heroBadge: "Atmospheric Interiors",
    description:
      "Sensory-driven dining venues, cocktail bars, and boutique hospitality spaces designed for unforgettable guest experiences.",
    longDescription:
      "Great hospitality venues balance atmospheric emotion with operational rigor. Bombay Studio designs restaurants and cafes where lighting, acoustics, and seating ergonomics create instant warmth, while kitchen service pathways, bar ergonomics, and durable spill-resistant materials ensure high-volume operational efficiency evening after evening.",
    heroImage: "/projects/yash-jain-3bhk-charni-road/photo-01.jpg",
    scope: [
      "Mood-Controlled Dimmable Warm Lighting Architecture",
      "Heavy-Duty Stainless Steel Commercial Bar Counter Ergonomics",
      "Acoustic Ceiling Treatment to Control Din & Reverberation",
      "Bespoke Banquette Seating & Commercial-Grade Upholstery",
      "Hygienic Commercial Kitchen Flow Coordination",
      "Distinctive Entryway & Restroom Statement Features",
    ],
    materials: [
      "Stain-Proof Nano-Coated Leather & Velvet Upholstery",
      "Acoustic Perforated Wood Ceiling Baffles",
      "Heavy-Gauge Food-Grade SS 304 Bar Countertops",
      "Slip-Resistant Matte Floor Ceramics",
    ],
    deliverables: [
      "F&B Operational Flow & Seating Cover Optimization",
      "Kitchen Ventilation & Grease Trap Coordination",
      "Fast-Track Fitout to Accelerate Operational Launch",
      "Handover with Maintenance & Cleaning Protocols",
    ],
    matchingCategory: "All",
  },
};

export function getAllTypologySlugs(): string[] {
  return Object.keys(TYPOLOGIES_DATA);
}

export function getTypologyBySlug(slug: string): TypologyData | undefined {
  return TYPOLOGIES_DATA[slug];
}
